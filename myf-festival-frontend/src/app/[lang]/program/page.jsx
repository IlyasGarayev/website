'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../../../lib/useLanguage';
import { getLocalizedText } from '../../../../lib/utils';

export default function ProgramPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState('all');
  const { language, t } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/public/festival');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching program data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProgram = data?.program?.filter(item => 
    selectedDay === 'all' || item.day === parseInt(selectedDay)
  ) || [];

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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('program.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {language === 'az' ? '3 günlük festival proqramı' : 
               language === 'en' ? '3-day festival program' : 
               '3-дневная программа фестиваля'}
            </p>
          </div>

          {/* Day Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedDay('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedDay === 'all'
                  ? 'bg-festival-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t('program.allDays')}
            </button>
            {[1, 2, 3].map(day => (
              <button
                key={day}
                onClick={() => setSelectedDay(day.toString())}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  selectedDay === day.toString()
                    ? 'bg-festival-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t(`program.day${day}`)}
              </button>
            ))}
          </div>

          {/* Program Schedule */}
          <div className="space-y-8">
            {[1, 2, 3].map(day => {
              const dayPrograms = filteredProgram.filter(item => item.day === day);
              
              if (selectedDay !== 'all' && selectedDay !== day.toString()) {
                return null;
              }

              return (
                <div key={day} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-festival-primary text-white p-6">
                    <h2 className="text-2xl font-bold">
                      {t(`program.day${day}`)}
                    </h2>
                  </div>
                  
                  <div className="p-6">
                    {dayPrograms.length > 0 ? (
                      <div className="space-y-4">
                        {dayPrograms.map((item) => (
                          <div key={item.id} className="border-l-4 border-festival-primary pl-6 py-4">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">
                                {getLocalizedText(item, 'title', language)}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span className="flex items-center">
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {item.startTime} - {item.endTime}
                                </span>
                                <span className="flex items-center">
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  {getLocalizedText(item, 'location', language)}
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-600">
                              {getLocalizedText(item, 'description', language)}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        {language === 'az' ? 'Bu gün üçün proqram yoxdur' : 
                         language === 'en' ? 'No program for this day' : 
                         'Нет программы на этот день'}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note */}
          <div className="mt-12 bg-festival-green-50 p-6 rounded-lg">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-festival-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-festival-primary mb-2">
                  {language === 'az' ? 'Qeyd' : 
                   language === 'en' ? 'Note' : 
                   'Примечание'}
                </h3>
                <p className="text-gray-700">
                  {language === 'az' ? 'Proqram dəyişikliyə məruz qala bilər. Ən son yeniliklər üçün saytımızı izləyin.' : 
                   language === 'en' ? 'Program is subject to change. Follow our website for the latest updates.' : 
                   'Программа может быть изменена. Следите за нашим сайтом для получения последних обновлений.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}