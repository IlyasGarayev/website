'use client';

import Link from 'next/link';
import { useLanguage } from '../../lib/useLanguage';

export default function Footer() {
  const { language, t } = useLanguage();

  const quickLinks = [
    { key: 'home', href: `/${language}` },
    { key: 'about', href: `/${language}/about` },
    { key: 'program', href: `/${language}/program` },
    { key: 'news', href: `/${language}/news` },
    { key: 'contact', href: `/${language}/contact` }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'YouTube', href: '#', icon: 'youtube' }
  ];

  const getSocialIcon = (iconName) => {
    const icons = {
      facebook: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      instagram: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.33-1.297C4.198 14.81 3.708 13.659 3.708 12.362c0-1.297.49-2.448 1.297-3.33.881-.881 2.033-1.297 3.33-1.297 1.297 0 2.448.49 3.33 1.297.881.881 1.297 2.033 1.297 3.33 0 1.297-.49 2.448-1.297 3.33-.881.881-2.033 1.297-3.33 1.297zm7.072 0c-1.297 0-2.448-.49-3.33-1.297-.881-.881-1.297-2.033-1.297-3.33 0-1.297.49-2.448 1.297-3.33.881-.881 2.033-1.297 3.33-1.297 1.297 0 2.448.49 3.33 1.297.881.881 1.297 2.033 1.297 3.33 0 1.297-.49 2.448-1.297 3.33-.881.881-2.033 1.297-3.33 1.297z"/>
        </svg>
      ),
      twitter: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      youtube: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    };
    return icons[iconName] || null;
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Festival Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/placeholder-image.jpg"
                alt="Festival Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-bold text-xl">MYF</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.contact')}</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-medium">{t('contact.phone')}:</span><br />
                +994 XX XXX XX XX
              </p>
              <p>
                <span className="font-medium">{t('contact.email')}:</span><br />
                info@milliyaylaq.az
              </p>
              <p>
                <span className="font-medium">{t('contact.address')}:</span><br />
                {language === 'az' ? 'Bakı şəhəri, Nizami rayonu' : 
                 language === 'en' ? 'Baku city, Nizami district' : 
                 'город Баку, Низаминский район'}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Milli Yaylaq Festivalı. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
}