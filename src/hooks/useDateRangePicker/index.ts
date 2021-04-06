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

  const handleDateClicked = (date: Date) => {
    const isAfterStartDate =
      selectedRange.start &&
      DateFn.differenceInCalendarDays(date, selectedRange.start) > 0;

    if (isAfterStartDate) {
      setSelectedRange({
        ...selectedRange,
        end: date,
      });
      return;
    }

    setSelectedRange({
      ...selectedRange,
      start: date,
    });
  };

  const getDateProps = ({ date }: { date: Date }) => {
    const isSelected =
      DateFn.differenceInCalendarDays(selectedRange.start, date) === 0 ||
      DateFn.differenceInCalendarDays(selectedRange.end, date) === 0;

    const isInRange =
      selectedRange.start &&
      DateFn.differenceInCalendarDays(selectedRange.start, date) < 0 &&
      DateFn.differenceInCalendarDays(selectedRange.end, date) > 0;

    return {
      onClick: () => handleDateClicked(date),
      isSelected,
      isInRange,
    };
  };

  const getNextMonthButtonProps = () => {
    const start = DateFn.addMonths(visibleRange.start, 1);
    const end = DateFn.addMonths(visibleRange.end, 1);

    return {
      onClick: () => setVisibleRange({ start, end }),
    };
  };

  const getPrevMonthButtonProps = () => {
    const start = DateFn.subMonths(visibleRange.start, 1);
    const end = DateFn.subMonths(visibleRange.end, 1);

    return {
      onClick: () => setVisibleRange({ start, end }),
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
    getNextMonthButtonProps,
    getPrevMonthButtonProps,
  };
};

export default useDateRangePicker;
