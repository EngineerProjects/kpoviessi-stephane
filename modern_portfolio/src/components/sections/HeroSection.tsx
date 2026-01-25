"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { personalInfo } from '@/data/personal';
import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageContext';
import { getLocalizedText } from '@/utils/helpers';

const HeroSection: React.FC = () => {
  const completedProjects = projects.length;
  const { t, language } = useLanguage();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <section className="relative pt-32 pb-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
          >
            <p className="text-primary-600 font-semibold mb-4">{t('hero.greeting')}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="text-secondary-600">{personalInfo.name.split(' ')[1]}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-dark-700 mb-6">{getLocalizedText(personalInfo.title, language)}</h2>
            <p className="text-dark-700 mb-8 max-w-2xl leading-relaxed">
              {getLocalizedText(personalInfo.bio, language)}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">

              <Link
                href="/contact"
                className="btn bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-full flex items-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                {t('hero.getInTouch')}
              </Link>

              <Link
                href="/projects"
                className="btn border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-800 text-gray-800 px-6 py-3 rounded-full flex items-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                {t('hero.viewProjects')}
              </Link>
              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  className="btn bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-full flex items-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <FaDownload className="mr-2" /> {t('hero.resume')}
                </a>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex space-x-4">
                <a
                  href={personalInfo.socialLinks.find(link => link.platform === "LinkedIn")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-light-400 hover:bg-primary-600 flex items-center justify-center text-dark-800 hover:text-white transition-colors shadow-md"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href={personalInfo.socialLinks.find(link => link.platform === "GitHub")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-light-400 hover:bg-primary-600 flex items-center justify-center text-dark-800 hover:text-white transition-colors shadow-md"
                  title="GitHub (Main)"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href={personalInfo.socialLinks.find(link => link.platform === "GitHub Projects")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-light-400 hover:bg-primary-600 flex items-center justify-center text-dark-800 hover:text-white transition-colors shadow-md"
                  title="GitHub (Projects)"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative flex justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
          >
            <div className="relative z-10">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/profile.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 384px"
                  priority
                />
              </div>
              
              {/* Stats bubbles */}
              <motion.div
                className="absolute -left-4 -bottom-4 p-4 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-600">{completedProjects}+</h3>
                  <p className="text-dark-700 text-sm">{t('hero.projects')}</p>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -right-4 top-1/3 p-4 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-600">5+</h3>
                  <p className="text-dark-700 text-sm">{t('hero.yearsExperience')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;