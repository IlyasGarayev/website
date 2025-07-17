import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { api } from '../data/mockData';
import { getLocalizedContent, formatDate, formatNumber } from '../utils/helpers';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';

const NewsDetail = () => {
  const { t, i18n } = useTranslation();
  const { slug, lang } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const contentAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  
  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        setLoading(true);
        const data = await api.getNewsBySlug(slug, i18n.language);
        if (data) {
          setNewsData(data);
        } else {
          setError('News article not found');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching news detail:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNewsDetail();
  }, [slug, i18n.language]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading-spinner"></div>
        <span className="ml-3 text-lg text-gray-600">{t('common.loading')}</span>
      </div>
    );
  }
  
  if (error || !newsData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'News article not found'}</p>
          <Link 
            to={`/${lang}/news`}
            className="btn-primary"
          >
            Back to News
          </Link>
        </div>
      </div>
    );
  }
  
  const title = getLocalizedContent(newsData, 'title', i18n.language);
  const content = getLocalizedContent(newsData, 'content', i18n.language);
  const category = getLocalizedContent(newsData, 'category', i18n.language);
  
  return (
    <div className="pt-16"> {/* Add padding for fixed header */}
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link to={`/${lang}`} className="hover:text-festival-green-600">
              {t('nav.home')}
            </Link>
            <span>/</span>
            <Link to={`/${lang}/news`} className="hover:text-festival-green-600">
              {t('nav.news')}
            </Link>
            <span>/</span>
            <span className="text-gray-800">{title}</span>
          </nav>
        </div>
      </div>
      
      {/* Article Content */}
      <article className="py-16 bg-white">
        <div 
          ref={contentAnimation.ref}
          className={`max-w-4xl mx-auto px-4 transition-all duration-700 ${contentAnimation.className}`}
        >
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-festival-green-100 text-festival-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                </svg>
                {formatDate(newsData.publishDate, i18n.language)}
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {formatNumber(newsData.views, i18n.language)} {t('common.viewCount')}
              </div>
            </div>
          </header>
          
          {/* Featured Image */}
          {newsData.image && (
            <div className="mb-8">
              <img 
                src={newsData.image} 
                alt={title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg">
              {content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Back to News Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              to={`/${lang}/news`}
              className="btn-outline"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsDetail;