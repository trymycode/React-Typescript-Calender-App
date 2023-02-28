import { InputTextProps } from "@utils/index";

export const InputText = ({
  placeholder = "Please enter date here",
  value,
  onChange,
}: InputTextProps) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
