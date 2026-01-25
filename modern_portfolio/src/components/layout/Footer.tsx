"use client";

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '@/data/personal';
import { useLanguage } from '@/i18n/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-light-200 dark:bg-gray-700 py-16 border-t border-light-300 dark:border-gray-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-primary-600">{personalInfo.name.split(' ')[0]}</span>
              <span className="ml-1 text-dark-900 dark:text-gray-100">{personalInfo.name.split(' ')[1]}</span>
            </h3>
            <p className="text-dark-800 dark:text-gray-200 mb-6 max-w-md">
              {t('footer.bio')}
            </p>
            <div className="flex space-x-4">
              <a 
                href={personalInfo.socialLinks.find(link => link.platform === 'LinkedIn')?.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-light-300 dark:bg-gray-600 hover:bg-primary-600 rounded-full flex items-center justify-center text-dark-800 dark:text-gray-200 hover:text-dark-900 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href={personalInfo.socialLinks.find(link => link.platform === 'GitHub')?.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-light-300 dark:bg-gray-600 hover:bg-primary-600 rounded-full flex items-center justify-center text-dark-800 dark:text-gray-200 hover:text-dark-900 transition-colors"
                aria-label="GitHub (Main)"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href={personalInfo.socialLinks.find(link => link.platform === 'GitHub Projects')?.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-light-300 dark:bg-gray-600 hover:bg-primary-600 rounded-full flex items-center justify-center text-dark-800 dark:text-gray-200 hover:text-dark-900 transition-colors"
                aria-label="GitHub (Projects)"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="w-10 h-10 bg-light-300 dark:bg-gray-600 hover:bg-primary-600 rounded-full flex items-center justify-center text-dark-800 dark:text-gray-200 hover:text-dark-900 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-dark-900 dark:text-gray-100">{t('footer.quickLinks')}</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-dark-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t('footer.home')}</Link>
              <Link href="/about" className="text-dark-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t('footer.about')}</Link>
              <Link href="/skills" className="text-dark-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t('footer.skills')}</Link>
              <Link href="/projects" className="text-dark-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t('footer.projects')}</Link>
              <Link href="/experience" className="text-dark-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t('footer.experience')}</Link>
              <Link href="/contact" className="text-dark-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t('footer.contact')}</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-dark-900 dark:text-gray-100">{t('footer.contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="text-dark-700 dark:text-gray-400 text-sm mb-1">{t('contact.email')}:</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-dark-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="text-dark-700 dark:text-gray-400 text-sm mb-1">{t('contact.phone')}:</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-dark-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="text-dark-700 dark:text-gray-400 text-sm mb-1">{t('contact.location')}:</p>
                  <p className="text-dark-800 dark:text-gray-300">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-light-400 dark:border-gray-600 text-center">
          <p className="text-dark-800 dark:text-gray-300">
            &copy; {currentYear} {personalInfo.name} | {t('footer.rightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;