// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./scan.module.css";

// Componentes
import { ScanInfo } from "@/components/ScanInfo/page";
import { MangaCard } from "@/components/MangaCard/page";

function ScanPage() {
  return (
    <div className={styles.page}>
      <main className={styles.scanContainers}>
        <ScanInfo />
        <MangaCard />
      </main>
    </div>
  );
}

export default ScanPage;
