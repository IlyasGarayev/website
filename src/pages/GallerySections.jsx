import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { api } from '../data/mockData';
import { getLocalizedContent } from '../utils/helpers';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';

const GallerySections = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const [gallerySections, setGallerySections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const contentAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  
  useEffect(() => {
    const fetchGallerySections = async () => {
      try {
        setLoading(true);
        const data = await api.getGallerySections(i18n.language);
        setGallerySections(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching gallery sections:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchGallerySections();
  }, [i18n.language]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading-spinner"></div>
        <span className="ml-3 text-lg text-gray-600">{t('common.loading')}</span>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-festival-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('nav.gallery')}
          </h1>
          <p className="text-xl">
            Explore our photo and video collections
          </p>
        </div>
      </div>
      
      {/* Gallery Sections */}
      <section className="py-16 bg-gray-50">
        <div 
          ref={contentAnimation.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${contentAnimation.className}`}
        >
          {gallerySections.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallerySections.map((section) => (
                <Link
                  key={section.id}
                  to={`/${lang}/gallery/${section.id}`}
                  className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={section.coverImage} 
                      alt={getLocalizedContent(section, 'title', i18n.language)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    
                    {/* Media Count Badge */}
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {section.mediaCount} items
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-festival-green-600 transition-colors">
                      {getLocalizedContent(section, 'title', i18n.language)}
                    </h3>
                    
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {section.mediaCount} media files
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-lg">
                No gallery sections available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GallerySections;