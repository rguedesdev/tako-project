"use client";

import { useEffect, useState } from "react";

import ImageUploadField from "@/components/ImageUploadField/page";
import { useUser } from "@/context/UserContext";
import { useToast } from "@/context/ToastContext";
import { graphqlRequest } from "@/lib/graphql";
import { discardImage, uploadImage, type UploadedMedia } from "@/lib/upload";
import styles from "./manage.module.css";

type TranslationStatus = "ONGOING" | "PAUSED" | "COMPLETED";
type Translation = { groupID: string; language: string; translationStatus: TranslationStatus; calculatedTranslationStatus: TranslationStatus; translationStatusOverride?: TranslationStatus | null; overridden: boolean; group: { id: string; name: string } };
type JikanCandidate = { malId: number; title: string; titleEnglish?: string | null; titleJapanese?: string | null; aliases: string[]; synopsis?: string | null; totalChapters?: number | null; publicationStatus: "ONGOING" | "COMPLETED" | "HIATUS" | "UNKNOWN"; rawStatus?: string | null; authors: string[]; genres: string[]; demographics: string[]; imageUrl?: string | null; malUrl?: string | null; type?: string | null; year?: number | null };
type ExternalSearchState = "idle" | "loading" | "results" | "empty" | "error";
type Trackers = { myanimelist: string; anilist: string; animeplanet: string; anidb: string };
type SocialMedias = { site: string; discord: string; x: string; instagram: string; facebook: string; youtube: string; tiktok: string };
type Group = { id: string; name: string; description: string; country: string; countryCode: string; countryFlag: string; groupImage?: string | null; socialMedias?: Partial<Record<keyof SocialMedias, string | null>> | null; mangas: Manga[] };
type Country = { code: string; name: string; flag: string };
type Me = { id: string; groups: Group[] };
type Area = "group" | "manga";

type Manga = { id: string; title: string; aliases: string[]; description: string; mangaka: string; genders: string[]; demographics: string[]; mangaCover?: string | null; trackers?: Partial<Record<keyof Trackers, string | null>> | null; isAdult: boolean; officialPublicationStatus?: "ONGOING" | "COMPLETED" | "HIATUS" | "UNKNOWN"; officialTotalChapters?: number | null; externalMetadata?: { malId?: number | null; lastSyncedAt?: string | null; lastSyncError?: string | null } | null; translations?: Translation[] };
const MANGA_ADMIN_FIELDS = "id title aliases description mangaka genders demographics mangaCover trackers { myanimelist anilist animeplanet anidb } isAdult officialPublicationStatus officialTotalChapters externalMetadata { malId lastSyncedAt lastSyncError } translations { groupID language translationStatus calculatedTranslationStatus translationStatusOverride overridden group { id name } }";
const GROUP_FIELDS = `id name description country countryCode countryFlag groupImage socialMedias { site discord x instagram facebook youtube tiktok } mangas { ${MANGA_ADMIN_FIELDS} }`;
const EMPTY_SOCIALS: SocialMedias = { site: "", discord: "", x: "", instagram: "", facebook: "", youtube: "", tiktok: "" };
const EMPTY_TRACKERS: Trackers = { myanimelist: "", anilist: "", animeplanet: "", anidb: "" };

function socialForm(values?: Group["socialMedias"]): SocialMedias {
  return Object.fromEntries(
    Object.keys(EMPTY_SOCIALS).map((key) => [key, values?.[key as keyof SocialMedias] ?? ""]),
  ) as SocialMedias;
}

function trackerForm(values?: Manga["trackers"]): Trackers {
  return Object.fromEntries(
    Object.keys(EMPTY_TRACKERS).map((key) => [key, values?.[key as keyof Trackers] ?? ""]),
  ) as Trackers;
}

export default function ManagePage() {
  const { authToken, authenticatedUser, authLoading } = useUser();
  const { showToast } = useToast();
  const [area, setArea] = useState<Area>("group");
  const [groups, setGroups] = useState<Group[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [groupID, setGroupID] = useState("new");
  const [mangaGroupID, setMangaGroupID] = useState("");
  const [groupForm, setGroupForm] = useState({ name: "", description: "", countryCode: "" });
  const [socialMedias, setSocialMedias] = useState<SocialMedias>(EMPTY_SOCIALS);
  const [groupImage, setGroupImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [matches, setMatches] = useState<Manga[]>([]);
  const [jikanMatches, setJikanMatches] = useState<JikanCandidate[]>([]);
  const [externalSearchState, setExternalSearchState] = useState<ExternalSearchState>("idle");
  const [localSearchBypassed, setLocalSearchBypassed] = useState(false);
  const [manualMode, setManualMode] = useState(false);
  const [searchNonce, setSearchNonce] = useState(0);
  const [searching, setSearching] = useState(false);
  const [selectedMalId, setSelectedMalId] = useState<number | null>(null);
  const [demographicOptions, setDemographicOptions] = useState<string[]>([]);
  const [selectedDemographics, setSelectedDemographics] = useState<string[]>([]);
  const [loadingJikanDetails, setLoadingJikanDetails] = useState(false);
  const [translationLanguage, setTranslationLanguage] = useState("Português");
  const [editingMangaID, setEditingMangaID] = useState<string | null>(null);
  const [mangaForm, setMangaForm] = useState({ description: "", mangaka: "", genders: "", aliases: "", isAdult: false });
  const [trackers, setTrackers] = useState<Trackers>(EMPTY_TRACKERS);
  const [mangaCover, setMangaCover] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const selectedGroup = groups.find((group) => group.id === groupID);
  const selectedMangaGroup = groups.find((group) => group.id === mangaGroupID);
  const isAegis = authenticatedUser?.accountType === "AEGIS";
  const editingManga = [...(selectedMangaGroup?.mangas ?? []), ...matches].find((manga) => manga.id === editingMangaID);

  async function loadGroups(preferredID?: string) {
    if (!authToken) return;
    const { me, countries: availableCountries } = await graphqlRequest<{ me: Me; countries: Country[] }>(`query { me { id groups { ${GROUP_FIELDS} } } countries { code name flag } }`, {}, authToken);
    setGroups(me.groups);
    setCountries(availableCountries);
    if (preferredID) setGroupID(preferredID);
    else if (groupID === "new" && me.groups.length) setGroupID(me.groups[0].id);
  }

  useEffect(() => {
    if (authToken) void loadGroups().catch((error: Error) => setMessage(error.message));
    // loadGroups intentionally reacts only to the authenticated session.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  useEffect(() => {
    const query = title.trim();
    let cancelled = false;
    if (query.length < 2 || !authToken) {
      setSearching(false);
      setExternalSearchState("idle");
      return () => { cancelled = true; };
    }
    setSearching(true);
    const timer = window.setTimeout(async () => {
      try {
        const searchLocalCatalog = () => graphqlRequest<{ searchMangas: Manga[] }>(
          `query($query:String!){searchMangas(query:$query){${MANGA_ADMIN_FIELDS}}}`,
          { query },
          authToken,
        );
        let localResults: Manga[];
        try {
          ({ searchMangas: localResults } = await searchLocalCatalog());
        } catch {
          // Retry a transient first-request failure without making the user retype.
          await new Promise((resolve) => window.setTimeout(resolve, 250));
          if (cancelled) return;
          ({ searchMangas: localResults } = await searchLocalCatalog());
        }
        if (cancelled) return;
        setMatches(localResults);
        if (localResults.length > 0 && !localSearchBypassed) {
          setJikanMatches([]);
          setExternalSearchState("idle");
          if (!editingMangaID) {
            setSelectedMalId(null);
            setManualMode(false);
          }
        } else {
          setExternalSearchState("loading");
          const { searchJikanMangas } = await graphqlRequest<{ searchJikanMangas: JikanCandidate[] }>(
            `query($query:String!){searchJikanMangas(query:$query){malId title titleEnglish titleJapanese aliases synopsis totalChapters publicationStatus rawStatus authors genres demographics imageUrl malUrl type year}}`,
            { query },
            authToken,
          );
          if (cancelled) return;
          setJikanMatches(searchJikanMangas);
          setExternalSearchState(searchJikanMangas.length ? "results" : "empty");
        }
      } catch {
        if (cancelled) return;
        setJikanMatches([]);
        setExternalSearchState("error");
      } finally {
        if (!cancelled) setSearching(false);
      }
    }, 350);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [title, authToken, localSearchBypassed, searchNonce, editingMangaID]);

  useEffect(() => {
    if (selectedGroup) {
      setGroupForm({ name: selectedGroup.name, description: selectedGroup.description, countryCode: selectedGroup.countryCode });
      setSocialMedias(socialForm(selectedGroup.socialMedias));
    } else {
      setGroupForm({ name: "", description: "", countryCode: "" });
      setSocialMedias(EMPTY_SOCIALS);
    }
    setGroupImage(null);
    setEditingMangaID(null);
  }, [groupID]); // eslint-disable-line react-hooks/exhaustive-deps

  const selectedJikanCandidate = jikanMatches.find((candidate) => candidate.malId === selectedMalId);

  async function saveGroup(event: React.FormEvent) {
    event.preventDefault();
    if (!authToken) return;
    setBusy(true);
    setMessage("");
    let uploaded: UploadedMedia | null = null;
    try {
      if (groupImage) uploaded = await uploadImage(groupImage, "GROUP_IMAGE");
      const data = { ...groupForm, socialMedias, ...(uploaded ? { groupImageID: uploaded.id } : {}) };
      const operation = groupID === "new"
        ? `mutation($data:CreateGroupInput!){createGroup(data:$data){${GROUP_FIELDS}}}`
        : `mutation($id:ID!,$data:UpdateGroupInput!){updateGroup(id:$id,data:$data){${GROUP_FIELDS}}}`;
      const result = await graphqlRequest<{ createGroup?: Group; updateGroup?: Group }>(operation, { id: groupID, data }, authToken);
      const saved = result.createGroup ?? result.updateGroup;
      if (saved) await loadGroups(saved.id);
      setGroupImage(null);
      showToast(groupID === "new" ? "Grupo criado com sucesso." : "Dados do grupo atualizados.", "success");
    } catch (error) {
      if (uploaded) await discardImage(uploaded.id).catch(() => undefined);
      const raw = error instanceof Error ? error.message : "";
      let detail = raw;
      try {
        const parsed = JSON.parse(raw);
        detail = parsed?.response?.errors?.[0]?.message ?? parsed?.errors?.[0]?.message ?? raw;
      } catch { /* Keep the regular Error message. */ }
      const text = /discord/i.test(detail) && /url|válid|plataforma/i.test(detail)
        ? "O link do Discord precisa ser um endereço do Discord. Use, por exemplo, https://discord.gg/seu-convite."
        : /https|plataforma|url válida/i.test(detail)
          ? "Confira os links das redes sociais: cada campo precisa do endereço HTTPS da própria plataforma."
          : detail || "Não foi possível salvar os dados do grupo. Tente novamente.";
      showToast(text, "error");
    } finally {
      setBusy(false);
    }
  }

  async function addExisting(mangaID: string) {
    if (!authToken || !selectedMangaGroup) return;
    setBusy(true);
    try {
      await graphqlRequest(
        "mutation($mangaID:ID!,$groupID:ID!,$language:String){addMangaToGroup(mangaID:$mangaID,groupID:$groupID,translationLanguage:$language){id}}",
        { mangaID, groupID: selectedMangaGroup.id, language: translationLanguage },
        authToken,
      );
      await loadGroups(selectedMangaGroup.id);
      setMessage("Manga relacionado ao grupo sem criar uma cópia.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Falha ao relacionar o manga.");
    } finally {
      setBusy(false);
    }
  }

  function editManga(manga: Manga) {
    setEditingMangaID(manga.id);
    setTitle(manga.title);
    setMangaForm({ description: manga.description, mangaka: manga.mangaka, genders: manga.genders.join(", "), aliases: manga.aliases.join(", "), isAdult: manga.isAdult });
    setDemographicOptions(manga.demographics ?? []);
    setSelectedDemographics(manga.demographics ?? []);
    setTrackers(trackerForm(manga.trackers));
    setSelectedMalId(manga.externalMetadata?.malId ?? null);
    setManualMode(false);
    setLocalSearchBypassed(!manga.externalMetadata?.malId);
    setMangaCover(null);
  }

  async function selectJikanManga(candidate: JikanCandidate) {
    if (!authToken) return;
    setBusy(true);
    setLoadingJikanDetails(true);
    try {
      let selected = candidate;
      if (!candidate.synopsis || !candidate.authors.length || !candidate.genres.length || !candidate.demographics.length) {
        const result = await graphqlRequest<{ jikanManga: JikanCandidate }>(
          `query($malId:Int!){jikanManga(malId:$malId){malId title titleEnglish titleJapanese aliases synopsis totalChapters publicationStatus rawStatus authors genres demographics imageUrl malUrl type year}}`,
          { malId: candidate.malId },
          authToken,
        );
        selected = result.jikanManga;
      }
      setSelectedMalId(selected.malId);
      setManualMode(false);
      setTitle(candidate.title);
      setMangaForm({
        description: selected.synopsis?.slice(0, 600) ?? "",
        mangaka: selected.authors.join(", "),
        genders: selected.genres.join(", "),
        aliases: selected.aliases.join(", "),
        isAdult: false,
      });
      setDemographicOptions(selected.demographics ?? []);
      setSelectedDemographics([]);
      setTrackers((current) => ({ ...current, myanimelist: selected.malUrl ?? `https://myanimelist.net/manga/${selected.malId}` }));
      setJikanMatches([selected]);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Não foi possível carregar os detalhes da obra.");
    } finally {
      setBusy(false);
      setLoadingJikanDetails(false);
    }
  }

  function startManualRegistration() {
    setManualMode(true);
    setSelectedMalId(null);
    setMangaForm({ description: "", mangaka: "", genders: "", aliases: "", isAdult: false });
    setDemographicOptions([]);
    setSelectedDemographics([]);
    setTrackers(EMPTY_TRACKERS);
    setMangaCover(null);
  }

  async function setOverride(translation: Translation, status: TranslationStatus | null) {
    if (!authToken || !editingMangaID) return;
    setBusy(true);
    try {
      const { setTranslationStatusOverride } = await graphqlRequest<{ setTranslationStatusOverride: Translation }>(
        `mutation($mangaID:ID!,$groupID:ID!,$status:TranslationStatus){setTranslationStatusOverride(mangaID:$mangaID,groupID:$groupID,status:$status){groupID language translationStatus calculatedTranslationStatus translationStatusOverride overridden group{id name}}}`,
        { mangaID: editingMangaID, groupID: translation.groupID, status },
        authToken,
      );
      setMatches((items) => items.map((item) => item.id === editingMangaID ? { ...item, translations: item.translations?.map((value) => value.groupID === translation.groupID ? setTranslationStatusOverride : value) } : item));
      await loadGroups(selectedMangaGroup?.id ?? groupID);
      setMessage("Override de tradução atualizado.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Falha ao atualizar o status."); }
    finally { setBusy(false); }
  }

  async function syncOfficialMetadata() {
    if (!authToken || !editingMangaID) return;
    setBusy(true);
    try {
      await graphqlRequest(
        "mutation($mangaID:ID!){syncMangaExternalMetadata(mangaID:$mangaID){id}}",
        { mangaID: editingMangaID },
        authToken,
      );
      await loadGroups(selectedMangaGroup?.id ?? groupID);
      setMessage("Dados oficiais sincronizados.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Falha ao sincronizar os dados oficiais."); }
    finally { setBusy(false); }
  }

  async function saveManga(event: React.FormEvent) {
    event.preventDefault();
    if (!authToken || !selectedMangaGroup) return;
    setBusy(true);
    setMessage("");
    let uploaded: UploadedMedia | null = null;
    try {
      if (mangaCover) uploaded = await uploadImage(mangaCover, "MANGA_COVER");
      const data = {
        title: title.trim(),
        description: mangaForm.description,
        mangaka: mangaForm.mangaka,
        genders: mangaForm.genders.split(",").map((value) => value.trim()).filter(Boolean),
        demographics: selectedDemographics,
        aliases: mangaForm.aliases.split(",").map((value) => value.trim()).filter(Boolean),
        trackers,
        isAdult: mangaForm.isAdult,
        ...(!editingMangaID && selectedMalId ? { malId: selectedMalId } : {}),
        ...(!editingMangaID ? { translationLanguage } : {}),
        ...(uploaded ? { mangaCoverID: uploaded.id } : {}),
      };
      if (editingMangaID) {
        if (selectedMalId && selectedMalId !== editingManga?.externalMetadata?.malId) {
          await graphqlRequest(
            "mutation($mangaID:ID!,$malId:Int!){linkMangaExternalMetadata(mangaID:$mangaID,malId:$malId){id}}",
            { mangaID: editingMangaID, malId: selectedMalId },
            authToken,
          );
        }
        await graphqlRequest(
          "mutation($id:ID!,$data:UpdateMangaInput!){updateManga(id:$id,data:$data){id title}}",
          { id: editingMangaID, data },
          authToken,
        );
        setMessage("Metadados do manga atualizados.");
      } else {
        await graphqlRequest(
          "mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id title}}",
          { groupID: selectedMangaGroup.id, data },
          authToken,
        );
        setMessage("Manga criado no catalogo global e relacionado ao grupo.");
      }
      await loadGroups(selectedMangaGroup.id);
      setEditingMangaID(null);
      setMangaCover(null);
    } catch (error) {
      if (uploaded) await discardImage(uploaded.id).catch(() => undefined);
      setMessage(error instanceof Error ? error.message : "Falha ao salvar o manga.");
    } finally {
      setBusy(false);
    }
  }

  if (authLoading) return <main className={styles.page}>Carregando…</main>;
  if (!authenticatedUser) return <main className={styles.page}>Entre na sua conta para acessar a área de gestão.</main>;

  return (
    <main className={styles.page}>
      <header className={styles.heading}><div><h1>Área de gestão</h1><p>Administre grupos e o catálogo sem alterar o fluxo de publicação dos capítulos.</p></div></header>
      <div className={styles.layout}>
        <nav className={styles.side} aria-label="Áreas administrativas">
          <button className={area === "group" ? styles.active : ""} onClick={() => setArea("group")}>Grupo</button>
          <button className={area === "manga" ? styles.active : ""} onClick={() => { setArea("manga"); setMangaGroupID(""); setTitle(""); setMatches([]); setJikanMatches([]); setExternalSearchState("idle"); setLocalSearchBypassed(false); setManualMode(false); setSelectedMalId(null); setEditingMangaID(null); setMessage(""); }}>Mangas</button>
        </nav>
        <section className={styles.content}>
          {area === "group" ? (
            <form className={styles.form} onSubmit={saveGroup}>
              <div className={styles.sectionTitle}><div><h2>{selectedGroup ? "Dados do grupo" : "Criar grupo"}</h2><p>Selecione uma scan para editar ou comece um novo cadastro.</p></div></div>
              <fieldset className={styles.groupPicker}>
                <legend>Grupo</legend>
                <div className={styles.groupCards}>
                  <button type="button" className={`${styles.groupCard} ${groupID === "new" ? styles.groupCardSelected : ""}`} aria-pressed={groupID === "new"} onClick={() => setGroupID("new")}>
                    <strong>Novo grupo</strong><span>Começar um cadastro</span><small>{groupID === "new" ? "Selecionado" : "Criar grupo"}</small>
                  </button>
                  {groups.map((group) => <button type="button" key={group.id} className={`${styles.groupCard} ${groupID === group.id ? styles.groupCardSelected : ""}`} aria-pressed={groupID === group.id} onClick={() => setGroupID(group.id)}>
                    <strong>{group.name}</strong><span>{group.countryFlag} {group.country}</span><small>{groupID === group.id ? "Selecionado para edição" : "Editar informações"}</small>
                  </button>)}
                </div>
              </fieldset>
              <label>Nome<input required maxLength={120} value={groupForm.name} onChange={(event) => setGroupForm({ ...groupForm, name: event.target.value })} /></label>
              <label>Descrição<textarea required maxLength={1200} value={groupForm.description} onChange={(event) => setGroupForm({ ...groupForm, description: event.target.value })} /></label>
              <label>País<select required value={groupForm.countryCode} onChange={(event) => setGroupForm({ ...groupForm, countryCode: event.target.value })}><option value="" disabled>Selecione um país</option>{countries.map((country) => <option key={country.code} value={country.code}>{country.flag} {country.name}</option>)}</select></label>
              <fieldset className={styles.socialFieldset}><legend>Redes sociais</legend><p>Todos os links são opcionais e devem usar HTTPS.</p>
                <label>Website<input type="url" maxLength={500} placeholder="https://seusite.com" value={socialMedias.site} onChange={(event) => setSocialMedias({ ...socialMedias, site: event.target.value })} /></label>
                <label>Discord<input type="url" maxLength={500} placeholder="https://discord.gg/..." value={socialMedias.discord} onChange={(event) => setSocialMedias({ ...socialMedias, discord: event.target.value })} /></label>
                <label>X / Twitter<input type="url" maxLength={500} placeholder="https://x.com/..." value={socialMedias.x} onChange={(event) => setSocialMedias({ ...socialMedias, x: event.target.value })} /></label>
                <label>Instagram<input type="url" maxLength={500} placeholder="https://instagram.com/..." value={socialMedias.instagram} onChange={(event) => setSocialMedias({ ...socialMedias, instagram: event.target.value })} /></label>
                <label>Facebook<input type="url" maxLength={500} placeholder="https://facebook.com/..." value={socialMedias.facebook} onChange={(event) => setSocialMedias({ ...socialMedias, facebook: event.target.value })} /></label>
                <label>YouTube<input type="url" maxLength={500} placeholder="https://youtube.com/@..." value={socialMedias.youtube} onChange={(event) => setSocialMedias({ ...socialMedias, youtube: event.target.value })} /></label>
                <label>TikTok<input type="url" maxLength={500} placeholder="https://tiktok.com/@..." value={socialMedias.tiktok} onChange={(event) => setSocialMedias({ ...socialMedias, tiktok: event.target.value })} /></label>
              </fieldset>
              <ImageUploadField label="Imagem do grupo" purpose="GROUP_IMAGE" shape="square" currentUrl={selectedGroup?.groupImage} value={groupImage} onChange={setGroupImage} disabled={busy} />
              <button className={styles.primary} disabled={busy}>{busy ? "Salvando…" : selectedGroup ? "Salvar grupo" : "Criar grupo"}</button>
            </form>
          ) : (
            <div className={styles.mangaArea}>
              <div className={styles.sectionTitle}><div><h2>Catálogo global</h2><p>Primeiro escolha o grupo que receberá a obra.</p></div></div>
              <fieldset className={styles.groupPicker}><legend>1. Escolha o grupo que receberá a obra</legend><div className={styles.groupCards}>{groups.map((group) => <button type="button" key={group.id} className={`${styles.groupCard} ${mangaGroupID === group.id ? styles.groupCardSelected : ""}`} aria-pressed={mangaGroupID === group.id} onClick={() => { setMangaGroupID(group.id); setTitle(""); setMatches([]); setJikanMatches([]); setExternalSearchState("idle"); setLocalSearchBypassed(false); setManualMode(false); setSelectedMalId(null); setEditingMangaID(null); setMessage(""); }}><strong>{group.name}</strong><span>{group.countryFlag} {group.country} · {group.mangas.length} {group.mangas.length === 1 ? "manga" : "mangas"}</span><small>{mangaGroupID === group.id ? "Grupo selecionado" : "Selecionar grupo"}</small></button>)}</div></fieldset>
              {selectedMangaGroup ? <>
                <fieldset className={styles.groupPicker}><legend>2. Pesquisar obra</legend><label className={styles.search}>Pesquisar obra<input value={title} onChange={(event) => { setTitle(event.target.value); setSearching(false); setEditingMangaID(null); setSelectedMalId(null); setManualMode(false); setLocalSearchBypassed(false); setExternalSearchState("idle"); setMatches([]); setJikanMatches([]); setTrackers(EMPTY_TRACKERS); setMessage(""); }} placeholder="Digite ao menos dois caracteres" /></label></fieldset>
                {(searching || externalSearchState === "loading" || loadingJikanDetails) ? <div className={styles.loadingStatus} role="status" aria-live="polite"><span className={styles.loadingSpinner} aria-hidden="true" /><span><strong>{loadingJikanDetails ? "Carregando dados da obra" : externalSearchState === "loading" ? "Consultando o MyAnimeList" : "Pesquisando no catálogo"}</strong><small>{loadingJikanDetails ? "Buscando sinopse, gêneros e demografia para você revisar." : externalSearchState === "loading" ? "A Jikan está procurando resultados no catálogo do MAL." : "Verificando se a obra já existe no catálogo."}</small></span></div> : matches.length ? <div className={styles.status}>Encontramos obras no catálogo local. Reutilize o registro correto.</div> : null}
                {matches.length > 0 && <div className={styles.results}>{matches.map((manga) => <div key={manga.id}><span><strong>{manga.title}</strong><small>{manga.mangaka}{manga.isAdult ? " · +18" : ""}</small></span><div className={styles.actions}><button disabled={busy} onClick={() => void addExisting(manga.id)}>Usar existente</button>{isAegis && <button onClick={() => editManga(manga)}>Editar metadados</button>}</div></div>)}</div>}
                {matches.length > 0 && !localSearchBypassed && <button type="button" className={styles.secondaryAction} onClick={() => setLocalSearchBypassed(true)}>Nenhuma dessas obras corresponde — buscar no MyAnimeList</button>}
                {jikanMatches.length > 0 && <div className={styles.results}><h3 className={styles.externalResultsTitle}>MyAnimeList (Jikan)</h3>{jikanMatches.map((candidate) => <div key={candidate.malId}>{candidate.imageUrl && <span className={styles.externalCover} style={{backgroundImage:`url(${candidate.imageUrl})`}} role="img" aria-label={`Capa de referência de ${candidate.title}`} />}<span><strong>{candidate.title}</strong><small>{[candidate.titleEnglish !== candidate.title ? candidate.titleEnglish : null, candidate.titleJapanese, candidate.authors.join(", "), candidate.type, candidate.year, candidate.rawStatus].filter(Boolean).join(" · ")}</small></span><button type="button" disabled={busy} onClick={() => void selectJikanManga(candidate)}>{selectedMalId === candidate.malId ? "Selecionado" : busy ? "Carregando…" : "Selecionar obra"}</button></div>)}</div>}
                {externalSearchState === "error" && <div className={styles.externalNotice}><p>Não foi possível concluir a busca agora. O título continua preenchido; tente novamente.</p><button type="button" onClick={() => setSearchNonce((value) => value + 1)}>Tentar novamente</button></div>}
                {externalSearchState === "empty" && !manualMode && <div className={styles.externalNotice}><p>Nenhuma obra foi encontrada no catálogo local nem no MyAnimeList.</p><button type="button" onClick={startManualRegistration}>Cadastrar manualmente</button></div>}
                {externalSearchState === "results" && !selectedMalId && !manualMode && <button type="button" className={styles.secondaryAction} onClick={startManualRegistration}>Não encontrou a obra correta? Cadastrar manualmente</button>}
                {(editingMangaID || manualMode || selectedMalId) && <form className={`${styles.form} ${styles.stepForm}`} onSubmit={saveManga}><fieldset className={styles.stepPanel}>
                  <legend>{editingManga ? `Editando ${editingManga.title}` : "3. Novo registro global"}</legend>
                  {selectedJikanCandidate && !editingMangaID && <p className={styles.externalNotice}>Revise todos os dados importados antes de criar. A sinopse abaixo é editável e não será sobrescrita nas sincronizações futuras.</p>}
                  {manualMode && <p className={styles.externalNotice}>Cadastro manual: este registro será criado sem identificador MAL e poderá ser associado posteriormente por um AEGIS.</p>}
                  {!editingMangaID && <label>Idioma da tradução<input required maxLength={80} value={translationLanguage} onChange={(event) => setTranslationLanguage(event.target.value)} /></label>}
                  <ImageUploadField label="Capa" purpose="MANGA_COVER" shape="cover" currentUrl={editingManga?.mangaCover} value={mangaCover} onChange={setMangaCover} disabled={busy} />
                  <label>Descrição<textarea required minLength={120} maxLength={600} value={mangaForm.description} onChange={(event) => setMangaForm({ ...mangaForm, description: event.target.value })} /></label>
                  <label>Mangaka (Autor)<input required value={mangaForm.mangaka} readOnly /></label>
                  <label>Gêneros (separados por vírgula)<input required value={mangaForm.genders} onChange={(event) => setMangaForm({ ...mangaForm, genders: event.target.value })} /></label>
                  <fieldset className={styles.demographics}><legend>Demografia do MyAnimeList</legend><p>Selecione as classificações que devem aparecer no catálogo. As opções vêm do registro escolhido no MAL.</p>{demographicOptions.length ? <div>{demographicOptions.map((demographic) => <label key={demographic}><input type="checkbox" checked={selectedDemographics.includes(demographic)} onChange={(event) => setSelectedDemographics((current) => event.target.checked ? [...current, demographic] : current.filter((value) => value !== demographic))} /><span>{demographic}</span></label>)}</div> : <small>{selectedMalId ? "O MAL não informou demografias para esta obra." : "Selecione uma obra do MAL para carregar as opções."}</small>}</fieldset>
                  <label>Títulos alternativos<input placeholder="Separe os títulos por vírgula" value={mangaForm.aliases} onChange={(event) => setMangaForm({ ...mangaForm, aliases: event.target.value })} /></label>
                  <fieldset style={{display:"grid",gap:14,padding:18,border:"1px solid #ffffff18",borderRadius:10}}><legend style={{padding:"0 7px",fontWeight:700}}>Trackers</legend><p style={{color:"#aeb3c1",fontSize:".84rem"}}>O MyAnimeList é preenchido pela obra selecionada. Os demais links são opcionais e inseridos manualmente.</p>
                    <label>MyAnimeList<input type="url" maxLength={500} placeholder="Preenchido automaticamente pela busca" value={trackers.myanimelist} readOnly /></label>
                    <label>AniList<input type="url" maxLength={500} placeholder="https://anilist.co/manga/..." value={trackers.anilist} onChange={(event) => setTrackers({ ...trackers, anilist: event.target.value })} /></label>
                    <label>Anime-Planet<input type="url" maxLength={500} placeholder="https://www.anime-planet.com/manga/..." value={trackers.animeplanet} onChange={(event) => setTrackers({ ...trackers, animeplanet: event.target.value })} /></label>
                    <label>AniDB<input type="url" maxLength={500} placeholder="https://anidb.net/manga/..." value={trackers.anidb} onChange={(event) => setTrackers({ ...trackers, anidb: event.target.value })} /></label>
                  </fieldset>
                  <label className={styles.adultCheck}><input type="checkbox" checked={mangaForm.isAdult} onChange={(event) => setMangaForm({ ...mangaForm, isAdult: event.target.checked })} /><span><strong>Esta obra contém conteúdo adulto (+18)</strong><small>Classificação separada dos gêneros.</small></span></label>
                  {editingMangaID && !isAegis && <p className={styles.empty}>Somente a autoridade AEGIS pode editar metadados globais.</p>}
                  {editingMangaID && isAegis && !editingManga?.externalMetadata?.malId && <p className={styles.empty}>Esta obra antiga ainda não está vinculada ao MyAnimeList. Selecione acima o resultado correto antes de salvar.</p>}
                  {editingMangaID && isAegis && editingManga?.translations?.length ? <div className={styles.list}><h3>Status das traduções</h3>{editingManga.translations.map((translation) => <div key={translation.groupID}><span><strong>{translation.group.name}</strong><small>Calculado: {translation.calculatedTranslationStatus} · Exibido: {translation.translationStatus}{translation.overridden ? " (manual)" : " (automático)"}</small></span><select value={translation.translationStatusOverride ?? "AUTO"} onChange={(event) => void setOverride(translation, event.target.value === "AUTO" ? null : event.target.value as TranslationStatus)}><option value="AUTO">Automático</option><option value="ONGOING">Em andamento</option><option value="PAUSED">Pausado</option><option value="COMPLETED">Concluído</option></select></div>)}</div> : null}
                  <div className={`${styles.actions} ${styles.submitActions}`}><button className={styles.primary} disabled={busy || (!editingMangaID && (!selectedGroup || (!selectedMalId && !manualMode))) || (Boolean(editingMangaID) && (!isAegis || (!editingManga?.externalMetadata?.malId && !selectedMalId)))}>{busy ? "Salvando…" : editingMangaID ? "Salvar manga" : selectedMalId ? "Importar e relacionar" : "Cadastrar manualmente"}</button>{editingMangaID && isAegis && editingManga?.externalMetadata?.malId && <button type="button" disabled={busy} onClick={() => void syncOfficialMetadata()}>Sincronizar dados oficiais</button>}{editingMangaID && <button type="button" onClick={() => setEditingMangaID(null)}>Cancelar edição</button>}</div>
                </fieldset></form>}
                <div className={styles.list}><h3>Mangas relacionados a {selectedMangaGroup.name}</h3>{selectedMangaGroup.mangas.length ? selectedMangaGroup.mangas.map((manga) => <div key={manga.id}><span>{manga.title}{manga.isAdult ? " · +18" : ""}</span>{isAegis && <button onClick={() => editManga(manga)}>Editar metadados</button>}</div>) : <p className={styles.empty}>Nenhum manga relacionado.</p>}</div>
              </> : <p className={styles.empty}>{groups.length ? "Selecione um grupo para continuar. A busca e o cadastro aparecerão depois da seleção." : "Você ainda não possui grupos cadastrados. Crie um grupo antes de adicionar mangas."}</p>}
            </div>
          )}
          {message && <p className={styles.message} role="status">{message}</p>}
        </section>
      </div>
    </main>
  );
}
