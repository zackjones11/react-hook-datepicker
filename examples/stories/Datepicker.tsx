import { format } from "date-fns";
import * as React from "react";
import { useDatepicker } from "../../src/index";
import "./Datepicker.css";

const Datepicker: React.FC = () => {
  const {
    selectedDate,
    calendar,
    getDateProps,
    getPrevMonthButtonProps,
    getNextMonthButtonProps,
  } = useDatepicker();

  return (
    <div className="calendar-wrapper">
      <p>
        <b>selectedDate:</b> {JSON.stringify(selectedDate)}
      </p>

      <p>
        <b>visible:</b> {calendar.month} {calendar.year}
      </p>

      <div>
        <button {...getPrevMonthButtonProps()}>Previous Month</button>
        <button {...getNextMonthButtonProps()}>Next Month</button>

        <ol className="calendar">
          {calendar.dates.map((date) => {
            const { isSelected, isHovered, ...props } = getDateProps({ date });

            const classes = `${isSelected ? "selected" : ""} ${
              isHovered ? "hovered" : ""
            }`;

            return (
              <li {...props} key={date.toString()} className={classes}>
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
