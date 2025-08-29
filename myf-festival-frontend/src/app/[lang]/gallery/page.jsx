'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../../../lib/useLanguage';
import { getLocalizedText } from '../../../../lib/utils';

export default function GalleryPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/public/gallery');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
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
              {t('gallery.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {language === 'az' ? 'Festival anlarını kəşf edin' : 
               language === 'en' ? 'Explore festival moments' : 
               'Исследуйте моменты фестиваля'}
            </p>
          </div>

          {/* Gallery Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.sections?.map((section) => (
              <Link
                key={section.id}
                href={`/${language}/gallery/${section.id}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={section.coverImage}
                    alt={getLocalizedText(section, 'title', language)}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      section.type === 'photos' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {section.type === 'photos' ? 
                        (language === 'az' ? 'Foto' : language === 'en' ? 'Photos' : 'Фото') :
                        (language === 'az' ? 'Video' : language === 'en' ? 'Videos' : 'Видео')
                      }
                    </span>
                  </div>
                  
                  {/* Item Count */}
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                    {section.itemCount} {language === 'az' ? 'element' : language === 'en' ? 'items' : 'элементов'}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-festival-primary transition-colors duration-200">
                    {getLocalizedText(section, 'title', language)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'az' ? 'Kolleksiyaya baxın' : 
                     language === 'en' ? 'View collection' : 
                     'Просмотреть коллекцию'} →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {(!data?.sections || data.sections.length === 0) && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {language === 'az' ? 'Qalereya bölməsi yoxdur' : 
                 language === 'en' ? 'No gallery sections' : 
                 'Нет разделов галереи'}
              </h3>
              <p className="text-gray-600">
                {language === 'az' ? 'Tezliklə əlavə ediləcək' : 
                 language === 'en' ? 'Coming soon' : 
                 'Скоро будет добавлено'}
              </p>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-16 bg-festival-green-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'az' ? 'Öz Fotolarınızı Paylaşın' : 
                 language === 'en' ? 'Share Your Photos' : 
                 'Поделитесь своими фотографиями'}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === 'az' ? 'Festivaldan çəkdiyiniz fotoları bizə göndərin və qalereya əlavə edilsin' : 
                 language === 'en' ? 'Send us your festival photos to be added to the gallery' : 
                 'Отправьте нам свои фотографии с фестиваля для добавления в галерею'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${language}/contact`}
                  className="inline-block bg-festival-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-festival-secondary transition-colors duration-200"
                >
                  {language === 'az' ? 'Əlaqə' : 
                   language === 'en' ? 'Contact Us' : 
                   'Связаться с нами'}
                </Link>
                <a
                  href="mailto:info@milliyaylaq.az"
                  className="inline-block bg-white text-festival-primary border-2 border-festival-primary px-8 py-3 rounded-lg font-semibold hover:bg-festival-primary hover:text-white transition-colors duration-200"
                >
                  {language === 'az' ? 'E-poçt Göndər' : 
                   language === 'en' ? 'Send Email' : 
                   'Отправить Email'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}