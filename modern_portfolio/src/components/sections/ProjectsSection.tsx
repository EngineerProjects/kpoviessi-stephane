"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { projects } from '@/data/projects';
import ProjectCard from '../ui/ProjectCard';

const ProjectsSection: React.FC<{ showAll?: boolean }> = ({ showAll = false }) => {
  // Instead of state, use a constant since we're not updating it
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  
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
            My <span className="text-primary-600">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-dark-700 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore my portfolio of machine learning and AI projects, showcasing practical applications and technical expertise.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={index * 0.2}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-12">
            <Link href="/projects">
              <motion.div
                className="inline-flex items-center py-3 px-8 rounded-full bg-primary-600 text-dark-900 font-medium shadow-lg hover:shadow-xl hover:bg-primary-500 transition-all transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">View All Projects</span>
                <FaArrowRight />
              </motion.div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;