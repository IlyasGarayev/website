export const languages = ['az', 'en', 'ru'];
export const defaultLanguage = 'az';

export function getLanguageFromPath(pathname) {
  const segments = pathname.split('/');
  const lang = segments[1];
  return languages.includes(lang) ? lang : defaultLanguage;
}

export function getLocalizedPath(pathname, newLang) {
  const segments = pathname.split('/');
  const currentLang = segments[1];
  
  if (languages.includes(currentLang)) {
    segments[1] = newLang;
  } else {
    segments.splice(1, 0, newLang);
  }
  
  return segments.join('/');
}

export function getLocalizedText(item, field, lang) {
  const key = `${field}_${lang}`;
  return item[key] || item[field] || '';
}

export function formatDate(dateString, lang = 'az') {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  const locales = {
    az: 'az-AZ',
    en: 'en-US',
    ru: 'ru-RU'
  };
  
  return date.toLocaleDateString(locales[lang] || locales.az, options);
}

export function paginate(items, page, itemsPerPage) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  return {
    items: items.slice(startIndex, endIndex),
    totalPages: Math.ceil(items.length / itemsPerPage),
    currentPage: page,
    totalItems: items.length
  };
}

export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}