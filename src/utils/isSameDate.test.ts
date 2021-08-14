import isSameDate from "./isSameDate";

describe("isSameDate", () => {
  it.each`
    date1                     | date2                     | expected
    ${new Date("01/12/2021")} | ${new Date("01/12/2021")} | ${true}
    ${new Date("01/12/2021")} | ${undefined}              | ${false}
    ${undefined}              | ${new Date("01/12/2021")} | ${false}
    ${new Date("01/12/2019")} | ${new Date("01/12/2020")} | ${false}
  `(
    "should return $expected if $date1 is the same as $date2",
    ({ date1, date2, expected }) => {
      expect(isSameDate(date1, date2)).toEqual(expected);
    }
  );
});
