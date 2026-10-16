import { TRANSLATION_PAUSED_AFTER_MONTHS } from "../../../config/translation";

const TRANSLATION_STATUSES = ["ONGOING", "PAUSED", "COMPLETED"] as const;
type TranslationStatus = (typeof TRANSLATION_STATUSES)[number];
type OfficialPublicationStatus = "ONGOING" | "COMPLETED" | "HIATUS" | "UNKNOWN";

interface TranslationStatusInput {
  officialPublicationStatus: OfficialPublicationStatus;
  officialTotalChapters?: number | null;
  latestMainChapter?: number | null;
  lastMainChapterPublishedAt?: Date | string | null;
  relationshipCreatedAt?: Date | string | null;
  override?: TranslationStatus | null;
  now?: Date;
}

function pausedCutoff(now = new Date()) {
  const cutoff = new Date(now);
  cutoff.setUTCMonth(cutoff.getUTCMonth() - TRANSLATION_PAUSED_AFTER_MONTHS);
  return cutoff;
}

function calculateTranslationStatus(input: TranslationStatusInput): TranslationStatus {
  if (
    input.officialPublicationStatus === "COMPLETED"
    && input.officialTotalChapters != null
    && input.latestMainChapter != null
    && input.latestMainChapter >= input.officialTotalChapters
  ) return "COMPLETED";

  const activityReference = input.lastMainChapterPublishedAt ?? input.relationshipCreatedAt;
  if (activityReference && new Date(activityReference) <= pausedCutoff(input.now)) return "PAUSED";
  return "ONGOING";
}

function resolveTranslationStatus(input: TranslationStatusInput) {
  const calculatedStatus = calculateTranslationStatus(input);
  return {
    calculatedStatus,
    status: input.override ?? calculatedStatus,
    overridden: input.override != null,
  };
}

function isMainChapter(chapter: { chapterNumber: number; chapterType?: string | null }) {
  if (chapter.chapterType) return chapter.chapterType === "MAIN" || chapter.chapterType === "ONESHOT";
  return Number.isInteger(chapter.chapterNumber) && chapter.chapterNumber > 0;
}

function mainChapterProgress(chapter: { chapterNumber: number; chapterType?: string | null }) {
  if (!isMainChapter(chapter)) return null;
  return chapter.chapterType === "ONESHOT" ? Math.max(chapter.chapterNumber, 1) : chapter.chapterNumber;
}

export { calculateTranslationStatus, isMainChapter, mainChapterProgress, resolveTranslationStatus, TRANSLATION_STATUSES };
export type { OfficialPublicationStatus, TranslationStatus, TranslationStatusInput };
