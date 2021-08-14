import createCalendar from "./createCalendar";

const test1 = {
  date: new Date("08/14/2021"),
  view: undefined,
  expected: {
    dates: expect.arrayContaining([expect.any(Date)]),
    firstDayOfMonth: 1,
    month: "August",
    view: undefined,
    year: 2021,
  },
};

const test2 = {
  date: new Date("01/30/2020"),
  view: "start",
  expected: {
    dates: expect.arrayContaining([expect.any(Date)]),
    firstDayOfMonth: 3,
    month: "January",
    view: "start",
    year: 2020,
  },
};

describe("createCalendar", () => {
  it.each`
    date          | view          | expected
    ${test1.date} | ${test1.view} | ${test1.expected}
    ${test2.date} | ${test2.view} | ${test2.expected}
  `(
    "should return correct calendar: {$date, $view}",
    ({ date, view, expected }) => {
      expect(createCalendar(date, view)).toEqual(expected);
    }
  );
});
