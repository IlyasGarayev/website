'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getLanguageFromPath } from './utils';

export function useLanguage() {
  const pathname = usePathname();
  const [language, setLanguage] = useState('az');
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentLang = getLanguageFromPath(pathname);
    setLanguage(currentLang);
    loadTranslations(currentLang);
  }, [pathname]);

  const loadTranslations = async (lang) => {
    try {
      setLoading(true);
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Error loading translations:', error);
      setTranslations({});
    } finally {
      setLoading(false);
    }
  };

  const t = (key, defaultValue = '') => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    return value || defaultValue;
  };

  return {
    language,
    translations,
    t,
    loading
  };
}