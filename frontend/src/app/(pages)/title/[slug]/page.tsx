// Style Sheet CSS
import styles from "./title.module.css";

// Componentes
import { MangaInfo } from "@/components/MangaInfo/page";
import { Chapters } from "@/components/Chapters/page";

function TitlePage() {
  return (
    <div className={styles.page}>
      <main className={styles.titleContainer}>
        <MangaInfo />
        <Chapters />
      </main>
    </div>
  );
}

export default TitlePage;
