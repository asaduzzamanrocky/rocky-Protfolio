import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LangCode, TRANSLATIONS, Translations } from '../data/translations';

interface LanguageContextType {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: TRANSLATIONS['en'],
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<LangCode>('en');

  const setLang = (newLang: LangCode) => {
    setLangState(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
