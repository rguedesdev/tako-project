// Imports Pricipais
import Image from "next/image";

// Style Sheet CSS
import styles from "./navbar.module.css";

// Icons
import { RiHome3Line } from "react-icons/ri";
import { RiHome9Line } from "react-icons/ri";

import { GiEvilBook } from "react-icons/gi";
import { HiOutlineBookOpen } from "react-icons/hi2";

// Images
import TakoP from "../../../public/tako-logo.png";

function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <div>
            <Image
              className={styles.logo}
              src={TakoP}
              alt="Logo"
              unoptimized
              priority
            />
          </div>
          <div className={styles.linksWapper}>
            <li className={styles.navLink}>
              <RiHome3Line size={18} />
              <span>Home</span>
            </li>
            <li className={styles.navLink}>
              <HiOutlineBookOpen size={18} />
              <span>Manga</span>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
