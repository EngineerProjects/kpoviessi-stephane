"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';
import { personalInfo } from '@/data/personal';
import { useLanguage } from '@/i18n/LanguageContext';

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { t } = useLanguage();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormInputs>();
  
const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  setIsSubmitting(true);
  setSubmitError('');
  
  try {
    // Send data to our API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    
    if (response.ok) {
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } else {
      throw new Error(result.error || result.message || t('contact.error'));
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error submitting form:', error.message);
    } else {
      console.error('Error submitting form:', error);
    }
    setSubmitError(t('contact.error'));
  } finally {
    setIsSubmitting(false);
  }
};
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('contact.headerTitle').split(' ')[0]} {t('contact.headerTitle').split(' ')[1]} <span className="text-primary-600">{t('contact.headerTitle').split(' ')[2]}</span>
          </motion.h2>
          <motion.p 
            className="text-dark-700 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('contact.headerSubtitle')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-dark-800">{t('contact.contactInfo')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-800">{t('contact.email')}</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-dark-600 hover:text-primary-600 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-800">{t('contact.phone')}</h4>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-dark-600 hover:text-primary-600 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-800">{t('contact.location')}</h4>
                    <p className="text-dark-600">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold text-dark-800 mb-4">{t('contact.connectWithMe')}</h4>
                <div className="flex space-x-4">
                  <a 
                    href={personalInfo.socialLinks.find(link => link.platform === "LinkedIn")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-light-400 hover:bg-primary-600 flex items-center justify-center text-dark-800 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={22} />
                  </a>
                  <a 
                    href={personalInfo.socialLinks.find(link => link.platform === "GitHub")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-light-400 hover:bg-primary-600 flex items-center justify-center text-dark-800 hover:text-white transition-colors"
                    aria-label="GitHub (Main)"
                  >
                    <FaGithub size={22} />
                  </a>
                  <a 
                    href={personalInfo.socialLinks.find(link => link.platform === "GitHub Projects")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-light-400 hover:bg-primary-600 flex items-center justify-center text-dark-800 hover:text-white transition-colors"
                    aria-label="GitHub (Projects)"
                  >
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-dark-800">{t('contact.sendMessage')}</h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>{t('contact.success')}</p>
                </div>
              ) : null}
              
              {submitError ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p>{submitError}</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-dark-800 font-medium mb-2">{t('contact.name')}</label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
                      errors.name ? 'border-red-500' : 'border-light-500'
                    }`}
                    placeholder={t('contact.name')}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-dark-800 font-medium mb-2">{t('contact.email')}</label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
                      errors.email ? 'border-red-500' : 'border-light-500'
                    }`}
                    placeholder={t('contact.email')}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-dark-800 font-medium mb-2">{t('contact.subject')}</label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
                      errors.subject ? 'border-red-500' : 'border-light-500'
                    }`}
                    placeholder={t('contact.subject')}
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-dark-800 font-medium mb-2">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
                      errors.message ? 'border-red-500' : 'border-light-500'
                    }`}
                    placeholder={t('contact.message')}
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 20,
                        message: 'Message should be at least 20 characters',
                      }
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-primary-600 hover:bg-primary-700 text-dark-900 font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 w-full md:w-auto ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? t('contact.sending') : t('contact.send')}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;