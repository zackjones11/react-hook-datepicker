import { act, renderHook } from "@testing-library/react";
import useDatePicker from ".";

const isOpen = true;

describe("useDatePicker", () => {
  it("should return correct props", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("08/15/2021"),
        isOpen,
        onChange: onChangeMock,
      })
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
      useDatePicker({
        value: new Date("08/15/2021"),
        isOpen,
        onChange: onChangeMock,
      })
    );

    const expected = {
      onClick: expect.any(Function),
      disabled: false,
      onKeyDown: expect.any(Function),
      tabIndex: "-1",
      ref: expect.any(Function),
      selected: false,
      "aria-disabled": false,
      "aria-label": expect.any(Date),
      role: "button",
    };

    expect(
      result.current.getDateProps({ date: new Date("08/18/2021") })
    ).toEqual(expected);
  });

  it("should return correct visibleDate when getNextMonthButtonProps onClick is called", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("08/15/2021"),
        isOpen,
        onChange: onChangeMock,
      })
    );

    act(() => {
      result.current.getNextMonthButtonProps().onClick();
    });

    expect(result.current.visibleDate).toEqual(new Date("09/15/2021"));
  });

  it("should return correct visibleDate when getPrevMonthButtonProps onClick is called", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("08/15/2021"),
        isOpen,
        onChange: onChangeMock,
      })
    );

    act(() => {
      result.current.getPrevMonthButtonProps().onClick();
    });

    expect(result.current.visibleDate).toEqual(new Date("07/15/2021"));
  });

  it("should call onChange when getDateProps onClick is triggered", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("09/29/2021"),
        isOpen,
        onChange: onChangeMock,
      })
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
        isOpen,
        onChange: onChangeMock,
        disabledWhen: () => true,
      })
    );

    act(() => {
      result.current.getDateProps({ date: new Date("09/30/2021") }).onClick();
    });

    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("should change visibleDate to tomorrow when pressing ArrowRight", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("09/29/2021"),
        isOpen,
        onChange: onChangeMock,
        disabledWhen: () => false,
      })
    );

    act(() => {
      result.current
        .getDateProps({ date: new Date("09/29/2021") })
        .onKeyDown?.({ key: "ArrowRight" } as any);
    });

    expect(result.current.visibleDate).toEqual(new Date("09/30/2021"));
  });

  it("should change visibleDate to yesterday day when pressing ArrowLeft", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("09/29/2021"),
        isOpen,
        onChange: onChangeMock,
        disabledWhen: () => false,
      })
    );

    act(() => {
      result.current
        .getDateProps({ date: new Date("09/29/2021") })
        .onKeyDown?.({ key: "ArrowLeft" } as any);
    });

    expect(result.current.visibleDate).toEqual(new Date("09/28/2021"));
  });

  it("should change visibleDate to last week when pressing ArrowUp", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("09/29/2021"),
        isOpen,
        onChange: onChangeMock,
        disabledWhen: () => false,
      })
    );

    act(() => {
      result.current
        .getDateProps({ date: new Date("09/29/2021") })
        .onKeyDown?.({ key: "ArrowUp" } as any);
    });

    expect(result.current.visibleDate).toEqual(new Date("09/22/2021"));
  });

  it("should change visibleDate to next week when pressing ArrowDown", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("09/29/2021"),
        isOpen,
        onChange: onChangeMock,
        disabledWhen: () => false,
      })
    );

    act(() => {
      result.current
        .getDateProps({ date: new Date("09/29/2021") })
        .onKeyDown?.({ key: "ArrowDown" } as any);
    });

    expect(result.current.visibleDate).toEqual(new Date("10/06/2021"));
  });

  it("should set the selectedDate to visibleDate when pressing Enter", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("09/29/2021"),
        isOpen,
        onChange: onChangeMock,
        disabledWhen: () => false,
      })
    );

    act(() => {
      result.current
        .getDateProps({ date: new Date("09/29/2021") })
        .onKeyDown?.({ key: "ArrowDown" } as any);
    });

    act(() => {
      result.current
        .getDateProps({ date: new Date("10/05/2021") })
        .onKeyDown?.({ key: "Enter" } as any);
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(new Date("10/05/2021"));
  });

  it("should not fire shortcut events when isOpen is falsy", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useDatePicker({
        value: new Date("09/29/2021"),
        isOpen: false,
        onChange: onChangeMock,
        disabledWhen: () => false,
      })
    );

    act(() => {
      result.current
        .getDateProps({ date: new Date("10/05/2021") })
        .onKeyDown?.({ key: "Enter" } as any);
    });

    expect(onChangeMock).not.toHaveBeenCalledTimes(1);
  });
});
