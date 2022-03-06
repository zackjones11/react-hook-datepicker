import * as React from "react";

type Actions = Record<string, () => Date | void>;

interface IUseShortcutReturn {
  handler: (event: React.KeyboardEvent<HTMLElement>, actions: Actions) => void;
}

export const useShortcut = (): IUseShortcutReturn => {
  const handler = React.useCallback(
    (event: React.KeyboardEvent<HTMLElement>, actions: Actions) => {
      if (event.key in actions) {
        const action = actions[event.key];
        action();
      }
    },
    []
  );

  return { handler };
};
