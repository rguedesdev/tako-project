// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./scancard.module.css";

// Icones
import { MdOutlinePeopleOutline, MdGroups } from "react-icons/md";
import { ImMakeGroup } from "react-icons/im";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { BiHash } from "react-icons/bi";

import { MdVerified } from "react-icons/md";

// Imagens
import AnimaRegia from "../../../public/scans/anima-regia.jpg";
import AMA from "../../../public/scans/ama.jpg";
import Senryuu from "../../../public/scans/senryuu.jpg";
import Kurumada from "../../../public/scans/kurumada.jpg";
import Akane from "../../../public/scans/akane.jpg";
import KuroCat from "../../../public/scans/kurocat.jpg";
import Hakabanashi from "../../../public/scans/hakabanashi.jpg";
import Butter from "../../../public/scans/butter.jpg";
import MomoHana from "../../../public/scans/momo-hana.jpg";
import Kakusei from "../../../public/scans/kakusei.jpg";
import Drope from "../../../public/scans/drope.jpg";
import TQ from "../../../public/scans/tq.jpg";

function ScansCard() {
  //   const badges = [
  //     { name: "Fluorite", hex: "#C3A2E3", salesQuantity: "xx" },
  //     { name: "Blue", hex: "#2196f3", salesQuantity: "500" },
  //     { name: "Bronze", hex: "#CD7F32", salesQuantity: "1 mil" },
  //     { name: "Silver", hex: "#C0C0C0", salesQuantity: "2,5 mil" },
  //     { name: "Gold", hex: "#daa520", salesQuantity: "5 mil" },
  //     { name: "Pearl", hex: "#EAE0C8", salesQuantity: "10 mil" },
  //     { name: "Morganite", hex: "#F7A8B8", salesQuantity: "20 mil" },
  //     { name: "Peridot", hex: "#A2D86B", salesQuantity: "30 mil" },
  //     { name: "Amber", hex: "#FF9C33", salesQuantity: "40 mil" },
  //     { name: "Aquamarine", hex: "#13B3AC", salesQuantity: "50 mil" },
  //     { name: "Obsidian", hex: "#0B0B0B", salesQuantity: "60 mil" },
  //     { name: "Emerald", hex: "#00674f", salesQuantity: "70 mil" },
  //     { name: "Sapphire", hex: "#0F52BA", salesQuantity: "80 mil" },
  //     { name: "Ruby", hex: "#E0115F", salesQuantity: "90 mil" },
  //     { name: "Amethyst", hex: "#4c1d95", salesQuantity: "100 mil" },
  //   ];

  const scans = [
    {
      id: 1,
      picture: AnimaRegia,
      name: "Anima Regia",
      verifiedBadge: true,
      description: "AnimaRegia Scan - 18 anos Traduzindo Mangás em Qualidade!",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 2,
      picture: AMA,
      name: "AMA Scans",
      verifiedBadge: true,
      description:
        "Essa é uma história de muito tempo atrás, a AMA foi originalmente um grupo de Facebook e em meados de 2015 os membros se juntaram e formaram a atual AMA Scans.",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 3,
      picture: Senryuu,
      name: "Senryuu Scans",
      verifiedBadge: true,
      description:
        "Scan criada no final de 2019, mais conhecida por Kaguya-sama, Oshi no Ko e 3-gatsu no Lion. Atualmente possui o foco de trazer obras pouco conhecidas, mas aclamadas, para a comunidade brasileira.",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 4,
      picture: Kurumada,
      name: "Kurumada Legends",
      verifiedBadge: true,
      description:
        "Existindo há 11 anos, somos um scanlator dedicado divulgar e prestigiar as obras de Masami Kurumada, principalmente a franquia Saint Seiya e os autores relacionados a ela. Recentemente começamos a fazer outras obras que amamos e sempre tivemos interesse. Que nosso cosmo continue queimando eternamente!",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 5,
      picture: Akane,
      name: "Akane Scan",
      verifiedBadge: false,
      description: "(⁠⁠ꈍ⁠ᴗ⁠ꈍ⁠)",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 6,
      picture: KuroCat,
      name: "KuroCat Scanlator",
      verifiedBadge: true,
      description:
        "Nós da Kurocat somos um grupo dedicado à tradução de mangás, unindo qualidade, rapidez e paixão pela cultura japonesa. nosso objetivo é aproximar fãs das obras originais com traduções fiéis e acessíveis.",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 7,
      picture: Hakabanashi,
      name: "Hakabanashi Scans",
      verifiedBadge: true,
      description:
        "Vamos nos divertir lendo os mangás que tanto amamos!! Principalmente Akane-Banashi hahahaha",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 8,
      picture: Butter,
      name: "Butter Scan",
      verifiedBadge: false,
      description:
        "Projetos em Andamento: Henkyou Mob; Aishiteru Game wo Owarasetai; Jinsei Gyakuten: Marika-chan no Koukando wa Bukkowarete iru; Aorikei Game Haishinsha; Kaji Daikou no Arbeit o Hajimetara.",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 9,
      picture: MomoHana,
      name: "Momo no Hana Scan",
      verifiedBadge: true,
      description: "Scan focada em Shoujo e Josei.",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 10,
      picture: Kakusei,
      name: "Kakusei Project",
      verifiedBadge: true,
      description:
        "Perfil oficial do grupo Kakusei Project no Sakura Mangás. Um trabalho feito por fãs, para fãs. Compartilhando histórias por amor, sem fins lucrativos.",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 11,
      picture: Drope,
      name: "Drope Scan",
      verifiedBadge: true,
      description:
        "Drope Scan realização de suas obras favoritas que estão dropadas ou novas. Destinado aos amantes dos mangás e webtoons.",
      qtdMangas: 139,
      qtdCaps: 356,
    },

    {
      id: 12,
      picture: TQ,
      name: "TQ Scans",
      verifiedBadge: false,
      description:
        "Quer falar com alguém da equipe de sua obra favorita, ou até mesmo fazer novos amigos? Isso aí é bem simples, basta ir no nosso Discord e dar um 'oi' para nós! Ou nos seguir em alguma de nossas outras redes sociais. Aos novos leitores, sejam muito bem vindos!",
      qtdMangas: 139,
      qtdCaps: 356,
    },
  ];

  return (
    <section>
      <h2 className={styles.scansSectionTitle}>
        <ImMakeGroup size={20} />
        <span>Scans Parceiras</span>
      </h2>
      <div className={styles.scansGrid}>
        {scans.map((scan) => (
          <article key={scan.id} className={styles.scanCard}>
            <figure className={styles.scanContent}>
              <Image
                className={styles.scanPicture}
                src={scan.picture}
                alt="Scan Picture"
                width={150}
                height={150}
              />

              <figcaption className={styles.scanInfo}>
                <div>
                  <h2 className={styles.scanNameWrapper}>
                    <span className={styles.scanName}>{scan.name}</span>
                    {scan.verifiedBadge === true ? (
                      <MdVerified className={styles.verifiedBadge} size={17} />
                    ) : (
                      <></>
                    )}
                  </h2>
                  <p className={styles.scanDescription}>{scan.description}</p>
                </div>

                <div className={styles.scanMoreInfo}>
                  <div className={styles.scanManga}>
                    <HiOutlineBookOpen
                      className={styles.scanMangaIcon}
                      size={17}
                    />
                    <span>{`${scan.qtdMangas} Mangas`}</span>
                  </div>

                  <div className={styles.scanManga}>
                    <BiHash className={styles.scanMangaIcon} size={17} />
                    <span>{`${scan.qtdCaps} Caps`}</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}

export { ScansCard };
