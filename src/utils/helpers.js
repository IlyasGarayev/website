/**
 * Utility helper functions for the festival website
 */

/**
 * Format date string for display
 * @param {string} dateString - ISO date string
 * @param {string} locale - Locale for formatting (az, en, ru)
 * @returns {string} - Formatted date string
 */
export const formatDate = (dateString, locale = 'az') => {
  const date = new Date(dateString);
  
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  const localeMap = {
    az: 'az-AZ',
    en: 'en-US',
    ru: 'ru-RU',
  };
  
  return date.toLocaleDateString(localeMap[locale] || 'az-AZ', options);
};

/**
 * Format time string for display
 * @param {string} timeString - Time string in HH:MM format
 * @returns {string} - Formatted time string
 */
export const formatTime = (timeString) => {
  return timeString;
};

/**
 * Get localized content from an object
 * @param {Object} obj - Object containing localized content
 * @param {string} field - Field name (without language suffix)
 * @param {string} lang - Language code (az, en, ru)
 * @returns {string} - Localized content
 */
export const getLocalizedContent = (obj, field, lang = 'az') => {
  const key = `${field}_${lang}`;
  return obj[key] || obj[`${field}_az`] || '';
};

/**
 * Generate slug from title
 * @param {string} title - Title to convert to slug
 * @returns {string} - Generated slug
 */
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Format number with locale-specific formatting
 * @param {number} num - Number to format
 * @param {string} locale - Locale for formatting
 * @returns {string} - Formatted number
 */
export const formatNumber = (num, locale = 'az') => {
  const localeMap = {
    az: 'az-AZ',
    en: 'en-US',
    ru: 'ru-RU',
  };
  
  return new Intl.NumberFormat(localeMap[locale] || 'az-AZ').format(num);
};

/**
 * Check if a URL is external
 * @param {string} url - URL to check
 * @returns {boolean} - True if external, false if internal
 */
export const isExternalUrl = (url) => {
  return url.startsWith('http://') || url.startsWith('https://');
};

/**
 * Generate pagination info
 * @param {number} currentPage - Current page number
 * @param {number} totalPages - Total number of pages
 * @param {number} maxVisible - Maximum number of visible page buttons
 * @returns {Object} - Pagination info object
 */
export const generatePaginationInfo = (currentPage, totalPages, maxVisible = 5) => {
  const pages = [];
  const halfVisible = Math.floor(maxVisible / 2);
  
  let startPage = Math.max(1, currentPage - halfVisible);
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  
  // Adjust start page if we're near the end
  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  return {
    pages,
    showPrevious: currentPage > 1,
    showNext: currentPage < totalPages,
    showFirst: startPage > 1,
    showLast: endPage < totalPages,
  };
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Get language-specific route
 * @param {string} currentPath - Current path
 * @param {string} newLang - New language code
 * @returns {string} - New path with language
 */
export const getLanguageRoute = (currentPath, newLang) => {
  const pathParts = currentPath.split('/');
  const supportedLangs = ['az', 'en', 'ru'];
  
  // Check if first part is a language code
  if (pathParts[1] && supportedLangs.includes(pathParts[1])) {
    pathParts[1] = newLang;
  } else {
    pathParts.splice(1, 0, newLang);
  }
  
  return pathParts.join('/');
};

/**
 * Extract language from path
 * @param {string} path - Path to extract language from
 * @returns {string} - Language code or default 'az'
 */
export const extractLanguageFromPath = (path) => {
  const pathParts = path.split('/');
  const supportedLangs = ['az', 'en', 'ru'];
  
  if (pathParts[1] && supportedLangs.includes(pathParts[1])) {
    return pathParts[1];
  }
  
  return 'az';
};

/**
 * Scroll to element smoothly
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - Offset from top in pixels
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} - True if in viewport
 */
export const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Get image placeholder with specific dimensions
 * @param {number} width - Width in pixels
 * @param {number} height - Height in pixels
 * @param {string} text - Text to display on placeholder
 * @returns {string} - Placeholder image URL
 */
export const getImagePlaceholder = (width = 400, height = 300, text = 'Image') => {
  return `https://via.placeholder.com/${width}x${height}/16a34a/ffffff?text=${encodeURIComponent(text)}`;
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format (basic validation)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Promise that resolves to true if successful
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      return true;
    } catch (err) {
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

export default {
  formatDate,
  formatTime,
  getLocalizedContent,
  generateSlug,
  truncateText,
  formatNumber,
  isExternalUrl,
  generatePaginationInfo,
  debounce,
  throttle,
  getLanguageRoute,
  extractLanguageFromPath,
  scrollToElement,
  isElementInViewport,
  getImagePlaceholder,
  validateEmail,
  validatePhone,
  copyToClipboard,
};