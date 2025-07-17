'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '../../../../lib/useLanguage';
import NewsCard from '../../../components/NewsCard';
import Pagination from '../../../components/Pagination';

export default function NewsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/public/news?page=${currentPage}&limit=15`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('news.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('news.latest')}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {data?.items?.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={data?.currentPage || 1}
          totalPages={data?.totalPages || 1}
          basePath={`/${language}/news`}
          className="mt-12"
        />

        {/* Stats */}
        <div className="text-center mt-8 text-gray-600">
          <p>
            {t('common.page')} {data?.currentPage} {t('common.of')} {data?.totalPages} 
            {' '}({data?.totalItems} {language === 'az' ? 'xəbər' : language === 'en' ? 'news' : 'новостей'})
          </p>
        </div>
      </div>
    </div>
  );
}