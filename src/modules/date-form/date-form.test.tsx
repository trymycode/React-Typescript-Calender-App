import { render, fireEvent } from "@testing-library/react";
import { INVALID_DATE } from "@utils/constants";
import { DateForm } from ".";

describe("DateForm", () => {
  it("renders input field and submit button", () => {
    const { getByPlaceholderText, getByText } = render(
      <DateForm onSubmit={() => {}} />
    );

    const inputField = getByPlaceholderText("Enter date in dd-mm-yyyy format");
    expect(inputField).toBeInTheDocument();

    const submitButton = getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  it("calls onSubmit with input value when submit button is clicked", () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <DateForm onSubmit={onSubmit} />
    );

    const inputField = getByPlaceholderText("Enter date in dd-mm-yyyy format");
    const submitButton = getByText("Submit");

    fireEvent.change(inputField, { target: { value: "01-01-2022" } });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith("01-01-2022");
  });

  it("displays error message when date is invalid", () => {
    const { getByText, getByPlaceholderText } = render(
      <DateForm onSubmit={jest.fn} />
    );
    const submitButton = getByText("Submit");

    fireEvent.change(getByPlaceholderText("Enter date in dd-mm-yyyy format"), {
      target: { value: "01-01-ab22" },
    });
    fireEvent.click(submitButton);

    expect(
      getByText(INVALID_DATE + ". Please enter a valid date!")
    ).toBeInTheDocument();
  });
});
