import * as React from "react";
import {
  isSameDate,
  isBeforeDate,
  isAfterDate,
  addMonth,
  subMonth,
  createCalendar,
} from "../../utils";
import {
  DateRange,
  UseDateRangePicker,
  UseDateRangePickerReturn,
} from "../../types";

const useDateRangePicker = (
  props?: UseDateRangePicker
): UseDateRangePickerReturn => {
  const [visibleRange, setVisibleRange] = React.useState({
    start: props?.currentRange?.start || new Date(),
    end: addMonth(props?.currentRange?.end || new Date()),
  });
  const [selectedRange, setSelectedRange] = React.useState(props?.currentRange);
  const [hoveredRange, setHoveredRange] = React.useState<
    DateRange | undefined
  >();

  const handleDateHovered = (date: Date) => {
    setHoveredRange({ start: selectedRange?.start, end: date });
  };

  const handleDateClicked = (date: Date) => {
    const isAfterStartDate = isAfterDate(date, selectedRange?.start);
    const stateKey = isAfterStartDate ? "end" : "start";

    const nextRange = {
      ...selectedRange,
      [stateKey]: date,
    };

    setHoveredRange(nextRange);
    setSelectedRange(nextRange);
  };

  const getDateProps = ({ date }: { date: Date }) => {
    const isSelected =
      isSameDate(selectedRange?.start, date) ||
      isSameDate(selectedRange?.end, date);

    const isInRange =
      isBeforeDate(selectedRange?.start || hoveredRange?.start, date) &&
      isAfterDate(selectedRange?.end || hoveredRange?.end, date);

    const isHovered = isSameDate(hoveredRange?.end, date);

    return {
      onClick: () => handleDateClicked(date),
      onPointerOver: () => handleDateHovered(date),
      isSelected,
      isInRange,
      isHovered,
    };
  };

  const getNextMonthButtonProps = () => {
    const start = addMonth(visibleRange.start);
    const end = addMonth(visibleRange.end);

    return {
      onClick: () => setVisibleRange({ start, end }),
    };
  };

  const getPrevMonthButtonProps = () => {
    const start = subMonth(visibleRange.start);
    const end = subMonth(visibleRange.end);

    return {
      onClick: () => setVisibleRange({ start, end }),
    };
  };

  return {
    selectedRange,
    calendars: [
      createCalendar(visibleRange.start),
      createCalendar(visibleRange.end),
    ],
    getDateProps,
    getNextMonthButtonProps,
    getPrevMonthButtonProps,
  };
};

export default useDateRangePicker;
