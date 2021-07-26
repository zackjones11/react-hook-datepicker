import * as React from "react";
import {
  isSameDate,
  isBeforeDate,
  isAfterDate,
  addMonth,
  subMonth,
  createCalendar,
} from "../../utils";

const useDateRangePicker = (
  props: UseDateRangePicker
): UseDateRangePickerReturn => {
  const [visibleRange, setVisibleRange] = React.useState({
    start: props.value?.start || new Date(),
    end: addMonth(props.value?.end || new Date()),
  });
  const [hoveredRange, setHoveredRange] = React.useState<
    DateRange | undefined
  >();

  const handleDateHovered = (date: Date) => {
    setHoveredRange({ start: props.value.start, end: date });
  };

  const handleDateClicked = (date: Date) => {
    const isAfterStartDate = isAfterDate(date, props.value.start);
    const stateKey = isAfterStartDate ? "end" : "start";

    const nextRange = {
      ...props.value,
      [stateKey]: date,
    };

    setHoveredRange(nextRange);
    props.onChange(nextRange);
  };

  const getDateProps = ({ date }: { date: Date }) => {
    const isSelected =
      isSameDate(props.value.start, date) || isSameDate(props.value.end, date);

    const isInRange =
      isBeforeDate(props.value.start || hoveredRange?.start, date) &&
      isAfterDate(props.value.end || hoveredRange?.end, date);

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
