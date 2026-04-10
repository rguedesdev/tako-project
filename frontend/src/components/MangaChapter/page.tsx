"use client";

// Imports principais
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./mangachapter.module.css";

// Icons
import { CgArrowDownR } from "react-icons/cg";
import { TbArrowAutofitDown } from "react-icons/tb";
import { CgArrowRightR } from "react-icons/cg";
import { TbArrowAutofitRight } from "react-icons/tb";
import { CgArrowLeftR } from "react-icons/cg";
import { TbArrowAutofitLeft } from "react-icons/tb";

import { PiSwap } from "react-icons/pi";
import { RiSwapBoxLine } from "react-icons/ri";
import { BsFileArrowDown } from "react-icons/bs";

import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

// Arrows Icons
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

// Imagens
import Page01 from "../../../public/cap/01.jpg";
import Page02 from "../../../public/cap/02.jpg";
import Page03 from "../../../public/cap/03.jpg";
import Page04 from "../../../public/cap/04.jpg";
import Page05 from "../../../public/cap/05.jpg";
import Page06 from "../../../public/cap/06.jpg";
import Page07 from "../../../public/cap/07.jpg";
import Page08 from "../../../public/cap/08.jpg";
import Page09 from "../../../public/cap/09.jpg";
import Page10 from "../../../public/cap/10.jpg";

function MangaChapter() {
  const [isWide, setIsWide] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [mode, setMode] = useState<"swap" | "scroll">("swap");

  const pages = [
    Page01,
    Page02,
    Page03,
    Page04,
    Page05,
    Page06,
    Page07,
    Page08,
    Page09,
    Page10,
  ];

  function setSwapMode() {
    setMode("swap");
    localStorage.setItem("readerMode", "swap");
  }

  function setScrollMode() {
    setMode("scroll");
    localStorage.setItem("readerMode", "scroll");
  }

  useEffect(() => {
    const saved = localStorage.getItem("readerMode");

    if (saved === "swap" || saved === "scroll") {
      setMode(saved);
    }
  }, []);

  function nextPage() {
    setIsWide(false);

    setCurrentPage((prev) => {
      if (prev >= pages.length - 1) return prev;
      return prev + 1;
    });
  }

  function prevPage() {
    setIsWide(false);

    setCurrentPage((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // 🚫 desativa teclado no modo scroll
      if (mode === "scroll") return;

      if (e.key === "ArrowLeft") {
        nextPage();
      }

      if (e.key === "ArrowRight") {
        prevPage();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mode]); // 💥 IMPORTANTE

  return (
    <section>
      <Link className={styles.mangaTile} href={`/`}>
        <h1>Kanan-sama wa Akumade Choroi</h1>
      </Link>
      <h2 className={styles.chapterTitle}>
        Título do Capítulo - Capítulo 1: O Início de Tudo
      </h2>
      <div className={styles.navigationButtons}>
        <Link href={`/`} className={styles.prevBtn}>
          <IoArrowBackOutline size={20} />
          <span>Prev</span>
        </Link>
        <Link href={`/`} className={styles.nextBtn}>
          <span>Next</span>
          <IoArrowForward size={20} />
        </Link>
      </div>
      <div className={styles.ReadingButtons}>
        <button className={styles.swapBtn} onClick={setSwapMode}>
          <TbArrowAutofitLeft size={20} />
          <span>Swap</span>
        </button>

        <button className={styles.scrollBtn} onClick={setScrollMode}>
          <TbArrowAutofitDown size={20} />
          <span>Scroll</span>
        </button>
      </div>
      <div className={styles.mangaWrapper}>
        {mode === "swap" && (
          <Image
            onClick={nextPage}
            className={isWide ? styles.widePage : styles.mangaPage}
            onLoadingComplete={(img) => {
              const ratio = img.naturalWidth / img.naturalHeight;
              setIsWide(ratio > 0.8);
            }}
            src={pages[currentPage]}
            alt=""
            width={800}
            height={1200}
            unoptimized
          />
        )}

        {mode === "scroll" &&
          pages.map((page, index) => (
            <Image
              style={{ marginBottom: 20 }}
              key={index}
              src={page}
              alt=""
              className={styles.mangaPage}
              width={800}
              height={1200}
              unoptimized
            />
          ))}
      </div>
    </section>
  );
}

export { MangaChapter };
