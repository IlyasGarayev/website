'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../../../lib/useLanguage';
import { getLocalizedText } from '../../../../lib/utils';

export default function SponsorshipPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/public/sponsorship');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching sponsorship data:', error);
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
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {getLocalizedText(data, 'title', language)}
            </h1>
            <p className="text-xl text-gray-600">
              {getLocalizedText(data, 'description', language)}
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-festival-green-600 to-festival-green-800 text-white rounded-lg p-8 mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'az' ? 'Festivalın Bir Hissəsi Olun' : 
                 language === 'en' ? 'Be Part of the Festival' : 
                 'Станьте частью фестиваля'}
              </h2>
              <p className="text-lg opacity-90 mb-6">
                {language === 'az' ? 'Azərbaycanın ən böyük mədəni hadisəsinə sponsor olun' : 
                 language === 'en' ? 'Sponsor Azerbaijan\'s biggest cultural event' : 
                 'Спонсируйте крупнейшее культурное событие Азербайджана'}
              </p>
              <div className="flex justify-center">
                <Link
                  href={`/${language}/contact`}
                  className="bg-white text-festival-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  {language === 'az' ? 'Əlaqə saxlayın' : 
                   language === 'en' ? 'Contact Us' : 
                   'Свяжитесь с нами'}
                </Link>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {getLocalizedText(data, 'benefits', language)}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data?.benefits?.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-festival-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {getLocalizedText(benefit, 'title', language)}
                      </h3>
                      <p className="text-gray-600">
                        {getLocalizedText(benefit, 'description', language)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-festival-green-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === 'az' ? 'Festival Statistikası' : 
               language === 'en' ? 'Festival Statistics' : 
               'Статистика фестиваля'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-festival-primary mb-2">15,000+</div>
                <p className="text-gray-600">
                  {language === 'az' ? 'Ziyarətçi' : 
                   language === 'en' ? 'Visitors' : 
                   'Посетители'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-festival-primary mb-2">50+</div>
                <p className="text-gray-600">
                  {language === 'az' ? 'Fəaliyyət' : 
                   language === 'en' ? 'Activities' : 
                   'Мероприятия'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-festival-primary mb-2">3</div>
                <p className="text-gray-600">
                  {language === 'az' ? 'Gün' : 
                   language === 'en' ? 'Days' : 
                   'Дня'}
                </p>
              </div>
            </div>
          </div>

          {/* Sponsorship Packages */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === 'az' ? 'Sponsorluq Paketləri' : 
               language === 'en' ? 'Sponsorship Packages' : 
               'Спонсорские пакеты'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Gold Package */}
              <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 text-white rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'az' ? 'Qızıl Paket' : 
                   language === 'en' ? 'Gold Package' : 
                   'Золотой пакет'}
                </h3>
                <ul className="text-left space-y-2 mb-6">
                  <li>• {language === 'az' ? 'Əsas səhnədə logo' : 
                          language === 'en' ? 'Logo on main stage' : 
                          'Логотип на главной сцене'}</li>
                  <li>• {language === 'az' ? 'VIP ziyarət' : 
                          language === 'en' ? 'VIP visit' : 
                          'VIP посещение'}</li>
                  <li>• {language === 'az' ? 'Media əhatəsi' : 
                          language === 'en' ? 'Media coverage' : 
                          'Медиа освещение'}</li>
                </ul>
                <Link
                  href={`/${language}/contact`}
                  className="block bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  {language === 'az' ? 'Əlaqə' : 
                   language === 'en' ? 'Contact' : 
                   'Контакт'}
                </Link>
              </div>

              {/* Silver Package */}
              <div className="bg-gradient-to-b from-gray-400 to-gray-600 text-white rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'az' ? 'Gümüş Paket' : 
                   language === 'en' ? 'Silver Package' : 
                   'Серебряный пакет'}
                </h3>
                <ul className="text-left space-y-2 mb-6">
                  <li>• {language === 'az' ? 'Saytda logo' : 
                          language === 'en' ? 'Logo on website' : 
                          'Логотип на сайте'}</li>
                  <li>• {language === 'az' ? 'Sosial media' : 
                          language === 'en' ? 'Social media' : 
                          'Социальные сети'}</li>
                  <li>• {language === 'az' ? 'Broşurlarda yer' : 
                          language === 'en' ? 'Place in brochures' : 
                          'Место в брошюрах'}</li>
                </ul>
                <Link
                  href={`/${language}/contact`}
                  className="block bg-white text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  {language === 'az' ? 'Əlaqə' : 
                   language === 'en' ? 'Contact' : 
                   'Контакт'}
                </Link>
              </div>

              {/* Bronze Package */}
              <div className="bg-gradient-to-b from-orange-400 to-orange-600 text-white rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'az' ? 'Bürünc Paket' : 
                   language === 'en' ? 'Bronze Package' : 
                   'Бронзовый пакет'}
                </h3>
                <ul className="text-left space-y-2 mb-6">
                  <li>• {language === 'az' ? 'Tərəfdaşlar səhifəsi' : 
                          language === 'en' ? 'Partners page' : 
                          'Страница партнеров'}</li>
                  <li>• {language === 'az' ? 'Təşəkkür mesajı' : 
                          language === 'en' ? 'Thank you message' : 
                          'Благодарственное сообщение'}</li>
                  <li>• {language === 'az' ? 'Sertifikat' : 
                          language === 'en' ? 'Certificate' : 
                          'Сертификат'}</li>
                </ul>
                <Link
                  href={`/${language}/contact`}
                  className="block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  {language === 'az' ? 'Əlaqə' : 
                   language === 'en' ? 'Contact' : 
                   'Контакт'}
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'az' ? 'Əlaqə Saxlayın' : 
               language === 'en' ? 'Get in Touch' : 
               'Свяжитесь с нами'}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'az' ? 'Sponsorluq haqqında ətraflı məlumat üçün bizimlə əlaqə saxlayın' : 
               language === 'en' ? 'Contact us for detailed information about sponsorship' : 
               'Свяжитесь с нами для получения подробной информации о спонсорстве'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-festival-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">{data?.contactPhone}</span>
              </div>
              
              <Link
                href={`/${language}/contact`}
                className="bg-festival-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-festival-secondary transition-colors duration-200"
              >
                {language === 'az' ? 'Ətraflı Məlumat' : 
                 language === 'en' ? 'More Information' : 
                 'Подробная информация'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}