"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { LuSquareLibrary } from "react-icons/lu";

import { useUser } from "@/context/UserContext";
import { MangaCard } from "@/components/MangaCard/page";
import { graphqlRequest } from "@/lib/graphql";
import type { Manga } from "@/lib/catalog";
import styles from "./library.module.css";

export default function LibraryPage() {
  const { authenticatedUser, authToken, authLoading } = useUser();
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadLibrary = useCallback(async () => {
    if (!authenticatedUser || !authToken) {
      setMangas([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const data = await graphqlRequest<{ myLibrary: Manga[] }>(
        `query MyLibrary {
          myLibrary {
            id title mangaCover mangaka isAdult
            translations {
              mangaID groupID language latestMainChapter lastMainChapterPublishedAt
              translationStatus calculatedTranslationStatus translationStatusOverride overridden
              group { id name groupImage country countryFlag }
            }
          }
        }`,
        {},
        authToken,
      );
      setMangas(data.myLibrary);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Não foi possível carregar sua biblioteca.");
    } finally {
      setLoading(false);
    }
  }, [authenticatedUser, authToken]);

  useEffect(() => { void loadLibrary(); }, [loadLibrary]);

  async function removeManga(mangaID: string) {
    if (!authToken) return;
    try {
      await graphqlRequest<{ setMangaInLibrary: boolean }>(
        `mutation RemoveMangaFromLibrary($mangaID: ID!) { setMangaInLibrary(mangaID: $mangaID, inLibrary: false) }`,
        { mangaID },
        authToken,
      );
      setMangas((current) => current.filter((manga) => manga.id !== mangaID));
    } catch (removeError) {
      setError(removeError instanceof Error ? removeError.message : "Não foi possível remover a obra.");
    }
  }

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.heroIcon}><LuSquareLibrary aria-hidden="true" /></span>
        <div><h1>Minha biblioteca</h1><p>Reúna aqui as obras que você quer acompanhar.</p></div>
        {!loading && !error && <span className={styles.count}>{mangas.length} {mangas.length === 1 ? "Manga" : "Mangas"}</span>}
      </header>

      {authLoading || loading ? <p className={styles.notice} role="status">Carregando biblioteca…</p>
        : !authenticatedUser ? <section className={styles.empty}><h2>Entre para acessar sua biblioteca</h2><p>Adicione obras à sua biblioteca para encontrá-las reunidas aqui.</p><Link href="/signin">Entrar</Link></section>
          : error ? <section className={styles.empty} role="alert"><h2>Não foi possível carregar sua biblioteca</h2><p>{error}</p><button type="button" onClick={() => void loadLibrary()}>Tentar novamente</button></section>
            : mangas.length === 0 ? <section className={styles.empty}><h2>Sua biblioteca está vazia</h2><p>Visite uma obra e use “Adicionar à Biblioteca” para guardá-la aqui.</p><Link href="/mangas">Explorar obras</Link></section>
              : <MangaCard pageTitle="Minha biblioteca" mangas={mangas} translations={mangas.flatMap((manga) => manga.translations ?? [])} showSectionHeader={false} onRemove={(mangaID) => void removeManga(mangaID)} />}
    </main>
  );
}
