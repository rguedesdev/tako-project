// Style Sheet CSS
import styles from "./input.module.css";

interface IInput {
  inputLabel: string;
  inputType: string;
  inputPlaceholder: string;
  inputName?: string;
  required?: boolean;
  inputID?: string;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
  error?: string;
}

function InputComponent({
  inputLabel,
  inputType,
  inputPlaceholder,
  inputName,
  required = false,
  inputID,
  autoComplete,
  minLength,
  maxLength,
  error,
}: IInput) {
  const resolvedID = inputID ?? inputName;
  return (
    <div className={styles.inputContainer}>
      <fieldset className={`${styles.fieldset} ${error ? styles.fieldsetError : ""}`}>
        <legend className={styles.legend}>{inputLabel}</legend>

        <input
          className={styles.input}
          type={inputType}
          id={resolvedID}
          name={inputName}
          required={required}
          autoComplete={autoComplete}
          minLength={minLength}
          maxLength={maxLength}
          aria-invalid={Boolean(error)}
          aria-describedby={error && resolvedID ? `${resolvedID}-error` : undefined}
          placeholder={inputPlaceholder}
        />
      </fieldset>
      {error && <p id={resolvedID ? `${resolvedID}-error` : undefined} className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export { InputComponent };
