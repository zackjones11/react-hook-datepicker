import * as DateFn from "date-fns";

const addMonth = (date: Date): Date => {
  return DateFn.addMonths(date, 1);
};

export default addMonth;
