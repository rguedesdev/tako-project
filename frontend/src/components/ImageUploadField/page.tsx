"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useState } from "react";

import type { MediaPurpose } from "@/lib/upload";
import styles from "./upload.module.css";

interface ImageUploadFieldProps {
  label: string;
  purpose: MediaPurpose;
  currentUrl?: string | null;
  shape?: "circle" | "square" | "cover";
  value: File | null;
  onChange: (file: File | null) => void;
  disabled?: boolean;
  showPreview?: boolean;
}

const limits: Record<MediaPurpose, number> = {
  USER_AVATAR: 5 * 1024 * 1024,
  GROUP_IMAGE: 5 * 1024 * 1024,
  MANGA_COVER: 8 * 1024 * 1024,
};

export default function ImageUploadField({ label, purpose, currentUrl, shape = "square", value, onChange, disabled, showPreview = true }: ImageUploadFieldProps) {
  const inputID = useId();
  const [error, setError] = useState("");
  const fallback = purpose === "GROUP_IMAGE" ? "/group-placeholder.svg" : "/image-placeholder.svg";
  const previewUrl = useMemo(() => value ? URL.createObjectURL(value) : null, [value]);

  useEffect(() => () => { if (previewUrl) URL.revokeObjectURL(previewUrl); }, [previewUrl]);

  function select(file?: File) {
    if (!file) return;
    setError("");
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Use uma imagem JPG, PNG ou WebP.");
      return;
    }
    if (file.size > limits[purpose]) {
      setError(`A imagem deve ter no máximo ${limits[purpose] / 1024 / 1024} MB.`);
      return;
    }
    onChange(file);
  }

  return (
    <div className={styles.field}>
      <span>{label}</span>
      {shape === "cover" || shape === "circle" || shape === "square" ? (
        <label className={`${styles.coverPicker} ${shape === "circle" ? styles.circlePicker : shape === "square" ? styles.squarePicker : ""}`} htmlFor={inputID} aria-disabled={disabled}>
          <input id={inputID} type="file" accept="image/jpeg,image/png,image/webp" disabled={disabled} onChange={(event) => select(event.target.files?.[0])} />
          {(previewUrl || currentUrl) ? <Image className={styles.coverPickerImage} src={previewUrl || currentUrl!} alt={shape === "circle" ? "Prévia da foto de perfil" : shape === "square" ? "Prévia da imagem" : "Prévia da capa"} width={shape === "circle" ? 112 : 144} height={shape === "cover" ? 216 : 144} unoptimized /> : <span className={styles.coverPickerEmpty}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m20.5 15-5-5L5 20.5"/></svg><strong>{shape === "circle" ? "Selecionar foto" : shape === "square" ? "Selecionar imagem" : "Selecionar capa"}</strong><small>JPG, PNG ou WebP</small></span>}
          {(previewUrl || currentUrl) && <span className={styles.coverPickerAction}>{shape === "circle" ? "Trocar foto" : shape === "square" ? "Trocar imagem" : "Trocar capa"}</span>}
        </label>
      ) : <div className={styles.row}>
        {showPreview && <Image className={`${styles.preview} ${styles[shape]}`} src={previewUrl || currentUrl || fallback} alt="Prévia da imagem" width={shape === "cover" ? 112 : 96} height={shape === "cover" ? 168 : 96} unoptimized />}
        <div>
          <label className={styles.button} htmlFor={inputID} aria-disabled={disabled}>{value ? "Trocar seleção" : "Selecionar imagem"}</label>
          <input id={inputID} type="file" accept="image/jpeg,image/png,image/webp" disabled={disabled} onChange={(event) => select(event.target.files?.[0])} />
          <small>A seleção gera apenas uma prévia local. O upload ocorre ao salvar.</small>
        </div>
      </div>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
