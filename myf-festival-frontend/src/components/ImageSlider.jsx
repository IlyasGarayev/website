'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../lib/useLanguage';
import { getLocalizedText } from '../../lib/utils';

export default function ImageSlider({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!slides.length) {
    return (
      <div className="relative h-screen bg-festival-green-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl mb-8">{t('hero.subtitle')}</p>
          <button className="bg-white text-festival-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            {t('hero.cta')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
            <img
              src={slide.image}
              alt={getLocalizedText(slide, 'title', language)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
                  {getLocalizedText(slide, 'title', language)}
                </h1>
                <p className="text-lg md:text-2xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  {getLocalizedText(slide, 'subtitle', language)}
                </p>
                <button className="bg-festival-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-festival-secondary transition-colors duration-200 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  {t('hero.cta')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}