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
