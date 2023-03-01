import { InputTextProps } from "@utils/index";
import styles from "./input-text.module.css";

export const InputText = ({
  placeholder = "Please enter date here",
  value = "",
  onChange,
}: InputTextProps) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={styles.inputText}
  />
);
