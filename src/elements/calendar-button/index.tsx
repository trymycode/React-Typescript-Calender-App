import { CalendarButtonProps } from "@utils/types";
import styles from "./calendar-button.module.css";

export const CalendarButton = ({
  label,
  isSelected,
  areCalendarDays = false,
}: CalendarButtonProps) => {
  return (
    <div
      className={`${styles.calendarButton} ${
        isSelected ? styles.selectedDate : ""
      }`}
      {...(areCalendarDays && { "data-testid": "calendar-day" })}
    >
      {label}
    </div>
  );
};
