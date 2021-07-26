import * as React from "react";
import * as DateFn from "date-fns";
import { createCalendar, isSameDate } from "../../utils";

const useDatePicker = (props: UseDatePicker): UseDatePickerReturn => {
  const [visibleDate, setVisibleDate] = React.useState(
    props.value || new Date()
  );
  const [hoveredDate, setHoveredDate] = React.useState<Date | undefined>();

  const getDateProps = ({ date }: GetDateProps) => {
    return {
      onClick: () => props.onChange(date),
      onPointerOver: () => setHoveredDate(date),
      isSelected: isSameDate(props.value, date),
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
    calendar: createCalendar(visibleDate),
    getDateProps,
    getNextMonthButtonProps,
    getPrevMonthButtonProps,
  };
};

export default useDatePicker;
