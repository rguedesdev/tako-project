// Style Sheet CSS
import styles from "./footer.module.css";
import Link from "next/link";

// Icons
import { RiTwitterXLine, RiDiscordLine, RiTelegram2Line } from "react-icons/ri";
import { IoPulseOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>
        <span>© 2026 Tako Project. Os direitos das obras pertencem aos mangakas. Se possível, apoiem as obras!</span>
        <span className={styles.version}>Alpha · 0.1.0</span>
      </h2>
      <div className={styles.iconsWrapper}>
        <span className={styles.socialLabel}>Siga-nos nas redes sociais</span>
        <div className={styles.socialLinks}>
          <button className={styles.socialX} type="button" aria-label="Tako Project no X"><RiTwitterXLine /></button>
          <button className={styles.socialDiscord} type="button" aria-label="Tako Project no Discord"><RiDiscordLine /></button>
          <button className={styles.socialTelegram} type="button" aria-label="Tako Project no Telegram"><RiTelegram2Line /></button>
          <Link className={styles.socialStatus} href="/status" aria-label="Ver status do Tako Project" title="Status do site"><IoPulseOutline /></Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
