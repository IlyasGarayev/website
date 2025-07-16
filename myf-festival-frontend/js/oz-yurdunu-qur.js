// Öz Yurdunu Qur form JavaScript functionality

// reCAPTCHA configuration
const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY'; // Replace with actual site key

// Initialize form when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
});

// Main form initialization function
function initializeForm() {
    const form = document.getElementById('oz-yurdunu-qur-form');
    if (!form) return;
    
    // Add form validation
    setupFormValidation(form);
    
    // Add file upload validation
    setupFileUploadValidation();
    
    // Add phone number formatting
    setupPhoneNumberFormatting();
    
    // Update UI translations
    updateUITranslations();
    
    // Handle form submission
    form.addEventListener('submit', handleFormSubmission);
    
    console.log('Öz Yurdunu Qur form initialized successfully');
}

// Setup form validation
function setupFormValidation(form) {
    // Custom validation for all form fields
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Add real-time validation
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Remove invalid class when user starts typing
            if (this.classList.contains('is-invalid')) {
                this.classList.remove('is-invalid');
            }
        });
    });
    
    // Custom email validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.classList.add('is-invalid');
            }
        });
    }
    
    // Custom phone validation
    const phoneInput = document.getElementById('phoneNumber');
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            if (!isValidPhone(this.value)) {
                this.classList.add('is-invalid');
            }
        });
    }
}

// Setup file upload validation
function setupFileUploadValidation() {
    const fileInput = document.getElementById('idCardFront');
    if (!fileInput) return;
    
    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (!file) return;
        
        // Check file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
            this.classList.add('is-invalid');
            showMessage('Yalnız JPG, JPEG, PNG formatında fayllar qəbul edilir!', 'error');
            this.value = '';
            return;
        }
        
        // Check file size (5MB limit)
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes
        if (file.size > maxSize) {
            this.classList.add('is-invalid');
            showMessage('Fayl ölçüsü 5MB-dan böyük ola bilməz!', 'error');
            this.value = '';
            return;
        }
        
        // Show file preview
        showFilePreview(file);
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
    });
}

// Setup phone number formatting
function setupPhoneNumberFormatting() {
    const phoneInput = document.getElementById('phoneNumber');
    if (!phoneInput) return;
    
    phoneInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, ''); // Remove all non-digits
        
        // Add country code if not present
        if (value.length > 0 && !value.startsWith('994')) {
            if (value.startsWith('0')) {
                value = '994' + value.substring(1);
            } else if (value.length <= 9) {
                value = '994' + value;
            }
        }
        
        // Format the number
        if (value.length >= 3) {
            let formatted = '+' + value.substring(0, 3);
            if (value.length > 3) {
                formatted += ' ' + value.substring(3, 5);
            }
            if (value.length > 5) {
                formatted += ' ' + value.substring(5, 8);
            }
            if (value.length > 8) {
                formatted += ' ' + value.substring(8, 10);
            }
            if (value.length > 10) {
                formatted += ' ' + value.substring(10, 12);
            }
            
            this.value = formatted;
        }
    });
}

// Handle form submission
async function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = document.getElementById('submitBtn');
    const submitBtnText = document.getElementById('submitBtnText');
    
    // Validate form
    if (!validateForm(form)) {
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtnText.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Göndərilir...';
    
    try {
        // Execute reCAPTCHA
        const recaptchaToken = await executeRecaptcha();
        
        // Prepare form data
        const formData = new FormData(form);
        formData.append('recaptchaToken', recaptchaToken);
        
        // Submit form
        const response = await submitYurdunuQur(formData, currentLanguage);
        
        // Handle success
        if (response.success) {
            showMessage(
                getTranslation('ozYurdunuQur.success', 'Müraciətiniz uğurla göndərildi'), 
                'success'
            );
            form.reset();
            
            // Send confirmation email (simulate)
            console.log('Confirmation email sent');
        } else {
            throw new Error(response.message || 'Submission failed');
        }
        
    } catch (error) {
        console.error('Form submission error:', error);
        showMessage(
            getTranslation('ozYurdunuQur.error', 'Xəta baş verdi, zəhmət olmasa yenidən cəhd edin'), 
            'error'
        );
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtnText.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Müraciət Et';
    }
}

// Execute reCAPTCHA
function executeRecaptcha() {
    return new Promise((resolve, reject) => {
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.ready(() => {
                grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
                    .then(token => {
                        resolve(token);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        } else {
            // Fallback for demo purposes
            console.warn('reCAPTCHA not loaded, using demo token');
            resolve('demo_token_' + Date.now());
        }
    });
}

// Validate entire form
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    // Special validation for terms checkbox
    const termsCheckbox = document.getElementById('termsAccept');
    if (termsCheckbox && !termsCheckbox.checked) {
        termsCheckbox.classList.add('is-invalid');
        isValid = false;
    }
    
    return isValid;
}

// Validate individual field
function validateField(field) {
    let isValid = true;
    
    // Check required fields
    if (field.hasAttribute('required') && !field.value.trim()) {
        field.classList.add('is-invalid');
        isValid = false;
    }
    
    // Type-specific validation
    switch (field.type) {
        case 'email':
            if (field.value && !isValidEmail(field.value)) {
                field.classList.add('is-invalid');
                isValid = false;
            }
            break;
            
        case 'tel':
            if (field.value && !isValidPhone(field.value)) {
                field.classList.add('is-invalid');
                isValid = false;
            }
            break;
            
        case 'file':
            if (field.hasAttribute('required') && !field.files.length) {
                field.classList.add('is-invalid');
                isValid = false;
            }
            break;
            
        case 'number':
            if (field.value && (parseFloat(field.value) < 0)) {
                field.classList.add('is-invalid');
                isValid = false;
            }
            break;
    }
    
    if (isValid) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }
    
    return isValid;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^\+994\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
    return phoneRegex.test(phone);
}

// Show file preview
function showFilePreview(file) {
    const previewContainer = document.getElementById('filePreview');
    
    // Create preview container if it doesn't exist
    if (!previewContainer) {
        const container = document.createElement('div');
        container.id = 'filePreview';
        container.className = 'mt-2';
        document.getElementById('idCardFront').parentNode.appendChild(container);
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('filePreview').innerHTML = `
            <div class="file-preview">
                <img src="${e.target.result}" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px;">
                <p class="small text-muted mt-2">
                    <i class="fas fa-file-image me-2"></i>
                    ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)
                </p>
            </div>
        `;
    };
    reader.readAsDataURL(file);
}

// Show message modal
function showMessage(message, type) {
    const modal = document.getElementById('messageModal');
    const header = document.getElementById('messageModalHeader');
    const icon = document.getElementById('messageIcon');
    const text = document.getElementById('messageText');
    
    if (type === 'success') {
        header.className = 'modal-header bg-success text-white';
        icon.className = 'fas fa-check-circle fa-3x text-success mb-3';
    } else {
        header.className = 'modal-header bg-danger text-white';
        icon.className = 'fas fa-exclamation-triangle fa-3x text-danger mb-3';
    }
    
    text.textContent = message;
    
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

// Update UI translations
function updateUITranslations() {
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        pageTitle.textContent = getTranslation('ozYurdunuQur.title', 'Öz Yurdunu Qur');
    }
    
    const pageSubtitle = document.getElementById('page-subtitle');
    if (pageSubtitle) {
        pageSubtitle.textContent = getTranslation('ozYurdunuQur.description', 'Dövlət dəstəyi ilə öz evini qurmaq imkanı');
    }
    
    // Update form labels
    const labels = {
        'firstName': getTranslation('ozYurdunuQur.form.name', 'Ad'),
        'lastName': getTranslation('ozYurdunuQur.form.surname', 'Soyad'),
        'phoneNumber': getTranslation('ozYurdunuQur.form.phone', 'Əlaqə Nömrəsi'),
        'idCardFront': getTranslation('ozYurdunuQur.form.idImage', 'Şəxsiyyət Vəsiqəsinin Ön Hissəsinin Şəkli')
    };
    
    Object.keys(labels).forEach(fieldId => {
        const label = document.querySelector(`label[for="${fieldId}"]`);
        if (label) {
            const requiredStar = label.querySelector('.text-danger');
            const requiredText = requiredStar ? requiredStar.outerHTML : '';
            label.innerHTML = labels[fieldId] + ' ' + requiredText;
        }
    });
}

// Auto-save form data to localStorage
function setupAutoSave() {
    const form = document.getElementById('oz-yurdunu-qur-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Load saved data
        const savedValue = localStorage.getItem(`ozYurdunuQur_${input.name}`);
        if (savedValue && input.type !== 'file') {
            input.value = savedValue;
        }
        
        // Save data on change
        input.addEventListener('change', function() {
            if (this.type !== 'file') {
                localStorage.setItem(`ozYurdunuQur_${this.name}`, this.value);
            }
        });
    });
}

// Clear saved form data
function clearSavedData() {
    const form = document.getElementById('oz-yurdunu-qur-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        localStorage.removeItem(`ozYurdunuQur_${input.name}`);
    });
}

// Initialize auto-save
document.addEventListener('DOMContentLoaded', setupAutoSave);

// Clear saved data on successful submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('oz-yurdunu-qur-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Clear saved data after successful submission
            setTimeout(() => {
                if (!e.target.querySelector('.is-invalid')) {
                    clearSavedData();
                }
            }, 1000);
        });
    }
});

// Add form progress indicator
function addProgressIndicator() {
    const form = document.getElementById('oz-yurdunu-qur-form');
    if (!form) return;
    
    const progressHTML = `
        <div class="progress mb-4" style="height: 5px;">
            <div class="progress-bar bg-success" role="progressbar" style="width: 0%" id="formProgress"></div>
        </div>
    `;
    
    form.insertAdjacentHTML('afterbegin', progressHTML);
    
    // Update progress on field completion
    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    const progressBar = document.getElementById('formProgress');
    
    function updateProgress() {
        const completedFields = Array.from(requiredFields).filter(field => {
            return field.value.trim() !== '' && !field.classList.contains('is-invalid');
        });
        
        const progress = (completedFields.length / requiredFields.length) * 100;
        progressBar.style.width = progress + '%';
    }
    
    requiredFields.forEach(field => {
        field.addEventListener('input', updateProgress);
        field.addEventListener('change', updateProgress);
    });
}

// Initialize progress indicator
document.addEventListener('DOMContentLoaded', addProgressIndicator);

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl+Enter to submit form
    if (e.ctrlKey && e.key === 'Enter') {
        const form = document.getElementById('oz-yurdunu-qur-form');
        if (form) {
            form.dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
            }
        });
    }
});

// Add print functionality for confirmation
function printConfirmation() {
    const form = document.getElementById('oz-yurdunu-qur-form');
    if (!form) return;
    
    const formData = new FormData(form);
    const confirmationData = {};
    
    for (let [key, value] of formData.entries()) {
        if (key !== 'idCardFront') {
            confirmationData[key] = value;
        }
    }
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Müraciət Təsdiqi</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .header { text-align: center; color: #228B22; }
                    .content { margin: 20px 0; }
                    .field { margin: 10px 0; }
                    .label { font-weight: bold; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>Öz Yurdunu Qur</h1>
                    <h2>Müraciət Təsdiqi</h2>
                </div>
                <div class="content">
                    ${Object.entries(confirmationData).map(([key, value]) => 
                        `<div class="field">
                            <span class="label">${key}:</span> ${value}
                        </div>`
                    ).join('')}
                </div>
                <div style="text-align: center; margin-top: 30px;">
                    <p>Müraciət tarixi: ${new Date().toLocaleDateString('az-AZ')}</p>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        isValidPhone,
        validateField
    };
}