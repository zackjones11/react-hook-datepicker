import { format } from "date-fns";
import * as React from "react";
import { useDatePicker } from "../../src/index";
import "./DatePicker.css";

const disabledWhen = (date: Date) => {
  const today = new Date().setHours(0, 0, 0, 0);
  return date.getTime() < today;
};

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  const {
    calendar,
    getDateProps,
    getPrevMonthButtonProps,
    getNextMonthButtonProps,
  } = useDatePicker({
    value: selectedDate,
    onChange: setSelectedDate,
    disabledWhen,
  });

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
            const { selected, disabled, ...props } = getDateProps({
              date,
            });

            const classes = `${selected ? "selected" : ""} ${
              disabled ? "disabled" : ""
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

export default DatePicker;
