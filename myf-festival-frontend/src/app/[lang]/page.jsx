'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../../lib/useLanguage';
import { getLocalizedText } from '../../../lib/utils';
import ImageSlider from '../../components/ImageSlider';
import NewsCard from '../../components/NewsCard';
import SectionBlock from '../../components/SectionBlock';
import Link from 'next/link';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/public/homepage-data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching homepage data:', error);
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
    <div className="pt-16">
      {/* Hero Section */}
      <ImageSlider slides={data?.heroSlides || []} />

      {/* About Section */}
      <SectionBlock
        title={t('sections.about.title')}
        description={t('sections.about.description')}
        ctaText={t('sections.about.cta')}
        ctaLink={`/${language}/about`}
        image="/images/placeholder-image.jpg"
        imagePosition="right"
        backgroundColor="bg-festival-green-600"
      />

      {/* Oz Yurdunu Qur Section */}
      <SectionBlock
        title={t('sections.ozYurdunuQur.title')}
        description={t('sections.ozYurdunuQur.description')}
        ctaText={t('sections.ozYurdunuQur.cta')}
        ctaLink={`/${language}/oz-yurdunu-qur`}
        image="/images/placeholder-image.jpg"
        imagePosition="left"
        backgroundColor="bg-festival-green-700"
      />

      {/* Volunteer Section */}
      <SectionBlock
        title={t('sections.volunteer.title')}
        description={t('sections.volunteer.description')}
        ctaText={t('sections.volunteer.cta')}
        ctaLink={`/${language}/contact`}
        image="/images/placeholder-image.jpg"
        imagePosition="right"
        backgroundColor="bg-festival-green-800"
      />

      {/* Latest News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('sections.news.title')}
            </h2>
            <Link
              href={`/${language}/news`}
              className="text-festival-primary hover:text-festival-secondary font-medium"
            >
              {t('sections.news.viewAll')} →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.latestNews?.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('sections.partners.title')}
            </h2>
            <Link
              href={`/${language}/sponsorship`}
              className="inline-block bg-festival-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-festival-secondary transition-colors duration-200"
            >
              {t('sections.partners.sponsorship')}
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {data?.partners?.map((partner) => (
              <div key={partner.id} className="text-center">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-75 transition-opacity duration-200"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-20 object-contain mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-600">{partner.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}