'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../../../lib/useLanguage';

export default function PartnersPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { language, t } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/public/festival');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching partners data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredPartners = data?.partners?.filter(partner => 
    selectedCategory === 'all' || partner.category === selectedCategory
  ) || [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-festival-primary mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('partners.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'az' ? 'Bizə dəstək verən tərəfdaşlarımız' : 
               language === 'en' ? 'Our partners who support us' : 
               'Наши партнеры, которые нас поддерживают'}
            </p>
            
            <Link
              href={`/${language}/sponsorship`}
              className="inline-block bg-festival-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-festival-secondary transition-colors duration-200"
            >
              {t('sections.partners.sponsorship')}
            </Link>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-festival-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t('partners.all')}
            </button>
            <button
              onClick={() => setSelectedCategory('main')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'main'
                  ? 'bg-festival-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t('partners.main')}
            </button>
            <button
              onClick={() => setSelectedCategory('media')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'media'
                  ? 'bg-festival-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t('partners.media')}
            </button>
            <button
              onClick={() => setSelectedCategory('sponsors')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'sponsors'
                  ? 'bg-festival-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t('partners.sponsors')}
            </button>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-24 object-contain mx-auto group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-festival-primary transition-colors duration-200">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 capitalize">
                    {partner.category === 'main' ? 
                      (language === 'az' ? 'Əsas Tərəfdaş' : language === 'en' ? 'Main Partner' : 'Основной партнер') :
                     partner.category === 'media' ? 
                      (language === 'az' ? 'Media Tərəfdaş' : language === 'en' ? 'Media Partner' : 'Медиа партнер') :
                     partner.category === 'sponsors' ? 
                      (language === 'az' ? 'Sponsor' : language === 'en' ? 'Sponsor' : 'Спонсор') :
                      partner.category
                    }
                  </p>
                </a>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {language === 'az' ? 'Tərəfdaş tapılmadı' : 
                 language === 'en' ? 'No partners found' : 
                 'Партнеры не найдены'}
              </h3>
              <p className="text-gray-600">
                {language === 'az' ? 'Bu kateqoriyada tərəfdaş yoxdur' : 
                 language === 'en' ? 'No partners in this category' : 
                 'Нет партнеров в этой категории'}
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-festival-green-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'az' ? 'Tərəfdaş olmaq istəyirsiniz?' : 
               language === 'en' ? 'Want to become a partner?' : 
               'Хотите стать партнером?'}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'az' ? 'Bizə qoşulun və festivalın bir hissəsi olun' : 
               language === 'en' ? 'Join us and be part of the festival' : 
               'Присоединяйтесь к нам и станьте частью фестиваля'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${language}/sponsorship`}
                className="inline-block bg-festival-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-festival-secondary transition-colors duration-200"
              >
                {language === 'az' ? 'Sponsor Ol' : 
                 language === 'en' ? 'Become a Sponsor' : 
                 'Стать спонсором'}
              </Link>
              <Link
                href={`/${language}/contact`}
                className="inline-block bg-white text-festival-primary border-2 border-festival-primary px-8 py-3 rounded-lg font-semibold hover:bg-festival-primary hover:text-white transition-colors duration-200"
              >
                {language === 'az' ? 'Əlaqə' : 
                 language === 'en' ? 'Contact Us' : 
                 'Связаться с нами'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}