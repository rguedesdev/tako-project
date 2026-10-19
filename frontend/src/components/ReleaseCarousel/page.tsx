"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { MediaImage } from "@/components/MediaImage/page";
import type { LatestChapter } from "@/lib/catalog";
import styles from "./release-carousel.module.css";

function ReleaseCarousel({ chapters }: { chapters: LatestChapter[] }) {
  const featured = useMemo(() => {
    const seen = new Set<string>();
    return chapters.filter((chapter) => {
      if (seen.has(chapter.manga)) return false;
      seen.add(chapter.manga);
      return true;
    }).slice(0, 8);
  }, [chapters]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (featured.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % featured.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [featured.length]);

  if (!featured.length) return null;
  const active = featured[activeIndex];
  const goTo = (index: number) => setActiveIndex((index + featured.length) % featured.length);

  return (
    <section className={styles.carousel} aria-label="Mangás em destaque" aria-roledescription="carrossel">
      <div key={`backdrop-${active.manga}`} className={styles.backdrop} aria-hidden="true">
        <MediaImage source={active.mangaInfo.mangaCover} alt="" />
      </div>
      <div className={styles.feature}>
        <MediaImage key={`cover-${active.manga}`} className={styles.cover} source={active.mangaInfo.mangaCover} alt={`Capa de ${active.mangaInfo.title}`} />
        <div key={`info-${active.manga}`} className={styles.info}>
          <span className={styles.eyebrow}>DESTAQUE RECENTE</span>
          <h1>{active.mangaInfo.title}</h1>
          <p className={styles.description}>{active.mangaInfo.description}</p>
          {active.mangaInfo.genders.length > 0 && <ul className={styles.genres} aria-label="Gêneros">
            {active.mangaInfo.genders.slice(0, 5).map((genre) => <li key={genre}>{genre}</li>)}
          </ul>}
          <p className={styles.group}>Publicado por <strong>{active.groupInfo.name}</strong></p>
          <div className={styles.actions}>
            {active.firstChapterID
              ? <Link className={styles.cta} href={`/title/${active.manga}/${active.firstChapterID}`}>Ler agora <FiChevronRight aria-hidden="true" /></Link>
              : <span className={`${styles.cta} ${styles.ctaDisabled}`} aria-disabled="true">Capítulo 1 indisponível</span>}
            <Link className={styles.detailsCta} href={`/title/${active.manga}`}>Ver detalhes</Link>
          </div>
        </div>
      </div>
      {featured.length > 1 && <>
        <button className={`${styles.arrow} ${styles.previous}`} type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Mangá anterior"><FiChevronLeft /></button>
        <button className={`${styles.arrow} ${styles.next}`} type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Próximo mangá"><FiChevronRight /></button>
        <div className={styles.indicators} aria-label={`Mangá ${activeIndex + 1} de ${featured.length}`}>
          {featured.map((chapter, index) => <button key={`${chapter.manga}-${chapter.group}`} type="button" className={index === activeIndex ? styles.indicatorActive : styles.indicator} onClick={() => goTo(index)} aria-label={`Ver ${chapter.mangaInfo.title}`} aria-current={index === activeIndex ? "true" : undefined} />)}
        </div>
      </>}
    </section>
  );
}

export { ReleaseCarousel };
