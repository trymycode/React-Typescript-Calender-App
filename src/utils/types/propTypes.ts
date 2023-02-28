export interface CalendarButtonProps {
  label: string | number;
}

export interface CalendarRowProps {
  style?: "calendar-header";
  listOfLabels: string[] | number[];
}

export interface CalendarProps {
  date: Date;
}
