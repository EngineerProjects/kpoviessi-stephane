"use client";

import React, { createContext, useContext, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Initialize i18n

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n, t } = useTranslation();

  const setLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
  }, [i18n]);

  useEffect(() => {
    // Initialize with browser language or default to 'en'
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['en', 'fr'];
    const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'en';
    
    if (!i18n.language) {
      setLanguage(defaultLang);
    }
  }, [i18n, setLanguage]);

  return (
    <LanguageContext.Provider value={{
      language: i18n.language,
      setLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};