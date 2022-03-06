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
    start?: Date;
    end?: Date;
  }>();
  const {
    calendars,
    getDateProps,
    getPrevMonthButtonProps,
    getNextMonthButtonProps,
  } = useDateRangePicker({
    value: selectedRange,
    isOpen: true,
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
        {calendars.map((calendar) => (
          <div
            key={calendar.view}
            style={{
              width: 260,
              marginRight: 10,
            }}
          >
            <p>
              {calendar.month} {calendar.year}
            </p>
            <ol className="calendar">
              {calendar.dates.map((date, index) => {
                const { selected, disabled, inRange, ...props } = getDateProps({
                  date,
                });

                const classes = `${selected ? "selected" : ""} ${
                  inRange ? "in-range" : ""
                } ${disabled ? "disabled" : ""}`;

                return (
                  <li
                    style={{
                      gridColumn:
                        index === 0 ? calendar.firstDayOfMonth : "auto",
                    }}
                    {...props}
                    key={date.toString()}
                    className={classes}
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
