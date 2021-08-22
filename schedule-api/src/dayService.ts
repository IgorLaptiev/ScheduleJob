import { Service } from "typedi";
import { Day } from "./entities";
import { DayModel } from "./entities/day";

@Service({ global: true })
export class DayService {
    findById(id: string): Day {
        return new Day();
    }

    async find(date: Date): Promise<Day> {
        return await DayModel.findOne({ date: date}).exec();
    }

}