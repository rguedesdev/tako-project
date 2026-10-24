import type { Metadata } from "next";
import Link from "next/link";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiBookOpen,
  FiCheck,
  FiDatabase,
  FiFileText,
  FiHardDrive,
  FiLayers,
  FiMonitor,
  FiShare2,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { HiOutlineBookOpen, HiOutlineCube } from "react-icons/hi2";
import { GrPersonalComputer } from "react-icons/gr";
import { CgDatabase } from "react-icons/cg";
import { ImMakeGroup } from "react-icons/im";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiCopperCoinLine } from "react-icons/ri";

import { Navbar } from "@/components/Navbar/page";
import { Footer } from "@/components/Footer/page";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Tako — Leitor de mangas com arquivos distribuídos via IPFS",
  description:
    "Descubra como o Tako organiza mangas e como grupos e leitores podem manter as imagens dos capítulos acessíveis por nós IPFS independentes.",
};

function NetworkDiagram() {
  return (
    <figure className={styles.networkFigure}>
      <div
        className={styles.networkCanvas}
        role="img"
        aria-label="Três nós independentes mantêm conjuntos diferentes de páginas; as páginas 01 e 02 aparecem em mais de um nó"
      >
        <div className={styles.canvasHeading}>
          <span>ARQUIVOS DE PÁGINAS · CÓPIAS LOCAIS</span>
          <span className={styles.canvasStatus}>
            <i /> NÓS INDEPENDENTES
          </span>
        </div>
        <svg
          className={styles.networkSvg}
          viewBox="0 0 700 390"
          fill="none"
          aria-hidden="true"
        >
          <path d="M157 130 350 195M543 130 350 195M238 305 350 195M462 305 350 195M157 130 543 130" />
          <path
            className={styles.networkFlow}
            d="M157 130 350 195M238 305 350 195M543 130 350 195M462 305 350 195"
          />
          <circle cx="157" cy="130" r="4" />
          <circle cx="543" cy="130" r="4" />
          <circle cx="238" cy="305" r="4" />
          <circle cx="462" cy="305" r="4" />
        </svg>
        <article className={`${styles.nodePanel} ${styles.nodeScan}`}>
          <div className={styles.nodePanelTitle}>
            <FiMonitor />
            <span>Computador da scan</span>
            <i />
          </div>
          <small>Nó publicador</small>
          <div className={styles.fileChips}>
            <span>Página A</span>
            <span>Página B</span>
          </div>
          <span className={styles.localNote}>mantidas neste dispositivo</span>
        </article>
        <article className={`${styles.nodePanel} ${styles.nodePeer}`}>
          <div className={styles.nodePanelTitle}>
            <FiMonitor />
            <span>Usuario colaborador</span>
            <i />
          </div>
          <small>Nó participante</small>
          <div className={styles.fileChips}>
            <span>Página A</span>
            <span>Página C</span>
          </div>
          <span className={styles.localNote}>mantidas neste dispositivo</span>
        </article>
        <article className={`${styles.nodePanel} ${styles.nodeReader}`}>
          <div className={styles.nodePanelTitle}>
            <GrPersonalComputer />
            <span>Outro computador</span>
            <i />
          </div>
          <small>Nó participante</small>
          <div className={styles.fileChips}>
            <span>Página B</span>
          </div>
          <span className={styles.localNote}>mantida neste dispositivo</span>
        </article>
        <div className={styles.cidMarker}>
          <HiOutlineCube aria-hidden="true" />
          <span>
            <strong>Mesmo CID</strong>
            <small>Página A em dois nós</small>
            <small>Página B em dois nós</small>
            <small>Página C em um nó</small>
          </span>
        </div>
      </div>
      <figcaption>
        Exemplo visual: cada nó mantém apenas os dados que armazenou. Um mesmo
        arquivo pode estar em mais de um participante.
      </figcaption>
    </figure>
  );
}

function MetadataDiagram() {
  return (
    <div
      className={styles.metadataDiagram}
      aria-label="O catálogo guarda metadados e referências; os arquivos de imagem são adicionados ao IPFS e mantidos por nós"
    >
      <div className={styles.metadataRecord}>
        <div className={styles.diagramLabel}>
          <FiDatabase /> CATÁLOGO TAKO · METADADOS
        </div>
        <strong>Capítulo 08</strong>
        <span>Obra, Scan, número e ordem das páginas</span>
        <div className={styles.cidList}>
          <code>pages[0] → CID da página 01</code>
          <code>pages[1] → CID da página 02</code>
          <code>…</code>
        </div>
      </div>
      <div className={styles.diagramConnector} aria-hidden="true">
        <span />
        <FiArrowRight />
        <small>referencia</small>
      </div>
      <div className={styles.ipfsRecord}>
        <div className={styles.diagramLabel}>
          <HiOutlineCube /> IPFS · DADOS DOS ARQUIVOS
        </div>
        <div className={styles.imageFiles}>
          <span>
            <FiFileText /> imagem 01
          </span>
          <span>
            <FiFileText /> imagem 02
          </span>
          <span>
            <FiLayers /> blocos de dados
          </span>
        </div>
        <p>
          Cada arquivo recebe seu CID. Os nós podem manter os blocos
          correspondentes.
        </p>
      </div>
    </div>
  );
}

function AvailabilityDiagram() {
  return (
    <figure className={styles.availabilityFigure}>
      <div
        className={styles.availabilityDiagram}
        role="img"
        aria-label="A scan A está offline. As páginas 01 e 03 continuam disponíveis no nó da scan B, e a página 02 continua no nó colaborador"
      >
        <div className={styles.availabilityNodes}>
          <article
            className={`${styles.availabilityNode} ${styles.offlineNode}`}
          >
            <div>
              <ImMakeGroup className={styles.scanGroupIcon} />
              <strong>Scan 01</strong>
              <span className={styles.offlineStatus}>
                <FiX /> offline
              </span>
            </div>
            <small>mantinha páginas A e B</small>
            <div className={styles.fileChips}>
              <span>Página A</span>
              <span>Página B</span>
            </div>
          </article>
          <article
            className={`${styles.availabilityNode} ${styles.onlineNode}`}
          >
            <div>
              <ImMakeGroup className={styles.scanGroupIcon} />
              <strong>Scan 02</strong>
              <span className={styles.onlineStatus}>
                <FiCheck /> acessível
              </span>
            </div>
            <small>conjunto de arquivos diferente</small>
            <div className={styles.fileChips}>
              <span>Página A</span>
              <span>Página C</span>
            </div>
          </article>
          <article
            className={`${styles.availabilityNode} ${styles.onlineNode}`}
          >
            <div>
              <MdOutlinePersonOutline />
              <strong>Colaborador 01</strong>
              <span className={styles.onlineStatus}>
                <FiCheck /> acessível
              </span>
            </div>
            <small>mantém alguns arquivos</small>
            <div className={styles.fileChips}>
              <span>Página B</span>
            </div>
          </article>
        </div>
        <div className={styles.recoveryRoutes}>
          <span>
            <b>Página A</b>
            <i /> recuperável na Scan 02
          </span>
          <span>
            <b>Página B</b>
            <i /> recuperável no Colaborador 01
          </span>
          <span>
            <b>Página C</b>
            <i /> disponível na Scan 02
          </span>
        </div>
      </div>
      <figcaption>
        Cenário ilustrativo: a Scan 01 saiu do ar, mas outros nós acessíveis
        ainda mantêm parte dos mesmos arquivos.
      </figcaption>
    </figure>
  );
}

function InstitutionalHome() {
  return (
    <div className={styles.site}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <i /> O PRIMEIRO LEITOR DE MANGAS ONLINE VIA IPFS
            </span>
            <h1 id="hero-title">Leitor de mangas 100% descentralizado</h1>
            <ul className={styles.heroPoints}>
              <li>
                Cada Scan funciona como um nó dentro da rede e sincroniza as
                imagens dos capítulos via IPFS. Cada imagem recebe um endereço
                único, chamado CID.
              </li>
              <li>
                O Tako Project organiza os mangas e capítulos em um catálogo.
              </li>
              <li>
                Usuários também podem participar como nós, ajudando a manter os
                arquivos distribuídos e disponíveis.
              </li>
            </ul>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="/mangas">
                Explorar mangas <FiArrowRight aria-hidden="true" />
              </Link>
              <a className={styles.secondaryButton} href="#participar">
                Ver como participar <FiArrowDownRight aria-hidden="true" />
              </a>
            </div>
            <p className={styles.heroNote}>
              Você pode começar apenas lendo. Colaborar com armazenamento é
              opcional e requer o aplicativo desktop Takop.
            </p>
          </div>
          <NetworkDiagram />
          <div className={styles.heroIndex} aria-hidden="true">
            <span>CATÁLOGO · REFERÊNCIAS · ARQUIVOS</span>
            <span>UMA IMAGEM PODE TER MAIS DE UMA FONTE</span>
          </div>
        </section>

        <section
          className={styles.architecture}
          aria-labelledby="architecture-title"
        >
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>
              DUAS CAMADAS, PAPÉIS DIFERENTES
            </span>
            <h2 id="architecture-title">
              O site organiza. Os nós mantêm os arquivos.
            </h2>
            <p>
              Metadados e imagens são coisas diferentes. O Tako Project registra
              a obra, o capítulo e as referências às páginas. O IPFS identifica
              os dados das imagens; os nós que os armazenam podem fornecê-los.
            </p>
          </div>
          <MetadataDiagram />
          <div className={styles.nodeDefinition}>
            <span className={styles.definitionIcon}>
              <FiShare2 aria-hidden="true" />
            </span>
            <p>
              <strong>O que é um nó?</strong> É um computador que executa
              software compatível com IPFS e pode armazenar ou fornecer
              determinados arquivos. Cada participante mantém seu próprio
              conjunto local; não é necessário que todos guardem todos os
              capítulos.
            </p>
          </div>
        </section>

        <section className={styles.publish} aria-labelledby="publish-title">
          <div className={styles.publishIntro}>
            <span className={styles.eyebrow}>01 · PUBLICAÇÃO</span>
            <h2 id="publish-title">
              Da pasta de imagens ao capítulo no catálogo.
            </h2>
            <p>
              Uma Scan administra o grupo, registra mangas e cria capítulos pelo
              Tako Project desktop. A obra e o capítulo entram no catálogo; os
              arquivos das páginas são adicionados individualmente ao IPFS.
            </p>
            <div className={styles.desktopStamp}>
              <FiMonitor />
              <span>
                Takop<small>aplicativo desktop</small>
              </span>
            </div>
          </div>
          <ol className={styles.publishSteps}>
            <li>
              <span>01</span>
              <div>
                <h3>Crie uma conta e acesse o site Tako Project</h3>
                <p>
                  Personalize seu perfil, favorite os mangas que está lendo,
                  comente e interaja com outros leitores.
                </p>
              </div>
            </li>

            <li>
              <span>02</span>
              <div>
                <h3>Baixe o aplicativo para desktop e crie um grupo</h3>
                <p>
                  Faça download do Aplicativo Desktop da Scan, de acordo com o
                  seu sistema operacional. Ative o armazenamento para as scans
                  no aplicativo, crie e administre seus grupos.
                </p>
              </div>
            </li>

            <li>
              <span>03</span>
              <div>
                <h3>Cadastre os Mangas</h3>
                <p>
                  Preencha as informações bibliográficas. A busca
                  Jikan/MyAnimeList auxilia no preenchimento, quando disponível,
                  evitando possíveis informações incorretas e duplicidades.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Selecione as imagens do capítulo</h3>
                <p>
                  O Tako Project percorre os arquivos de imagem em ordem e
                  adiciona cada imagem individualmente ao IPFS, fixando-a no nó
                  local da scan.
                </p>
              </div>
            </li>
            <li>
              <span>05</span>
              <div>
                <h3>Cadastre o capítulo e referências</h3>
                <p>
                  O catálogo guarda os metadados, a lista ordenada de CIDs e as
                  URLs de reserva correspondentes. O CID identifica os dados da
                  imagem, não o capítulo como unidade editorial.
                </p>
              </div>
            </li>
          </ol>
          <aside className={styles.ipfsNote}>
            <span className={styles.definitionIcon}>
              <HiOutlineCube aria-hidden="true" />
            </span>
            <p>
              <strong>O que é adicionado ao IPFS?</strong> Os bytes de cada
              imagem. O IPFS os representa em blocos e calcula um CID baseado no
              conteúdo. O Takop também envia uma cópia de reserva das imagens
              para uma VPS segura, e são usadas apenas em casa de
              indisponibilidade total dos arquivos na rede IPFS.
            </p>
          </aside>
        </section>

        <section className={styles.reading} aria-labelledby="reading-title">
          <div className={styles.readingHeader}>
            <span className={styles.eyebrow}>02 · LEITURA</span>
            <h2 id="reading-title">
              O leitor usa os CIDs para buscar cada página.
            </h2>
            <p>
              Ao abrir um capítulo, a página web consulta o registro do Tako
              para saber a ordem das imagens e os identificadores associados a
              elas.
            </p>
          </div>
          <div className={styles.readingFlow}>
            <article className={styles.readingStage}>
              <div className={styles.stageHeading}>
                <HiOutlineBookOpen />
                <h3>Escolha um capítulo</h3>
                <span className={styles.stageNumber}>01</span>
              </div>
              <p>
                O site consulta os metadados do capítulo e recebe a lista
                ordenada de CIDs e as referências de reserva.
              </p>
              <small>CATÁLOGO TAKO</small>
            </article>
            <span className={styles.flowArrow} aria-hidden="true">
              <FiArrowRight />
            </span>
            <article className={styles.readingStage}>
              <div className={styles.stageHeading}>
                <HiOutlineCube />
                <h3>Solicite uma imagem</h3>
                <span className={styles.stageNumber}>02</span>
              </div>
              <p>
                O leitor tenta recuperar os dados pelo CID usando o gateway da
                API e gateways IPFS configurados ou públicos.
              </p>
              <small>IDENTIFICADOR DO ARQUIVO</small>
            </article>
            <span className={styles.flowArrow} aria-hidden="true">
              <FiArrowRight />
            </span>
            <article className={styles.readingStage}>
              <div className={styles.stageHeading}>
                <HiOutlineCube />
                <h3>Um nó acessível fornece os blocos</h3>
                <span className={styles.stageNumber}>03</span>
              </div>
              <p>
                Os nós que mantêm aqueles dados podem fornecê-los. Se as fontes
                IPFS falharem, o leitor tenta a URL de reserva.
              </p>
              <small>IPFS · RESERVA TELEGRAM</small>
            </article>
            <span className={styles.flowArrow} aria-hidden="true">
              <FiArrowRight />
            </span>
            <article className={styles.readingStage}>
              <div className={styles.stageHeading}>
                <FiLayers />
                <h3>A página aparece no navegador</h3>
                <span className={styles.stageNumber}>04</span>
              </div>
              <p>
                As imagens recuperadas são apresentadas na ordem registrada para
                o capítulo.
              </p>
              <small>LEITOR WEB</small>
            </article>
          </div>
        </section>

        <section
          className={styles.resilience}
          aria-labelledby="resilience-title"
        >
          <span className={`${styles.eyebrow} ${styles.resilienceEyebrow}`}>
            03 · DISPONIBILIDADE
          </span>
          <h2 className={styles.resilienceTitle} id="resilience-title">
            Se um nó ficar offline, outros podem continuar fornecendo os mesmos
            arquivos.
          </h2>
          <div className={styles.resilienceCopy}>
            <p>
              No exemplo, a Scan 01 está indisponível. A página A continua
              disponível em outro nó; a página B está disponível no computador
              de um usuario colaborador. Como os conjuntos locais diferem, o
              conteúdo pode ser recuperado dos participantes que ainda estão
              acessíveis.
            </p>
            <p>
              O IPFS não replica cada arquivo automaticamente para todos. Se
              nenhum nó acessível mantiver uma imagem, ela não poderá ser
              recuperada dessa rede naquele momento.
            </p>
            <div className={styles.centralLimit}>
              <FiDatabase />
              <p>
                <strong>O alcance da descentralização</strong>As imagens não
                precisam depender de um único servidor de arquivos. A interface
                web, a autenticação, os metadados e a descoberta das obras ainda
                usam serviços centrais.
              </p>
            </div>
          </div>
          <AvailabilityDiagram />
        </section>

        <section
          className={styles.participate}
          id="participar"
          aria-labelledby="participate-title"
        >
          <div className={styles.participateHeading}>
            <span className={styles.eyebrow}>04 · FORMAS DE PARTICIPAR</span>
            <h2 id="participate-title">
              Leia, publique ou ajude a manter páginas acessíveis.
            </h2>
          </div>
          <div className={styles.participationRows}>
            <article className={styles.readerRole}>
              <span className={styles.roleNumber}>01</span>
              <HiOutlineBookOpen className={styles.readerRoleIcon} />
              <div>
                <h3>Ler pelo site</h3>
                <p>
                  Explore o catálogo e leia no navegador. Não é necessário
                  instalar o aplicativo para ler.
                </p>
              </div>
              <Link href="/mangas">
                Explorar obras <FiArrowRight />
              </Link>
            </article>
            <article className={styles.scanRole}>
              <span className={styles.roleNumber}>02</span>
              <ImMakeGroup />
              <div>
                <h3>Administrar uma scan</h3>
                <p>
                  Use o Takop desktop para organizar o grupo, cadastrar obras e
                  publicar capítulos com as imagens.
                </p>
              </div>
              <Link href="/scans">
                Ver grupos e scans <FiArrowRight />
              </Link>
            </article>
            <article className={styles.collaboratorRole}>
              <span className={styles.roleNumber}>03</span>
              <CgDatabase className={styles.collaboratorIcon} />
              <div>
                <h3>Colaborar com armazenamento</h3>
                <p>
                  Ative a colaboração e defina um limite no Takop. O aplicativo
                  mantém localmente páginas solicitadas ao nó colaborador; ele
                  não baixa automaticamente tudo o que você lê.
                </p>
              </div>
              <span className={styles.desktopOnly}>
                <FiMonitor /> Requer o aplicativo desktop
              </span>
            </article>
          </div>
        </section>

        <section className={styles.rewards} aria-labelledby="rewards-title">
          <div className={styles.rewardsCopy}>
            <span className={styles.eyebrow}>05 · RECONHECIMENTO</span>
            <h2 id="rewards-title">Contribuição e itens cosméticos.</h2>
            <p>
              A proposta do produto é reconhecer contribuições confirmadas com
              pontos para itens cosméticos, como cores para o nome e molduras de
              perfil.
            </p>
            <p className={styles.rewardsStatus}>
              Limite atual do código: a OtaMart ainda é demonstrativa e não
              credita pontos por armazenamento. Saldo e preços exibidos nela
              também são de demonstração.
            </p>
            <Link href="/otamart">
              Conhecer a OtaMart <FiArrowRight />
            </Link>
          </div>
          <div className={styles.rewardMechanism}>
            <div className={styles.rewardStep}>
              <span>1</span>
              <FiHardDrive />
              <p>O Takop mantém arquivos solicitados no nó colaborador.</p>
            </div>
            <span className={styles.rewardConnector} aria-hidden="true">
              <FiArrowRight />
            </span>
            <div className={styles.rewardStep}>
              <span>2</span>
              <FiCheck />
              <p>Uma contribuição precisa ser reconhecida pelo sistema.</p>
            </div>
            <span className={styles.rewardConnector} aria-hidden="true">
              <FiArrowRight />
            </span>
            <div className={styles.rewardStep}>
              <span>3</span>
              <RiCopperCoinLine />
              <p>
                Pontos poderão ser usados em cosméticos quando o crédito estiver
                implementado.
              </p>
            </div>
            <div className={styles.cosmeticExamples}>
              <span>EXEMPLOS COSMÉTICOS</span>
              <b>Cor de nome</b>
              <b>Moldura de perfil</b>
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="final-title">
          <div>
            <span className={styles.eyebrow}>COMECE PELO CATÁLOGO</span>
            <h2 id="final-title">
              Escolha uma obra e veja o leitor em funcionamento.
            </h2>
          </div>
          <div className={styles.finalActions}>
            <Link className={styles.primaryButton} href="/mangas">
              Explorar mangas <FiArrowRight />
            </Link>
            <a className={styles.textAction} href="#participar">
              Ver formas de participação
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default InstitutionalHome;
