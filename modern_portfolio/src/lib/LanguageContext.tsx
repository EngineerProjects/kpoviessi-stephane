"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "en" | "fr";

const STORAGE_KEY = "sk_portfolio_lang";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isEN: boolean;
  isFR: boolean;
  hasChosen: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  setLanguage: () => {},
  isEN: true,
  isFR: false,
  hasChosen: true,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  // Start as true to avoid SSR flash — set to false on client if no stored preference
  const [hasChosen, setHasChosen] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "en" || stored === "fr") {
      setLanguageState(stored);
      setHasChosen(true);
    } else {
      setHasChosen(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    setHasChosen(true);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage,
        isEN: language === "en",
        isFR: language === "fr",
        hasChosen,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
