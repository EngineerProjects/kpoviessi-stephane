export const personalInfo = {
  name: "Stéphane KPOVIESSI",
  title: "Data Engineer / Data Scientist - Big Data & IA",
  location: "Île-de-France, France (Cergy)",
  email: "oastephanekpoviessi@gmail.com",
  phone: "+33 7 48 59 47 13",
  linkedin: "https://linkedin.com/in/stephanekpoviessi",
  github: "https://github.com/Amiche02",
  githubOrg: "https://github.com/EngineerProjects",
};

export const resumeLinks = [
  {
    label: "CV Data Engineer",
    href: "/cv-stephane-kpoviessi-data-engineer.pdf",
  },
  {
    label: "CV Data Scientist",
    href: "/cv-stephane-kpoviessi-data-scientist.pdf",
  },
];

export const about = {
  summary:
    "Data Engineer / Data Scientist spécialisé en Big Data, Intelligence Artificielle et systèmes de données à grande échelle, je conçois des pipelines fiables, des modèles intelligents et des architectures capables de transformer la donnée brute en décisions exploitables.",
  detail:
    "Mon parcours combine data engineering, machine learning, computer vision et conception de systèmes IA. J'ai travaillé sur la migration de pipelines legacy SAS vers PySpark chez Allianz France, sur la génération 3D assistée par IA au Groupe Sylvagreg, ainsi que sur des plateformes multi-agents, RAG et outils développeurs orientés LLM.",
  expertise: [
    {
      title: "Data Engineering",
      description:
        "Conception de pipelines de données robustes, architectures Médaillon, traitement distribué, qualité de données et migration de systèmes legacy vers des stacks modernes.",
      icon: "database",
    },
    {
      title: "Data Science & Machine Learning",
      description:
        "Analyse exploratoire, modélisation prédictive, forecasting, feature engineering, visualisation et mise en place de pipelines ML complets.",
      icon: "chart",
    },
    {
      title: "IA & Systèmes Agentiques",
      description:
        "Conception de plateformes multi-agents, systèmes RAG, orchestration LangGraph, intégration MCP, mémoire persistante et workflows IA automatisés.",
      icon: "brain",
    },
    {
      title: "Computer Vision & 3D",
      description:
        "Développement de solutions de vision par ordinateur, segmentation, analyse vidéo sportive, génération 3D et simulation d'environnements procéduraux.",
      icon: "eye",
    },
  ],
};

export const skills = {
  programming: {
    label: "Programmation",
    items: [
      { name: "Python", level: "Expert" },
      { name: "SQL", level: "Avancé" },
      { name: "Go", level: "Avancé" },
      { name: "TypeScript", level: "Avancé" },
      { name: "C", level: "Intermédiaire" },
      { name: "Bash", level: "Intermédiaire" },
      { name: "React", level: "Intermédiaire" },
      { name: "Electron", level: "Intermédiaire" },
    ],
  },
  ml_ai: {
    label: "Machine Learning & IA",
    items: [
      { name: "PyTorch", level: "Expert" },
      { name: "Scikit-learn", level: "Expert" },
      { name: "LangGraph", level: "Avancé" },
      { name: "RAG", level: "Avancé" },
      { name: "LLM Workflows", level: "Avancé" },
      { name: "Computer Vision", level: "Avancé" },
      { name: "GANs", level: "Avancé" },
      { name: "MCP", level: "Avancé" },
      { name: "Hugging Face", level: "Avancé" },
      { name: "TensorFlow", level: "Intermédiaire" },
      { name: "Forecasting", level: "Intermédiaire" },
    ],
  },
  data_engineering: {
    label: "Data Engineering & Outils",
    items: [
      { name: "PySpark", level: "Expert" },
      { name: "Pandas / NumPy", level: "Expert" },
      { name: "PostgreSQL", level: "Avancé" },
      { name: "pgvector", level: "Avancé" },
      { name: "Docker", level: "Avancé" },
      { name: "Databricks", level: "Avancé" },
      { name: "Azure Data Lake", level: "Avancé" },
      { name: "Parquet", level: "Avancé" },
      { name: "Power BI", level: "Avancé" },
      { name: "Redis", level: "Intermédiaire" },
      { name: "SQLite", level: "Intermédiaire" },
      { name: "SAS", level: "Intermédiaire" },
    ],
  },
};

export const experiences = [
  {
    role: "Data Engineer / Data Scientist (Stage)",
    company: "Allianz France",
    location: "Courbevoie, France",
    period: "Novembre 2025 - Avril 2026",
    summary:
      "Responsible for the end-to-end migration of DataMart data pipelines (Insurance), transitioning from a legacy SAS environment to a modern PySpark-based architecture.",
    highlights: [
      {
        category: "Architecture Data",
        points: [
          "Conception et implémentation d'une architecture Médaillon Bronze / Silver / Gold scalable",
          "Architecture permettant de structurer efficacement les données liées aux portefeuilles, capitaux et émissions",
        ],
      },
      {
        category: "Modernisation Legacy",
        points: [
          "Rétro-ingénierie et documentation de plus de 15 000 lignes de code SAS sur 19 fichiers complexes",
          "Préservation complète de la logique métier pendant la migration vers Python et PySpark",
        ],
      },
      {
        category: "Développement ETL",
        points: [
          "Conception de pipelines PySpark modulaires et réutilisables en Python 3.9+",
          "Couverture de 3 flux critiques intégrant plus de 150 règles de gestion métier",
        ],
      },
      {
        category: "Data Quality",
        points: [
          "Pipeline de contrôle qualité sur les données de localisation : GPS, reconstitution d'adresses et détection d'anomalies métier",
          "Refonte de la logique de validation d'adresse pour réduire les faux positifs et fiabiliser le reporting métier",
        ],
      },
      {
        category: "Assurance Qualité",
        points: [
          "Mise en place d'une stratégie de validation rigoureuse",
          "Validation automatique des schémas de données",
          "Tests de parité fonctionnelle stricts entre SAS et Python",
        ],
      },
    ],
    stack: ["Python", "PySpark", "SAS", "SQL", "Parquet", "Databricks", "Azure Data Lake", "Git"],
    logo: "/images/allianz-france.png",
    featured: true,
  },
  {
    role: "Co-fondateur & CTO",
    company: "Hello Pulse",
    location: "France",
    period: "Septembre 2023 - Présent",
    summary:
      "Co-fondateur d'une plateforme collaborative augmentée par l'intelligence artificielle, combinant gestion de projet, assistance intelligente et génération de livrables.",
    highlights: [
      {
        category: "Architecture & Backend",
        points: [
          "Conception d'une architecture backend scalable basée sur Go, PostgreSQL et Docker",
          "Pilotage technique du MVP jusqu'aux premières briques de production",
        ],
      },
      {
        category: "IA & Multi-Agents",
        points: [
          "Développement de systèmes multi-agents pour l'automatisation et l'assistance",
          "Création d'outils de validation produit et de génération automatisée de livrables",
        ],
      },
      {
        category: "Stratégie Technique",
        points: [
          "Définition de la stratégie technique, choix d'architecture et priorisation produit",
        ],
      },
    ],
    stack: ["Go", "PostgreSQL", "Docker", "LLM", "Agents IA", "Product Engineering"],
    logo: "/images/hello_pulse.png",
    featured: true,
  },
  {
    role: "Ingénieur Machine Learning (Stage)",
    company: "Groupe Sylvagreg",
    location: "Lille, France",
    period: "Mai 2024 - Août 2024",
    summary:
      "Développement d'une solution de génération et d'impression 3D à partir d'images 2D basée sur l'intelligence artificielle.",
    highlights: [
      {
        category: "Recherche & État de l'art",
        points: [
          "Analyse des méthodes de reconstruction 3D à partir d'images 2D, incluant photogrammétrie et deep learning",
        ],
      },
      {
        category: "Sélection et évaluation des modèles",
        points: [
          "Identification et benchmark d'algorithmes d'intelligence artificielle adaptés à la génération de modèles 3D fiables à partir de données visuelles",
        ],
      },
      {
        category: "Modélisation IA",
        points: [
          "Conception, implémentation et optimisation de modèles de deep learning, notamment GANs, avec PyTorch",
          "Amélioration de la précision, de la cohérence géométrique et de la robustesse des modèles générés",
        ],
      },
      {
        category: "Pipeline & Produit",
        points: [
          "Pipelines de prétraitement et d'augmentation de données avec PIL et outils de computer vision",
          "Pipeline complet allant de l'image 2D au modèle 3D exploitable pour l'impression",
          "Développement d'une solution permettant de transformer des images, objets ou personnages en modèles 3D imprimables",
        ],
      },
      {
        category: "Documentation",
        points: [
          "Rédaction d'une documentation détaillée couvrant architecture, choix techniques et résultats obtenus",
        ],
      },
    ],
    stack: ["Python", "PyTorch", "PIL", "Computer Vision", "GANs", "Modélisation 3D", "Photogrammétrie"],
    logo: "/images/sylvagreg.png",
    featured: false,
  },
  {
    role: "Analyste de Données Commerciales (Stage)",
    company: "LYNE ET FRERES SARL",
    location: "Bénin",
    period: "Juin 2022 - Août 2022",
    summary:
      "Analyse de données commerciales, import/export, supply chain et reporting pour optimiser les ventes, les stocks et les opérations logistiques.",
    highlights: [
      {
        category: "Analyse des données de ventes et d'import/export",
        points: [
          "Collecter et analyser les données historiques de ventes, de livraisons et de commandes par produit, client, pays, etc.",
          "Identification des produits, marchés et périodes les plus rentables",
          "Détection des tendances et comportements d'achat",
          "Optimiser la gestion des stocks et des approvisionnements",
        ],
      },
      {
        category: "Analyse de la chaîne d'approvisionnement",
        points: [
          "Traiter les données liées au transport, à l'expédition et au transit des marchandises",
          "Optimisation des itinéraires, délais et coûts logistiques",
          "Simulation de scénarios logistiques",
        ],
      },
      {
        category: "Exploration des données clients",
        points: [
          "Consolider les données clients dans un fichier analytique",
          "Segmenter la base de clients et identifier les meilleurs clients",
          "Recommander des offres et produits pertinents",
        ],
      },
      {
        category: "Reporting et visualisation",
        points: [
          "Développer des tableaux de bord pour le suivi des activités",
          "Générer des rapports analytiques ad hoc à la demande",
        ],
      },
    ],
    stack: ["Data Analysis", "Power BI", "Python", "Excel", "Reporting"],
    logo: "/images/onip-benin.png",
    featured: false,
  },
];

export const associativeExperiences = [
  {
    role: "Vice-Président",
    organization: "JUNIA Alumni",
    location: "Lille",
    period: "2024 - Présent",
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
    period: "2023 - 2024",
    points: [
      "Animation du réseau alumni",
      "Organisation d'événements et rencontres professionnelles",
      "Coordination avec les anciens élèves pour le partage d'expérience",
      "Communication auprès des étudiants",
    ],
  },
];

export const projects = [
  {
    title: "Nexus AI",
    context:
      "Les assistants IA évoluent vers des environnements capables d'orchestrer des outils, des agents, une mémoire persistante et des workflows complexes.",
    solution:
      "Développement d'un AI Operating System expérimental avec orchestration multi-agents, RAG, sessions persistantes, permissions, sandboxing, streaming SSE, API REST, gRPC et interface desktop Electron.",
    impact: [
      "Plateforme modulaire pour agents autonomes",
      "Architecture extensible basée sur skills et plugins",
      "Base d'infrastructure IA desktop et backend distribuée",
    ],
    stack: ["Go", "gRPC", "PostgreSQL", "SQLite", "GORM", "React", "Electron", "TypeScript", "RAG", "MCP"],
    link: "https://github.com/EngineerProjects/Nexus_ai",
    featured: true,
    category: "AI Systems",
  },
  {
    title: "Tech Watch Agent",
    context:
      "La veille technologique demande de surveiller de nombreuses sources, d'analyser rapidement les signaux utiles et de produire des synthèses exploitables.",
    solution:
      "Plateforme autonome de recherche et monitoring multi-agents avec analyse GitHub, Reddit, arXiv et YouTube, génération de rapports, pipelines RAG, notifications et sessions persistantes.",
    impact: [
      "Automatisation de workflows de veille et de synthèse",
      "Analyse multi-sources structurée",
      "Rapports exploitables pour la décision technique",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "Redis", "Docker", "React", "TypeScript", "SearXNG"],
    link: "https://github.com/EngineerProjects/tech-watch-agent",
    featured: true,
    category: "AI Systems",
  },
  {
    title: "Sylva3D",
    context:
      "La création d'environnements naturels 3D nécessite des moteurs capables de générer des scènes procédurales et de simuler des écosystèmes en temps réel.",
    solution:
      "Développement d'un moteur 3D expérimental pour génération procédurale, simulation environnementale, gestion de scènes, visualisation temps réel et systèmes de rendu.",
    impact: [
      "Exploration de pipelines de rendu 3D",
      "Simulation procédurale d'environnements",
      "Base technique pour outils créatifs et scientifiques",
    ],
    stack: ["Python", "OpenGL", "Rendering 3D", "Mathématiques 3D", "Simulation procédurale"],
    link: "https://github.com/EngineerProjects/sylva3D",
    featured: true,
    category: "3D Systems",
  },
  {
    title: "Sylva3D GUI",
    context:
      "Les systèmes de simulation 3D ont besoin d'interfaces desktop efficaces pour visualiser, contrôler et itérer sur les scènes.",
    solution:
      "Création d'une interface desktop moderne pour l'écosystème Sylva3D, orientée visualisation temps réel, contrôle de scènes 3D et tooling créatif.",
    impact: [
      "Expérience utilisateur dédiée aux simulations 3D",
      "Contrôle interactif des scènes",
      "Interface de travail pour systèmes de visualisation",
    ],
    stack: ["Python", "GUI Frameworks", "3D Visualization", "Desktop Engineering"],
    link: "https://github.com/EngineerProjects/Sylva3dGUI",
    featured: false,
    category: "3D Systems",
  },
  {
    title: "PulseStudio",
    context:
      "Les workflows créatifs peuvent être enrichis par des outils IA interactifs capables d'automatiser certaines étapes de production multimédia.",
    solution:
      "Plateforme expérimentale de création assistée par IA combinant workflows créatifs, interaction utilisateur moderne, traitement multimédia et interfaces interactives.",
    impact: [
      "Exploration d'architectures produit IA",
      "Automatisation de workflows créatifs",
      "Prototype d'outils interactifs pour médias",
    ],
    stack: ["Python", "AI Workflows", "Interactive Systems", "Creative Tooling"],
    link: "https://github.com/EngineerProjects/PulseStudio",
    featured: false,
    category: "AI Product",
  },
  {
    title: "Advanced Football Video Analysis",
    context:
      "L'analyse vidéo sportive manuelle est coûteuse et difficile à rendre accessible pour extraire des informations sur les joueurs, mouvements et événements de jeu.",
    solution:
      "Système de computer vision pour analyser automatiquement des séquences de football avec détection d'objets, tracking vidéo, analyse de mouvements et traitement vidéo.",
    impact: [
      "Automatisation de l'analyse vidéo sportive",
      "Extraction d'insights exploitables depuis des matchs",
      "Application concrète de l'IA au sport",
    ],
    stack: ["Python", "OpenCV", "Computer Vision", "Deep Learning", "Video Processing"],
    link: "https://github.com/EngineerProjects/Advanced-Football-Video-Analysis",
    featured: true,
    category: "Computer Vision",
  },
  {
    title: "Solar Irradiance Forecasting",
    context:
      "La gestion photovoltaïque dépend de prévisions fiables de l'irradiance solaire à partir de données météorologiques.",
    solution:
      "Pipeline de machine learning pour prévision énergétique, feature engineering, analyse de données météorologiques et modélisation prédictive.",
    impact: [
      "Amélioration des prévisions énergétiques",
      "Support à la gestion photovoltaïque",
      "Application ML aux énergies renouvelables",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Forecasting Models"],
    link: "https://github.com/EngineerProjects/solar-forecasting",
    featured: true,
    category: "Data Science",
  },
  {
    title: "LocalIngest",
    context:
      "Les workflows LLM et RAG nécessitent de préparer rapidement une codebase locale sous forme structurée et exploitable.",
    solution:
      "Outil développeur CLI/TUI pour analyser automatiquement des repositories, extraire leur structure et générer des rapports Markdown optimisés pour les workflows IA.",
    impact: [
      "Accélération de l'analyse de codebases",
      "Préparation de contexte pour LLM et RAG",
      "Documentation technique automatisée",
    ],
    stack: ["Python", "CLI/TUI", "Rich", "Typer", "Markdown Generation"],
    link: "https://github.com/EngineerProjects/LocalIngest",
    featured: false,
    category: "Developer Tooling",
  },
  {
    title: "Shop App Service",
    context:
      "Les applications e-commerce ont besoin de services backend modulaires, transactionnels et orientés métier.",
    solution:
      "Développement d'un service backend e-commerce mettant l'accent sur les APIs, la modularité, la gestion métier et l'architecture orientée services.",
    impact: [
      "Architecture backend modulaire",
      "Gestion de logique transactionnelle",
      "Base de services pour application e-commerce",
    ],
    stack: ["Python", "Backend APIs", "Databases", "Service Architecture"],
    link: "https://github.com/EngineerProjects/Shop-app-service",
    featured: false,
    category: "Backend",
  },
  {
    title: "SAM Background Remover",
    context:
      "La suppression de fond automatisée bénéficie des modèles modernes de segmentation d'images pour accélérer les workflows de traitement visuel.",
    solution:
      "Outil basé sur des modèles de segmentation permettant de supprimer automatiquement les arrière-plans à partir de techniques avancées de computer vision.",
    impact: [
      "Automatisation du détourage d'images",
      "Application pratique de la segmentation IA",
      "Tooling visuel pour workflows créatifs",
    ],
    stack: ["Python", "Computer Vision", "Image Segmentation", "Deep Learning"],
    link: "https://github.com/EngineerProjects/sam_background_remover",
    featured: false,
    category: "Computer Vision",
  },
];

export const education = [
  {
    degree: "Diplôme d'Ingénieur",
    school: "JUNIA ISEN Lille",
    level: "Master's Degree",
    specialization: "Big Data & Data Science",
    period: "2023 - 2026",
    description:
      "Formation d'ingénieur spécialisée en Big Data et Intelligence Artificielle, axée sur l'analyse de données, le machine learning et l'ingénierie des systèmes de données à grande échelle.",
    courses: [
      "Data Engineering : traitement et gestion de données massives, pipelines de données",
      "Data Science : analyse exploratoire (EDA), modélisation statistique, analyse prédictive",
      "Intelligence Artificielle : réseaux de neurones, apprentissage supervisé et non supervisé",
      "Bases de données : SQL et NoSQL, modélisation et gestion des données",
      "Mathématiques appliquées : probabilités, statistiques, recherche opérationnelle, optimisation",
      "Visualisation de données : création de dashboards et d'outils d'aide à la décision (Power BI, Matplotlib)",
    ],
    keySkills: [
      "Python (Pandas, NumPy, SciPy)",
      "SQL",
      "NoSQL",
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
      "Statistical Analysis",
      "Data Engineering",
      "Mathematical Modeling",
      "Power BI",
      "Deep Learning",
      "Hadoop",
      "PySpark",
    ],
    link: "https://www.junia.com",
  },
  {
    degree: "Licence",
    school: "JUNIA ISEN Rabat",
    level: "BAC+3",
    specialization: "Électronique, sciences du numérique et systèmes informatiques",
    period: "2020 - 2023",
    description:
      "Formation en électronique et sciences du numérique orientée ingénierie et systèmes informatiques, avec une forte composante en mathématiques appliquées, programmation et modélisation.",
    courses: [
      "Mathématiques appliquées : algèbre, analyse, probabilités, recherche opérationnelle",
      "Informatique : algorithmique, programmation en C, structures de données et bases du développement logiciel",
      "Data & traitement numérique : analyse de données, modélisation et introduction aux systèmes intelligents",
      "Électronique : électronique analogique et numérique, systèmes embarqués, traitement du signal",
      "Physique : physique quantique, électromagnétisme et systèmes physiques",
      "Sciences de l'ingénieur : automatisme, modélisation de systèmes et résolution de problèmes techniques",
      "Anglais scientifique et communication technique",
    ],
    keySkills: [
      "Raisonnement analytique et résolution de problèmes complexes",
      "Développement logiciel et algorithmique",
      "Modélisation scientifique et traitement de données",
      "Rigueur technique et autonomie",
      "Travail en équipe et gestion de projets techniques",
      "AI and Machine Learning",
      "C",
      "Mathématiques",
      "Python (Data Science)",
      "Systèmes électroniques",
    ],
  },
  {
    degree: "Cycle Préparatoire",
    school: "Marie Stella",
    specialization: "Mathématiques, physique, chimie, sciences de l'ingénieur et informatique",
    period: "2020 - 2022",
    description:
      "Formation scientifique intensive préparant aux concours des grandes écoles d'ingénieurs, avec un fort accent sur la rigueur, l'analyse et la résolution de problèmes complexes.",
    courses: [
      "Mathématiques avancées : algèbre, analyse, probabilités, raisonnement rigoureux",
      "Physique : mécanique, électromagnétisme, thermodynamique, optique, avec travaux expérimentaux",
      "Chimie : transformations de la matière, thermochimie, cinétique",
      "Sciences de l'ingénieur : modélisation de systèmes, automatisme, mécanique",
      "Informatique : algorithmique et programmation",
      "Culture générale : français, philosophie, expression écrite et orale",
      "Anglais : compréhension et communication scientifique",
    ],
    keySkills: [
      "Raisonnement analytique et résolution de problèmes complexes",
      "Rigueur scientifique et esprit critique",
      "Capacité de travail soutenue et gestion de la pression",
      "Organisation et autonomie",
      "Python",
      "Raisonnement mathématique",
    ],
    distinction: "Major de promotion durant l'ensemble des années préparatoires.",
  },
];

export const certifications = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    name: "Formation Big Data & Data Science",
    issuer: "JUNIA ISEN Lille",
  },
  {
    name: "Formation Électronique & Sciences du Numérique",
    issuer: "JUNIA ISEN Rabat",
  },
];

export const languages = [
  { name: "Français", level: "Natif" },
  { name: "Yoruba", level: "Natif" },
  { name: "Fon", level: "Natif" },
  { name: "Goun", level: "Natif" },
  { name: "Anglais", level: "B2 - Usage professionnel" },
];

export const interests = [
  "Intelligence artificielle & recherche",
  "Systèmes multi-agents",
  "Data Engineering",
  "Computer Vision",
  "Open source",
  "Entrepreneuriat",
  "Musique (batterie)",
];
