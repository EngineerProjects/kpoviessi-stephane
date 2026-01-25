"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import { certifications } from '@/data/certifications';

const CertificationsSection: React.FC = () => {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);
  
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
            My <span className="text-primary-600">Certifications</span>
          </motion.h2>
          <motion.p 
            className="text-dark-700 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Professional certifications and credentials that validate my expertise
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={`${cert.title}-${index}`}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={index * 0.2}
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4 shrink-0">
                    <FaCertificate size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-800 mb-1">{cert.title}</h3>
                    <p className="text-primary-600">{cert.organization}</p>
                    <p className="text-dark-600 text-sm mt-1">Issued: {cert.issueDate}</p>
                    
                    {cert.credentialUrl && (
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 text-sm mt-2 hover:text-primary-700 transition-colors"
                      >
                        <span className="mr-1">Show Credential</span>
                        <FaExternalLinkAlt size={12} />
                      </a>
                    )}
                    
                    {cert.skills && cert.skills.length > 0 && (
                      <>
                        <button
                          className="inline-flex items-center text-dark-600 text-sm mt-3 hover:text-primary-600 transition-colors ml-2"
                          onClick={() => setExpandedCert(expandedCert === cert.title ? null : cert.title)}
                        >
                          <span className="mr-1">{expandedCert === cert.title ? 'Hide Skills' : 'Show Skills'}</span>
                          {expandedCert === cert.title ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                        </button>
                        
                        {expandedCert === cert.title && (
                          <motion.div 
                            className="mt-3"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex flex-wrap gap-2 mt-2">
                              {cert.skills.map((skill) => (
                                <span 
                                  key={skill} 
                                  className="px-3 py-1 bg-light-300 text-dark-700 rounded-full text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;