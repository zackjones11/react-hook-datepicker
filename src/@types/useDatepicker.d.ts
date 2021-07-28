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
    selected: boolean;
    disabled: boolean;
  };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
