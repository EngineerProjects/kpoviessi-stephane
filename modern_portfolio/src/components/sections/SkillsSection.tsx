"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCubes, FaLaptopCode, FaDatabase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { skills } from '@/data/skills';
import SkillBar from '../ui/SkillBar';

const categories = [
  { id: 'machine-learning', label: 'Machine Learning', icon: <FaCubes /> },
  { id: 'programming', label: 'Programming', icon: <FaLaptopCode /> },
  { id: 'data-engineering', label: 'Data Engineering', icon: <FaDatabase /> },
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('machine-learning');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);
  const displaySkills = isExpanded ? filteredSkills : filteredSkills.slice(0, 6);
  
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
            My <span className="text-primary-600">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-dark-700 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;ve developed a diverse set of skills throughout my career. Here are the technologies and tools I specialize in.
          </motion.p>
        </div>
        
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`flex items-center py-2 px-6 rounded-full text-sm md:text-base font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-dark-900 shadow-lg'
                    : 'bg-white text-dark-800 hover:bg-primary-100 shadow'
                }`}
                onClick={() => {
                  setActiveCategory(category.id);
                  setIsExpanded(false);
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displaySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index * 0.1}
              >
                <SkillBar skill={skill} />
              </motion.div>
            ))}
          </div>
          
          {filteredSkills.length > 6 && (
            <div className="text-center mt-8">
              <button
                className="inline-flex items-center py-2 px-6 rounded-full bg-white text-dark-800 hover:bg-primary-100 shadow transition-all"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    <span className="mr-2">Show Less</span>
                    <FaChevronUp />
                  </>
                ) : (
                  <>
                    <span className="mr-2">Show More</span>
                    <FaChevronDown />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;