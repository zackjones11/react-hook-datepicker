import React from "react";
import { Calendar, GetDateProps } from "../../types";

export type UseDatePicker = {
  value: Date | undefined;
  isOpen: boolean;
  onChange: (value: Date | undefined) => void;
  disabledWhen?: (date: Date) => boolean;
};

export type UseDatePickerReturn = {
  visibleDate: Date;
  calendar: Calendar;
  getDateProps: (
    props: GetDateProps
  ) => {
    onClick: () => void;
    onKeyDown: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    selected: boolean;
    disabled: boolean;
  };
  getNextMonthButtonProps: () => { onClick: () => void };
  getPrevMonthButtonProps: () => { onClick: () => void };
};
