import { ButtonProps } from "@utils/index";

export const Button = ({ text = "Submit", onClick }: ButtonProps) => (
  <button onClick={onClick}>{text}</button>
);
