import { renderHook } from "@testing-library/react";
import { useDateForm } from "@utils/hooks";
import { act } from "react-dom/test-utils";
import { INVALID_DATE } from "..";

describe("useDateForm", () => {
  it("should update input value when handleInputChange is called", () => {
    const { result } = renderHook(() => useDateForm("", jest.fn()));
    const input = { target: { value: "11-05-2022" } };
    act(() => {
      result.current.handleInputChange(input as any);
    });
    expect(result.current.inputValue).toBe("11-05-2022");
  });

  it("should call onSubmit when handleSubmit is called with a valid date", () => {
    const onSubmit = jest.fn();
    const { result } = renderHook(() => useDateForm("01-02-2022", onSubmit));
    const form = { preventDefault: jest.fn() };
    act(() => {
      result.current.handleSubmit(form as any);
    });
    expect(onSubmit).toHaveBeenCalledWith("01-02-2022");
  });

  it("should display error message when handleSubmit is called with an invalid date", () => {
    const onSubmit = jest.fn();
    const { result } = renderHook(() => useDateForm("", onSubmit));
    const form = { preventDefault: jest.fn() };
    const input = { target: { value: "30-02-2022" } };
    act(() => {
      result.current.handleInputChange(input as any);
      result.current.handleSubmit(form as any);
    });
    expect(result.current.dateMessage).toBe(
      `${INVALID_DATE}. Please enter a valid date!`
    );
    expect(onSubmit).not.toHaveBeenCalled();
    expect(result.current.inputValue).toBe("");
  });
});
