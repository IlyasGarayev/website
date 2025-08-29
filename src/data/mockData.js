// Mock data for the Milli Yaylaq Festival website
// This file simulates API responses with multi-language support

const PLACEHOLDER_IMAGE = '/images/placeholder-image.jpg';

// Helper function to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data structures
const mockData = {
  // Homepage hero slider data
  heroSlides: [
    {
      id: 1,
      image: PLACEHOLDER_IMAGE,
      title_az: "Milli Yaylaq Festivalı 2024",
      title_en: "National Highland Festival 2024",
      title_ru: "Национальный фестиваль высокогорья 2024",
      subtitle_az: "Azərbaycanın ən böyük təbiət festivalı",
      subtitle_en: "Azerbaijan's Largest Nature Festival",
      subtitle_ru: "Крупнейший природный фестиваль Азербайджана"
    },
    {
      id: 2,
      image: PLACEHOLDER_IMAGE,
      title_az: "Təbiətlə bağlanış",
      title_en: "Connect with Nature",
      title_ru: "Связь с природой",
      subtitle_az: "Dağların qucağında unutulmaz anlar",
      subtitle_en: "Unforgettable moments in the embrace of mountains",
      subtitle_ru: "Незабываемые моменты в объятиях гор"
    },
    {
      id: 3,
      image: PLACEHOLDER_IMAGE,
      title_az: "Mədəniyyət və musiqinin qovşağı",
      title_en: "Junction of Culture and Music",
      title_ru: "Пересечение культуры и музыки",
      subtitle_az: "Ənənəvi və müasir musiqinin vəhdəti",
      subtitle_en: "Unity of traditional and modern music",
      subtitle_ru: "Единство традиционной и современной музыки"
    }
  ],

  // About festival data
  aboutFestival: {
    title_az: "Festival haqqında",
    title_en: "About Festival",
    title_ru: "О фестивале",
    content_az: "Milli Yaylaq Festivalı Azərbaycanın ən böyük təbiət festivalıdır. Bu festival hər il minlərlə insanı bir araya gətirir və onlara təbiətin gözəlliyi ilə yanaşı, mədəniyyət və musiqinin zənginliyini təqdim edir. Festival zamanı iştirakçılar öz çadırlarını qura bilir və təbiətin qucağında gecələyə bilərlər.",
    content_en: "The National Highland Festival is Azerbaijan's largest nature festival. This festival brings together thousands of people every year and offers them the beauty of nature along with the richness of culture and music. During the festival, participants can set up their own tents and spend the night in the embrace of nature.",
    content_ru: "Национальный фестиваль высокогорья - это крупнейший природный фестиваль Азербайджана. Этот фестиваль ежегодно собирает тысячи людей и предлагает им красоту природы наряду с богатством культуры и музыки. Во время фестиваля участники могут установить свои палатки и провести ночь в объятиях природы.",
    image: PLACEHOLDER_IMAGE,
    shortContent_az: "Milli Yaylaq Festivalı Azərbaycanın ən böyük təbiət festivalıdır...",
    shortContent_en: "The National Highland Festival is Azerbaijan's largest nature festival...",
    shortContent_ru: "Национальный фестиваль высокогорья - это крупнейший природный фестиваль..."
  },

  // News data
  news: [
    {
      id: 1,
      title_az: "Festival 2024 proqramı açıqlandı",
      title_en: "Festival 2024 program announced",
      title_ru: "Объявлена программа фестиваля 2024",
      slug_az: "festival-2024-proqrami-aciqlandir",
      slug_en: "festival-2024-program-announced",
      slug_ru: "obyavlena-programma-festivalya-2024",
      content_az: "2024-cü il Milli Yaylaq Festivalının proqramı rəsmi olaraq açıqlanıb. Bu il festival daha da zəngin proqramla keçiriləcək.",
      content_en: "The program of the 2024 National Highland Festival has been officially announced. This year the festival will be held with an even richer program.",
      content_ru: "Программа Национального фестиваля высокогорья 2024 года официально объявлена. В этом году фестиваль пройдет с еще более богатой программой.",
      shortContent_az: "2024-cü il Milli Yaylaq Festivalının proqramı rəsmi olaraq açıqlanıb...",
      shortContent_en: "The program of the 2024 National Highland Festival has been officially announced...",
      shortContent_ru: "Программа Национального фестиваля высокогорья 2024 года официально объявлена...",
      image: PLACEHOLDER_IMAGE,
      publishDate: "2024-01-15",
      views: 1250,
      category_az: "Elan",
      category_en: "Announcement",
      category_ru: "Объявление"
    },
    {
      id: 2,
      title_az: "Yeni tərəfdaşlar festivalda",
      title_en: "New partners join the festival",
      title_ru: "Новые партнеры присоединяются к фестивалю",
      slug_az: "yeni-terefdashlar-festivalda",
      slug_en: "new-partners-join-festival",
      slug_ru: "novye-partnery-prisoedinayutsya-k-festivalu",
      content_az: "Bu il festivala yeni tərəfdaşlar qoşulub. Onların dəstəyi ilə festival daha da maraqlı olacaq.",
      content_en: "New partners have joined the festival this year. With their support, the festival will be even more interesting.",
      content_ru: "В этом году к фестивалю присоединились новые партнеры. С их поддержкой фестиваль станет еще более интересным.",
      shortContent_az: "Bu il festivala yeni tərəfdaşlar qoşulub...",
      shortContent_en: "New partners have joined the festival this year...",
      shortContent_ru: "В этом году к фестивалю присоединились новые партнеры...",
      image: PLACEHOLDER_IMAGE,
      publishDate: "2024-01-10",
      views: 890,
      category_az: "Tərəfdaşlıq",
      category_en: "Partnership",
      category_ru: "Партнерство"
    },
    {
      id: 3,
      title_az: "Qeydiyyat başladı",
      title_en: "Registration has started",
      title_ru: "Регистрация началась",
      slug_az: "qeydiyyat-basladi",
      slug_en: "registration-has-started",
      slug_ru: "registratsiya-nachalas",
      content_az: "Festival üçün qeydiyyat prosesi başlayıb. İstəyənlər rəsmi saytdan qeydiyyatdan keçə bilərlər.",
      content_en: "The registration process for the festival has begun. Those who wish can register through the official website.",
      content_ru: "Процесс регистрации на фестиваль начался. Желающие могут зарегистрироваться через официальный сайт.",
      shortContent_az: "Festival üçün qeydiyyat prosesi başlayıb...",
      shortContent_en: "The registration process for the festival has begun...",
      shortContent_ru: "Процесс регистрации на фестиваль начался...",
      image: PLACEHOLDER_IMAGE,
      publishDate: "2024-01-05",
      views: 2100,
      category_az: "Qeydiyyat",
      category_en: "Registration",
      category_ru: "Регистрация"
    }
  ],

  // Festival program data
  program: {
    days: [
      {
        day: 1,
        date: "2024-07-15",
        events: [
          {
            id: 1,
            title_az: "Açılış mərasimi",
            title_en: "Opening ceremony",
            title_ru: "Церемония открытия",
            startTime: "10:00",
            endTime: "11:00",
            location_az: "Əsas səhnə",
            location_en: "Main stage",
            location_ru: "Главная сцена",
            description_az: "Festivalın rəsmi açılışı",
            description_en: "Official opening of the festival",
            description_ru: "Официальное открытие фестиваля"
          },
          {
            id: 2,
            title_az: "Milli musiqilər",
            title_en: "National music",
            title_ru: "Национальная музыка",
            startTime: "14:00",
            endTime: "16:00",
            location_az: "Əsas səhnə",
            location_en: "Main stage",
            location_ru: "Главная сцена",
            description_az: "Azərbaycan milli musiqilərinin ifası",
            description_en: "Performance of Azerbaijani national music",
            description_ru: "Исполнение азербайджанской национальной музыки"
          }
        ]
      },
      {
        day: 2,
        date: "2024-07-16",
        events: [
          {
            id: 3,
            title_az: "Müasir musiqilər",
            title_en: "Modern music",
            title_ru: "Современная музыка",
            startTime: "15:00",
            endTime: "17:00",
            location_az: "Əsas səhnə",
            location_en: "Main stage",
            location_ru: "Главная сцена",
            description_az: "Müasir musiqiçilərin çıxışı",
            description_en: "Performance by modern musicians",
            description_ru: "Выступление современных музыкантов"
          }
        ]
      },
      {
        day: 3,
        date: "2024-07-17",
        events: [
          {
            id: 4,
            title_az: "Bağlanış mərasimi",
            title_en: "Closing ceremony",
            title_ru: "Церемония закрытия",
            startTime: "18:00",
            endTime: "20:00",
            location_az: "Əsas səhnə",
            location_en: "Main stage",
            location_ru: "Главная сцена",
            description_az: "Festivalın rəsmi bağlanışı",
            description_en: "Official closing of the festival",
            description_ru: "Официальное закрытие фестиваля"
          }
        ]
      }
    ]
  },

  // Partners data
  partners: [
    {
      id: 1,
      name: "Tərəfdaş 1",
      logo: PLACEHOLDER_IMAGE,
      website: "https://example.com",
      category_az: "Əsas tərəfdaş",
      category_en: "Main partner",
      category_ru: "Главный партнер"
    },
    {
      id: 2,
      name: "Tərəfdaş 2",
      logo: PLACEHOLDER_IMAGE,
      website: "https://example.com",
      category_az: "Media tərəfdaş",
      category_en: "Media partner",
      category_ru: "Медиа партнер"
    },
    {
      id: 3,
      name: "Tərəfdaş 3",
      logo: PLACEHOLDER_IMAGE,
      website: "https://example.com",
      category_az: "Texniki tərəfdaş",
      category_en: "Technical partner",
      category_ru: "Технический партнер"
    }
  ],

  // Contact information
  contact: {
    phone: "+994 12 345 67 89",
    email: "info@myf.az",
    address_az: "Bakı, Azərbaycan",
    address_en: "Baku, Azerbaijan",
    address_ru: "Баку, Азербайджан",
    socialMedia: {
      facebook: "https://facebook.com/myf",
      instagram: "https://instagram.com/myf",
      twitter: "https://twitter.com/myf"
    }
  },

  // Sponsorship information
  sponsorship: {
    title_az: "Sponsorluq",
    title_en: "Sponsorship",
    title_ru: "Спонсорство",
    content_az: "Milli Yaylaq Festivalına sponsor olmaq istəyirsinizsə, bizimlə əlaqə saxlayın. Festivalın uğuru sizin dəstəyinizdən asılıdır. Ətraflı məlumat üçün bizə zəng edin: +994 12 345 67 89",
    content_en: "If you want to sponsor the National Highland Festival, please contact us. The success of the festival depends on your support. For detailed information, call us: +994 12 345 67 89",
    content_ru: "Если вы хотите стать спонсором Национального фестиваля высокогорья, свяжитесь с нами. Успех фестиваля зависит от вашей поддержки. Для получения подробной информации звоните нам: +994 12 345 67 89",
    contactNumber: "+994 12 345 67 89"
  },

  // Past festivals data
  pastFestivals: [
    {
      id: 1,
      year: 2023,
      title_az: "Milli Yaylaq Festivalı 2023",
      title_en: "National Highland Festival 2023",
      title_ru: "Национальный фестиваль высокогорья 2023",
      description_az: "2023-cü ildə keçirilən festival böyük uğur qazandı.",
      description_en: "The festival held in 2023 was a great success.",
      description_ru: "Фестиваль, проведенный в 2023 году, имел большой успех.",
      images: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE]
    },
    {
      id: 2,
      year: 2022,
      title_az: "Milli Yaylaq Festivalı 2022",
      title_en: "National Highland Festival 2022",
      title_ru: "Национальный фестиваль высокогорья 2022",
      description_az: "2022-ci ildə keçirilən festival çox maraqlı oldu.",
      description_en: "The festival held in 2022 was very interesting.",
      description_ru: "Фестиваль, проведенный в 2022 году, был очень интересным.",
      images: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE]
    }
  ],

  // Gallery sections
  gallerySections: [
    {
      id: 1,
      title_az: "2023 Festival Şəkilləri",
      title_en: "2023 Festival Photos",
      title_ru: "Фотографии фестиваля 2023",
      slug_az: "2023-festival-sekilləri",
      slug_en: "2023-festival-photos",
      slug_ru: "fotografii-festivalya-2023",
      coverImage: PLACEHOLDER_IMAGE,
      mediaCount: 45
    },
    {
      id: 2,
      title_az: "2022 Festival Videoları",
      title_en: "2022 Festival Videos",
      title_ru: "Видео фестиваля 2022",
      slug_az: "2022-festival-videolari",
      slug_en: "2022-festival-videos",
      slug_ru: "video-festivalya-2022",
      coverImage: PLACEHOLDER_IMAGE,
      mediaCount: 12
    }
  ],

  // Gallery media (for specific sections)
  galleryMedia: {
    1: Array.from({ length: 45 }, (_, i) => ({
      id: i + 1,
      type: 'image',
      url: PLACEHOLDER_IMAGE,
      thumbnail: PLACEHOLDER_IMAGE,
      title_az: `Şəkil ${i + 1}`,
      title_en: `Photo ${i + 1}`,
      title_ru: `Фото ${i + 1}`,
      date: "2023-07-15"
    })),
    2: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      type: 'video',
      url: PLACEHOLDER_IMAGE,
      thumbnail: PLACEHOLDER_IMAGE,
      title_az: `Video ${i + 1}`,
      title_en: `Video ${i + 1}`,
      title_ru: `Видео ${i + 1}`,
      date: "2022-07-15"
    }))
  }
};

// API simulation functions
export const api = {
  // Get homepage data
  getHomepageData: async (lang = 'az') => {
    await delay(300);
    return {
      heroSlides: mockData.heroSlides,
      aboutFestival: mockData.aboutFestival,
      latestNews: mockData.news.slice(0, 3),
      partners: mockData.partners.slice(0, 6)
    };
  },

  // Get news list with pagination
  getNews: async (lang = 'az', page = 1, pageSize = 15) => {
    await delay(400);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedNews = mockData.news.slice(startIndex, endIndex);
    
    return {
      news: paginatedNews,
      totalPages: Math.ceil(mockData.news.length / pageSize),
      currentPage: page,
      totalItems: mockData.news.length
    };
  },

  // Get single news by slug
  getNewsBySlug: async (slug, lang = 'az') => {
    await delay(300);
    const news = mockData.news.find(item => 
      item[`slug_${lang}`] === slug
    );
    
    if (news) {
      // Simulate view count increment
      news.views += 1;
      return news;
    }
    return null;
  },

  // Get festival about information
  getAboutFestival: async (lang = 'az') => {
    await delay(300);
    return mockData.aboutFestival;
  },

  // Get festival program
  getProgram: async (lang = 'az') => {
    await delay(400);
    return mockData.program;
  },

  // Get partners
  getPartners: async (lang = 'az') => {
    await delay(300);
    return mockData.partners;
  },

  // Get contact information
  getContact: async (lang = 'az') => {
    await delay(200);
    return mockData.contact;
  },

  // Get sponsorship information
  getSponsorship: async (lang = 'az') => {
    await delay(300);
    return mockData.sponsorship;
  },

  // Get past festivals
  getPastFestivals: async (lang = 'az') => {
    await delay(400);
    return mockData.pastFestivals;
  },

  // Get gallery sections
  getGallerySections: async (lang = 'az') => {
    await delay(300);
    return mockData.gallerySections;
  },

  // Get gallery media for specific section
  getGalleryMedia: async (sectionId, lang = 'az', page = 1, pageSize = 15) => {
    await delay(400);
    const media = mockData.galleryMedia[sectionId] || [];
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedMedia = media.slice(startIndex, endIndex);
    
    return {
      media: paginatedMedia,
      totalPages: Math.ceil(media.length / pageSize),
      currentPage: page,
      totalItems: media.length
    };
  },

  // Submit "Öz Yurdunu Qur" form
  submitOzYurdunuQur: async (formData) => {
    await delay(500);
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Simulate success/error randomly for demo
    if (Math.random() > 0.1) {
      return { success: true, message: 'Form submitted successfully' };
    } else {
      return { success: false, message: 'An error occurred' };
    }
  }
};

export default mockData;