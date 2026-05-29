// ============================================================
// FRENCH CONTENT — content.fr.ts
// Mirror of content.ts — all translatable strings in French
// Non-translatable data (emails, links, tech stacks) are kept identical
// ============================================================

export const personalInfo = {
  name: "Stéphane KPOVIESSI",
  title: "Ingénieur Systèmes IA & Infrastructure de Données",
  location: "Île-de-France, France",
  email: "oastephanekpoviessi@gmail.com",
  phone: "+33 7 48 59 47 13",
  linkedin: "https://linkedin.com/in/stephanekpoviessi",
  github: "https://github.com/Amiche02",
  githubOrg: "https://github.com/EngineerProjects",
};

export const resumeLinks = [
  {
    label: "CV : Data Infra & Systèmes",
    href: "/cv-stephane-kpoviessi-data-engineer.pdf",
  },
  {
    label: "CV : IA & Machine Learning",
    href: "/cv-stephane-kpoviessi-data-scientist.pdf",
  },
];

export const about = {
  summary:
    "Ingénieur Systèmes IA & Infrastructure de Données, spécialisé dans la construction de pipelines de données robustes à grande échelle, de workflows multi-agents autonomes et de systèmes d'exécution déterministes. Je conçois et développe des plateformes de niveau production où la rigueur analytique rencontre l'exécution logicielle fiable.",
  detail:
    "Ma pratique de l'ingénierie se situe à l'intersection de l'architecture de plateformes de données, des systèmes de machine learning, de la computer vision et des environnements de développement local. J'ai architecturé des migrations legacy-vers-distribué chez Allianz France, conçu des moteurs multi-agents en Go en tant que CTO de startup, optimisé des pipelines de vision générative (GANs) chez Groupe Sylvagreg, et développé des outils de développement local et des sandboxes d'agents isolés.",
  expertise: [
    {
      title: "Ingénierie de Plateformes de Données",
      description:
        "Conception de pipelines Médaillon Bronze/Argent/Or fiables, systèmes PySpark distribués, validations de qualité de données et structures de stockage transactionnel pour des ensembles de données d'entreprise massifs.",
      icon: "database",
    },
    {
      title: "Systèmes Agentiques Autonomes",
      description:
        "Conception de machines à états multi-agents, pipelines RAG contextualistes, orchestration LangGraph et Pydantic AI, serveurs Model Context Protocol (MCP) et sandboxes d'exécution isolés.",
      icon: "brain",
    },
    {
      title: "Computer Vision & IA Générative",
      description:
        "Développement de pipelines de traitement vidéo temps réel, tracking YOLO, segmentation d'image avec SAM, optimisation de GANs avec PyTorch et rendu d'environnements 3D procéduraux.",
      icon: "eye",
    },
    {
      title: "Systèmes & Outils Développeurs",
      description:
        "Construction d'utilitaires CLI/TUI légers, parseurs de dépôts locaux, microservices gRPC et intégrations système desktop en Go, Rust et Electron.",
      icon: "wrench",
    },
  ],
};

export const skills = {
  data_engineering: {
    label: "Ingénierie des Données",
    items: [
      { name: "PySpark", level: "Expert" },
      { name: "Databricks", level: "Advanced" },
      { name: "Azure Data Lake Storage", level: "Advanced" },
      { name: "Parquet / Delta Lake", level: "Advanced" },
      { name: "PostgreSQL / pgvector", level: "Advanced" },
      { name: "Pandas / NumPy", level: "Expert" },
      { name: "Apache Airflow", level: "Intermediate" },
      { name: "Docker", level: "Advanced" },
      { name: "Redis / Cache Mémoire", level: "Intermediate" },
      { name: "SQLite / GORM", level: "Advanced" },
    ],
  },
  ml_ai: {
    label: "Systèmes IA & Orchestration",
    items: [
      { name: "LangGraph / LangChain", level: "Advanced" },
      { name: "LlamaIndex", level: "Intermediate" },
      { name: "Pydantic AI", level: "Advanced" },
      { name: "Ollama / LLMs Locaux", level: "Advanced" },
      { name: "APIs OpenAI / Anthropic", level: "Advanced" },
      { name: "Model Context Protocol (MCP)", level: "Advanced" },
      { name: "PyTorch", level: "Expert" },
      { name: "Scikit-Learn", level: "Expert" },
      { name: "Computer Vision (YOLO/OpenCV/SAM)", level: "Advanced" },
      { name: "Réseaux Antagonistes Génératifs (GANs)", level: "Advanced" },
      { name: "Recherche Vectorielle & Embeddings", level: "Advanced" },
    ],
  },
  programming: {
    label: "Calcul & Noyau",
    items: [
      { name: "Python", level: "Expert" },
      { name: "Go (Golang)", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "TypeScript / Next.js", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "gRPC", level: "Intermediate" },
      { name: "Bash Scripting", level: "Advanced" },
      { name: "C / C++", level: "Intermediate" },
      { name: "Electron", level: "Intermediate" },
    ],
  },
};

export const experiences = [
  {
    role: "Ingénieur Plateforme de Données (Stage)",
    company: "Allianz France",
    location: "Paris La Défense, France",
    period: "Nov 2025 - Avr 2026",
    summary:
      "Piloté la modernisation de bout en bout des pipelines de données critiques sur les biens commerciaux et la responsabilité. Migration réussie de bases SAS legacy vers une architecture PySpark distribuée sur Databricks avec parité totale.",
    highlights: [
      {
        category: "Architecture Médaillon Moderne",
        points: [
          "Conçu et construit un pipeline modulaire Bronze/Argent/Or structurant les portefeuilles, capitaux actifs et émissions opérationnelles.",
          "Restructuré le staging transactionnel pour stocker les données en tables Parquet compressées optimisées, améliorant les temps de lecture en aval.",
        ],
      },
      {
        category: "Déconstruction du Legacy",
        points: [
          "Déconstruit, rétro-ingénierisé et documenté plus de 15 000 lignes de scripts SAS legacy répartis sur 19 modules métier interconnectés.",
          "Préservé 100% de la logique comptable d'assurance complexe et de gestion des risques lors de la traduction vers PySpark (Python 3.9+).",
        ],
      },
      {
        category: "Parité Fonctionnelle & Assurance Qualité",
        points: [
          "Conçu un framework de validation de schéma automatisé rejetant les données corrompues ou à dérive structurelle à l'ingestion.",
          "Implémenté des pipelines de tests de parité fonctionnelle exécutant les nœuds SAS et PySpark en parallèle, validant les données jusqu'à la décimale flottante.",
        ],
      },
      {
        category: "Nettoyage de Données Géospatiales",
        points: [
          "Conçu un pipeline ETL pour coordonnées brutes : parsing et reconstruction de localisations GPS, validation de syntaxe d'adresse postale et résolution des valeurs aberrantes.",
          "Réduit les faux positifs de parsing d'adresses, établissant une base déterministe pour le reporting de risque géographique.",
        ],
      },
    ],
    stack: ["Python", "PySpark", "Databricks", "Azure Data Lake", "SAS", "SQL", "Parquet", "Git"],
    logo: "/images/allianz_france.svg",
    featured: true,
  },
  {
    role: "Co-Fondateur & CTO",
    company: "Hello Pulse",
    location: "France (Télétravail)",
    period: "Sep 2023 - Présent",
    summary:
      "Co-fondé et développé une plateforme collaborative orchestrée par IA. Dirigé l'équipe technique, conçu l'infrastructure backend et prototypé les moteurs agentiques.",
    highlights: [
      {
        category: "Infrastructure & Backend",
        points: [
          "Architecturé un backend API scalable à faible latence en Go (Golang), PostgreSQL et Docker.",
          "Structuré les index de base de données et le connection pooling pour gérer les opérations de données transactionnelles à haute fréquence en toute sécurité.",
        ],
      },
      {
        category: "Automatisation Multi-Agents",
        points: [
          "Conçu des moteurs de routage multi-agents pour automatiser la recherche produit, la validation de fonctionnalités et la compilation de livrables.",
          "Configuré des chemins de communication modulaires entre agents, permettant des transferts de données fluides entre agents LLM spécialisés.",
        ],
      },
      {
        category: "Stratégie Produit & Technique",
        points: [
          "Guidé la direction technique depuis le proof-of-concept initial (MVP) vers une architecture de production scalable.",
          "Mentoré les ingénieurs sur les limites de systèmes, les contrats d'API et les patterns d'intégration d'interfaces propres.",
        ],
      },
    ],
    stack: ["Go", "PostgreSQL", "Docker", "LLMs", "Agents IA", "Ingénierie Produit"],
    logo: "/images/hello_pulse.svg",
    featured: true,
  },
  {
    role: "Ingénieur Machine Learning (Stage)",
    company: "Groupe Sylvagreg",
    location: "Lille, France",
    period: "Mai 2024 - Août 2024",
    summary:
      "Recherché et construit une solution de computer vision générative pour construire des modèles 3D imprimables et géométriquement cohérents directement à partir d'images structurelles 2D uniques.",
    highlights: [
      {
        category: "Recherche en Reconstruction 3D",
        points: [
          "Conduit des benchmarks de l'état de l'art sur la photogrammétrie par deep learning et la synthèse de maillage 3D depuis une vue unique.",
        ],
      },
      {
        category: "Modélisation Générative & PyTorch",
        points: [
          "Conçu, optimisé et entraîné des Réseaux Antagonistes Génératifs (GANs) personnalisés avec PyTorch.",
          "Appliqué des contraintes de cohérence structurelle et géométrique, réduisant les déformités dans les maillages génératifs.",
        ],
      },
      {
        category: "Pipelines d'Ingestion d'Images",
        points: [
          "Construit des workflows de prétraitement et d'augmentation de données avec PIL et des opérations OpenCV spécialisées.",
          "Implémenté un pipeline structuré de bout en bout mappant des entrées 2D vers des maillages 3D étanches et imprimables.",
        ],
      },
      {
        category: "Documentation Technique",
        points: [
          "Documenté les paramètres d'entraînement des modèles, les courbes de perte et les contraintes mathématiques, permettant une transmission fluide des connaissances.",
        ],
      },
    ],
    stack: ["Python", "PyTorch", "OpenCV", "GANs", "Modélisation 3D", "Photogrammétrie", "PIL"],
    logo: "/images/sylvagreg.svg",
    featured: false,
  },
  {
    role: "Analyste de Données Commerciales (Stage)",
    company: "LYNE ET FRERES SARL",
    location: "Cotonou, Bénin",
    period: "Juin 2021 - Août 2022",
    summary:
      "Analysé les ventes commerciales, les registres import/export et la logistique maritime pour optimiser le flux des stocks de la chaîne d'approvisionnement et la performance commerciale.",
    highlights: [
      {
        category: "Intelligence des Ventes & des Flux",
        points: [
          "Structuré les ensembles de données transactionnelles historiques, révélant les tendances saisonnières de la demande et les routes d'importation très rentables.",
          "Assisté les gestionnaires des stocks dans l'établissement de seuils de stock de sécurité minimum pour réduire les goulots d'étranglement de transit.",
        ],
      },
      {
        category: "Optimisation Logistique",
        points: [
          "Analysé les horaires de transport maritime et les journaux de transit, simulant des chemins de chaîne d'approvisionnement pour réduire la latence de livraison et les coûts d'expédition.",
        ],
      },
      {
        category: "Analytique Client",
        points: [
          "Compilé les comportements d'achat des clients en ensembles de données structurés, segmentant les acheteurs pour permettre un routage de campagne personnalisé.",
        ],
      },
      {
        category: "Tableaux de Bord BI",
        points: [
          "Construit des pipelines de reporting interactifs avec Power BI et des vues SQL personnalisées, fournissant aux cadres des visualisations KPI claires.",
        ],
      },
    ],
    stack: ["Analyse de Données", "SQL", "PostgreSQL", "Power BI", "Excel", "Modélisation Logistique"],
    logo: "",
    featured: false,
  },
];

export const associativeExperiences = [
  {
    role: "Vice-Président",
    organization: "JUNIA Alumni",
    location: "Lille, France",
    period: "2024 - Présent",
    points: [
      "Coordonné les opérations du comité, organisé des sommets de networking et supervisé les équipes de design créatif et de production d'événements.",
      "Géré les intégrations actives de la communauté étudiante et alumni en partenariat avec le bureau des élèves.",
    ],
  },
  {
    role: "Responsable Communications",
    organization: "JUNIA Alumni",
    location: "Lille, France",
    period: "2023 - 2024",
    points: [
      "Orchestré des événements professionnels de networking alumni, géré l'engagement de la communauté digitale et synchronisé le partage d'expériences entre étudiants et alumni.",
    ],
  },
];

export const projects = [
  {
    title: "Nexus AI",
    context:
      "Les assistants IA modernes nécessitent des runtimes isolés, des compétences extensibles, des sessions persistantes et des environnements locaux sécurisés pour agir comme de véritables systèmes d'exploitation.",
    solution:
      "Architecturé un backend de Système d'Exploitation IA expérimental en Go. Intègre des microservices gRPC, des sandboxes d'outils locaux sécurisés, des sessions sqlite persistantes avec GORM, des pipelines RAG et une couche Model Context Protocol (MCP), enveloppés dans un client desktop React et Electron soigné.",
    impact: [
      "Établi un runtime d'exécution d'agents extensible et sécurisé.",
      "Conçu des compétences pluggables permettant aux agents de lire des fichiers locaux et d'interroger des APIs externes sous des grilles de permissions utilisateur strictes.",
      "Réduit la surcharge système-vers-modèle en utilisant des canaux gRPC légers.",
    ],
    stack: ["Go (Golang)", "gRPC", "PostgreSQL", "SQLite", "GORM", "React", "Electron", "TypeScript", "RAG", "MCP"],
    link: "https://github.com/EngineerProjects/Nexus_ai",
    featured: true,
    category: "Systèmes IA",
  },
  {
    title: "Tech Watch Agent",
    context:
      "Suivre le rythme rapide de la recherche open-source et de l'ingénierie sur plusieurs canaux (GitHub, Reddit, arXiv) entraîne une surcharge cognitive critique.",
    solution:
      "Construit une plateforme de recherche entièrement autonome pilotée par une équipe multi-agents LangGraph. Elle surveille, crawle et synthétise des articles techniques, utilisant pgvector pour des recherches sémantiques hybrides, Redis pour les caches de session et FastAPI pour des mises à jour temps réel via Server-Sent Events (SSE).",
    impact: [
      "Automatisé des pipelines complets de résumé technologique quotidien et de découverte de recherche.",
      "Conçu une coordination multi-agents robuste avec des boucles de débat et d'édition désignées, produisant des rapports techniques de haute fidélité.",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "Redis", "Docker", "React", "TypeScript", "SearXNG"],
    link: "https://github.com/EngineerProjects/tech-watch-agent",
    featured: true,
    category: "Systèmes IA",
  },
  {
    title: "BI Retail",
    context:
      "Les ensembles de données de ventes retail, les transactions clients et les historiques produits sont typiquement cloisonnés, empêchant l'exploration commerciale exécutive et les prévisions par cohortes.",
    solution:
      "Développé une plateforme complète de Business Intelligence & Data Analytics. Conçu des pipelines robustes de traitement et de transformation de données en Python, structuré des modèles relationnels propres en SQL, et construit des tableaux de bord de reporting visuel automatisés dans Power BI.",
    impact: [
      "Agrégé et nettoyé des enregistrements commerciaux multi-canaux en un datamart analytique unifié.",
      "Conçu des trackers de segmentation par cohortes et des tableaux de bord de télémétrie des tendances de ventes, réduisant la latence de reporting.",
      "Optimisé les calculs de stock retail, fournissant un support de données temps réel pour la planification des stocks en aval.",
    ],
    stack: ["Python", "SQL", "Power BI", "Analyse de Données", "Visualisation", "Business Intelligence"],
    link: "https://github.com/EngineerProjects/BI_Retail",
    featured: true,
    category: "Science des Données",
  },
  {
    title: "Sylva3D",
    context:
      "La génération et le rendu d'environnements procéduraux réalistes en temps réel nécessitent des noyaux graphiques mathématiquement robustes et une logique de simulation écologique.",
    solution:
      "Développé un moteur de physique et de rendu 3D procédural personnalisé en Python. Construit des systèmes de liaison OpenGL directs, des modèles de bruit mathématiques pour la génération de terrain et des simulations de croissance végétative en temps réel.",
    impact: [
      "Prototypé des structures de végétation procédurale avec une faible surcharge de sommets.",
      "Créé un pipeline de rendu de coordonnées robuste pour des environnements d'entraînement simulés.",
    ],
    stack: ["Python", "OpenGL", "Mathématiques 3D", "Modélisation Procédurale", "Physique de Simulation"],
    link: "https://github.com/EngineerProjects/sylva3D",
    featured: true,
    category: "Systèmes 3D",
  },
  {
    title: "Analyse Vidéo Football Avancée",
    context:
      "Automatiser l'analyse tactique du football est très difficile en raison des mouvements rapides de caméra, des occultations rapides de joueurs et du suivi irrégulier du ballon.",
    solution:
      "Conçu un pipeline de computer vision utilisant la détection d'objets YOLO et des modèles de tracking OpenCV pour isoler les joueurs, identifier les équipes par couleur de maillot, suivre les vecteurs du ballon et calculer des heatmaps tactiques.",
    impact: [
      "Automatisé le parsing d'enregistrements de matchs de football, générant des graphiques de mouvement actionnables.",
      "Fourni aux clubs amateurs des métriques de coordonnées haute fidélité précédemment limitées aux entreprises professionnelles.",
    ],
    stack: ["Python", "OpenCV", "Computer Vision", "YOLO", "Deep Learning", "Tracking Vidéo"],
    link: "https://github.com/EngineerProjects/Advanced-Football-Video-Analysis",
    featured: true,
    category: "Computer Vision",
  },
  {
    title: "LocalIngest",
    context:
      "L'ingestion de codebases locales dans des contextes LLM ou des indexeurs RAG nécessite généralement un parsing manuel qui prive les fichiers structuraux de leur séquence logique.",
    solution:
      "Créé un outil CLI/TUI développeur haute vitesse qui cartographie des dossiers locaux complets, génère des modèles d'arborescence précis et structure des fichiers de projet complets en un digest markdown optimisé.",
    impact: [
      "Accéléré l'onboarding LLM de codebases de plusieurs heures à quelques secondes.",
      "Intègre des contrôles TUI interactifs riches via les bibliothèques Typer et Rich.",
    ],
    stack: ["Python", "CLI/TUI", "Rich", "Typer", "Parsing AST", "Outils Développeur"],
    link: "https://github.com/EngineerProjects/LocalIngest",
    featured: false,
    category: "Outils Développeur",
  },
  {
    title: "Prévision d'Irradiance Solaire",
    context:
      "La prédiction de la production d'énergie solaire est très volatile et fortement dépendante de métriques météorologiques instables.",
    solution:
      "Construit un pipeline de prévision par machine learning. Effectué une ingénierie de caractéristiques atmosphériques étendue, traité des journaux satellitaires historiques et entraîné des modèles de régression pour prévoir les taux d'irradiance.",
    impact: [
      "Optimisé les simulations de dispatching de stockage sur réseau solaire.",
      "Conçu une boucle de parsing de caractéristiques robuste gérant les lectures atmosphériques manquantes en toute sécurité.",
    ],
    stack: ["Python", "Scikit-Learn", "Pandas", "Machine Learning", "Prévision d'Irradiance"],
    link: "https://github.com/EngineerProjects/solar-forecasting",
    featured: true,
    category: "Science des Données",
  },
  {
    title: "Shop App Service",
    context:
      "Les backends e-commerce doivent maintenir l'intégrité transactionnelle, une recherche rapide de produits et des architectures de services modulaires.",
    solution:
      "Développé un backend API propre et orienté services en Go, présentant des patterns de routage modulaires, une gestion de sessions sécurisée et un mapping de base de données transactionnel.",
    impact: [
      "Conçu des couches système découplées prêtes pour la conteneurisation en microservices.",
      "Implémenté des verrous de base de données stricts pour prévenir les conditions de course lors des boucles de checkout.",
    ],
    stack: ["Go (Golang)", "GORM", "PostgreSQL", "Architecture Propre", "APIs REST"],
    link: "https://github.com/EngineerProjects/Shop-app-service",
    featured: false,
    category: "Backend",
  },
  {
    title: "Sylva3D GUI",
    context:
      "Les générateurs de scènes 3D procéduraux nécessitent des interfaces utilisateur desktop réactives pour manipuler les variables d'environnement, les caméras et les densités d'assets en temps réel.",
    solution:
      "Conçu et codé une interface de contrôle desktop multi-panneaux haute densité pour le moteur de rendu Sylva3D, affichant des cadrans de paramètres, des arborescences de scènes et des indicateurs d'état du moteur.",
    impact: [
      "Rationalisé le réglage créatif et technique des paramètres de génération de scènes procédurales.",
      "Fourni une télémétrie du moteur en temps réel et des indicateurs de frames de viewport.",
    ],
    stack: ["Python", "PyQt / PySide", "Télémétrie 3D", "Ingénierie GUI Desktop"],
    link: "https://github.com/EngineerProjects/Sylva3dGUI",
    featured: false,
    category: "Systèmes 3D",
  },
  {
    title: "SAM Background Remover",
    context:
      "Les outils professionnels de segmentation d'image sont nécessaires pour extraire des couches d'objets haute fidélité sans masquage manuel.",
    solution:
      "Intégré le Segment Anything Model (SAM) de Meta dans un outil de vision desktop propre pour effectuer une isolation de premier plan instantanée et un retrait de fond haute précision.",
    impact: [
      "Automatisé les workflows de masquage de précision pour les designers et artistes digitaux.",
      "Optimisé les temps d'exécution de segmentation en utilisant des backends PyTorch accélérés par GPU.",
    ],
    stack: ["Python", "PyTorch", "Segment Anything (SAM)", "Computer Vision", "Masquage UI"],
    link: "https://github.com/EngineerProjects/sam_background_remover",
    featured: false,
    category: "Computer Vision",
  },
];

export const education = [
  {
    degree: "Master of Science en Ingénierie (Diplôme d'Ingénieur)",
    school: "JUNIA ISEN Lille",
    level: "Master (BAC+5)",
    specialization: "Big Data & Data Science",
    period: "2023 - 2026",
    description:
      "Grande École d'Ingénieurs française d'élite. Programme avancé spécialisé en ingénierie de données massives, modélisation statistique, systèmes distribués et machine learning en production.",
    courses: [
      "Infrastructure de Données : Traitement distribué, ETL batch/streaming, règles de conception médaillon",
      "Machine Learning Avancé : Architectures neuronales, grilles d'entraînement supervisé/non supervisé",
      "Mathématiques Stochastiques & Appliquées : Théorie des probabilités, recherche opérationnelle, théorie de l'optimisation",
      "Plateformes de Données Entreprise : Entrepôts de données, systèmes SQL/NoSQL et outils de tableaux de bord BI",
    ],
    keySkills: [
      "Python",
      "SQL / NoSQL",
      "PySpark",
      "Machine Learning",
      "Calcul Distribué",
      "Plateformes de Données",
      "Optimisation Statistique",
      "Deep Learning",
    ],
    link: "https://www.junia.com",
  },
  {
    degree: "Licence en Ingénierie du Numérique",
    school: "JUNIA ISEN Rabat",
    level: "Licence (BAC+3)",
    specialization: "Électronique, Systèmes Informatiques & Sciences du Numérique",
    period: "2020 - 2023",
    description:
      "Programme d'ingénierie undergraduate intensif couvrant les fondements de l'informatique, l'algèbre avancée, le calcul embarqué et les systèmes numériques.",
    courses: [
      "Informatique : Algorithmes, programmation C stricte, structures de données, fondements logiciels",
      "Mathématiques : Calcul multi-variables, algèbre linéaire, champs vectoriels, grilles de probabilités",
      "Traitement du Signal : Signaux analogiques/numériques, contrôles de systèmes, électronique embarquée",
    ],
    keySkills: [
      "Logique Algorithmique",
      "Programmation C",
      "Mathématiques Appliquées",
      "Modélisation des Signaux",
      "Systèmes Embarqués",
    ],
  },
  {
    degree: "Classe Préparatoire MPSI / MP",
    school: "Marie Stella",
    specialization: "Mathématiques Avancées, Physique & Informatique",
    period: "2020 - 2022",
    description:
      "Programme undergraduate intensif de deux ans très sélectif préparant les candidats aux concours d'entrée des Grandes Écoles françaises.",
    courses: [
      "Mathématiques Pures : Algèbre abstraite, analyse rigoureuse, topologie, structures de probabilités",
      "Physique & Ingénierie : Électromagnétisme, mécanique classique, thermodynamique, modélisation physique",
    ],
    keySkills: [
      "Rigueur Analytique",
      "Preuves Mathématiques",
      "Résolution Logique de Problèmes",
      "Endurance & Rapidité Mentale",
    ],
    distinction: "Diplômé major de promotion sur toutes les périodes préparatoires.",
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft (Coursera Verify LU2ZQ972BWNF)",
  },
  {
    name: "Analyse de Données avec Python",
    issuer: "FreeCodeCamp (Vérification : Amiche)",
  },
  {
    name: "Machine Learning Supervisé",
    issuer: "DeepLearning.AI (Verify MWJS4Q3S2C3L)",
  },
  {
    name: "Intelligence Artificielle A-Z",
    issuer: "Udemy (Verify UC-f0f26f78-fc5e-4cd5-a5f8-7c7f64680774)",
  },
];

export const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Yoruba", level: "Langue maternelle" },
  { name: "Fon", level: "Langue maternelle" },
  { name: "Goun", level: "Langue maternelle" },
  { name: "Anglais", level: "B2 - Compétence professionnelle" },
];

export const interests = [
  "Intelligence Artificielle & Recherche sur les États Agentiques",
  "Réseaux de Communication Multi-Agents",
  "Infrastructure de Données Haute Performance",
  "Computer Vision & Graphiques Génératifs",
  "Outils Développeur Open Source",
  "Entrepreneuriat Technique & Venture",
  "Percussion & Batterie (Batterie Acoustique)",
];

// ── UI Strings ──────────────────────────────────────────────
// Static labels used directly inside components

export const ui = {
  nav: {
    scope: "PÉRIMÈTRE",
    stack: "STACK",
    blueprints: "PLANS",
    records: "HISTORIQUE",
    handshake: "CONTACT",
    status: "SYS: ACTIF",
    mobile_title: "SYSTÈME DE NAVIGATION HUD",
    connect_links: "LIENS DE CONNEXION :",
  },
  hero: {
    badge: "PLATEFORME SYSTÈMES CŒUR",
    hook: "Conception de plateformes multi-agents scalables, pipelines big data déterministes et runtimes d'exécution haute performance. Transformer des modèles volatils en pipelines de niveau production.",
    cta_explore: "Explorer les Plans",
    cta_resume_infra: "CV : Data Infra & Systèmes",
    cta_resume_ai: "CV : IA & Machine Learning",
    status_ready: "PRÊT_AU_DÉPLOIEMENT",
    telemetry_title: "STATS MOTEUR",
    telemetry_runtime: "ENVIRONNEMENT RUNTIME",
    telemetry_orchestration: "PIPELINES D'ORCHESTRATION",
    telemetry_data_engine: "MOTEUR CLUSTER DATA",
  },
  about: {
    badge: "01 // PÉRIMÈTRE DE RECHERCHE CŒUR",
    heading_1: "Ingénierie",
    heading_2: "Systèmes",
    heading_suffix: "Déterministes",
    focus_label: "FOCUS: ÉCHELLE & PARITÉ DÉTAILLÉE",
    philosophy_title: "Règle d'Architecture Systèmes",
    philosophy_sub: "DE LA MÉTRIQUE À LA MACHINE",
    philosophy_quote:
      "Je ne me contente pas d'entraîner des modèles ou d'exécuter des requêtes. J'architecture des plateformes complètes et auto-réparatrices garantissant la parité fonctionnelle, la sécurité des schémas et la fiabilité à la microseconde.",
  },
  skills: {
    badge: "02 // SPÉCIFICATIONS DE CALIBRATION DU MOTEUR",
    heading_1: "Grille de",
    heading_2: "Spécifications",
    heading_3: "Techniques",
    subheading: "STACK MATÉRIEL & LOGICIEL",
    ready: "PRÊT À L'EXÉCUTION",
  },
  projects: {
    badge: "03 // PLANS DE PLATEFORMES ACTIVES",
    heading_1: "Études de Cas",
    heading_2: "Techniques",
    heading_3: "& Systèmes",
    cta_heading: "EXPLORER LES NŒUDS DU CLUSTER COMPLET",
    cta_body:
      "Je contribue activement à des logiciels open-source, testant des sandboxes locaux et des stratégies de parsing structurel. Explorez mon organisation GitHub pour les scripts d'implémentation complets.",
    cta_button: "Accéder à l'Org Github",
    auxiliary_title: "NŒUDS EXPÉRIMENTAUX AUXILIAIRES",
    auxiliary_badge: "CATALOGUE AUXILIAIRE // OPTIMISATIONS",
    specified_blueprints: "PLANS SPÉCIFIÉS",
    context_label: "CONTEXTE SYSTÈME:",
    solution_label: "SOLUTION TECHNIQUE:",
    impact_label: "IMPACT PRODUCTION VÉRIFIÉ:",
  },
  experience: {
    badge: "04 // HISTORIQUE OPÉRATIONNEL & EXPÉRIENCE",
    heading_1: "Releases",
    heading_2: "Opérationnelles",
    heading_3: "& Expérience",
    subheading: "CHANGELOG CHRONOLOGIQUE",
    expand: "Développer les Nœuds de Log",
    collapse: "Réduire les Détails",
    community_title: "Changelog Communauté & Leadership",
    community_sub: "RÉSEAUX JUNIA ALUMNI",
  },
  education: {
    badge: "05 // RIGUEUR SCIENTIFIQUE & MATHÉMATIQUE",
    heading_1: "Fondements",
    heading_2: "Académiques",
    cert_badge: "REGISTRE DE CERTIFICATIONS",
    cert_heading_1: "Registre",
    cert_heading_2: "Vérifié",
    syllabus_label: "PROGRAMME TECHNIQUE PRINCIPAL:",
    distinction_prefix: "[DISTINCTION]",
    verify_link: "Vérifier l'Institution",
    issuer_label: "ÉMETTEUR:",
    continuous_quote:
      "Alignement continu avec les paradigmes cloud changeants, la recherche opérationnelle mathématique et les machines à états de workflow automatisées.",
  },
  contact: {
    badge: "05 // PROTOCOLE DE POIGNÉE DE MAIN SÉCURISÉ",
    heading_1: "Initier la",
    heading_2: "Passerelle",
    heading_3: "de Connexion",
    subheading: "TUNNEL DE COMMUNICATIONS CHIFFRÉ",
    intro:
      "Ouvert à la collaboration sur des systèmes agentiques autonomes, des audits de migration PySpark, des architectures de microservices ou d'autres initiatives d'ingénierie ambitieuses.",
    email_label: "EMAIL DE REGISTRE",
    phone_label: "VOIX CHIFFRÉE",
    form_name: "// NOM COMPLET",
    form_email: "// ADRESSE EMAIL",
    form_message: "// PAQUET DE DONNÉES BRUTES (MESSAGE)",
    form_name_placeholder: "Ident: Jean Dupont",
    form_email_placeholder: "Ident: jean@net.com",
    form_message_placeholder: "Entrez les specs du message...",
    submit_idle: "Transmettre le Paquet de Données",
    submit_sending: "Transmission en cours...",
    submit_sent: "Poignée de Main Établie",
    submit_error: "Transmission Interrompue",
    success_msg:
      "TRANSMISSION RÉUSSIE. JE RÉPONDRAI SUR CETTE COORDONNÉE RAPIDEMENT.",
  },
  footer: {
    registry: "REGISTRE",
    record: "ENREGISTREMENT REGISTRE 4022A",
    hosted: "PLATEFORME HÉBERGÉE // CLUSTER SÉCURISÉ",
    design: "DESIGN & ARCHITECTURE CŒUR PAR S. KPOVIESSI",
    compiled: "COMPILÉ CIBLE: TARGET_X86_64",
    rendered: "RENDU DANS LE MOTEUR CUSP LAYOUT",
  },
  chat: {
    title: "ASSISTANT SYSTÈME",
    initial:
      "Bonjour ! Je suis l'assistant système de Stéphane. Je peux décrire ses pipelines Big Data chez Allianz, ses architectures backend Go chez Hello Pulse, sa modélisation générative PyTorch et ses systèmes multi-agents. Quel axe souhaitez-vous explorer ?",
    cleared: "Historique de conversation effacé. Système en attente. Comment puis-je vous aider ?",
    error: "Désolé, une interruption de communication s'est produite. Relançons la requête.",
    reset_title: "Réinitialiser le cache système",
    assistant_label: "■ TÉLÉMÉTRIE_SORTIE",
    user_label: "■ CONSOLE_ENTRÉE",
    loading_label: "■ PROCESSUS: CALCUL_POIDS",
    placeholder: "Entrez les specs de requête système...",
    footer: "TUNNEL SÉCURISÉ AUGMENTÉ PAR STÉPHANE",
  },
};
