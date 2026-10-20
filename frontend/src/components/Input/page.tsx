// Style Sheet CSS
import styles from "./input.module.css";
import type { InputHTMLAttributes } from "react";

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
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
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
  inputProps,
}: IInput) {
  const resolvedID = inputID ?? inputName;
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={resolvedID}>{inputLabel}</label>
      <input
        className={`${styles.input} ${error ? styles.inputError : ""}`}
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
        {...inputProps}
      />
      {error && <p id={resolvedID ? `${resolvedID}-error` : undefined} className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export { InputComponent };
