import { GetDayProps, Calendar } from "./common";

export type UseDatepicker = {
  currentDate: Date;
};

export type UseDatepickerReturn = {
  selectedDate: Date;
  calendar: Calendar;
  getDayProps: (
    props: GetDayProps
  ) => { onClick: () => void; isSelected: boolean };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
