import { CalendarButton } from "@elements/index";
import { CalendarRowProps } from "@utils/types";
import styles from "./calendar-row.module.css";

export const CalendarRow = ({
  listOfLabels,
  style,
  isFirstRow = false,
  areCalendarDays = false,
}: CalendarRowProps) => {
  return (
    <div
      className={`${styles.row} ${isFirstRow ? styles.rowReverse : ""} ${
        style ? style : ""
      }`}
      data-testid="calendar-row"
    >
      {listOfLabels.map((label) => (
        <CalendarButton
          key={label.label}
          isSelected={label.isSelected}
          label={label.label}
          areCalendarDays={areCalendarDays}
        />
      ))}
    </div>
  );
};
