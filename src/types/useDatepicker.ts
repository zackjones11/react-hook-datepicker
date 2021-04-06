export type UseDatepicker = {
  currentDate: Date;
};

export type GetDayProps = {
  day: number;
};

export type UseDatepickerReturn = {
  selectedDate: Date;
  visibleMonth: string;
  visibleYear: string;
  calendar: number[];
  getDayProps: (
    props: GetDayProps
  ) => { onClick: () => void; isSelected: boolean };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
