// Componentes
import { ScansCard } from "@/components/ScanCard/page";

// Style Sheet CSS
import styles from "./scans.module.css";
import { getGroups } from "@/lib/catalog";

async function ScansPage() {
  const { scans, loadError } = await getGroups()
    .then((loadedScans) => ({ scans: loadedScans, loadError: false }))
    .catch((error) => {
      console.error("Falha ao carregar scans:", error);
      return { scans: [], loadError: true };
    });
  return (
    <div className={styles.page}>
      <main className={styles.scansContainers}>
        <ScansCard scans={scans} loadError={loadError} />
      </main>
    </div>
  );
}

export default ScansPage;
