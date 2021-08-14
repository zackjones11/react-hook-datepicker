import * as DateFn from "date-fns";

const getDatesInMonth = (date: Date): Date[] => {
  const daysInMonth = DateFn.getDaysInMonth(date);
  return [...Array(daysInMonth)].map((_, i) => DateFn.setDate(date, i + 1));
};

export default getDatesInMonth;
