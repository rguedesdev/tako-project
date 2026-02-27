// Imports Pricipais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./newchapter.module.css";

// Icons
import { BiHash } from "react-icons/bi";
import { MdAccessTime, MdOutlinePeopleOutline } from "react-icons/md";

// Images
import OnePiece from "../../../public/one-piece.jpg";
import RuriDragon from "../../../public/ruri-dragon.jpg";
import ChainsawMan from "../../../public/chainsaw.jpg";
import Elf from "../../../public/elf.jpg";
import DramaQueen from "../../../public/drama.jpg";
import Nisekoi from "../../../public/nisekoi.jpg";
import ExorcistOtosenai from "../../../public/exorcist-otosenai.jpg";
import OnePunchMan from "../../../public/one-punch.jpg";
import SakamotoDays from "../../../public/sakamoto-days.jpg";
import WitchWatch from "../../../public/witch-watch.jpg";
import Takamine from "../../../public/takamine.jpg";
import Dandadan from "../../../public/dandadan.jpg";
import BokuKokoro from "../../../public/boku-kokoro.jpg";
import DrSlump from "../../../public/dr-slump.jpg";
import MatoSeihei from "../../../public/mato-seihei.jpg";
import Sanda from "../../../public/sanda.jpg";
import Mairimashita from "../../../public/mairimashita.jpg";
import Kanan from "../../../public/kanan.jpg";

function NewChapterCard() {
  const realeases = [
    {
      id: 0,
      image: OnePiece,
      title: "One Piece",
      chapters: [
        { number: 13, time: "há 25 min" },
        { number: 12, time: "há 1 hora" },
        { number: 11, time: "há 2 hora" },
        { number: 10, time: "há 1 dia" },
      ],
      scan: "Piece Project",
    },
    {
      id: 1,
      image: RuriDragon,
      title: "Ruri Dragon",
      chapters: [
        { number: 21, time: "há 25 min" },
        { number: 20, time: "há 1 hora" },
        { number: 19, time: "há 2 hora" },
        { number: 18, time: "há 1 dia" },
      ],
      scan: "Morro dos Scans",
    },
    {
      id: 2,
      image: ChainsawMan,
      title: "Chainsaw Man",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Eleven Scanlator",
    },
    {
      id: 3,
      image: Elf,
      title: "Kane no Naru Mori",
      chapters: [
        { number: 13, time: "há 25 min" },
        { number: 12, time: "há 1 hora" },
        { number: 11, time: "há 2 hora" },
        { number: 10, time: "há 1 dia" },
      ],
      scan: "Jigoku Scan",
    },
    {
      id: 4,
      image: DramaQueen,
      title: "Drama Queen",
      chapters: [
        { number: 21, time: "há 25 min" },
        { number: 20, time: "há 1 hora" },
        { number: 19, time: "há 2 hora" },
        { number: 18, time: "há 1 dia" },
      ],
      scan: "Eleven Scanlator",
    },
    {
      id: 5,
      image: Nisekoi,
      title: "Nisekoi",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Anarchy Scan",
    },
    {
      id: 6,
      image: ExorcistOtosenai,
      title: "Exorcist Otosenai",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "EverFox Scans",
    },
    {
      id: 7,
      image: OnePunchMan,
      title: "One Punch Man",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Anarquia scans",
    },
    {
      id: 8,
      image: SakamotoDays,
      title: "Sakamoto Days",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Rochedo Scanlation",
    },
    {
      id: 9,
      image: WitchWatch,
      title: "Witch Watch",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Anarchy Scan",
    },
    {
      id: 10,
      image: Takamine,
      title: "Haite Kudasai, Takamine-san",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Tamako Mangás",
    },
    {
      id: 11,
      image: Dandadan,
      title: "Dandadan",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "TQ Scans",
    },
    {
      id: 12,
      image: BokuKokoro,
      title: "Boku no Kokoro no Yabai Yatsu",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Book Coffee Scan",
    },
    {
      id: 13,
      image: DrSlump,
      title: "Dr. Slump",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Otaku Scantrad",
    },
    {
      id: 14,
      image: MatoSeihei,
      title: "Mato Seihei no Slave",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Kwai Scan",
    },
    {
      id: 15,
      image: Sanda,
      title: "Sanda",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Umbrella Scan",
    },
    {
      id: 16,
      image: Mairimashita,
      title: "Mairimashita! Iruma-kun",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Kakusei Project",
    },
    {
      id: 17,
      image: Kanan,
      title: "Kanan-sama wa Akumade Choroi",
      chapters: [
        { number: 55, time: "há 25 min" },
        { number: 54, time: "há 1 hora" },
        { number: 53, time: "há 2 hora" },
        { number: 52, time: "há 1 dia" },
      ],
      scan: "Hikari Scan",
    },
  ];

  return (
    <div className={styles.cardsGrid}>
      {realeases &&
        realeases.map((realease) => (
          <article key={realease.id} className={styles.newChapterCard}>
            <figure className={styles.coverWrapper}>
              <Image
                className={styles.mangaCover}
                src={realease.image}
                alt="Manga Cover"
                unoptimized
                priority
              />
              {/* <figcaption className={styles.mangaTitle}>One Piece</figcaption> */}
            </figure>
            <ul className={styles.capList}>
              <div className={styles.chaptersWrapper}>
                <h2 className={styles.mangaTitle}>{realease.title}</h2>
                {realease.chapters.map((chapter) => (
                  <li key={chapter.number} className={styles.capLi}>
                    <div className={styles.capInfo}>
                      <BiHash size={18} />
                      <Link className={styles.capLink} href={`/`}>
                        Capítulo {chapter.number}
                      </Link>
                    </div>
                    <div className={styles.capTime}>
                      <MdAccessTime size={16} />
                      <span>{chapter.time}</span>
                    </div>
                  </li>
                ))}
              </div>
              <hr className={styles.hrFaded} />
              <div>
                <h3 className={styles.scanWrapper}>
                  <MdOutlinePeopleOutline size={19} />
                  <span className={styles.scanName}>{realease.scan}</span>
                </h3>
              </div>
            </ul>
          </article>
        ))}
    </div>
  );
}

export { NewChapterCard };
