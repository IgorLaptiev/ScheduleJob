import { GraphbackContext, GraphbackCRUDService } from 'graphback';
import { Day, TimeSlot } from './generated-types';

/**
 * Overriding context to add GraphQL-Code-Generator typings to Graphback services
 */
export interface GraphQLContext extends GraphbackContext {
  graphback: {
    Day: GraphbackCRUDService<Day>
    TimeSlot: GraphbackCRUDService<TimeSlot>
  }
}
