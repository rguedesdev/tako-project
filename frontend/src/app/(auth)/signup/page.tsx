// Style Sheet CSS
import styles from "./signup.module.css";

// Componentes
import { SignUpComponent } from "@/components/SignUpComponent/page";

function SignUpPage() {
  return (
    <div className={styles.page}>
      <main className={styles.signUpContainer}>
        <SignUpComponent pageTitle={`Cadastre-se`} />
      </main>
    </div>
  );
}

export default SignUpPage;
