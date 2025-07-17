import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '../data/mockData';
import { getLocalizedContent } from '../utils/helpers';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';

const Partners = () => {
  const { t, i18n } = useTranslation();
  const [partnersData, setPartnersData] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const contentAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const data = await api.getPartners(i18n.language);
        setPartnersData(data);
        setFilteredPartners(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching partners:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPartners();
  }, [i18n.language]);
  
  // Filter partners by category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPartners(partnersData);
    } else {
      const filtered = partnersData.filter(partner => 
        getLocalizedContent(partner, 'category', i18n.language).toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredPartners(filtered);
    }
  }, [selectedCategory, partnersData, i18n.language]);
  
  // Get unique categories
  const categories = ['all', ...new Set(partnersData.map(partner => 
    getLocalizedContent(partner, 'category', i18n.language)
  ))];
  
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
            {t('nav.partners')}
          </h1>
          <p className="text-xl">
            Our valued partners and sponsors
          </p>
        </div>
      </div>
      
      {/* Category Filter */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-festival-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Partners' : category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Partners Grid */}
      <section className="py-16 bg-gray-50">
        <div 
          ref={contentAnimation.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${contentAnimation.className}`}
        >
          {filteredPartners.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {filteredPartners.map((partner) => (
                <div 
                  key={partner.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-center justify-center"
                >
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-24 flex items-center justify-center"
                    title={partner.name}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <p className="text-gray-500 text-lg">
                No partners found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Partners;