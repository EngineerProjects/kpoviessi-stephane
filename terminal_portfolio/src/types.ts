export const SkillLevel = {
  Novice: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4,
  Master: 5
} as const;

export type SkillLevel = typeof SkillLevel[keyof typeof SkillLevel];

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'Languages' | 'Programming' | 'ML/AI' | 'Data Engineering' | 'Tools' | 'Langues';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  skills: string[];
  description: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  category: 'AI' | 'Data' | 'Dev';
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  description?: string;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  skills: string[];
  link: string;
}

export interface Association {
  role: string;
  organization: string;
  location: string;
  date: string;
  skills: string[];
  description: string[];
}

export interface Pillar {
  title: string;
  desc: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string; // Plain text fallback/AI context
  marketing: {
    intro: string;
    pillars: Pillar[];
    outro: string;
  };
  hobbies: string[];
  socials: {
    linkedin: string;
    github: string;
    github_org: string;
    email: string;
  };
}

export interface UI_LABELS {
  nav: { [key: string]: string };
  dashboard: { [key: string]: string };
  skills: { [key: string]: string };
  experience: { [key: string]: string };
  projects: { [key: string]: string };
  comms: { [key: string]: string };
  ai: { [key: string]: string };
  services: { [key: string]: string };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  tags: string[];
  link: string;
}

export interface AppData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  services: Service[];
  products: Product[];
  education: Education[];
  certifications: Certification[];
  associations: Association[];
  ui: UI_LABELS;
}
