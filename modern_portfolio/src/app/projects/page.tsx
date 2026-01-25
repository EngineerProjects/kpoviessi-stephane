"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import { useLanguage } from '@/i18n/LanguageContext';
import { getProjectCategories, filterProjectsByCategory } from '@/utils/helpers';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const { t } = useLanguage();
  
  // Get unique categories from all projects  
  const categories = ['All', ...getProjectCategories(projects)];
  
  // Filter projects by selected category
  const filteredProjects = filterProjectsByCategory(projects, activeCategory);
    
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
            {t('projects.title').split(' ')[0]} <span className="text-primary-600">{t('projects.title').split(' ')[1]}</span>
          </motion.h1>
          <motion.p
            className="text-dark-700 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('projects.subtitle')}
          </motion.p>
        </div>
        
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'All'
                ? 'bg-yellow-400 text-gray-800 shadow-md'
                : 'bg-white text-gray-800 hover:bg-yellow-100 shadow'
            }`}
            onClick={() => {
              setActiveCategory('All');
              // Only close categories if we're not currently showing them or if All was selected while categories were hidden
              if (!showCategories) {
                setShowCategories(false);
              }
            }}
          >
            {t('projects.allProjects')}
          </button>
          
          <button
            className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
              showCategories
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white text-gray-800 hover:bg-primary-100 shadow'
            }`}
            onClick={() => setShowCategories(!showCategories)}
          >
            Categories {showCategories ? '−' : '+'}
          </button>
        </div>
        
        {/* Category Tags (shown when showCategories is true) */}
        {showCategories && (
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {categories.filter(cat => cat !== 'All').map((category) => (
              <button
                key={category}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-yellow-400 text-gray-800 shadow-md'
                    : 'bg-white text-gray-800 hover:bg-yellow-100 shadow'
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  // Don't close categories - let user continue browsing
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={index * 0.1}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">{t('projects.noProjects')}</h3>
            <p className="text-dark-600 mb-6">{t('projects.tryDifferent')}</p>
            <button
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
              onClick={() => {
                setActiveCategory('All');
                setShowCategories(false);
              }}
            >
              {t('projects.viewAll')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;