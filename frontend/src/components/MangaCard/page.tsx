"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { GiEvilBook } from "react-icons/gi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { RiQuillPenLine } from "react-icons/ri";
import { TbProgressCheck } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { ImMakeGroup } from "react-icons/im";
import { MdOutlineSearchOff } from "react-icons/md";

import type { GroupCard, MangaCardData, MangaTranslation } from "@/lib/catalog";
import { MediaImage } from "@/components/MediaImage/page";
import styles from "./mangacard.module.css";

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .trim();
}

function MangaCard({ pageTitle, mangas, groups = [], translations = [], filterable = false, initialTitleQuery = "", initialGenres = [], initialDemographics = [], showSectionHeader = true, onRemove }: { pageTitle: string; mangas: MangaCardData[]; groups?: GroupCard[]; translations?: MangaTranslation[]; filterable?: boolean; initialTitleQuery?: string; initialGenres?: string[]; initialDemographics?: string[]; showSectionHeader?: boolean; onRemove?: (mangaID: string) => void }) {
  const [titleQuery, setTitleQuery] = useState(initialTitleQuery);
  const [selectedGenres, setSelectedGenres] = useState<string[]>(initialGenres);
  const [selectedDemographics, setSelectedDemographics] = useState<string[]>(initialDemographics);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const genres = useMemo(
    () => [...new Set(mangas.flatMap((manga) => manga.genders ?? []).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b, "pt-BR")),
    [mangas],
  );
  const demographics = useMemo(
    () => [...new Set(mangas.flatMap((manga) => manga.demographics ?? []).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b, "pt-BR")),
    [mangas],
  );
  const filteredMangas = useMemo(() => {
    const normalizedQuery = normalizeSearchText(titleQuery);
    return mangas.filter((manga) => {
      const matchesText = !normalizedQuery
        || normalizeSearchText(manga.title).includes(normalizedQuery)
        || normalizeSearchText(manga.mangaka).includes(normalizedQuery);
      const matchesGenres = !selectedGenres.length
        || (manga.genders ?? []).some((genre) => selectedGenres.includes(genre));
      const matchesDemographics = !selectedDemographics.length
        || (manga.demographics ?? []).some((demographic) => selectedDemographics.includes(demographic));
      return matchesText && matchesGenres && matchesDemographics;
    });
  }, [mangas, selectedDemographics, selectedGenres, titleQuery]);
  const filteredGroups = useMemo(() => {
    const normalizedQuery = normalizeSearchText(titleQuery);
    if (!normalizedQuery) return [];
    return groups.filter((group) => normalizeSearchText(group.name).includes(normalizedQuery));
  }, [groups, titleQuery]);

  function toggleSelection(value: string, selected: string[], update: (values: string[]) => void) {
    update(selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value]);
  }

  function clearFilters() {
    setTitleQuery("");
    setSelectedGenres([]);
    setSelectedDemographics([]);
    if (filterable && typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  const hasActiveFilters = Boolean(titleQuery || selectedGenres.length || selectedDemographics.length);

  useEffect(() => {
    if (!filterable) return;

    function focusSearch(event: KeyboardEvent) {
      const target = event.target;
      const isTyping = target instanceof HTMLElement
        && (target.isContentEditable || target.matches("input, textarea, select"));
      if (event.key === "/" && !event.altKey && !event.ctrlKey && !event.metaKey && !isTyping) {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, [filterable]);

  return (
    <section>
      {showSectionHeader && <h2 className={styles.sectionTitleWrapper}>
        <HiOutlineBookOpen className={styles.sectionIcon} size={25} />
        <span className={styles.sectionTitle}>{pageTitle}</span>
      </h2>}
      {filterable && (
        <div className={styles.catalogFilters}>
          <label className={styles.filterField}>
            <div className={styles.searchInputWrap}>
              <FiSearch className={styles.searchIcon} aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="search"
                value={titleQuery}
                onChange={(event) => setTitleQuery(event.target.value)}
                aria-label="Buscar por nome"
                placeholder="Buscar por nome da obra ou mangaka"
                aria-keyshortcuts="/"
              />
              <kbd className={styles.searchShortcut} aria-hidden="true">/</kbd>
            </div>
          </label>
          <div className={styles.filterGroups}>
            <fieldset className={styles.filterGroup}>
              <legend>Demografia{selectedDemographics.length ? ` · ${selectedDemographics.length} selecionada${selectedDemographics.length === 1 ? "" : "s"}` : ""}</legend>
              <div className={styles.filterOptions}>
                {demographics.length === 0 ? (
                  <span className={styles.filterEmpty}>Dados de demografia ainda indisponíveis.</span>
                ) : demographics.map((demographic) => {
                  const checked = selectedDemographics.includes(demographic);
                  return (
                    <label className={`${styles.filterTag} ${checked ? styles.filterTagSelected : ""}`} key={demographic}>
                      <input type="checkbox" checked={checked} onChange={() => toggleSelection(demographic, selectedDemographics, setSelectedDemographics)} />
                      <span>{demographic}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <fieldset className={styles.filterGroup}>
              <legend>Gêneros{selectedGenres.length ? ` · ${selectedGenres.length} selecionado${selectedGenres.length === 1 ? "" : "s"}` : ""}</legend>
              <div className={styles.filterOptions}>
                {genres.map((genre) => {
                  const checked = selectedGenres.includes(genre);
                  return (
                    <label className={`${styles.filterTag} ${checked ? styles.filterTagSelected : ""}`} key={genre}>
                      <input type="checkbox" checked={checked} onChange={() => toggleSelection(genre, selectedGenres, setSelectedGenres)} />
                      <span>{genre}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>
          {hasActiveFilters && (
            <button className={styles.clearFilters} type="button" onClick={clearFilters}>
              Limpar filtros
            </button>
          )}
        </div>
      )}
      {filteredGroups.length > 0 && (
        <section className={styles.groupResults}>
          <h3 className={styles.groupResultsTitle}><ImMakeGroup aria-hidden="true" />Grupos encontrados</h3>
          <div className={styles.groupResultsGrid}>
            {filteredGroups.map((group) => (
              <Link className={styles.groupResultCard} href={`/scan/${group.id}`} key={group.id}>
                <MediaImage className={styles.groupResultImage} source={group.groupImage} fallback="/group-placeholder.svg" alt={`Imagem do grupo ${group.name}`} />
                <span className={styles.groupResultInfo}>
                  <strong>{group.name} <span title={group.country}>{group.countryFlag}</span></strong>
                  <span>{group.description}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
      {filteredMangas.length > 0 ? (
        <div className={styles.mangasGrid}>
          {filteredMangas.map((manga) => {
            const translation = translations.find((item) => item.mangaID === manga.id);
            return (
              <article className={styles.mangaCard} key={manga.id}>
                <Link href={`/title/${manga.id}`} className={styles.cardLink}>
                  <figure>
                    <div className={styles.mangaWraper}>
                      <MediaImage className={styles.mangaCover} source={manga.mangaCover} alt={`Capa de ${manga.title}`} />
                    </div>
                    <figcaption className={styles.mangaInfo}>
                      <div className={styles.mangaInfoLine}><GiEvilBook size={16} /><span>{manga.title}{manga.isAdult ? " · +18" : ""}</span></div>
                      <hr className={styles.hrFaded} />
                      <div className={styles.mangaInfoLine}><RiQuillPenLine size={16} /><span>{manga.mangaka}</span></div>
                      {translation && (
                        <>
                          <hr className={styles.hrFaded} />
                          <div className={styles.mangaInfoLine}>
                            <TbProgressCheck size={16} />
                            <span>{translation.translationStatus === "COMPLETED" ? "Concluído" : translation.translationStatus === "PAUSED" ? "Pausado" : "Em andamento"}</span>
                          </div>
                        </>
                      )}
                    </figcaption>
                  </figure>
                </Link>
                {onRemove && <button className={styles.removeFromLibrary} type="button" aria-label={`Remover ${manga.title} da biblioteca`} title="Remover da biblioteca" onClick={() => onRemove(manga.id)} />}
              </article>
            );
          })}
        </div>
      ) : filteredGroups.length === 0 && (
        <div className={styles.emptyState} role="status">
          <MdOutlineSearchOff aria-hidden="true" />
          <p>{!filterable
            ? "Nenhuma obra com capítulos publicados até o momento."
            : mangas.length === 0 && !titleQuery
              ? "Nenhuma obra cadastrada."
              : "Nenhuma obra ou grupo encontrado com esses filtros."}</p>
        </div>
      )}
    </section>
  );
}

export { MangaCard };
