// Style Sheet CSS
import styles from "./releases.module.css";

// Components
import { NewChapterCard } from "@/components/NewChapterCard/page";

function Releases() {
  return (
    <div className={styles.page}>
      <main className={styles.releasesContainer}>
        <NewChapterCard />
      </main>
    </div>
  );
}

export default Releases;
