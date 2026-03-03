// Imports Principais
import Link from "next/link";

// Style Sheet CSS
import styles from "./chapter.module.css";

// Icons
import { TbBooks } from "react-icons/tb";

import { RxCornerTopLeft } from "react-icons/rx";
import { RxCornerBottomLeft } from "react-icons/rx";
import { RxDividerHorizontal } from "react-icons/rx";

import { MdOutlinePeopleOutline } from "react-icons/md";
import { BiHash } from "react-icons/bi";

function Chapters() {
  const volumes = [
    {
      id: 1,
      number: 1,
      chapters: [
        {
          id: 10,
          number: 2, // Capítulo 2
          releases: [
            {
              id: 1,
              language: "pt-BR",
              title: "O despertar do herói",
              scanlator: "Scan BR",
            },
            {
              id: 2,
              language: "ja-JP",
              title: "英雄の目覚め",
              scanlator: "Scan JP",
            },
          ],
        },
        {
          id: 11,
          number: 1, // Capítulo 1
          releases: [
            {
              id: 3,
              language: "pt-BR",
              title: "O começo",
              scanlator: "Scan BR",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      number: 2,
      chapters: [
        {
          id: 12,
          number: 2, // Capítulo 2
          releases: [
            {
              id: 1,
              language: "pt-BR",
              title: "O despertar do herói",
              scanlator: "Scan BR",
            },
            {
              id: 2,
              language: "ja-JP",
              title: "英雄の目覚め",
              scanlator: "Scan JP",
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
              title: "O começo",
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
            <TbBooks size={20} />
            <h2 className={styles.volTitle}>Volume {volume.number}</h2>
          </div>

          {volume.chapters.map((chapter) => (
            <div key={chapter.id} className={styles.capContent}>
              <div className={styles.capNumber}>
                <BiHash size={18} />
                <h3>Capítulo {chapter.number}</h3>
              </div>

              {chapter.releases.map((release, index) => (
                <div key={release.id}>
                  <div className={styles.capLine}>
                    <Link className={styles.capLink} href={`/`}>
                      <div className={styles.capTitle}>
                        <span>{languageFlags[release.language] ?? "🌍"}</span>
                        <span>{release.title}</span>
                      </div>
                      <div className={styles.scanlator}>
                        <MdOutlinePeopleOutline size={20} />
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
          ))}
        </div>
      ))}
    </section>
  );
}

export { Chapters };
