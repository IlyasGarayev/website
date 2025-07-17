import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { lang } = useParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Check if we're on the homepage
  const isHomepage = location.pathname === `/${lang}`;
  
  // Handle scroll effect for transparent header on homepage
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };
    
    if (isHomepage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomepage]);
  
  // Navigation items
  const navItems = [
    { key: 'home', path: `/${lang}` },
    { key: 'about', path: `/${lang}/about` },
    { key: 'program', path: `/${lang}/program` },
    { key: 'news', path: `/${lang}/news` },
    { key: 'gallery', path: `/${lang}/gallery` },
    { key: 'partners', path: `/${lang}/partners` },
    { key: 'contact', path: `/${lang}/contact` },
  ];
  
  // Additional menu items for mobile
  const mobileOnlyItems = [
    { key: 'pastFestivals', path: `/${lang}/past-festivals` },
    { key: 'sponsorship', path: `/${lang}/sponsorship` },
    { key: 'ozYurdunuQur', path: `/${lang}/oz-yurdunu-qur` },
  ];
  
  const headerClass = isHomepage 
    ? (isScrolled ? 'navbar-solid' : 'navbar-transparent')
    : 'navbar-solid';
    
  const linkClass = isHomepage && !isScrolled ? 'navbar-link-white' : 'navbar-link';
  const brandClass = isHomepage && !isScrolled ? 'text-white' : 'navbar-brand';
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={`/${lang}`} className={`text-2xl font-bold transition-colors ${brandClass}`}>
            MYF
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`${linkClass} ${location.pathname === item.path ? 'text-festival-green-600' : ''}`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${linkClass} p-2`}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              {[...navItems, ...mobileOnlyItems].map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`block px-3 py-2 text-gray-700 hover:text-festival-green-600 font-medium ${
                    location.pathname === item.path ? 'text-festival-green-600 bg-festival-green-50' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;