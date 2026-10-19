"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type ToastKind = "success" | "error" | "info";
type ToastItem = { id: number; kind: ToastKind; message: string };
type ToastContextValue = {
  showToast: (message: string, kind?: ToastKind) => void;
  showError: (error: unknown, fallback?: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

function readableError(error: unknown, fallback: string) {
  let message = error instanceof Error ? error.message : typeof error === "string" ? error : "";
  try {
    const parsed = JSON.parse(message);
    message = parsed?.response?.errors?.[0]?.message ?? parsed?.errors?.[0]?.message ?? parsed?.message ?? message;
  } catch { /* The error is already plain text. */ }
  return message.trim() || fallback;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<ToastItem | null>(null);
  const showToast = useCallback((message: string, kind: ToastKind = "info") => {
    setToast({ id: Date.now(), kind, message });
  }, []);
  const showError = useCallback((error: unknown, fallback = "Algo deu errado. Tente novamente.") => {
    showToast(readableError(error, fallback), "error");
  }, [showToast]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast((current) => current?.id === toast.id ? null : current), 5500);
    return () => window.clearTimeout(timer);
  }, [toast]);

  return (
    <ToastContext.Provider value={{ showToast, showError }}>
      {children}
      {toast && <div className={`appToast appToast${toast.kind}`} role={toast.kind === "error" ? "alert" : "status"}>
        <span className="appToastIcon" aria-hidden="true">{toast.kind === "error" ? "!" : toast.kind === "success" ? "✓" : "i"}</span>
        <p>{toast.message}</p>
        <button type="button" aria-label="Fechar notificação" onClick={() => setToast(null)}>×</button>
      </div>}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast precisa estar dentro de ToastProvider.");
  return context;
}
