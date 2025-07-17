import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PartnerSlider = ({ partners = [] }) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Number of partners to show at once (responsive)
  const getPartnersPerSlide = () => {
    if (window.innerWidth >= 1024) return 6; // lg screens
    if (window.innerWidth >= 768) return 4;  // md screens
    return 2; // sm screens
  };
  
  const [partnersPerSlide, setPartnersPerSlide] = useState(getPartnersPerSlide());
  
  // Update partners per slide on window resize
  useEffect(() => {
    const handleResize = () => {
      setPartnersPerSlide(getPartnersPerSlide());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate total slides needed
  const totalSlides = Math.ceil(partners.length / partnersPerSlide);
  
  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  
  if (!partners || partners.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">{t('common.loading')}</p>
      </div>
    );
  }
  
  // Get current slide partners
  const getCurrentSlidePartners = () => {
    const startIndex = currentIndex * partnersPerSlide;
    return partners.slice(startIndex, startIndex + partnersPerSlide);
  };
  
  return (
    <div className="relative">
      {/* Partners Grid */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const slidePartners = partners.slice(
              slideIndex * partnersPerSlide,
              (slideIndex + 1) * partnersPerSlide
            );
            
            return (
              <div 
                key={slideIndex}
                className="w-full flex-shrink-0"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
                  {slidePartners.map((partner) => (
                    <div key={partner.id} className="flex items-center justify-center h-20">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        title={partner.name}
                      >
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="partner-logo max-h-16"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Navigation Controls */}
      {totalSlides > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Previous partners"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Next partners"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-festival-green-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
      
      {/* View All Partners Button */}
      <div className="text-center mt-8">
        <Link 
          to={`/${lang}/partners`}
          className="btn-outline"
        >
          {t('sections.partners.viewAll')}
        </Link>
      </div>
    </div>
  );
};

export default PartnerSlider;