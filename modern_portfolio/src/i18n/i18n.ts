import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
const resources = {
  en: {
    translation: {
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
        associations: "Associations & Leadership",
        currentFocus: "Current Focus",
        outsideWork: "Outside of Work",
        hobbies: "Hobbies & Interests"
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
        categories: "Categories",
        learnMore: "Learn More",
        showLess: "Show Less",
        noProjects: "No projects found with the selected category.",
        tryDifferent: "Try selecting a different category or view all projects.",
        viewAll: "View All Projects",
        preview: "Preview",
        viewCode: "View Code",
        download: "Download"
      },
      // Experience Page
      experience: {
        title: "My Experience",
        subtitle: "A comprehensive overview of my professional journey and educational background",
        workExperience: "Work Experience",
        education: "Education",
        certifications: "Certifications",
        associations: "Associations",
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
    }
  },
  fr: {
    translation: {
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
        viewProjects: "Voir les Projets",
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
        associations: "Associations et Leadership",
        currentFocus: "Focus Actuel",
        outsideWork: "En Dehors du Travail",
        hobbies: "Loisirs et Centres d'Intérêt"
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
        subtitle: "Découvrez mon portfolio de projets d'apprentissage automatique et d'IA, illustrant des applications pratiques et une expertise technique",
        allProjects: "Tous les Projets",
        categories: "Catégories",
        learnMore: "En Savoir Plus",
        showLess: "Voir Moins",
        noProjects: "Aucun projet trouvé avec la catégorie sélectionnée.",
        tryDifferent: "Essayez de sélectionner une catégorie différente ou consultez tous les projets.",
        viewAll: "Voir Tous les Projets",
        preview: "Aperçu",
        viewCode: "Voir le Code",
        download: "Télécharger"
      },
      // Experience Page
      experience: {
        title: "Mon Expérience",
        subtitle: "Un aperçu complet de mon parcours professionnel et de ma formation académique",
        workExperience: "Expérience Professionnelle",
        education: "Formation",
        certifications: "Certifications",
        associations: "Associations",
        issued: "Émis :",
        present: "Présent",
        more: "de plus",
        viewCertificate: "Voir le Certificat"
      },
      // Contact Page
      contact: {
        title: "Me Contacter",
        subtitle: "Discutons de la façon dont nous pouvons collaborer",
        headerTitle: "Me Contacter",
        headerSubtitle: "Discutons de votre projet ou opportunité d'emploi. Remplissez le formulaire ci-dessous, et je vous répondrai dans les plus brefs délais.",
        contactInfo: "Informations de Contact",
        email: "E-mail",
        phone: "Téléphone",
        location: "Localisation",
        connectWithMe: "Connectez-vous avec Moi",
        sendMessage: "Envoyer un Message",
        name: "Nom",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès !",
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
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false // React already escapes by default
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;