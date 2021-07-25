import * as DateFn from "date-fns";

const isBeforeDate = (date1?: Date, date2?: Date): boolean => {
  if (!date1 || !date2) {
    return false;
  }

  return DateFn.differenceInCalendarDays(date1, date2) < 0;
};

export default isBeforeDate;
