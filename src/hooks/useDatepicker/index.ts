import * as DateFn from "date-fns";
import { UseDatepicker, UseDatepickerReturn } from "../../types";

const useDatepicker = (props: UseDatepicker): UseDatepickerReturn => {
  const daysInMonth = DateFn.getDaysInMonth(props.currentDate);

  return {
    calendar: [...Array(daysInMonth)].map((_, i) => i + 1),
  };
};

export default useDatepicker;
