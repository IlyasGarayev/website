import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  
  const quickLinks = [
    { key: 'home', path: `/${lang}` },
    { key: 'about', path: `/${lang}/about` },
    { key: 'program', path: `/${lang}/program` },
    { key: 'news', path: `/${lang}/news` },
    { key: 'gallery', path: `/${lang}/gallery` },
    { key: 'partners', path: `/${lang}/partners` },
    { key: 'contact', path: `/${lang}/contact` },
    { key: 'pastFestivals', path: `/${lang}/past-festivals` },
    { key: 'sponsorship', path: `/${lang}/sponsorship` },
  ];
  
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/myf', icon: 'facebook' },
    { name: 'Instagram', url: 'https://instagram.com/myf', icon: 'instagram' },
    { name: 'Twitter', url: 'https://twitter.com/myf', icon: 'twitter' },
  ];
  
  const getSocialIcon = (iconName) => {
    const icons = {
      facebook: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-6.541c-.315 0-.612-.122-.833-.343-.221-.221-.343-.518-.343-.833s.122-.612.343-.833c.221-.221.518-.343.833-.343s.612.122.833.343c.221.221.343.518.343.833s-.122.612-.343.833c-.221.221-.518.343-.833.343z"/>
        </svg>
      ),
      twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    };
    
    return icons[iconName] || null;
  };
  
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Festival Info */}
        <div>
          <h3 className="footer-title">{t('footer.aboutFestival')}</h3>
          <p className="text-gray-300 mb-4">
            {t('hero.subtitle')}
          </p>
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="font-semibold">Email:</span> info@myf.az
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Tel:</span> +994 12 345 67 89
            </p>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="footer-title">{t('footer.quickLinks')}</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.key}>
                <Link to={link.path} className="footer-link">
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Social Media & Contact */}
        <div>
          <h3 className="footer-title">{t('footer.followUs')}</h3>
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-festival-green-400 transition-colors"
                aria-label={social.name}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
          
          <div className="text-gray-300">
            <p className="mb-2">Bakı, Azərbaycan</p>
            <p className="text-sm">
              © 2024 Milli Yaylaq Festivalı. {t('footer.allRightsReserved')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;