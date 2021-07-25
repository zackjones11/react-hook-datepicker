import * as DateFn from "date-fns";

const subMonth = (date: Date): Date => {
  return DateFn.subMonths(date, 1);
};

export default subMonth;
