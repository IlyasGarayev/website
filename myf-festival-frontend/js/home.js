// Homepage JavaScript functionality

// Initialize homepage on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeHomepage();
});

// Main homepage initialization function
async function initializeHomepage() {
    try {
        // Load homepage data
        const homepageData = await getHomepageData(currentLanguage);
        
        // Initialize hero carousel
        initializeHeroCarousel(homepageData.heroSlides);
        
        // Load about section content
        loadAboutSection(homepageData.aboutText);
        
        // Load latest news
        loadLatestNews(homepageData.latestNews);
        
        // Load partners preview
        loadPartnersPreview();
        
        // Initialize UI translations
        updateUITranslations();
        
        console.log('Homepage initialized successfully');
    } catch (error) {
        console.error('Error initializing homepage:', error);
        showError('about-content', 'Səhifə yüklənərkən xəta baş verdi');
    }
}

// Initialize hero carousel with dynamic slides
function initializeHeroCarousel(slides) {
    const slidesContainer = document.getElementById('hero-slides');
    if (!slidesContainer || !slides) return;
    
    let slidesHTML = '';
    
    slides.forEach((slide, index) => {
        const activeClass = index === 0 ? 'active' : '';
        slidesHTML += `
            <div class="carousel-item ${activeClass}">
                <img src="${slide.image}" alt="${slide.title}" class="d-block w-100">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <h1 class="hero-title">${slide.title}</h1>
                    <p class="hero-subtitle">${slide.subtitle}</p>
                    <p class="hero-description">${slide.description}</p>
                </div>
            </div>
        `;
    });
    
    slidesContainer.innerHTML = slidesHTML;
    
    // Add carousel indicators dynamically
    const indicators = document.querySelector('.carousel-indicators');
    if (indicators) {
        indicators.innerHTML = '';
        slides.forEach((_, index) => {
            const activeClass = index === 0 ? 'active' : '';
            const indicator = document.createElement('button');
            indicator.type = 'button';
            indicator.setAttribute('data-bs-target', '#heroCarousel');
            indicator.setAttribute('data-bs-slide-to', index);
            indicator.className = activeClass;
            indicators.appendChild(indicator);
        });
    }
}

// Load about section content
function loadAboutSection(aboutText) {
    const aboutContainer = document.getElementById('about-content');
    if (!aboutContainer) return;
    
    aboutContainer.innerHTML = `
        <p class="lead">${aboutText}</p>
    `;
    
    // Add fade-in animation
    aboutContainer.classList.add('fade-in');
    setTimeout(() => {
        aboutContainer.classList.add('visible');
    }, 100);
}

// Load latest news section
function loadLatestNews(newsItems) {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer || !newsItems) return;
    
    let newsHTML = '';
    
    newsItems.forEach((newsItem, index) => {
        const animationDelay = index * 0.1;
        newsHTML += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card news-card h-100 fade-in" style="animation-delay: ${animationDelay}s;">
                    <img src="${newsItem.image}" class="card-img-top" alt="${newsItem.title}">
                    <div class="card-body">
                        <h5 class="card-title">${newsItem.title}</h5>
                        <p class="card-text">${newsItem.excerpt}</p>
                        <p class="news-date">
                            <i class="fas fa-calendar-alt me-2"></i>
                            ${formatDate(newsItem.date)}
                        </p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <div class="d-flex justify-content-between align-items-center">
                            <a href="./news-detail.html?slug=${newsItem.slug}" class="btn btn-outline-green btn-sm">
                                ${getTranslation('news.readMore', 'Ətraflı oxu')}
                            </a>
                            <small class="text-muted">
                                <i class="fas fa-eye me-1"></i>
                                ${newsItem.views}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    newsContainer.innerHTML = newsHTML;
    
    // Trigger fade-in animations
    setTimeout(() => {
        document.querySelectorAll('.news-card.fade-in').forEach(card => {
            card.classList.add('visible');
        });
    }, 200);
}

// Load partners preview
async function loadPartnersPreview() {
    try {
        const partnersData = await getPartners(currentLanguage);
        const partnersContainer = document.getElementById('partners-container');
        
        if (!partnersContainer || !partnersData) return;
        
        let partnersHTML = '';
        
        // Show first 6 partners (2 main + 4 supporting)
        const allPartners = [
            ...partnersData.mainPartners.slice(0, 2),
            ...partnersData.supportingPartners.slice(0, 4)
        ];
        
        allPartners.forEach((partner, index) => {
            const animationDelay = index * 0.1;
            partnersHTML += `
                <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                    <div class="text-center fade-in" style="animation-delay: ${animationDelay}s;">
                        <a href="${partner.website}" target="_blank" class="partner-link">
                            <img src="${partner.logo}" alt="${partner.name}" class="partner-logo img-fluid">
                            <p class="mt-2 small">${partner.name}</p>
                        </a>
                    </div>
                </div>
            `;
        });
        
        partnersContainer.innerHTML = partnersHTML;
        
        // Trigger fade-in animations
        setTimeout(() => {
            document.querySelectorAll('#partners-container .fade-in').forEach(item => {
                item.classList.add('visible');
            });
        }, 300);
        
    } catch (error) {
        console.error('Error loading partners preview:', error);
    }
}

// Update UI translations
function updateUITranslations() {
    // Update section titles
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) {
        aboutTitle.textContent = getTranslation('sections.aboutFestival', 'Festival Haqqında');
    }
    
    const newsTitle = document.getElementById('news-title');
    if (newsTitle) {
        newsTitle.textContent = getTranslation('sections.latestNews', 'Son Xəbərlər');
    }
    
    const partnersTitle = document.getElementById('partners-title');
    if (partnersTitle) {
        partnersTitle.textContent = getTranslation('sections.partners', 'Tərəfdaşlar');
    }
    
    const galleryTitle = document.getElementById('gallery-title');
    if (galleryTitle) {
        galleryTitle.textContent = getTranslation('sections.gallery', 'Foto/Video Qalereya');
    }
    
    const volunteerTitle = document.getElementById('volunteer-title');
    if (volunteerTitle) {
        volunteerTitle.textContent = getTranslation('navbar.volunteer', 'Könüllü Ol');
    }
    
    const ozYurdunuQurTitle = document.getElementById('oz-yurdunu-qur-title');
    if (ozYurdunuQurTitle) {
        ozYurdunuQurTitle.textContent = getTranslation('navbar.ozYurdunuQur', 'Öz Yurdunu Qur');
    }
    
    // Update button texts
    const readMoreBtn = document.getElementById('read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.textContent = getTranslation('buttons.readMore', 'Daha çox oxu');
    }
    
    const viewAllNewsBtn = document.getElementById('view-all-news-btn');
    if (viewAllNewsBtn) {
        viewAllNewsBtn.textContent = getTranslation('buttons.viewAll', 'Hamısını gör');
    }
    
    const viewAllPartnersBtn = document.getElementById('view-all-partners-btn');
    if (viewAllPartnersBtn) {
        viewAllPartnersBtn.textContent = getTranslation('buttons.viewAll', 'Hamısını gör');
    }
    
    const viewGalleryBtn = document.getElementById('view-gallery-btn');
    if (viewGalleryBtn) {
        viewGalleryBtn.textContent = getTranslation('gallery.viewGallery', 'Qalereyaya bax');
    }
}

// Add scroll effects for better UX
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// Initialize scroll effects after page load
window.addEventListener('load', () => {
    addScrollEffects();
});

// Handle carousel auto-play pause on hover
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('heroCarousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', function() {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.pause();
            }
        });
        
        carousel.addEventListener('mouseleave', function() {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.cycle();
            }
        });
    }
});

// Lazy load images for better performance
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
window.addEventListener('load', lazyLoadImages);

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle hero content responsiveness
function handleHeroResponsiveness() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;
    
    function updateHeroContent() {
        const windowWidth = window.innerWidth;
        const heroTitle = heroContent.querySelector('.hero-title');
        const heroSubtitle = heroContent.querySelector('.hero-subtitle');
        const heroDescription = heroContent.querySelector('.hero-description');
        
        if (windowWidth < 768) {
            if (heroTitle) heroTitle.style.fontSize = '2rem';
            if (heroSubtitle) heroSubtitle.style.fontSize = '1.1rem';
            if (heroDescription) heroDescription.style.fontSize = '0.9rem';
        } else if (windowWidth < 992) {
            if (heroTitle) heroTitle.style.fontSize = '2.5rem';
            if (heroSubtitle) heroSubtitle.style.fontSize = '1.3rem';
            if (heroDescription) heroDescription.style.fontSize = '1rem';
        } else {
            if (heroTitle) heroTitle.style.fontSize = '3.5rem';
            if (heroSubtitle) heroSubtitle.style.fontSize = '1.5rem';
            if (heroDescription) heroDescription.style.fontSize = '1.1rem';
        }
    }
    
    updateHeroContent();
    window.addEventListener('resize', updateHeroContent);
}

// Initialize hero responsiveness
window.addEventListener('load', handleHeroResponsiveness);

// Add loading animation for news and partners
function showSectionLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="col-12">
                <div class="text-center py-5">
                    <div class="loading-spinner"></div>
                    <p class="mt-3">${getTranslation('common.loading', 'Yüklənir...')}</p>
                </div>
            </div>
        `;
    }
}

// Error handling for sections
function showSectionError(containerId, message) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning text-center" role="alert">
                    <i class="fas fa-exclamation-triangle me-2"></i>
                    ${message || getTranslation('common.error', 'Xəta baş verdi')}
                </div>
            </div>
        `;
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll listeners
const optimizedScrollHandler = debounce(() => {
    // Handle any scroll-based animations or effects here
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// Initialize Google Analytics tracking (placeholder)
function initializeAnalytics() {
    // Add Google Analytics or other tracking code here
    console.log('Analytics initialized');
}

// Call analytics initialization
window.addEventListener('load', initializeAnalytics);