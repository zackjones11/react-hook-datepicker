import * as DateFn from "date-fns";
import getDatesInMonth from "./getDatesInMonth";
import { Calendar } from "../types";

const createCalendar = (date: Date): Calendar => {
  return {
    month: DateFn.format(date, "MMMM"),
    year: DateFn.getYear(date),
    dates: getDatesInMonth(date),
  };
};

export default createCalendar;
