declare type UseDatePicker = {
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
};

declare type UseDatePickerReturn = {
  calendar: Calendar;
  getDateProps: (
    props: GetDateProps
  ) => { onClick: () => void; isSelected: boolean; isHovered: boolean };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
