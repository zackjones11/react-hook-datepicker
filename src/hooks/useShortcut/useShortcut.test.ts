import { act, renderHook } from "@testing-library/react";
import { useShortcut } from ".";

describe("useShortcut", () => {
  it("should call trigger event if we press expected key", () => {
    const mockKeyDownAction = jest.fn();
    const { result } = renderHook(useShortcut);

    act(() => {
      const event: any = { key: "KeyDown" };
      const actions = {
        KeyDown: mockKeyDownAction,
      };
      result.current.handler(event, actions);
    });

    expect(mockKeyDownAction).toHaveBeenCalledTimes(1);
  });

  it("should handle multiple calls correctly", () => {
    const mockKeyDownAction = jest.fn();
    const mockKeyUpAction = jest.fn();
    const mockEnterAction = jest.fn();
    const { result } = renderHook(useShortcut);

    const actions = {
      KeyDown: mockKeyDownAction,
      KeyUp: mockKeyUpAction,
    };

    act(() => {
      const event: any = { key: "KeyDown" };
      result.current.handler(event, actions);
    });

    act(() => {
      const event: any = { key: "KeyUp" };
      result.current.handler(event, actions);
    });

    expect(mockKeyDownAction).toHaveBeenCalledTimes(1);
    expect(mockKeyUpAction).toHaveBeenCalledTimes(1);
    expect(mockEnterAction).not.toHaveBeenCalled();
  });

  it("should not trigger event if we press a key that is not accepted", () => {
    const mockKeyUpAction = jest.fn();
    const { result } = renderHook(useShortcut);

    act(() => {
      const event: any = { key: "KeyDown" };
      const actions = {
        KeyUp: mockKeyUpAction,
      };
      result.current.handler(event, actions);
    });

    expect(mockKeyUpAction).not.toHaveBeenCalled();
  });
});
