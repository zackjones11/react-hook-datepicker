import { format } from "date-fns";
import * as React from "react";
import { useDatepicker } from "../../src/index";
import "./Datepicker.css";

const Datepicker: React.FC = () => {
  const {
    selectedDate,
    calendar,
    getDayProps,
    getPrevMonthButtonProps,
    getNextMonthButtonProps,
  } = useDatepicker({ currentDate: new Date() });
  return (
    <div className="calendar-wrapper">
      <p>
        <b>selectedDate:</b> {JSON.stringify(selectedDate)}
      </p>

      <p>
        <b>visible:</b> {calendar.month} {calendar.year}
      </p>

      <div>
        <button {...getPrevMonthButtonProps()}>PREV MONTH</button>
        <button {...getNextMonthButtonProps()}>NEXT MONTH</button>

        <ol className="calendar">
          {calendar.dates.map((date) => {
            const { isSelected } = getDayProps({ date });
            return (
              <li key={date} className={`${isSelected ? "selected" : ""}`}>
                {format(date, "d")}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Datepicker;
