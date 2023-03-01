import { Calendar, DateForm } from "@modules/index";
import { useState } from "react";
import styles from "./calendar-page.module.css";

export const CalendarPage = () => {
  const [date, setDate] = useState("");
  return (
    <div className={styles.calendarPage}>
      <DateForm onSubmit={setDate} />
      {date && <Calendar date={date} />}
    </div>
  );
};
