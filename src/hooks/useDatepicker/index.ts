import * as React from "react";
import * as DateFn from "date-fns";
import { UseDatepicker, UseDatepickerReturn, GetDayProps } from "../../types";

const useDatepicker = (props: UseDatepicker): UseDatepickerReturn => {
  const [selectedDate, setSelectedDate] = React.useState(props.currentDate);
  const [visibleDate, setVisibleDate] = React.useState(props.currentDate);
  const daysInMonth = DateFn.getDaysInMonth(visibleDate);

  const handleDayChange = (day: number) => {
    const newDate = DateFn.setDate(visibleDate, day);
    setSelectedDate(newDate);
  };

  const getDayProps = ({ day }: GetDayProps) => {
    const isSameMonth =
      DateFn.differenceInCalendarMonths(selectedDate, visibleDate) === 0;
    const isSameDay = DateFn.getDate(selectedDate) === day;

    return {
      onClick: () => handleDayChange(day),
      isSelected: isSameMonth && isSameDay,
    };
  };

  const getNextMonthButtonProps = () => {
    const nextVisibleDate = DateFn.addMonths(visibleDate, 1);

    return {
      onClick: () => setVisibleDate(nextVisibleDate),
    };
  };

  const getPrevMonthButtonProps = () => {
    const nextVisibleDate = DateFn.subMonths(visibleDate, 1);

    return {
      onClick: () => setVisibleDate(nextVisibleDate),
    };
  };

  return {
    selectedDate,
    visibleMonth: DateFn.format(visibleDate, "MMMM"),
    visibleYear: DateFn.format(visibleDate, "yyyy"),
    calendar: [...Array(daysInMonth)].map((_, i) => i + 1),
    getDayProps,
    getNextMonthButtonProps,
    getPrevMonthButtonProps,
  };
};

export default useDatepicker;
