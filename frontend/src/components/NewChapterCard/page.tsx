import Link from "next/link";
import { BiHash } from "react-icons/bi";
import { ImMakeGroup } from "react-icons/im";
import { MdAccessTime } from "react-icons/md";

import type { LatestChapter } from "@/lib/catalog";
import { MediaImage } from "@/components/MediaImage/page";
import styles from "./newchapter.module.css";

function timeAgo(value: string) {
  const seconds = Math.max(0, Math.floor((Date.now() - new Date(value).getTime()) / 1000));
  if (seconds < 60) return "agora";
  if (seconds < 3600) return `há ${Math.floor(seconds / 60)} min`;
  if (seconds < 86400) return `há ${Math.floor(seconds / 3600)} h`;
  return `há ${Math.floor(seconds / 86400)} dias`;
}

function NewChapterCard({ chapters }: { chapters: LatestChapter[] }) {
  const releases = [...chapters.reduce<Map<string, LatestChapter[]>>((result, chapter) => {
    const key = `${chapter.manga}:${chapter.group}`;
    const current = result.get(key) ?? [];
    if (current.length < 4) current.push(chapter);
    result.set(key, current);
    return result;
  }, new Map()).values()];

  if (releases.length === 0) return <p>Nenhum capítulo publicado até o momento.</p>;

  return (
    <section className={styles.cardsGrid}>
      {releases.map((release) => {
        const first = release[0];
        return (
          <article key={`${first.manga}:${first.group}`} className={styles.newChapterCard}>
            <figure className={styles.coverWrapper}>
              <MediaImage className={styles.mangaCover} source={first.mangaInfo.mangaCover} alt={`Capa de ${first.mangaInfo.title}`} />
            </figure>
            <div className={styles.capList}>
              <div className={styles.chaptersWrapper}>
                <h2 className={styles.mangaTitle}><Link href={`/title/${first.manga}`}>{first.mangaInfo.title}</Link></h2>
                {release.map((chapter) => (
                  <div key={chapter.id} className={styles.capLi}>
                    <div className={styles.capInfo}><BiHash size={18} /><Link className={styles.capLink} href={`/title/${chapter.manga}/${chapter.id}`}>Capítulo {chapter.chapterNumber}</Link></div>
                    <div className={styles.capTime}><MdAccessTime size={16} /><span>{timeAgo(chapter.createdAt)}</span></div>
                  </div>
                ))}
              </div>
              <hr className={styles.hrFaded} />
              <h3 className={styles.scanWrapper}><ImMakeGroup size={13} /><Link className={styles.scanName} href={`/scan/${first.group}`}>{first.groupInfo.name}</Link></h3>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export { NewChapterCard };
