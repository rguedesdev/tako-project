// Style Sheet CSS
import styles from "./mangas.module.css";

import { MangaCard } from "@/components/MangaCard/page";
import { getGroups, getMangas } from "@/lib/catalog";

async function MangasPage({ searchParams }: { searchParams: Promise<{ genero?: string; demografia?: string; mangaka?: string }> }) {
  const { genero, demografia, mangaka } = await searchParams;
  const [mangas, groups] = await Promise.all([
    getMangas().catch((error) => {
      console.error("Falha ao carregar mangas:", error);
      return [];
    }),
    getGroups().catch((error) => {
      console.error("Falha ao carregar grupos:", error);
      return [];
    }),
  ]);
  return (
    <div className={styles.page}>
      <main className={styles.mangasContainer}>
        <MangaCard
          pageTitle="Catalogo de Mangas"
          mangas={mangas}
          groups={groups}
          filterable
          initialTitleQuery={mangaka ?? ""}
          initialGenres={genero ? [genero] : []}
          initialDemographics={demografia ? [demografia] : []}
        />
      </main>
    </div>
  );
}

export default MangasPage;
