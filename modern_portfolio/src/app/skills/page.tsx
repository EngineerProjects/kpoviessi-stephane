"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import SkillBar from '@/components/ui/SkillBar';
import { useLanguage } from '@/i18n/LanguageContext';

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { t } = useLanguage();
  
  const categories = [
    { id: 'machine-learning', label: t('skills.categories.machine-learning') },
    { id: 'programming', label: t('skills.categories.programming') },
    { id: 'data-engineering', label: t('skills.categories.data-engineering') },
    { id: 'documentation', label: t('skills.categories.documentation') },
  ];
  
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;
    
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
            {t('skills.title').split(' ')[0]} <span className="text-primary-600">{t('skills.title').split(' ')[1]}</span>
          </motion.h1>
          <motion.p
            className="text-dark-700 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('skills.subtitle')}
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`py-2 px-6 rounded-full text-sm md:text-base font-medium transition-all ${
              activeCategory === null
              ? 'bg-yellow-400 text-gray-800 shadow-md'
              : 'bg-white text-gray-800 hover:bg-yellow-100 shadow'
            }`}
            onClick={() => setActiveCategory(null)}
          >
            {t('skills.allSkills')}
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              className={`py-2 px-6 rounded-full text-sm md:text-base font-medium transition-all ${
                activeCategory === category.id
              ? 'bg-yellow-400 text-gray-800 shadow-md'
              : 'bg-white text-gray-800 hover:bg-yellow-100 shadow'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={index * 0.1}
            >
              <SkillBar skill={skill} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('skills.skillsByCategory')}</h2>
          
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white mr-3">
                  {categoryIndex + 1}
                </span>
                {category.label}
              </h3>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills
                    .filter(skill => skill.category === category.id)
                    .map((skill, index) => (
                      <div key={skill.name} className="flex flex-col">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                            {index + 1}
                          </div>
                          <h4 className="font-semibold">{skill.name}</h4>
                        </div>
                        <div className="w-full bg-light-400 rounded-full h-2 mb-1">
                          <div 
                            className="h-2 rounded-full bg-primary-600"
                            style={{ width: `${skill.level * 20}%` }}  
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;