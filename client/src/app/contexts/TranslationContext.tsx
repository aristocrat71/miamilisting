"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

interface TranslationContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  translateText: (text: string) => Promise<string>;
  translatedTexts: Record<string, string>;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

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
  const [translatedTexts, setTranslatedTexts] = useState<Record<string, string>>({});

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const translateText = async (text: string): Promise<string> => {
    if (currentLanguage === 'en') {
      return text; // No translation needed for English
    }

    // Check if we already have this translation cached
    const cacheKey = `${text}_${currentLanguage}`;
    if (translatedTexts[cacheKey]) {
      return translatedTexts[cacheKey];
    }

    try {
      // For now, we'll use a simple mapping approach
      // In a real implementation, you'd use the Google Translate API
      const translations: Record<string, Record<string, string>> = {
        'es': {
          'Home': 'Inicio',
          'About': 'Acerca de',
          'Listings': 'Listados',
          'Resources': 'Recursos',
          'Contact': 'Contacto',
          'Login': 'Iniciar sesión',
          'Translate': 'Traducir',
          'English': 'Inglés',
          'Spanish': 'Español',
          'Haitian Creole': 'Criollo Haitiano',
          '311': '311',
          'GovMeetings': 'Reuniones del Gobierno',
          'Calendar': 'Calendario',
          'Miami-Dade County': 'Condado de Miami-Dade',
          'MENU': 'MENÚ',
          'Zipcode': 'Código Postal',
          'District': 'Distrito',
          'Type of Project': 'Tipo de Proyecto',
          'Housing Type': 'Tipo de Vivienda',
          'Reset': 'Restablecer',
          'Search by Filter': 'Buscar por Filtro',
          'Showing': 'Mostrando',
          'of': 'de',
          'listings': 'listados',
          'Enter Zipcode Number': 'Ingrese Número de Código Postal',
          'Select District': 'Seleccionar Distrito',
          'Select Option': 'Seleccionar Opción',
          'All': 'Todos',
          'Family': 'Familiar',
          'Elderly': 'Ancianos',
          'Foster Care Facility': 'Instalación de Cuidado Temporal',
          'Homeless': 'Sin Hogar',
          'Special Needs': 'Necesidades Especiales',
          'Public': 'Público',
          'Private': 'Privado',
          'No. of Units': 'Número de Unidades',
          'Type of Project:': 'Tipo de Proyecto:',
          'Housing Type:': 'Tipo de Vivienda:'
        },
        'ht': {
          'Home': 'Kay',
          'About': 'Sou',
          'Listings': 'Lis',
          'Resources': 'Resous',
          'Contact': 'Kontak',
          'Login': 'Konekte',
          'Translate': 'Tradwi',
          'English': 'Angle',
          'Spanish': 'Panyòl',
          'Haitian Creole': 'Kreyòl Ayisyen',
          '311': '311',
          'GovMeetings': 'Reyinyon Gouvènman',
          'Calendar': 'Kalandriye',
          'Miami-Dade County': 'Konte Miami-Dade',
          'MENU': 'MENI',
          'Zipcode': 'Kòd Postal',
          'District': 'Distri',
          'Type of Project': 'Kalite Pwojè',
          'Housing Type': 'Kalite Loje',
          'Reset': 'Reyajiste',
          'Search by Filter': 'Chèche pa Filtè',
          'Showing': 'Montre',
          'of': 'nan',
          'listings': 'lis',
          'Enter Zipcode Number': 'Antre Nimewo Kòd Postal',
          'Select District': 'Chwazi Distri',
          'Select Option': 'Chwazi Opsyon',
          'All': 'Tout',
          'Family': 'Famni',
          'Elderly': 'Granmoun',
          'Foster Care Facility': 'Enstitisyon Swen Tempora',
          'Homeless': 'San Kay',
          'Special Needs': 'Beso Espesyal',
          'Public': 'Piblik',
          'Private': 'Prive',
          'No. of Units': 'Nimewo Inite',
          'Type of Project:': 'Kalite Pwojè:',
          'Housing Type:': 'Kalite Loje:'
        }
      };

      const translatedText = translations[currentLanguage]?.[text] || text;
      
      // Cache the translation
      setTranslatedTexts(prev => ({
        ...prev,
        [cacheKey]: translatedText
      }));

      return translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text if translation fails
    }
  };

  return (
    <TranslationContext.Provider value={{
      currentLanguage,
      setLanguage,
      translateText,
      translatedTexts
    }}>
      {children}
    </TranslationContext.Provider>
  );
}; 