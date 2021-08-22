import { Field, ID, ObjectType } from "type-graphql";
import {
    getModelForClass,
    prop as Property,
    Ref,
} from "@typegoose/typegoose";
import { ObjectId, Schema, Types } from "mongoose";
import { ObjectIdScalar } from "../object-id.scalar";
import { TimeSlot } from "./timeSlot";

@ObjectType()
export class Day {

    @Field(type => ObjectIdScalar)
    readonly _id: ObjectId;

    @Field()
    @Property({ required: true })
    public date: Date;

    @Field(type => [TimeSlot])
    @Property({ type: () => TimeSlot, required: true, default:[]})
    public slots!: TimeSlot[];
}

export const DayModel = getModelForClass(Day);  

