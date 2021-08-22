import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { Day, DayModel } from "../entities/day";
import { TimeSlot } from "../entities/timeSlot";

@Resolver(Day)
export class DayResolver {
    private timeSlots: TimeSlot[] = [
        { startTime: '10:00', endTime: '11:00' },
        { startTime: '11:00', endTime: '12:00' },
        { startTime: '13:00', endTime: '14:00' },
        { startTime: '14:00', endTime: '15:00' },
        { startTime: '16:00', endTime: '17:00' },
        { startTime: '17:00', endTime: '18:00' }
    ];

    /*     @Query(returns => Day)
        async dayById(@Arg("id") id: string) {
          const recipe = await this.dayService.findById(id);
          if (recipe === undefined) {
            throw new DayNotFoundError();
          }
          return recipe;
        }
     */
    @Query(() => Day, { nullable: true })
    day(@Arg("date") date: Date) {
        return DayModel.findOne({ date: date });
    }

    @Query(() => [Day], { nullable: true })
    week(@Arg("date") date: Date) {
        const monday = this.getMonday(date);
        return DayModel
            .find( {$and : [{ date: {$gte: monday}}, { date: {$lte: this.addDays(monday, 7)}}]})
            .sort( { date : 1 });
    }

    @Mutation(() => Day)
    async addDay(@Arg("date") date: Date): Promise<Day> {
        const day = new DayModel({ date } as Day);
        day.slots = [...this.timeSlots];
        await day.save();
        return day;
    }

    @Mutation(() => [Day])
    async initWeek(@Arg("date") date: Date): Promise<Day[]> {
        const monday = this.getMonday(date);
        for (let i = 0; i < 7; i++) {
            let newDate = this.addDays(monday, i);
            let dt = await DayModel.findOne({ date: newDate });
            if(!dt) {
                const day = new DayModel({ date: newDate } as Day);
                day.slots = [...this.timeSlots];
                await day.save();
            }
        }
        return DayModel
            .find( {$and : [{ date: {$gte: monday}}, { date: {$lte: this.addDays(monday, 7)}}]})
            .sort( { date : 1 });
    }

    @Mutation(() => Day, { nullable: true })
    async occupy(
        @Arg("date") date: Date, 
        @Arg("time") slot:number,
        @Arg("note") note?: string): Promise<Day> {
        const day = await DayModel.findOne({ date: date });
        if (!!day) {
            const time = <TimeSlot>day.slots[slot];
            if(!!time && !time.isOccupied ) {
                time.isOccupied = true;
                time.note = note;
            }
            await day.save();
            return day;
        }
        return null;
    }

    private getMonday(date: Date): Date {
        const day = date.getDay();
        const diff = date.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
        return new Date(date.setDate(diff));
    }

    private addDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    /* @Query(returns => [Day])
    recipes(@Args() { skip, take }: DayArgs) {
      return this.dayService.findAll({ skip, take });
    } */
}

