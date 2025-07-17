import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { api } from '../data/mockData';
import { getLocalizedContent, formatDate } from '../utils/helpers';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';
import Pagination from '../components/Pagination';

const GalleryMedia = () => {
  const { t, i18n } = useTranslation();
  const { sectionId, lang } = useParams();
  const [mediaData, setMediaData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const contentAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  const pageSize = 15;
  
  useEffect(() => {
    const fetchGalleryMedia = async () => {
      try {
        setLoading(true);
        const data = await api.getGalleryMedia(sectionId, i18n.language, currentPage, pageSize);
        setMediaData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching gallery media:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchGalleryMedia();
  }, [sectionId, i18n.language, currentPage]);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const openModal = (media) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    if (selectedMedia) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedMedia]);
  
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
          <Link 
            to={`/${lang}/gallery`}
            className="btn-primary"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link to={`/${lang}`} className="hover:text-festival-green-600">
              {t('nav.home')}
            </Link>
            <span>/</span>
            <Link to={`/${lang}/gallery`} className="hover:text-festival-green-600">
              {t('nav.gallery')}
            </Link>
            <span>/</span>
            <span className="text-gray-800">Section {sectionId}</span>
          </nav>
        </div>
      </div>
      
      {/* Page Header */}
      <div className="bg-festival-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Gallery Section {sectionId}
          </h1>
          <p className="text-xl">
            {mediaData?.totalItems || 0} media files
          </p>
        </div>
      </div>
      
      {/* Media Grid */}
      <section className="py-16 bg-gray-50">
        <div 
          ref={contentAnimation.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${contentAnimation.className}`}
        >
          {mediaData?.media && mediaData.media.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
                {mediaData.media.map((media) => (
                  <div 
                    key={media.id}
                    className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => openModal(media)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={media.thumbnail} 
                        alt={getLocalizedContent(media, 'title', i18n.language)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Media Type Icon */}
                      {media.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <div className="bg-white bg-opacity-90 rounded-full p-3">
                            <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                    
                    <div className="p-3">
                      <h3 className="text-sm font-medium text-gray-800 truncate">
                        {getLocalizedContent(media, 'title', i18n.language)}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(media.date, i18n.language)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={mediaData.totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-lg">
                No media files found in this section.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Modal Lightbox */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Media Content */}
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedMedia.url} 
                  alt={getLocalizedContent(selectedMedia, 'title', i18n.language)}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {getLocalizedContent(selectedMedia, 'title', i18n.language)}
                </h3>
                <p className="text-gray-600">
                  {formatDate(selectedMedia.date, i18n.language)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryMedia;