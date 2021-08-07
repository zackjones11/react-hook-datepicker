import * as DateFn from "date-fns";
import getDatesInMonth from "./getDatesInMonth";
import { Calendar, View } from "../types";

const createCalendar = (date: Date, view?: View): Calendar => {
  const dates = getDatesInMonth(date);

  return {
    view: view || null,
    month: DateFn.format(date, "MMMM"),
    year: DateFn.getYear(date),
    dates,
    firstDayOfMonth: dates[0].getDay() || 1,
  };
};

export default createCalendar;
