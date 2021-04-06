import * as DateFn from "date-fns";

const isBeforeDate = (date1: Date, date2: Date): boolean => {
  return DateFn.differenceInCalendarDays(date1, date2) < 0;
};

export default isBeforeDate;
