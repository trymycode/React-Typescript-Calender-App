import { render, screen } from "@testing-library/react";
import { Calendar } from ".";

describe("Calendar", () => {
  const date = "01-03-2022";

  it("renders CalendarMonth with correct props", () => {
    render(<Calendar date={date} />);
    const calendarMonth = screen.getByText("March 2022");
    expect(calendarMonth).toBeInTheDocument();
  });

  it("renders CalendarRow for days of week", () => {
    render(<Calendar date={date} />);
    const sunLabel = screen.getByText("Su");
    const satLabel = screen.getByText("Sa");
    expect(sunLabel).toBeInTheDocument();
    expect(satLabel).toBeInTheDocument();
  });

  it("renders the correct number of days for the month", () => {
    render(<Calendar date={date} />);
    const days = screen.getAllByTestId("calendar-day");
    expect(days.length).toBe(31);
  });
});
