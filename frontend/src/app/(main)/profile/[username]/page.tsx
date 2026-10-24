"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import ImageUploadField from "@/components/ImageUploadField/page";
import { useToast } from "@/context/ToastContext";
import { useUser } from "@/context/UserContext";
import { useShopInventory } from "@/hooks/useShopInventory";
import type { AuthenticatedUser } from "@/hooks/useAuth";
import { graphqlRequest } from "@/lib/graphql";
import { profileSettingsSchema } from "@/lib/validation";
import { discardImage, uploadImage, type UploadedMedia } from "@/lib/upload";
import { SHOP_ITEMS } from "@/lib/otamart";
import styles from "./profile.module.css";

const SOCIAL_FIELDS = [
  ["site", "Site"], ["discord", "Discord"], ["telegram", "Telegram"], ["x", "X / Twitter"],
  ["instagram", "Instagram"], ["facebook", "Facebook"], ["youtube", "YouTube"], ["tiktok", "TikTok"], ["bluesky", "Bluesky"],
] as const;
const TRACKER_FIELDS = [
  ["myanimelist", "MyAnimeList"], ["anilist", "AniList"], ["animeplanet", "Anime-Planet"], ["anidb", "AniDB"],
] as const;
type SocialKey = (typeof SOCIAL_FIELDS)[number][0];
type TrackerKey = (typeof TRACKER_FIELDS)[number][0];
type UserSocialMedias = Partial<Record<SocialKey, string | null>>;
type UserTrackers = Partial<Record<TrackerKey, string | null>>;
type Profile = Omit<AuthenticatedUser, "email"> & {
  email?: string | null;
  socialMedias?: UserSocialMedias;
  trackers?: UserTrackers;
};
const FIELDS = "id name username email profilePicture accountType subscription { plan status autoRenew } preferences { showAdultContent } socialMedias { site discord telegram x instagram facebook youtube tiktok bluesky } trackers { myanimelist anilist animeplanet anidb }";

export default function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const router = useRouter();
  const { authenticatedUser, authToken, authLoading, updateAuthenticatedUser } = useUser();
  const { showToast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [media, setMedia] = useState<File | null>(null);
  const [showAdultContent, setShowAdultContent] = useState(false);
  const [socialMedias, setSocialMedias] = useState<UserSocialMedias>({});
  const [trackers, setTrackers] = useState<UserTrackers>({});
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const ownProfile = authenticatedUser?.username === username;
  const { inventory } = useShopInventory(profile?.id ?? authenticatedUser?.id ?? username, username);
  const equippedFrame = SHOP_ITEMS.find((item) => item.id === inventory.equipped.frame);
  const equippedFont = SHOP_ITEMS.find((item) => item.id === inventory.equipped.font);
  const selectedImageUrl = useMemo(() => media ? URL.createObjectURL(media) : null, [media]);

  useEffect(() => () => {
    if (selectedImageUrl) URL.revokeObjectURL(selectedImageUrl);
  }, [selectedImageUrl]);

  useEffect(() => {
    if (authLoading) return;
    if (!authenticatedUser || !authToken) {
      router.replace("/signin");
      return;
    }
    if (!ownProfile) {
      router.replace(`/member/${encodeURIComponent(username)}`);
      return;
    }

    let active = true;
    graphqlRequest<{ me: Profile }>(`query{me{${FIELDS}}}`, {}, authToken).then(({ me }) => {
      if (!active) return;
      setProfile(me);
      setName(me?.name ?? "");
      setEmail(me?.email ?? "");
      setShowAdultContent(me?.preferences.showAdultContent === true);
      setSocialMedias(me?.socialMedias ?? {});
      setTrackers(me?.trackers ?? {});
    }).catch((error: Error) => {
      if (active) setMessage(error.message);
    });
    return () => { active = false; };
  }, [username, authToken, authLoading, authenticatedUser, ownProfile, router]);

  if (authLoading || !profile) {
    return <main className={styles.page}><p>{message || "Carregando perfil…"}</p></main>;
  }

  async function save() {
    if (!profile) return;
    const normalizedSocialMedias = Object.fromEntries(SOCIAL_FIELDS.map(([key]) => [key, socialMedias[key] ?? ""])) as Record<SocialKey, string>;
    const normalizedTrackers = Object.fromEntries(TRACKER_FIELDS.map(([key]) => [key, trackers[key] ?? ""])) as Record<TrackerKey, string>;
    const validation = profileSettingsSchema.safeParse({ name, email, showAdultContent, socialMedias: normalizedSocialMedias, trackers: normalizedTrackers });
    if (!validation.success) {
      const validationMessage = validation.error.issues[0]?.message ?? "Confira os dados informados.";
      setMessage(validationMessage);
      showToast(validationMessage, "error");
      return;
    }
    setBusy(true);
    setMessage("");
    let uploaded: UploadedMedia | null = null;
    try {
      if (media) uploaded = await uploadImage(media, "USER_AVATAR");
      const { updateMyProfile } = await graphqlRequest<{ updateMyProfile: Profile }>(
        `mutation($data:UpdateProfileInput!){updateMyProfile(data:$data){${FIELDS}}}`,
        { data: { ...validation.data, ...(uploaded ? { profilePictureID: uploaded.id } : {}) } },
        authToken,
      );
      setProfile(updateMyProfile);
      updateAuthenticatedUser({ ...updateMyProfile, email: updateMyProfile.email ?? email });
      setName(updateMyProfile.name);
      setEmail(updateMyProfile.email ?? email);
      setShowAdultContent(updateMyProfile.preferences.showAdultContent);
      setSocialMedias(updateMyProfile.socialMedias ?? {});
      setTrackers(updateMyProfile.trackers ?? {});
      setMedia(null);
      setMessage("");
      showToast("Perfil atualizado.", "success");
      router.refresh();
    } catch (error) {
      if (uploaded) await discardImage(uploaded.id).catch(() => undefined);
      const errorText = error instanceof Error ? error.message : "Falha ao salvar.";
      setMessage(errorText);
      showToast(errorText, "error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <Image data-frame={equippedFrame?.className} src={selectedImageUrl || profile.profilePicture || "/image-placeholder.svg"} alt="Foto de perfil" width={112} height={112} unoptimized />
          <div>
            <h1 data-font={equippedFont?.className}>{profile.name}</h1>
            <p>@{profile.username}</p>
            <span>{profile.subscription.plan}</span>
          </div>
        </div>
        {ownProfile && (
          <form className={styles.form} autoComplete="off" onSubmit={(event) => { event.preventDefault(); void save(); }}>
            <ImageUploadField label="Foto de perfil" purpose="USER_AVATAR" shape="circle" currentUrl={profile.profilePicture} value={media} onChange={setMedia} disabled={busy} showPreview={false} />
            <label>Nome<input value={name} maxLength={120} onChange={(event) => setName(event.target.value)} /></label>
            <label>E-mail<input type="email" value={email} maxLength={254} autoComplete="off" required disabled={busy} onChange={(event) => setEmail(event.target.value)} /></label>
            <label className={styles.toggle}><input type="checkbox" checked={showAdultContent} onChange={(event) => setShowAdultContent(event.target.checked)} /><span><strong>Exibir conteúdo adulto (+18)</strong><small>Oculto por padrão. Esta preferência fica salva na sua conta.</small></span></label>
            <fieldset className={styles.linkFields}>
              <legend>Links públicos</legend>
              <div>{SOCIAL_FIELDS.map(([key, label]) => <label key={key}>{label}<input type="url" value={socialMedias[key] ?? ""} placeholder="https://" disabled={busy} onChange={(event) => setSocialMedias((current) => ({ ...current, [key]: event.target.value }))} /></label>)}</div>
            </fieldset>
            <fieldset className={styles.linkFields}>
              <legend>Trackers</legend>
              <div>{TRACKER_FIELDS.map(([key, label]) => <label key={key}>{label}<input type="url" value={trackers[key] ?? ""} placeholder="https://" disabled={busy} onChange={(event) => setTrackers((current) => ({ ...current, [key]: event.target.value }))} /></label>)}</div>
            </fieldset>
            <button type="submit" disabled={busy || name.trim().length < 2}>{busy ? "Salvando…" : "Salvar alterações"}</button>
            {message && <p>{message}</p>}
          </form>
        )}
      </section>
    </main>
  );
}
