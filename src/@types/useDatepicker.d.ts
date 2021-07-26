declare type UseDatepicker = {
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
};

declare type UseDatepickerReturn = {
  calendar: Calendar;
  getDateProps: (
    props: GetDateProps
  ) => { onClick: () => void; isSelected: boolean; isHovered: boolean };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
