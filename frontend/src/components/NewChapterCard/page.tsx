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
// import RuriDragon from "../../../public/ruri-dragon.jpg";
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
        { number: 1303, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 12, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 11, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 10, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "Piece Project", country: "Brazil" },
    },
    {
      id: 1,
      image:
        "https://bafybeign2avglfbkz77dfj5eexvyt4n7xqhgw6djb2daoxnzcanb6ti7se.ipfs.dweb.link/?filename=ruri-dragon.jpg",
      title: "Ruri Dragon",
      chapters: [
        { number: 21, time: "há 25 min", language: "Japanese" },
        { number: 20, time: "há 1 hora", language: "Japanese" },
        { number: 19, time: "há 2 hora", language: "Japanese" },
        { number: 18, time: "há 1 dia", language: "Japanese" },
      ],
      scanInfo: { name: "Morro dos Scans", country: "Japan" },
    },
    {
      id: 2,
      image: ChainsawMan,
      title: "Chainsaw Man",
      chapters: [
        { number: 55, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 54, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 53, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 52, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "Eleven Scanlator", country: "Brazil" },
    },
    {
      id: 3,
      image: Elf,
      title: "Kane no Naru Mori",
      chapters: [
        { number: 13, time: "há 25 min", language: "English" },
        { number: 12, time: "há 1 hora", language: "English" },
        { number: 11, time: "há 2 hora", language: "English" },
        { number: 10, time: "há 1 dia", language: "English" },
      ],
      scan: "Jigoku Scan",
      country: "🇺🇸",
      scanInfo: { name: "Jigoku Scan", country: "EUA" },
    },
    {
      id: 4,
      image: DramaQueen,
      title: "Drama Queen",
      chapters: [
        { number: 13, time: "há 25 min", language: "English" },
        { number: 12, time: "há 1 hora", language: "English" },
        { number: 11, time: "há 2 hora", language: "English" },
        { number: 10, time: "há 1 dia", language: "English" },
      ],
      scanInfo: { name: "Eleven Scanlator", country: "EUA" },
    },
    {
      id: 5,
      image: Nisekoi,
      title: "Nisekoi",
      chapters: [
        { number: 55, time: "há 25 min", language: "Polish" },
        { number: 54, time: "há 1 hora", language: "Polish" },
        { number: 53, time: "há 2 hora", language: "Polish" },
        { number: 52, time: "há 1 dia", language: "Polish" },
      ],
      scanInfo: { name: "Anarchy Scan", country: "Poland" },
    },
    {
      id: 6,
      image: ExorcistOtosenai,
      title: "Exorcist Otosenai",
      chapters: [
        { number: 13, time: "há 25 min", language: "English" },
        { number: 12, time: "há 1 hora", language: "English" },
        { number: 11, time: "há 2 hora", language: "English" },
        { number: 10, time: "há 1 dia", language: "English" },
      ],
      scanInfo: { name: "EverFox Scans", country: "EUA" },
    },
    {
      id: 7,
      image: OnePunchMan,
      title: "One Punch Man",
      chapters: [
        { number: 55, time: "há 25 min", language: "Spanish" },
        { number: 54, time: "há 1 hora", language: "Spanish" },
        { number: 53, time: "há 2 hora", language: "Spanish" },
        { number: 52, time: "há 1 dia", language: "Spanish" },
      ],
      scanInfo: { name: "Anarquia scans", country: "Spain" },
    },
    {
      id: 8,
      image: SakamotoDays,
      title: "Sakamoto Days",
      chapters: [
        { number: 55, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 54, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 53, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 52, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "Rochedo Scanlation", country: "Brazil" },
    },
    {
      id: 9,
      image: WitchWatch,
      title: "Witch Watch",
      chapters: [
        { number: 55, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 54, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 53, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 52, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "Anarchy Scan", country: "Brazil" },
    },
    {
      id: 10,
      image: Takamine,
      title: "Haite Kudasai, Takamine-san",
      chapters: [
        { number: 55, time: "há 25 min", language: "Chinese" },
        { number: 54, time: "há 1 hora", language: "Chinese" },
        { number: 53, time: "há 2 hora", language: "Chinese" },
        { number: 52, time: "há 1 dia", language: "Chinese" },
      ],
      scanInfo: { name: "Tamako Mangás", country: "China" },
    },
    {
      id: 11,
      image: Dandadan,
      title: "Dandadan",
      chapters: [
        { number: 55, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 54, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 53, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 52, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "TQ Scans", country: "Brazil" },
    },
    {
      id: 12,
      image: BokuKokoro,
      title: "Boku no Kokoro no Yabai Yatsu",
      chapters: [
        { number: 55, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 54, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 53, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 52, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "Book Coffee Scan", country: "Brazil" },
    },
    {
      id: 13,
      image: DrSlump,
      title: "Dr. Slump",
      chapters: [
        { number: 55, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 54, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 53, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 52, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "Otaku Scantrad", country: "Brazil" },
    },
    {
      id: 14,
      image: MatoSeihei,
      title: "Mato Seihei no Slave",
      chapters: [
        { number: 55, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 54, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 53, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 52, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "Kwai Scan", country: "Brazil" },
    },
    {
      id: 15,
      image: Sanda,
      title: "Sanda",
      chapters: [
        { number: 55, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 54, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 53, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 52, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "Umbrella Scan", country: "Brazil" },
    },
    {
      id: 16,
      image: Mairimashita,
      title: "Mairimashita! Iruma-kun",
      chapters: [
        { number: 55, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 54, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 53, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 52, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "Kakusei Project", country: "Brazil" },
    },
    {
      id: 17,
      image: Kanan,
      title: "Kanan-sama wa Akumade Choroi",
      chapters: [
        { number: 55, time: "há 25 min", language: "Brazilian Portuguese" },
        { number: 54, time: "há 1 hora", language: "Brazilian Portuguese" },
        { number: 53, time: "há 2 hora", language: "Brazilian Portuguese" },
        { number: 52, time: "há 1 dia", language: "Brazilian Portuguese" },
      ],
      scanInfo: { name: "Hikari Scan", country: "Brazil" },
    },
  ];

  const languageFlags = {
    "Brazilian Portuguese": "🇧🇷",
    Japanese: "🇯🇵",
    English: "🇺🇸",
    Spanish: "🇪🇸",
    Polish: "🇵🇱",
    Chinese: "🇨🇳",
  };

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
                fill
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
                        {`${languageFlags[chapter.language as keyof typeof languageFlags]} Capítulo ${chapter.number}`}
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
                  <span className={styles.scanName}>
                    {realease.scanInfo.name}
                  </span>
                </h3>
              </div>
            </ul>
          </article>
        ))}
    </div>
  );
}

export { NewChapterCard };
