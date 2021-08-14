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

## Options

| Name         | Type                               | Description                                                  |
| ------------ | ---------------------------------- | ------------------------------------------------------------ |
| value        | <code>Date &#124; undefined</code> | The current selected date. This can be `undefined` initially |
| onChange     | `function`                         | Called when the user selects a date                          |
| disabledWhen | `function`                         | Used to disable dates. It expects a boolean to be returned   |

## Returned Props

| Name                     | Type        | Description                                                                       |
| ------------------------ | ----------- | --------------------------------------------------------------------------------- |
| visibleDate              | `Date`      | The date that is currently visible                                                |
| calendar                 | `Calendar`  | An object that allows you to construct the calendar view                          |
| getDateProps             | `function`  | Returns props that should be applied to each date element you render              |
| getPrevMonthButtonProps  | `function`  | Returns props that should be applied to the button for viewing the previous month |
| getNextMonthButtonProps  | `function`  | Returns props that should be applied to the button for viewing the next month     |

## Calendar Type

| Name            | Type     | Description                                                         |
| --------------- | -------- | ------------------------------------------------------------------- |
| dates           | `Date[]` | An array of dates in the current month                              |
| month           | `string` | The current month                                                   |
| year            | `number` | The current year                                                    |
| firstDayOfMonth | `number` | The first weekday of the year as an integer. Sunday = 1, Monday = 2 |


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

## Options

| Name         | Type        | Description                                                             |
| ------------ | ----------- | ----------------------------------------------------------------------- |
| value        | `DateRange` | undefined | The current selected range. This can be undefined initially |
| onChange     | `function`  | Called when the user selects a date                                     |
| disabledWhen | `function`  | Used to disable before a date. It expects a boolean to be returned      |

## Returned Props

| Name                      | Type         | Description                                                                       |
| ------------------------- | ------------ | --------------------------------------------------------------------------------- |
| visibleRange              | `DateRange`  | The date range that is currently visible                                          |
| calendars                 | `Calendar[]` | An object that allows you to construct the calendar view                          |
| getDateProps              | `function`   | Returns props that should be applied to each date element you render              |
| getPrevMonthButtonProps   | `function`   | Returns props that should be applied to the button for viewing the previous month |
| getNextMonthButtonProps   | `function`   | Returns props that should be applied to the button for viewing the next month     |

## Range Type

| Name  | Type               | Description                                           |
| ----- | ------------------ | ----------------------------------------------------- |
| start | `Date | undefined` | JS Date format that represents the start of the range |
| end   | `Date | undefined` | JS Date format that represents the end of the range   |
## Calendar Type

| Name            | Type                              | Description                                                             |
| --------------- | --------------------------------- | ----------------------------------------------------------------------- |
| view            | <code>'start' &#124; 'end'</code> | A string to identify start of end calendar                              |
| dates           | `Date[]`                          | An array of dates in the current month                                  |
| month           | `string`                          | The current month                                                       |
| year            | `number`                          | The current year                                                        |
| firstDayOfMonth | `number`                          | The first weekday of the year as an integer. Sunday = 1, Monday = 2 etc |

