// Mock data for the festival website
export const mockData = {
  homepage: {
    heroSlides: [
      {
        id: 1,
        image: '/images/placeholder-image.jpg',
        title_az: 'Milli Yaylaq Festivalı 2024',
        title_en: 'National Highland Festival 2024',
        title_ru: 'Национальный горный фестиваль 2024',
        subtitle_az: 'Azərbaycanın ən böyük mədəni hadisəsi',
        subtitle_en: "Azerbaijan's biggest cultural event",
        subtitle_ru: 'Крупнейшее культурное событие Азербайджана'
      },
      {
        id: 2,
        image: '/images/placeholder-image.jpg',
        title_az: 'Mədəniyyət və Ənənə',
        title_en: 'Culture and Tradition',
        title_ru: 'Культура и традиции',
        subtitle_az: 'Xalqımızın zəngin mədəni irsini yaşayın',
        subtitle_en: 'Experience our rich cultural heritage',
        subtitle_ru: 'Испытайте наше богатое культурное наследие'
      },
      {
        id: 3,
        image: '/images/placeholder-image.jpg',
        title_az: 'Təbiət və Harmoniya',
        title_en: 'Nature and Harmony',
        title_ru: 'Природа и гармония',
        subtitle_az: 'Təbiətlə ünsiyyət qurun',
        subtitle_en: 'Connect with nature',
        subtitle_ru: 'Соединитесь с природой'
      }
    ]
  },

  news: [
    {
      id: 1,
      slug: 'festival-2024-announces',
      title_az: 'Milli Yaylaq Festivalı 2024 elan olundu',
      title_en: 'National Highland Festival 2024 announced',
      title_ru: 'Объявлен Национальный горный фестиваль 2024',
      excerpt_az: 'Bu il festivalımız daha da böyük və maraqlı olacaq...',
      excerpt_en: 'This year our festival will be bigger and more exciting...',
      excerpt_ru: 'В этом году наш фестиваль будет еще больше и интереснее...',
      content_az: 'Milli Yaylaq Festivalı 2024-cü ildə daha da böyük miqyasda keçiriləcək. Festival zamanı 50-dən çox fəaliyyət təşkil olunacaq. Ziyarətçilər ənənəvi musiqi, rəqs, sənətkarlıq və milli yeməklərlə tanış ola biləcəklər.',
      content_en: 'The National Highland Festival will be held on an even larger scale in 2024. More than 50 activities will be organized during the festival. Visitors will be able to get acquainted with traditional music, dance, crafts and national cuisine.',
      content_ru: 'Национальный горный фестиваль будет проводиться в еще большем масштабе в 2024 году. Во время фестиваля будет организовано более 50 мероприятий. Посетители смогут познакомиться с традиционной музыкой, танцами, ремеслами и национальной кухней.',
      image: '/images/placeholder-image.jpg',
      publishedAt: '2024-01-15',
      views: 1250
    },
    {
      id: 2,
      slug: 'artists-lineup-revealed',
      title_az: 'Sənətçilər siyahısı açıqlandı',
      title_en: 'Artists lineup revealed',
      title_ru: 'Объявлен список артистов',
      excerpt_az: 'Festivalda çıxış edəcək sənətçilər məlum oldu...',
      excerpt_en: 'The artists who will perform at the festival have been announced...',
      excerpt_ru: 'Объявлены артисты, которые выступят на фестивале...',
      content_az: 'Bu il festivalda ölkəmizin ən məşhur sənətçiləri çıxış edəcək. Həmçinin xarici qonaqlar da dəvət olunub.',
      content_en: 'This year, the most famous artists of our country will perform at the festival. Foreign guests have also been invited.',
      content_ru: 'В этом году на фестивале выступят самые известные артисты нашей страны. Также приглашены зарубежные гости.',
      image: '/images/placeholder-image.jpg',
      publishedAt: '2024-01-20',
      views: 980
    },
    {
      id: 3,
      slug: 'camping-registration-opens',
      title_az: 'Çadır qurma qeydiyyatı başladı',
      title_en: 'Camping registration opens',
      title_ru: 'Открыта регистрация для кемпинга',
      excerpt_az: 'Festivalda çadır qurmaq istəyənlər üçün qeydiyyat...',
      excerpt_en: 'Registration for those who want to camp at the festival...',
      excerpt_ru: 'Регистрация для желающих разбить лагерь на фестивале...',
      content_az: 'Festival ərazisində çadır qurmaq istəyənlər üçün qeydiyyat başlayıb. Məhdud sayda yer mövcuddur.',
      content_en: 'Registration has begun for those who want to camp in the festival area. Limited places are available.',
      content_ru: 'Началась регистрация для желающих разбить лагерь на территории фестиваля. Количество мест ограничено.',
      image: '/images/placeholder-image.jpg',
      publishedAt: '2024-01-25',
      views: 750
    }
  ],

  festival: {
    about: {
      title_az: 'Festival Haqqında',
      title_en: 'About Festival',
      title_ru: 'О фестивале',
      description_az: 'Milli Yaylaq Festivalı Azərbaycanın ən böyük və ən prestijli mədəni hadisəsidir. Hər il minlərlə ziyarətçini cəlb edən bu festival, xalqımızın zəngin mədəni irsini, adət-ənənələrini və müasir incəsənət nümunələrini bir araya gətirir.',
      description_en: 'National Highland Festival is Azerbaijan\'s biggest and most prestigious cultural event. This festival, which attracts thousands of visitors every year, brings together our nation\'s rich cultural heritage, traditions and modern art forms.',
      description_ru: 'Национальный горный фестиваль - это крупнейшее и самое престижное культурное событие Азербайджана. Этот фестиваль, который каждый год привлекает тысячи посетителей, объединяет богатое культурное наследие нашего народа, традиции и современные формы искусства.',
      image: '/images/placeholder-image.jpg'
    },

    program: [
      {
        id: 1,
        day: 1,
        startTime: '09:00',
        endTime: '10:30',
        title_az: 'Açılış mərasimi',
        title_en: 'Opening ceremony',
        title_ru: 'Церемония открытия',
        location_az: 'Əsas səhnə',
        location_en: 'Main stage',
        location_ru: 'Главная сцена',
        description_az: 'Festivalın rəsmi açılışı',
        description_en: 'Official opening of the festival',
        description_ru: 'Официальное открытие фестиваля'
      },
      {
        id: 2,
        day: 1,
        startTime: '11:00',
        endTime: '12:30',
        title_az: 'Xalq mahnıları konseri',
        title_en: 'Folk songs concert',
        title_ru: 'Концерт народных песен',
        location_az: 'Mədəniyyət sahəsi',
        location_en: 'Cultural area',
        location_ru: 'Культурная зона',
        description_az: 'Ənənəvi Azərbaycan xalq mahnıları',
        description_en: 'Traditional Azerbaijani folk songs',
        description_ru: 'Традиционные азербайджанские народные песни'
      },
      {
        id: 3,
        day: 2,
        startTime: '10:00',
        endTime: '11:30',
        title_az: 'Sənətkarlıq sərgileri',
        title_en: 'Handicraft exhibitions',
        title_ru: 'Выставки ремесел',
        location_az: 'Sənət mərkəzi',
        location_en: 'Art center',
        location_ru: 'Арт-центр',
        description_az: 'Ənənəvi Azərbaycan sənətkarlığı',
        description_en: 'Traditional Azerbaijani crafts',
        description_ru: 'Традиционные азербайджанские ремесла'
      },
      {
        id: 4,
        day: 3,
        startTime: '15:00',
        endTime: '16:30',
        title_az: 'Bağlanış mərasimi',
        title_en: 'Closing ceremony',
        title_ru: 'Церемония закрытия',
        location_az: 'Əsas səhnə',
        location_en: 'Main stage',
        location_ru: 'Главная сцена',
        description_az: 'Festivalın rəsmi bağlanışı',
        description_en: 'Official closing of the festival',
        description_ru: 'Официальное закрытие фестиваля'
      }
    ],

    partners: [
      {
        id: 1,
        name: 'Partner 1',
        logo: '/images/placeholder-image.jpg',
        website: 'https://partner1.com',
        category: 'main'
      },
      {
        id: 2,
        name: 'Partner 2',
        logo: '/images/placeholder-image.jpg',
        website: 'https://partner2.com',
        category: 'media'
      },
      {
        id: 3,
        name: 'Partner 3',
        logo: '/images/placeholder-image.jpg',
        website: 'https://partner3.com',
        category: 'sponsors'
      },
      {
        id: 4,
        name: 'Partner 4',
        logo: '/images/placeholder-image.jpg',
        website: 'https://partner4.com',
        category: 'main'
      },
      {
        id: 5,
        name: 'Partner 5',
        logo: '/images/placeholder-image.jpg',
        website: 'https://partner5.com',
        category: 'media'
      },
      {
        id: 6,
        name: 'Partner 6',
        logo: '/images/placeholder-image.jpg',
        website: 'https://partner6.com',
        category: 'sponsors'
      }
    ],

    pastFestivals: [
      {
        id: 1,
        year: 2023,
        title_az: '2023 Milli Yaylaq Festivalı',
        title_en: '2023 National Highland Festival',
        title_ru: 'Национальный горный фестиваль 2023',
        description_az: '2023-cü ildə festival böyük uğur qazandı. 15,000-dən çox ziyarətçi iştirak etdi.',
        description_en: 'The 2023 festival was a great success. More than 15,000 visitors participated.',
        description_ru: 'Фестиваль 2023 года имел большой успех. Приняли участие более 15 000 посетителей.',
        images: [
          '/images/placeholder-image.jpg',
          '/images/placeholder-image.jpg',
          '/images/placeholder-image.jpg'
        ]
      },
      {
        id: 2,
        year: 2022,
        title_az: '2022 Milli Yaylaq Festivalı',
        title_en: '2022 National Highland Festival',
        title_ru: 'Национальный горный фестиваль 2022',
        description_az: '2022-ci ildə festival yenidən başladı. COVID-19 pandemiyasından sonra ilk böyük festival.',
        description_en: '2022 festival restarted. The first major festival after the COVID-19 pandemic.',
        description_ru: 'Фестиваль 2022 года возобновился. Первый крупный фестиваль после пандемии COVID-19.',
        images: [
          '/images/placeholder-image.jpg',
          '/images/placeholder-image.jpg',
          '/images/placeholder-image.jpg'
        ]
      }
    ]
  },

  gallery: {
    sections: [
      {
        id: 1,
        title_az: 'Konsert Fotoları',
        title_en: 'Concert Photos',
        title_ru: 'Фотографии концертов',
        type: 'photos',
        coverImage: '/images/placeholder-image.jpg',
        itemCount: 45
      },
      {
        id: 2,
        title_az: 'Sənətkarlıq Sərgisi',
        title_en: 'Handicraft Exhibition',
        title_ru: 'Выставка ремесел',
        type: 'photos',
        coverImage: '/images/placeholder-image.jpg',
        itemCount: 32
      },
      {
        id: 3,
        title_az: 'Festival Videoları',
        title_en: 'Festival Videos',
        title_ru: 'Видео фестиваля',
        type: 'videos',
        coverImage: '/images/placeholder-image.jpg',
        itemCount: 12
      }
    ],

    media: {
      1: Array.from({ length: 45 }, (_, i) => ({
        id: i + 1,
        type: 'image',
        url: '/images/placeholder-image.jpg',
        thumbnail: '/images/placeholder-image.jpg',
        title_az: `Konsert Fotosu ${i + 1}`,
        title_en: `Concert Photo ${i + 1}`,
        title_ru: `Фото концерта ${i + 1}`
      })),
      2: Array.from({ length: 32 }, (_, i) => ({
        id: i + 1,
        type: 'image',
        url: '/images/placeholder-image.jpg',
        thumbnail: '/images/placeholder-image.jpg',
        title_az: `Sənətkarlıq ${i + 1}`,
        title_en: `Handicraft ${i + 1}`,
        title_ru: `Ремесло ${i + 1}`
      })),
      3: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        type: 'video',
        url: '/images/placeholder-image.jpg',
        thumbnail: '/images/placeholder-image.jpg',
        title_az: `Festival Videosu ${i + 1}`,
        title_en: `Festival Video ${i + 1}`,
        title_ru: `Видео фестиваля ${i + 1}`
      }))
    }
  },

  sponsorship: {
    title_az: 'Sponsor Olmaq',
    title_en: 'Become a Sponsor',
    title_ru: 'Стать спонсором',
    description_az: 'Milli Yaylaq Festivalına sponsor olmaqla Azərbaycanın mədəni həyatına töhfə verə bilərsiniz. Müxtəlif sponsorluq paketləri mövcuddur.',
    description_en: 'By sponsoring the National Highland Festival, you can contribute to Azerbaijan\'s cultural life. Various sponsorship packages are available.',
    description_ru: 'Спонсируя Национальный горный фестиваль, вы можете внести вклад в культурную жизнь Азербайджана. Доступны различные спонсорские пакеты.',
    benefits: [
      {
        title_az: 'Brend Tanınması',
        title_en: 'Brand Recognition',
        title_ru: 'Узнаваемость бренда',
        description_az: 'Festivalda brendinizin tanınması',
        description_en: 'Brand recognition at the festival',
        description_ru: 'Узнаваемость бренда на фестивале'
      },
      {
        title_az: 'Media Dəstəyi',
        title_en: 'Media Support',
        title_ru: 'Медиа поддержка',
        description_az: 'Geniş media əhatəsi',
        description_en: 'Extensive media coverage',
        description_ru: 'Обширное медиа покрытие'
      }
    ],
    contactPhone: '+994 XX XXX XX XX'
  },

  contact: {
    address_az: 'Bakı şəhəri, Nizami rayonu',
    address_en: 'Baku city, Nizami district',
    address_ru: 'город Баку, Низаминский район',
    phone: '+994 XX XXX XX XX',
    email: 'info@milliyaylaq.az',
    workingHours_az: 'Bazar ertəsi - Cümə: 09:00 - 18:00',
    workingHours_en: 'Monday - Friday: 09:00 - 18:00',
    workingHours_ru: 'Понедельник - Пятница: 09:00 - 18:00'
  }
};

// Generate more news for pagination
for (let i = 4; i <= 20; i++) {
  mockData.news.push({
    id: i,
    slug: `news-${i}`,
    title_az: `Xəbər ${i}`,
    title_en: `News ${i}`,
    title_ru: `Новость ${i}`,
    excerpt_az: `Bu ${i}-ci xəbərin qısa məzmunu...`,
    excerpt_en: `This is the excerpt of news ${i}...`,
    excerpt_ru: `Это краткое содержание новости ${i}...`,
    content_az: `Bu ${i}-ci xəbərin tam məzmunu. Festival haqqında ətraflı məlumat.`,
    content_en: `This is the full content of news ${i}. Detailed information about the festival.`,
    content_ru: `Это полное содержание новости ${i}. Подробная информация о фестивале.`,
    image: '/images/placeholder-image.jpg',
    publishedAt: `2024-01-${String(i).padStart(2, '0')}`,
    views: Math.floor(Math.random() * 1000) + 100
  });
}