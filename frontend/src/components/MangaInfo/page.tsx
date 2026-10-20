"use client";

import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import Link from "next/link";
import { BiHash, BiLike } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineDeleteForever } from "react-icons/md";
import { LuSquareLibrary } from "react-icons/lu";
import { GoArrowSwitch } from "react-icons/go";

import type { Manga } from "@/lib/catalog";
import { MediaImage } from "@/components/MediaImage/page";
import { useUser } from "@/context/UserContext";
import { graphqlRequest } from "@/lib/graphql";
import styles from "./mangainfo.module.css";

function MangaInfo({
  manga,
  firstChapterId,
}: {
  manga: Manga;
  firstChapterId?: string;
}) {
  const { authenticatedUser, authToken } = useUser();
  const [inLibrary, setInLibrary] = useState(manga.inMyLibrary === true);
  const [libraryBusy, setLibraryBusy] = useState(false);
  const [libraryError, setLibraryError] = useState("");
  const trackers = Object.entries(manga.trackers ?? {}).filter(
    ([, url]) => url,
  );
  const trackerLabels: Record<string, string> = {
    myanimelist: "MyAnimeList",
    anilist: "AniList",
    animeplanet: "Anime-Planet",
    anidb: "AniDB",
  };
  const statusLabels = {
    ONGOING: "Em andamento",
    COMPLETED: "Concluído",
    HIATUS: "Em hiato",
    UNKNOWN: "Desconhecido",
    PAUSED: "Pausado",
  } as const;

  async function toggleLibrary() {
    if (!authenticatedUser || !authToken || libraryBusy) return;
    setLibraryBusy(true);
    setLibraryError("");
    try {
      const { setMangaInLibrary } = await graphqlRequest<{ setMangaInLibrary: boolean }>(
        `mutation SetMangaInLibrary($mangaID: ID!, $inLibrary: Boolean!) {
          setMangaInLibrary(mangaID: $mangaID, inLibrary: $inLibrary)
        }`,
        { mangaID: manga.id, inLibrary: !inLibrary },
        authToken,
      );
      setInLibrary(setMangaInLibrary);
    } catch (error) {
      setLibraryError(error instanceof Error ? error.message : "Não foi possível atualizar sua biblioteca.");
    } finally {
      setLibraryBusy(false);
    }
  }

  return (
    <section className={styles.mangaInfoContainer}>
      <div>
        <div className={styles.mangaWrapper}>
          <MediaImage
            className={styles.mangaCover}
            source={manga.mangaCover}
            alt={`Capa de ${manga.title}`}
          />
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.btnAdd} type="button" onClick={() => void toggleLibrary()} disabled={!authenticatedUser || libraryBusy} aria-pressed={inLibrary}>
            {inLibrary ? <MdOutlineDeleteForever size={20} /> : <LuSquareLibrary size={20} />}
            <span>{libraryBusy ? "Atualizando…" : inLibrary ? "Remover da Biblioteca" : "Adicionar à Biblioteca"}</span>
          </button>
          {libraryError && <p className={styles.libraryError} role="status">{libraryError}</p>}
          {!authenticatedUser && <Link className={styles.libraryLogin} href="/signin">Entre para usar sua biblioteca</Link>}
          {firstChapterId && (
            <a
              className={styles.btnRead}
              href={`/title/${manga.id}/${firstChapterId}`}
            >
              <CiPlay1 size={20} />
              <span>Iniciar leitura</span>
            </a>
          )}
        </div>
      </div>
      <div className={styles.mangaInfo}>
        <h1 className={styles.mangaTitle}>
          {manga.title}
        </h1>
        <p className={styles.sinopse}>{manga.description}</p>
        <div className={styles.statsDivider} aria-hidden="true" />
        <div className={styles.officialStatus}>
          <h3>Status da obra</h3>
          <div>
            <strong data-status={manga.officialPublicationStatus}>{statusLabels[manga.officialPublicationStatus]}</strong>
            {manga.officialTotalChapters != null && (
              <>
                <GoArrowSwitch className={styles.statusSwitch} aria-hidden="true" />
                <span>
                  {manga.officialTotalChapters.toLocaleString("pt-BR")} {manga.officialTotalChapters === 1 ? "Capítulo oficial" : "Capítulos oficiais"}
                </span>
              </>
            )}
          </div>
        </div>
        <div className={styles.statsContainer}>
          <h3>Estatísticas</h3>
          <div className={styles.stats}>
            <span className={styles.stat}>
              <span className={styles.statIcon}><BiHash /></span>
              <strong className={styles.statValue}>{manga.stats.chapters.toLocaleString("pt-BR")}</strong>
              <span className={styles.statLabel}>{manga.stats.chapters === 1 ? "Capítulo" : "Capítulos"}</span>
            </span>
            <span className={styles.stat}>
              <span className={styles.statIcon}><FaArrowTrendUp /></span>
              <strong className={styles.statValue}>{manga.stats.views.toLocaleString("pt-BR")}</strong>
              <span className={styles.statLabel}>{manga.stats.views === 1 ? "Visualização" : "Visualizações"}</span>
            </span>
            <span className={styles.stat}>
              <span className={styles.statIcon}><BiLike /></span>
              <strong className={styles.statValue}>{manga.stats.likes.toLocaleString("pt-BR")}</strong>
              <span className={styles.statLabel}>{manga.stats.likes === 1 ? "Like" : "Likes"}</span>
            </span>
          </div>
        </div>
        <div className={styles.genderDemographicContainer}>
          <div className={styles.genderContainer}>
            <h3 className={styles.genderTitle}>Gêneros</h3>
            <div className={styles.genders}>
              {manga.genders.map((gender) => (
                <Link className={styles.gender} href={`/mangas?genero=${encodeURIComponent(gender)}`} key={gender}>
                  {gender}
                </Link>
              ))}
            </div>
          </div>
          {manga.demographics?.length ? (
            <div className={styles.demographicContainer}>
              <h3 className={styles.demographicTitle}>Demografia</h3>
              <div className={styles.demographics}>
                {manga.demographics.map((demographic) => (
                  <Link className={styles.gender} href={`/mangas?demografia=${encodeURIComponent(demographic)}`} key={demographic}>
                    {demographic}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className={styles.mangakaContainer}>
          <h3 className={styles.mangakaTitle}>Mangaka</h3>
          <div className={styles.mangakas}>
                <Link className={styles.mangaka} href={`/mangas?mangaka=${encodeURIComponent(manga.mangaka)}`}>{manga.mangaka}</Link>
          </div>
        </div>
        {trackers.length > 0 && (
          <div className={styles.trackersContainer}>
            <h3 className={styles.trackersTitle}>Trackers</h3>
            <div className={styles.trackers}>
              {trackers.map(([name, url]) => (
                <a
                  className={`${styles.tracker} ${styles.trackerIconOnly}`}
                  href={String(url)}
                  key={name}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={trackerLabels[name] ?? name}
                  title={trackerLabels[name] ?? name}
                >
                  {name === "myanimelist" ? <MediaImage className={styles.myAnimeListLogo} source="/icons/myanimelist-mark.png" alt="" /> : name === "anilist" ? <MediaImage className={styles.aniListLogo} source="/icons/anilist-mark.png" alt="" /> : name === "animeplanet" ? <MediaImage className={styles.animePlanetLogo} source="/icons/animeplanet-mark.png" alt="" /> : name === "anidb" ? <MediaImage className={styles.aniDbLogo} source="/icons/anidb-mark.png" alt="" /> : trackerLabels[name] ?? name}
                </a>
              ))}
            </div>
          </div>
        )}
        {Boolean(manga.translations?.length) && (
          <div className={styles.translationsContainer}>
            <h3>Traduções disponíveis</h3>
            <div className={styles.translations}>
              {manga.translations!.map((translation) => (
                <a
                  href={`/scan/${translation.groupID}`}
                  key={translation.groupID}
                >
                  <MediaImage
                    className={styles.translationImage}
                    source={translation.group.groupImage}
                    alt=""
                    fallback="/image-placeholder.svg"
                  />
                  <span>
                    <strong>{translation.group.name}</strong>
                    <b data-status={translation.translationStatus}>
                      {statusLabels[translation.translationStatus]}
                    </b>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export { MangaInfo };
