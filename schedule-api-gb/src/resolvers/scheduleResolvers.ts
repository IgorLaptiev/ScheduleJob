import { IResolvers } from "apollo-server-express";
import { GraphQLResolveInfo } from "graphql";
import { GraphQLContext } from "../customContext";
import { Day, TimeSlot } from "../generated-types";

export const scheduleResolvers: IResolvers = {
    Mutation: {
        createDaySchedule: async (parent: any, args: any, context: GraphQLContext, info: GraphQLResolveInfo) => {
            const day = await context.graphback.Day.create( <Day> {
                date: args.input.date,
            },  context, info );
            await context.graphback.TimeSlot.create(<TimeSlot>{ 
                date: day,
                startTime: "10:00:00z",
                endTime: "11:00:00z",
                free: true
            },  context, info )
            return day;
      } 
    }
  }
  