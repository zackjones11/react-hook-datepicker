declare type DateRange = { start?: Date; end?: Date };

declare type UseDateRangePicker = {
  currentRange?: DateRange;
};

declare type UseDateRangePickerReturn = {
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
