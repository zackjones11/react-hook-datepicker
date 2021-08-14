import getDatesInMonth from "./getDatesInMonth";

const test1 = {
  date: new Date("08/14/2021"),
  expected: [
    new Date("2021-07-31T22:00:00.000Z"),
    new Date("2021-08-01T22:00:00.000Z"),
    new Date("2021-08-02T22:00:00.000Z"),
    new Date("2021-08-03T22:00:00.000Z"),
    new Date("2021-08-04T22:00:00.000Z"),
    new Date("2021-08-05T22:00:00.000Z"),
    new Date("2021-08-06T22:00:00.000Z"),
    new Date("2021-08-07T22:00:00.000Z"),
    new Date("2021-08-08T22:00:00.000Z"),
    new Date("2021-08-09T22:00:00.000Z"),
    new Date("2021-08-10T22:00:00.000Z"),
    new Date("2021-08-11T22:00:00.000Z"),
    new Date("2021-08-12T22:00:00.000Z"),
    new Date("2021-08-13T22:00:00.000Z"),
    new Date("2021-08-14T22:00:00.000Z"),
    new Date("2021-08-15T22:00:00.000Z"),
    new Date("2021-08-16T22:00:00.000Z"),
    new Date("2021-08-17T22:00:00.000Z"),
    new Date("2021-08-18T22:00:00.000Z"),
    new Date("2021-08-19T22:00:00.000Z"),
    new Date("2021-08-20T22:00:00.000Z"),
    new Date("2021-08-21T22:00:00.000Z"),
    new Date("2021-08-22T22:00:00.000Z"),
    new Date("2021-08-23T22:00:00.000Z"),
    new Date("2021-08-24T22:00:00.000Z"),
    new Date("2021-08-25T22:00:00.000Z"),
    new Date("2021-08-26T22:00:00.000Z"),
    new Date("2021-08-27T22:00:00.000Z"),
    new Date("2021-08-28T22:00:00.000Z"),
    new Date("2021-08-29T22:00:00.000Z"),
    new Date("2021-08-30T22:00:00.000Z"),
  ],
};

const test2 = {
  date: new Date("01/01/2019"),
  expected: [
    new Date("2018-12-31T23:00:00.000Z"),
    new Date("2019-01-01T23:00:00.000Z"),
    new Date("2019-01-02T23:00:00.000Z"),
    new Date("2019-01-03T23:00:00.000Z"),
    new Date("2019-01-04T23:00:00.000Z"),
    new Date("2019-01-05T23:00:00.000Z"),
    new Date("2019-01-06T23:00:00.000Z"),
    new Date("2019-01-07T23:00:00.000Z"),
    new Date("2019-01-08T23:00:00.000Z"),
    new Date("2019-01-09T23:00:00.000Z"),
    new Date("2019-01-10T23:00:00.000Z"),
    new Date("2019-01-11T23:00:00.000Z"),
    new Date("2019-01-12T23:00:00.000Z"),
    new Date("2019-01-13T23:00:00.000Z"),
    new Date("2019-01-14T23:00:00.000Z"),
    new Date("2019-01-15T23:00:00.000Z"),
    new Date("2019-01-16T23:00:00.000Z"),
    new Date("2019-01-17T23:00:00.000Z"),
    new Date("2019-01-18T23:00:00.000Z"),
    new Date("2019-01-19T23:00:00.000Z"),
    new Date("2019-01-20T23:00:00.000Z"),
    new Date("2019-01-21T23:00:00.000Z"),
    new Date("2019-01-22T23:00:00.000Z"),
    new Date("2019-01-23T23:00:00.000Z"),
    new Date("2019-01-24T23:00:00.000Z"),
    new Date("2019-01-25T23:00:00.000Z"),
    new Date("2019-01-26T23:00:00.000Z"),
    new Date("2019-01-27T23:00:00.000Z"),
    new Date("2019-01-28T23:00:00.000Z"),
    new Date("2019-01-29T23:00:00.000Z"),
    new Date("2019-01-30T23:00:00.000Z"),
  ],
};

describe("getDatesInMonth", () => {
  it.each`
    date          | expected
    ${test1.date} | ${test1.expected}
    ${test2.date} | ${test2.expected}
  `("should return correct dates for the date: $date", ({ date, expected }) => {
    expect(getDatesInMonth(date)).toEqual(expected);
  });
});
