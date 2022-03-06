import * as React from "react";
import * as DateFn from "date-fns";
import { createCalendar, isSameDate } from "../../utils";
import { UseDatePicker, UseDatePickerReturn } from "./types";
import { GetDateProps } from "../../types";
import { useShortcut } from "../useShortcut";

const useDatePicker = (props: UseDatePicker): UseDatePickerReturn => {
  const [visibleDate, setVisibleDate] = React.useState(
    props.value || new Date()
  );

  const { handler } = useShortcut();

  const getDateProps = ({ date }: GetDateProps) => {
    const disabled = props.disabledWhen?.(date) || false;

    const onClick = () => {
      if (!disabled) {
        props.onChange(date);
        setVisibleDate(date);
      }
    };

    const keyDownActions = {
      ArrowUp: () => setVisibleDate(DateFn.subDays(visibleDate, 7)),
      ArrowDown: () => setVisibleDate(DateFn.addDays(visibleDate, 7)),
      ArrowLeft: () => setVisibleDate(DateFn.subDays(visibleDate, 1)),
      ArrowRight: () => setVisibleDate(DateFn.addDays(visibleDate, 1)),
      Enter: onClick,
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      handler(event, keyDownActions);
    };

    const isSelected = isSameDate(props.value, date);
    const isFocussed = isSameDate(visibleDate, date);

    return {
      onClick,
      disabled,
      onKeyDown: props.isOpen ? onKeyDown : undefined,
      tabIndex: isFocussed ? "0" : "-1",
      ref: (ref?: HTMLElement) => {
        if (ref && isFocussed) {
          ref.focus();
        }
      },
      selected: isSelected,
      "aria-disabled": disabled,
      "aria-label": date,
      role: "button",
    };
  };

  const getNextMonthButtonProps = () => {
    const nextVisibleDate = DateFn.addMonths(visibleDate, 1);

    return {
      onClick: () => setVisibleDate(nextVisibleDate),
      "aria-label": "next month",
      role: "button",
    };
  };

  const getPrevMonthButtonProps = () => {
    const nextVisibleDate = DateFn.subMonths(visibleDate, 1);

    return {
      onClick: () => setVisibleDate(nextVisibleDate),
      "aria-label": "previous month",
      role: "button",
    };
  };

  const calendar = createCalendar(visibleDate);

  return {
    visibleDate,
    calendar,
    getDateProps,
    getNextMonthButtonProps,
    getPrevMonthButtonProps,
  };
};

export default useDatePicker;
