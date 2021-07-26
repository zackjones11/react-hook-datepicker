declare type UseDatepicker = {
  currentDate?: Date;
};

declare type UseDatepickerReturn = {
  selectedDate?: Date;
  calendar: Calendar;
  getDateProps: (
    props: GetDateProps
  ) => { onClick: () => void; isSelected: boolean; isHovered: boolean };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
