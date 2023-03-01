import { ChangeEvent, FormEvent, useState } from "react";
import { INVALID_DATE } from "./constants";
import { getMonthFromString } from "./services";

export const useDateForm = (
  initialValues: string = "",
  onSubmit: (inputValue: string) => void
) => {
  const [inputValue, setInputValue] = useState(initialValues);
  const [dateMessage, setDateMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setDateMessage("");
    const message = getMonthFromString(inputValue);
    if (message === INVALID_DATE) {
      setDateMessage(INVALID_DATE + ". Please enter a valid date!");
      setInputValue("");
      return;
    }
    onSubmit(inputValue);
  };

  const handleInputChange = (event: ChangeEvent) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  return { inputValue, handleSubmit, handleInputChange, dateMessage };
};
