// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./mangacard.module.css";

// Icons
import { HiOutlineBookOpen } from "react-icons/hi2";

// Imagens
import Kanan from "../../../public/kanan.jpg";

function MangaCard() {
  return (
    <section>
      <h2 className={styles.sectionTitleWrapper}>
        <HiOutlineBookOpen className={styles.sectionIcon} size={25} />
        <span className={styles.sectionTitle}>Mangas Traduzidos</span>
      </h2>
      <div className={styles.mangasGrid}>
        <article>
          <figure>
            <div className={styles.mangaWraper}>
              <Image
                className={styles.mangaCover}
                src={Kanan}
                alt="Manga Cover"
                fill
                unoptimized
              />
            </div>
            <figcaption>Manga Title</figcaption>
          </figure>
        </article>

        <article>
          <figure>
            <div className={styles.mangaWraper}>
              <Image
                className={styles.mangaCover}
                src={Kanan}
                alt="Manga Cover"
                fill
                unoptimized
              />
            </div>
            <figcaption>Manga Title</figcaption>
          </figure>
        </article>

        <article>
          <figure>
            <div className={styles.mangaWraper}>
              <Image
                className={styles.mangaCover}
                src={Kanan}
                alt="Manga Cover"
                fill
                unoptimized
              />
            </div>
            <figcaption>Manga Title</figcaption>
          </figure>
        </article>

        <article>
          <figure>
            <div className={styles.mangaWraper}>
              <Image
                className={styles.mangaCover}
                src={Kanan}
                alt="Manga Cover"
                fill
                unoptimized
              />
            </div>
            <figcaption>Manga Title</figcaption>
          </figure>
        </article>

        <article>
          <figure>
            <div className={styles.mangaWraper}>
              <Image
                className={styles.mangaCover}
                src={Kanan}
                alt="Manga Cover"
                fill
                unoptimized
              />
            </div>
            <figcaption>Manga Title</figcaption>
          </figure>
        </article>

        <article>
          <figure>
            <div className={styles.mangaWraper}>
              <Image
                className={styles.mangaCover}
                src={Kanan}
                alt="Manga Cover"
                fill
                unoptimized
              />
            </div>
            <figcaption>Manga Title</figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}

export { MangaCard };
