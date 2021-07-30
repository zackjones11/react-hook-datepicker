# React Hook Date Picker

A set of hooks that flexible hooks to allow fully customisable single and range date pickers
## Installation

```
npm install react-hook-datepicker --save
```

> This package depends on `react` and `date-fn`. Please make sure you have both installed as well.


### useDatePicker Usage

> [Try in codesandbox](https://codesandbox.io/s/react-hook-datepicker-usedatepicker-hxm1k?file=/src/DatePicker.tsx)

```ts
const [selectedDate, setSelectedDate] = React.useState<Date | undefined>()

const {
  calendar,
  getDateProps,
  getPrevMonthButtonProps,
  getNextMonthButtonProps,
} = useDatePicker({ value: selectedDate, onChange: setSelectedDate })
```

### useDateRangePicker Useage

> [Try in codesandbox](https://codesandbox.io/s/daterangepicker-z22se?file=/src/components/DaysOfWeek.ts:41-326)

```ts
type Range = { start: Date | undefined; end: Date | undefined; }

const [selectedRange, setSelectedRange] = React.useState<Range>({ start: undefined, end: undefined })

const {
  calendars,
  getDateProps,
  getPrevMonthButtonProps,
  getNextMonthButtonProps,
} = useDateRangePicker()
```