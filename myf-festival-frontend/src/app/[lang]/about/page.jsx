'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../../../lib/useLanguage';
import { getLocalizedText } from '../../../../lib/utils';

export default function AboutPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/public/festival');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching festival data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h1>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {getLocalizedText(data?.about, 'description', language)}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={data?.about?.image || '/images/placeholder-image.jpg'}
                alt={getLocalizedText(data?.about, 'title', language)}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-festival-primary bg-opacity-20 rounded-lg" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-festival-green-50 rounded-lg">
              <div className="w-16 h-16 bg-festival-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {language === 'az' ? 'Musiqi' : language === 'en' ? 'Music' : 'Музыка'}
              </h3>
              <p className="text-gray-600">
                {language === 'az' ? 'Ənənəvi və müasir musiqi' : 
                 language === 'en' ? 'Traditional and modern music' : 
                 'Традиционная и современная музыка'}
              </p>
            </div>

            <div className="text-center p-6 bg-festival-green-50 rounded-lg">
              <div className="w-16 h-16 bg-festival-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {language === 'az' ? 'Sənətkarlıq' : language === 'en' ? 'Handicrafts' : 'Ремесла'}
              </h3>
              <p className="text-gray-600">
                {language === 'az' ? 'Ənənəvi sənət növləri' : 
                 language === 'en' ? 'Traditional art forms' : 
                 'Традиционные виды искусства'}
              </p>
            </div>

            <div className="text-center p-6 bg-festival-green-50 rounded-lg">
              <div className="w-16 h-16 bg-festival-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {language === 'az' ? 'İcma' : language === 'en' ? 'Community' : 'Сообщество'}
              </h3>
              <p className="text-gray-600">
                {language === 'az' ? 'Mədəni birlik və həmrəylik' : 
                 language === 'en' ? 'Cultural unity and solidarity' : 
                 'Культурное единство и солидарность'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}