"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/context/UserContext";
import { useToast } from "@/context/ToastContext";
import { InputComponent } from "../Input/page";
import styles from "./signincomponent.module.css";
import { signInSchema } from "@/lib/validation";
import type { z } from "zod";

type SignInValues = z.infer<typeof signInSchema>;

function SignInComponent({ pageTitle }: { pageTitle: string }) {
  const { signIn } = useUser();
  const { showError } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    mode: "onTouched",
  });

  async function handleSignIn({ login, password }: SignInValues) {
    if (submitting) return;

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
        <Image className={styles.logo} src="/tako-logo.png" alt="Tako Project" width={519} height={149} priority />
        <h1 id="signin-title" className={styles.signInTitle}>{pageTitle}</h1>

        <form autoComplete="off" onSubmit={handleSubmit(handleSignIn)} noValidate>
          <InputComponent
            inputLabel="Username ou e-mail"
            inputType="text"
            inputName="login"
            inputID="login"
            autoComplete="off"
            inputPlaceholder="Digite seu username ou email"
            error={errors.login?.message}
            inputProps={register("login")}
            required
          />
          <InputComponent
            inputLabel="Senha"
            inputType="password"
            inputName="password"
            inputID="password"
            autoComplete="off"
            inputPlaceholder="Digite sua senha"
            error={errors.password?.message}
            inputProps={register("password")}
            required
          />

          <button className={styles.signInBtn} disabled={submitting}>
            {submitting && <span className={styles.spinner} aria-hidden="true" />}
            {submitting ? "Entrando…" : "Entrar"}
          </button>
        </form>
        <p className={styles.switchAuth}>Ainda não tem uma conta? <Link href="/signup">Cadastre-se</Link></p>
      </div>
    </section>
  );
}

export { SignInComponent };
