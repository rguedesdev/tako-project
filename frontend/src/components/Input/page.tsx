// Style Sheet CSS
import styles from "./input.module.css";

interface IInput {
  inputLabel: string;
  inputType: string;
  //   inputID: string;
  inputPlaceholder: string;
  //   register: UseFormRegisterReturn;
  //   error?: string;
}

function InputComponent({ inputLabel, inputType, inputPlaceholder }: IInput) {
  return (
    <div className={styles.inputContainer}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{inputLabel}</legend>

        <input
          className={styles.input}
          type={inputType}
          placeholder={inputPlaceholder}
        />
      </fieldset>
    </div>
  );
}

export { InputComponent };
