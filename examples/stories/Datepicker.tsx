import * as React from "react";
import { useDatepicker } from "../../src/index";
import "./Datepicker.css";

const Datepicker: React.FC = () => {
  const {
    selectedDate,
    visibleMonth,
    visibleYear,
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
        <b>visible:</b> {visibleMonth} {visibleYear}
      </p>

      <div>
        <button {...getPrevMonthButtonProps()}>PREV MONTH</button>
        <button {...getNextMonthButtonProps()}>NEXT MONTH</button>

        <ol className="calendar">
          {calendar.map((day) => {
            const { isSelected } = getDayProps({ day });
            return (
              <li key={day} className={`${isSelected ? "selected" : ""}`}>
                {day}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Datepicker;
