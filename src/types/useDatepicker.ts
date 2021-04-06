export type UseDatepicker = {
  currentDate: Date;
};

export type GetDayProps = {
  day: number;
};

export type UseDatepickerReturn = {
  calendar: number[];
  getDayProps: (
    props: GetDayProps
  ) => { onClick: () => void; isSelected: boolean };
};
