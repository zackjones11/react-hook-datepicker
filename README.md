# React Hook Datepicker (work in progress)

```
npm install @zackjones11/react-hook-datepicker --save
```

### useDatePicker

```ts
const {
  selectedDate,
  calendar,
  getDateProps,
  getPrevMonthButtonProps,
  getNextMonthButtonProps,
} = useDatepicker();
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