import { CalendarButtonProps } from "@utils/types";
import styles from "./calendar-button.module.css";

export const CalendarButton = ({ label, isSelected }: CalendarButtonProps) => {
  return (
    <div
      className={`${styles.calendarButton} ${
        isSelected ? styles.selectedDate : ""
      }`}
    >
      {label}
    </div>
  );
};
