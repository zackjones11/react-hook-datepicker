import * as React from "react";
import * as DateFn from "date-fns";
import { UseDateRangePicker, UseDateRangePickerReturn } from "../../types";

const useDateRangePicker = (
  props: UseDateRangePicker
): UseDateRangePickerReturn => {
  const { currentRange } = props;
  const [visibleRange, setVisibleRange] = React.useState({
    start: currentRange.start,
    end: DateFn.addMonths(currentRange.end, 1),
  });

  return {
    calendars: [
      {
        month: DateFn.format(visibleRange.start, "MMMM"),
        year: DateFn.getYear(visibleRange.start),
        dates: [
          ...Array(DateFn.getDaysInMonth(visibleRange.start)),
        ].map((_, i) => DateFn.setDate(visibleRange.start, i + 1)),
      },
      {
        month: DateFn.format(visibleRange.end, "MMMM"),
        year: DateFn.getYear(visibleRange.end),
        dates: [...Array(DateFn.getDaysInMonth(visibleRange.end))].map((_, i) =>
          DateFn.setDate(visibleRange.end, i + 1)
        ),
      },
    ],
  };
};

export default useDateRangePicker;
