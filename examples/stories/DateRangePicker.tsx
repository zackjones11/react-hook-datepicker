import * as React from "react";
import { useDateRangePicker } from "../../src/index";
import { format } from "date-fns";
import "./Datepicker.css";

const DateRangePicker: React.FC = () => {
  const {
    selectedRange,
    calendars,
    getDateProps,
    getPrevMonthButtonProps,
    getNextMonthButtonProps,
  } = useDateRangePicker();

  // currentRange: { start: new Date(2021, 2, 10), end: new Date(2021, 2, 15) },

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
                  isInRange,
                  isHovered,
                  ...props
                } = getDateProps({
                  date,
                });

                const classes = `${isSelected ? "selected" : ""} ${
                  isInRange ? "in-range" : ""
                } ${isHovered ? "hovered" : ""}`;

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
