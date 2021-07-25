import { Calendar, GetDateProps } from "./common";

export type DateRange = { start?: Date; end?: Date };

export type UseDateRangePicker = {
  currentRange?: DateRange;
};

export type UseDateRangePickerReturn = {
  selectedRange?: DateRange;
  calendars: Calendar[];
  getDateProps: (
    props: GetDateProps
  ) => {
    onClick: () => void;
    isHovered: boolean;
    isSelected: boolean;
    isInRange: boolean;
  };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
