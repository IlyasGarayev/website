import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { api } from '../data/mockData';
import { getLocalizedContent } from '../utils/helpers';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';

// Components
import ImageSlider from '../components/ImageSlider';
import SectionBlock from '../components/SectionBlock';
import NewsCard from '../components/NewsCard';
import PartnerSlider from '../components/PartnerSlider';

const Home = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Animation hooks for sections
  const newsAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  const partnersAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  
  // Fetch homepage data
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const data = await api.getHomepageData(i18n.language);
        setHomeData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching home data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchHomeData();
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
    <div className="pt-0"> {/* Remove top padding for full-screen hero */}
      {/* Hero Section */}
      <ImageSlider slides={homeData?.heroSlides || []} />
      
      {/* About Festival Section */}
      <SectionBlock
        title={getLocalizedContent(homeData?.aboutFestival, 'title', i18n.language)}
        content={getLocalizedContent(homeData?.aboutFestival, 'shortContent', i18n.language)}
        buttonText={t('sections.about.button')}
        buttonLink={`/${lang}/about`}
        image={homeData?.aboutFestival?.image}
        imagePosition="left"
        backgroundColor="bg-festival-green-100"
      />
      
      {/* Öz Yurdunu Qur Section */}
      <SectionBlock
        title={t('sections.ozYurdunuQur.title')}
        content={t('sections.ozYurdunuQur.text')}
        buttonText={t('sections.ozYurdunuQur.button')}
        buttonLink={`/${lang}/oz-yurdunu-qur`}
        image={homeData?.aboutFestival?.image} // Using same placeholder image
        imagePosition="right"
        backgroundColor="bg-nature-green-100"
      />
      
      {/* Könüllü Ol Section */}
      <SectionBlock
        title={t('sections.volunteer.title')}
        content={t('sections.volunteer.text')}
        buttonText={t('sections.volunteer.button')}
        buttonLink="https://konullu.myf.az"
        image={homeData?.aboutFestival?.image} // Using same placeholder image
        imagePosition="left"
        backgroundColor="bg-forest-green-100"
        isExternalLink={true}
      />
      
      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div 
          ref={newsAnimation.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${newsAnimation.className}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('sections.news.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {homeData?.latestNews?.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to={`/${lang}/news`}
              className="btn-primary"
            >
              {t('sections.news.viewAll')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div 
          ref={partnersAnimation.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${partnersAnimation.className}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('sections.partners.title')}
            </h2>
          </div>
          
          <PartnerSlider partners={homeData?.partners || []} />
        </div>
      </section>
    </div>
  );
};

export default Home;