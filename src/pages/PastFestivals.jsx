import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '../data/mockData';
import { getLocalizedContent } from '../utils/helpers';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';

const PastFestivals = () => {
  const { t, i18n } = useTranslation();
  const [pastFestivalsData, setPastFestivalsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const contentAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  
  useEffect(() => {
    const fetchPastFestivals = async () => {
      try {
        setLoading(true);
        const data = await api.getPastFestivals(i18n.language);
        setPastFestivalsData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching past festivals:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPastFestivals();
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
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-festival-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('nav.pastFestivals')}
          </h1>
          <p className="text-xl">
            Celebrating our journey through the years
          </p>
        </div>
      </div>
      
      {/* Past Festivals */}
      <section className="py-16 bg-gray-50">
        <div 
          ref={contentAnimation.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${contentAnimation.className}`}
        >
          {pastFestivalsData.length > 0 ? (
            <div className="space-y-16">
              {pastFestivalsData.map((festival, index) => (
                <div 
                  key={festival.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  {/* Images */}
                  <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {festival.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="aspect-square">
                          <img 
                            src={image} 
                            alt={`${getLocalizedContent(festival, 'title', i18n.language)} - Image ${imgIndex + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                      <div className="mb-4">
                        <span className="inline-block bg-festival-green-100 text-festival-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {festival.year}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {getLocalizedContent(festival, 'title', i18n.language)}
                      </h2>
                      
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {getLocalizedContent(festival, 'description', i18n.language)}
                      </p>
                      
                      <div className="mt-6 flex items-center text-festival-green-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                        </svg>
                        <span className="font-medium">Year {festival.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
              </svg>
              <p className="text-gray-500 text-lg">
                No past festivals available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-festival-green-600 mb-2">
                {pastFestivalsData.length}+
              </div>
              <p className="text-gray-600">Years of Festival</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-festival-green-600 mb-2">
                15,000+
              </div>
              <p className="text-gray-600">Total Participants</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-festival-green-600 mb-2">
                50+
              </div>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-festival-green-600 mb-2">
                100+
              </div>
              <p className="text-gray-600">Cultural Performances</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastFestivals;