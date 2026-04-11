// Imports Principais
import Image from "next/image";

// Componentes
import { ScansCard } from "@/components/ScanCard/page";

// Style Sheet CSS
import styles from "./scans.module.css";

function ScansPage() {
  return (
    <div className={styles.page}>
      <main className={styles.scansContainers}>
        <ScansCard />
      </main>
    </div>
  );
}

export default ScansPage;
