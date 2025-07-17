'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../../../../lib/useLanguage';
import { getLocalizedText, formatDate } from '../../../../../lib/utils';

export default function NewsDetailPage({ params }) {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language, t } = useLanguage();
  const { slug } = params;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/public/news/${slug}`);
        
        if (!response.ok) {
          throw new Error('News not found');
        }
        
        const result = await response.json();
        setNews(result);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [slug]);

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

  if (error || !news) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('common.error')}
            </h1>
            <p className="text-gray-600 mb-8">
              {language === 'az' ? 'Xəbər tapılmadı' : 
               language === 'en' ? 'News not found' : 
               'Новость не найдена'}
            </p>
            <Link
              href={`/${language}/news`}
              className="inline-block bg-festival-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-festival-secondary transition-colors duration-200"
            >
              {language === 'az' ? 'Xəbərlərə qayıt' : 
               language === 'en' ? 'Back to News' : 
               'Вернуться к новостям'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
                <Link href={`/${language}/news`} className="hover:text-festival-primary">
                  {t('nav.news')}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">
                {getLocalizedText(news, 'title', language)}
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {getLocalizedText(news, 'title', language)}
            </h1>
            
            <div className="flex items-center justify-between text-gray-600 mb-6">
              <div className="flex items-center space-x-4">
                <span className="bg-festival-primary text-white px-3 py-1 rounded-full text-sm">
                  {formatDate(news.publishedAt, language)}
                </span>
                <span className="flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {news.views} {t('news.views')}
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={news.image}
              alt={getLocalizedText(news, 'title', language)}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {getLocalizedText(news, 'content', language)}
            </div>
          </article>

          {/* Back to News */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href={`/${language}/news`}
              className="inline-flex items-center text-festival-primary hover:text-festival-secondary font-medium transition-colors duration-200"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {language === 'az' ? 'Bütün xəbərlər' : 
               language === 'en' ? 'All News' : 
               'Все новости'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}