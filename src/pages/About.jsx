import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '../data/mockData';
import { getLocalizedContent } from '../utils/helpers';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';

const About = () => {
  const { t, i18n } = useTranslation();
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const contentAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        const data = await api.getAboutFestival(i18n.language);
        setAboutData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching about data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAboutData();
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
    <div className="pt-16"> {/* Add padding for fixed header */}
      {/* Hero Image */}
      <div className="relative h-64 md:h-96 bg-festival-green-600 overflow-hidden">
        <img 
          src={aboutData?.image} 
          alt={getLocalizedContent(aboutData, 'title', i18n.language)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {getLocalizedContent(aboutData, 'title', i18n.language)}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="py-16 bg-white">
        <div 
          ref={contentAnimation.ref}
          className={`max-w-4xl mx-auto px-4 transition-all duration-700 ${contentAnimation.className}`}
        >
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg">
              {getLocalizedContent(aboutData, 'content', i18n.language)
                .split('\n')
                .map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Info Section */}
      <section className="py-16 bg-festival-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-festival-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Azerbaijan Highland Region</p>
            </div>
            
            <div className="text-center">
              <div className="bg-festival-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Duration</h3>
              <p className="text-gray-600">3 Days / 2 Nights</p>
            </div>
            
            <div className="text-center">
              <div className="bg-festival-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Capacity</h3>
              <p className="text-gray-600">5000+ Participants</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;