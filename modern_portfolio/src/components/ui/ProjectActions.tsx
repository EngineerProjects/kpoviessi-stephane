"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaCode } from 'react-icons/fa';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProjectActionsProps {
  github?: string;
  link?: string;
  downloadUrl?: string;
  onPreview?: () => void;
}

const ProjectActions: React.FC<ProjectActionsProps> = ({
  github,
  link,
  downloadUrl,
  onPreview
}) => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const actions = [
    {
      icon: FaEye,
      label: t('projects.preview') || 'Preview',
      onClick: onPreview,
      href: link,
      show: !!(link || onPreview),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: FaCode,
      label: t('projects.viewCode') || 'View Code',
      href: github,
      show: !!github,
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      icon: FaDownload,
      label: t('projects.download') || 'Download',
      href: downloadUrl,
      show: !!downloadUrl,
      color: 'bg-green-600 hover:bg-green-700'
    }
  ].filter(action => action.show);

  return (
    <div 
      className="flex gap-2 mt-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {actions.map((action, index) => (
        <motion.button
          key={action.label}
          className={`flex items-center gap-2 px-3 py-2 text-white text-sm rounded-lg transition-all ${action.color}`}
          onClick={action.onClick}
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0.8, 
            x: 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <action.icon size={14} />
          <span>{action.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectActions;