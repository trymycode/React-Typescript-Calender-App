import { render, screen } from "@testing-library/react";
import { CalendarButton } from ".";

test("renders a calendar button with label", () => {
  render(<CalendarButton label="January" />);
  const button = screen.getByText("January");
  expect(button).toBeInTheDocument();
});
