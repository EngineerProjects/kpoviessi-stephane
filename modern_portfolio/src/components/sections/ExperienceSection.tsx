"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import { useLanguage } from '@/i18n/LanguageContext';
import { getLocalizedText, getLocalizedArray } from '@/utils/helpers';

const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  
  // Get only the 2 most recent experiences and 2 most recent education entries
  const recentExperiences = experiences.slice(0, 2);
  const recentEducation = education.slice(0, 2);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-primary-600">Experience</span>
          </motion.h2>
          <motion.p 
            className="text-dark-700 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A summary of my professional journey and educational background
          </motion.p>
        </div>
        
        {/* First row: Recent Work Experience */}
        <div className="mb-10">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
              <FaBriefcase size={20} />
            </div>
            <h3 className="text-2xl font-bold text-dark-800">Work Experience</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentExperiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index * 0.2}
              >
                <h4 className="text-xl font-bold text-dark-800 mb-1">
                  {getLocalizedText(experience.title, language)}
                </h4>
                <p className="text-primary-600 font-medium">{experience.company}</p>
                <div className="flex justify-between mt-2 mb-4 text-sm text-dark-600">
                  <span>{experience.startDate} - {experience.endDate || 'Present'}</span>
                  <span>{getLocalizedText(experience.location, language)}</span>
                </div>
                <p className="text-dark-700 mb-2">
                  {getLocalizedArray(experience.description, language)[0]}
                </p>
                {experience.skills && experience.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {experience.skills.slice(0, 3).map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {experience.skills.length > 3 && (
                      <span className="px-3 py-1 bg-light-300 text-dark-500 rounded-full text-xs font-medium">
                        +{experience.skills.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Second row: Recent Education */}
        <div className="mb-10">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mr-4">
              <FaGraduationCap size={20} />
            </div>
            <h3 className="text-2xl font-bold text-dark-800">Education</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentEducation.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${index}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index * 0.2 + 0.4} // Stagger animation after work experience
              >
                <h4 className="text-xl font-bold text-dark-800 mb-1">
                  {getLocalizedText(edu.degree, language)}
                </h4>
                <p className="text-secondary-600 font-medium">{edu.institution}</p>
                <div className="flex justify-between mt-2 mb-4 text-sm text-dark-600">
                  <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
                  <span>{edu.location ? getLocalizedText(edu.location, language) : ''}</span>
                </div>
                <p className="text-dark-700">{getLocalizedText(edu.field, language)}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/experience">
            <motion.div
              className="inline-flex items-center py-3 px-8 rounded-full bg-primary-600 text-dark-900 font-medium shadow-lg hover:shadow-xl hover:bg-primary-500 transition-all transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">View All Experience</span>
              <FaArrowRight />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;