// About page JavaScript functionality

// Initialize about page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAboutPage();
});

// Main about page initialization function
async function initializeAboutPage() {
    try {
        // Show loading state
        showLoading();
        
        // Load about data
        const aboutData = await getFestivalAbout(currentLanguage);
        
        // Hide loading and show content
        hideLoading();
        displayAboutContent(aboutData);
        
        // Load images gallery
        loadImagesGallery(aboutData.images);
        
        // Update UI translations
        updateUITranslations();
        
        console.log('About page initialized successfully');
    } catch (error) {
        console.error('Error initializing about page:', error);
        showError('Məlumat yüklənərkən xəta baş verdi');
    }
}

// Show loading state
function showLoading() {
    const loadingContainer = document.getElementById('loading-container');
    const aboutContent = document.getElementById('about-content');
    const errorContainer = document.getElementById('error-container');
    
    if (loadingContainer) loadingContainer.style.display = 'block';
    if (aboutContent) aboutContent.style.display = 'none';
    if (errorContainer) errorContainer.style.display = 'none';
}

// Hide loading state
function hideLoading() {
    const loadingContainer = document.getElementById('loading-container');
    if (loadingContainer) loadingContainer.style.display = 'none';
}

// Display about content
function displayAboutContent(aboutData) {
    const aboutContent = document.getElementById('about-content');
    if (!aboutContent || !aboutData) return;
    
    aboutContent.innerHTML = `
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title text-green">${aboutData.title}</h2>
                        <div class="card-text">
                            ${aboutData.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    aboutContent.style.display = 'block';
    
    // Add fade-in animation
    setTimeout(() => {
        aboutContent.classList.add('visible');
    }, 100);
}

// Load images gallery
function loadImagesGallery(images) {
    const galleryContainer = document.getElementById('images-gallery');
    if (!galleryContainer || !images) return;
    
    let galleryHTML = '';
    
    images.forEach((image, index) => {
        const animationDelay = index * 0.1;
        galleryHTML += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="gallery-item fade-in" style="animation-delay: ${animationDelay}s;">
                    <img src="${image}" alt="Festival Görüntüsü ${index + 1}" class="img-fluid">
                    <div class="gallery-overlay"></div>
                </div>
            </div>
        `;
    });
    
    galleryContainer.innerHTML = galleryHTML;
    
    // Add click event for image modal
    addImageModalEvents();
    
    // Trigger fade-in animations
    setTimeout(() => {
        document.querySelectorAll('#images-gallery .fade-in').forEach(item => {
            item.classList.add('visible');
        });
    }, 200);
}

// Add image modal events
function addImageModalEvents() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                showImageModal(img.src, img.alt);
            }
        });
    });
}

// Show image modal
function showImageModal(imageSrc, imageAlt) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="imageModalLabel">${imageAlt}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img src="${imageSrc}" alt="${imageAlt}" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('imageModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
    
    // Clean up modal after hide
    document.getElementById('imageModal').addEventListener('hidden.bs.modal', function () {
        this.remove();
    });
}

// Show error message
function showError(message) {
    const loadingContainer = document.getElementById('loading-container');
    const aboutContent = document.getElementById('about-content');
    const errorContainer = document.getElementById('error-container');
    const errorMessage = document.getElementById('error-message');
    
    if (loadingContainer) loadingContainer.style.display = 'none';
    if (aboutContent) aboutContent.style.display = 'none';
    if (errorContainer) errorContainer.style.display = 'block';
    if (errorMessage) errorMessage.textContent = message;
}

// Update UI translations
function updateUITranslations() {
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        pageTitle.textContent = getTranslation('about.title', 'Festival Haqqında');
    }
    
    const pageSubtitle = document.getElementById('page-subtitle');
    if (pageSubtitle) {
        pageSubtitle.textContent = getTranslation('hero.subtitle', 'Azərbaycanın ən böyük mədəni tədbiri');
    }
    
    const galleryTitle = document.getElementById('gallery-title');
    if (galleryTitle) {
        galleryTitle.textContent = getTranslation('gallery.title', 'Festivaldan Görüntülər');
    }
    
    const relatedLinksTitle = document.getElementById('related-links-title');
    if (relatedLinksTitle) {
        relatedLinksTitle.textContent = getTranslation('common.relatedLinks', 'Əlaqəli Səhifələr');
    }
    
    // Update loading text
    const loadingText = document.querySelector('#loading-container p');
    if (loadingText) {
        loadingText.textContent = getTranslation('common.loading', 'Yüklənir...');
    }
    
    // Update error message
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.textContent = getTranslation('common.error', 'Məlumat yüklənərkən xəta baş verdi');
    }
}

// Add smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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
});

// Handle responsive image gallery
function handleResponsiveGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    function updateGalleryLayout() {
        const windowWidth = window.innerWidth;
        
        galleryItems.forEach(item => {
            const img = item.querySelector('img');
            if (img) {
                if (windowWidth < 768) {
                    img.style.height = '200px';
                } else if (windowWidth < 992) {
                    img.style.height = '250px';
                } else {
                    img.style.height = '300px';
                }
                img.style.objectFit = 'cover';
            }
        });
    }
    
    updateGalleryLayout();
    window.addEventListener('resize', updateGalleryLayout);
}

// Initialize responsive gallery
window.addEventListener('load', handleResponsiveGallery);

// Add scroll animations for better UX
function addScrollAnimations() {
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

// Initialize scroll animations
window.addEventListener('load', addScrollAnimations);

// Add keyboard navigation for gallery
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('imageModal');
    if (modal && modal.classList.contains('show')) {
        if (e.key === 'Escape') {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
            }
        }
    }
});

// Performance optimization: Lazy load images
function lazyLoadGalleryImages() {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.remove('lazy');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
window.addEventListener('load', lazyLoadGalleryImages);

// Add print functionality
function addPrintFunctionality() {
    // Add print button to content
    const aboutContent = document.getElementById('about-content');
    if (aboutContent) {
        const printButton = document.createElement('button');
        printButton.innerHTML = '<i class="fas fa-print me-2"></i>Çap et';
        printButton.className = 'btn btn-outline-green btn-sm float-end';
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        const cardBody = aboutContent.querySelector('.card-body');
        if (cardBody) {
            cardBody.appendChild(printButton);
        }
    }
}

// Initialize print functionality
window.addEventListener('load', addPrintFunctionality);

// Add social sharing functionality
function addSocialSharing() {
    const cardBody = document.querySelector('#about-content .card-body');
    if (cardBody) {
        const shareHTML = `
            <div class="social-sharing mt-3">
                <h6>Paylaş:</h6>
                <a href="#" class="btn btn-outline-primary btn-sm me-2" onclick="shareOnFacebook()">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="btn btn-outline-info btn-sm me-2" onclick="shareOnTwitter()">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="btn btn-outline-success btn-sm me-2" onclick="shareOnWhatsApp()">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a href="#" class="btn btn-outline-secondary btn-sm" onclick="copyLink()">
                    <i class="fas fa-link"></i>
                </a>
            </div>
        `;
        cardBody.insertAdjacentHTML('beforeend', shareHTML);
    }
}

// Social sharing functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Milli Yaylaq Festivalı haqqında');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Milli Yaylaq Festivalı haqqında');
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link kopyalandı!');
    }).catch(err => {
        console.error('Link kopyalanmadı:', err);
    });
}

// Initialize social sharing
window.addEventListener('load', addSocialSharing);