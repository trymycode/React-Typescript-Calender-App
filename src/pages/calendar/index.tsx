import { CalendarRow } from "@modules/index";

const days = ["Mon", "Tue", "Wed"];

export const CalendarPage = () => {
  return <CalendarRow listOfLabels={days} />;
};
