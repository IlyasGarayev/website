'use client';

import { useLanguage } from '../../../../lib/useLanguage';
import FormComponent from '../../../components/FormComponent';

export default function OzYurdunuQurPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section with Tent Theme */}
      <section className="relative py-20 bg-gradient-to-br from-festival-green-600 to-festival-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('ozYurdunuQur.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {t('ozYurdunuQur.description')}
            </p>
            
            {/* Tent Icons */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 text-white">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 20h-13L12 6.5z"/>
                  </svg>
                </div>
                <p className="text-sm">
                  {t('language') === 'az' ? 'Çadır' : 
                   t('language') === 'en' ? 'Tent' : 
                   'Палатка'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 text-white">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p className="text-sm">
                  {t('language') === 'az' ? 'Təbiət' : 
                   t('language') === 'en' ? 'Nature' : 
                   'Природа'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 text-white">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="text-sm">
                  {t('language') === 'az' ? 'Təcrübə' : 
                   t('language') === 'en' ? 'Experience' : 
                   'Опыт'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('language') === 'az' ? 'Müraciət Forması' : 
                 t('language') === 'en' ? 'Application Form' : 
                 'Форма заявки'}
              </h2>
              <p className="text-gray-600 text-lg">
                {t('language') === 'az' ? 'Aşağıdakı formu dolduraraq çadır qurma müraciətinizi göndərin' : 
                 t('language') === 'en' ? 'Fill out the form below to submit your camping application' : 
                 'Заполните форму ниже, чтобы подать заявку на кемпинг'}
              </p>
            </div>

            <FormComponent />
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('language') === 'az' ? 'Vacib Məlumatlar' : 
               t('language') === 'en' ? 'Important Information' : 
               'Важная информация'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-festival-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-festival-primary mb-3">
                  {t('language') === 'az' ? 'Qayda və Şərtlər' : 
                   t('language') === 'en' ? 'Rules and Conditions' : 
                   'Правила и условия'}
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• {t('language') === 'az' ? 'Çadır sahəsi məhduddur' : 
                           t('language') === 'en' ? 'Camping area is limited' : 
                           'Площадь кемпинга ограничена'}</li>
                  <li>• {t('language') === 'az' ? 'Şəxsiyyət vəsiqəsi mütləqdir' : 
                           t('language') === 'en' ? 'ID card is mandatory' : 
                           'Удостоверение личности обязательно'}</li>
                  <li>• {t('language') === 'az' ? 'Təmizlik qaydalarına riayət' : 
                           t('language') === 'en' ? 'Follow cleanliness rules' : 
                           'Соблюдайте правила чистоты'}</li>
                  <li>• {t('language') === 'az' ? 'Təhlükəsizlik qaydaları' : 
                           t('language') === 'en' ? 'Safety regulations' : 
                           'Правила безопасности'}</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {t('language') === 'az' ? 'Nələr Daxildir' : 
                   t('language') === 'en' ? 'What\'s Included' : 
                   'Что включено'}
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• {t('language') === 'az' ? 'Çadır sahəsi' : 
                           t('language') === 'en' ? 'Tent space' : 
                           'Место для палатки'}</li>
                  <li>• {t('language') === 'az' ? 'Su və elektrik' : 
                           t('language') === 'en' ? 'Water and electricity' : 
                           'Вода и электричество'}</li>
                  <li>• {t('language') === 'az' ? 'Tualet və duş' : 
                           t('language') === 'en' ? 'Toilet and shower' : 
                           'Туалет и душ'}</li>
                  <li>• {t('language') === 'az' ? 'Təhlükəsizlik xidməti' : 
                           t('language') === 'en' ? 'Security service' : 
                           'Служба безопасности'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}