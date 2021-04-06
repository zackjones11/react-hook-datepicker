import * as DateFn from "date-fns";

const isAfterDate = (date1: Date, date2: Date): boolean => {
  return DateFn.differenceInCalendarDays(date1, date2) > 0;
};

export default isAfterDate;
