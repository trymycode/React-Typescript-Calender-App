import { getMonthFromString } from "@utils/services";
import styles from "./calendar-month.module.css";

export interface CalendarMonthProps {
  date: string;
}

export const CalendarMonth = ({ date }: CalendarMonthProps) => {
  const parsedDate = getMonthFromString(date);

  return <p className={styles.calendarMonth}>{parsedDate}</p>;
};
