'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { FaMoon, FaSun, FaPalette } from 'react-icons/fa';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case 'light-orange':
        return <FaSun className="text-yellow-500" size={24} />;
      case 'light-blue':
        return <FaSun className="text-blue-500" size={24} />;
      case 'dark':
        return <FaMoon className="text-gray-300" size={24} />;
      default:
        return <FaPalette size={24} />;
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 rounded-lg focus:outline-none transition-colors 
                 bg-white dark:bg-gray-700 border-2 border-primary-500 dark:border-primary-400"
        aria-label="Toggle theme"
      >
        {getThemeIcon()}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50
                      bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              setTheme('light-orange');
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FaSun className="mr-3 text-yellow-500" size={18} />
            Light Orange Theme
          </button>
          
          <button
            onClick={() => {
              setTheme('light-blue');
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FaSun className="mr-3 text-blue-500" size={18} />
            Light Blue Theme
          </button>
          
          <button
            onClick={() => {
              setTheme('dark');
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FaMoon className="mr-3 text-gray-300" size={18} />
            Dark Theme
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;