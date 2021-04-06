import * as React from "react";
import { useDateRangePicker } from "../../src/index";
import { format } from "date-fns";
import "./Datepicker.css";

const DateRangePicker: React.FC = () => {
  const {
    calendars,
    getDateProps,
    getPrevMonthButtonProps,
    getNextMonthButtonProps,
  } = useDateRangePicker({
    currentRange: { start: new Date(2021, 2, 10), end: new Date(2021, 2, 15) },
  });

  return (
    <div className="calendar-wrapper">
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
                const { isSelected, isInRange, ...props } = getDateProps({
                  date,
                });

                return (
                  <li
                    {...props}
                    key={date.toString()}
                    style={{
                      background: isSelected ? "blue" : "",
                      color: isInRange ? "blue" : "",
                    }}
                  >
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
