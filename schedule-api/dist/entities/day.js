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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayModel = exports.Day = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const object_id_scalar_1 = require("../object-id.scalar");
const timeSlot_1 = require("./timeSlot");
let Day = class Day {
};
__decorate([
    type_graphql_1.Field(type => object_id_scalar_1.ObjectIdScalar),
    __metadata("design:type", Object)
], Day.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Date)
], Day.prototype, "date", void 0);
__decorate([
    type_graphql_1.Field(type => [timeSlot_1.TimeSlot]),
    typegoose_1.prop({ type: () => timeSlot_1.TimeSlot, required: true, default: [] }),
    __metadata("design:type", Array)
], Day.prototype, "slots", void 0);
Day = __decorate([
    type_graphql_1.ObjectType()
], Day);
exports.Day = Day;
exports.DayModel = typegoose_1.getModelForClass(Day);
//# sourceMappingURL=day.js.map