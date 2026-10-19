"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RiAdvertisementLine } from "react-icons/ri";
import styles from "./adblocknotice.module.css";

function AdBlockNotice() {
  const pathname = usePathname();
  const [isBlocked, setIsBlocked] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const checkForBlocker = useCallback(() => {
    const adSlot = document.getElementById("tako-ad-slot");
    if (!adSlot) {
      setIsBlocked(false);
      return;
    }
    const style = window.getComputedStyle(adSlot);
    const blocked = !adSlot.isConnected
      || adSlot.offsetHeight === 0
      || adSlot.offsetWidth === 0
      || style.display === "none"
      || style.visibility === "hidden"
      || style.opacity === "0";
    setIsBlocked(blocked);
  }, []);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("adblock-preview") === "1") {
      setIsPreview(true);
      setIsBlocked(true);
      return;
    }

    const timeout = window.setTimeout(checkForBlocker, 500);
    return () => window.clearTimeout(timeout);
  }, [checkForBlocker, pathname]);

  function closePreview() {
    setIsBlocked(false);
  }

  if (!isBlocked) return null;

  return (
    <div className={styles.backdrop}>
      <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="adblock-title" aria-describedby="adblock-message">
        <span className={styles.icon} aria-hidden="true"><RiAdvertisementLine /></span>
        <h2 id="adblock-title">Detectamos o uso de um bloqueador de anúncios</h2>
        <p id="adblock-message">
          Para continuar usando o Tako, desative o bloqueador de anúncios neste site. Os anúncios ajudam a manter a plataforma ativa e gratuita.
        </p>
        <button type="button" onClick={isPreview ? closePreview : checkForBlocker}>
          {isPreview ? "Fechar prévia" : "Já desativei, verificar novamente"}
        </button>
      </section>
    </div>
  );
}

export { AdBlockNotice };
