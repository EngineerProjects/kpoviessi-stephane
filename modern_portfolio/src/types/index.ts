export interface MultiLangText {
  en: string;
  fr: string;
}

export interface MultiLangArray {
  en: string[];
  fr: string[];
}

export interface Association {
  title: MultiLangText;
  organization: string;
  location: MultiLangText;
  startDate: string;
  endDate?: string;
  description: MultiLangArray;
  skills?: string[];
}

export interface Certification {
  title: string;
  organization: string;
  issueDate: string;
  expirationDate?: string;
  credentialUrl?: string;
  skills?: string[];
  certificateFile?: string;
}

export interface Experience {
  title: MultiLangText | string;
  company: string;
  location: MultiLangText | string;
  startDate: string;
  endDate?: string;
  description: MultiLangArray | string[];
  skills?: string[];
}

export interface Education {
  institution: string;
  degree: MultiLangText | string;
  field: MultiLangText | string;
  startDate: string;
  endDate?: string;
  location?: MultiLangText | string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'machine-learning' | 'programming' | 'data-engineering' | 'documentation' | 'other';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
  github?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: MultiLangText | string;
  email: string;
  phone: string;
  location: string;
  bio: MultiLangText | string;
  hobbies?: string[];
  socialLinks: SocialLink[];
  resumeUrl?: string;
}