import { Calendar } from "./common";

export type DateRange = { start: Date; end: Date };

export type UseDateRangePicker = {
  currentRange: DateRange;
};

export type UseDateRangePickerReturn = {
  calendars: Calendar[];
};
