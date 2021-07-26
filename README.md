# React Hook Datepicker (work in progress)

```
npm install @zackjones11/react-hook-datepicker --save
```

### useDatePicker

```ts
const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();

const {
  calendar,
  getDateProps,
  getPrevMonthButtonProps,
  getNextMonthButtonProps,
} = useDatepicker({ value: selectedDate, onChange: setSelectedDate });
```

### useDateRangePicker

```ts
const {
  selectedRange,
  calendars,
  getDateProps,
  getPrevMonthButtonProps,
  getNextMonthButtonProps,
} = useDateRangePicker();
```

Check `./examples` for detailed usage