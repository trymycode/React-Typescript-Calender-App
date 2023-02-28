import { CalendarRow } from "@modules/index";
import { getCalendarDates } from "@utils/services";
import { CalendarDate, CalendarProps } from "@utils/types";
import { useEffect, useState } from "react";
import styles from "./calendar.module.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Calendar = ({ date }: CalendarProps) => {
  const [calendarDates, setCalendarDates] = useState<CalendarDate[][]>([]);

  useEffect(() => {
    const calendarDatesArray = getCalendarDates(days, "05-07-2022");
    setCalendarDates((prev) => {
      console.log({ calendarDatesArray });
      return calendarDatesArray;
    });
  }, []);

  return (
    <div className={styles.calendar}>
      <CalendarRow
        style="calendar-header"
        listOfLabels={days.map((day) => ({
          label: day.substring(0, 2),
          isSelected: false,
        }))}
      />
      {calendarDates.map((calendarRow, index) => {
        return (
          <CalendarRow listOfLabels={calendarRow} isFirstRow={index === 0} />
        );
      })}
    </div>
  );
};
