/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphbackDate: Date;
  GraphbackObjectID: string;
  GraphbackTime: string;
};

export type BooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
};

export type CreateDayInput = {
  date?: Maybe<Scalars['GraphbackDate']>;
};

export type CreateDayScheduleInput = {
  date?: Maybe<Scalars['GraphbackDate']>;
  startTime?: Maybe<Scalars['GraphbackTime']>;
  endTime?: Maybe<Scalars['GraphbackTime']>;
  slotLength?: Maybe<Scalars['GraphbackTime']>;
};

export type CreateTimeSlotInput = {
  startTime?: Maybe<Scalars['GraphbackTime']>;
  endTime?: Maybe<Scalars['GraphbackTime']>;
  note?: Maybe<Scalars['String']>;
  free?: Maybe<Scalars['Boolean']>;
  clientName?: Maybe<Scalars['String']>;
  dateId?: Maybe<Scalars['GraphbackObjectID']>;
};

/**  @model  */
export type Day = {
  __typename?: 'Day';
  _id: Scalars['GraphbackObjectID'];
  date?: Maybe<Scalars['GraphbackDate']>;
  /**
   * @oneToMany(field: 'date', key: 'dateId')
   * @oneToMany(field: 'date')
   */
  slots: Array<Maybe<TimeSlot>>;
};


/**  @model  */
export type DaySlotsArgs = {
  filter?: Maybe<TimeSlotFilter>;
};

export type DayFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  date?: Maybe<GraphbackDateInput>;
  and?: Maybe<Array<DayFilter>>;
  or?: Maybe<Array<DayFilter>>;
  not?: Maybe<DayFilter>;
};

export type DayResultList = {
  __typename?: 'DayResultList';
  items: Array<Maybe<Day>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type DaySubscriptionFilter = {
  and?: Maybe<Array<DaySubscriptionFilter>>;
  or?: Maybe<Array<DaySubscriptionFilter>>;
  not?: Maybe<DaySubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  date?: Maybe<GraphbackDateInput>;
};


export type GraphbackDateInput = {
  ne?: Maybe<Scalars['GraphbackDate']>;
  eq?: Maybe<Scalars['GraphbackDate']>;
  le?: Maybe<Scalars['GraphbackDate']>;
  lt?: Maybe<Scalars['GraphbackDate']>;
  ge?: Maybe<Scalars['GraphbackDate']>;
  gt?: Maybe<Scalars['GraphbackDate']>;
  in?: Maybe<Array<Scalars['GraphbackDate']>>;
  between?: Maybe<Array<Scalars['GraphbackDate']>>;
};


export type GraphbackObjectIdInput = {
  ne?: Maybe<Scalars['GraphbackObjectID']>;
  eq?: Maybe<Scalars['GraphbackObjectID']>;
  le?: Maybe<Scalars['GraphbackObjectID']>;
  lt?: Maybe<Scalars['GraphbackObjectID']>;
  ge?: Maybe<Scalars['GraphbackObjectID']>;
  gt?: Maybe<Scalars['GraphbackObjectID']>;
  in?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  between?: Maybe<Array<Scalars['GraphbackObjectID']>>;
};


export type GraphbackTimeInput = {
  ne?: Maybe<Scalars['GraphbackTime']>;
  eq?: Maybe<Scalars['GraphbackTime']>;
  le?: Maybe<Scalars['GraphbackTime']>;
  lt?: Maybe<Scalars['GraphbackTime']>;
  ge?: Maybe<Scalars['GraphbackTime']>;
  gt?: Maybe<Scalars['GraphbackTime']>;
  in?: Maybe<Array<Scalars['GraphbackTime']>>;
  between?: Maybe<Array<Scalars['GraphbackTime']>>;
};

export type MutateDayInput = {
  _id: Scalars['GraphbackObjectID'];
  date?: Maybe<Scalars['GraphbackDate']>;
};

export type MutateTimeSlotInput = {
  _id: Scalars['GraphbackObjectID'];
  startTime?: Maybe<Scalars['GraphbackTime']>;
  endTime?: Maybe<Scalars['GraphbackTime']>;
  note?: Maybe<Scalars['String']>;
  free?: Maybe<Scalars['Boolean']>;
  clientName?: Maybe<Scalars['String']>;
  dateId?: Maybe<Scalars['GraphbackObjectID']>;
};

/**
 * type Query {
 *   getWeekSchedule(date: GraphbackDate): [Day]
 *   getDaySchedule(date: GraphbackDate): Day
 * }
 */
export type Mutation = {
  __typename?: 'Mutation';
  createDaySchedule?: Maybe<Day>;
  createTimeSlot?: Maybe<TimeSlot>;
  updateTimeSlot?: Maybe<TimeSlot>;
  deleteTimeSlot?: Maybe<TimeSlot>;
  createDay?: Maybe<Day>;
  updateDay?: Maybe<Day>;
  deleteDay?: Maybe<Day>;
};


/**
 * type Query {
 *   getWeekSchedule(date: GraphbackDate): [Day]
 *   getDaySchedule(date: GraphbackDate): Day
 * }
 */
export type MutationCreateDayScheduleArgs = {
  input: CreateDayScheduleInput;
};


/**
 * type Query {
 *   getWeekSchedule(date: GraphbackDate): [Day]
 *   getDaySchedule(date: GraphbackDate): Day
 * }
 */
export type MutationCreateTimeSlotArgs = {
  input: CreateTimeSlotInput;
};


/**
 * type Query {
 *   getWeekSchedule(date: GraphbackDate): [Day]
 *   getDaySchedule(date: GraphbackDate): Day
 * }
 */
export type MutationUpdateTimeSlotArgs = {
  input: MutateTimeSlotInput;
};


/**
 * type Query {
 *   getWeekSchedule(date: GraphbackDate): [Day]
 *   getDaySchedule(date: GraphbackDate): Day
 * }
 */
export type MutationDeleteTimeSlotArgs = {
  input: MutateTimeSlotInput;
};


/**
 * type Query {
 *   getWeekSchedule(date: GraphbackDate): [Day]
 *   getDaySchedule(date: GraphbackDate): Day
 * }
 */
export type MutationCreateDayArgs = {
  input: CreateDayInput;
};


/**
 * type Query {
 *   getWeekSchedule(date: GraphbackDate): [Day]
 *   getDaySchedule(date: GraphbackDate): Day
 * }
 */
export type MutationUpdateDayArgs = {
  input: MutateDayInput;
};


/**
 * type Query {
 *   getWeekSchedule(date: GraphbackDate): [Day]
 *   getDaySchedule(date: GraphbackDate): Day
 * }
 */
export type MutationDeleteDayArgs = {
  input: MutateDayInput;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getTimeSlot?: Maybe<TimeSlot>;
  findTimeSlots: TimeSlotResultList;
  getDay?: Maybe<Day>;
  findDays: DayResultList;
};


export type QueryGetTimeSlotArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindTimeSlotsArgs = {
  filter?: Maybe<TimeSlotFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetDayArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindDaysArgs = {
  filter?: Maybe<DayFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newTimeSlot: TimeSlot;
  updatedTimeSlot: TimeSlot;
  deletedTimeSlot: TimeSlot;
  newDay: Day;
  updatedDay: Day;
  deletedDay: Day;
};


export type SubscriptionNewTimeSlotArgs = {
  filter?: Maybe<TimeSlotSubscriptionFilter>;
};


export type SubscriptionUpdatedTimeSlotArgs = {
  filter?: Maybe<TimeSlotSubscriptionFilter>;
};


export type SubscriptionDeletedTimeSlotArgs = {
  filter?: Maybe<TimeSlotSubscriptionFilter>;
};


export type SubscriptionNewDayArgs = {
  filter?: Maybe<DaySubscriptionFilter>;
};


export type SubscriptionUpdatedDayArgs = {
  filter?: Maybe<DaySubscriptionFilter>;
};


export type SubscriptionDeletedDayArgs = {
  filter?: Maybe<DaySubscriptionFilter>;
};

/**  @model  */
export type TimeSlot = {
  __typename?: 'TimeSlot';
  _id: Scalars['GraphbackObjectID'];
  startTime?: Maybe<Scalars['GraphbackTime']>;
  endTime?: Maybe<Scalars['GraphbackTime']>;
  note?: Maybe<Scalars['String']>;
  free?: Maybe<Scalars['Boolean']>;
  clientName?: Maybe<Scalars['String']>;
  /** @manyToOne(field: 'slots', key: 'dateId') */
  date?: Maybe<Day>;
};

export type TimeSlotFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  startTime?: Maybe<GraphbackTimeInput>;
  endTime?: Maybe<GraphbackTimeInput>;
  note?: Maybe<StringInput>;
  free?: Maybe<BooleanInput>;
  clientName?: Maybe<StringInput>;
  dateId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<TimeSlotFilter>>;
  or?: Maybe<Array<TimeSlotFilter>>;
  not?: Maybe<TimeSlotFilter>;
};

export type TimeSlotResultList = {
  __typename?: 'TimeSlotResultList';
  items: Array<Maybe<TimeSlot>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type TimeSlotSubscriptionFilter = {
  and?: Maybe<Array<TimeSlotSubscriptionFilter>>;
  or?: Maybe<Array<TimeSlotSubscriptionFilter>>;
  not?: Maybe<TimeSlotSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  startTime?: Maybe<GraphbackTimeInput>;
  endTime?: Maybe<GraphbackTimeInput>;
  note?: Maybe<StringInput>;
  free?: Maybe<BooleanInput>;
  clientName?: Maybe<StringInput>;
};
