import { CalendarButtonProps } from "../../utils";
import styles from "./calendar-button.module.css";

export const CalendarButton = ({ label }: CalendarButtonProps) => {
  return <div className={styles.button}>{label}</div>;
};
