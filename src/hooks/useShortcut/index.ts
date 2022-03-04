import * as React from "react";

type Actions = Record<string, () => Date | void>;

interface IUseShortcutReturn {
  handler: (event: KeyboardEvent, actions: Actions) => void;
}

export const useShortcut = (): IUseShortcutReturn => {
  const handler = React.useCallback(
    (event: KeyboardEvent, actions: Actions) => {
      if (event.key in actions) {
        const action = actions[event.key];
        action();
      }
    },
    []
  );

  return { handler };
};
