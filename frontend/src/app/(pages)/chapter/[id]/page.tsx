// Imports Principais
import Link from "next/link";

// Style Sheet CSS
import styles from "./chapter.module.css";

// Componentes
import { Comments } from "@/components/Comments/page";

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

function ChapterPage() {
  return (
    <div className={styles.page}>
      <main className={styles.chapterContainer}>
        <Link className={styles.mangaTile} href={`/`}>
          <h1>Ore no Imouto ga Konna ni Wake ga Nai</h1>
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
          <button className={styles.swapBtn}>
            <TbArrowAutofitLeft size={20} />
            <span>Swap</span>
          </button>
          <button className={styles.scrollBtn}>
            <TbArrowAutofitDown size={20} />
            <span>Scroll</span>
          </button>
        </div>
        <Comments />
      </main>
    </div>
  );
}

export default ChapterPage;
