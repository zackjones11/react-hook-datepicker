export type GetDateProps = {
  date: Date;
};

export type View = "start" | "end";

export type Calendar = {
  view?: View;
  dates: Date[];
  month: string;
  year: number;
  firstDayOfMonth: number;
};
