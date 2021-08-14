import isAfterDate from "./isAfterDate";

describe("isAfterDate", () => {
  it.each`
    date1                     | date2                     | expected
    ${new Date("01/12/2021")} | ${new Date("01/12/2021")} | ${false}
    ${new Date("01/12/2021")} | ${undefined}              | ${false}
    ${undefined}              | ${new Date("01/12/2021")} | ${false}
    ${new Date("01/12/2020")} | ${new Date("01/12/2019")} | ${true}
    ${new Date("02/12/2020")} | ${new Date("01/12/2020")} | ${true}
    ${new Date("10/05/2020")} | ${new Date("10/04/2020")} | ${true}
  `(
    "should return $expected if $date1 is after $date2",
    ({ date1, date2, expected }) => {
      expect(isAfterDate(date1, date2)).toEqual(expected);
    }
  );
});
