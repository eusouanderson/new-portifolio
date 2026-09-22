"use client";

import { texts as allTexts } from "@/config/constants";
import { Texts } from "@/types/texts";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

type SupportedLanguage = "pt-br" | "en";

interface LanguageContextType {
  language: SupportedLanguage;
  texts: Texts;
  setLanguage: (lang: SupportedLanguage) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({
  initialLanguage = "pt-br",
  children,
}: {
  initialLanguage?: string;
  children: ReactNode;
}) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    if (initialLanguage === "en" || initialLanguage === "pt-br") {
      return initialLanguage;
    }
    return "pt-br";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.replace(/^\//, "");
      if (path === "en" || path === "pt-br") {
        setLanguageState(path);
      } else {
        const saved = localStorage.getItem("portfolio_lang");
        if (saved === "en" || saved === "pt-br") {
          setLanguageState(saved);
        }
      }
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
      window.history.pushState(null, "", "/" + lang);
    }
  };

  const texts = allTexts[language] || allTexts["pt-br"];

  return (
    <LanguageContext.Provider value={{ language, texts, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

