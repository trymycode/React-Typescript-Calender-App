import { render, fireEvent } from "@testing-library/react";
import { Button } from ".";

describe("Button component", () => {
  it("renders with default text", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<Button onClick={mockOnClick} />);
    const buttonElement = getByText(/Submit/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders with custom text", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button text="Click me!" onClick={mockOnClick} />
    );
    const buttonElement = getByText(/Click me!/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(<Button onClick={mockOnClick} />);
    const buttonElement = getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("has the correct class name", () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(<Button onClick={mockOnClick} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveClass("btn");
  });
});
