import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '../data/mockData';
import { getLocalizedContent, formatDate, formatTime } from '../utils/helpers';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';

const Program = () => {
  const { t, i18n } = useTranslation();
  const [programData, setProgramData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const contentAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  
  useEffect(() => {
    const fetchProgramData = async () => {
      try {
        setLoading(true);
        const data = await api.getProgram(i18n.language);
        setProgramData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching program data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProgramData();
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
  
  const selectedDayData = programData?.days?.find(day => day.day === selectedDay);
  
  return (
    <div className="pt-16"> {/* Add padding for fixed header */}
      {/* Page Header */}
      <div className="bg-festival-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('nav.program')}
          </h1>
          <p className="text-xl">
            Festival Program & Schedule
          </p>
        </div>
      </div>
      
      {/* Day Filter Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-1 py-4">
            {programData?.days?.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedDay === day.day
                    ? 'bg-festival-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Day {day.day}
                <span className="block text-sm opacity-75">
                  {formatDate(day.date, i18n.language)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Program Content */}
      <section className="py-16 bg-gray-50">
        <div 
          ref={contentAnimation.ref}
          className={`max-w-4xl mx-auto px-4 transition-all duration-700 ${contentAnimation.className}`}
        >
          {selectedDayData ? (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Day {selectedDayData.day} - {formatDate(selectedDayData.date, i18n.language)}
                </h2>
              </div>
              
              <div className="space-y-4">
                {selectedDayData.events.map((event) => (
                  <div 
                    key={event.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {getLocalizedContent(event, 'title', i18n.language)}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {getLocalizedContent(event, 'description', i18n.language)}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {formatTime(event.startTime)} - {formatTime(event.endTime)}
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {getLocalizedContent(event, 'location', i18n.language)}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <div className="bg-festival-green-100 text-festival-green-800 px-4 py-2 rounded-full text-sm font-medium">
                          {formatTime(event.startTime)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No events scheduled for this day.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Program;