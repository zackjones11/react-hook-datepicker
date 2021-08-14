import { act, renderHook } from "@testing-library/react-hooks";
import useDatePicker from ".";

describe("useDatePicker", () => {
  it("should return correct props", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({ value: new Date("08/15/2021"), onChange: onChangeMock })
    );

    const expected = {
      visibleDate: new Date("2021-08-14T22:00:00.000Z"),
      calendar: {
        dates: expect.arrayContaining([expect.any(Date)]),
        firstDayOfMonth: 1,
        month: "August",
        view: undefined,
        year: 2021,
      },
      getDateProps: expect.any(Function),
      getNextMonthButtonProps: expect.any(Function),
      getPrevMonthButtonProps: expect.any(Function),
    };

    expect(result.current).toEqual(expected);
  });

  it("should return correct getDateProps when called", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({ value: new Date("08/15/2021"), onChange: onChangeMock })
    );

    const expected = {
      disabled: false,
      onClick: expect.any(Function),
      selected: false,
    };

    expect(
      result.current.getDateProps({ date: new Date("08/18/2021") })
    ).toEqual(expected);
  });

  it("should return correct visibleDate when getNextMonthButtonProps onClick is called", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({ value: new Date("08/15/2021"), onChange: onChangeMock })
    );

    act(() => {
      result.current.getNextMonthButtonProps().onClick();
    });

    expect(result.current.visibleDate).toEqual(new Date("09/15/2021"));
  });

  it("should return correct visibleDate when getPrevMonthButtonProps onClick is called", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({ value: new Date("08/15/2021"), onChange: onChangeMock })
    );

    act(() => {
      result.current.getPrevMonthButtonProps().onClick();
    });

    expect(result.current.visibleDate).toEqual(new Date("07/15/2021"));
  });

  it("should call onChange when getDateProps onClick is triggered", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({ value: new Date("09/29/2021"), onChange: onChangeMock })
    );

    act(() => {
      result.current.getDateProps({ date: new Date("09/30/2021") }).onClick();
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(
      new Date("2021-09-29T22:00:00.000Z")
    );
  });

  it("should not call onChange when disabledWhen is true", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("09/29/2021"),
        onChange: onChangeMock,
        disabledWhen: () => true,
      })
    );

    act(() => {
      result.current.getDateProps({ date: new Date("09/30/2021") }).onClick();
    });

    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
