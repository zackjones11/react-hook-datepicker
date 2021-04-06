import { GetDateProps, Calendar } from "./common";

export type UseDatepicker = {
  currentDate: Date;
};

export type UseDatepickerReturn = {
  selectedDate: Date;
  calendar: Calendar;
  getDateProps: (
    props: GetDateProps
  ) => { onClick: () => void; isSelected: boolean };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
