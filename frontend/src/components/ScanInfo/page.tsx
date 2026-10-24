"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiHash, BiLike } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineGroups, MdOutlineGTranslate, MdOutlinePeopleOutline } from "react-icons/md";
import { RiBlueskyLine, RiDiscordLine, RiTelegram2Line, RiVipCrownLine } from "react-icons/ri";

import type { Group } from "@/lib/catalog";
import { MediaImage } from "@/components/MediaImage/page";
import { useUser } from "@/context/UserContext";
import { graphqlRequest } from "@/lib/graphql";
import styles from "./scaninfo.module.css";

const socialLabels: Record<string, string> = {
  site: "Site", discord: "Discord", telegram: "Telegram", x: "Twitter/X",
  instagram: "Instagram", facebook: "Facebook", youtube: "YouTube", tiktok: "TikTok", bluesky: "Bluesky",
  orkut: "Orkkut", email: "Email",
};

const teamRoleLabels: Record<string, string> = {
  TRANSLATOR: "Tradutor",
  REVIEWER: "Revisor",
  EDITOR: "Editor",
  UPLOADER: "Uploader",
  REDRAWER: "Redrawer",
  CLEANER: "Cleaner",
  RAW_PROVIDER: "Raw Provider",
};

function SocialIcon({ name }: { name: string }) {
  if (name === "discord") return <RiDiscordLine />;
  if (name === "telegram") return <RiTelegram2Line />;
  if (name === "x") return <FaXTwitter />;
  if (name === "instagram") return <FaInstagram />;
  if (name === "facebook") return <FaFacebook />;
  if (name === "youtube") return <FaYoutube />;
  if (name === "tiktok") return <FaTiktok />;
  if (name === "bluesky") return <RiBlueskyLine />;
  if (name === "email") return <HiOutlineMail />;
  return <IoIosGlobe />;
}

function isSafeLink(entry: [string, string | null | undefined]): entry is [string, string] {
  const [key, value] = entry;
  if (!value?.trim()) return false;
  if (key === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}

function ScanInfo({ scan }: { scan: Group }) {
  const { authenticatedUser, authToken } = useUser();
  const router = useRouter();
  const [followed, setFollowed] = useState(scan.followedByMe === true);
  const [followers, setFollowers] = useState(scan.stats.followers);
  const [followBusy, setFollowBusy] = useState(false);
  const [followError, setFollowError] = useState("");
  const [claimOpen, setClaimOpen] = useState(false);
  const [claimBusy, setClaimBusy] = useState(false);
  const [claimError, setClaimError] = useState("");
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const [claimForm, setClaimForm] = useState({
    contactEmail: "",
    site: "",
    instagram: "",
    discord: "",
    telegram: "",
    x: "",
    proof: "",
  });
  const links = Object.entries(scan.socialMedias ?? {}).filter(isSafeLink);
  const displayMembers = [
    ...(scan.owner ? [{
      id: `owner:${scan.owner.userID}`,
      username: scan.owner.username,
      name: scan.owner.name,
      profilePicture: scan.owner.profilePicture,
      role: "Administrador",
      isTranslator: false,
      isOwner: true,
    }] : []),
    ...(scan.teamMembers ?? []).map((member) => ({
      id: member.id,
      username: member.username,
      name: member.name,
      profilePicture: member.profilePicture,
      role: teamRoleLabels[member.role] ?? member.role,
      isTranslator: member.role === "TRANSLATOR",
      isOwner: false,
    })),
  ];

  useEffect(() => {
    if (!claimOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !claimBusy) setClaimOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [claimOpen, claimBusy]);

  async function toggleFollow() {
    if (!authToken || followBusy) return;
    setFollowBusy(true);
    setFollowError("");
    try {
      const { toggleGroupFollow } = await graphqlRequest<{
        toggleGroupFollow: { followed: boolean; followers: number };
      }>(
        `mutation ToggleGroupFollow($groupID: ID!) {
          toggleGroupFollow(groupID: $groupID) { followed followers }
        }`,
        { groupID: scan.id },
        authToken,
      );
      setFollowed(toggleGroupFollow.followed);
      setFollowers(toggleGroupFollow.followers);
    } catch (error) {
      setFollowError(error instanceof Error ? error.message : "Não foi possível atualizar o acompanhamento.");
    } finally {
      setFollowBusy(false);
    }
  }

  async function submitClaim(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!authToken || claimBusy) return;
    setClaimBusy(true);
    setClaimError("");
    try {
      await graphqlRequest<{ createGroupClaim: { id: string } }>(
        `mutation CreateGroupClaim($data: CreateGroupClaimInput!) {
          createGroupClaim(data: $data) { id }
        }`,
        {
          data: {
            groupID: scan.id,
            contactEmail: claimForm.contactEmail,
            socialMedias: {
              site: claimForm.site,
              instagram: claimForm.instagram,
              discord: claimForm.discord,
              telegram: claimForm.telegram,
              x: claimForm.x,
            },
            proof: claimForm.proof,
          },
        },
        authToken,
      );
      setClaimSubmitted(true);
      setClaimOpen(false);
      router.refresh();
    } catch (error) {
      setClaimError(error instanceof Error ? error.message : "Não foi possível enviar sua reivindicação.");
    } finally {
      setClaimBusy(false);
    }
  }

  return (
    <section className={styles.scanInfoContainer}>
      <div>
        <div className={styles.scanWrapper}>
          <MediaImage className={styles.scanPicture} source={scan.groupImage} fallback="/group-placeholder.svg" alt={`Imagem da ${scan.name}`} />
        </div>
        <div className={styles.btnWrapper}>
          <button className={`${styles.btnFollow} ${followed ? styles.following : ""}`} disabled={!authenticatedUser || followBusy} onClick={() => void toggleFollow()} aria-pressed={followed} aria-label={followed ? "Deixar de seguir a scan" : authenticatedUser ? "Seguir scan" : "Entre para seguir"}>
            {followBusy ? <span>Atualizando…</span> : followed ? <><span className={styles.followingLabel}>Seguindo</span><span className={styles.unfollowLabel}>Deixar de seguir</span></> : <span>{authenticatedUser ? "Seguir scan" : "Entre para seguir"}</span>}
          </button>
          {scan.supportButtonVisible && <button className={`${styles.btnAction} ${styles.btnDonate}`} type="button">Apoiar Scan</button>}
          {scan.claimableByMe && !claimSubmitted && <button className={`${styles.btnAction} ${styles.btnClaim}`} type="button" onClick={() => { setClaimError(""); setClaimForm((form) => ({ ...form, contactEmail: form.contactEmail || authenticatedUser?.email || "" })); setClaimOpen(true); }}>Reivindicar grupo</button>}
          {(scan.claimPendingByMe || claimSubmitted) && <p className={styles.claimPending} role="status">Sua solicitação de reivindicação foi enviada para análise.</p>}
          {followError && <p className={styles.followError} role="status">{followError}</p>}
        </div>
      </div>
      <div className={styles.scanInfo}>
        <h1 className={styles.scanNameWrapper}><span className={styles.scanName}>{scan.name}</span></h1>
        <p className={styles.sinopse}>{scan.description}</p>
        <div className={styles.statsContainer}>
          <h3 className={styles.statsTitle}>Estatísticas</h3>
          <div className={styles.stats}>
            <div className={styles.stat}><span className={styles.statIcon}><MdOutlinePeopleOutline /></span><span className={styles.statValue}>{followers.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>{followers <= 1 ? "Seguidor" : "Seguidores"}</span></div>
            <div className={styles.stat}><span className={styles.statIcon}><HiOutlineBookOpen /></span><span className={styles.statValue}>{scan.stats.mangas.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>{scan.stats.mangas === 1 ? "Manga" : "Mangas"}</span></div>
            <div className={styles.stat}><span className={styles.statIcon}><BiHash /></span><span className={styles.statValue}>{scan.stats.chapters.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>{scan.stats.chapters === 1 ? "Capítulo" : "Capítulos"}</span></div>
            <div className={styles.stat}><span className={styles.statIcon}><FaArrowTrendUp /></span><span className={styles.statValue}>{scan.stats.views.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>{scan.stats.views === 1 ? "Visualização" : "Visualizações"}</span></div>
            <div className={styles.stat}><span className={styles.statIcon}><BiLike /></span><span className={styles.statValue}>{scan.stats.likes.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>{scan.stats.likes === 1 ? "Like" : "Likes"}</span></div>
          </div>
        </div>
        {links.length > 0 && (
          <div className={styles.mediasContainer}>
            <h3 className={styles.mediasTitle}>Links</h3>
            <div className={styles.medias}>
              {links.map(([key, value]) => (
                <a className={styles.media} href={key === "email" ? `mailto:${value}` : value} key={key} target={key === "email" ? undefined : "_blank"} rel={key === "email" ? undefined : "noopener noreferrer"}>
                  <SocialIcon name={key} /><span>{socialLabels[key] ?? key}</span>
                </a>
              ))}
            </div>
          </div>
        )}
        {displayMembers.length > 0 ? (
          <div className={styles.teamContainer}>
            <h3 className={styles.teamTitle}><MdOutlineGroups aria-hidden="true" /> Equipe da scan</h3>
            <div className={styles.teamMembers}>
              {displayMembers.map((member) => (
                <Link className={styles.teamMember} href={`/member/${encodeURIComponent(member.username)}`} key={member.id}>
                  {member.profilePicture ? (
                    <MediaImage className={styles.teamAvatar} source={member.profilePicture} fallback="/image-placeholder.svg" alt="" />
                  ) : (
                    <span className={styles.teamAvatarFallback} aria-hidden="true">{member.username.slice(0, 1).toLocaleUpperCase("pt-BR")}</span>
                  )}
                  <span className={styles.teamIdentity}>
                    <strong>@{member.username}{member.isOwner && <RiVipCrownLine aria-hidden="true" />}{member.isTranslator && <MdOutlineGTranslate aria-hidden="true" />}</strong>
                    <span className={styles.teamRole}>{member.role}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {claimOpen && (
        <div className={styles.claimBackdrop} onMouseDown={(event) => { if (event.target === event.currentTarget && !claimBusy) setClaimOpen(false); }}>
          <section className={styles.claimModal} role="dialog" aria-modal="true" aria-labelledby="claim-title" aria-describedby="claim-description">
            <button className={styles.claimClose} type="button" aria-label="Fechar" disabled={claimBusy} onClick={() => setClaimOpen(false)}>×</button>
            <h2 id="claim-title">Reivindicar {scan.name}</h2>
            <p id="claim-description">Envie dados para comprovar que você representa esta scan. Um administrador vai analisar a solicitação.</p>
            <form className={styles.claimForm} onSubmit={(event) => void submitClaim(event)}>
              <label>E-mail de contato<input type="email" required maxLength={254} autoComplete="email" value={claimForm.contactEmail} onChange={(event) => setClaimForm({ ...claimForm, contactEmail: event.target.value })} /></label>
              <div className={styles.claimSocials}>
                <label>Site<input type="url" placeholder="https://" maxLength={500} value={claimForm.site} onChange={(event) => setClaimForm({ ...claimForm, site: event.target.value })} /></label>
                <label>Instagram<input type="url" placeholder="https://instagram.com/..." maxLength={500} value={claimForm.instagram} onChange={(event) => setClaimForm({ ...claimForm, instagram: event.target.value })} /></label>
                <label>Discord<input type="url" placeholder="https://discord.gg/..." maxLength={500} value={claimForm.discord} onChange={(event) => setClaimForm({ ...claimForm, discord: event.target.value })} /></label>
                <label>Telegram<input type="url" placeholder="https://t.me/..." maxLength={500} value={claimForm.telegram} onChange={(event) => setClaimForm({ ...claimForm, telegram: event.target.value })} /></label>
                <label>X / Twitter<input type="url" placeholder="https://x.com/..." maxLength={500} value={claimForm.x} onChange={(event) => setClaimForm({ ...claimForm, x: event.target.value })} /></label>
              </div>
              <label>Provas de vínculo<textarea required minLength={30} maxLength={4000} rows={5} placeholder="Conte como você participa da scan e inclua informações que ajudem a confirmar seu vínculo." value={claimForm.proof} onChange={(event) => setClaimForm({ ...claimForm, proof: event.target.value })} /></label>
              {claimError && <p className={styles.claimError} role="alert">{claimError}</p>}
              <div className={styles.claimActions}>
                <button type="button" disabled={claimBusy} onClick={() => setClaimOpen(false)}>Cancelar</button>
                <button type="submit" disabled={claimBusy}>{claimBusy ? "Enviando…" : "Enviar para análise"}</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </section>
  );
}

export { ScanInfo };
