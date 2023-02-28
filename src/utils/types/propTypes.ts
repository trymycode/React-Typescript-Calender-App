import { ChangeEvent, FormEvent } from "react";
import { CALENDAR_HEADER } from "..";
import { CalendarDate } from "./generics";

export interface CalendarButtonProps {
  label: string | number;
  isSelected?: boolean;
}

export interface CalendarRowProps {
  style?: typeof CALENDAR_HEADER;
  listOfLabels: CalendarDate[];
  isFirstRow?: boolean;
}

export interface CalendarProps {
  date: string;
}

export interface InputTextProps {
  placeholder?: string;
  value: number | string;
  onChange: (event: ChangeEvent) => void;
}

export interface ButtonProps {
  text: string;
  onClick: (event: FormEvent) => void;
}
