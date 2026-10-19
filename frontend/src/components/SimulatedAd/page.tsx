import styles from "./simulatedad.module.css";

function SimulatedAd() {
  return (
    <aside className={styles.container} aria-label="Espaço publicitário demonstrativo">
      <ins
        id="tako-ad-slot"
        className={`adsbygoogle adsbox ad-banner ad-placement ad-unit advertisement ${styles.ad}`}
        data-ad-slot="demo"
      >
        <span className={styles.label}>Anúncio demonstrativo</span>
        <strong>Este espaço ajuda a manter o Tako ativo e gratuito.</strong>
        <span className={styles.note}>Simulação local · nenhum anúncio real está sendo exibido</span>
      </ins>
    </aside>
  );
}

export { SimulatedAd };
