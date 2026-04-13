// Imports Principais
import Link from "next/link";

// Style Sheet CSS
import styles from "./chapter.module.css";

// Icons
import { TbBooks } from "react-icons/tb";

import { RxCornerTopLeft } from "react-icons/rx";
import { RxCornerBottomLeft } from "react-icons/rx";

import { MdOutlinePeopleOutline } from "react-icons/md";
import { BiHash } from "react-icons/bi";

import { GiEvilBook } from "react-icons/gi";
import { ImMakeGroup } from "react-icons/im";

function Chapters() {
  const volumes = [
    {
      id: 2,
      number: 2,
      chapters: [
        {
          id: 10,
          number: 4, // Capítulo 2
          releases: [
            {
              id: 1,
              language: "pt-BR",
              title: "Título em Português 4",
              scanlator: "Scan BR",
            },
            {
              id: 2,
              language: "ja-JP",
              title: "日本語タイトル",
              scanlator: "Scan JP",
            },
          ],
        },
        {
          id: 11,
          number: 3, // Capítulo 1
          releases: [
            {
              id: 3,
              language: "pt-BR",
              title: "Título em Português 3",
              scanlator: "Scan BR",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      number: 1,
      chapters: [
        {
          id: 12,
          number: 2, // Capítulo 2
          releases: [
            {
              id: 1,
              language: "pt-BR",
              title: "Título em Português 2",
              scanlator: "Scan BR",
            },
            {
              id: 2,
              language: "ja-JP",
              title: "日本語タイトル",
              scanlator: "Scan JP",
            },
            {
              id: 3,
              language: "en-US",
              title: "Title in English 2",
              scanlator: "Scan EN",
            },
          ],
        },
        {
          id: 13,
          number: 1, // Capítulo 1
          releases: [
            {
              id: 3,
              language: "pt-BR",
              title: "Título em Português 1",
              scanlator: "Scan BR",
            },
          ],
        },
      ],
    },
  ];

  const languageFlags: Record<string, string> = {
    "pt-BR": "🇧🇷",
    "ja-JP": "🇯🇵",
    "en-US": "🇺🇸",
    "es-ES": "🇪🇸",
  };

  return (
    <section>
      {volumes.map((volume) => (
        <div key={volume.id}>
          <div className={styles.volNumber}>
            <GiEvilBook size={20} />
            <h2 className={styles.volTitle}>Volume {volume.number}</h2>
          </div>

          {volume.chapters.map((chapter) => (
            <div key={chapter.id} className={styles.capContent}>
              <div className={styles.capNumber}>
                <BiHash size={18} />
                <h3>Capítulo {chapter.number}</h3>
              </div>

              {/* Adicionamos uma div pai para as releases para controlar a linha vertical */}
              <div className={styles.releasesGroup}>
                {chapter.releases.map((release, index) => (
                  <div key={release.id} className={styles.releaseWrapper}>
                    <div className={styles.capLine}>
                      <Link className={styles.capLink} href={`/`}>
                        <div className={styles.capTitle}>
                          <span>{languageFlags[release.language] ?? "🌍"}</span>
                          <span>{release.title}</span>
                        </div>
                        <div className={styles.scanlator}>
                          <ImMakeGroup size={14} />
                          <span>{release.scanlator}</span>
                        </div>
                      </Link>
                    </div>

                    {index < chapter.releases.length - 1 && (
                      <hr className={styles.hrFadded} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export { Chapters };
