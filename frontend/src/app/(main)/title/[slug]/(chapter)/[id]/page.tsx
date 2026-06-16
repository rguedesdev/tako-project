// Imports Principais
import Link from "next/link";

// Style Sheet CSS
import styles from "./chapter.module.css";

// Componentes
import { Comments } from "@/components/Comments/page";
import { MangaChapter } from "@/components/MangaChapter/page";

function ChapterPage() {
  return (
    <div className={styles.page}>
      <main className={styles.chapterContainer}>
        <MangaChapter />
        <Comments />
      </main>
    </div>
  );
}

export default ChapterPage;
