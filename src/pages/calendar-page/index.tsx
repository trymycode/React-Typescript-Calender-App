import { Calendar, DateForm } from "@modules/index";

export const CalendarPage = () => {
  return (
    <>
      <DateForm onSubmit={console.log} />
      <Calendar date={"05-07-2022"} />;
    </>
  );
};
