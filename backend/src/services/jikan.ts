import {
  JIKAN_MIN_REQUEST_INTERVAL_MS,
  JIKAN_SEARCH_CACHE_MINUTES,
} from "../config/translation";
import { request as httpsRequest } from "node:https";
import type { OfficialPublicationStatus } from "../graphql/modules/manga/translation-status";

interface JikanMangaData {
  mal_id: number;
  url?: string | null;
  title: string;
  title_english?: string | null;
  title_japanese?: string | null;
  titles?: Array<{ type: string; title: string }>;
  synopsis?: string | null;
  chapters?: number | null;
  status?: string | null;
  publishing?: boolean;
  published?: { from?: string | null };
  type?: string | null;
  images?: { jpg?: { image_url?: string | null; large_image_url?: string | null } };
  authors?: Array<{ mal_id: number; name: string }>;
  genres?: Array<{ mal_id: number; name: string }>;
  demographics?: Array<{ mal_id: number; name: string }>;
}

interface ExternalMangaCandidate {
  malId: number;
  title: string;
  titleEnglish: string | null;
  titleJapanese: string | null;
  aliases: string[];
  synopsis: string | null;
  totalChapters: number | null;
  publicationStatus: OfficialPublicationStatus;
  rawStatus: string | null;
  authors: string[];
  genres: string[];
  demographics: string[];
  imageUrl: string | null;
  malUrl: string | null;
  type: string | null;
  year: number | null;
}

type Fetcher = typeof fetch;
type CacheEntry = { expiresAt: number; results: ExternalMangaCandidate[] };

interface MalSuggestion {
  id: number;
  name: string;
  url: string;
  image_url?: string | null;
  payload?: { media_type?: string | null; start_year?: number | null; status?: string | null };
}

const nodeHttpsFetcher: Fetcher = ((input: string | URL | Request, init?: RequestInit) => new Promise<Response>((resolve, reject) => {
  const url = new URL(typeof input === "string" || input instanceof URL ? input : input.url);
  const request = httpsRequest(url, {
    method: init?.method ?? "GET",
    headers: init?.headers as Record<string, string> | undefined,
  }, (response) => {
    const chunks: Buffer[] = [];
    let size = 0;
    response.on("data", (chunk: Buffer) => {
      size += chunk.length;
      if (size > 5 * 1024 * 1024) request.destroy(new Error("Resposta da Jikan excedeu o limite permitido."));
      else chunks.push(chunk);
    });
    response.on("end", () => {
      const headers = new Headers();
      for (const [key, value] of Object.entries(response.headers)) {
        if (Array.isArray(value)) value.forEach((item) => headers.append(key, item));
        else if (value != null) headers.set(key, String(value));
      }
      const body = chunks.length ? Buffer.concat(chunks) : null;
      resolve(new Response(body, { status: response.statusCode ?? 500, headers }));
    });
  });
  request.on("error", reject);
  const abort = () => request.destroy(new DOMException("A consulta à Jikan excedeu o tempo limite.", "AbortError"));
  if (init?.signal?.aborted) abort();
  else init?.signal?.addEventListener("abort", abort, { once: true });
  request.end();
})) as Fetcher;

function mapPublicationStatus(status?: string | null, publishing?: boolean): OfficialPublicationStatus {
  const normalized = status?.trim().toLowerCase();
  if (normalized === "finished" || normalized === "finished publishing") return "COMPLETED";
  if (normalized === "on hiatus" || normalized === "hiatus") return "HIATUS";
  if (publishing || normalized === "publishing" || normalized === "currently publishing") return "ONGOING";
  return "UNKNOWN";
}

function mapManga(data: JikanMangaData): ExternalMangaCandidate {
  const clean = (value?: string | null, max = 600) => value?.trim().slice(0, max) || null;
  const aliases = [...new Set([
    ...(data.titles ?? []).map((title) => clean(title.title, 180)),
    clean(data.title_english, 180),
    clean(data.title_japanese, 180),
  ].filter((title): title is string => Boolean(title)))]
    .filter((title) => title !== data.title)
    .slice(0, 30);
  const publishedYear = data.published?.from ? new Date(data.published.from).getUTCFullYear() : NaN;
  return {
    malId: data.mal_id,
    title: clean(data.title, 180) ?? `MAL ${data.mal_id}`,
    titleEnglish: clean(data.title_english, 180),
    titleJapanese: clean(data.title_japanese, 180),
    aliases,
    synopsis: clean(data.synopsis, 600),
    totalChapters: Number.isInteger(data.chapters) && Number(data.chapters) > 0 ? Number(data.chapters) : null,
    publicationStatus: mapPublicationStatus(data.status, data.publishing),
    rawStatus: data.status ?? null,
    authors: (data.authors ?? []).map((author) => clean(author.name, 180)).filter((value): value is string => Boolean(value)).slice(0, 10),
    genres: (data.genres ?? []).map((genre) => clean(genre.name, 60)).filter((value): value is string => Boolean(value)).slice(0, 30),
    demographics: (data.demographics ?? []).map((item) => clean(item.name, 60)).filter((value): value is string => Boolean(value)).slice(0, 20),
    imageUrl: data.images?.jpg?.large_image_url ?? data.images?.jpg?.image_url ?? null,
    malUrl: data.url ?? null,
    type: clean(data.type, 60),
    year: Number.isInteger(publishedYear) ? publishedYear : null,
  };
}

function decodeHtml(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#039;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ").trim();
}

function parseMalMangaPage(html: string, malId: number, fallback?: ExternalMangaCandidate): ExternalMangaCandidate | null {
  const meta = (property: string) => decodeHtml(html.match(new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']*)`, "i"))?.[1] ?? "");
  const fieldHtml = (label: string) => html.match(new RegExp(`<span[^>]*class=["'][^"']*\\bdark_text\\b[^"']*["'][^>]*>\\s*${label}:\\s*<\\/span>([\\s\\S]*?)(?=<\\/div>|<br\\s*\\/?>)`, "i"))?.[1] ?? "";
  const field = (label: string) => decodeHtml(fieldHtml(label));
  const title = meta("og:title") || fallback?.title;
  if (!title) return null;
  const english = field("English") || null;
  const japanese = field("Japanese") || null;
  const synonyms = field("Synonyms").split(",").map((value) => value.trim()).filter(Boolean);
  const genreBlock = html.match(/<span[^>]*class=["']dark_text["'][^>]*>Genres:<\/span>([\s\S]*?)<\/div>/i)?.[1] ?? "";
  const genres = [...genreBlock.matchAll(/itemprop=["']genre["'][^>]*>([^<]+)</gi)].map((match) => decodeHtml(match[1])).filter(Boolean);
  const demographicBlock = fieldHtml("Demographics");
  const demographics = [...demographicBlock.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)].map((match) => decodeHtml(match[1])).filter(Boolean);
  const authorBlock = html.match(/<span[^>]*class=["']dark_text["'][^>]*>Authors:<\/span>([\s\S]*?)<\/div>/i)?.[1] ?? "";
  const authors = [...authorBlock.matchAll(/<a[^>]*>([^<]+)<\/a>/gi)].map((match) => decodeHtml(match[1])).filter(Boolean);
  const chaptersText = field("Chapters");
  const chapters = /^\d+$/.test(chaptersText) && Number(chaptersText) > 0 ? Number(chaptersText) : null;
  const published = field("Published");
  const yearMatch = published.match(/\b(19|20)\d{2}\b/);
  const aliases = [...new Set([english, japanese, ...synonyms, ...(fallback?.aliases ?? [])].filter((value): value is string => Boolean(value) && value !== title))].slice(0, 30);
  const status = field("Status") || fallback?.rawStatus || null;
  return {
    malId,
    title: title.slice(0, 180),
    titleEnglish: english?.slice(0, 180) ?? fallback?.titleEnglish ?? null,
    titleJapanese: japanese?.slice(0, 180) ?? fallback?.titleJapanese ?? null,
    aliases: aliases.map((value) => value.slice(0, 180)),
    synopsis: (meta("og:description") || fallback?.synopsis || "").slice(0, 600) || null,
    totalChapters: chapters ?? fallback?.totalChapters ?? null,
    publicationStatus: mapPublicationStatus(status),
    rawStatus: status,
    authors: authors.slice(0, 10).map((value) => value.slice(0, 180)),
    genres: genres.slice(0, 30).map((value) => value.slice(0, 60)),
    demographics: (demographics.length ? demographics : fallback?.demographics ?? []).slice(0, 20).map((value) => value.slice(0, 60)),
    imageUrl: meta("og:image") || fallback?.imageUrl || null,
    malUrl: `https://myanimelist.net/manga/${malId}`,
    type: field("Type")?.slice(0, 60) || fallback?.type || null,
    year: yearMatch ? Number(yearMatch[0]) : fallback?.year ?? null,
  };
}

class JikanService {
  private readonly baseURL: string;
  private readonly fetcher: Fetcher;
  private readonly minIntervalMs: number;
  private readonly timeoutMs: number;
  private readonly fallbackToMyAnimeList: boolean;
  private jikanUnavailableUntil = 0;
  private readonly searchCache = new Map<string, CacheEntry>();
  private requestChain: Promise<void> = Promise.resolve();
  private lastRequestAt = 0;

  constructor(options: { baseURL?: string; fetcher?: Fetcher; minIntervalMs?: number; timeoutMs?: number; fallbackToMyAnimeList?: boolean } = {}) {
    this.baseURL = (options.baseURL ?? process.env.JIKAN_API_URL ?? "https://api.jikan.moe/v4").replace(/\/$/, "");
    this.fetcher = options.fetcher ?? nodeHttpsFetcher;
    this.minIntervalMs = options.minIntervalMs ?? JIKAN_MIN_REQUEST_INTERVAL_MS;
    this.timeoutMs = options.timeoutMs ?? 8_000;
    this.fallbackToMyAnimeList = options.fallbackToMyAnimeList ?? true;
  }

  private async waitForRateLimit() {
    const previous = this.requestChain;
    let release!: () => void;
    this.requestChain = new Promise<void>((resolve) => { release = resolve; });
    await previous;
    const wait = Math.max(0, this.lastRequestAt + this.minIntervalMs - Date.now());
    if (wait) await new Promise((resolve) => setTimeout(resolve, wait));
    this.lastRequestAt = Date.now();
    release();
  }

  private async request(path: string, etag?: string | null, baseURL = this.baseURL) {
    await this.waitForRateLimit();
    const response = await this.fetcher(`${baseURL}${path}`, {
      headers: { Accept: "application/json", ...(etag ? { "If-None-Match": etag } : {}) },
      signal: AbortSignal.timeout(this.timeoutMs),
    });
    if (response.status === 304) return { notModified: true as const, etag: etag ?? null, data: null };
    if (!response.ok) {
      const retryAfter = response.headers.get("retry-after");
      throw new Error(`Jikan indisponível (${response.status})${retryAfter ? `; tente novamente em ${retryAfter}s` : ""}.`);
    }
    const body = await response.json() as { data?: unknown };
    return { notModified: false as const, etag: response.headers.get("etag"), data: body.data };
  }

  private async fetchMyAnimeList(url: string) {
    await this.waitForRateLimit();
    const response = await this.fetcher(url, {
      headers: { Accept: "text/html,application/json;q=0.9", "User-Agent": "TakoProject/1.0" },
      signal: AbortSignal.timeout(this.timeoutMs),
    });
    if (!response.ok) throw new Error(`MyAnimeList indisponível (${response.status}).`);
    return response;
  }

  private async getMangaFromMyAnimeList(malId: number, fallback?: ExternalMangaCandidate) {
    const response = await this.fetchMyAnimeList(`https://myanimelist.net/manga/${malId}`);
    return parseMalMangaPage(await response.text(), malId, fallback);
  }

  private async getMangaFromTenrai(malId: number) {
    const fallbackBaseURL = (process.env.TENRAI_API_URL ?? "https://api.tenrai.org/v1").replace(/\/$/, "");
    if (fallbackBaseURL === this.baseURL) return null;
    const response = await this.request(`/manga/${malId}/full`, null, fallbackBaseURL);
    const data = response.data as JikanMangaData | null;
    return data && Number(data.mal_id) === malId && typeof data.title === "string" ? mapManga(data) : null;
  }

  private async searchMyAnimeList(query: string, limit: number) {
    const response = await this.fetchMyAnimeList(`https://myanimelist.net/search/prefix.json?type=manga&keyword=${encodeURIComponent(query.trim())}&v=1`);
    const body = await response.json() as { categories?: Array<{ type?: string; items?: MalSuggestion[] }> };
    const suggestions = (body.categories?.find((category) => category.type === "manga")?.items ?? [])
      .filter((item) => Number.isSafeInteger(item.id) && item.id > 0 && typeof item.name === "string" && item.name.trim())
      .slice(0, Math.min(Math.max(limit, 1), 12));
    const basics = suggestions.map<ExternalMangaCandidate>((item) => ({
      malId: item.id,
      title: item.name.trim().slice(0, 180),
      titleEnglish: null,
      titleJapanese: null,
      aliases: [],
      synopsis: null,
      totalChapters: null,
      publicationStatus: mapPublicationStatus(item.payload?.status),
      rawStatus: item.payload?.status ?? null,
      authors: [],
      genres: [],
      demographics: [],
      imageUrl: item.image_url ?? null,
      malUrl: item.url,
      type: item.payload?.media_type?.slice(0, 60) ?? null,
      year: Number.isInteger(item.payload?.start_year) ? Number(item.payload?.start_year) : null,
    }));
    return basics;
  }

  async searchManga(query: string, limit = 8) {
    const normalized = query.trim().toLocaleLowerCase();
    if (normalized.length < 2) return [];
    const cached = this.searchCache.get(normalized);
    if (cached && cached.expiresAt > Date.now()) return cached.results.slice(0, limit);
    let results: ExternalMangaCandidate[];
    try {
      if (this.jikanUnavailableUntil > Date.now()) throw new Error("Jikan temporariamente em espera após falha recente.");
      const response = await this.request(`/manga?q=${encodeURIComponent(query.trim())}&limit=${Math.min(Math.max(limit, 1), 12)}&order_by=members&sort=desc`);
      results = (Array.isArray(response.data) ? response.data : [])
        .filter((item: any) => Number.isSafeInteger(item?.mal_id) && item.mal_id > 0 && typeof item.title === "string" && item.title.trim())
        .map((item) => mapManga(item as JikanMangaData));
    } catch (error) {
      if (!this.fallbackToMyAnimeList) throw error;
      this.jikanUnavailableUntil = Date.now() + 5 * 60_000;
      try { results = await this.searchMyAnimeList(query, limit); }
      catch (fallbackError) {
        const firstMessage = error instanceof Error ? error.message : "Jikan indisponível.";
        const fallbackMessage = fallbackError instanceof Error ? fallbackError.message : "MyAnimeList indisponível.";
        throw new Error(`${firstMessage} Fallback: ${fallbackMessage}`);
      }
    }
    this.searchCache.set(normalized, {
      expiresAt: Date.now() + JIKAN_SEARCH_CACHE_MINUTES * 60_000,
      results,
    });
    return results;
  }

  async getManga(malId: number, etag?: string | null) {
    if (!Number.isInteger(malId) || malId <= 0) throw new Error("Identificador MAL inválido.");
    try {
      if (this.jikanUnavailableUntil > Date.now()) throw new Error("Jikan temporariamente em espera após falha recente.");
      const response = await this.request(`/manga/${malId}`, etag);
      const data = response.data
        && Number.isSafeInteger((response.data as JikanMangaData).mal_id)
        && (response.data as JikanMangaData).mal_id > 0
        && typeof (response.data as JikanMangaData).title === "string"
        ? mapManga(response.data as JikanMangaData)
        : null;

      // Jikan can return a valid manga record while omitting fields available
      // from the Jikan-compatible Tenrai source used by the OtakuList project.
      // Enrich missing fields without replacing values already returned here.
      if (data && data.demographics.length === 0) {
        try {
          const fallbackData = await this.getMangaFromTenrai(malId);
          if (fallbackData?.demographics.length) data.demographics = fallbackData.demographics;
          if (fallbackData && !data.genres.length) data.genres = fallbackData.genres;
          if (fallbackData && !data.authors.length) data.authors = fallbackData.authors;
          if (fallbackData && !data.synopsis) data.synopsis = fallbackData.synopsis;
          if (fallbackData && !data.aliases.length) data.aliases = fallbackData.aliases;
          if (fallbackData && !data.imageUrl) data.imageUrl = fallbackData.imageUrl;
        } catch {
          // Continue to the MAL page fallback if the compatible API is unavailable.
        }
      }

      if (data && data.demographics.length === 0) {
        try {
          const malData = await this.getMangaFromMyAnimeList(malId, data);
          if (malData?.demographics.length) data.demographics = malData.demographics;
        } catch {
          // MAL's HTML page is a best-effort fallback; Jikan's data remains usable.
        }
      }

      return {
        ...response,
        data,
      };
    } catch (error) {
      if (!this.fallbackToMyAnimeList) throw error;
      this.jikanUnavailableUntil = Date.now() + 5 * 60_000;
      try {
        const data = await this.getMangaFromTenrai(malId);
        if (data) return { notModified: false as const, etag: null, data };
      } catch {
        // Continue to the MAL page fallback if the compatible API is unavailable.
      }
      const data = await this.getMangaFromMyAnimeList(malId);
      if (!data) throw error;
      return { notModified: false as const, etag: null, data };
    }
  }
}

const jikanService = new JikanService();

export { JikanService, jikanService, mapPublicationStatus, parseMalMangaPage };
export type { ExternalMangaCandidate };
