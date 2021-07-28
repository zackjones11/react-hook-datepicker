# React Hook Date Picker (work in progress)

## Install

```
npm install @zackjones11/react-hook-datepicker --save
```

```
yarn add @zackjones11/react-hook-datepicker
```


### useDatePicker

```ts
const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();

const {
  calendar,
  getDateProps,
  getPrevMonthButtonProps,
  getNextMonthButtonProps,
} = useDatePicker({ value: selectedDate, onChange: setSelectedDate });
```

### useDateRangePicker

```ts
type Range = { start: Date | undefined; end: Date | undefined; }
const [selectedRange, setSelectedRange] = React.useState<Range>({ start: undefined, end: undefined });

const {
  calendars,
  getDateProps,
  getPrevMonthButtonProps,
  getNextMonthButtonProps,
} = useDateRangePicker();
```

Check `./examples` for detailed usage