import * as React from "react";
import * as DateFn from "date-fns";
import { getDatesInMonth } from "../../utils";
import { UseDateRangePicker, UseDateRangePickerReturn } from "../../types";

const useDateRangePicker = (
  props: UseDateRangePicker
): UseDateRangePickerReturn => {
  const { currentRange } = props;
  const [visibleRange, setVisibleRange] = React.useState({
    start: currentRange.start,
    end: DateFn.addMonths(currentRange.end, 1),
  });
  const [selectedRange, setSelectedRange] = React.useState(currentRange);

  const getDateProps = ({ date }: { date: Date }) => {
    const isSelected =
      DateFn.differenceInCalendarDays(selectedRange.start, date) === 0 ||
      DateFn.differenceInCalendarDays(selectedRange.end, date) === 0;

    const isInRange =
      selectedRange.start &&
      DateFn.differenceInCalendarDays(selectedRange.start, date) < 0 &&
      DateFn.differenceInCalendarDays(selectedRange.end, date) > 0;

    return {
      onClick: () => console.log({ date }),
      isSelected,
      isInRange,
    };
  };

  return {
    selectedRange,
    calendars: [
      {
        month: DateFn.format(visibleRange.start, "MMMM"),
        year: DateFn.getYear(visibleRange.start),
        dates: getDatesInMonth(visibleRange.start),
      },
      {
        month: DateFn.format(visibleRange.end, "MMMM"),
        year: DateFn.getYear(visibleRange.end),
        dates: getDatesInMonth(visibleRange.end),
      },
    ],
    getDateProps,
  };
};

export default useDateRangePicker;
