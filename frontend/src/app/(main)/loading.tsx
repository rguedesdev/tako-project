import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main className={styles.loading} role="status" aria-live="polite" aria-label="Carregando">
      <span className={styles.spinner} aria-hidden="true" />
    </main>
  );
}
