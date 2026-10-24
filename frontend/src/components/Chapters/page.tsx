import Link from "next/link";
import { BiHash } from "react-icons/bi";
import { GiEvilBook } from "react-icons/gi";
import { ImMakeGroup } from "react-icons/im";

import type { ChapterListItem } from "@/lib/catalog";
import styles from "./chapter.module.css";

function Chapters({ mangaId, chapters }: { mangaId: string; chapters: ChapterListItem[] }) {
  const grouped = chapters.reduce<Map<number, ChapterListItem[]>>((result, chapter) => {
    const releases = result.get(chapter.chapterNumber) ?? [];
    releases.push(chapter);
    result.set(chapter.chapterNumber, releases);
    return result;
  }, new Map());

  const entries = [...grouped.entries()].sort(([a], [b]) => b - a);

  return (
    <section>
      <div className={styles.volNumber}>
        <GiEvilBook size={20} />
        <h2 className={styles.volTitle}>Capítulos disponíveis</h2>
      </div>
      {entries.length === 0 && (
        <div className={styles.emptyState} role="status">
          <div className={styles.emptyIcon}><BiHash size={25} /></div>
          <div className={styles.emptyCopy}>
            <h3>Nenhum capítulo por aqui ainda</h3>
            <p>Assim que um capítulo desta obra for publicado, ele aparecerá nesta lista.</p>
          </div>
        </div>
      )}
      {entries.map(([number, releases]) => (
        <div key={number} className={styles.capContent}>
          <div className={styles.capNumber}><BiHash size={18} /><h3>Capítulo {number}</h3></div>
          <div className={styles.releasesGroup}>
            {releases.map((release) => (
              <div key={release.id} className={styles.releaseWrapper}>
                <div className={styles.capLine}>
                  <Link className={styles.capLink} href={`/title/${mangaId}/${release.id}`}>
                    <div className={styles.capTitle}>
                      <span title={release.groupInfo.country}>{release.groupInfo.countryFlag}</span>
                      <span>{release.chapterTitle || `Capítulo ${release.chapterNumber}`}</span>
                    </div>
                    <div className={styles.scanlator}><ImMakeGroup size={14} /><span>{release.groupInfo.name}</span></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export { Chapters };
