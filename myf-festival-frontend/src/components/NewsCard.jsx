'use client';

import Link from 'next/link';
import { useLanguage } from '../../lib/useLanguage';
import { getLocalizedText, formatDate } from '../../lib/utils';

export default function NewsCard({ news }) {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={news.image}
          alt={getLocalizedText(news, 'title', language)}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-festival-primary text-white px-3 py-1 rounded-full text-sm">
          {formatDate(news.publishedAt, language)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">
          {getLocalizedText(news, 'title', language)}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {getLocalizedText(news, 'excerpt', language)}
        </p>
        
        <div className="flex items-center justify-between">
          <Link
            href={`/${language}/news/${news.slug}`}
            className="text-festival-primary hover:text-festival-secondary font-medium transition-colors duration-200"
          >
            {t('common.readMore')} →
          </Link>
          
          <div className="flex items-center text-sm text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {news.views} {t('news.views')}
          </div>
        </div>
      </div>
    </div>
  );
}