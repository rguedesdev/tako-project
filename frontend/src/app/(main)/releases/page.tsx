// Style Sheet CSS
import styles from "./releases.module.css";
import { ReleaseCarousel } from "@/components/ReleaseCarousel/page";

// Components
import { NewChapterCard } from "@/components/NewChapterCard/page";
import { getLatestChapters } from "@/lib/catalog";

async function ReleasesPage() {
  const chapters = await getLatestChapters().catch((error) => {
    console.error("Falha ao carregar lançamentos:", error);
    return [];
  });
  return (
    <div className={styles.page}>
      <main className={styles.releasesContainer}>
        <ReleaseCarousel chapters={chapters} />
        <NewChapterCard chapters={chapters} />
      </main>
    </div>
  );
}

export default ReleasesPage;
