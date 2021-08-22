"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayService = void 0;
const typedi_1 = require("typedi");
const entities_1 = require("./entities");
const day_1 = require("./entities/day");
let DayService = class DayService {
    findById(id) {
        return new entities_1.Day();
    }
    async find(date) {
        return await day_1.DayModel.findOne({ date: date }).exec();
    }
};
DayService = __decorate([
    typedi_1.Service({ global: true })
], DayService);
exports.DayService = DayService;
//# sourceMappingURL=dayService.js.map