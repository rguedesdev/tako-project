"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChat, BiHash, BiLike } from "react-icons/bi";
import { FiUserCheck, FiUserPlus, FiUsers } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosGlobe } from "react-icons/io";
import { RiBlueskyLine, RiDiscordLine, RiTelegram2Line } from "react-icons/ri";

import { useUser } from "@/context/UserContext";
import { useShopInventory } from "@/hooks/useShopInventory";
import { graphqlRequest } from "@/lib/graphql";
import { SHOP_ITEMS } from "@/lib/otamart";
import { MediaImage } from "@/components/MediaImage/page";
import styles from "./member.module.css";

type PublicProfile = {
  id: string;
  name: string;
  username: string;
  profilePicture?: string | null;
  accountType: "MEMBER" | "HADES";
  subscription: { plan: "FREE" | "PREMIUM" | "VIP" };
  profileStats: { mangasRead: number; chaptersRead: number; comments: number; likes: number; followers: number };
  followedByMe: boolean;
  recentReadMangas: { id: string; title: string; mangaCover?: string | null; lastReadAt: string }[];
  socialMedias?: Record<string, string | null>;
  trackers?: Record<string, string | null>;
};

const SOCIAL_LABELS: Record<string, string> = {
  site: "Site", discord: "Discord", telegram: "Telegram", x: "X / Twitter",
  instagram: "Instagram", facebook: "Facebook", youtube: "YouTube", tiktok: "TikTok", bluesky: "Bluesky",
};
const TRACKER_LABELS: Record<string, string> = {
  myanimelist: "MyAnimeList", anilist: "AniList", animeplanet: "Anime-Planet", anidb: "AniDB",
};
const TRACKER_DOMAINS: Record<string, string[]> = {
  myanimelist: ["myanimelist.net"], anilist: ["anilist.co"],
  animeplanet: ["anime-planet.com"], anidb: ["anidb.net"],
};
const DEMO_SOCIAL_LINKS: [string, string][] = [
  ["site", "https://example.com/reader"],
  ["instagram", "https://instagram.com/reader"],
  ["discord", "https://discord.com"],
];
const DEMO_TRACKER_LINKS: [string, string][] = [
  ["myanimelist", "https://myanimelist.net"],
  ["anilist", "https://anilist.co"],
  ["animeplanet", "https://www.anime-planet.com"],
  ["anidb", "https://anidb.net"],
];
const DEMO_RECENT_MANGAS = [
  { id: "", title: "Frieren e a Jornada para o Além", mangaCover: null, lastReadAt: "2026-10-16T12:00:00.000Z" },
  { id: "", title: "Chainsaw Man", mangaCover: null, lastReadAt: "2026-10-14T12:00:00.000Z" },
  { id: "", title: "Vagabond", mangaCover: null, lastReadAt: "2026-10-12T12:00:00.000Z" },
  { id: "", title: "Dandadan", mangaCover: null, lastReadAt: "2026-10-10T12:00:00.000Z" },
  { id: "", title: "The Apothecary Diaries", mangaCover: null, lastReadAt: "2026-10-08T12:00:00.000Z" },
  { id: "", title: "One Piece", mangaCover: null, lastReadAt: "2026-10-06T12:00:00.000Z" },
  { id: "", title: "Blue Lock", mangaCover: null, lastReadAt: "2026-10-04T12:00:00.000Z" },
  { id: "", title: "Jujutsu Kaisen", mangaCover: null, lastReadAt: "2026-10-02T12:00:00.000Z" },
  { id: "", title: "Berserk", mangaCover: null, lastReadAt: "2026-09-30T12:00:00.000Z" },
  { id: "", title: "Spy x Family", mangaCover: null, lastReadAt: "2026-09-28T12:00:00.000Z" },
  { id: "", title: "Kingdom", mangaCover: null, lastReadAt: "2026-09-26T12:00:00.000Z" },
  { id: "", title: "Vinland Saga", mangaCover: null, lastReadAt: "2026-09-24T12:00:00.000Z" },
  { id: "", title: "Haikyuu!!", mangaCover: null, lastReadAt: "2026-09-22T12:00:00.000Z" },
  { id: "", title: "Mob Psycho 100", mangaCover: null, lastReadAt: "2026-09-20T12:00:00.000Z" },
  { id: "", title: "Fullmetal Alchemist", mangaCover: null, lastReadAt: "2026-09-18T12:00:00.000Z" },
  { id: "", title: "Dungeon Meshi", mangaCover: null, lastReadAt: "2026-09-16T12:00:00.000Z" },
  { id: "", title: "Sakamoto Days", mangaCover: null, lastReadAt: "2026-09-14T12:00:00.000Z" },
  { id: "", title: "Akane-banashi", mangaCover: null, lastReadAt: "2026-09-12T12:00:00.000Z" },
  { id: "", title: "Oshi no Ko", mangaCover: null, lastReadAt: "2026-09-10T12:00:00.000Z" },
  { id: "", title: "Dorohedoro", mangaCover: null, lastReadAt: "2026-09-08T12:00:00.000Z" },
  { id: "", title: "Yotsuba&!", mangaCover: null, lastReadAt: "2026-09-06T12:00:00.000Z" },
  { id: "", title: "The Promised Neverland", mangaCover: null, lastReadAt: "2026-09-04T12:00:00.000Z" },
  { id: "", title: "Kagurabachi", mangaCover: null, lastReadAt: "2026-09-02T12:00:00.000Z" },
  { id: "", title: "20th Century Boys", mangaCover: null, lastReadAt: "2026-08-31T12:00:00.000Z" },
  { id: "", title: "Real", mangaCover: null, lastReadAt: "2026-08-29T12:00:00.000Z" },
  { id: "", title: "Pluto", mangaCover: null, lastReadAt: "2026-08-27T12:00:00.000Z" },
  { id: "", title: "Nana", mangaCover: null, lastReadAt: "2026-08-25T12:00:00.000Z" },
  { id: "", title: "JoJo's Bizarre Adventure", mangaCover: null, lastReadAt: "2026-08-23T12:00:00.000Z" },
  { id: "", title: "Slam Dunk", mangaCover: null, lastReadAt: "2026-08-21T12:00:00.000Z" },
  { id: "", title: "Attack on Titan", mangaCover: null, lastReadAt: "2026-08-19T12:00:00.000Z" },
  { id: "", title: "Death Note", mangaCover: null, lastReadAt: "2026-08-17T12:00:00.000Z" },
  { id: "", title: "Hunter x Hunter", mangaCover: null, lastReadAt: "2026-08-15T12:00:00.000Z" },
  { id: "", title: "Naruto", mangaCover: null, lastReadAt: "2026-08-13T12:00:00.000Z" },
  { id: "", title: "Dragon Ball", mangaCover: null, lastReadAt: "2026-08-11T12:00:00.000Z" },
  { id: "", title: "Demon Slayer", mangaCover: null, lastReadAt: "2026-08-09T12:00:00.000Z" },
  { id: "", title: "Tokyo Ghoul", mangaCover: null, lastReadAt: "2026-08-07T12:00:00.000Z" },
  { id: "", title: "Black Clover", mangaCover: null, lastReadAt: "2026-08-05T12:00:00.000Z" },
  { id: "", title: "Dr. Stone", mangaCover: null, lastReadAt: "2026-08-03T12:00:00.000Z" },
  { id: "", title: "Monster", mangaCover: null, lastReadAt: "2026-08-01T12:00:00.000Z" },
  { id: "", title: "The Climber", mangaCover: null, lastReadAt: "2026-07-30T12:00:00.000Z" },
  { id: "", title: "Goodnight Punpun", mangaCover: null, lastReadAt: "2026-07-28T12:00:00.000Z" },
  { id: "", title: "Kaiju No. 8", mangaCover: null, lastReadAt: "2026-07-26T12:00:00.000Z" },
  { id: "", title: "The Boxer", mangaCover: null, lastReadAt: "2026-07-24T12:00:00.000Z" },
  { id: "", title: "Fire Punch", mangaCover: null, lastReadAt: "2026-07-22T12:00:00.000Z" },
  { id: "", title: "Made in Abyss", mangaCover: null, lastReadAt: "2026-07-20T12:00:00.000Z" },
  { id: "", title: "Hajime no Ippo", mangaCover: null, lastReadAt: "2026-07-18T12:00:00.000Z" },
  { id: "", title: "Yona of the Dawn", mangaCover: null, lastReadAt: "2026-07-16T12:00:00.000Z" },
  { id: "", title: "Skip and Loafer", mangaCover: null, lastReadAt: "2026-07-14T12:00:00.000Z" },
  { id: "", title: "Witch Hat Atelier", mangaCover: null, lastReadAt: "2026-07-12T12:00:00.000Z" },
  { id: "", title: "Golden Kamuy", mangaCover: null, lastReadAt: "2026-07-10T12:00:00.000Z" },
  { id: "", title: "The Fable", mangaCover: null, lastReadAt: "2026-07-08T12:00:00.000Z" },
  { id: "", title: "Land of the Lustrous", mangaCover: null, lastReadAt: "2026-07-06T12:00:00.000Z" },
  { id: "", title: "Blue Period", mangaCover: null, lastReadAt: "2026-07-04T12:00:00.000Z" },
  { id: "", title: "A Bride's Story", mangaCover: null, lastReadAt: "2026-07-02T12:00:00.000Z" },
  { id: "", title: "The Ancient Magus' Bride", mangaCover: null, lastReadAt: "2026-06-30T12:00:00.000Z" },
];

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

function safeProfileUrl(value?: string | null) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}

export default function MemberPage() {
  const { username } = useParams<{ username: string }>();
  const { authToken, authenticatedUser } = useUser();
  const [profile, setProfile] = useState<PublicProfile | null>(null);
  const { inventory } = useShopInventory(profile?.id ?? authenticatedUser?.id ?? username, username);
  const equippedFrame = SHOP_ITEMS.find((item) => item.id === inventory.equipped.frame);
  const equippedFont = SHOP_ITEMS.find((item) => item.id === inventory.equipped.font);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [followed, setFollowed] = useState(false);
  const [followers, setFollowers] = useState(0);
  const [followLoading, setFollowLoading] = useState(false);
  const [followError, setFollowError] = useState("");
  const [visibleRecentCount, setVisibleRecentCount] = useState(50);
  const [loadingMore, setLoadingMore] = useState(false);
  const [recentError, setRecentError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");
    graphqlRequest<{ user: PublicProfile | null }>(
      `query PublicReader($username: String!) {
        user(username: $username) {
          id name username profilePicture accountType subscription { plan }
          profileStats { mangasRead chaptersRead comments likes followers }
          followedByMe
          recentReadMangas { id title mangaCover lastReadAt }
          socialMedias { site discord telegram x instagram facebook youtube tiktok bluesky }
          trackers { myanimelist anilist animeplanet anidb }
        }
      }`,
      { username },
      authToken,
    ).then(({ user }) => {
      if (!active) return;
      setProfile(user);
      setVisibleRecentCount(50);
      if (user) {
        setFollowed(user.followedByMe);
        setFollowers(user.profileStats.followers);
      }
    }).catch((requestError: Error) => {
      if (active) setError(requestError.message || "Não foi possível carregar este perfil.");
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; };
  }, [username, authToken]);

  async function toggleFollow() {
    if (!authToken || !profile || followLoading) return;
    setFollowLoading(true);
    setFollowError("");
    try {
      const result = await graphqlRequest<{ toggleUserFollow: { followed: boolean; followers: number } }>(
        `mutation ToggleUserFollow($userID: ID!) { toggleUserFollow(userID: $userID) { followed followers } }`,
        { userID: profile.id },
        authToken,
      );
      setFollowed(result.toggleUserFollow.followed);
      setFollowers(result.toggleUserFollow.followers);
    } catch (requestError) {
      setFollowError(requestError instanceof Error ? requestError.message : "Não foi possível atualizar o follow.");
    } finally {
      setFollowLoading(false);
    }
  }

  async function loadMoreRecentMangas() {
    if (!profile || loadingMore) return;
    if (!hasRecentReadMangas) {
      setVisibleRecentCount((count) => count + 10);
      return;
    }
    setLoadingMore(true);
    setRecentError("");
    try {
      const { user } = await graphqlRequest<{ user: Pick<PublicProfile, "recentReadMangas"> | null }>(
        `query MoreRecentMangas($username: String!, $limit: Int!) { user(username: $username) { recentReadMangas(limit: $limit) { id title mangaCover lastReadAt } } }`,
        { username, limit: profile.recentReadMangas.length + 6 },
        authToken,
      );
      if (user) setProfile((current) => current ? { ...current, recentReadMangas: user.recentReadMangas } : current);
    } catch (requestError) {
      setRecentError(requestError instanceof Error ? requestError.message : "Não foi possível carregar mais mangas.");
    } finally {
      setLoadingMore(false);
    }
  }

  if (loading) return <main className={styles.page}><p>Carregando perfil…</p></main>;
  if (error || !profile) {
    return <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.publicInfo}>
          <h1>{error ? "Não foi possível abrir o perfil" : "Perfil não encontrado"}</h1>
          {error && <p>{error}</p>}
          <Link href="/" className={styles.backLink}>Voltar ao início</Link>
        </div>
      </section>
    </main>;
  }

  const plan = profile.subscription.plan === "FREE" ? "Leitor" : profile.subscription.plan;
  const useDemoRecentMangas = profile.profileStats.mangasRead < 50;
  const hasRecentReadMangas = !useDemoRecentMangas;
  const recentReadMangas = useDemoRecentMangas ? DEMO_RECENT_MANGAS : profile.recentReadMangas;
  const visibleRecentMangas = recentReadMangas.slice(0, visibleRecentCount);
  const hasMoreRecentMangas = hasRecentReadMangas
    ? recentReadMangas.length < profile.profileStats.mangasRead
    : visibleRecentCount < recentReadMangas.length;
  const actualSocialLinks = Object.entries(profile.socialMedias ?? {}).filter(([, url]) => safeProfileUrl(url)) as [string, string][];
  const actualTrackerLinks = Object.entries(profile.trackers ?? {}).filter(([name, url]) => {
    if (!safeProfileUrl(url)) return false;
    try {
      const host = new URL(url!).hostname;
      return TRACKER_DOMAINS[name]?.some((domain) => host === domain || host.endsWith(`.${domain}`)) === true;
    } catch {
      return false;
    }
  });
  const socialLinks = actualSocialLinks.length ? actualSocialLinks : DEMO_SOCIAL_LINKS;
  const trackerLinks = actualTrackerLinks.length ? actualTrackerLinks : DEMO_TRACKER_LINKS;

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="reader-name">
        <header className={styles.header}>
          {/* User supplied profile images are runtime URLs; keep them unoptimized like the edit page. */}
          <div className={styles.avatarFrame} data-frame={equippedFrame?.className}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.profilePicture || "/image-placeholder.svg"} alt={`Foto de ${profile.name}`} />
          </div>
          <div className={styles.identity}>
            <div className={styles.nameLine}>
              <h1 id="reader-name" data-font={equippedFont?.className}>{profile.name}</h1>
              <svg className={styles.nameIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <defs>
                  <linearGradient id="readerNameGradient" x1="0%" y1="0%" x2="200%" y2="0%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#ffc371" />
                    <animate attributeName="x1" values="0%;-100%;0%" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="200%;100%;200%" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" dur="4s" repeatCount="indefinite" />
                  </linearGradient>
                </defs>
                <path fill="url(#readerNameGradient)" d="M14 16c0 1.1046-.8954 2-2 2s-2-.8954-2-2  .8954-2 2-2 2 .8954 2 2Z" />
                <path fill="url(#readerNameGradient)" fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10ZM12 12c-2.2091 0-4-1.7909-4-4s1.7909-4 4-4C7.5817 4 4 7.5817 4 12s3.5817 8 8 8c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4Zm2-4c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Z" />
              </svg>
              <span className={styles.planBadge}>{plan}</span>
            </div>
            <p>@{profile.username}</p>
            <div className={styles.aboutSection}>
              <h2>Bio</h2>
              <p>Leitor da comunidade Tako.</p>
            </div>
            <div className={styles.followRow}>
              {authToken && authenticatedUser?.id !== profile.id && <button type="button" className={`${styles.followButton} ${followed ? styles.following : ""}`} onClick={toggleFollow} disabled={followLoading}>
                {followed ? <FiUserCheck /> : <FiUserPlus />}{followed ? "Seguindo" : "Seguir"}
              </button>}
            </div>
            {followError && <small className={styles.followError}>{followError}</small>}
          </div>
        </header>
        <section className={styles.publicInfo} aria-label="Informações públicas">
          <div className={styles.statsContainer}>
            <h2 className={styles.statsTitle}>Estatísticas</h2>
            <div className={styles.stats}>
              <div className={styles.stat}><span className={styles.statIcon}><FiUsers /></span><span className={styles.statValue}>{followers.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>Seguidores</span></div>
              <div className={styles.stat}><span className={styles.statIcon}><HiOutlineBookOpen /></span><span className={styles.statValue}>{profile.profileStats.mangasRead.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>Mangas lidos</span></div>
              <div className={styles.stat}><span className={styles.statIcon}><BiHash /></span><span className={styles.statValue}>{profile.profileStats.chaptersRead.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>Capítulos lidos</span></div>
              <div className={styles.stat}><span className={styles.statIcon}><BiChat /></span><span className={styles.statValue}>{profile.profileStats.comments.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>Comentários</span></div>
              <div className={styles.stat}><span className={styles.statIcon}><BiLike /></span><span className={styles.statValue}>{profile.profileStats.likes.toLocaleString("pt-BR")}</span><span className={styles.statLabel}>Curtidas</span></div>
            </div>
          </div>
          <div className={styles.mediasContainer}>
            <h2 className={styles.statsTitle}>Links</h2>
            <div className={styles.medias}>
              {socialLinks.map(([name, url]) => <a className={styles.media} href={String(url)} key={name} target="_blank" rel="noopener noreferrer"><SocialIcon name={name} /><span>{SOCIAL_LABELS[name] ?? name}</span></a>)}
            </div>
          </div>
          <div className={styles.trackersContainer}>
            <h2 className={styles.statsTitle}>Trackers</h2>
            <div className={styles.trackers}>
              {trackerLinks.map(([name, url]) => <a className={`${styles.tracker} ${name === "myanimelist" || name === "anilist" || name === "animeplanet" || name === "anidb" ? styles.trackerIconOnly : ""} ${name === "anidb" ? styles.trackerAniDB : ""}`} href={String(url)} key={name} target="_blank" rel="noopener noreferrer" aria-label={TRACKER_LABELS[name] ?? name} title={TRACKER_LABELS[name] ?? name}>{name === "myanimelist" ? <MediaImage className={styles.myAnimeListLogo} source="/icons/myanimelist-mark.png" alt="" /> : name === "anilist" ? <MediaImage className={styles.aniListLogo} source="/icons/anilist-mark.png" alt="" /> : name === "anidb" ? <MediaImage className={styles.aniDbLogo} source="/icons/anidb-mark.png" alt="" /> : name === "animeplanet" ? <MediaImage className={styles.animePlanetLogo} source="/icons/animeplanet-mark.png" alt="" /> : TRACKER_LABELS[name] ?? name}</a>)}
            </div>
          </div>
        </section>
      </section>
      <section className={`${styles.card} ${styles.recentCard}`} aria-labelledby="recent-mangas-title">
        <div className={styles.recentSection}>
          <div className={styles.recentHeading}>
            <h2 id="recent-mangas-title" className={styles.profileLinkTitle}>Últimos mangas lidos</h2>
            {!hasRecentReadMangas && <span className={styles.demoLabel}>Dados demonstrativos</span>}
          </div>
          <div className={styles.recentMangas}>
            {visibleRecentMangas.map((manga, index) => {
              const content = <>
                <MediaImage className={styles.recentCover} source={manga.mangaCover} fallback="/image-placeholder.svg" alt={`Capa de ${manga.title}`} />
                <span className={styles.recentMangaInfo}><strong>{manga.title}</strong><small>Lido em {new Date(manga.lastReadAt).toLocaleDateString("pt-BR")}</small></span>
              </>;
              return manga.id
                ? <Link href={`/title/${manga.id}`} className={styles.recentManga} key={manga.id}>{content}</Link>
                : <div className={styles.recentManga} key={`demo-${index}`}>{content}</div>;
            })}
          </div>
          {hasMoreRecentMangas && <button type="button" className={styles.showMoreButton} onClick={loadMoreRecentMangas} disabled={loadingMore}>
            {loadingMore ? "Carregando…" : "Ver mais"}
          </button>}
          {recentError && <p className={styles.recentError}>{recentError}</p>}
        </div>
      </section>
    </main>
  );
}
