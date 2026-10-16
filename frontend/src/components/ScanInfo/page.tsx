"use client";

import { useState } from "react";
import { BiHash, BiLike } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { RiBlueskyLine, RiDiscordLine, RiTelegram2Line } from "react-icons/ri";

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
  const [followed, setFollowed] = useState(scan.followedByMe === true);
  const [followers, setFollowers] = useState(scan.stats.followers);
  const [followBusy, setFollowBusy] = useState(false);
  const [followError, setFollowError] = useState("");
  const links = Object.entries(scan.socialMedias ?? {}).filter(isSafeLink);

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
          {followError && <p className={styles.followError} role="status">{followError}</p>}
        </div>
      </div>
      <div className={styles.scanInfo}>
        <h1 className={styles.scanNameWrapper}><span className={styles.scanName}>{scan.name}</span><span title={scan.country}>{scan.countryFlag}</span></h1>
        <p className={styles.sinopse}>{scan.description}</p>
        <div className={styles.statsContainer}>
          <h3 className={styles.statsTitle}>Estatísticas</h3>
          <div className={styles.stats}>
            <div className={styles.stat}><span className={styles.statIcon}><MdOutlinePeopleOutline /></span><span className={styles.statValue}>{followers.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>{followers === 1 ? "Seguidor" : "Seguidores"}</span></div>
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
      </div>
    </section>
  );
}

export { ScanInfo };
