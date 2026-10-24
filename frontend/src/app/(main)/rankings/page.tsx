import { Fragment } from "react";
import Link from "next/link";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiRanking } from "react-icons/pi";
import { HiOutlineBookOpen } from "react-icons/hi2";

import { MediaImage } from "@/components/MediaImage/page";
import { getRankings } from "@/lib/catalog";
import styles from "./rankings.module.css";

async function RankingsPage() {
  const rankings = await getRankings().catch((error) => {
    console.error("Falha ao carregar rankings:", error);
    return null;
  });

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.heroIcon}><PiRanking aria-hidden="true" /></span>
        <div><span className={styles.eyebrow}>DESTAQUES DA COMUNIDADE</span><h1>Ranking</h1><p>Descubra as obras mais lidas e os leitores mais ativos do Tako.</p></div>
      </header>

      {!rankings ? <p className={styles.error} role="alert">Não foi possível carregar os rankings agora.</p> : <div className={styles.columns}>
        <section className={styles.panel} aria-labelledby="weekly-manga-ranking">
          <div className={styles.panelHeading}><span className={styles.panelIcon}><HiOutlineBookOpen aria-hidden="true" /></span><div><h2 id="weekly-manga-ranking">Mangás mais visualizados</h2><p>Últimos 7 dias</p></div></div>
          {rankings.weeklyMostReadMangas.length ? <ol className={styles.list}>
            {rankings.weeklyMostReadMangas.map(({ manga, reads }, index) => <Fragment key={manga.id}>
              <li className={styles.entry}>
                <span className={`${styles.position} ${index < 3 ? styles.topPosition : ""}`}>{index + 1}</span>
                <Link className={styles.mangaLink} href={`/title/${manga.id}`}>
                  <MediaImage className={styles.mangaCover} source={manga.mangaCover} alt={`Capa de ${manga.title}`} fallback="/image-placeholder.svg" />
                  <span className={styles.entryName}>{manga.title}</span>
                </Link>
                <span className={styles.metric}>{reads.toLocaleString("pt-BR")} <small>{reads === 1 ? "visualização" : "visualizações"}</small></span>
              </li>
              {index < rankings.weeklyMostReadMangas.length - 1 && <hr className={styles.hrFaded} />}
            </Fragment>)}
          </ol> : <p className={styles.empty}>Ainda não há visualizações suficientes nesta semana.</p>}
        </section>

        <section className={styles.panel} aria-labelledby="reader-ranking">
          <div className={styles.panelHeading}><span className={styles.panelIcon}><MdOutlinePeopleAlt aria-hidden="true" /></span><div><h2 id="reader-ranking">Maiores leitores</h2><p>Capítulos lidos no total</p></div></div>
          {rankings.topReaders.length ? <ol className={styles.list}>
            {rankings.topReaders.map(({ user, chaptersRead }, index) => <Fragment key={user.id}>
              <li className={styles.entry}>
                <span className={`${styles.position} ${index < 3 ? styles.topPosition : ""}`}>{index + 1}</span>
                <Link className={styles.readerLink} href={`/member/${user.username}`}>
                  {user.profilePicture ? <MediaImage className={styles.avatar} source={user.profilePicture} alt="" fallback="/image-placeholder.svg" /> : <span className={styles.avatarFallback}>{user.name.slice(0, 1).toUpperCase()}</span>}
                  <span className={styles.readerName}><strong>{user.name}</strong><small>@{user.username}</small></span>
                </Link>
                <span className={styles.metric}>{chaptersRead.toLocaleString("pt-BR")} <small>{chaptersRead === 1 ? "capítulo" : "capítulos"}</small></span>
              </li>
              {index < rankings.topReaders.length - 1 && <hr className={styles.hrFaded} />}
            </Fragment>)}
          </ol> : <p className={styles.empty}>Os leitores aparecerão aqui conforme forem lendo capítulos.</p>}
        </section>
      </div>}
    </main>
  );
}

export default RankingsPage;
