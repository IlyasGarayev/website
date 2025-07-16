// Main JavaScript file for common utilities and language handling

// Global variables
let currentLanguage = 'az';
let translations = {};

// Language detection from URL or HTML page
function detectLanguage() {
    const filename = window.location.pathname.split('/').pop();
    const pageName = filename.split('.')[0];
    
    if (pageName === 'az' || pageName === 'en' || pageName === 'ru') {
        return pageName;
    }
    
    // Fallback to browser language or default
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) return 'en';
    if (browserLang.startsWith('ru')) return 'ru';
    return 'az'; // Default to Azerbaijani
}

// Load translations for the specified language
async function loadTranslations(lang) {
    try {
        const response = await fetch(`./translations/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load translations for ${lang}`);
        }
        translations = await response.json();
        return translations;
    } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to default language if current fails
        if (lang !== 'az') {
            return await loadTranslations('az');
        }
        return {};
    }
}

// Get translation by key path (e.g., 'navbar.home')
function getTranslation(keyPath, defaultValue = '') {
    const keys = keyPath.split('.');
    let value = translations;
    
    for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            return defaultValue || keyPath;
        }
    }
    
    return value;
}

// Update page language attribute
function updatePageLanguage(lang) {
    document.documentElement.lang = lang;
    document.title = getTranslation('hero.title', 'Milli Yaylaq Festivalı') + ' - myf.az';
}

// Generate navbar HTML
function generateNavbar() {
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    
    return `
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="./${currentLanguage}.html">
                    <img src="./assets/images/logo.png" alt="MYF Logo" height="50" class="me-2">
                    ${getTranslation('hero.title', 'Milli Yaylaq Festivalı')}
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === currentLanguage ? 'active' : ''}" href="./${currentLanguage}.html">
                                ${getTranslation('navbar.home', 'Ana Səhifə')}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'about' ? 'active' : ''}" href="./about.html">
                                ${getTranslation('navbar.about', 'Festival Haqqında')}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'program' ? 'active' : ''}" href="./program.html">
                                ${getTranslation('navbar.program', 'Proqram')}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'news' ? 'active' : ''}" href="./news.html">
                                ${getTranslation('navbar.news', 'Xəbərlər')}
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                ${getTranslation('common.all', 'Hamısı')}
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="./partners.html">${getTranslation('navbar.partners', 'Tərəfdaşlar')}</a></li>
                                <li><a class="dropdown-item" href="./sponsorship.html">${getTranslation('navbar.sponsorship', 'Sponsorluq')}</a></li>
                                <li><a class="dropdown-item" href="./past-festivals.html">${getTranslation('navbar.pastFestivals', 'Keçmiş Festivallar')}</a></li>
                                <li><a class="dropdown-item" href="./gallery-sections.html">${getTranslation('navbar.gallery', 'Qalereya')}</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="./oz-yurdunu-qur.html">${getTranslation('navbar.ozYurdunuQur', 'Öz Yurdunu Qur')}</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'contact' ? 'active' : ''}" href="./contact.html">
                                ${getTranslation('navbar.contact', 'Əlaqə')}
                            </a>
                        </li>
                    </ul>
                    
                    <div class="d-flex align-items-center">
                        <div class="language-switcher dropdown me-3">
                            <button class="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                ${getTranslation('language.' + currentLanguage, currentLanguage.toUpperCase())}
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="./az.html">${getTranslation('language.az', 'Azərbaycanca')}</a></li>
                                <li><a class="dropdown-item" href="./en.html">${getTranslation('language.en', 'English')}</a></li>
                                <li><a class="dropdown-item" href="./ru.html">${getTranslation('language.ru', 'Русский')}</a></li>
                            </ul>
                        </div>
                        
                        <a href="https://konullu.myf.az" class="btn btn-green" target="_blank">
                            ${getTranslation('navbar.volunteer', 'Könüllü Ol')}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    `;
}

// Generate footer HTML
function generateFooter() {
    return `
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <h5>${getTranslation('footer.contact', 'Əlaqə')}</h5>
                        <p>
                            <i class="fas fa-map-marker-alt me-2"></i>
                            ${getTranslation('footer.address', 'Ünvan')}: Bakı, Azərbaycan
                        </p>
                        <p>
                            <i class="fas fa-phone me-2"></i>
                            ${getTranslation('footer.phone', 'Telefon')}: +994 12 345 67 89
                        </p>
                        <p>
                            <i class="fas fa-envelope me-2"></i>
                            ${getTranslation('footer.email', 'E-poçt')}: info@myf.az
                        </p>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <h5>${getTranslation('footer.quickLinks', 'Sürətli Linklər')}</h5>
                        <ul class="list-unstyled">
                            <li><a href="./about.html">${getTranslation('navbar.about', 'Festival Haqqında')}</a></li>
                            <li><a href="./program.html">${getTranslation('navbar.program', 'Proqram')}</a></li>
                            <li><a href="./news.html">${getTranslation('navbar.news', 'Xəbərlər')}</a></li>
                            <li><a href="./partners.html">${getTranslation('navbar.partners', 'Tərəfdaşlar')}</a></li>
                            <li><a href="./contact.html">${getTranslation('navbar.contact', 'Əlaqə')}</a></li>
                        </ul>
                    </div>
                    
                    <div class="col-lg-4 col-md-12 mb-4">
                        <h5>${getTranslation('footer.followUs', 'Bizi izləyin')}</h5>
                        <div class="social-links">
                            <a href="#" class="me-3"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="me-3"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="me-3"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="me-3"><i class="fab fa-youtube"></i></a>
                        </div>
                        <div class="newsletter-signup mt-3">
                            <h6>Newsletter</h6>
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="${getTranslation('footer.email', 'E-poçt')}">
                                <button class="btn btn-green" type="button">${getTranslation('buttons.submit', 'Göndər')}</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="row">
                        <div class="col-md-6">
                            <p>&copy; 2024 Milli Yaylaq Festivalı. ${getTranslation('footer.rights', 'Bütün hüquqlar qorunur')}</p>
                        </div>
                        <div class="col-md-6 text-md-end">
                            <a href="#" class="me-3">${getTranslation('footer.privacy', 'Məxfilik Siyasəti')}</a>
                            <a href="#">${getTranslation('footer.terms', 'İstifadə Şərtləri')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

// Initialize common components
function initializeCommonComponents() {
    // Insert navbar
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = generateNavbar();
    }
    
    // Insert footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = generateFooter();
    }
}

// Utility functions for API simulation
function simulateApiDelay(min = 200, max = 800) {
    return new Promise(resolve => {
        const delay = Math.random() * (max - min) + min;
        setTimeout(resolve, delay);
    });
}

// Show loading spinner
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="text-center py-5">
                <div class="loading-spinner"></div>
                <p class="mt-3">${getTranslation('common.loading', 'Yüklənir...')}</p>
            </div>
        `;
    }
}

// Hide loading spinner
function hideLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
    }
}

// Show error message
function showError(containerId, message) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="alert alert-danger text-center" role="alert">
                <i class="fas fa-exclamation-triangle me-2"></i>
                ${message || getTranslation('common.error', 'Xəta baş verdi')}
            </div>
        `;
    }
}

// Generate news card HTML
function generateNewsCard(newsItem) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card news-card h-100">
                <img src="${newsItem.image || './assets/images/news-placeholder.jpg'}" class="card-img-top" alt="${newsItem.title}">
                <div class="card-body">
                    <h5 class="card-title">${newsItem.title}</h5>
                    <p class="card-text">${newsItem.excerpt}</p>
                    <p class="news-date"><i class="fas fa-calendar-alt me-2"></i>${newsItem.date}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="./news-detail.html?slug=${newsItem.slug}" class="btn btn-outline-green">
                            ${getTranslation('news.readMore', 'Ətraflı oxu')}
                        </a>
                        <small class="text-muted">
                            <i class="fas fa-eye me-1"></i>${newsItem.views || 0}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate pagination HTML
function generatePagination(currentPage, totalPages, baseUrl = '') {
    let paginationHTML = '<nav aria-label="Page navigation"><ul class="pagination justify-content-center">';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `
            <li class="page-item">
                <a class="page-link" href="${baseUrl}?page=${currentPage - 1}">
                    ${getTranslation('buttons.previous', 'Əvvəlki')}
                </a>
            </li>
        `;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'active' : '';
        paginationHTML += `
            <li class="page-item ${activeClass}">
                <a class="page-link" href="${baseUrl}?page=${i}">${i}</a>
            </li>
        `;
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `
            <li class="page-item">
                <a class="page-link" href="${baseUrl}?page=${currentPage + 1}">
                    ${getTranslation('buttons.next', 'İrəli')}
                </a>
            </li>
        `;
    }
    
    paginationHTML += '</ul></nav>';
    return paginationHTML;
}

// Parse URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Format date based on language
function formatDate(dateString, lang = currentLanguage) {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    const locale = lang === 'az' ? 'az-AZ' : lang === 'en' ? 'en-US' : 'ru-RU';
    return date.toLocaleDateString(locale, options);
}

// Smooth scroll to element
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add fade-in animation to elements
function addFadeInAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize page
async function initializePage() {
    try {
        // Detect language and load translations
        currentLanguage = detectLanguage();
        await loadTranslations(currentLanguage);
        
        // Update page language
        updatePageLanguage(currentLanguage);
        
        // Initialize common components
        initializeCommonComponents();
        
        // Add animations
        addFadeInAnimation();
        
        console.log('Page initialized successfully');
    } catch (error) {
        console.error('Error initializing page:', error);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);