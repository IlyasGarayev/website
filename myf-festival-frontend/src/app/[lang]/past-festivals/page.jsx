'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../../../lib/useLanguage';
import { getLocalizedText } from '../../../../lib/utils';

export default function PastFestivalsPage() {
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
        console.error('Error fetching past festivals data:', error);
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('pastFestivals.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {language === 'az' ? 'Keçmiş festivalların xatirələri' : 
               language === 'en' ? 'Memories from past festivals' : 
               'Воспоминания о прошлых фестивалях'}
            </p>
          </div>

          {/* Past Festivals */}
          <div className="space-y-16">
            {data?.pastFestivals?.map((festival) => (
              <div key={festival.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {getLocalizedText(festival, 'title', language)}
                    </h2>
                    <span className="bg-festival-primary text-white px-4 py-2 rounded-full text-lg font-semibold">
                      {festival.year}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Description */}
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        {getLocalizedText(festival, 'description', language)}
                      </p>
                      
                      {/* Statistics */}
                      <div className="bg-festival-green-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {language === 'az' ? 'Statistika' : 
                           language === 'en' ? 'Statistics' : 
                           'Статистика'}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-festival-primary">
                              {festival.year === 2023 ? '15,000+' : '12,000+'}
                            </div>
                            <p className="text-sm text-gray-600">
                              {language === 'az' ? 'Ziyarətçi' : 
                               language === 'en' ? 'Visitors' : 
                               'Посетители'}
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-festival-primary">
                              {festival.year === 2023 ? '50+' : '40+'}
                            </div>
                            <p className="text-sm text-gray-600">
                              {language === 'az' ? 'Fəaliyyət' : 
                               language === 'en' ? 'Activities' : 
                               'Мероприятия'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Images */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === 'az' ? 'Fotolar' : 
                         language === 'en' ? 'Photos' : 
                         'Фотографии'}
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {festival.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image}
                              alt={`${getLocalizedText(festival, 'title', language)} - ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {(!data?.pastFestivals || data.pastFestivals.length === 0) && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {language === 'az' ? 'Keçmiş festival məlumatı yoxdur' : 
                 language === 'en' ? 'No past festival information' : 
                 'Нет информации о прошлых фестивалях'}
              </h3>
              <p className="text-gray-600">
                {language === 'az' ? 'Tezliklə əlavə ediləcək' : 
                 language === 'en' ? 'Coming soon' : 
                 'Скоро будет добавлено'}
              </p>
            </div>
          )}

          {/* Timeline */}
          <div className="mt-16 bg-festival-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === 'az' ? 'Festival Tarixi' : 
               language === 'en' ? 'Festival History' : 
               'История фестиваля'}
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-festival-primary"></div>
              
              <div className="space-y-8">
                {data?.pastFestivals?.map((festival, index) => (
                  <div key={festival.id} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {festival.year}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {getLocalizedText(festival, 'description', language).substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-6 h-6 bg-festival-primary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'az' ? 'Növbəti Festivalda Görüşək' : 
               language === 'en' ? 'See You at the Next Festival' : 
               'Увидимся на следующем фестивале'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'az' ? '2024 festivalı haqqında məlumat almaq üçün xəbərlər səhifəsini izləyin' : 
               language === 'en' ? 'Follow the news page for information about the 2024 festival' : 
               'Следите за страницей новостей для получения информации о фестивале 2024'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${language}/news`}
                className="inline-block bg-festival-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-festival-secondary transition-colors duration-200"
              >
                {language === 'az' ? 'Xəbərlər' : 
                 language === 'en' ? 'News' : 
                 'Новости'}
              </a>
              <a
                href={`/${language}/contact`}
                className="inline-block bg-white text-festival-primary border-2 border-festival-primary px-8 py-3 rounded-lg font-semibold hover:bg-festival-primary hover:text-white transition-colors duration-200"
              >
                {language === 'az' ? 'Əlaqə' : 
                 language === 'en' ? 'Contact' : 
                 'Контакт'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}