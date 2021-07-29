import * as DateFn from "date-fns";
import getDatesInMonth from "./getDatesInMonth";
import { Calendar } from "../types";

const createCalendar = (date: Date): Calendar => {
  const dates = getDatesInMonth(date);

  return {
    month: DateFn.format(date, "MMMM"),
    year: DateFn.getYear(date),
    dates,
    firstDayOfMonth: dates[0].getDay(),
  };
};

export default createCalendar;
