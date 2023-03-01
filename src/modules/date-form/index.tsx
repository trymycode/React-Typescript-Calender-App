import { Button } from "@elements/button";
import { InputText } from "@elements/input-text";
import { useDateForm } from "@utils/hooks";
import styles from "./date-form.module.css";

export const DateForm = ({
  onSubmit,
}: {
  onSubmit: (inputValue: string) => void;
}) => {
  const { inputValue, handleInputChange, handleSubmit, dateMessage } =
    useDateForm("", onSubmit);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.dateForm}>
        <InputText
          value={inputValue}
          placeholder="Enter date in dd-mm-yyyy format"
          onChange={handleInputChange}
        />
        <Button text="Submit" onClick={handleSubmit} />
      </form>
      {dateMessage && <p className="error">{dateMessage}</p>}
    </>
  );
};
