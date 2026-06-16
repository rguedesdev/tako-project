// Style Sheet CSS
import styles from "./mangas.module.css";

import { MangaCard } from "@/components/MangaCard/page";

function MangasPage() {
  return (
    <div className={styles.page}>
      <main className={styles.mangasContainer}>
        <MangaCard pageTitle={`Mangas Traduzidos`} />
      </main>
    </div>
  );
}

export default MangasPage;
