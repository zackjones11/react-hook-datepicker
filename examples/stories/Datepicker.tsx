import * as React from "react";
import { useDatepicker } from "../../src/index";
import "./Datepicker.css";

const Datepicker: React.FC = () => {
  const { calendar } = useDatepicker({ currentDate: new Date() });
  return (
    <div className="calendar-wrapper">
      <div>
        <ol className="calendar">
          {calendar.map((day) => {
            return <li key={day}>{day}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Datepicker;
