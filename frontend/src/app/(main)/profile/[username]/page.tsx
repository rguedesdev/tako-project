"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import ImageUploadField from "@/components/ImageUploadField/page";
import { useUser } from "@/context/UserContext";
import type { AuthenticatedUser } from "@/hooks/useAuth";
import { graphqlRequest } from "@/lib/graphql";
import { discardImage, uploadImage, type UploadedMedia } from "@/lib/upload";
import styles from "./profile.module.css";

type Profile = Omit<AuthenticatedUser, "email"> & { email?: string | null };
const FIELDS = "id name username email profilePicture accountType subscription { plan status autoRenew } preferences { showAdultContent }";

export default function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const router = useRouter();
  const { authenticatedUser, authToken, authLoading, updateAuthenticatedUser } = useUser();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [media, setMedia] = useState<File | null>(null);
  const [showAdultContent, setShowAdultContent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const ownProfile = authenticatedUser?.username === username;
  const selectedImageUrl = useMemo(() => media ? URL.createObjectURL(media) : null, [media]);

  useEffect(() => () => {
    if (selectedImageUrl) URL.revokeObjectURL(selectedImageUrl);
  }, [selectedImageUrl]);

  useEffect(() => {
    let active = true;
    const request = ownProfile && authToken
      ? graphqlRequest<{ me: Profile }>(`query{me{${FIELDS}}}`, {}, authToken).then(({ me }) => me)
      : graphqlRequest<{ user: Profile | null }>(
          `query($username:String!){user(username:$username){${FIELDS}}}`,
          { username },
          authToken,
        ).then(({ user }) => user);

    request.then((user) => {
      if (!active) return;
      setProfile(user);
      setName(user?.name ?? "");
      setEmail(user?.email ?? "");
      setShowAdultContent(user?.preferences.showAdultContent === true);
    }).catch((error: Error) => {
      if (active) setMessage(error.message);
    });
    return () => { active = false; };
  }, [username, authToken, ownProfile]);

  if (authLoading || !profile) {
    return <main className={styles.page}><p>{message || "Carregando perfil…"}</p></main>;
  }

  async function save() {
    if (!profile) return;
    setBusy(true);
    setMessage("");
    let uploaded: UploadedMedia | null = null;
    try {
      if (media) uploaded = await uploadImage(media, "USER_AVATAR");
      const { updateMyProfile } = await graphqlRequest<{ updateMyProfile: AuthenticatedUser }>(
        `mutation($data:UpdateProfileInput!){updateMyProfile(data:$data){${FIELDS}}}`,
        { data: { name, email, showAdultContent, ...(uploaded ? { profilePictureID: uploaded.id } : {}) } },
        authToken,
      );
      setProfile(updateMyProfile);
      updateAuthenticatedUser(updateMyProfile);
      setName(updateMyProfile.name);
      setEmail(updateMyProfile.email);
      setShowAdultContent(updateMyProfile.preferences.showAdultContent);
      setMedia(null);
      setMessage("Perfil atualizado.");
      router.refresh();
    } catch (error) {
      if (uploaded) await discardImage(uploaded.id).catch(() => undefined);
      setMessage(error instanceof Error ? error.message : "Falha ao salvar.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <Image src={selectedImageUrl || profile.profilePicture || "/image-placeholder.svg"} alt="Foto de perfil" width={112} height={112} unoptimized />
          <div><h1>{profile.name}</h1><p>@{profile.username}</p><span>{profile.subscription.plan}</span></div>
        </div>
        {ownProfile && (
          <form className={styles.form} onSubmit={(event) => { event.preventDefault(); void save(); }}>
            <ImageUploadField label="Foto de perfil" purpose="USER_AVATAR" shape="circle" currentUrl={profile.profilePicture} value={media} onChange={setMedia} disabled={busy} showPreview={false} />
            <label>Nome<input value={name} maxLength={120} onChange={(event) => setName(event.target.value)} /></label>
            <label>E-mail<input type="email" value={email} maxLength={254} autoComplete="email" required disabled={busy} onChange={(event) => setEmail(event.target.value)} /></label>
            <label className={styles.toggle}><input type="checkbox" checked={showAdultContent} onChange={(event) => setShowAdultContent(event.target.checked)} /><span><strong>Exibir conteúdo adulto (+18)</strong><small>Oculto por padrão. Esta preferência fica salva na sua conta.</small></span></label>
            <button type="submit" disabled={busy || name.trim().length < 2}>{busy ? "Salvando…" : "Salvar alterações"}</button>
            {message && <p>{message}</p>}
          </form>
        )}
      </section>
    </main>
  );
}
