"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/app/(main)/loading.module.css";

export function NavigationLoading() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const finish = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setLoading(false), 120);
  }, []);

  useEffect(() => {
    finish();
  }, [pathname, finish]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.target || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;

      setLoading(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setLoading(false), 10000);
    }

    function handlePopState() {
      setLoading(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setLoading(false), 10000);
    }

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handlePopState);
    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.loading} role="status" aria-live="polite" aria-label="Carregando página">
      <span className={styles.spinner} aria-hidden="true" />
    </div>
  );
}
