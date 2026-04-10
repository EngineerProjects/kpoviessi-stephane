export const personalInfo = {
  name: "Stéphane KPOVIESSI",
  title: "Ingénieur Big Data & Intelligence Artificielle",
  location: "Île-de-France, France (Cergy)",
  email: "oastephanekpoviessi@gmail.com",
  phone: "+33 7 48 59 47 13",
  linkedin: "https://linkedin.com/in/stephanekpoviessi",
  github: "https://github.com/Amiche02",
  githubOrg: "https://github.com/EngineerProjects",
};

export const about = {
  summary:
    "Ingénieur spécialisé en Big Data et Intelligence Artificielle, je conçois et développe des systèmes data et IA robustes, de la structuration des données jusqu'au déploiement en production.",
  detail:
    "Mon expertise repose sur la conception de pipelines data scalables, le développement de modèles intelligents et la création de systèmes capables d'automatiser des processus complexes. Je m'intéresse particulièrement aux architectures modernes combinant Data Engineering, Machine Learning et systèmes basés sur les LLMs et les agents intelligents.",
  expertise: [
    {
      title: "Data Engineering",
      description:
        "Conception de pipelines de données fiables, scalables et orientés métier, avec une forte maîtrise des architectures modernes (batch et distribuées).",
      icon: "database",
    },
    {
      title: "Data Science & Machine Learning",
      description:
        "Analyse avancée de données, modélisation prédictive et extraction d'insights pour la prise de décision.",
      icon: "chart",
    },
    {
      title: "IA & Systèmes Agentiques",
      description:
        "Conception d'agents intelligents, systèmes RAG et architectures basées sur les LLMs pour automatiser des workflows complexes.",
      icon: "brain",
    },
    {
      title: "Computer Vision",
      description:
        "Développement de solutions de vision par ordinateur pour la détection, l'analyse vidéo et la génération de contenu.",
      icon: "eye",
    },
  ],
};

export const skills = {
  programming: {
    label: "Programmation",
    items: [
      { name: "Python", level: "Expert" },
      { name: "R", level: "Avancé" },
      { name: "SQL", level: "Avancé" },
      { name: "Bash", level: "Avancé" },
      { name: "Golang", level: "Intermédiaire" },
      { name: "TypeScript", level: "Intermédiaire" },
      { name: "C", level: "Intermédiaire" },
      { name: "HTML / CSS", level: "Intermédiaire" },
      { name: "React", level: "Intermédiaire" },
    ],
  },
  ml_ai: {
    label: "Machine Learning & IA",
    items: [
      { name: "PyTorch", level: "Expert" },
      { name: "Scikit-learn", level: "Expert" },
      { name: "TensorFlow", level: "Avancé" },
      { name: "Computer Vision", level: "Avancé" },
      { name: "NLP / LLMs", level: "Avancé" },
      { name: "Transformers", level: "Avancé" },
      { name: "GANs", level: "Avancé" },
      { name: "Hugging Face", level: "Avancé" },
      { name: "LangChain", level: "Avancé" },
      { name: "Pydantic AI", level: "Avancé" },
      { name: "Ollama", level: "Avancé" },
      { name: "MCP", level: "Avancé" },
      { name: "Reinforcement Learning", level: "Intermédiaire" },
    ],
  },
  data_engineering: {
    label: "Data Engineering & Outils",
    items: [
      { name: "Pandas / NumPy", level: "Expert" },
      { name: "Docker", level: "Avancé" },
      { name: "PostgreSQL", level: "Avancé" },
      { name: "Streamlit", level: "Avancé" },
      { name: "PySpark", level: "Intermédiaire" },
      { name: "AWS", level: "Intermédiaire" },
      { name: "Azure", level: "Intermédiaire" },
      { name: "MongoDB", level: "Intermédiaire" },
      { name: "Power BI", level: "Intermédiaire" },
    ],
  },
};

export const experiences = [
  {
    role: "Data Scientist (Stage)",
    company: "Allianz France",
    location: "Paris, France",
    period: "Novembre 2025 – Avril 2026",
    summary:
      "Migration de bout en bout des pipelines du DataMart Construction (Assurance), depuis un environnement legacy SAS vers une architecture moderne basée sur PySpark.",
    highlights: [
      {
        category: "Architecture Data",
        points: [
          "Conception et implémentation d'une architecture Médaillon (Bronze / Silver / Gold) scalable",
          "Structuration des données de portefeuilles, capitaux et émissions",
        ],
      },
      {
        category: "Modernisation Legacy",
        points: [
          "Rétro-ingénierie et documentation de plus de 15 000 lignes de code SAS (19 fichiers)",
          "Préservation complète de la logique métier lors de la migration",
        ],
      },
      {
        category: "Développement ETL",
        points: [
          "Développement de pipelines PySpark modulaires et réutilisables (Python 3.9+)",
          "Couverture de 3 flux critiques intégrant plus de 150 règles métier",
        ],
      },
      {
        category: "Data Quality",
        points: [
          "Pipeline de contrôle qualité des données de localisation : validation GPS, reconstitution d'adresses, détection d'anomalies",
          "Refonte de la logique de validation d'adresse, réduisant les faux positifs",
        ],
      },
      {
        category: "Assurance Qualité",
        points: [
          "Validation automatique des schémas de données",
          "Tests de parité fonctionnelle stricts entre SAS et Python",
        ],
      },
    ],
    stack: ["Python", "PySpark", "SAS", "SQL", "Parquet", "Git", "Architecture Médaillon"],
    logo: "/images/allianz-france.png",
    featured: true,
  },
  {
    role: "Co-fondateur & CTO",
    company: "Hello Pulse",
    location: "France",
    period: "Septembre 2023 – Présent",
    summary:
      "Co-fondateur d'une plateforme collaborative augmentée par l'intelligence artificielle, combinant gestion de projet et assistance intelligente.",
    highlights: [
      {
        category: "Architecture & Backend",
        points: [
          "Conception d'une architecture backend scalable basée sur Golang, PostgreSQL et Docker",
        ],
      },
      {
        category: "IA & Multi-Agents",
        points: [
          "Développement de systèmes multi-agents pour l'automatisation et l'assistance",
          "Création d'un outil de validation produit basé sur l'IA",
          "Conception de systèmes permettant la génération automatisée de livrables",
        ],
      },
      {
        category: "Stratégie Technique",
        points: [
          "Définition et pilotage de la stratégie technique du MVP jusqu'à la production",
        ],
      },
    ],
    stack: ["Golang", "PostgreSQL", "Docker", "LLM", "Agents IA"],
    logo: "/images/hello_pulse.png",
    featured: true,
  },
  {
    role: "Ingénieur Machine Learning (Stage)",
    company: "Groupe Sylvagreg",
    location: "Lille, France",
    period: "Mai 2024 – Août 2024",
    summary:
      "Développement d'une solution de génération et d'impression 3D à partir d'images 2D basée sur l'intelligence artificielle.",
    highlights: [
      {
        category: "Recherche & Modélisation",
        points: [
          "Analyse approfondie des méthodes de reconstruction 3D (photogrammétrie, deep learning)",
          "Conception et optimisation de modèles GANs avec PyTorch",
          "Amélioration de la précision et de la cohérence des modèles 3D générés",
        ],
      },
      {
        category: "Pipeline & Traitement",
        points: [
          "Pipelines de prétraitement et d'augmentation de données avec PIL",
          "Pipeline complet : image 2D → modèle 3D exploitable pour l'impression 3D",
        ],
      },
      {
        category: "Documentation",
        points: [
          "Rédaction d'une documentation détaillée (architecture, choix techniques, résultats)",
        ],
      },
    ],
    stack: ["Python", "PyTorch", "PIL", "Computer Vision", "GANs", "Photogrammétrie"],
    logo: "/images/sylvagreg.png",
    featured: false,
  },
  {
    role: "Analyste de Données",
    company: "LYNE ET FRERES SARL",
    location: "Cotonou, Bénin",
    period: "Juin 2021 – Août 2022",
    summary:
      "Analyse des données commerciales et optimisation des performances business et logistiques.",
    highlights: [
      {
        category: "Analyse des ventes",
        points: [
          "Analyse des données de ventes et d'import/export",
          "Identification des produits, marchés et périodes les plus rentables",
          "Détection des tendances et comportements d'achat",
        ],
      },
      {
        category: "Supply Chain & Logistique",
        points: [
          "Analyse des flux logistiques (transport, expédition, transit)",
          "Optimisation des itinéraires, délais et coûts",
          "Simulation de scénarios logistiques",
        ],
      },
      {
        category: "Analyse client & Reporting",
        points: [
          "Segmentation et identification des clients à forte valeur",
          "Développement de tableaux de bord décisionnels",
          "Production de rapports analytiques",
        ],
      },
    ],
    stack: ["Analyse de données", "Power BI", "SQL", "Excel"],
    logo: "/images/onip-benin.png",
    featured: false,
  },
];

export const associativeExperiences = [
  {
    role: "Vice-Président",
    organization: "JUNIA Alumni",
    location: "Lille",
    period: "2024 – Présent",
    points: [
      "Coordination des activités de la commission",
      "Organisation et planification des événements",
      "Supervision des équipes communication et événementiel",
      "Gestion opérationnelle en collaboration avec le BDE",
    ],
  },
  {
    role: "Responsable Communication",
    organization: "JUNIA Alumni",
    location: "Lille",
    period: "2023 – 2024",
    points: [
      "Animation du réseau alumni",
      "Organisation d'événements (afterworks, rencontres)",
      "Coordination avec les anciens élèves pour le partage d'expérience",
      "Communication auprès des étudiants",
    ],
  },
];

export const projects = [
  {
    title: "Agents IA d'entreprise",
    context:
      "Les entreprises ont besoin d'automatiser des tâches complexes impliquant plusieurs étapes, outils et décisions humaines. Les LLM seuls restent limités sans orchestration et structuration des rôles.",
    solution:
      "Conception d'un système multi-agents où chaque agent possède un rôle spécifique (analyse, exécution, coordination). Mise en place d'un orchestrateur central permettant de coordonner les agents, gérer les échanges et structurer les workflows.",
    impact: [
      "Automatisation de workflows complexes",
      "Réduction des tâches manuelles",
      "Structuration des processus métier",
    ],
    stack: ["Python", "LLM", "Agents", "LangChain", "Pydantic AI"],
    link: "https://github.com/EngineerProjects/Enterprise-AI",
    featured: true,
    category: "AI Systems",
  },
  {
    title: "Système Chatbot RAG",
    context:
      "Les modèles LLM classiques sont limités par leur absence d'accès à des données actualisées ou spécifiques.",
    solution:
      "Développement d'un système RAG (Retrieval-Augmented Generation) combinant une base vectorielle pour la recherche sémantique, l'intégration de recherche web en temps réel et la génération de réponses contextualisées via LLM.",
    impact: [
      "Amélioration significative de la pertinence des réponses",
      "Capacité à traiter des requêtes dynamiques et contextualisées",
    ],
    stack: ["Python", "LLM", "RAG", "Vector Database", "FastAPI"],
    link: "https://github.com/Amiche02/ollama",
    featured: true,
    category: "AI Systems",
  },
  {
    title: "Solution BI & Data Pipeline",
    context:
      "Les données de vente et de supply chain sont souvent dispersées et difficilement exploitables pour la prise de décision.",
    solution:
      "Développement d'une solution BI complète incluant un pipeline ETL pour ingestion et transformation des données, la structuration des données dans un entrepôt et la création de dashboards pour le suivi des KPI.",
    impact: [
      "Meilleure visibilité sur les performances commerciales",
      "Optimisation de la supply chain",
      "Aide à la prise de décision stratégique",
    ],
    stack: ["Python", "Airflow", "PostgreSQL", "Docker", "Power BI"],
    link: "https://github.com/Amiche02/BI_Retail",
    featured: true,
    category: "Data Engineering",
  },
  {
    title: "Computer Vision — Analyse Vidéo",
    context:
      "L'analyse de performances dans le sport amateur est peu accessible en raison du manque d'outils automatisés.",
    solution:
      "Développement d'un système de vision par ordinateur pour analyser des vidéos de matchs et extraire des informations pertinentes : détection d'objets (joueurs, ballon), analyse des mouvements et extraction de données exploitables.",
    impact: [
      "Automatisation de l'analyse vidéo",
      "Accessibilité à des insights pour le sport amateur",
    ],
    stack: ["Python", "OpenCV", "YOLO", "Computer Vision"],
    link: "https://github.com/Amiche02/Grassroot_football_video_analysis",
    featured: true,
    category: "Computer Vision",
  },
];

export const education = [
  {
    degree: "Diplôme d'Ingénieur",
    school: "JUNIA — Ecole d'Ingénieurs",
    specialization: "Big Data & Intelligence Artificielle",
    period: "2022 – 2025",
    link: "https://www.junia.com",
  },
  {
    degree: "Classes Préparatoires",
    school: "Classes Préparatoires aux Grandes Écoles",
    specialization: "Mathématiques, Physique, Sciences de l'Ingénieur",
    period: "2020 – 2022",
  },
  {
    degree: "Baccalauréat",
    school: "Baccalauréat Scientifique",
    specialization: "Série C — Mathématiques & Physique",
    period: "2020",
  },
];

export const certifications = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    name: "Data Engineering — Formation complémentaire",
    issuer: "Auto-formation & Projets",
  },
];

export const languages = [
  { name: "Français", level: "Natif" },
  { name: "Yoruba", level: "Natif" },
  { name: "Fon", level: "Natif" },
  { name: "Goun", level: "Natif" },
  { name: "Anglais", level: "B2 – Usage professionnel" },
];

export const interests = [
  "Intelligence artificielle & recherche",
  "Entrepreneuriat",
  "Open source",
  "Jeux de stratégie",
  "Musique (batterie)",
  "Construction de communautés",
];
