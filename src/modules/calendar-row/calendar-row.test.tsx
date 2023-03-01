import { render, screen } from "@testing-library/react";
import { CalendarRow } from ".";

describe("CalendarRow", () => {
  const listOfLabels = [
    { label: "1", isSelected: false },
    { label: "2", isSelected: true },
    { label: "3", isSelected: false },
    { label: "4", isSelected: false },
    { label: "5", isSelected: false },
    { label: "6", isSelected: false },
  ];

  it("renders correct number of labels", () => {
    render(<CalendarRow areCalendarDays listOfLabels={listOfLabels} />);
    const labels = screen.getAllByTestId("calendar-day");
    expect(labels).toHaveLength(listOfLabels.length);
  });

  it("renders correct label text", () => {
    render(<CalendarRow areCalendarDays listOfLabels={listOfLabels} />);
    const labels = screen.getAllByTestId("calendar-day");
    labels.forEach((label, index) => {
      expect(label.textContent).toBe(listOfLabels[index].label);
    });
  });

  it("renders selected label with correct class", () => {
    render(<CalendarRow listOfLabels={listOfLabels} />);
    const selectedLabel = screen.getByText("2");
    expect(selectedLabel).toHaveClass("selectedDate");
  });

  it("renders calendar days with correct class", () => {
    render(<CalendarRow listOfLabels={listOfLabels} areCalendarDays />);
    const labels = screen.getAllByTestId("calendar-day");
    expect(labels[0]).toHaveClass("calendarButton");
  });
});
