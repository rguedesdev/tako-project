// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./scaninfo.module.css";

// Icons
import { RiCopperCoinLine } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";

import { MdVerified, MdOutlinePeopleOutline } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { BiHash, BiLike } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";

import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { RiDiscordLine, RiBlueskyLine, RiTelegram2Line } from "react-icons/ri";
import { TbBrandMastodon } from "react-icons/tb";
import { IoIosGlobe } from "react-icons/io";
import { FaConnectdevelop } from "react-icons/fa6";
import Orkkut from "../../../public/orkkut.png";
import { HiOutlineMail } from "react-icons/hi";

// Images
import AnimaRegia from "../../../public/scans/anima-regia.jpg";
import OtaKoin from "../../../public/otakoin.png";

function ScanInfo() {
  return (
    <section className={styles.scanInfoContainer}>
      <div>
        <div className={styles.scanWrapper}>
          <Image
            className={styles.scanPicture}
            src={AnimaRegia}
            alt="Manga Cover"
            fill
            unoptimized
            priority
          />
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.btnFollow}>
            {/* <CiPlay1 size={20} /> */}
            <span>Seguir Scan</span>
          </button>

          <button className={styles.btnDonate}>
            <RiCopperCoinLine size={20} />
            <span>Doar OtaKoin</span>
          </button>
        </div>
      </div>
      <div className={styles.scanInfo}>
        <h1 className={styles.scanNameWrapper}>
          <span className={styles.scanName}>Anima Regia</span>
          <MdVerified className={styles.verifiedBadge} size={20} />
        </h1>
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

        <div className={styles.statsContainer}>
          <h3 className={styles.statsTitle}>Estatísticas</h3>
          <div className={styles.stats}>
            <span className={styles.stat}>
              <MdOutlinePeopleOutline size={18} />
              <span>1,5M Seguidores</span>
            </span>

            <span className={styles.stat}>
              <HiOutlineBookOpen size={16} />
              <span>256 Mangas</span>
            </span>

            <span className={styles.stat}>
              <BiHash size={16} />
              <span>999 Caps</span>
            </span>

            <span className={styles.stat}>
              <FaArrowTrendUp size={16} />
              <span>5,6K Views</span>
            </span>

            <span className={styles.stat}>
              <BiLike size={16} />
              <span>2,5K Likes</span>
            </span>
          </div>
        </div>

        <div className={styles.mediasContainer}>
          <h3 className={styles.mediasTitle}>Links</h3>
          <div className={styles.medias}>
            <span className={styles.media}>
              <IoIosGlobe size={18} />
              <span>Site</span>
            </span>

            <span className={styles.media}>
              <FaXTwitter size={14} />
              <span>Twitter/X</span>
            </span>

            <span className={styles.media}>
              <LuFacebook size={16} />
              <span>Facebook</span>
            </span>

            <span className={styles.media}>
              <FaInstagram size={16} />
              <span>Instagram</span>
            </span>

            <span className={styles.media}>
              <RiDiscordLine size={17} />
              <span>Discord</span>
            </span>

            <span className={styles.media}>
              <RiBlueskyLine size={16} />
              <span>Bluesky</span>
            </span>

            <span className={styles.media}>
              <RiTelegram2Line size={17} />
              <span>Telegram</span>
            </span>

            {/* <span className={styles.media}>
              <TbBrandMastodon size={18} />
              <span>Mastodon</span>
            </span> */}

            <span className={styles.media}>
              <Image src={Orkkut} alt="Orkkut Icon" width={13} height={13} />
              <span>Orkkut</span>
            </span>

            <span className={styles.media}>
              <HiOutlineMail size={16} />
              <span>Email</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ScanInfo };
