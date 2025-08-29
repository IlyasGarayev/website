import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '../data/mockData';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';

// Components
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';

const NewsList = () => {
  const { t, i18n } = useTranslation();
  const [newsData, setNewsData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const contentAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  const pageSize = 15;
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await api.getNews(i18n.language, currentPage, pageSize);
        setNewsData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, [i18n.language, currentPage]);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
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
    <div className="pt-16"> {/* Add padding for fixed header */}
      {/* Page Header */}
      <div className="bg-festival-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('nav.news')}
          </h1>
          <p className="text-xl">
            Stay updated with the latest festival news
          </p>
        </div>
      </div>
      
      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div 
          ref={contentAnimation.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${contentAnimation.className}`}
        >
          {newsData?.news && newsData.news.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {newsData.news.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
              
              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={newsData.totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 text-lg">
                No news available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsList;