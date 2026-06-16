// Style Sheet CSS
import styles from "./signin.module.css";

// Componentes
import { SignInComponent } from "@/components/SignInComponent/page";

function SignInPage() {
  return (
    <div className={styles.page}>
      <main className={styles.signInContainer}>
        <SignInComponent pageTitle={`Login`} />
      </main>
    </div>
  );
}

export default SignInPage;
