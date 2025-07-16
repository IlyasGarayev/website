// API simulation file with mock data for all endpoints

// Mock data for different languages
const mockData = {
    // Homepage data
    homepageData: {
        az: {
            heroSlides: [
                {
                    id: 1,
                    image: './assets/images/hero-slide-1.jpg',
                    title: 'Milli Yaylaq Festivalı 2024',
                    subtitle: 'Azərbaycanın ən böyük mədəni tədbiri',
                    description: 'Ənənəvi mədəniyyətimizi yaşatmaq və gələcək nəsillərə ötürmək üçün'
                },
                {
                    id: 2,
                    image: './assets/images/hero-slide-2.jpg',
                    title: 'Mədəni İrs və Ənənələr',
                    subtitle: 'Yaylaq həyatının gözəlliyi',
                    description: 'Dağların zirvəsində ənənəvi yaşayış tərzi'
                },
                {
                    id: 3,
                    image: './assets/images/hero-slide-3.jpg',
                    title: 'Milli Birlik və Həmrəylik',
                    subtitle: 'Bir millət, bir dil, bir mədəniyyət',
                    description: 'Azərbaycan xalqının mədəni zənginliyi'
                }
            ],
            aboutText: `Milli Yaylaq Festivalı Azərbaycanın ən böyük mədəni tədbirdir. Bu festival ölkəmizin zəngin mədəni irsini, ənənələrini və yaylaq həyatının gözəlliklərini təbliğ etmək məqsədi ilə keçirilir. Festival zamanı milli rəqslər, musiqi, sənətkarlıq və ənənəvi yeməklər nümayiş etdirilir.`,
            latestNews: [
                {
                    id: 1,
                    title: 'Festival 2024 Proqramı Açıqlandı',
                    excerpt: 'Bu il festivalın proqramı həmişəkindən daha zəngin olacaq. Müxtəlif bölgələrdən sənətkarlar iştirak edəcək.',
                    date: '2024-01-15',
                    slug: 'festival-2024-proqrami-aciqlandı',
                    image: './assets/images/news-1.jpg',
                    views: 1250
                },
                {
                    id: 2,
                    title: 'Yeni Tərəfdaşlarımız',
                    excerpt: 'Festivalımıza yeni tərəfdaşlar qoşuldu. Onların dəstəyi ilə festivali daha da genişləndirəcəyik.',
                    date: '2024-01-10',
                    slug: 'yeni-terefdaslarimiz',
                    image: './assets/images/news-2.jpg',
                    views: 890
                },
                {
                    id: 3,
                    title: 'Könüllü Qeydiyyatı Başladı',
                    excerpt: 'Festival könüllüləri üçün qeydiyyat prosesi başladı. Maraqlaanan gənclər müraciət edə bilər.',
                    date: '2024-01-05',
                    slug: 'konullu-qeydiyyati-basladi',
                    image: './assets/images/news-3.jpg',
                    views: 2100
                }
            ]
        },
        en: {
            heroSlides: [
                {
                    id: 1,
                    image: './assets/images/hero-slide-1.jpg',
                    title: 'National Highland Festival 2024',
                    subtitle: 'Azerbaijan\'s biggest cultural event',
                    description: 'To preserve our traditional culture and pass it on to future generations'
                },
                {
                    id: 2,
                    image: './assets/images/hero-slide-2.jpg',
                    title: 'Cultural Heritage and Traditions',
                    subtitle: 'The beauty of highland life',
                    description: 'Traditional lifestyle on mountain peaks'
                },
                {
                    id: 3,
                    image: './assets/images/hero-slide-3.jpg',
                    title: 'National Unity and Solidarity',
                    subtitle: 'One nation, one language, one culture',
                    description: 'Cultural richness of Azerbaijani people'
                }
            ],
            aboutText: `The National Highland Festival is Azerbaijan's biggest cultural event. This festival is held to promote our country's rich cultural heritage, traditions, and the beauty of highland life. During the festival, national dances, music, crafts, and traditional foods are showcased.`,
            latestNews: [
                {
                    id: 1,
                    title: 'Festival 2024 Program Announced',
                    excerpt: 'This year\'s festival program will be richer than ever. Artists from various regions will participate.',
                    date: '2024-01-15',
                    slug: 'festival-2024-program-announced',
                    image: './assets/images/news-1.jpg',
                    views: 1250
                },
                {
                    id: 2,
                    title: 'Our New Partners',
                    excerpt: 'New partners have joined our festival. With their support, we will expand the festival even more.',
                    date: '2024-01-10',
                    slug: 'our-new-partners',
                    image: './assets/images/news-2.jpg',
                    views: 890
                },
                {
                    id: 3,
                    title: 'Volunteer Registration Started',
                    excerpt: 'Registration process for festival volunteers has started. Interested youth can apply.',
                    date: '2024-01-05',
                    slug: 'volunteer-registration-started',
                    image: './assets/images/news-3.jpg',
                    views: 2100
                }
            ]
        },
        ru: {
            heroSlides: [
                {
                    id: 1,
                    image: './assets/images/hero-slide-1.jpg',
                    title: 'Национальный Фестиваль Яйлаг 2024',
                    subtitle: 'Крупнейшее культурное событие Азербайджана',
                    description: 'Для сохранения нашей традиционной культуры и передачи ее будущим поколениям'
                },
                {
                    id: 2,
                    image: './assets/images/hero-slide-2.jpg',
                    title: 'Культурное Наследие и Традиции',
                    subtitle: 'Красота горной жизни',
                    description: 'Традиционный образ жизни на горных вершинах'
                },
                {
                    id: 3,
                    image: './assets/images/hero-slide-3.jpg',
                    title: 'Национальное Единство и Солидарность',
                    subtitle: 'Одна нация, один язык, одна культура',
                    description: 'Культурное богатство азербайджанского народа'
                }
            ],
            aboutText: `Национальный Фестиваль Яйлаг - это крупнейшее культурное событие Азербайджана. Этот фестиваль проводится с целью продвижения богатого культурного наследия нашей страны, традиций и красоты горной жизни. Во время фестиваля демонстрируются национальные танцы, музыка, ремесла и традиционные блюда.`,
            latestNews: [
                {
                    id: 1,
                    title: 'Программа Фестиваля 2024 Объявлена',
                    excerpt: 'Программа фестиваля этого года будет богаче, чем когда-либо. Примут участие артисты из различных регионов.',
                    date: '2024-01-15',
                    slug: 'festival-2024-program-announced',
                    image: './assets/images/news-1.jpg',
                    views: 1250
                },
                {
                    id: 2,
                    title: 'Наши Новые Партнеры',
                    excerpt: 'К нашему фестивалю присоединились новые партнеры. С их поддержкой мы расширим фестиваль еще больше.',
                    date: '2024-01-10',
                    slug: 'our-new-partners',
                    image: './assets/images/news-2.jpg',
                    views: 890
                },
                {
                    id: 3,
                    title: 'Регистрация Волонтеров Началась',
                    excerpt: 'Начался процесс регистрации волонтеров фестиваля. Заинтересованная молодежь может подать заявку.',
                    date: '2024-01-05',
                    slug: 'volunteer-registration-started',
                    image: './assets/images/news-3.jpg',
                    views: 2100
                }
            ]
        }
    },

    // Festival About data
    festivalAbout: {
        az: {
            title: 'Festival Haqqında',
            content: `
                <p>Milli Yaylaq Festivalı Azərbaycanın ən böyük və əhəmiyyətli mədəni tədbirlərindən biridir. Bu festival hər il yay aylarında ölkəmizin müxtəlif bölgələrində keçirilir və minlərlə insan iştirak edir.</p>
                
                <h3>Festivalın Məqsədi</h3>
                <p>Festivalın əsas məqsədi Azərbaycan xalqının zəngin mədəni irsini, ənənələrini və yaylaq həyatının gözəlliklərini təbliğ etmək, gənc nəsillərə ötürməkdir. Həmçinin, turizmin inkişafına töhfə vermək və yerli iqtisadiyyatı dəstəkləmək də festivalın vacib hədəflərindəndir.</p>
                
                <h3>Festivalın Tarixçəsi</h3>
                <p>İlk dəfə 2015-ci ildə keçirilən festival, hər il daha da genişlənir və beynəlxalq səviyyədə tanınır. Bu gün festival Azərbaycanın mədəni kalendarının əhəmiyyətli hissəsi hesab olunur.</p>
                
                <h3>Fəaliyyətlər</h3>
                <ul>
                    <li>Milli rəqslər və musiqi ifaları</li>
                    <li>Ənənəvi sənətkarlıq nümayişi</li>
                    <li>Milli yeməklər təqdimatı</li>
                    <li>Atçılıq yarışları</li>
                    <li>Xalq oyunları</li>
                    <li>Mədəni seminarlar və söhbətlər</li>
                </ul>
            `,
            images: [
                './assets/images/about-1.jpg',
                './assets/images/about-2.jpg',
                './assets/images/about-3.jpg'
            ]
        },
        en: {
            title: 'About Festival',
            content: `
                <p>The National Highland Festival is one of Azerbaijan's largest and most significant cultural events. This festival is held annually during the summer months in various regions of our country and attracts thousands of participants.</p>
                
                <h3>Purpose of the Festival</h3>
                <p>The main purpose of the festival is to promote the rich cultural heritage, traditions, and beauty of highland life of the Azerbaijani people, and to pass them on to younger generations. Contributing to tourism development and supporting the local economy are also important goals of the festival.</p>
                
                <h3>History of the Festival</h3>
                <p>First held in 2015, the festival expands each year and gains international recognition. Today, the festival is considered an important part of Azerbaijan's cultural calendar.</p>
                
                <h3>Activities</h3>
                <ul>
                    <li>National dances and music performances</li>
                    <li>Traditional crafts demonstration</li>
                    <li>National food presentation</li>
                    <li>Horseback riding competitions</li>
                    <li>Folk games</li>
                    <li>Cultural seminars and talks</li>
                </ul>
            `,
            images: [
                './assets/images/about-1.jpg',
                './assets/images/about-2.jpg',
                './assets/images/about-3.jpg'
            ]
        },
        ru: {
            title: 'О Фестивале',
            content: `
                <p>Национальный Фестиваль Яйлаг - одно из крупнейших и наиболее значимых культурных событий Азербайджана. Этот фестиваль проводится ежегодно в летние месяцы в различных регионах нашей страны и привлекает тысячи участников.</p>
                
                <h3>Цель Фестиваля</h3>
                <p>Основная цель фестиваля - продвижение богатого культурного наследия, традиций и красоты горной жизни азербайджанского народа, а также передача их молодым поколениям. Содействие развитию туризма и поддержка местной экономики также являются важными целями фестиваля.</p>
                
                <h3>История Фестиваля</h3>
                <p>Впервые проведенный в 2015 году, фестиваль расширяется с каждым годом и получает международное признание. Сегодня фестиваль считается важной частью культурного календаря Азербайджана.</p>
                
                <h3>Мероприятия</h3>
                <ul>
                    <li>Национальные танцы и музыкальные выступления</li>
                    <li>Демонстрация традиционных ремесел</li>
                    <li>Презентация национальной кухни</li>
                    <li>Соревнования по верховой езде</li>
                    <li>Народные игры</li>
                    <li>Культурные семинары и беседы</li>
                </ul>
            `,
            images: [
                './assets/images/about-1.jpg',
                './assets/images/about-2.jpg',
                './assets/images/about-3.jpg'
            ]
        }
    },

    // Festival Program data
    festivalProgram: {
        az: {
            title: 'Festival Proqramı',
            days: [
                {
                    day: 'Cümə',
                    date: '2024-07-15',
                    events: [
                        {
                            time: '09:00',
                            event: 'Açılış Mərasimi',
                            location: 'Mərkəzi Sahə'
                        },
                        {
                            time: '11:00',
                            event: 'Ənənəvi Sənətkarlıq Nümayişi',
                            location: 'Sənətkarlıq Çadırı'
                        },
                        {
                            time: '14:00',
                            event: 'Milli Yeməklər Təqdimatı',
                            location: 'Qida Sahəsi'
                        },
                        {
                            time: '16:00',
                            event: 'Milli Rəqslər',
                            location: 'Səhnə'
                        },
                        {
                            time: '20:00',
                            event: 'Konsert Proqramı',
                            location: 'Əsas Səhnə'
                        }
                    ]
                },
                {
                    day: 'Şənbə',
                    date: '2024-07-16',
                    events: [
                        {
                            time: '10:00',
                            event: 'Atçılıq Yarışları',
                            location: 'Hipodrom'
                        },
                        {
                            time: '12:00',
                            event: 'Xalq Oyunları',
                            location: 'Oyun Sahəsi'
                        },
                        {
                            time: '15:00',
                            event: 'Mədəni Seminar',
                            location: 'Konfrans Zalı'
                        },
                        {
                            time: '18:00',
                            event: 'Musiqi Qarşılaşması',
                            location: 'Səhnə'
                        },
                        {
                            time: '21:00',
                            event: 'Gala Konsert',
                            location: 'Əsas Səhnə'
                        }
                    ]
                }
            ]
        },
        en: {
            title: 'Festival Program',
            days: [
                {
                    day: 'Friday',
                    date: '2024-07-15',
                    events: [
                        {
                            time: '09:00',
                            event: 'Opening Ceremony',
                            location: 'Central Area'
                        },
                        {
                            time: '11:00',
                            event: 'Traditional Crafts Exhibition',
                            location: 'Crafts Tent'
                        },
                        {
                            time: '14:00',
                            event: 'National Food Presentation',
                            location: 'Food Area'
                        },
                        {
                            time: '16:00',
                            event: 'National Dances',
                            location: 'Stage'
                        },
                        {
                            time: '20:00',
                            event: 'Concert Program',
                            location: 'Main Stage'
                        }
                    ]
                },
                {
                    day: 'Saturday',
                    date: '2024-07-16',
                    events: [
                        {
                            time: '10:00',
                            event: 'Horseback Riding Competitions',
                            location: 'Hippodrome'
                        },
                        {
                            time: '12:00',
                            event: 'Folk Games',
                            location: 'Game Area'
                        },
                        {
                            time: '15:00',
                            event: 'Cultural Seminar',
                            location: 'Conference Hall'
                        },
                        {
                            time: '18:00',
                            event: 'Music Battle',
                            location: 'Stage'
                        },
                        {
                            time: '21:00',
                            event: 'Gala Concert',
                            location: 'Main Stage'
                        }
                    ]
                }
            ]
        },
        ru: {
            title: 'Программа Фестиваля',
            days: [
                {
                    day: 'Пятница',
                    date: '2024-07-15',
                    events: [
                        {
                            time: '09:00',
                            event: 'Церемония Открытия',
                            location: 'Центральная Площадь'
                        },
                        {
                            time: '11:00',
                            event: 'Выставка Традиционных Ремесел',
                            location: 'Шатер Ремесел'
                        },
                        {
                            time: '14:00',
                            event: 'Презентация Национальной Кухни',
                            location: 'Зона Питания'
                        },
                        {
                            time: '16:00',
                            event: 'Национальные Танцы',
                            location: 'Сцена'
                        },
                        {
                            time: '20:00',
                            event: 'Концертная Программа',
                            location: 'Главная Сцена'
                        }
                    ]
                },
                {
                    day: 'Суббота',
                    date: '2024-07-16',
                    events: [
                        {
                            time: '10:00',
                            event: 'Соревнования по Верховой Езде',
                            location: 'Ипподром'
                        },
                        {
                            time: '12:00',
                            event: 'Народные Игры',
                            location: 'Игровая Зона'
                        },
                        {
                            time: '15:00',
                            event: 'Культурный Семинар',
                            location: 'Конференц-Зал'
                        },
                        {
                            time: '18:00',
                            event: 'Музыкальная Битва',
                            location: 'Сцена'
                        },
                        {
                            time: '21:00',
                            event: 'Гала-Концерт',
                            location: 'Главная Сцена'
                        }
                    ]
                }
            ]
        }
    },

    // News data with pagination
    news: {
        az: generateNewsData('az'),
        en: generateNewsData('en'),
        ru: generateNewsData('ru')
    },

    // Partners data
    partners: {
        az: {
            title: 'Tərəfdaşlar',
            mainPartners: [
                {
                    id: 1,
                    name: 'Azərbaycan Mədəniyyət Nazirliyi',
                    logo: './assets/images/partners/ministry-culture.png',
                    website: 'https://www.mct.gov.az'
                },
                {
                    id: 2,
                    name: 'Azərbaycan Turizm Bürosu',
                    logo: './assets/images/partners/tourism-bureau.png',
                    website: 'https://www.azerbaijan.travel'
                }
            ],
            supportingPartners: [
                {
                    id: 3,
                    name: 'AZAL',
                    logo: './assets/images/partners/azal.png',
                    website: 'https://www.azal.az'
                },
                {
                    id: 4,
                    name: 'Kapital Bank',
                    logo: './assets/images/partners/kapital-bank.png',
                    website: 'https://www.kapitalbank.az'
                }
            ],
            mediaPartners: [
                {
                    id: 5,
                    name: 'AzTV',
                    logo: './assets/images/partners/aztv.png',
                    website: 'https://www.aztv.az'
                },
                {
                    id: 6,
                    name: 'Azərbaycan Qəzeti',
                    logo: './assets/images/partners/azerbaijan-newspaper.png',
                    website: 'https://www.azerbaijan-news.az'
                }
            ]
        },
        en: {
            title: 'Partners',
            mainPartners: [
                {
                    id: 1,
                    name: 'Ministry of Culture of Azerbaijan',
                    logo: './assets/images/partners/ministry-culture.png',
                    website: 'https://www.mct.gov.az'
                },
                {
                    id: 2,
                    name: 'Azerbaijan Tourism Bureau',
                    logo: './assets/images/partners/tourism-bureau.png',
                    website: 'https://www.azerbaijan.travel'
                }
            ],
            supportingPartners: [
                {
                    id: 3,
                    name: 'AZAL',
                    logo: './assets/images/partners/azal.png',
                    website: 'https://www.azal.az'
                },
                {
                    id: 4,
                    name: 'Kapital Bank',
                    logo: './assets/images/partners/kapital-bank.png',
                    website: 'https://www.kapitalbank.az'
                }
            ],
            mediaPartners: [
                {
                    id: 5,
                    name: 'AzTV',
                    logo: './assets/images/partners/aztv.png',
                    website: 'https://www.aztv.az'
                },
                {
                    id: 6,
                    name: 'Azerbaijan Newspaper',
                    logo: './assets/images/partners/azerbaijan-newspaper.png',
                    website: 'https://www.azerbaijan-news.az'
                }
            ]
        },
        ru: {
            title: 'Партнеры',
            mainPartners: [
                {
                    id: 1,
                    name: 'Министерство Культуры Азербайджана',
                    logo: './assets/images/partners/ministry-culture.png',
                    website: 'https://www.mct.gov.az'
                },
                {
                    id: 2,
                    name: 'Туристическое Бюро Азербайджана',
                    logo: './assets/images/partners/tourism-bureau.png',
                    website: 'https://www.azerbaijan.travel'
                }
            ],
            supportingPartners: [
                {
                    id: 3,
                    name: 'AZAL',
                    logo: './assets/images/partners/azal.png',
                    website: 'https://www.azal.az'
                },
                {
                    id: 4,
                    name: 'Kapital Bank',
                    logo: './assets/images/partners/kapital-bank.png',
                    website: 'https://www.kapitalbank.az'
                }
            ],
            mediaPartners: [
                {
                    id: 5,
                    name: 'AzTV',
                    logo: './assets/images/partners/aztv.png',
                    website: 'https://www.aztv.az'
                },
                {
                    id: 6,
                    name: 'Azerbaijan Newspaper',
                    logo: './assets/images/partners/azerbaijan-newspaper.png',
                    website: 'https://www.azerbaijan-news.az'
                }
            ]
        }
    },

    // Contact info
    contactInfo: {
        az: {
            title: 'Əlaqə',
            address: 'Heydər Əliyev prospekti 123, Bakı, AZ1000, Azərbaycan',
            phone: '+994 12 345 67 89',
            email: 'info@myf.az',
            workingHours: 'Bazar ertəsi - Cümə: 09:00 - 18:00',
            socialMedia: {
                facebook: 'https://facebook.com/myfestival',
                instagram: 'https://instagram.com/myfestival',
                twitter: 'https://twitter.com/myfestival',
                youtube: 'https://youtube.com/myfestival'
            }
        },
        en: {
            title: 'Contact',
            address: 'Heydar Aliyev Avenue 123, Baku, AZ1000, Azerbaijan',
            phone: '+994 12 345 67 89',
            email: 'info@myf.az',
            workingHours: 'Monday - Friday: 09:00 - 18:00',
            socialMedia: {
                facebook: 'https://facebook.com/myfestival',
                instagram: 'https://instagram.com/myfestival',
                twitter: 'https://twitter.com/myfestival',
                youtube: 'https://youtube.com/myfestival'
            }
        },
        ru: {
            title: 'Контакты',
            address: 'Проспект Гейдара Алиева 123, Баку, AZ1000, Азербайджан',
            phone: '+994 12 345 67 89',
            email: 'info@myf.az',
            workingHours: 'Понедельник - Пятница: 09:00 - 18:00',
            socialMedia: {
                facebook: 'https://facebook.com/myfestival',
                instagram: 'https://instagram.com/myfestival',
                twitter: 'https://twitter.com/myfestival',
                youtube: 'https://youtube.com/myfestival'
            }
        }
    }
};

// Generate news data for different languages
function generateNewsData(lang) {
    const titles = {
        az: [
            'Festival 2024 Proqramı Açıqlandı',
            'Yeni Tərəfdaşlarımız',
            'Könüllü Qeydiyyatı Başladı',
            'Milli Rəqslər Yarışması',
            'Ənənəvi Sənətkarlıq Sərgisi',
            'Atçılıq Yarışlarına Hazırlıq',
            'Festivalda Xarici Qonaqlar',
            'Milli Yeməklər Müsabiqəsi',
            'Gənc Sənətkarlar Platforması',
            'Festivalın Beynəlxalq Tanınması'
        ],
        en: [
            'Festival 2024 Program Announced',
            'Our New Partners',
            'Volunteer Registration Started',
            'National Dances Competition',
            'Traditional Crafts Exhibition',
            'Preparation for Horseback Riding Competitions',
            'International Guests at Festival',
            'National Cuisine Competition',
            'Young Artists Platform',
            'International Recognition of Festival'
        ],
        ru: [
            'Программа Фестиваля 2024 Объявлена',
            'Наши Новые Партнеры',
            'Регистрация Волонтеров Началась',
            'Конкурс Национальных Танцев',
            'Выставка Традиционных Ремесел',
            'Подготовка к Соревнованиям по Верховой Езде',
            'Международные Гости на Фестивале',
            'Конкурс Национальной Кухни',
            'Платформа Молодых Артистов',
            'Международное Признание Фестиваля'
        ]
    };

    const news = [];
    for (let i = 0; i < 30; i++) {
        news.push({
            id: i + 1,
            title: titles[lang][i % titles[lang].length],
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>`,
            date: new Date(2024, 0, i + 1).toISOString().split('T')[0],
            slug: `news-${i + 1}`,
            image: `./assets/images/news-${(i % 5) + 1}.jpg`,
            views: Math.floor(Math.random() * 3000) + 100,
            author: 'MYF Team',
            category: 'Festival News'
        });
    }
    return news;
}

// API simulation functions
class APISimulator {
    static async fetchData(endpoint, options = {}) {
        await simulateApiDelay();
        
        const lang = options.lang || 'az';
        const parts = endpoint.split('/');
        
        try {
            switch (parts[0]) {
                case 'homepage-data':
                    return mockData.homepageData[lang];
                    
                case 'festival':
                    if (parts[1] === 'about') {
                        return mockData.festivalAbout[lang];
                    } else if (parts[1] === 'program') {
                        return mockData.festivalProgram[lang];
                    } else if (parts[1] === 'partners') {
                        return mockData.partners[lang];
                    }
                    break;
                    
                case 'news':
                    if (parts[1]) {
                        // Single news item
                        const slug = parts[1];
                        const newsItem = mockData.news[lang].find(n => n.slug === slug);
                        if (newsItem) {
                            newsItem.views += 1; // Increment view count
                            return newsItem;
                        }
                        throw new Error('News not found');
                    } else {
                        // News list with pagination
                        const page = parseInt(options.page) || 1;
                        const pageSize = parseInt(options.pageSize) || 15;
                        const allNews = mockData.news[lang];
                        
                        const totalItems = allNews.length;
                        const totalPages = Math.ceil(totalItems / pageSize);
                        const startIndex = (page - 1) * pageSize;
                        const endIndex = startIndex + pageSize;
                        const items = allNews.slice(startIndex, endIndex);
                        
                        return {
                            items,
                            currentPage: page,
                            totalPages,
                            totalItems,
                            pageSize
                        };
                    }
                    
                case 'contact-info':
                    return mockData.contactInfo[lang];
                    
                case 'yurdunu-qur':
                    // Simulate form submission
                    if (options.method === 'POST') {
                        // Simulate success response
                        return { success: true, message: 'Form submitted successfully' };
                    }
                    break;
                    
                default:
                    throw new Error(`Unknown endpoint: ${endpoint}`);
            }
        } catch (error) {
            throw new Error(`API Error: ${error.message}`);
        }
    }
}

// Export API functions for use in other files
async function getHomepageData(lang = 'az') {
    return await APISimulator.fetchData('homepage-data', { lang });
}

async function getFestivalAbout(lang = 'az') {
    return await APISimulator.fetchData('festival/about', { lang });
}

async function getFestivalProgram(lang = 'az') {
    return await APISimulator.fetchData('festival/program', { lang });
}

async function getNewsList(page = 1, pageSize = 15, lang = 'az') {
    return await APISimulator.fetchData('news', { page, pageSize, lang });
}

async function getNewsDetail(slug, lang = 'az') {
    return await APISimulator.fetchData(`news/${slug}`, { lang });
}

async function getPartners(lang = 'az') {
    return await APISimulator.fetchData('festival/partners', { lang });
}

async function getContactInfo(lang = 'az') {
    return await APISimulator.fetchData('contact-info', { lang });
}

async function submitYurdunuQur(formData, lang = 'az') {
    return await APISimulator.fetchData('yurdunu-qur', { method: 'POST', data: formData, lang });
}