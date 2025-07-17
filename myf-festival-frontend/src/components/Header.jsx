'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../lib/useLanguage';
import { getLocalizedPath } from '../../lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: `/${language}` },
    { key: 'about', href: `/${language}/about` },
    { key: 'program', href: `/${language}/program` },
    { key: 'partners', href: `/${language}/partners` },
    { key: 'sponsorship', href: `/${language}/sponsorship` },
    { key: 'pastFestivals', href: `/${language}/past-festivals` },
    { key: 'gallery', href: `/${language}/gallery` },
    { key: 'news', href: `/${language}/news` },
    { key: 'ozYurdunuQur', href: `/${language}/oz-yurdunu-qur` },
    { key: 'contact', href: `/${language}/contact` }
  ];

  const isActive = (href) => {
    if (href === `/${language}`) {
      return pathname === `/${language}` || pathname === `/${language}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${language}`} className="flex items-center space-x-2">
            <img
              src="/images/placeholder-image.jpg"
              alt="Festival Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className={`font-bold text-xl ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              MYF
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-festival-primary'
                    : isScrolled
                    ? 'text-gray-700 hover:text-festival-primary'
                    : 'text-white hover:text-festival-accent'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-festival-primary bg-festival-green-50'
                      : 'text-gray-700 hover:text-festival-primary hover:bg-gray-50'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}