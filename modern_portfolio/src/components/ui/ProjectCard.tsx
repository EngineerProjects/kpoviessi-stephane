"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaInfoCircle, 
  FaBrain,
  FaRobot,
  FaCamera,
  FaChartLine,
  FaDatabase,
  FaCode,
  FaMicrophone,
  FaEye,
  FaShoppingCart,
  FaCube,
  FaFileAlt,
  FaSearch,
  FaMedkit
} from 'react-icons/fa';
import { Project } from '@/types';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { t } = useLanguage();
  
  // Function to get appropriate icon based on project tags/title
  const getProjectIcon = (project: Project) => {
    const title = project.title.toLowerCase();
    const tags = project.tags.map(tag => tag.toLowerCase());
    
    if (title.includes('brain') || title.includes('medical') || tags.includes('healthcare') || tags.includes('medical ai')) {
      return <FaMedkit className="text-red-500" size={40} />;
    }
    if (title.includes('enterprise-ai') || title.includes('multi-agent') || tags.includes('multi-agent systems')) {
      return <FaRobot className="text-blue-500" size={40} />;
    }
    if (title.includes('computer vision') || title.includes('detection') || tags.includes('computer vision')) {
      return <FaEye className="text-purple-500" size={40} />;
    }
    if (title.includes('football') || title.includes('sports') || tags.includes('sports analytics')) {
      return <FaCamera className="text-green-500" size={40} />;
    }
    if (title.includes('chatbot') || title.includes('rag') || tags.includes('llm') || tags.includes('nlp')) {
      return <FaBrain className="text-indigo-500" size={40} />;
    }
    if (title.includes('business intelligence') || title.includes('bi') || tags.includes('business intelligence')) {
      return <FaChartLine className="text-orange-500" size={40} />;
    }
    if (title.includes('sentiment') || title.includes('bert') || tags.includes('sentiment analysis')) {
      return <FaBrain className="text-pink-500" size={40} />;
    }
    if (title.includes('3d') || title.includes('photogrammetry') || tags.includes('3d modeling')) {
      return <FaCube className="text-cyan-500" size={40} />;
    }
    if (title.includes('audio') || title.includes('speech') || tags.includes('speech recognition')) {
      return <FaMicrophone className="text-teal-500" size={40} />;
    }
    if (title.includes('shop') || title.includes('ecommerce') || tags.includes('e-commerce')) {
      return <FaShoppingCart className="text-yellow-500" size={40} />;
    }
    if (title.includes('code') || title.includes('ingest') || tags.includes('code analysis')) {
      return <FaSearch className="text-gray-600" size={40} />;
    }
    if (title.includes('ocr') || title.includes('document') || tags.includes('document processing')) {
      return <FaFileAlt className="text-blue-600" size={40} />;
    }
    if (tags.includes('machine learning') || tags.includes('data science')) {
      return <FaDatabase className="text-emerald-500" size={40} />;
    }
    
    // Default icon
    return <FaCode className="text-slate-500" size={40} />;
  };
  
  return (
    <div className="h-full">
      <motion.div 
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
        whileHover={{ y: -5 }}
      >
        <div className="h-48 relative overflow-hidden bg-gradient-to-r from-primary-400/30 to-secondary-400/30 flex items-center justify-center">
          <div className="relative z-10">
            {getProjectIcon(project)}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-dark-800 mb-2">{project.title}</h3>
          <p className="text-dark-600 mb-4">{project.description}</p>
          
          {/* Project tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 bg-light-300 text-dark-500 rounded-full text-xs font-medium">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          {/* Long description (toggleable) */}
          {project.longDescription && (
            <div className="mb-4">
              {showDetails ? (
                <motion.p 
                  className="text-dark-600 text-sm"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.longDescription}
                </motion.p>
              ) : null}
              
            <button 
              className="text-primary-600 text-sm font-medium flex items-center mt-2 hover:text-primary-700 transition-colors"
              onClick={() => setShowDetails(!showDetails)}
            >
              <FaInfoCircle className="mr-1" />
              {showDetails ? t('projects.showLess') : t('projects.learnMore')}
            </button>
            </div>
          )}
        </div>
        
        {/* Links */}
        <div className="px-6 pb-6 flex items-center space-x-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-light-400 hover:bg-dark-900 flex items-center justify-center text-dark-800 hover:text-white transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FaGithub size={20} />
            </a>
          )}
          
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-light-400 hover:bg-primary-600 flex items-center justify-center text-dark-800 hover:text-white transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <FaExternalLinkAlt size={16} />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;