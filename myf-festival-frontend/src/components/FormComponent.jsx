'use client';

import { useState } from 'react';
import { useLanguage } from '../../lib/useLanguage';

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    idFront: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { t } = useLanguage();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      idFront: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('surname', formData.surname);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('idFront', formData.idFront);

      const response = await fetch('/api/public/yurdunu-qur', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(t('ozYurdunuQur.form.success'));
        setMessageType('success');
        setFormData({
          name: '',
          surname: '',
          phone: '',
          idFront: null
        });
        // Reset file input
        const fileInput = document.getElementById('idFront');
        if (fileInput) fileInput.value = '';
      } else {
        setMessage(result.error || t('ozYurdunuQur.form.error'));
        setMessageType('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage(t('ozYurdunuQur.form.error'));
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t('ozYurdunuQur.form.name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-primary focus:border-transparent transition-colors duration-200"
            placeholder={t('ozYurdunuQur.form.name')}
          />
        </div>

        {/* Surname Field */}
        <div>
          <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2">
            {t('ozYurdunuQur.form.surname')} *
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-primary focus:border-transparent transition-colors duration-200"
            placeholder={t('ozYurdunuQur.form.surname')}
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            {t('ozYurdunuQur.form.phone')} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-primary focus:border-transparent transition-colors duration-200"
            placeholder="+994 XX XXX XX XX"
          />
        </div>

        {/* ID Front Field */}
        <div>
          <label htmlFor="idFront" className="block text-sm font-medium text-gray-700 mb-2">
            {t('ozYurdunuQur.form.idFront')} *
          </label>
          <input
            type="file"
            id="idFront"
            name="idFront"
            onChange={handleFileChange}
            accept="image/*"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-primary focus:border-transparent transition-colors duration-200"
          />
          <p className="mt-1 text-sm text-gray-500">
            JPG, PNG, JPEG formatlarında, maksimum 5MB
          </p>
        </div>

        {/* Message */}
        {message && (
          <div className={`p-4 rounded-lg ${
            messageType === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-festival-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-festival-secondary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? t('common.loading') : t('ozYurdunuQur.form.submit')}
        </button>
      </form>
    </div>
  );
}