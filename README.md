# React Hook Date Picker

A set of hooks that allow you to build fully customisable single and range date pickers
## Installation

```
npm install react-hook-datepicker --save
```

> This package depends on `react` and `date-fn`. Please make sure you have both installed as well.


### useDatePicker Usage

> [Try in codesandbox](https://codesandbox.io/s/datepicker-jx7si?file=/src/DatePicker.tsx)

```ts
const [selectedDate, setSelectedDate] = React.useState<Date | undefined>()

const {
  calendar,
  getDateProps,
  getPrevMonthButtonProps,
  getNextMonthButtonProps,
} = useDatePicker({ value: selectedDate, onChange: setSelectedDate })
```

### useDateRangePicker Usage

> [Try in codesandbox](https://codesandbox.io/s/daterangepicker-z22se?file=/src/DateRangePicker.tsx)

```ts
type Range = { start: Date | undefined; end: Date | undefined; }

const [selectedRange, setSelectedRange] = React.useState<Range>({ start: undefined, end: undefined })

const {
  calendars,
  getDateProps,
  getPrevMonthButtonProps,
  getNextMonthButtonProps,
} = useDateRangePicker({ value: selectedRange, onChange: setSelectedRange })
```