// Style Sheet CSS
import styles from "./releases.module.css";

// Components
import { NewChapterCard } from "@/components/NewChapterCard/page";

function ReleasesPage() {
  return (
    <div className={styles.page}>
      <main className={styles.releasesContainer}>
        <NewChapterCard />
      </main>
    </div>
  );
}

export default ReleasesPage;
