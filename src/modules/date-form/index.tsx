import { Button } from "@elements/button";
import { InputText } from "@elements/input-text";
import { ChangeEvent, FormEvent, useState } from "react";

export const DateForm = ({
  onSubmit,
}: {
  onSubmit: (inputValue: string) => void;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(inputValue);
  };

  const handleInputChange = (event: ChangeEvent) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText value={inputValue} onChange={handleInputChange} />
      <Button text="Submit" onClick={handleSubmit} />
    </form>
  );
};
