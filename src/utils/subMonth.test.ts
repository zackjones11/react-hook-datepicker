import subMonth from "./subMonth";

describe("subMonth", () => {
  it.each`
    date                      | expected
    ${new Date("01/12/2021")} | ${new Date("12/12/2020")}
    ${new Date("12/30/2019")} | ${new Date("11/30/2019")}
  `("should return $expected as date", ({ date, expected }) => {
    expect(subMonth(date)).toEqual(expected);
  });
});
