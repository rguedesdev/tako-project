import { graphqlRequest } from "./graphql";

export interface GroupStats {
  followers: number;
  mangas: number;
  chapters: number;
  views: number;
  likes: number;
}

export interface SocialMedias {
  site?: string | null;
  discord?: string | null;
  telegram?: string | null;
  x?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  youtube?: string | null;
  tiktok?: string | null;
  bluesky?: string | null;
  orkut?: string | null;
  email?: string | null;
}

export interface Group {
  id: string;
  groupImage?: string | null;
  name: string;
  description: string;
  country: string;
  countryCode: string;
  countryFlag: string;
  stats: GroupStats;
  followedByMe?: boolean;
  socialMedias?: SocialMedias | null;
  mangas?: MangaCardData[];
  translations?: MangaTranslation[];
}

export interface Trackers {
  myanimelist?: string | null;
  anilist?: string | null;
  animeplanet?: string | null;
  anidb?: string | null;
}

export interface MangaCardData {
  id: string;
  mangaCover?: string | null;
  title: string;
  mangaka: string;
  isAdult: boolean;
  genders?: string[];
  demographics?: string[];
}

export interface Manga extends MangaCardData {
  description: string;
  genders: string[];
  trackers?: Trackers | null;
  stats: { chapters: number; views: number; likes: number };
  officialPublicationStatus: "ONGOING" | "COMPLETED" | "HIATUS" | "UNKNOWN";
  officialTotalChapters?: number | null;
  externalMetadata?: { malId?: number | null; lastSyncedAt?: string | null; lastSyncError?: string | null } | null;
  translations?: MangaTranslation[];
}

export interface GroupCard extends Pick<Group, "id" | "groupImage" | "name" | "description" | "country" | "countryCode" | "countryFlag"> {
  stats: Pick<GroupStats, "mangas" | "chapters">;
}

export interface MangaTranslation {
  mangaID: string;
  groupID: string;
  group: Pick<Group, "id" | "name" | "country" | "countryFlag">;
  language: string;
  latestMainChapter?: number | null;
  lastMainChapterPublishedAt?: string | null;
  translationStatus: "ONGOING" | "PAUSED" | "COMPLETED";
  calculatedTranslationStatus: "ONGOING" | "PAUSED" | "COMPLETED";
  translationStatusOverride?: "ONGOING" | "PAUSED" | "COMPLETED" | null;
  overridden: boolean;
}

export interface Chapter {
  id: string;
  manga: string;
  group: string;
  chapterTitle?: string | null;
  chapterNumber: number;
  pages: string[];
  views: number;
  createdAt: string;
  mangaInfo: Manga;
  groupInfo: Group;
}

export interface ChapterListItem extends Pick<Chapter, "id" | "manga" | "group" | "chapterTitle" | "chapterNumber"> {
  groupInfo: Pick<Group, "id" | "name" | "country" | "countryFlag">;
}

export interface ChapterDetail extends Pick<Chapter, "id" | "manga" | "group" | "chapterTitle" | "chapterNumber" | "pages"> {
  groupInfo: Pick<Group, "id" | "name" | "country" | "countryFlag">;
  mangaInfo: Pick<Manga, "id" | "title">;
}

export interface LatestChapter extends Pick<Chapter, "id" | "manga" | "group" | "chapterTitle" | "chapterNumber" | "createdAt"> {
  groupInfo: Pick<Group, "id" | "name">;
  mangaInfo: Pick<Manga, "id" | "title" | "mangaCover">;
}

const GROUP_FIELDS = `
  id groupImage name description country countryCode countryFlag
  stats { followers mangas chapters views likes }
  socialMedias { site discord telegram x instagram facebook youtube tiktok bluesky orkut email }
`;

const GROUP_CARD_FIELDS = `
  id groupImage name description country countryCode countryFlag
  stats { mangas chapters }
`;

const MANGA_FIELDS = `
  id mangaCover title description mangaka genders demographics isAdult
  trackers { myanimelist anilist animeplanet anidb }
`;

const MANGA_CARD_FIELDS = `id mangaCover title mangaka isAdult`;

const MANGA_STATUS_FIELDS = `
  officialPublicationStatus officialTotalChapters
  externalMetadata { malId lastSyncedAt lastSyncError }
  translations {
    mangaID groupID language latestMainChapter lastMainChapterPublishedAt
    translationStatus calculatedTranslationStatus translationStatusOverride overridden
    group { id name country countryFlag }
  }
`;

export async function getGroups() {
  const data = await graphqlRequest<{ groups: GroupCard[] }>(`query Groups {
    groups { ${GROUP_CARD_FIELDS} }
  }`);
  return data.groups;
}

export async function getGroup(id: string) {
  const data = await graphqlRequest<{ group: Group | null }>(`query Group($id: ID!) {
    group(id: $id) { ${GROUP_FIELDS} followedByMe mangas { ${MANGA_CARD_FIELDS} } translations { mangaID groupID language translationStatus calculatedTranslationStatus translationStatusOverride overridden group { id name country countryFlag } } }
  }`, { id });
  return data.group;
}

export async function getMangas() {
  const data = await graphqlRequest<{ mangas: MangaCardData[] }>(`query Mangas {
    mangas { ${MANGA_CARD_FIELDS} genders demographics }
  }`);
  return data.mangas;
}

export async function getManga(id: string) {
  const data = await graphqlRequest<{ manga: Manga | null }>(`query Manga($id: ID!) {
    manga(id: $id) { ${MANGA_FIELDS} stats { chapters views likes } ${MANGA_STATUS_FIELDS} }
  }`, { id });
  return data.manga;
}

export async function getChaptersByManga(mangaId: string) {
  const data = await graphqlRequest<{ chaptersByManga: ChapterListItem[] }>(`query Chapters($mangaId: ID!) {
    chaptersByManga(mangaId: $mangaId) {
      id manga group chapterTitle chapterNumber
      groupInfo { id name country countryFlag }
    }
  }`, { mangaId });
  return data.chaptersByManga;
}

export async function recordChapterView(chapterID: string) {
  const data = await graphqlRequest<{ recordChapterView: { chapterID: string; views: number } }>(
    `mutation RecordChapterView($chapterID: ID!) {
      recordChapterView(chapterID: $chapterID) { chapterID views }
    }`,
    { chapterID },
    null,
  );
  return data.recordChapterView;
}

export async function getChapter(id: string) {
  const data = await graphqlRequest<{ chapter: ChapterDetail | null }>(`query Chapter($id: ID!) {
    chapter(id: $id) {
      id manga group chapterTitle chapterNumber pages
      groupInfo { id name country countryFlag }
      mangaInfo { id title }
    }
  }`, { id });
  return data.chapter;
}

export async function getLatestChapters(limit = 40) {
  const data = await graphqlRequest<{ latestChapters: LatestChapter[] }>(`query LatestChapters($limit: Int!) {
    latestChapters(limit: $limit) {
      id manga group chapterTitle chapterNumber createdAt
      groupInfo { id name }
      mangaInfo { id title mangaCover }
    }
  }`, { limit });
  return data.latestChapters;
}

export function mediaUrl(value?: string | null) {
  if (!value) return null;
  if (/^(https?:|data:|blob:|\/)/i.test(value)) return value;
  const cid = value.replace(/^ipfs:\/\//i, "").replace(/^ipfs\//i, "");
  const gateway = (process.env.NEXT_PUBLIC_IPFS_GATEWAY ?? "https://dweb.link/ipfs/")
    .replace(/\/?$/, "/");
  return `${gateway}${cid}`;
}
