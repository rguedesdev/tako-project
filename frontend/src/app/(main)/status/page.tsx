"use client";

import { useEffect, useState, type ReactNode } from "react";
import { FiDatabase, FiMonitor } from "react-icons/fi";
import { RiServerLine } from "react-icons/ri";

import styles from "./status.module.css";

type ComponentStatus = "operational" | "outage" | "unknown";
type HealthResponse = {
  status: "operational" | "degraded";
  checkedAt: string;
  components: { id: string; name: string; status: ComponentStatus }[];
};

const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql";
const HEALTH_URL = new URL("/health", GRAPHQL_URL.replace(/\/graphql\/?$/, "")).toString();

function StatusPage() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [checkFailed, setCheckFailed] = useState(false);

  useEffect(() => {
    let active = true;
    let controller: AbortController | null = null;

    async function checkHealth() {
      controller?.abort();
      const requestController = new AbortController();
      controller = requestController;
      try {
        const response = await fetch(HEALTH_URL, { cache: "no-store", signal: requestController.signal });
        const result = await response.json() as HealthResponse;
        if (!active) return;
        setHealth(result);
        setCheckFailed(false);
      } catch {
        if (!active || requestController.signal.aborted) return;
        setCheckFailed(true);
      }
    }

    void checkHealth();
    const interval = window.setInterval(() => void checkHealth(), 30_000);
    return () => {
      active = false;
      controller?.abort();
      window.clearInterval(interval);
    };
  }, []);

  const apiStatus = checkFailed ? "outage" : health?.components.find((item) => item.id === "api")?.status ?? "unknown";
  const databaseStatus = checkFailed ? "unknown" : health?.components.find((item) => item.id === "database")?.status ?? "unknown";
  const overallStatus = checkFailed ? "outage" : health?.status === "operational" ? "operational" : health ? "degraded" : "unknown";

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <section className={styles.panel} aria-labelledby="status-title">
          <div className={styles.heading}>
            <span className={styles.eyebrow}><RiServerLine aria-hidden="true" /> STATUS DO SISTEMA</span>
            <h1 id="status-title">Status do Tako Project</h1>
            <p>Acompanhe a disponibilidade dos serviços da plataforma. As informações são atualizadas a cada 30 segundos.</p>
          </div>

          <div className={`${styles.overall} ${styles[overallStatus]}`} role="status">
            <span className={styles.statusDot} />
            <strong>{overallStatus === "operational" ? "Todos os sistemas operacionais" : overallStatus === "degraded" ? "Instabilidade em um serviço" : overallStatus === "outage" ? "Falha ao consultar os serviços" : "Consultando os serviços…"}</strong>
          </div>

          <div className={styles.components}>
            <StatusRow icon={<FiMonitor />} name="Site" status="operational" />
            <StatusRow icon={<RiServerLine />} name="API" status={apiStatus} />
            <StatusRow icon={<FiDatabase />} name="Banco de dados" status={databaseStatus} />
          </div>

          <p className={styles.updatedAt}>
            {checkFailed
              ? "Não foi possível obter a atualização mais recente."
              : health?.checkedAt
                ? `Última verificação: ${new Date(health.checkedAt).toLocaleString("pt-BR")}`
                : "Verificando conexão com os serviços…"}
          </p>
        </section>
      </div>
    </main>
  );
}

function StatusRow({ icon, name, status }: { icon: ReactNode; name: string; status: ComponentStatus }) {
  const label = status === "operational" ? "Operacional" : status === "outage" ? "Indisponível" : "Não foi possível verificar";
  return (
    <div className={styles.component}>
      <span className={styles.componentIcon} aria-hidden="true">{icon}</span>
      <span className={styles.componentName}>{name}</span>
      <span className={`${styles.componentStatus} ${styles[status]}`}><span className={styles.statusDot} />{label}</span>
    </div>
  );
}

export default StatusPage;
