"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

// Import translation files
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import htTranslations from '../translations/ht.json';
import { migrationMap } from '../translations/migration';

interface TranslationContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string, fallback?: string) => string;
  translateText: (text: string) => Promise<string>; // Keep for backward compatibility
  translations: Record<string, any>;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Centralized translations object
const translations = {
  en: enTranslations,
  es: esTranslations,
  ht: htTranslations
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: React.ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  // New translation function that uses dot notation for nested keys
  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // If key not found, try English as fallback
        if (currentLanguage !== 'en') {
          let englishValue: any = translations.en;
          for (const k of keys) {
            if (englishValue && typeof englishValue === 'object' && k in englishValue) {
              englishValue = englishValue[k];
            } else {
              englishValue = null;
              break;
            }
          }
          return englishValue || fallback || key;
        }
        return fallback || key;
      }
    }
    
    return typeof value === 'string' ? value : fallback || key;
  };

  // Backward compatibility function for existing components
  const translateText = async (text: string): Promise<string> => {
    const key = migrationMap[text];
    if (key) {
      return t(key, text);
    }
    return text;
  };

  return (
    <TranslationContext.Provider value={{
      currentLanguage,
      setLanguage,
      t,
      translateText,
      translations: translations[currentLanguage as keyof typeof translations]
    }}>
      {children}
    </TranslationContext.Provider>
  );
}; 