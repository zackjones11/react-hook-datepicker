import { Calendar, GetDateProps } from "../../types";

export type DateRange = { start?: Date; end?: Date };

export type UseDateRangePicker = {
  value: DateRange;
  onChange: (value: DateRange) => void;
  disabledWhen?: (date: Date) => boolean;
};

export type UseDateRangePickerReturn = {
  calendars: Calendar[];
  getDateProps: (
    props: GetDateProps
  ) => {
    onClick: () => void;
    selected: boolean;
    disabled: boolean;
    inRange: boolean;
  };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
