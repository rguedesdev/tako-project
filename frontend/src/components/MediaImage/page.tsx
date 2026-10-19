"use client";

import type { ImgHTMLAttributes } from "react";
import { useMemo, useState } from "react";

type MediaImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  source?: string | null;
  backupSource?: string | null;
  fallback?: string;
};

function normalizeCid(value: string) {
  return value.replace(/^ipfs:\/\//i, "").replace(/^\/?ipfs\//i, "");
}

export function buildMediaCandidates(source?: string | null, fallback = "/image-placeholder.svg", backupSource?: string | null) {
  if (!source) return [...new Set([backupSource, fallback].filter((candidate): candidate is string => Boolean(candidate)))];
  if (/^(https?:|data:|blob:|\/)/i.test(source)) return [...new Set([source, backupSource, fallback].filter((candidate): candidate is string => Boolean(candidate)))];

  const cid = normalizeCid(source);
  const configuredGateway = process.env.NEXT_PUBLIC_IPFS_GATEWAY?.replace(/\/?$/, "/");
  const backendOrigin = (process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql")
    .replace(/\/graphql\/?$/, "");

  return [...new Set([
    `${backendOrigin}/ipfs/${cid}`,
    configuredGateway ? `${configuredGateway}${cid}` : null,
    `https://dweb.link/ipfs/${cid}`,
    `https://ipfs.io/ipfs/${cid}`,
    backupSource,
    fallback,
  ].filter((candidate): candidate is string => Boolean(candidate)))];
}

function MediaImage({ source, backupSource, fallback, alt, onError, onLoad, loading = "lazy", ...props }: MediaImageProps) {
  const candidates = useMemo(() => buildMediaCandidates(source, fallback, backupSource), [source, fallback, backupSource]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={candidates[Math.min(candidateIndex, candidates.length - 1)]}
      alt={alt ?? ""}
      loading={loading}
      decoding="async"
      data-loaded={loaded ? "true" : "false"}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      onError={(event) => {
        onError?.(event);
        setCandidateIndex((index) => Math.min(index + 1, candidates.length - 1));
      }}
    />
  );
}

export { MediaImage };
