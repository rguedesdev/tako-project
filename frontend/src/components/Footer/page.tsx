// Style Sheet CSS
import styles from "./footer.module.css";

// Icons
import { RiTwitterXFill } from "react-icons/ri";
import { LiaDiscord } from "react-icons/lia";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoPulseOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>
        © 2026 Tako Project | Todos os direitos das obras são destinados aos
        mangakas. Se possível, apoiem as obras!
      </h2>
      <div className={styles.iconsWrapper}>
        <RiTwitterXFill size={27} />
        <LiaDiscord size={30} />
        <LiaTelegramPlane size={30} />
        <IoPulseOutline size={30} />
      </div>
    </footer>
  );
}

export { Footer };
