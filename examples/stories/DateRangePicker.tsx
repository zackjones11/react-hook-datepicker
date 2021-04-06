import * as React from "react";
import { useDateRangePicker } from "../../src/index";
import { format } from "date-fns";
import "./Datepicker.css";

const DateRangePicker: React.FC = () => {
  const { calendars } = useDateRangePicker({
    currentRange: { start: new Date(2021, 2, 10), end: new Date(2021, 2, 15) },
  });

  return (
    <div className="calendar-wrapper">
      <div style={{ display: "inline-flex" }}>
        <div
          style={{
            width: 260,
            borderRight: "1px solid black",
            marginRight: 10,
          }}
        >
          <p>
            {calendars[0].month} {calendars[0].year}
          </p>
          <ol className="calendar">
            {calendars[0].dates.map((date) => {
              return <li key={date}>{format(date, "d")}</li>;
            })}
          </ol>
        </div>

        <div style={{ width: 260 }}>
          <p>
            {calendars[1].month} {calendars[1].year}
          </p>
          <ol className="calendar">
            {calendars[1].dates.map((date) => {
              return <li key={date}>{format(date, "d")}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
