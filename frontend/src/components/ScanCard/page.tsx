import Link from "next/link";
import { BiHash } from "react-icons/bi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { ImMakeGroup } from "react-icons/im";

import type { GroupCard } from "@/lib/catalog";
import { MediaImage } from "@/components/MediaImage/page";
import styles from "./scancard.module.css";

function ScansCard({ scans, loadError = false }: { scans: GroupCard[]; loadError?: boolean }) {
  return (
    <section>
      <h2 className={styles.scansSectionTitle}>
        <ImMakeGroup size={19} />
        <span>Scans Parceiras</span>
      </h2>
      {loadError ? (
        <p>Não foi possível conectar ao servidor de dados. Verifique se o backend está em execução.</p>
      ) : scans.length === 0 ? (
        <p>Nenhuma scan cadastrada até o momento.</p>
      ) : (
        <div className={styles.scansGrid}>
          {scans.map((scan) => {
            return (
              <Link key={scan.id} href={`/scan/${scan.id}`}>
                <article className={styles.scanCard}>
                  <figure className={styles.scanContent}>
                    <MediaImage className={styles.scanPicture} source={scan.groupImage} fallback="/group-placeholder.svg" alt={`Imagem da ${scan.name}`} />
                    <figcaption className={styles.scanInfo}>
                      <div>
                        <h2 className={styles.scanNameWrapper}>
                          <span className={styles.scanName}>{scan.name}</span>
                        </h2>
                        <p className={styles.scanDescription}>{scan.description}</p>
                      </div>
                      <div className={styles.scanMoreInfo}>
                        <div className={styles.scanManga}>
                          <HiOutlineBookOpen size={17} />
                          <span>{scan.stats.mangas} Mangas</span>
                        </div>
                        <div className={styles.scanManga}>
                          <BiHash size={17} />
                          <span>{scan.stats.chapters} Caps</span>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

export { ScansCard };
