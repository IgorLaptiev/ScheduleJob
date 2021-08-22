import { Field, ObjectType } from "type-graphql";
import {
    getModelForClass,
    prop as Property,
} from "@typegoose/typegoose";

@ObjectType()
export class TimeSlot {
    @Field({nullable: true})
    @Property()
    startTime?: string;

    @Field({nullable: true})
    @Property()
    endTime?: string;

    @Field({nullable: true})
    @Property()
    note?: string;

    @Field({nullable: true})
    @Property()
    isOccupied?: boolean;
}

