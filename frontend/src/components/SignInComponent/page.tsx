// Sytle Sheet CSS
import styles from "./signincomponent.module.css";

// Componentes
import { InputComponent } from "../Input/page";

function SignInComponent({ pageTitle }) {
  return (
    <section>
      <div className={styles.signInBox}>
        <h1 className={styles.signInTitle}>{pageTitle}</h1>

        <form autoComplete="off">
          <InputComponent
            inputLabel="User ID ou Email"
            inputType="email"
            inputPlaceholder="Digite seu email..."
          />

          <InputComponent
            inputLabel="Senha"
            inputType="password"
            inputPlaceholder="Digite sua senha..."
          />

          <button className={styles.signInBtn}>Entrar</button>
        </form>
      </div>
    </section>
  );
}

export { SignInComponent };
