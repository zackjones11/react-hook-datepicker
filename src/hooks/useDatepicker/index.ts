import * as React from "react";
import * as DateFn from "date-fns";
import { createCalendar, isSameDate } from "../../utils";

const useDatepicker = (props?: UseDatepicker): UseDatepickerReturn => {
  const [selectedDate, setSelectedDate] = React.useState(props?.currentDate);
  const [visibleDate, setVisibleDate] = React.useState(
    props?.currentDate || new Date()
  );
  const [hoveredDate, setHoveredDate] = React.useState<Date | undefined>();

  const getDateProps = ({ date }: GetDateProps) => {
    return {
      onClick: () => setSelectedDate(date),
      onPointerOver: () => setHoveredDate(date),
      isSelected: isSameDate(selectedDate, date),
      isHovered: isSameDate(hoveredDate, date),
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
