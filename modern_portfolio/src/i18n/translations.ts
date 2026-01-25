// Type definitions for translation structure
export type TranslationStructure = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    getInTouch: string;
    viewProjects: string;
    resume: string;
    projects: string;
    yearsExperience: string;
  };
  about: {
    title: string;
    journey: string;
    education: string;
    experience: string;
    currentFocus: string;
    outsideWork: string;
  };
  skills: {
    title: string;
    subtitle: string;
    allSkills: string;
    skillsByCategory: string;
    categories: {
      "machine-learning": string;
      "programming": string;
      "data-engineering": string;
      "documentation": string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    allProjects: string;
    learnMore: string;
    showLess: string;
    noProjects: string;
    tryDifferent: string;
    viewAll: string;
  };
  experience: {
    title: string;
    subtitle: string;
    workExperience: string;
    education: string;
    certifications: string;
    issued: string;
    present: string;
    more: string;
    viewCertificate: string;
  };
  contact: {
    title: string;
    subtitle: string;
    headerTitle: string;
    headerSubtitle: string;
    contactInfo: string;
    email: string;
    phone: string;
    location: string;
    connectWithMe: string;
    sendMessage: string;
    name: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    bio: string;
    quickLinks: string;
    contactInfo: string;
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    rightsReserved: string;
  };
};

export const translations: Record<string, TranslationStructure> = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      title: "Big Data Engineer",
      getInTouch: "Get In Touch",
      viewProjects: "View Projects",
      resume: "Resume",
      projects: "Projects",
      yearsExperience: "Academic Years"
    },
    // About Page
    about: {
      title: "About Me",
      journey: "My Journey",
      education: "Education",
      experience: "Professional Experience",
      currentFocus: "Current Focus",
      outsideWork: "Outside of Work"
    },
    // Skills Page
    skills: {
      title: "My Skills",
      subtitle: "A comprehensive overview of my technical expertise and capabilities",
      allSkills: "All Skills",
      skillsByCategory: "Skills by Category",
      categories: {
        "machine-learning": "Machine Learning",
        "programming": "Programming",
        "data-engineering": "Data Engineering",
        "documentation": "Documentation"
      }
    },
    // Projects Page
    projects: {
      title: "My Projects",
      subtitle: "Explore my portfolio of machine learning and AI projects, showcasing practical applications and technical expertise",
      allProjects: "All Projects",
      learnMore: "Learn More",
      showLess: "Show Less",
      noProjects: "No projects found with the selected tag.",
      tryDifferent: "Try selecting a different tag or view all projects.",
      viewAll: "View All Projects"
    },
    // Experience Page
    experience: {
      title: "My Experience",
      subtitle: "A comprehensive overview of my professional journey and educational background",
      workExperience: "Work Experience",
      education: "Education",
      certifications: "Certifications",
      issued: "Issued:",
      present: "Present",
      more: "more",
      viewCertificate: "View Certificate"
    },
    // Contact Page
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss how we can work together",
      headerTitle: "Get In Touch", 
      headerSubtitle: "Let's discuss your project or job opportunity. Fill out the form below, and I'll get back to you as soon as possible.",
      contactInfo: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      connectWithMe: "Connect With Me",
      sendMessage: "Send a Message",
      name: "Name",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again."
    },
    // Footer
    footer: {
      bio: "Big Data Engineer and AI enthusiast. Currently seeking a 6-month final-year internship to apply my skills in machine learning and data science.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      home: "Home",
      about: "About",
      skills: "Skills", 
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      rightsReserved: "All Rights Reserved"
    }
  },
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences", 
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      greeting: "Bonjour, je suis",
      title: "Ingénieur Big Data",
      getInTouch: "Me Contacter",
      viewProjects: "Voir Projets",
      resume: "CV",
      projects: "Projets",
      yearsExperience: "Années Académiques"
    },
    // About Page
    about: {
      title: "À Propos de Moi",
      journey: "Mon Parcours",
      education: "Formation",
      experience: "Expérience Professionnelle",
      currentFocus: "Focus Actuel",
      outsideWork: "En Dehors du Travail"
    },
    // Skills Page
    skills: {
      title: "Mes Compétences",
      subtitle: "Un aperçu complet de mon expertise technique et de mes capacités",
      allSkills: "Toutes les Compétences",
      skillsByCategory: "Compétences par Catégorie",
      categories: {
        "machine-learning": "Apprentissage Automatique",
        "programming": "Programmation",
        "data-engineering": "Ingénierie des Données",
        "documentation": "Documentation"
      }
    },
    // Projects Page
    projects: {
      title: "Mes Projets",
      subtitle: "Explorez mon portfolio de projets d'apprentissage automatique et d'IA, démontrant des applications pratiques et une expertise technique",
      allProjects: "Tous les Projets",
      learnMore: "En Savoir Plus",
      showLess: "Voir Moins",
      noProjects: "Aucun projet trouvé avec l'étiquette sélectionnée.",
      tryDifferent: "Essayez de sélectionner une étiquette différente ou voir tous les projets.",
      viewAll: "Voir Tous les Projets"
    },
    // Experience Page
    experience: {
      title: "Mon Expérience",
      subtitle: "Un aperçu complet de mon parcours professionnel et de ma formation",
      workExperience: "Expérience Professionnelle",
      education: "Formation",
      certifications: "Certifications",
      issued: "Émis:",
      present: "Présent",
      more: "de plus",
      viewCertificate: "Voir le Certificat"
    },
    // Contact Page
    contact: {
      title: "Me Contacter",
      subtitle: "Discutons de la façon dont nous pouvons travailler ensemble",
      headerTitle: "Me Contacter",
      headerSubtitle: "Discutons de votre projet ou opportunité d'emploi. Remplissez le formulaire ci-dessous, et je vous répondrai dès que possible.",
      contactInfo: "Informations de Contact",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      connectWithMe: "Connectez-vous avec Moi",
      sendMessage: "Envoyer un Message",
      name: "Nom",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le Message",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès!",
      error: "Échec de l'envoi du message. Veuillez réessayer."
    },
    // Footer
    footer: {
      bio: "Ingénieur Big Data et passionné d'IA. Actuellement à la recherche d'un stage de fin d'études de 6 mois pour appliquer mes compétences en apprentissage automatique et science des données.",
      quickLinks: "Liens Rapides",
      contactInfo: "Informations de Contact",
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets", 
      experience: "Expérience",
      contact: "Contact",
      rightsReserved: "Tous Droits Réservés"
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof TranslationStructure;

// Helper type for nested key paths (e.g., "nav.home", "hero.greeting")
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationKeyPath = NestedKeyOf<TranslationStructure>;
