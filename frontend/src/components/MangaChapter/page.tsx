"use client";

import Link from "next/link";
import { MdArrowBackIosNew, MdArrowForwardIos, MdList } from "react-icons/md";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FiBookOpen,
  FiMaximize2,
  FiMinimize2,
} from "react-icons/fi";
import {
  TbArrowAutofitDown,
  TbArrowAutofitLeft,
  TbArrowAutofitRight,
} from "react-icons/tb";

import { useUser } from "@/context/UserContext";
import { recordChapterRead, recordChapterView, reportChapterPagesToReaderNode, type ChapterDetail } from "@/lib/catalog";
import { buildMediaCandidates, MediaImage } from "@/components/MediaImage/page";
import styles from "./mangachapter.module.css";

type ReaderMode = "swap" | "scroll";
type ReadingDirection = "rtl" | "ltr";

function MangaChapter({
  chapter,
  previousChapterId,
  nextChapterId,
}: {
  chapter: ChapterDetail;
  previousChapterId: string | null;
  nextChapterId: string | null;
}) {
  const pages = useMemo(
    () => chapter.pages.filter(Boolean),
    [chapter.pages],
  );
  const recordedChapterID = useRef<string | null>(null);
  const recordedReadKey = useRef<string | null>(null);
  const reportedReaderPages = useRef(new Set<string>());
  const readerRetryTimers = useRef(new Set<ReturnType<typeof setTimeout>>());
  const preloadImages = useRef<HTMLImageElement[]>([]);
  const readerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const { authToken, authenticatedUser } = useUser();
  const readerUserID = authenticatedUser?.id;
  const [isWide, setIsWide] = useState(false);
  const [pageAspectRatio, setPageAspectRatio] = useState(0.72);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageFrame, setPageFrame] = useState({ width: 648, height: 900 });
  const [mode, setMode] = useState<ReaderMode>("swap");
  const [direction, setDirection] = useState<ReadingDirection>("rtl");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const controlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [progressVisible, setProgressVisible] = useState(false);
  const progressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastProgressPage = useRef({ chapterID: chapter.id, page: currentPage });
  const titleHref = `/title/${chapter.manga}`;
  const progress = ((currentPage + 1) / pages.length) * 100;

  const revealReaderControls = useCallback(() => {
    if (!isFullscreen) return;
    setControlsVisible(true);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setControlsVisible(false), 2200);
  }, [isFullscreen]);

  const reportPagesToReaderNode = useCallback((pageIndexes: number[]) => {
    if (!authToken || !readerUserID || pageIndexes.length === 0) return;
    const keys = pageIndexes
      .filter((index) => Number.isInteger(index) && index >= 0 && index < pages.length)
      .map((index) => `${readerUserID}:${chapter.id}:${index}`)
      .filter((key) => !reportedReaderPages.current.has(key));
    if (keys.length === 0) return;
    keys.forEach((key) => reportedReaderPages.current.add(key));
    const indexes = keys.map((key) => Number(key.slice(key.lastIndexOf(":") + 1)));
    const retry = (retryIndexes: number[]) => {
      keys.filter((key) => retryIndexes.includes(Number(key.slice(key.lastIndexOf(":") + 1))))
        .forEach((key) => reportedReaderPages.current.delete(key));
      if (retryIndexes.length === 0) return;
      const timer = setTimeout(() => {
        readerRetryTimers.current.delete(timer);
        reportPagesToReaderNode(retryIndexes);
      }, 15_000);
      readerRetryTimers.current.add(timer);
    };
    void (async () => {
      try {
        for (let offset = 0; offset < indexes.length; offset += 100) {
          const batch = indexes.slice(offset, offset + 100);
          const accepted = await reportChapterPagesToReaderNode(chapter.id, batch, authToken);
          if (accepted < batch.length) {
            retry(batch);
          }
        }
      } catch {
        retry(indexes);
      }
    })();
  }, [authToken, chapter.id, pages.length, readerUserID]);

  useEffect(() => () => {
    readerRetryTimers.current.forEach(clearTimeout);
    readerRetryTimers.current.clear();
    reportedReaderPages.current.clear();
  }, [chapter.id]);

  useEffect(() => {
    if (recordedChapterID.current === chapter.id) return;
    recordedChapterID.current = chapter.id;
    void recordChapterView(chapter.id).catch(() => undefined);
  }, [chapter.id]);

  useEffect(() => {
    const primaryUrls = pages.map((page, index) =>
      buildMediaCandidates(page, "/ipfs-unavailable.svg", chapter.telegramPages?.[index])[0],
    );
    const backupUrls = pages.map((_, index) => chapter.telegramPages?.[index] ?? null);
    const pageByUrl = new Map<string, number>();
    primaryUrls.forEach((url, index) => { if (url) pageByUrl.set(url, index); });
    backupUrls.forEach((url, index) => { if (url) pageByUrl.set(url, index); });
    const urls = [...primaryUrls.slice(0, 1), ...backupUrls.slice(0, 1), ...primaryUrls.slice(1), ...backupUrls.slice(1)]
      .filter((url): url is string => Boolean(url));
    let nextIndex = 0;
    let cancelled = false;
    let submitted = false;
    const active = new Set<HTMLImageElement>();
    const loadedPages = new Set<number>();
    preloadImages.current = [];

    function submitLoadedPagesWhenReady() {
      if (cancelled || submitted || nextIndex < urls.length || active.size > 0 || loadedPages.size === 0) return;
      submitted = true;
      reportPagesToReaderNode([...loadedPages]);
    }

    function startNext() {
      while (!cancelled && active.size < 6 && nextIndex < urls.length) {
        const image = new Image();
        const url = urls[nextIndex++];
        image.decoding = "async";
        active.add(image);
        preloadImages.current.push(image);
        const finished = () => {
          active.delete(image);
          if (!cancelled) {
            startNext();
            submitLoadedPagesWhenReady();
          }
        };
        image.onload = () => {
          const pageIndex = pageByUrl.get(url);
          if (pageIndex != null) loadedPages.add(pageIndex);
          finished();
        };
        image.onerror = finished;
        image.src = url;
      }
      submitLoadedPagesWhenReady();
    }

    startNext();
    return () => {
      cancelled = true;
      active.forEach((image) => {
        image.onload = null;
        image.onerror = null;
        image.removeAttribute("src");
      });
      active.clear();
      preloadImages.current = [];
    };
  }, [chapter.id, chapter.telegramPages, pages, reportPagesToReaderNode]);

  useEffect(() => {
    if (!authToken || !readerUserID || !pages.length || currentPage < pages.length - 1) return;
    const readKey = `${readerUserID}:${chapter.id}`;
    if (recordedReadKey.current === readKey) return;
    recordedReadKey.current = readKey;
    void recordChapterRead(chapter.id, authToken).catch(() => {
      if (recordedReadKey.current === readKey) recordedReadKey.current = null;
    });
  }, [chapter.id, authToken, readerUserID, currentPage, pages.length]);

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
    if (isFullscreen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const updatePageFrame = () => {
      const canvasStyle = window.getComputedStyle(canvas);
      const horizontalPadding = parseFloat(canvasStyle.paddingLeft) + parseFloat(canvasStyle.paddingRight);
      const verticalPadding = parseFloat(canvasStyle.paddingTop) + parseFloat(canvasStyle.paddingBottom);
      const availableWidth = Math.max(240, canvas.clientWidth - horizontalPadding);
      const availableHeight = Math.max(260, canvas.clientHeight - verticalPadding);
      const maxWidth = isWide ? 1300 : 900;
      const width = Math.min(maxWidth, availableWidth, availableHeight * pageAspectRatio);
      const height = width / pageAspectRatio;
      setPageFrame((current) => current.width === width && current.height === height ? current : { width, height });
    };
    updatePageFrame();
    const observer = new ResizeObserver(updatePageFrame);
    observer.observe(canvas);
    window.addEventListener("resize", updatePageFrame);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePageFrame);
    };
  }, [isFullscreen, isWide, pageAspectRatio]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      const firstPage = canvas?.querySelector<HTMLElement>(
        `.${styles.pageStage}, [data-reader-page="0"]`,
      );
      if (!firstPage) return;
      const toolbarHeight = toolbarRef.current?.getBoundingClientRect().height ?? 70;
      firstPage.style.scrollMarginTop = `${toolbarHeight + 12}px`;
      firstPage.scrollIntoView({ behavior: "auto", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [chapter.id]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isFullscreen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (lastProgressPage.current.chapterID !== chapter.id) {
      lastProgressPage.current = { chapterID: chapter.id, page: currentPage };
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProgressVisible(false);
      return;
    }
    if (lastProgressPage.current.page === currentPage) return;
    lastProgressPage.current.page = currentPage;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgressVisible(true);
    if (progressTimer.current) clearTimeout(progressTimer.current);
    progressTimer.current = setTimeout(() => setProgressVisible(false), 1400);
    return () => {
      if (progressTimer.current) clearTimeout(progressTimer.current);
      progressTimer.current = null;
    };
  }, [chapter.id, currentPage]);

  useEffect(() => {
    if (!isFullscreen) return;
    setControlsVisible(false);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = null;
    return () => {
      if (controlsTimer.current) clearTimeout(controlsTimer.current);
      controlsTimer.current = null;
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (!isFullscreen) return;
    function handleFullscreenKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsFullscreen(false);
    }
    window.addEventListener("keydown", handleFullscreenKeyDown);
    return () => window.removeEventListener("keydown", handleFullscreenKeyDown);
  }, [isFullscreen]);

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
    if (mode === "swap" && pages.length > 0 && currentPage === pages.length - 1) {
      const adSlot = document.getElementById("tako-ad-slot");
      adSlot?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setIsWide(false);
    setCurrentPage((page) => Math.min(page + 1, pages.length - 1));
  }, [currentPage, mode, pages.length]);

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

  function toggleFullscreen() {
    setIsFullscreen((fullscreen) => !fullscreen);
  }

  return (
    <>
    <section
      className={`${styles.reader} ${isFullscreen ? `${styles.isFullscreen} ${controlsVisible ? "" : styles.controlsHidden}` : ""}`}
      ref={readerRef}
      onMouseMove={revealReaderControls}
      onTouchStart={revealReaderControls}
      aria-labelledby="chapter-heading"
    >
      <header className={styles.readerHeader}>
        <div className={styles.titleBlock}>
          <span className={styles.eyebrow}><FiBookOpen /> Leitor de capítulo</span>
          <Link href={titleHref} className={styles.mangaTitle}>
            {chapter.mangaInfo.title}
          </Link>
          <h1 id="chapter-heading">Capítulo {chapter.chapterNumber} {chapter.chapterTitle && <span>— {chapter.chapterTitle}</span>}</h1>
          <div className={styles.metadata}>
            <span>{chapter.groupInfo.name}</span>
            <span aria-hidden="true">•</span>
            <span>{pages.length} páginas</span>
          </div>
        </div>
      </header>

      <div className={styles.toolbar} ref={toolbarRef}>
        <div className={styles.pageNavigation}>
          <label className={styles.pageSelector}>
            <span>Página</span>
            <select value={currentPage} onChange={(event) => goToPage(Number(event.target.value))}>
              {pages.map((_, index) => <option value={index} key={index}>{index + 1}</option>)}
            </select>
            <span>de {pages.length}</span>
          </label>
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

      </div>

      <div ref={canvasRef} className={`${styles.canvas} ${mode === "scroll" ? styles.continuousCanvas : ""}`}>
        {mode === "swap" ? (
          <div
            className={`${styles.pageStage} ${isWide ? styles.wideStage : ""}`}
            style={{ aspectRatio: `${pageAspectRatio}`, ...(isFullscreen ? {} : pageFrame) }}
          >
            <MediaImage
              key={pages[currentPage]}
              className={styles.mangaPage}
              fallback="/ipfs-unavailable.svg"
              onLoad={(event) => {
                if (!event.currentTarget.currentSrc.includes("ipfs-unavailable.svg")) reportPagesToReaderNode([currentPage]);
                const ratio = event.currentTarget.naturalWidth / event.currentTarget.naturalHeight;
                setPageAspectRatio(ratio);
                setIsWide(ratio > 0.8);
              }}
              source={pages[currentPage]}
              backupSource={chapter.telegramPages?.[currentPage]}
              alt={`Página ${currentPage + 1} do capítulo ${chapter.chapterNumber}`}
            />
          </div>
        ) : (
          <div className={styles.pageStack}>
            {pages.map((page, index) => (
              <figure className={styles.scrollPage} data-reader-page={index} key={page}>
                <span>Página {index + 1}</span>
                <MediaImage source={page} backupSource={chapter.telegramPages?.[index]} fallback="/ipfs-unavailable.svg" onLoad={(event) => { if (!event.currentTarget.currentSrc.includes("ipfs-unavailable.svg")) reportPagesToReaderNode([index]); }} alt={`Página ${index + 1} do capítulo ${chapter.chapterNumber}`} />
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
        <nav className={styles.chapterNavigation} aria-label="Navegação entre capítulos">
          {previousChapterId && <Link href={`/title/${chapter.manga}/${previousChapterId}`}><MdArrowBackIosNew aria-hidden="true" />Capítulo anterior</Link>}
          {nextChapterId
            ? <Link href={`/title/${chapter.manga}/${nextChapterId}`}>Próximo capítulo<MdArrowForwardIos aria-hidden="true" /></Link>
            : <Link href={titleHref}><MdList className={styles.chapterListIcon} aria-hidden="true" />Ver todos os capítulos</Link>}
        </nav>
      </footer>
    </section>
    <div className={`${styles.progressIndicator} ${progressVisible ? styles.progressVisible : ""}`} role="status" aria-live="polite" aria-atomic="true">
      <span
        className={`${styles.progressLabel} ${progress >= 100 ? styles.progressLabelAtEnd : ""}`}
        style={{ left: `${progress}%` }}
      >{currentPage + 1}</span>
      <span className={styles.progressTrack} aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </span>
    </div>
    </>
  );
}

export { MangaChapter };
