import * as React from "react";
import * as DateFn from "date-fns";
import { createCalendar, isSameDate } from "../../utils";
import { UseDatepicker, UseDatepickerReturn, GetDateProps } from "../../types";

const useDatepicker = (props?: UseDatepicker): UseDatepickerReturn => {
  const [selectedDate, setSelectedDate] = React.useState(props?.currentDate);
  const [visibleDate, setVisibleDate] = React.useState(
    props?.currentDate || new Date()
  );

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const getDateProps = ({ date }: GetDateProps) => {
    return {
      onClick: () => handleDateChange(date),
      isSelected: isSameDate(selectedDate, date),
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
    calendar: createCalendar(visibleDate),
    getDateProps,
    getNextMonthButtonProps,
    getPrevMonthButtonProps,
  };
};

export default useDatepicker;
