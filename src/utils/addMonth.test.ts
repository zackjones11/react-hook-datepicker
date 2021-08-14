import addMonth from "./addMonth";

describe("addMonth", () => {
  it.each`
    date                      | expected
    ${new Date("01/12/2021")} | ${new Date("02/12/2021")}
    ${new Date("12/30/2019")} | ${new Date("01/30/2020")}
  `("should return $expected as date", ({ date, expected }) => {
    expect(addMonth(date)).toEqual(expected);
  });
});
