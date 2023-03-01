import { render } from "@testing-library/react";
import { INVALID_DATE } from "@utils/constants";
import { CalendarMonth } from ".";

describe("CalendarMonth component", () => {
  it("renders the correct month and year for a given date", () => {
    const { getByText } = render(<CalendarMonth date="15-03-2022" />);
    const monthElement = getByText("March 2022");
    expect(monthElement).toBeInTheDocument();
  });

  it("has the correct class name", () => {
    const { getByText } = render(<CalendarMonth date="15-02-2022" />);
    const monthElement = getByText("February 2022");
    expect(monthElement).toHaveClass("calendarMonth");
  });

  it("shows invalid date on invalid input", () => {
    const { getByText } = render(<CalendarMonth date="ABCD" />);
    const invalidElement = getByText(INVALID_DATE);
    expect(invalidElement).toBeInTheDocument();
  });
});
