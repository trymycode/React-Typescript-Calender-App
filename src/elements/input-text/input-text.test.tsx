import { render, screen, fireEvent } from "@testing-library/react";
import { InputText } from ".";

describe("InputText", () => {
  const onChange = jest.fn();

  it("renders with placeholder text", () => {
    render(<InputText onChange={onChange} />);
    const input = screen.getByPlaceholderText("Please enter date here");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange when input is changed", () => {
    render(<InputText onChange={onChange} />);
    const input = screen.getByPlaceholderText("Please enter date here");
    fireEvent.change(input, { target: { value: "03-01-2022" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("renders with a value", () => {
    const value = "2022-03-01";
    render(<InputText value={value} onChange={onChange} />);
    const input = screen.getByDisplayValue(value);
    expect(input).toBeInTheDocument();
  });
});
