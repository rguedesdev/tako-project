// Style Sheet CSS
import styles from "./chapter.module.css";

// Componentes
import { Comments } from "@/components/Comments/page";
import { MangaChapter } from "@/components/MangaChapter/page";
import { SimulatedAd } from "@/components/SimulatedAd/page";
import { getChapter, getChaptersByManga } from "@/lib/catalog";
import { notFound } from "next/navigation";

async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { slug, id } = await params;
  const [chapter, chapters] = await Promise.all([getChapter(id), getChaptersByManga(slug)]);
  if (!chapter || chapter.manga !== slug) notFound();

  const lowerNumbers = chapters.filter((item) => item.chapterNumber < chapter.chapterNumber);
  const higherNumbers = chapters.filter((item) => item.chapterNumber > chapter.chapterNumber);
  const previousNumber = lowerNumbers.length ? Math.max(...lowerNumbers.map((item) => item.chapterNumber)) : null;
  const nextNumber = higherNumbers.length ? Math.min(...higherNumbers.map((item) => item.chapterNumber)) : null;
  const chooseRelease = (number: number | null) => {
    if (number === null) return null;
    const releases = chapters.filter((item) => item.chapterNumber === number);
    return releases.find((item) => item.group === chapter.group) ?? releases[0] ?? null;
  };
  const previousChapter = chooseRelease(previousNumber);
  const nextChapter = chooseRelease(nextNumber);

  return (
    <div className={styles.page}>
      <main className={styles.chapterContainer}>
        <MangaChapter
          chapter={chapter}
          previousChapterId={previousChapter?.id ?? null}
          nextChapterId={nextChapter?.id ?? null}
        />
        <div className={styles.adContainer}>
          <SimulatedAd />
        </div>
        <div className={styles.commentsContainer}>
          <Comments chapterId={id} />
        </div>
      </main>
    </div>
  );
}

export default ChapterPage;
