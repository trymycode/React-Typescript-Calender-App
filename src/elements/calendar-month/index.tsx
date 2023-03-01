import { CalendarMonthProps, getMonthFromString } from "@utils/index";
import styles from "./calendar-month.module.css";

export const CalendarMonth = ({ date }: CalendarMonthProps) => {
  const parsedDate = getMonthFromString(date);

  return <p className={styles.calendarMonth}>{parsedDate}</p>;
};
