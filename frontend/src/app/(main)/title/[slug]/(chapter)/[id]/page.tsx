// Style Sheet CSS
import styles from "./chapter.module.css";

// Componentes
import { Comments } from "@/components/Comments/page";
import { MangaChapter } from "@/components/MangaChapter/page";
import { getChapter } from "@/lib/catalog";
import { notFound } from "next/navigation";

async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { slug, id } = await params;
  const chapter = await getChapter(id);
  if (!chapter || chapter.manga !== slug) notFound();

  return (
    <div className={styles.page}>
      <main className={styles.chapterContainer}>
        <MangaChapter chapter={chapter} />
        <div className={styles.commentsContainer}>
          <Comments chapterId={id} />
        </div>
      </main>
    </div>
  );
}

export default ChapterPage;
