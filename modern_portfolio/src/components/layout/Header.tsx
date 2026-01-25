"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { personalInfo } from '@/data/personal';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/skills', label: t('nav.skills') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/experience', label: t('nav.experience') },
    { href: '/contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl z-50">
          <span className="text-primary-600">{personalInfo.name.split(' ')[0]}</span>
          <span className="ml-1 text-secondary-600">{personalInfo.name.split(' ')[1]}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-dark-800 hover:text-primary-600 transition-colors relative font-medium"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="bg-primary-600 text-dark-900 font-semibold px-6 py-2 rounded-full hover:bg-primary-500 transition-colors shadow-md hover:shadow-lg"
          >
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-dark-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-800 hover:text-primary-600 transition-colors text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-4">
              <LanguageSwitcher />
            </div>
            <Link
              href="/contact"
              className="bg-primary-600 text-dark-900 font-semibold px-8 py-3 rounded-full hover:bg-primary-500 transition-colors shadow-md hover:shadow-lg text-xl mt-4"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;