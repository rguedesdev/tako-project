// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./mangacard.module.css";

// Icons
import { HiOutlineBookOpen } from "react-icons/hi2";
import { GiEvilBook } from "react-icons/gi";
import { FaPenNib } from "react-icons/fa";
import { BiPen } from "react-icons/bi";
import { RiQuillPenLine, RiQuillPenAiLine } from "react-icons/ri";

// Imagens
import Kanan from "../../../public/kanan.jpg";
import Ruri from "../../../public/ruri-dragon.jpg";
import Mato from "../../../public/mato-seihei.jpg";
import Takamine from "../../../public/takamine.jpg";
import BokuKokoro from "../../../public/boku-kokoro.jpg";
import DrSlump from "../../../public/dr-slump.jpg";

function MangaCard() {
  const mangas = [
    {
      id: 1,
      mangaCover: Kanan,
      mangaTitle: "Kanan-sama wa Akumade Choroi",
      mangaka: "Nonco",
    },
    {
      id: 2,
      mangaCover: Ruri,
      mangaTitle: "Ruri Dragon",
      mangaka: "Shindou Masaoki",
    },
    {
      id: 3,
      mangaCover: Mato,
      mangaTitle: "Mato Seihei no Slave",
      mangaka: "Takemura Youhei e Takahiro",
    },
    {
      id: 4,
      mangaCover: Takamine,
      mangaTitle: "Haite Kudasai, Takamine-san",
      mangaka: "Hiiragi Yuuichi",
    },
    {
      id: 5,
      mangaCover: BokuKokoro,
      mangaTitle: "Boku no Kokoro no Yabai Yatsu",
      mangaka: "Sakurai Norio",
    },
    {
      id: 6,
      mangaCover: DrSlump,
      mangaTitle: "Dr. Slump",
      mangaka: "Akira Toriyama",
    },
  ];

  return (
    <section>
      <h2 className={styles.sectionTitleWrapper}>
        <HiOutlineBookOpen className={styles.sectionIcon} size={25} />
        <span className={styles.sectionTitle}>Mangas Traduzidos</span>
      </h2>
      <div className={styles.mangasGrid}>
        {mangas.map((manga) => (
          <Link
            key={manga.id}
            href={`/title/${manga.id}`}
            className={styles.cardLink}
          >
            <article className={styles.mangaCard}>
              <figure>
                <div className={styles.mangaWraper}>
                  <Image
                    className={styles.mangaCover}
                    src={manga.mangaCover}
                    alt="Manga Cover"
                    fill
                    unoptimized
                  />
                </div>

                <figcaption className={styles.mangaInfo}>
                  <div className={styles.mangaInfoLine}>
                    <GiEvilBook size={16} />
                    <span>{manga.mangaTitle}</span>
                  </div>

                  <hr className={styles.hrFaded} />

                  <div className={styles.mangaInfoLine}>
                    <RiQuillPenLine size={16} />
                    <span>{manga.mangaka}</span>
                  </div>
                </figcaption>
              </figure>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { MangaCard };
