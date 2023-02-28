// A function that takes an array of days of the week and a date string in dd-mm-yyyy format
// and returns a 2D array of calendar dates for the month of the date
export const getCalendarDates = (
  daysOfWeek: string[],
  dateString: string
): number[][] => {
  // Parse the date string into a Date object
  const [_, month, year]: number[] = dateString
    .split("-")
    .map((date) => Number(date));

  // Get the number of days in the month
  let daysInMonth = new Date(year, month, 0).getDate();

  // Get the index of the first day of the month in the daysOfWeek array
  let firstDayIndex = daysOfWeek.indexOf(
    new Date(year, month - 1, 1).toLocaleString("en", { weekday: "short" })
  );

  // Initialize an empty array to store the calendar dates
  const calendarDays = [];
  const calendarDateArray: number[][] = [];

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  let firstWeek = true;
  while (calendarDays.length > 0) {
    let week: number[] = [];
    const iterator = firstWeek
      ? daysOfWeek.length - firstDayIndex
      : daysOfWeek.length;
    for (let i = 0; i < iterator; i++) {
      if (calendarDays.length > 0) {
        const poppedDate = calendarDays.shift() as number;
        week.push(poppedDate);
      } else break;
    }
    calendarDateArray.push(week);
    firstWeek = false;
  }

  // Return final calendarDates array
  return calendarDateArray;
};
