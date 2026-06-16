// Sytle Sheet CSS
import styles from "./signupcomponent.module.css";

// Componentes
import { InputComponent } from "../Input/page";

function SignUpComponent({ pageTitle }) {
  return (
    <section>
      <div className={styles.signUpBox}>
        <h1 className={styles.signUpTitle}>{pageTitle}</h1>

        <form autoComplete="off">
          <InputComponent
            inputLabel="User ID"
            inputType="text"
            inputPlaceholder="Digite um User ID..."
          />

          <InputComponent
            inputLabel="Email"
            inputType="email"
            inputPlaceholder="Digite seu email..."
          />

          <InputComponent
            inputLabel="Senha"
            inputType="password"
            inputPlaceholder="Digite sua senha..."
          />

          <InputComponent
            inputLabel="Confirme a Senha"
            inputType="password"
            inputPlaceholder="Digite sua senha..."
          />

          <button className={styles.signUpBtn}>Cadastrar</button>
        </form>
      </div>
    </section>
  );
}

export { SignUpComponent };
