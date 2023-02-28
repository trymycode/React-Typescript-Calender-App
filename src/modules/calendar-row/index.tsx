import { CalendarButton } from "@elements/index";
import { CalendarRowProps } from "@utils/types";
import styles from "./calendar-row.module.css";

export const CalendarRow = ({
  listOfLabels,
  style,
  isFirstRow = false,
}: CalendarRowProps) => {
  return (
    <div
      className={`${styles.row} ${isFirstRow ? styles.rowReverse : ""} ${
        style ? style : ""
      }`}
    >
      {listOfLabels.map((label) => (
        <CalendarButton
          key={label.label}
          isSelected={label.isSelected}
          label={label.label}
        />
      ))}
    </div>
  );
};
