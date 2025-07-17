import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '../data/mockData';
import { validatePhone } from '../utils/helpers';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';

const OzYurdunuQur = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    idPhoto: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  
  const formAnimation = useSlideUpOnScroll({ threshold: 0.1 });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      idPhoto: file
    }));
    
    if (errors.idPhoto) {
      setErrors(prev => ({
        ...prev,
        idPhoto: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.surname.trim()) {
      newErrors.surname = 'Surname is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.idPhoto) {
      newErrors.idPhoto = 'ID photo is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitResult(null);
    
    try {
      const result = await api.submitOzYurdunuQur(formData);
      setSubmitResult(result);
      
      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          surname: '',
          phone: '',
          idPhoto: null
        });
        // Reset file input
        const fileInput = document.getElementById('idPhoto');
        if (fileInput) {
          fileInput.value = '';
        }
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'An error occurred while submitting the form'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="pt-16"> {/* Add padding for fixed header */}
      {/* Hero Section with Nature Theme */}
      <div className="relative bg-gradient-to-br from-nature-green-600 to-forest-green-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-white rounded-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('nav.ozYurdunuQur')}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {t('sections.ozYurdunuQur.text')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              Bring Your Tent
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              Sleep Under Stars
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Connect with Nature
            </div>
          </div>
        </div>
      </div>
      
      {/* Registration Form */}
      <section className="py-16 bg-gradient-to-b from-nature-green-50 to-white">
        <div 
          ref={formAnimation.ref}
          className={`max-w-2xl mx-auto px-4 transition-all duration-700 ${formAnimation.className}`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Registration Form
              </h2>
              <p className="text-gray-600">
                Fill out the form below to register for camping at the festival
              </p>
            </div>
            
            {/* Submit Result Message */}
            {submitResult && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitResult.success 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <div className="flex items-center">
                  {submitResult.success ? (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {submitResult.success ? t('form.success') : t('form.error')}
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {t('form.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              
              {/* Surname Field */}
              <div className="form-group">
                <label htmlFor="surname" className="form-label">
                  {t('form.surname')} *
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  className={`form-input ${errors.surname ? 'border-red-500' : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.surname && (
                  <p className="mt-1 text-sm text-red-600">{errors.surname}</p>
                )}
              </div>
              
              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  {t('form.phone')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="+994 XX XXX XX XX"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
              
              {/* ID Photo Field */}
              <div className="form-group">
                <label htmlFor="idPhoto" className="form-label">
                  {t('form.idPhoto')} *
                </label>
                <input
                  type="file"
                  id="idPhoto"
                  name="idPhoto"
                  onChange={handleFileChange}
                  accept="image/*"
                  className={`form-file ${errors.idPhoto ? 'border-red-500' : ''}`}
                />
                {errors.idPhoto && (
                  <p className="mt-1 text-sm text-red-600">{errors.idPhoto}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">
                  Please upload a clear photo of the front of your ID card
                </p>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="loading-spinner w-5 h-5 mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  t('form.submit')
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Info Section */}
      <section className="py-16 bg-nature-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-nature-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Registration</h3>
              <p className="text-gray-600">No fees required for camping registration</p>
            </div>
            
            <div className="text-center">
              <div className="bg-nature-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Area</h3>
              <p className="text-gray-600">Designated camping area with 24/7 security</p>
            </div>
            
            <div className="text-center">
              <div className="bg-nature-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Meet fellow festival-goers and nature lovers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OzYurdunuQur;