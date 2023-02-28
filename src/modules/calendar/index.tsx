import { CalendarRow } from "@modules/index";
import { getCalendarDates } from "@utils/services";
import { CalendarProps } from "@utils/types";
import { useEffect, useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Calendar = ({ date }: CalendarProps) => {
  const [calendarDates, setCalendarDates] = useState([[0]]);

  useEffect(() => {
    const calendarDatesArray = getCalendarDates(days, "03-10-2022");
    setCalendarDates((prev) => {
      console.log({ calendarDatesArray });
      return calendarDatesArray;
    });
  }, []);

  return (
    <>
      <CalendarRow style="calendar-header" listOfLabels={days} />
      {calendarDates.map((calendarRow) => (
        <CalendarRow listOfLabels={calendarRow} />
      ))}
    </>
  );
};
