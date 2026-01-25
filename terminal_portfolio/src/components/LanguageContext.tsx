import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { DATA_EN, DATA_FR } from '../data';
import type { AppData } from '../types';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  data: AppData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state with a function to detect browser language on first render
  const [language, setLanguage] = useState<Language>(() => {
    // Check if code is running in browser environment
    if (typeof window !== 'undefined') {
      // Get browser language (e.g., 'fr-FR', 'en-US', 'fr')
      const browserLang = navigator.language || navigator.languages?.[0];

      // If language starts with 'fr', set default to French
      if (browserLang && browserLang.toLowerCase().startsWith('fr')) {
        return 'fr';
      }
    }
    // Default fallback to English
    return 'en';
  });

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  const data = language === 'en' ? DATA_EN : DATA_FR;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, data }}>
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
