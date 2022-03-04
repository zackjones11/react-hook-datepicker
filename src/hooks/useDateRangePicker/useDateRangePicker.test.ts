import { act, renderHook } from "@testing-library/react-hooks";
import useDateRangePicker from ".";

describe("useDateRangePicker", () => {
  it("should return correct props", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDateRangePicker({
        value: { start: new Date("08/15/2021"), end: new Date("09/15/2021") },
        onChange: onChangeMock,
      })
    );

    const expected = {
      visibleRange: {
        start: new Date("08/15/2021"),
        end: new Date("09/15/2021"),
      },
      calendars: [
        {
          dates: expect.arrayContaining([expect.any(Date)]),
          firstDayOfMonth: 1,
          month: "August",
          view: "start",
          year: 2021,
        },
        {
          dates: expect.arrayContaining([expect.any(Date)]),
          firstDayOfMonth: 3,
          month: "September",
          view: "end",
          year: 2021,
        },
      ],
      getDateProps: expect.any(Function),
      getNextMonthButtonProps: expect.any(Function),
      getPrevMonthButtonProps: expect.any(Function),
    };

    expect(result.current).toEqual(expected);
  });

  it("should return correct getDateProps when called", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDateRangePicker({
        value: { start: new Date("08/15/2021"), end: new Date("09/15/2021") },
        onChange: onChangeMock,
      })
    );

    const expected = {
      "aria-disabled": false,
      "aria-label": new Date("08/18/2021"),
      disabled: false,
      inRange: true,
      onClick: expect.any(Function),
      onPointerOver: expect.any(Function),
      role: "button",
      selected: false,
    };

    expect(
      result.current.getDateProps({ date: new Date("08/18/2021") })
    ).toEqual(expected);
  });

  it("should return correct visibleRange when getNextMonthButtonProps onClick is called", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDateRangePicker({
        value: { start: new Date("07/15/2021"), end: new Date("08/15/2021") },
        onChange: onChangeMock,
      })
    );

    act(() => {
      result.current.getNextMonthButtonProps().onClick();
    });

    expect(result.current.visibleRange).toEqual({
      start: new Date("08/15/2021"),
      end: new Date("09/15/2021"),
    });
  });

  it("should return correct visibleDate when getPrevMonthButtonProps onClick is called", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDateRangePicker({
        value: { start: new Date("08/15/2021"), end: new Date("09/15/2021") },
        onChange: onChangeMock,
      })
    );

    act(() => {
      result.current.getPrevMonthButtonProps().onClick();
    });

    expect(result.current.visibleRange).toEqual({
      start: new Date("07/15/2021"),
      end: new Date("08/15/2021"),
    });
  });

  it("should change start date if new date is before selected start date", () => {
    const onChangeMock = jest.fn();

    const initialEndDate = new Date("09/15/2021");

    const { result } = renderHook(() =>
      useDateRangePicker({
        value: { start: new Date("08/15/2021"), end: initialEndDate },
        onChange: onChangeMock,
      })
    );

    act(() => {
      result.current.getDateProps({ date: new Date("08/12/2021") }).onClick();
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith({
      end: initialEndDate,
      start: new Date("08/12/2021"),
    });
  });

  it("should change end date if new date is after selected start date", () => {
    const onChangeMock = jest.fn();

    const initialStartDate = new Date("08/15/2021");

    const { result } = renderHook(() =>
      useDateRangePicker({
        value: { start: initialStartDate, end: new Date("09/15/2021") },
        onChange: onChangeMock,
      })
    );

    act(() => {
      result.current.getDateProps({ date: new Date("08/20/2021") }).onClick();
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith({
      end: new Date("08/20/2021"),
      start: initialStartDate,
    });
  });

  it("should not call onChange when disabledWhen is true", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDateRangePicker({
        value: { start: new Date("08/15/2021"), end: new Date("09/15/2021") },
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
