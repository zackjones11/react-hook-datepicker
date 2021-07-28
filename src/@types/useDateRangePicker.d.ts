declare type DateRange = { start?: Date; end?: Date };

declare type UseDateRangePicker = {
  value: DateRange;
  onChange: (value: DateRange) => void;
  disabledWhen?: (date: Date) => boolean;
};

declare type UseDateRangePickerReturn = {
  calendars: Calendar[];
  getDateProps: (
    props: GetDateProps
  ) => {
    onClick: () => void;
    isHovered: boolean;
    isSelected: boolean;
    disabled: boolean;
    isInRange: boolean;
  };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
