// hooks/useLanguage.ts
import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window === 'undefined') return 'en'; // SSR fallback
    return localStorage.getItem('language') || navigator.language.split('-')[0] || 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const switchLanguage = (newLang: 'en' | 'hi') => {
    setLanguage(newLang);
  };

  return { language, switchLanguage };
};