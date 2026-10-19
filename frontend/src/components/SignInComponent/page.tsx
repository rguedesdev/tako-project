"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FiLoader, FiLogIn } from "react-icons/fi";

import { useUser } from "@/context/UserContext";
import { useToast } from "@/context/ToastContext";
import { InputComponent } from "../Input/page";
import styles from "./signincomponent.module.css";

function SignInComponent({ pageTitle }: { pageTitle: string }) {
  const { signIn } = useUser();
  const { showToast, showError } = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const data = new FormData(event.currentTarget);
    const login = String(data.get("login") ?? "").trim();
    const password = String(data.get("password") ?? "");
    if (!login || !password) {
      showToast("Informe seu username ou e-mail e sua senha.", "error");
      return;
    }

    setSubmitting(true);
    try {
      const requestedNext = new URLSearchParams(window.location.search).get("next");
      const next = requestedNext?.startsWith("/") && !requestedNext.startsWith("//")
        ? requestedNext
        : "/";
      await signIn(login, password, next);
    } catch (signInError) {
      showError(signInError, "Não foi possível entrar. Confira seus dados e tente novamente.");
      setSubmitting(false);
    }
  }

  return (
    <section className={styles.authSection} aria-labelledby="signin-title">
      <div className={styles.signInBox}>
        <span className={styles.eyebrow}><FiLogIn /> Bem-vindo de volta</span>
        <h1 id="signin-title" className={styles.signInTitle}>{pageTitle}</h1>
        <p className={styles.subtitle}>Entre para comentar e acompanhar suas leituras.</p>

        <form autoComplete="on" onSubmit={handleSignIn} noValidate>
          <InputComponent
            inputLabel="Username ou e-mail"
            inputType="text"
            inputName="login"
            inputID="login"
            autoComplete="username"
            inputPlaceholder="seu.username ou email@exemplo.com"
            required
          />
          <InputComponent
            inputLabel="Senha"
            inputType="password"
            inputName="password"
            inputID="password"
            autoComplete="current-password"
            inputPlaceholder="Digite sua senha"
            required
          />

          <button className={styles.signInBtn} disabled={submitting}>
            {submitting && <FiLoader className={styles.spinner} aria-hidden="true" />}
            {submitting ? "Entrando…" : "Entrar"}
          </button>
        </form>
        <p className={styles.switchAuth}>Ainda não tem uma conta? <Link href="/signup">Cadastre-se</Link></p>
      </div>
    </section>
  );
}

export { SignInComponent };
