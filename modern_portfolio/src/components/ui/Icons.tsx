"use client";

import React from 'react';
import { 
  FaPython, 
  FaReact, 
  FaAws, 
  FaDocker, 
  FaGithub, 
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiJavascript, 
  SiTypescript,
  SiR
} from 'react-icons/si';
import { GoVerified } from 'react-icons/go';

export type IconName = 
  | 'python'
  | 'pytorch'
  | 'tensorflow'
  | 'react'
  | 'javascript'
  | 'typescript'
  | 'r'
  | 'aws'
  | 'docker'
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'verified';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  switch (name) {
    case 'python':
      return <FaPython size={size} className={className} />;
    case 'pytorch':
      return <SiPytorch size={size} className={className} />;
    case 'tensorflow':
      return <SiTensorflow size={size} className={className} />;
    case 'react':
      return <FaReact size={size} className={className} />;
    case 'javascript':
      return <SiJavascript size={size} className={className} />;
    case 'typescript':
      return <SiTypescript size={size} className={className} />;
    case 'r':
      return <SiR size={size} className={className} />;
    case 'aws':
      return <FaAws size={size} className={className} />;
    case 'docker':
      return <FaDocker size={size} className={className} />;
    case 'github':
      return <FaGithub size={size} className={className} />;
    case 'linkedin':
      return <FaLinkedin size={size} className={className} />;
    case 'twitter':
      return <FaTwitter size={size} className={className} />;
    case 'verified':
      return <GoVerified size={size} className={className} />;
    default:
      return null;
  }
};