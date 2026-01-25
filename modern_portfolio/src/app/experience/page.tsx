"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaUsers } from 'react-icons/fa';
import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';
import { associations } from '@/data/associations';
import TimelineItem from '@/components/ui/TimelineItem';
import { useLanguage } from '@/i18n/LanguageContext';
import { getLocalizedText, getLocalizedArray } from '@/utils/helpers';

const ExperiencePage = () => {
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
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('experience.title').split(' ')[0]} <span className="text-primary-600">{t('experience.title').split(' ')[1]}</span>
          </motion.h1>
          <motion.p
            className="text-dark-700 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('experience.subtitle')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Work Experience */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                <FaBriefcase size={20} />
              </div>
              <h2 className="text-2xl font-bold text-dark-800">{t('experience.workExperience')}</h2>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <TimelineItem 
                    key={`${experience.company}-${index}`}
                    title={getLocalizedText(experience.title, language)}
                    subtitle={experience.company}
                    period={`${experience.startDate} - ${experience.endDate || t('experience.present')}`}
                    location={getLocalizedText(experience.location, language)}
                    description={getLocalizedArray(experience.description, language)}
                    skills={experience.skills}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Education & Associations Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.5}
          >
            {/* Education */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mr-4">
                <FaGraduationCap size={20} />
              </div>
              <h2 className="text-2xl font-bold text-dark-800">{t('experience.education')}</h2>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <TimelineItem 
                    key={`${edu.institution}-${index}`}
                    title={getLocalizedText(edu.degree, language)}
                    subtitle={edu.institution}
                    period={`${edu.startDate} - ${edu.endDate || t('experience.present')}`}
                    location={edu.location ? getLocalizedText(edu.location, language) : undefined}
                    description={[getLocalizedText(edu.field, language)]}
                    index={index}
                    isEducation
                  />
                ))}
              </div>
            </div>
            
            {/* Associations */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                <FaUsers size={20} />
              </div>
              <h2 className="text-2xl font-bold text-dark-800">{t('experience.associations')}</h2>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-12">
                {associations.map((association, index) => (
                  <TimelineItem 
                    key={`${association.organization}-${index}`}
                    title={getLocalizedText(association.title, language)}
                    subtitle={association.organization}
                    period={`${association.startDate} - ${association.endDate || t('experience.present')}`}
                    location={getLocalizedText(association.location, language)}
                    description={getLocalizedArray(association.description, language)}
                    skills={association.skills}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Certifications Section - Project Cards Style */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={1}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mr-4">
              <FaCertificate size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800">{t('experience.certifications')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={`${cert.title}-${index}`}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                    <FaCertificate size={20} />
                  </div>
                  <span className="text-xs text-dark-500 bg-light-200 px-2 py-1 rounded-full">
                    {cert.issueDate}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-dark-800 mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-primary-600 font-medium mb-3">{cert.organization}</p>
                <p className="text-dark-600 text-sm mb-4">
                  {t('experience.issued')} {cert.issueDate}
                </p>
                
                {cert.credentialUrl && (
                  <div className="mb-4">
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors w-full justify-center"
                    >
                      <span className="mr-2">🔗</span>
                      {t('experience.viewCertificate')}
                    </a>
                  </div>
                )}
                
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 4).map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 bg-light-300 text-dark-700 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 4 && (
                      <span className="px-2 py-1 bg-light-300 text-dark-700 rounded-md text-xs font-medium">
                        +{cert.skills.length - 4} {t('experience.more')}
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;