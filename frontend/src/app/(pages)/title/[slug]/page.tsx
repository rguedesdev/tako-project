// Style Sheet CSS
import styles from "./title.module.css";

// Componentes
import { MangaInfo } from "@/components/MangaInfo/page";

function Title() {
  return (
    <div className={styles.page}>
      <main className={styles.titleContainer}>
        <MangaInfo />
      </main>
    </div>
  );
}

export default Title;
