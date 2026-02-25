// Imports Pricipais
import Image from "next/image";

// Style Sheet CSS
import styles from "./navbar.module.css";

// Icons
import { RiHome3Line } from "react-icons/ri";
import { RiHome9Line } from "react-icons/ri";

import { GiEvilBook } from "react-icons/gi";
import { HiOutlineBookOpen } from "react-icons/hi2";

function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navLink}>
            <RiHome3Line size={20} />
            <span>Home</span>
          </li>
          <li className={styles.navLink}>
            <HiOutlineBookOpen size={22} />
            <span>Manga</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
