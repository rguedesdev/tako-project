// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./mangainfo.module.css";

// Icons
import { AiOutlineRead } from "react-icons/ai";
import { LuTv } from "react-icons/lu";
import { RiBilibiliFill } from "react-icons/ri";
import { RiBilibiliLine } from "react-icons/ri";

// Images
import Kanan from "../../../public/kanan.jpg";

function MangaInfo() {
  return (
    <section className={styles.mangaInfoContainer}>
      <div className={styles.mangaWrapper}>
        <Image
          className={styles.mangaCover}
          src={Kanan}
          alt="Manga Cover"
          fill
          unoptimized
          priority
        />
      </div>
      <div>
        <h1 className={styles.mangaTitle}>Kanan-sama wa Akumade Choroi</h1>
        <div className={styles.mangaTags}>
          <span className={styles.tag}>Comédia</span>
          <span className={styles.tag}>Ecchi</span>
          <span className={styles.tag}>Romance</span>
        </div>
        <p className={styles.sinopse}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className={styles.trackersContainer}>
          <h3 className={styles.trackersTitle}>Trackers</h3>
          <div className={styles.trackers}>
            <span className={styles.tracker}>OtakuList</span>
            <span className={styles.tracker}>My Anime List</span>
            <span className={styles.tracker}>AniList</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { MangaInfo };
