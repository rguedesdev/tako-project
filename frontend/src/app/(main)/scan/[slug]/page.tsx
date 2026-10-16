// Style Sheet CSS
import styles from "./scan.module.css";

// Componentes
import { ScanInfo } from "@/components/ScanInfo/page";
import { MangaCard } from "@/components/MangaCard/page";
import { getGroup } from "@/lib/catalog";
import { notFound } from "next/navigation";

async function ScanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scan = await getGroup(slug);
  if (!scan) notFound();

  return (
    <div className={styles.page}>
      <main className={styles.scanContainers}>
        <ScanInfo scan={scan} />
        <MangaCard pageTitle="Mangas traduzidos" mangas={scan.mangas ?? []} translations={scan.translations} />
      </main>
    </div>
  );
}

export default ScanPage;
