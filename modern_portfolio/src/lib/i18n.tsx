"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import type { L, Lang } from "@/data/site";

const KEY = "sk_lang";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (v: L) => string;
}

const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (v) => v.en });

const listeners = new Set<() => void>();

function readLang(): Lang {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === "en" || stored === "fr") return stored;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Server and first client render use "en"; the stored or browser language applies right after hydration.
  const lang = useSyncExternalStore(subscribe, readLang, () => "en" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    try {
      localStorage.setItem(KEY, l);
    } catch {}
    listeners.forEach((cb) => cb());
  }, []);

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: (v) => v[lang] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
