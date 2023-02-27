import { CalendarButton } from "../../elements";
import { CalendarRowProps } from "../../utils";

export const CalendarRow = ({ listOfLabels }: CalendarRowProps) => {
  return (
    <>
      {listOfLabels.map((label) => (
        <CalendarButton key={label} label={label} />
      ))}
    </>
  );
};
