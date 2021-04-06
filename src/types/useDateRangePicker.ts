export type DateRange = { start: Date; end: Date };

export type UseDateRangePicker = {
  currentRange: DateRange;
};

export type UseDateRangePickerReturn = {
  calendars: Array<{ dates: Date[]; month: string; year: number }>;
};
