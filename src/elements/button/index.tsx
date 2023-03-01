import { ButtonProps } from "@utils/index";
import styles from "./button.module.css";

export const Button = ({ text = "Submit", onClick }: ButtonProps) => (
  <button onClick={onClick} className={styles.btn}>
    {text}
  </button>
);
