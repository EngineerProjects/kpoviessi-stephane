import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    title: {
      en: "Data Scientist - Intern",
      fr: "Data Scientist - Stagiaire"
    },
    company: "Allianz France",
    location: {
      en: "Paris, Île-de-France, France",
      fr: "Paris, Île-de-France, France"
    },
    startDate: "Nov 2025",
    endDate: "Present",
    description: {
      en: [
        "Led the end-to-end migration of the \"Construction Data Mart\" pipelines from legacy SAS to a modern PySpark architecture",
        "Designed and implemented a scalable Medallion Architecture (Bronze/Silver/Gold) to process insurance data (Portfolios, Capitals, Issuances)",
        "Reverse-engineered and documented over 15,000 lines of legacy SAS code across 19 complex files to ensure zero loss of business logic during migration",
        "Developed modular and reusable PySpark processors (Python 3.9+) for 3 critical data pipelines, handling complex transformations and business rules",
        "Established a rigorous testing strategy, including functional parity testing between SAS and Python outputs and automated schema validation",
        "Cataloged 150+ business rules and 45 datasets to create a comprehensive data dictionary and mapping strategy"
      ],
      fr: [
        "Pilotage de la migration de bout en bout des pipelines du \"Construction Data Mart\" de SAS vers une architecture PySpark moderne",
        "Conception et mise en œuvre d'une architecture Medallion évolutive (Bronze/Silver/Gold) pour le traitement des données d'assurance (Portefeuilles, Capitaux, Émissions)",
        "Rétro-ingénierie et documentation de plus de 15 000 lignes de code SAS existant à travers 19 fichiers complexes pour garantir aucune perte de logique métier",
        "Développement de processeurs PySpark modulaires et réutilisables (Python 3.9+) pour 3 pipelines de données critiques, gérant des transformations complexes",
        "Mise en place d'une stratégie de test rigoureuse, incluant des tests de parité fonctionnelle entre les sorties SAS et Python et la validation automatisée des schémas",
        "Catalogage de plus de 150 règles métier et 45 ensembles de données pour créer un dictionnaire de données complet et une stratégie de mapping"
      ]
    },
    skills: ["Python", "PySpark", "SAS", "SQL", "Parquet", "Git", "Medallion Architecture"]
  },
  {
    title: {
      en: "Machine Learning Engineer - Intern",
      fr: "Ingénieur Machine Learning - Stagiaire"
    },
    company: "Groupe Sylvagreg",
    location: {
      en: "Lille, Hauts-de-France, France",
      fr: "Lille, Hauts-de-France, France"
    },
    startDate: "May 2024",
    endDate: "August 2024",
    description: {
      en: [
        "Developed advanced deep learning algorithms (GANs) for generating 3D models from 2D images and enabling 360° object views from single images",
        "Designed and optimized image processing pipeline combining 3D photogrammetry techniques with neural networks",
        "Implemented cloud solution for massive data processing and deployed application with user interface",
        "Conducted state-of-the-art research on existing 3D modeling solutions from 2D images",
        "Documented comprehensive technical findings and wrote detailed research reports"
      ],
      fr: [
        "Développement d'algorithmes d'apprentissage profond avancés (GANs) pour générer des modèles 3D à partir d'images 2D et permettre des vues d'objet à 360° à partir d'images uniques",
        "Conception et optimisation d'un pipeline de traitement d'images combinant des techniques de photogrammétrie 3D avec des réseaux de neurones",
        "Implémentation d'une solution cloud pour le traitement de données massives et déploiement d'une application avec interface utilisateur",
        "Recherche de pointe sur les solutions existantes de modélisation 3D à partir d'images 2D",
        "Documentation complète des résultats techniques et rédaction de rapports de recherche détaillés"
      ]
    },
    skills: ["PyTorch", "GANs", "Computer Vision", "3D Modeling", "AWS", "Streamlit", "Docker", "Deep Learning"]
  },
  {
    title: {
      en: "Commercial Data Analyst - Intern",
      fr: "Analyste de Données Commerciales - Stagiaire"
    },
    company: "LYNE ET FRERES SARL",
    location: {
      en: "Cotonou, Benin",
      fr: "Cotonou, Bénin"
    },
    startDate: "June 2022",
    endDate: "August 2022",
    description: {
      en: [
        "Analyzed sales and import/export data to identify trends and commercial opportunities",
        "Created interactive dashboards for KPI visualization and decision-making support",
        "Processed historical sales, delivery, and order data by product, customer, and country",
        "Identified most profitable products, markets, and seasonal patterns",
        "Optimized inventory and supply chain management through data-driven insights",
        "Developed comprehensive reporting system for activity monitoring"
      ],
      fr: [
        "Analyse des données de ventes et d'import/export pour identifier les tendances et opportunités commerciales",
        "Création de tableaux de bord interactifs pour la visualisation des KPI et le support à la prise de décision",
        "Traitement des données historiques de ventes, livraisons et commandes par produit, client et pays",
        "Identification des produits, marchés et patterns saisonniers les plus rentables",
        "Optimisation de la gestion des stocks et de la chaîne d'approvisionnement grâce aux insights basés sur les données",
        "Développement d'un système de reporting complet pour le suivi d'activité"
      ]
    },
    skills: ["Data Analysis", "Business Intelligence", "Python", "Pandas", "Matplotlib", "SQL", "Dashboard Development"]
  },
  {
    title: {
      en: "Information Systems Management and Computer Maintenance",
      fr: "Gestion des Systèmes d'Information et Maintenance Informatique"
    },
    company: "Office National d'Imprimerie et de Presse (ONIP)",
    location: {
      en: "Benin",
      fr: "Bénin"
    },
    startDate: "June 2021",
    endDate: "July 2021",
    description: {
      en: [
        "Worked in the Information Systems, Procurement, and Logistics Audit Office",
        "Actively contributed to information systems management and computer maintenance",
        "Worked on image processing and participated in the management of the ONIP website",
        "Gained practical experience in crimping RJ45 network cables, antivirus management, and computer equipment maintenance"
      ],
      fr: [
        "Travail au Bureau d'Audit des Systèmes d'Information, des Achats et de la Logistique",
        "Contribution active à la gestion des systèmes d'information et à la maintenance informatique",
        "Travail sur le traitement d'images et participation à la gestion du site web de l'ONIP",
        "Acquisition d'une expérience pratique en sertissage de câbles réseau RJ45, gestion d'antivirus et maintenance d'équipements informatiques"
      ]
    },
    skills: ["Computer Maintenance", "Web Content Management", "Social Media Management", "Professional Communication", "Relationship Management", "Troubleshooting", "Team Collaboration"]
  }
];