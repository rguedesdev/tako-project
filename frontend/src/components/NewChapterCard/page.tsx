// Imports Pricipais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./newchapter.module.css";

// Icons
import { BiHash } from "react-icons/bi";
import { MdOutlinePeopleOutline } from "react-icons/md";

// Images
import Elf from "../../../public/elf.jpg";

function NewChapterCard() {
  return (
    <article className={styles.newChapterCard}>
      <figure>
        <Image
          className={styles.mangaCover}
          src={Elf}
          alt="Manga Cover"
          width={150}
          height={220}
          unoptimized
          priority
        />
        {/* <figcaption className={styles.mangaTitle}>One Piece</figcaption> */}
      </figure>
      <ul className={styles.capList}>
        <h2 className={styles.mangaTitle}>One Piece</h2>

        <li className={styles.capLi}>
          <BiHash size={20} />
          <Link className={styles.capLink} href={`/`}>
            Cap. 1100
          </Link>
        </li>
        <li className={styles.capLi}>
          <BiHash size={20} />
          <Link className={styles.capLink} href={`/`}>
            Cap. 1099
          </Link>
        </li>
        <h3 className={styles.scanWrapper}>
          <MdOutlinePeopleOutline size={20} />
          <span className={styles.scanName}>Jigoku Scan</span>
        </h3>
      </ul>
    </article>
  );
}

export { NewChapterCard };
