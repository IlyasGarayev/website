import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalizedContent, formatDate, formatNumber } from '../utils/helpers';

const NewsCard = ({ news }) => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  
  if (!news) return null;
  
  const title = getLocalizedContent(news, 'title', i18n.language);
  const shortContent = getLocalizedContent(news, 'shortContent', i18n.language);
  const slug = getLocalizedContent(news, 'slug', i18n.language);
  
  return (
    <article className="news-card">
      <Link to={`/${lang}/news/${slug}`}>
        <img 
          src={news.image} 
          alt={title}
          className="news-card-image"
        />
      </Link>
      
      <div className="news-card-content">
        <Link to={`/${lang}/news/${slug}`}>
          <h3 className="news-card-title">
            {title}
          </h3>
        </Link>
        
        <p className="news-card-excerpt">
          {shortContent}
        </p>
        
        <div className="news-card-meta">
          <span className="text-festival-green-600">
            {formatDate(news.publishDate, i18n.language)}
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{formatNumber(news.views, i18n.language)} {t('common.viewCount')}</span>
          </span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;