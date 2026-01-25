"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  description: string[];
  skills?: string[];
  index: number;
  isEducation?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  location,
  description,
  skills,
  index,
  isEducation = false
}) => {
  return (
    <motion.div 
      className={`relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 ${isEducation ? 'before:bg-secondary-500' : 'before:bg-light-500'}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className={`absolute left-0 top-0 w-6 h-6 rounded-full transform -translate-x-1/2 bg-white ${isEducation ? 'border-4 border-secondary-500' : 'border-4 border-primary-500'}`}></div>
      
      <div className="mb-1">
        <h4 className="text-xl font-bold text-dark-800">{title}</h4>
        <h5 className="text-lg font-medium text-primary-600">{subtitle}</h5>
      </div>
      
      <div className="flex flex-wrap items-center text-dark-600 text-sm mt-1 mb-3">
        <div className="flex items-center mr-4">
          <FaCalendarAlt className="mr-1 text-primary-500" />
          <span>{period}</span>
        </div>
        
        {location && (
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-1 text-primary-500" />
            <span>{location}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2 mt-3 mb-4">
        {description.map((item, idx) => (
          <p key={idx} className="text-dark-700 leading-relaxed">
            {item}
          </p>
        ))}
      </div>
      
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TimelineItem;