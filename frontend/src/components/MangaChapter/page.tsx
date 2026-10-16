"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiMinimize2,
} from "react-icons/fi";
import {
  TbArrowAutofitDown,
  TbArrowAutofitLeft,
  TbArrowAutofitRight,
} from "react-icons/tb";

import { recordChapterView, type ChapterDetail } from "@/lib/catalog";
import { MediaImage } from "@/components/MediaImage/page";
import styles from "./mangachapter.module.css";

type ReaderMode = "swap" | "scroll";
type ReadingDirection = "rtl" | "ltr";

function MangaChapter({ chapter }: { chapter: ChapterDetail }) {
  const pages = useMemo(
    () => chapter.pages.filter(Boolean),
    [chapter.pages],
  );
  const recordedChapterID = useRef<string | null>(null);
  const readerRef = useRef<HTMLElement>(null);
  const [isWide, setIsWide] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [mode, setMode] = useState<ReaderMode>("swap");
  const [direction, setDirection] = useState<ReadingDirection>("rtl");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const titleHref = `/title/${chapter.manga}`;
  const progress = ((currentPage + 1) / pages.length) * 100;

  useEffect(() => {
    if (recordedChapterID.current === chapter.id) return;
    recordedChapterID.current = chapter.id;
    void recordChapterView(chapter.id).catch(() => undefined);
  }, [chapter.id]);

  useEffect(() => {
    const saved = localStorage.getItem("readerMode");
    if (saved === "swap" || saved === "scroll") {
      // Restores a client preference after hydration.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMode(saved);
    }

    const savedDirection = localStorage.getItem("readerDirection");
    if (savedDirection === "rtl" || savedDirection === "ltr") {
      setDirection(savedDirection);
    }
  }, []);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === readerRef.current);
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (mode !== "scroll" || !readerRef.current) return;
    const pageElements = readerRef.current.querySelectorAll<HTMLElement>("[data-reader-page]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setCurrentPage(Number((visible.target as HTMLElement).dataset.readerPage));
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    pageElements.forEach((page) => observer.observe(page));
    return () => observer.disconnect();
  }, [mode]);

  const nextPage = useCallback(() => {
    setIsWide(false);
    setCurrentPage((page) => Math.min(page + 1, pages.length - 1));
  }, [pages.length]);

  const previousPage = useCallback(() => {
    setIsWide(false);
    setCurrentPage((page) => Math.max(page - 1, 0));
  }, []);

  const turnLeft = direction === "rtl" ? nextPage : previousPage;
  const turnRight = direction === "rtl" ? previousPage : nextPage;
  const leftTurnDisabled = direction === "rtl"
    ? currentPage === pages.length - 1
    : currentPage === 0;
  const rightTurnDisabled = direction === "rtl"
    ? currentPage === 0
    : currentPage === pages.length - 1;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (mode === "scroll") return;
      const target = event.target as HTMLElement | null;
      if (target?.matches("input, textarea, select, [contenteditable='true']")) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        turnLeft();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        turnRight();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mode, turnLeft, turnRight]);

  function changeMode(nextMode: ReaderMode) {
    setMode(nextMode);
    localStorage.setItem("readerMode", nextMode);
  }

  function changeDirection(nextDirection: ReadingDirection) {
    setDirection(nextDirection);
    localStorage.setItem("readerDirection", nextDirection);
  }

  function goToPage(page: number) {
    setCurrentPage(page);
    setIsWide(false);
    if (mode === "scroll") {
      readerRef.current
        ?.querySelector<HTMLElement>(`[data-reader-page="${page}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  async function toggleFullscreen() {
    if (!document.fullscreenElement) await readerRef.current?.requestFullscreen();
    else await document.exitFullscreen();
  }

  return (
    <section className={styles.reader} ref={readerRef} aria-labelledby="chapter-heading">
      <header className={styles.readerHeader}>
        <Link className={styles.backLink} href={titleHref}>
          <FiArrowLeft aria-hidden="true" />
          Voltar para a obra
        </Link>

        <div className={styles.titleBlock}>
          <span className={styles.eyebrow}><FiBookOpen /> Leitor de capítulo</span>
          <Link href={titleHref} className={styles.mangaTitle}>
            {chapter.mangaInfo.title}
          </Link>
          <h1 id="chapter-heading">Capítulo {chapter.chapterNumber} {chapter.chapterTitle && <span>— {chapter.chapterTitle}</span>}</h1>
          <div className={styles.metadata}>
            <span>{chapter.groupInfo.countryFlag} {chapter.groupInfo.country}</span>
            <span aria-hidden="true">•</span>
            <span>{chapter.groupInfo.name}</span>
            <span aria-hidden="true">•</span>
            <span>{pages.length} páginas</span>
          </div>
        </div>
      </header>

      <div className={styles.toolbar}>
        <div className={styles.pageNavigation}>
          <button onClick={turnLeft} disabled={mode === "scroll" || leftTurnDisabled} aria-label={direction === "rtl" ? "Avançar página" : "Página anterior"}>
            <FiChevronLeft />
          </button>
          <label className={styles.pageSelector}>
            <span>Página</span>
            <select value={currentPage} onChange={(event) => goToPage(Number(event.target.value))}>
              {pages.map((_, index) => <option value={index} key={index}>{index + 1}</option>)}
            </select>
            <span>de {pages.length}</span>
          </label>
          <button onClick={turnRight} disabled={mode === "scroll" || rightTurnDisabled} aria-label={direction === "rtl" ? "Página anterior" : "Avançar página"}>
            <FiChevronRight />
          </button>
        </div>

        <div className={styles.readerPreferences}>
          <div className={styles.directionSelector} aria-label="Direção de leitura">
            <button className={direction === "rtl" ? styles.active : ""} onClick={() => changeDirection("rtl")} aria-pressed={direction === "rtl"} title="Manga: a seta esquerda avança">
              <TbArrowAutofitLeft /><span>Manga</span>
            </button>
            <button className={direction === "ltr" ? styles.active : ""} onClick={() => changeDirection("ltr")} aria-pressed={direction === "ltr"} title="Ocidental: a seta direita avança">
              <TbArrowAutofitRight /><span>Ocidental</span>
            </button>
          </div>

          <div className={styles.modeSelector} aria-label="Modo de leitura">
            <button className={mode === "swap" ? styles.active : ""} onClick={() => changeMode("swap")} aria-pressed={mode === "swap"}>
              <FiBookOpen /><span>Página</span>
            </button>
            <button className={mode === "scroll" ? styles.active : ""} onClick={() => changeMode("scroll")} aria-pressed={mode === "scroll"}>
              <TbArrowAutofitDown /><span>Contínuo</span>
            </button>
          </div>
        </div>

        <button className={styles.fullscreenButton} onClick={toggleFullscreen} aria-label={isFullscreen ? "Sair da tela cheia" : "Ler em tela cheia"}>
          {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
          <span>{isFullscreen ? "Sair" : "Tela cheia"}</span>
        </button>

        <span className={styles.progressTrack} aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </span>
      </div>

      <div className={`${styles.canvas} ${mode === "scroll" ? styles.continuousCanvas : ""}`}>
        {mode === "swap" ? (
          <div className={`${styles.pageStage} ${isWide ? styles.wideStage : ""}`}>
            <MediaImage
              key={pages[currentPage]}
              className={styles.mangaPage}
              fallback="/ipfs-unavailable.svg"
              onLoad={(event) => setIsWide(event.currentTarget.naturalWidth / event.currentTarget.naturalHeight > 0.8)}
              source={pages[currentPage]}
              alt={`Página ${currentPage + 1} do capítulo ${chapter.chapterNumber}`}
            />
            <button className={`${styles.turnPage} ${styles.turnPrevious}`} onClick={turnLeft} disabled={leftTurnDisabled} aria-label={direction === "rtl" ? "Avançar página" : "Página anterior"}>
              <FiChevronLeft />
            </button>
            <button className={`${styles.turnPage} ${styles.turnNext}`} onClick={turnRight} disabled={rightTurnDisabled} aria-label={direction === "rtl" ? "Página anterior" : "Avançar página"}>
              <FiChevronRight />
            </button>
            <span className={styles.pageBadge}>{currentPage + 1} / {pages.length}</span>
          </div>
        ) : (
          <div className={styles.pageStack}>
            {pages.map((page, index) => (
              <figure className={styles.scrollPage} data-reader-page={index} key={page}>
                <span>Página {index + 1}</span>
                <MediaImage source={page} fallback="/ipfs-unavailable.svg" alt={`Página ${index + 1} do capítulo ${chapter.chapterNumber}`} />
              </figure>
            ))}
          </div>
        )}
      </div>

      <footer className={styles.readerFooter}>
        <div>
          <span>Você chegou ao fim</span>
          <strong>Capítulo {chapter.chapterNumber} concluído</strong>
        </div>
        <Link href={titleHref}>Ver todos os capítulos</Link>
      </footer>
    </section>
  );
}

export { MangaChapter };
