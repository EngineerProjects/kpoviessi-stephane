import { Project, MultiLangText, MultiLangArray } from '@/types';

/**
 * Format a date string into a more readable format
 */
export function formatDate(dateString: string): string {
  // Check if the date string is in a simple format like "Month Year"
  if (/^[A-Za-z]+ \d{4}$/.test(dateString)) {
    return dateString;
  }
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
}

/**
 * Calculate years of experience between two dates
 */
export function calculateYearsOfExperience(startDateString: string, endDateString?: string): number {
  try {
    const startDate = new Date(startDateString);
    const endDate = endDateString ? new Date(endDateString) : new Date();
    
    const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = endDate.getMonth() - startDate.getMonth();
    
    let experience = yearsDiff;
    
    if (monthsDiff < 0) {
      experience -= 1;
    }
    
    return Math.max(0, experience);
  } catch {
    return 0;
  }
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
}

/**
 * Scroll to a section smoothly
 */
export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Returns a random color from the primary palette
 */
export function getRandomPrimaryColor(): string {
  const colors = [
    'var(--color-primary-500)',
    'var(--color-primary-600)',
    'var(--color-primary-700)',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Check if we're on the client side
 */
export const isClient = typeof window !== 'undefined';

/**
 * Get text in current language
 */
export function getLocalizedText(text: string | MultiLangText, language: string): string {
  if (typeof text === 'string') return text;
  if (text && typeof text === 'object' && text[language as keyof MultiLangText]) {
    return text[language as keyof MultiLangText];
  }
  // Fallback to English if current language not available
  if (text && typeof text === 'object' && text.en) {
    return text.en;
  }
  return String(text) || '';
}

/**
 * Get array in current language
 */
export function getLocalizedArray(array: string[] | MultiLangArray, language: string): string[] {
  if (Array.isArray(array)) return array;
  if (array && typeof array === 'object' && array[language as keyof MultiLangArray]) {
    return array[language as keyof MultiLangArray];
  }
  // Fallback to English if current language not available
  if (array && typeof array === 'object' && array.en) {
    return array.en;
  }
  return [];
}

/**
 * Project category mappings
 */
export const PROJECT_CATEGORIES: Record<string, readonly string[]> = {
  'ML/AI': [
    'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Neural Networks',
    'GANs', 'BERT', 'AI', 'Artificial Intelligence', 'LLM', 'Multi-Agent Systems',
    'RAG', 'YOLO', 'YOLOv8', 'YOLOv5', 'Transformers', 'PyTorch', 'TensorFlow',
    'Object Detection', 'Sentiment Analysis', 'Medical AI', 'Healthcare AI',
    'Sports Analytics', 'OCR', 'Speech Recognition', 'Embeddings', 'Vision Transformer'
  ],
  'Data Engineering': [
    'ETL', 'Apache Airflow', 'PostgreSQL', 'Docker', 'Big Data', 'Data Warehouse',
    'Business Intelligence', 'PowerBI', 'Data Engineering', 'Data Pipeline',
    'Databases', 'Data Manipulation', 'Data Management'
  ],
  'Data Analysis': [
    'Data Analysis', 'Data Visualization', 'Statistics', 'EDA', 'Statistical Analysis',
    'Matplotlib', 'Pandas', 'NumPy', 'Seaborn', 'SciPy', 'Predictive Analysis',
    'Mathematical Programming', 'Data Science'
  ],
  'Web Development': [
    'Golang', 'REST API', 'E-commerce', 'Web Application', 'Gradio', 'Streamlit',
    'FastAPI', 'GUI', 'HTML', 'CSS', 'React', 'TypeScript'
  ]
};

/**
 * Get category for a project based on its tags
 */
export function getProjectCategory(tags: string[]): string {
  for (const [category, categoryTags] of Object.entries(PROJECT_CATEGORIES)) {
    if (tags.some(tag => categoryTags.includes(tag))) {
      return category;
    }
  }
  return 'Other';
}

/**
 * Get all unique categories from projects
 */
export function getProjectCategories(projects: Project[]): string[] {
  const categories = new Set<string>();
  projects.forEach(project => {
    const category = getProjectCategory(project.tags);
    categories.add(category);
  });
  return Array.from(categories).sort();
}

/**
 * Filter projects by category
 */
export function filterProjectsByCategory(projects: Project[], category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter(project => getProjectCategory(project.tags) === category);
}