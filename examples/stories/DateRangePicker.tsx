import * as React from "react";
import { useDateRangePicker } from "../../src/index";
import { format } from "date-fns";
import "./DatePicker.css";

const disabledWhen = (date: Date) => {
  const today = new Date().setHours(0, 0, 0, 0);
  return date.getTime() < today;
};

const DateRangePicker: React.FC = () => {
  const [selectedRange, setSelectedRange] = React.useState<{
    start: Date | undefined;
    end: Date | undefined;
  }>({ start: undefined, end: undefined });
  const {
    calendars,
    getDateProps,
    getPrevMonthButtonProps,
    getNextMonthButtonProps,
  } = useDateRangePicker({
    value: selectedRange,
    onChange: setSelectedRange,
    disabledWhen,
  });

  return (
    <div className="calendar-wrapper">
      <p>
        <b>selectedRange:</b> {JSON.stringify(selectedRange)}
      </p>

      <button {...getPrevMonthButtonProps()}>Previous Month</button>
      <button {...getNextMonthButtonProps()}>Next Month</button>

      <div style={{ display: "inline-flex" }}>
        {calendars.map((calendar, index) => (
          <div
            key={index}
            style={{
              width: 260,
              marginRight: 10,
            }}
          >
            <p>
              {calendar.month} {calendar.year}
            </p>
            <ol className="calendar">
              {calendar.dates.map((date) => {
                const {
                  isSelected,
                  disabled,
                  isInRange,
                  isHovered,
                  ...props
                } = getDateProps({
                  date,
                });

                const classes = `${isSelected ? "selected" : ""} ${
                  isInRange ? "in-range" : ""
                } ${isHovered ? "hovered" : ""} ${disabled ? "disabled" : ""}`;

                return (
                  <li {...props} key={date.toString()} className={classes}>
                    {format(date, "d")}
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateRangePicker;
