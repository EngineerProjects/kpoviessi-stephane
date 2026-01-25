// src/components/ui/TechStack.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaReact, 
  FaAws, 
  FaDocker, 
  FaHtml5, 
  FaCss3Alt,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiJavascript, 
  SiTypescript, 
  SiGo,
  SiR,
  SiMongodb,
  SiPostgresql,
  SiTerraform,
  SiApacheairflow,
  SiApachespark,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiC
} from 'react-icons/si';

const techIcons = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'PyTorch', icon: <SiPytorch /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'R', icon: <SiR /> },
  { name: 'Go', icon: <SiGo /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Azure', icon: <FaMicrosoft /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Pandas', icon: <SiPandas /> },
  { name: 'NumPy', icon: <SiNumpy /> },
  { name: 'OpenCV', icon: <SiOpencv /> },
  { name: 'Terraform', icon: <SiTerraform /> },
  { name: 'Airflow', icon: <SiApacheairflow /> },
  { name: 'Spark', icon: <SiApachespark /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'C', icon: <SiC /> },
];

interface TechStackProps {
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ className = '' }) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white shadow-md flex items-center justify-center text-primary-600 hover:text-primary-800 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <span className="text-2xl">{tech.icon}</span>
            </div>
            <span className="mt-2 text-xs text-dark-700">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;