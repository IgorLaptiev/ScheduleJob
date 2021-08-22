"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayResolver = void 0;
const type_graphql_1 = require("type-graphql");
const day_1 = require("../entities/day");
let DayResolver = class DayResolver {
    constructor() {
        this.timeSlots = [
            { startTime: '10:00', endTime: '11:00' },
            { startTime: '11:00', endTime: '12:00' },
            { startTime: '13:00', endTime: '14:00' },
            { startTime: '14:00', endTime: '15:00' },
            { startTime: '16:00', endTime: '17:00' },
            { startTime: '17:00', endTime: '18:00' }
        ];
        /* @Query(returns => [Day])
        recipes(@Args() { skip, take }: DayArgs) {
          return this.dayService.findAll({ skip, take });
        } */
    }
    /*     @Query(returns => Day)
        async dayById(@Arg("id") id: string) {
          const recipe = await this.dayService.findById(id);
          if (recipe === undefined) {
            throw new DayNotFoundError();
          }
          return recipe;
        }
     */
    day(date) {
        return day_1.DayModel.findOne({ date: date });
    }
    week(date) {
        const monday = this.getMonday(date);
        return day_1.DayModel
            .find({ $and: [{ date: { $gte: monday } }, { date: { $lte: this.addDays(monday, 7) } }] })
            .sort({ date: 1 });
    }
    async addDay(date) {
        const day = new day_1.DayModel({ date });
        day.slots = [...this.timeSlots];
        await day.save();
        return day;
    }
    async initWeek(date) {
        const monday = this.getMonday(date);
        for (let i = 0; i < 7; i++) {
            let newDate = this.addDays(monday, i);
            let dt = await day_1.DayModel.findOne({ date: newDate });
            if (!dt) {
                const day = new day_1.DayModel({ date: newDate });
                day.slots = [...this.timeSlots];
                await day.save();
            }
        }
        return day_1.DayModel
            .find({ $and: [{ date: { $gte: monday } }, { date: { $lte: this.addDays(monday, 7) } }] })
            .sort({ date: 1 });
    }
    async occupy(date, slot, note) {
        const day = await day_1.DayModel.findOne({ date: date });
        if (!!day) {
            const time = day.slots[slot];
            if (!!time && !time.isOccupied) {
                time.isOccupied = true;
                time.note = note;
            }
            await day.save();
            return day;
        }
        return null;
    }
    getMonday(date) {
        const day = date.getDay();
        const diff = date.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(date.setDate(diff));
    }
    addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
};
__decorate([
    type_graphql_1.Query(() => day_1.Day, { nullable: true }),
    __param(0, type_graphql_1.Arg("date")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], DayResolver.prototype, "day", null);
__decorate([
    type_graphql_1.Query(() => [day_1.Day], { nullable: true }),
    __param(0, type_graphql_1.Arg("date")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], DayResolver.prototype, "week", null);
__decorate([
    type_graphql_1.Mutation(() => day_1.Day),
    __param(0, type_graphql_1.Arg("date")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], DayResolver.prototype, "addDay", null);
__decorate([
    type_graphql_1.Mutation(() => [day_1.Day]),
    __param(0, type_graphql_1.Arg("date")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], DayResolver.prototype, "initWeek", null);
__decorate([
    type_graphql_1.Mutation(() => day_1.Day, { nullable: true }),
    __param(0, type_graphql_1.Arg("date")),
    __param(1, type_graphql_1.Arg("time")),
    __param(2, type_graphql_1.Arg("note")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, Number, String]),
    __metadata("design:returntype", Promise)
], DayResolver.prototype, "occupy", null);
DayResolver = __decorate([
    type_graphql_1.Resolver(day_1.Day)
], DayResolver);
exports.DayResolver = DayResolver;
//# sourceMappingURL=scheduleResolvers.js.map