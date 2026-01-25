"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '@/components/sections/ContactSection';
import { useLanguage } from '@/i18n/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('contact.title').split(' ')[0]} {t('contact.title').split(' ')[1]} <span className="text-primary-600">{t('contact.title').split(' ')[2]}</span>
          </motion.h1>
          <motion.p
            className="text-dark-700 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default ContactPage;