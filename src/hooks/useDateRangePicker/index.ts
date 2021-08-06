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
  UseDateRangePicker,
  UseDateRangePickerReturn,
  DateRange,
} from "./types";

const useDateRangePicker = (
  props: UseDateRangePicker
): UseDateRangePickerReturn => {
  const [visibleRange, setVisibleRange] = React.useState({
    start: props.value?.start || new Date(),
    end: addMonth(props.value?.end || new Date()),
  });
  const [preSelectedRange, setPreSelectedRange] = React.useState<
    DateRange | undefined
  >();

  const handleDateHover = (date: Date) => {
    setPreSelectedRange({ start: props.value.start, end: date });
  };

  const handleDateClicked = (date: Date) => {
    const isAfterStartDate = isAfterDate(date, props.value.start);
    const stateKey = isAfterStartDate ? "end" : "start";

    const nextRange = {
      ...props.value,
      [stateKey]: date,
    };

    setPreSelectedRange(nextRange);
    props.onChange(nextRange);
  };

  const getDateProps = ({ date }: { date: Date }) => {
    const selected =
      isSameDate(props.value.start, date) || isSameDate(props.value.end, date);

    const disabled = props.disabledWhen?.(date) || false;

    const inRange =
      isBeforeDate(props.value.start || preSelectedRange?.start, date) &&
      isAfterDate(props.value.end || preSelectedRange?.end, date);

    const onClick = () => {
      if (!disabled) {
        handleDateClicked(date);
      }
    };

    return {
      onClick,
      onPointerOver: () => handleDateHover(date),
      selected,
      disabled,
      inRange,
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
      createCalendar(visibleRange.start, "start"),
      createCalendar(visibleRange.end, "end"),
    ],
    getDateProps,
    getNextMonthButtonProps,
    getPrevMonthButtonProps,
  };
};

export default useDateRangePicker;
