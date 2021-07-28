declare type UseDatePicker = {
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
  disabledWhen?: (date: Date) => boolean;
};

declare type UseDatePickerReturn = {
  calendar: Calendar;
  getDateProps: (
    props: GetDateProps
  ) => {
    onClick: () => void;
    isSelected: boolean;
    disabled: boolean;
    isHovered: boolean;
  };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
