import { CalendarDate } from "./generics";

export interface CalendarButtonProps {
  label: string | number;
  isSelected?: boolean;
}

export interface CalendarRowProps {
  style?: "calendar-header";
  listOfLabels: CalendarDate[];
  isFirstRow?: boolean;
}

export interface CalendarProps {
  date: Date;
}
