"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { graphqlRequest } from "@/lib/graphql";
import type { SocialMedias } from "@/lib/catalog";
import { MediaImage } from "@/components/MediaImage/page";
import styles from "./claims.module.css";

type GroupClaim = {
  id: string;
  groupID: string;
  groupName: string;
  groupImage?: string | null;
  claimantName: string;
  claimantUsername: string;
  contactEmail: string;
  socialMedias?: SocialMedias | null;
  proof: string;
  createdAt: string;
};

const SOCIAL_LABELS: Record<string, string> = {
  site: "Site", instagram: "Instagram", discord: "Discord", telegram: "Telegram", x: "X / Twitter",
  facebook: "Facebook", youtube: "YouTube", tiktok: "TikTok", bluesky: "Bluesky", orkut: "Orkut",
};

function ClaimQueue() {
  const { authenticatedUser, authLoading, authToken } = useUser();
  const [claims, setClaims] = useState<GroupClaim[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [busyID, setBusyID] = useState("");
  const [notes, setNotes] = useState<Record<string, string>>({});

  const loadClaims = useCallback(async () => {
    if (!authToken || authenticatedUser?.accountType !== "HADES") return;
    setLoading(true);
    setError("");
    try {
      const data = await graphqlRequest<{ groupClaims: GroupClaim[] }>(
        `query GroupClaims {
          groupClaims {
            id groupID groupName groupImage claimantName claimantUsername contactEmail proof createdAt
            socialMedias { site discord telegram x instagram facebook youtube tiktok bluesky orkut }
          }
        }`,
        {},
        authToken,
      );
      setClaims(data.groupClaims);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Não foi possível carregar as reivindicações.");
    } finally {
      setLoading(false);
    }
  }, [authToken, authenticatedUser?.accountType]);

  useEffect(() => { void loadClaims(); }, [loadClaims]);

  async function review(claim: GroupClaim, approve: boolean) {
    if (!authToken || busyID) return;
    setBusyID(claim.id);
    setError("");
    setMessage("");
    try {
      await graphqlRequest<{ reviewGroupClaim: { id: string } }>(
        `mutation ReviewGroupClaim($id: ID!, $approve: Boolean!, $note: String) {
          reviewGroupClaim(id: $id, approve: $approve, note: $note) { id }
        }`,
        { id: claim.id, approve, note: notes[claim.id]?.trim() || null },
        authToken,
      );
      setClaims((current) => current.filter((item) => item.id !== claim.id));
      setMessage(approve ? `A reivindicação de ${claim.groupName} foi aprovada; o grupo agora pertence a @${claim.claimantUsername}.` : `A reivindicação de ${claim.groupName} foi recusada.`);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Não foi possível revisar esta reivindicação.");
    } finally {
      setBusyID("");
    }
  }

  if (authLoading) return <main className={styles.page}><p className={styles.notice}>Verificando acesso…</p></main>;
  if (!authenticatedUser || authenticatedUser.accountType !== "HADES") {
    return <main className={styles.page}><section className={styles.restricted}><h1>Acesso restrito</h1><p>Esta área está disponível apenas para administradores.</p><Link href="/">Voltar ao início</Link></section></main>;
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div><span className={styles.eyebrow}>PAINEL ADMINISTRATIVO</span><h1>Reivindicações de grupos</h1><p>Analise as provas enviadas e decida quem ficará responsável pela scan.</p></div>
        <button type="button" onClick={() => void loadClaims()} disabled={loading}>{loading ? "Atualizando…" : "Atualizar"}</button>
      </header>
      {message && <p className={styles.success} role="status">{message}</p>}
      {error && <p className={styles.error} role="alert">{error}</p>}
      {loading ? <p className={styles.notice}>Carregando solicitações…</p> : claims.length === 0 ? <section className={styles.empty}><h2>Nenhuma solicitação pendente</h2><p>Novas reivindicações aparecerão aqui para análise.</p></section> : (
        <section className={styles.queue} aria-label="Solicitações pendentes">
          {claims.map((claim) => (
            <article className={styles.card} key={claim.id}>
              <header className={styles.cardHeader}>
                <div className={styles.groupIdentity}>
                  <MediaImage className={styles.groupMark} source={claim.groupImage} fallback="/group-placeholder.svg" alt="" />
                  <div><span className={styles.eyebrow}>SCAN</span><h2><Link href={`/scan/${claim.groupID}`}>{claim.groupName}</Link></h2><span className={styles.subheading}>Solicitação de reivindicação</span></div>
                </div>
                <div className={styles.claimMeta}><span className={styles.pendingBadge}><span aria-hidden="true" />Pendente</span><time dateTime={claim.createdAt}>Recebida em {new Date(claim.createdAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}</time></div>
              </header>
              <div className={styles.applicant}>
                <span className={styles.applicantMark} aria-hidden="true">{claim.claimantName.slice(0, 1).toLocaleUpperCase("pt-BR")}</span>
                <div className={styles.applicantIdentity}><span className={styles.sectionLabel}>SOLICITANTE</span><strong>{claim.claimantName}</strong><Link href={`/member/${claim.claimantUsername}`}>@{claim.claimantUsername}</Link></div>
                <a className={styles.contact} href={`mailto:${claim.contactEmail}`}><span className={styles.sectionLabel}>E-MAIL DE CONTATO</span><span>{claim.contactEmail}</span></a>
              </div>
              <section className={styles.proof}><h3>Provas e contexto</h3><p>{claim.proof}</p></section>
              {!!Object.values(claim.socialMedias ?? {}).filter(Boolean).length && <section className={styles.socials}><h3>Redes vinculadas</h3><div>{Object.entries(claim.socialMedias ?? {}).filter((entry): entry is [string, string] => Boolean(entry[1])).map(([key, value]) => <a key={key} href={value} target="_blank" rel="noreferrer">{SOCIAL_LABELS[key] ?? key}<span aria-hidden="true">↗</span></a>)}</div></section>}
              <footer className={styles.reviewPanel}>
                <label className={styles.note}><span>Nota administrativa <small>Opcional</small></span><textarea value={notes[claim.id] ?? ""} maxLength={1000} rows={2} onChange={(event) => setNotes((current) => ({ ...current, [claim.id]: event.target.value }))} placeholder="Adicione um contexto à decisão…" /></label>
                <div className={styles.actions}>
                  <button type="button" className={styles.reject} disabled={Boolean(busyID)} onClick={() => void review(claim, false)}>{busyID === claim.id ? "Salvando…" : "Recusar"}</button>
                  <button type="button" className={styles.approve} disabled={Boolean(busyID)} title="A aprovação transfere a propriedade do grupo ao solicitante." onClick={() => void review(claim, true)}>{busyID === claim.id ? "Salvando…" : "Aprovar reivindicação"}</button>
                </div>
                <p className={styles.transferHint}>Ao aprovar, a propriedade da scan será transferida para o solicitante.</p>
              </footer>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default ClaimQueue;
