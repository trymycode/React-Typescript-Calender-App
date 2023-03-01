import { getCalendarDates, getMonthFromString, INVALID_DATE } from "..";

describe("getMonthFromString", () => {
  it("should return the correct month from a valid date string", () => {
    expect(getMonthFromString("28-02-2023")).toEqual("February 2023");
  });

  it('should return "Invalid Date" from an invalid date string', () => {
    expect(getMonthFromString("ABCD")).toEqual(INVALID_DATE);
  });
});

describe("getCalendarDates", () => {
  it("should return the correct 2D array of calendar dates for the month", () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dateString = "28-02-2023";
    const expectedDates = [
      [
        { label: 1, isSelected: false },
        { label: 2, isSelected: false },
        { label: 3, isSelected: false },
        { label: 4, isSelected: false },
        { label: 5, isSelected: false },
        { label: 6, isSelected: false },
        { label: 7, isSelected: false },
      ],
    ];

    expect(
      JSON.stringify(getCalendarDates(daysOfWeek, dateString)[0][1])
    ).toEqual(JSON.stringify(expectedDates[0][1]));
  });
});
