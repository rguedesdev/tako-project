export const MEDIA_PURPOSES = ["USER_AVATAR", "GROUP_IMAGE", "MANGA_COVER"] as const;
export type MediaPurpose = (typeof MEDIA_PURPOSES)[number];
export const IMAGE_LIMITS = {
  USER_AVATAR: { maxBytes: 5 * 1024 * 1024, maxWidth: 4096, maxHeight: 4096, output: 1200 },
  GROUP_IMAGE: { maxBytes: 5 * 1024 * 1024, maxWidth: 4096, maxHeight: 4096, output: 1600 },
  MANGA_COVER: { maxBytes: 8 * 1024 * 1024, maxWidth: 6000, maxHeight: 8000, output: 2400 },
} as const;
export const ALLOWED_IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
export const ALLOWED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
export const MAX_UPLOAD_BYTES = 2 * 1024 * 1024;
export const orphanMediaMaxAgeMs = () => Number(process.env.MEDIA_ORPHAN_MAX_AGE_HOURS ?? 168) * 3600000;
