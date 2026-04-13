// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./mangainfo.module.css";

// Icons
import { AiOutlineRead } from "react-icons/ai";
import { LuTv } from "react-icons/lu";
import { RiBilibiliFill } from "react-icons/ri";
import { RiBilibiliLine } from "react-icons/ri";
import { LuSquareLibrary } from "react-icons/lu";
import { CiPlay1 } from "react-icons/ci";

// Images
import Kanan from "../../../public/kanan.jpg";
import OtakuList from "../../../public/otakulist.png";
import MAL from "../../../public/mal.png";
import AniList from "../../../public/anilist.png";
import AniPlanet from "../../../public/animeplanet.png";

import OtakuyaSan from "../../../public/otakuyasan.png";
import Amazon from "../../../public/amazon.png";
import Rakuten from "../../../public/rakuten.png";
import CDJapan from "../../../public/cdjapan.png";

function MangaInfo() {
  return (
    <section className={styles.mangaInfoContainer}>
      <div>
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
        <div className={styles.btnWrapper}>
          <button className={styles.btnAdd}>
            <LuSquareLibrary size={20} />
            <span>Adicionar à Biblioteca</span>
          </button>
          <button className={styles.btnRead}>
            <CiPlay1 size={20} />
            <span>Iniciar leitura</span>
          </button>
        </div>
      </div>
      <div className={styles.mangaInfo}>
        <h1 className={styles.mangaTitle}>Kanan-sama wa Akumade Choroi</h1>
        {/* <div className={styles.mangaTags}>
          <span className={styles.tag}>Comédia</span>
          <span className={styles.tag}>Ecchi</span>
          <span className={styles.tag}>Romance</span>
        </div> */}
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

        <div className={styles.genderDemographicContainer}>
          <div className={styles.genderContainer}>
            <h3 className={styles.genderTitle}>Gêneros</h3>
            <div className={styles.genders}>
              <span className={styles.gender}>Comédia</span>
              <span className={styles.gender}>Ecchi</span>
              <span className={styles.gender}>Romance</span>
            </div>
          </div>

          <div className={styles.demographicContainer}>
            <h3 className={styles.demographicTitle}>Demografia</h3>
            <div className={styles.demographics}>
              <span className={styles.demographic}>Seinen</span>
            </div>
          </div>
        </div>

        <div className={styles.mangakaContainer}>
          <h3 className={styles.mangakaTitle}>Mangaka</h3>
          <div className={styles.mangakas}>
            <span className={styles.mangaka}>Rumiko Takahashi</span>
            {/* <span className={styles.mangaka}>Eichiiro Oda</span> */}
          </div>
        </div>

        <div className={styles.trackersContainer}>
          <h3 className={styles.trackersTitle}>Trackers</h3>
          <div className={styles.trackers}>
            <span className={styles.otakulist}>
              <Image
                src={OtakuList}
                alt="OtakuList Logo"
                width={45}
                height={40}
                unoptimized
                priority
              />
            </span>
            <span className={styles.myanimelist}>
              <Image
                src={MAL}
                alt="MAL Logo"
                width={70}
                height={30}
                unoptimized
                priority
              />
            </span>
            <span className={styles.anilist}>
              <Image
                src={AniList}
                alt="AniList Logo"
                width={50}
                height={20}
                unoptimized
                priority
              />
            </span>

            <span className={styles.aniplanet}>
              <Image
                src={AniPlanet}
                alt="Anime Planet Logo"
                width={95}
                height={40}
                unoptimized
                priority
              />
            </span>
          </div>
        </div>

        <div className={styles.storesContainer}>
          <h3 className={styles.storesTitle}>Compre em</h3>
          <div className={styles.stores}>
            <span className={styles.otakuyasan}>
              <Image
                src={OtakuyaSan}
                alt="Otakuya-san Logo"
                width={70}
                height={40}
                unoptimized
                priority
              />
            </span>
            <span className={styles.amazon}>
              <Image
                src={Amazon}
                alt="Amazon Logo"
                width={40}
                height={20}
                unoptimized
                priority
              />
            </span>
            <span className={styles.rakuten}>
              <Image
                src={Rakuten}
                alt="Rakuten Logo"
                width={40}
                height={40}
                unoptimized
                priority
              />
            </span>
            <span className={styles.cdjapan}>
              <Image
                src={CDJapan}
                alt="CD Japan Logo"
                width={60}
                height={40}
                unoptimized
                priority
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { MangaInfo };
