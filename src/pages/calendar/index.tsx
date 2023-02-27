import { CalendarButton } from "../../elements";
import { CalendarRow } from "../../modules";

const days = ["Mon", "Tue", "Wed"];

export const CalendarPage = () => {
  return <CalendarRow listOfLabels={days} />;
};
