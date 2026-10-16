// Style Sheet CSS
import styles from "./title.module.css";

// Componentes
import { MangaInfo } from "@/components/MangaInfo/page";
import { Chapters } from "@/components/Chapters/page";
import { getChaptersByManga, getManga } from "@/lib/catalog";
import { notFound } from "next/navigation";

async function TitlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [manga, chapters] = await Promise.all([
    getManga(slug),
    getChaptersByManga(slug),
  ]);
  if (!manga) notFound();
  const firstChapter = [...chapters].sort((a, b) => a.chapterNumber - b.chapterNumber)[0];

  return (
    <div className={styles.page}>
      <main className={styles.titleContainer}>
        <MangaInfo manga={manga} firstChapterId={firstChapter?.id} />
        <Chapters mangaId={manga.id} chapters={chapters} />
      </main>
    </div>
  );
}

export default TitlePage;
