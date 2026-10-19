"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FiLoader, FiUserPlus } from "react-icons/fi";

import { useUser } from "@/context/UserContext";
import { useToast } from "@/context/ToastContext";
import { InputComponent } from "../Input/page";
import styles from "./signupcomponent.module.css";

type FieldErrors = Partial<Record<"name" | "username" | "email" | "password" | "confirmPassword", string>>;

function validate(data: Record<string, string>) {
  const errors: FieldErrors = {};
  if (data.name.trim().length < 2) errors.name = "Informe seu nome.";
  if (!/^[a-z0-9](?:[a-z0-9._]{1,28}[a-z0-9])?$/.test(data.username.trim().toLowerCase())) {
    errors.username = "Use de 3 a 30 letras minúsculas, números, ponto ou sublinhado.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Informe um e-mail válido.";
  if (data.password.length < 8) errors.password = "A senha precisa ter pelo menos 8 caracteres.";
  if (data.password !== data.confirmPassword) errors.confirmPassword = "As senhas não coincidem.";
  return errors;
}

function SignUpComponent({ pageTitle }: { pageTitle: string }) {
  const { signUp } = useUser();
  const { showError } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = new FormData(event.currentTarget);
    const data = {
      name: String(form.get("name") ?? "").trim(),
      username: String(form.get("username") ?? "").trim().toLowerCase(),
      email: String(form.get("email") ?? "").trim().toLowerCase(),
      password: String(form.get("password") ?? ""),
      confirmPassword: String(form.get("confirmPassword") ?? ""),
    };
    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

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
        <span className={styles.eyebrow}><FiUserPlus /> Faça parte da comunidade</span>
        <h1 id="signup-title" className={styles.signUpTitle}>{pageTitle}</h1>
        <p className={styles.subtitle}>Crie sua conta para participar dos comentários.</p>

        <form autoComplete="on" onSubmit={handleSignUp} noValidate>
          <InputComponent inputLabel="Nome" inputType="text" inputName="name" inputID="name" autoComplete="name" inputPlaceholder="Como devemos chamar você?" maxLength={120} error={errors.name} required />
          <InputComponent inputLabel="Username" inputType="text" inputName="username" inputID="username" autoComplete="username" inputPlaceholder="seu.username" minLength={3} maxLength={30} error={errors.username} required />
          <InputComponent inputLabel="E-mail" inputType="email" inputName="email" inputID="email" autoComplete="email" inputPlaceholder="email@exemplo.com" maxLength={254} error={errors.email} required />
          <div className={styles.passwordGrid}>
            <InputComponent inputLabel="Senha" inputType="password" inputName="password" inputID="new-password" autoComplete="new-password" inputPlaceholder="Mínimo de 8 caracteres" minLength={8} maxLength={120} error={errors.password} required />
            <InputComponent inputLabel="Confirmar senha" inputType="password" inputName="confirmPassword" inputID="confirm-password" autoComplete="new-password" inputPlaceholder="Repita sua senha" minLength={8} maxLength={120} error={errors.confirmPassword} required />
          </div>

          <button className={styles.signUpBtn} disabled={submitting}>
            {submitting && <FiLoader className={styles.spinner} aria-hidden="true" />}
            {submitting ? "Criando conta…" : "Criar minha conta"}
          </button>
        </form>
        <p className={styles.switchAuth}>Já possui uma conta? <Link href="/signin">Entrar</Link></p>
      </div>
    </section>
  );
}

export { SignUpComponent };
