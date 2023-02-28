import { CalendarButton } from "@elements/index";
import { CalendarRowProps } from "@utils/types";
import styles from "./calendar-row.module.css";

export const CalendarRow = ({ listOfLabels, style }: CalendarRowProps) => {
  return (
    <div className={`${styles.row} ${style}`}>
      {listOfLabels.map((label) => (
        <CalendarButton key={label} label={label} />
      ))}
    </div>
  );
};
