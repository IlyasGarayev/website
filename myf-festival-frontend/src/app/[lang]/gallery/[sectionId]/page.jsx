'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '../../../../../lib/useLanguage';
import { getLocalizedText } from '../../../../../lib/utils';
import Pagination from '../../../../components/Pagination';

export default function GallerySectionPage({ params }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  const { sectionId } = params;
  const currentPage = parseInt(searchParams.get('page') || '1');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/public/gallery/${sectionId}?page=${currentPage}&limit=15`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching gallery section:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sectionId, currentPage]);

  const openModal = (media) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

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

  if (!data?.items || data.items.length === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'az' ? 'Bölmə tapılmadı' : 
               language === 'en' ? 'Section not found' : 
               'Раздел не найден'}
            </h1>
            <p className="text-gray-600 mb-8">
              {language === 'az' ? 'Bu bölmə mövcud deyil və ya hələ əlavə edilməyib' : 
               language === 'en' ? 'This section does not exist or has not been added yet' : 
               'Этот раздел не существует или еще не был добавлен'}
            </p>
            <Link
              href={`/${language}/gallery`}
              className="inline-block bg-festival-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-festival-secondary transition-colors duration-200"
            >
              {language === 'az' ? 'Qalereya qayıt' : 
               language === 'en' ? 'Back to Gallery' : 
               'Вернуться в галерею'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href={`/${language}`} className="hover:text-festival-primary">
                  {t('nav.home')}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/${language}/gallery`} className="hover:text-festival-primary">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">
                {language === 'az' ? 'Bölmə' : language === 'en' ? 'Section' : 'Раздел'} {sectionId}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'az' ? `Qalereya Bölməsi ${sectionId}` : 
               language === 'en' ? `Gallery Section ${sectionId}` : 
               `Раздел галереи ${sectionId}`}
            </h1>
            <p className="text-xl text-gray-600">
              {data?.totalItems} {language === 'az' ? 'element' : language === 'en' ? 'items' : 'элементов'}
            </p>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {data?.items?.map((media) => (
              <div
                key={media.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(media)}
              >
                <div className="relative">
                  <img
                    src={media.thumbnail}
                    alt={getLocalizedText(media, 'title', language)}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                  
                  {/* Media Type Icon */}
                  {media.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                  
                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 p-3 rounded-full">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {getLocalizedText(media, 'title', language)}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={data?.currentPage || 1}
            totalPages={data?.totalPages || 1}
            basePath={`/${language}/gallery/${sectionId}`}
            className="mb-8"
          />

          {/* Stats */}
          <div className="text-center text-gray-600">
            <p>
              {t('common.page')} {data?.currentPage} {t('common.of')} {data?.totalPages} 
              {' '}({data?.totalItems} {language === 'az' ? 'element' : language === 'en' ? 'items' : 'элементов'})
            </p>
          </div>

          {/* Back to Gallery */}
          <div className="mt-12 text-center">
            <Link
              href={`/${language}/gallery`}
              className="inline-flex items-center text-festival-primary hover:text-festival-secondary font-medium transition-colors duration-200"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {language === 'az' ? 'Qalereya qayıt' : 
               language === 'en' ? 'Back to Gallery' : 
               'Вернуться в галерею'}
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedMedia.url}
                alt={getLocalizedText(selectedMedia, 'title', language)}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {getLocalizedText(selectedMedia, 'title', language)}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}