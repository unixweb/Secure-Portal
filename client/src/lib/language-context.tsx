import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => any; // Helper for retrieving nested translations could be added here, but for now just state
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  // Optional: Persist to localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('safedocs-lang') as Language;
    if (savedLang && (savedLang === 'de' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('safedocs-lang', lang);
  };

  const toggleLanguage = () => {
    handleSetLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage, t: () => {} }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
