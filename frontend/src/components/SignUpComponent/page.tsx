"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUser } from "@/context/UserContext";
import { useToast } from "@/context/ToastContext";
import { InputComponent } from "../Input/page";
import styles from "./signupcomponent.module.css";
import { signUpSchema } from "@/lib/validation";
import type { z } from "zod";

type SignUpValues = z.infer<typeof signUpSchema>;

function SignUpComponent({ pageTitle }: { pageTitle: string }) {
  const { signUp } = useUser();
  const { showError } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
  });

  async function handleSignUp(data: SignUpValues) {
    if (submitting) return;

    setSubmitting(true);
    try {
      await signUp(data, "/");
    } catch (error) {
      showError(error, "Não foi possível criar sua conta. Confira os dados e tente novamente.");
      setSubmitting(false);
    }
  }

  return (
    <section className={styles.authSection} aria-labelledby="signup-title">
      <div className={styles.signUpBox}>
        <Image className={styles.logo} src="/tako-logo.png" alt="Tako Project" width={519} height={149} priority />
        <h1 id="signup-title" className={styles.signUpTitle}>{pageTitle}</h1>

        <form autoComplete="off" onSubmit={handleSubmit(handleSignUp)} noValidate>
          <InputComponent inputLabel="Nome" inputType="text" inputName="name" inputID="name" autoComplete="off" inputPlaceholder="Como devemos chamar você?" maxLength={120} error={errors.name?.message} inputProps={register("name")} required />
          <InputComponent inputLabel="Username" inputType="text" inputName="username" inputID="username" autoComplete="off" inputPlaceholder="username" minLength={3} maxLength={30} error={errors.username?.message} inputProps={register("username")} required />
          <InputComponent inputLabel="E-mail" inputType="email" inputName="email" inputID="email" autoComplete="off" inputPlaceholder="email@exemplo.com" maxLength={254} error={errors.email?.message} inputProps={register("email")} required />
          <div className={styles.passwordGrid}>
            <InputComponent inputLabel="Senha" inputType="password" inputName="password" inputID="new-password" autoComplete="off" inputPlaceholder="Mínimo de 8 caracteres" minLength={8} maxLength={120} error={errors.password?.message} inputProps={register("password")} required />
            <InputComponent inputLabel="Confirmar senha" inputType="password" inputName="confirmPassword" inputID="confirm-password" autoComplete="off" inputPlaceholder="Repita sua senha" minLength={8} maxLength={120} error={errors.confirmPassword?.message} inputProps={register("confirmPassword")} required />
          </div>

          <button className={styles.signUpBtn} disabled={submitting}>
            {submitting && <span className={styles.spinner} aria-hidden="true" />}
            {submitting ? "Criando conta…" : "Criar minha conta"}
          </button>
        </form>
        <p className={styles.switchAuth}>Já possui uma conta? <Link href="/signin">Entrar</Link></p>
      </div>
    </section>
  );
}

export { SignUpComponent };
