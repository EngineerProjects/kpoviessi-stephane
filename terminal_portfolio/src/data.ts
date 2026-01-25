import type { AppData, Skill } from './types';

const SKILLS_COMMON: Skill[] = [
  // Programming
  { name: "Python", level: 5, category: "Programming" },
  { name: "R", level: 4, category: "Programming" },
  { name: "SQL", level: 4, category: "Programming" },
  { name: "Bash", level: 4, category: "Programming" },
  { name: "C", level: 3, category: "Programming" },
  { name: "Golang", level: 3, category: "Programming" },
  { name: "TypeScript", level: 2, category: "Programming" },
  { name: "HTML/CSS", level: 3, category: "Programming" },
  { name: "React", level: 2, category: "Programming" },

  // ML & AI
  { name: "PyTorch", level: 5, category: "ML/AI" },
  { name: "Scikit-learn", level: 5, category: "ML/AI" },
  { name: "TensorFlow", level: 4, category: "ML/AI" },
  { name: "Computer Vision", level: 4, category: "ML/AI" },
  { name: "NLP / LLMs", level: 4, category: "ML/AI" },
  { name: "Transformers", level: 4, category: "ML/AI" },
  { name: "GANs", level: 4, category: "ML/AI" },
  { name: "Reinforcement Learning", level: 3, category: "ML/AI" },
  { name: "Hugging Face", level: 4, category: "ML/AI" },

  // Data Eng
  { name: "Pandas", level: 5, category: "Data Engineering" },
  { name: "NumPy", level: 5, category: "Data Engineering" },
  { name: "Docker", level: 4, category: "Data Engineering" },
  { name: "PostgreSQL", level: 4, category: "Data Engineering" },
  { name: "PySpark", level: 3, category: "Data Engineering" },
  { name: "AWS", level: 3, category: "Data Engineering" },
  { name: "Azure", level: 3, category: "Data Engineering" },
  { name: "MongoDB", level: 3, category: "Data Engineering" },
  { name: "Streamlit", level: 4, category: "Data Engineering" },
  { name: "Power BI", level: 3, category: "Data Engineering" }
];

// --- ENGLISH DATA ---

export const DATA_EN: AppData = {
  personalInfo: {
    name: "Stéphane KPOVIESSI",
    title: "Big Data Engineer | AI Specialist",
    email: "oastephanekpoviessi@gmail.com",
    phone: "+33 7 48 59 47 13",
    location: "Île-de-France, France",
    bio: `I transform data complexity into concrete growth levers. My approach combines software rigor (Python, Go, SQL) and cutting-edge AI to build secure, scalable, and future-ready production infrastructures. My goal: automate your critical tasks and make your data immediately actionable.

My pillars of expertise:
Data Engineering: Architecture modernization and migration of legacy pipelines to high-performance, maintainable ecosystems.
Generative AI & Agents: Designing RAG systems and orchestrating multi-agent workflows to automate complex business processes.
Data Science: Predictive analytics and advanced modeling to transform uncertainty into data-driven decisions.
Computer Vision: Developing computer vision algorithms for industry (Image generation, detection, video analysis...).

Looking to structure your Data ecosystem or deploy value-generating AI solutions? Let's tackle your technical challenges together.

> [LETS_DISCUSS_YOUR_PROJECT]`,
    marketing: {
      intro: "I transform data complexity into concrete growth levers. My approach combines software rigor (Python, Go, SQL) and cutting-edge AI to build secure, scalable, and future-ready production infrastructures. My goal: automate your critical tasks and make your data immediately actionable.\n\nMy pillars of expertise:",
      pillars: [
        { title: "Data Engineering", desc: "Architecture modernization and migration of legacy pipelines to high-performance, maintainable ecosystems." },
        { title: "Generative AI & Agents", desc: "Designing RAG systems and orchestrating multi-agent workflows to automate complex business processes." },
        { title: "Data Science", desc: "Predictive analytics and advanced modeling to transform uncertainty into data-driven decisions." },
        { title: "Computer Vision", desc: "Developing computer vision algorithms for industry (Image generation, detection, video analysis...)." }
      ],
      outro: "Looking to structure your Data ecosystem or deploy value-generating AI solutions? Let's tackle your technical challenges together.\n\n> [LETS_DISCUSS_YOUR_PROJECT]"
    },
    hobbies: ["Music & Drumming", "Entrepreneurship", "Strategy Games", "Open Source", "AI Research", "Community Building"],
    socials: {
      linkedin: "https://linkedin.com/in/stephanekpoviessi",
      github: "https://github.com/Amiche02",
      github_org: "https://github.com/EngineerProjects",
      email: "mailto:oastephanekpoviessi@gmail.com"
    }
  },
  skills: [
    ...SKILLS_COMMON,
    { name: "English", level: 5, category: "Languages" },
    { name: "French", level: 5, category: "Languages" },
    { name: "Yoruba", level: 5, category: "Languages" },
    { name: "Fon", level: 5, category: "Languages" },
    { name: "Goun", level: 5, category: "Languages" },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Data Scientist - Intern",
      company: "Allianz France",
      location: "Paris, France",
      date: "Nov 2025 - Present",
      skills: ["Python", "PySpark", "SAS", "SQL", "Medallion Arch", "Git"],
      description: [
        "Led the end-to-end migration of the 'Construction Data Mart' pipelines from legacy SAS to a modern PySpark architecture.",
        "Designed and implemented a scalable Medallion Architecture (Bronze/Silver/Gold) to process insurance data.",
        "Reverse-engineered and documented over 15,000 lines of legacy SAS code across 19 complex files.",
        "Developed modular and reusable PySpark processors and established a rigorous testing strategy.",
        "Cataloged 150+ business rules and 45 datasets to create a comprehensive data dictionary."
      ],
      logo: "/allianz-france.png"
    },
    {
      id: "exp-2",
      role: "Machine Learning Engineer - Intern",
      company: "Groupe Sylvagreg",
      location: "Lille, France",
      date: "May 2024 - Aug 2024",
      skills: ["PyTorch", "GANs", "Computer Vision", "3D Modeling", "AWS", "Docker"],
      description: [
        "Developed advanced deep learning algorithms (GANs) for generating 3D models from 2D images.",
        "Designed and optimized image processing pipeline combining 3D photogrammetry techniques with neural networks.",
        "Implemented cloud solution for massive data processing and deployed application with user interface.",
        "Conducted state-of-the-art research on existing 3D modeling solutions from 2D images."
      ],
      logo: "/sylvagreg.png"
    },
    {
      id: "exp-3",
      role: "Commercial Data Analyst - Intern",
      company: "LYNE ET FRERES SARL",
      location: "Cotonou, Benin",
      date: "Jun 2022 - Aug 2022",
      skills: ["Data Analysis", "BI", "Python", "Pandas", "SQL", "Dashboarding"],
      description: [
        "Analyzed sales and import/export data to identify trends and commercial opportunities.",
        "Created interactive dashboards for KPI visualization and decision-making support.",
        "Identified most profitable products, markets, and seasonal patterns.",
        "Optimized inventory and supply chain management through data-driven insights."
      ],
      logo: "https://ui-avatars.com/api/?name=LF&background=ffffff&color=d00&bold=true&size=128"
    },
    {
      id: "exp-4",
      role: "IT Management & Maintenance",
      company: "ONIP",
      location: "Benin",
      date: "Jun 2021 - Jul 2021",
      skills: ["IT Support", "Content Management", "Networking", "Auditing"],
      description: [
        "Worked in the Information Systems, Procurement, and Logistics Audit Office.",
        "Actively contributed to information systems management and computer maintenance.",
        "Worked on image processing and participated in the management of the ONIP website.",
        "Gained practical experience in crimping RJ45 network cables and equipment maintenance."
      ],
      logo: "/onip-benin.png"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Enterprise-AI Agents",
      description: "Building multi-agent AI organizations that collaborate like humans for enterprise-grade autonomous AI workforces.",
      tags: ["Multi-Agent", "LLM", "Python", "Enterprise AI"],
      category: "AI",
      link: "https://github.com/EngineerProjects/Enterprise-AI"
    },
    {
      id: "proj-2",
      title: "Brain Tumor Classification",
      description: "AI system for classifying brain tumors in MRI images using advanced computer vision techniques.",
      tags: ["Computer Vision", "Medical AI", "CNN", "Deep Learning"],
      category: "AI",
      link: "https://www.kaggle.com/code/kpoviesistphane/ia-sant-project"
    },
    {
      id: "proj-3",
      title: "RAG Chatbot System",
      description: "Advanced chatbot with Retrieval-Augmented Generation, web search integration, and multi-language support.",
      tags: ["RAG", "LLM", "NLP", "Vector DB", "FastAPI"],
      category: "AI",
      link: "https://github.com/Amiche02/ollama"
    },
    {
      id: "proj-4",
      title: "PulseRAG Doc Processing",
      description: "Core component for Hello Pulse with document processing, web search integration, and TTS/STT functionalities.",
      tags: ["RAG", "Embeddings", "TTS", "STT", "Search"],
      category: "Data",
      link: "https://github.com/EngineerProjects/PulseRAG"
    },
    {
      id: "proj-5",
      title: "Football Video Analysis",
      description: "AI system for analyzing grassroots football match videos using advanced computer vision and big data infrastructure.",
      tags: ["CV", "YOLO", "Sports Analytics", "OpenCV"],
      category: "AI",
      link: "https://github.com/Amiche02/Grassroot_football_video_analysis"
    },
    {
      id: "proj-6",
      title: "Early Plants Disease Detection",
      description: "Real-time plant disease detection system using YOLOv8 with 96% accuracy for agricultural applications.",
      tags: ["CV", "YOLOv8", "Agriculture", "Web App"],
      category: "AI",
      link: "https://huggingface.co/spaces/Amiche02/Plant-Disease-Detector"
    },
    {
      id: "proj-7",
      title: "BI_Retail Solution",
      description: "Comprehensive BI solution for retail supply chain and sales data analysis using Docker, Airflow, and PowerBI.",
      tags: ["ETL", "Airflow", "PowerBI", "Docker", "PostgreSQL"],
      category: "Data",
      link: "https://github.com/Amiche02/BI_Retail"
    },
    {
      id: "proj-8",
      title: "BERT Sentiment Analysis",
      description: "PyTorch implementation for tweet sentiment extraction using BERT-based models with modern Transformers.",
      tags: ["BERT", "NLP", "PyTorch", "Transformers"],
      category: "AI",
      link: "https://github.com/Amiche02/Bert-sentiment"
    },
    {
      id: "proj-9",
      title: "Sylva3D Photogrammetry",
      description: "Dockerized GUI application for photogrammetry tasks using COLMAP and OpenMVS with CUDA acceleration.",
      tags: ["Photogrammetry", "3D", "CUDA", "Docker", "GUI"],
      category: "Dev",
      link: "https://github.com/Amiche02/Sylva3dGUI"
    },
    {
      id: "proj-10",
      title: "Advanced House Prices",
      description: "Kaggle competition solution using ensemble methods and advanced feature engineering for real estate prediction.",
      tags: ["ML", "Ensemble Methods", "XGBoost", "Feature Eng"],
      category: "Data",
      link: "https://www.kaggle.com/code/kpoviesistphane/house-prices-analysis-with-python"
    },
    {
      id: "proj-11",
      title: "LocalIngest Code Analysis",
      description: "CLI and Terminal UI tool for analyzing code repositories and generating comprehensive Markdown reports.",
      tags: ["CLI", "Go/Python", "TUI", "Developer Tools"],
      category: "Dev",
      link: "https://github.com/EngineerProjects/LocalIngest"
    },
    {
      id: "proj-12",
      title: "Shop-App E-commerce API",
      description: "Robust e-commerce backend API built with Golang, Gin, PostgreSQL, and Docker with JWT authentication.",
      tags: ["Golang", "API", "PostgreSQL", "Docker", "JWT"],
      category: "Dev",
      link: "https://github.com/Amiche02/Shop-app-service"
    },
    {
      id: "proj-13",
      title: "ML Pipeline Collection",
      description: "Comprehensive collection of end-to-end machine learning projects covering various domains and applications.",
      tags: ["ML", "Data Science", "Healthcare", "Recommender"],
      category: "AI",
      link: "https://github.com/Amiche02/ML_Pipeline"
    },
    {
      id: "proj-14",
      title: "Gemini OCR Table Extraction",
      description: "Advanced OCR system combining Tesseract and Gemini LLM for precise table extraction and interpretation from images.",
      tags: ["OCR", "Gemini", "LLM", "CV", "Python"],
      category: "AI",
      link: "https://github.com/Amiche02/Gemini-OCR"
    },
    {
      id: "proj-15",
      title: "Audio2Text Transcription",
      description: "Simple web application for audio-to-text transcription using speech recognition technology with Gradio interface.",
      tags: ["Audio", "Speech Recognition", "Gradio", "Web App"],
      category: "AI",
      link: "https://github.com/Amiche02/Audio2text"
    }
  ],
  education: [
    {
      degree: "Engineer's degree - Big Data & DS",
      institution: "JUNIA ISEN",
      location: "Lille, France",
      date: "Sep 2024 - Jul 2025",
      description: "Specialization in distributed systems, cloud computing, and advanced machine learning architectures."
    },
    {
      degree: "Engineer's degree - Electronics",
      institution: "JUNIA ISEN",
      location: "Rabat, Morocco",
      date: "Sep 2022 - Jul 2023",
      description: "Core engineering foundation with focus on digital systems, signal processing, and embedded electronics."
    },
    {
      degree: "MPSI (Math/Physics)",
      institution: "Marie Stella",
      location: "Cotonou, Benin",
      date: "Sep 2020 - Jul 2022",
      description: "Intensive preparatory program focusing on advanced mathematics, physics, and engineering fundamentals."
    }
  ],
  certifications: [
    {
      name: "Create Machine Learning Models in Microsoft Azure",
      organization: "Microsoft",
      date: "May 2023",
      skills: ["Azure", "Machine Learning", "Python", "Data Analysis"],
      link: "https://coursera.org/verify/LU2ZQ972BWNF"
    },
    {
      name: "Data Analysis with Python",
      organization: "freeCodeCamp",
      date: "May 2023",
      skills: ["Pandas", "NumPy", "Matplotlib", "Data Viz"],
      link: "https://freecodecamp.org/certification/Amiche/data-analysis-with-python-v7"
    },
    {
      name: "Supervised Machine Learning",
      organization: "DeepLearning.AI (Coursera)",
      date: "2024",
      skills: ["Regression", "Classification", "Neural Networks"],
      link: "https://coursera.org/verify/MWJS4Q3S2C3L"
    },
    {
      name: "Intelligence Artificielle de A à Z",
      organization: "Udemy",
      date: "2024",
      skills: ["AI", "Deep Learning", "NLP", "CV"],
      link: "https://www.udemy.com/certificate/UC-f0f26f78-fc5e-4cd5-a5f8-7c7f64680774/"
    },
    {
      name: "Préparation au métier d'analyste de données",
      organization: "Microsoft (LinkedIn Learning)",
      date: "2024",
      skills: ["Power BI", "SQL", "Data Viz", "BI"],
      link: "https://www.linkedin.com/learning/certificates/fed380ef1713eb9d1633ac7cd02b74bf58cf5f4bcf7e5fd47cb39bce19649bae"
    }
  ],
  associations: [
    {
      role: "Vice President",
      organization: "Commission Réseau JUNIA ALUMNI",
      location: "Lille, France",
      date: "Sep 2024 - Present",
      skills: ["Leadership", "Event Management", "Coordination", "Project Management"],
      description: [
        "Coordinate commission work and organize alumni events.",
        "Ensure proper room reservations and collaboration with Student Union (BDE).",
        "Plan event dates and supervise communication managers."
      ]
    },
    {
      role: "Communication Manager",
      organization: "Commission Réseau JUNIA ALUMNI",
      location: "Lille, France",
      date: "Sep 2023 - Jul 2024",
      skills: ["Communication", "Alumni Relations", "Networking", "Social Media"],
      description: [
        "Contacted JUNIA ISEN alumni to share experiences during afterworks.",
        "Communicated dates and events to students.",
        "Ensured liaison between alumni and current students."
      ]
    }
  ],
  ui: {
    nav: {
      profile: "PROFILE",
      skills: "SKILLS",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
      contact: "CONTACT",
      assistant: "ASSISTANT",
      ai_mode: "AI_MODE"
    },
    dashboard: {
      sys_integrity: "SYS_INTEGRITY",
      power_cell: "POWER_CELL",
      uplink: "UPLINK",
      storage: "STORAGE",
      admin: "ADMIN",
      admin_access: "ADMIN ACCESS",
      location: "LOCATION",
      stack: "STACK",
      hobbies: "HOBBIES & INTERESTS",
      status_log: "STATUS LOG",
      last_login: "LAST_LOGIN",
      firewall: "FIREWALL",
      root_access: "ROOT_ACCESS"
    },
    skills: {
      title: "TECHNICAL SKILLS",
      scan: "SCANNING_CORE_DRIVERS...",
      loaded: "TOTAL_MODULES_LOADED"
    },
    experience: {
      title: "PROFESSIONAL EXPERIENCE",
      path: "/VAR/LOG/CAREER_HISTORY",
      mode: "MODE: READ_ONLY",
      assoc_title: "LEADERSHIP & ASSOCIATIONS",
      edu_title: "ACADEMIC EDUCATION",
      cert_title: "LICENSES & CERTIFICATIONS"
    },
    projects: {
      title: "PROJECTS",
      access: "ACCESSING PROJECT FILES...",
      all: "All",
      ai: "AI",
      data: "Data",
      dev: "Dev"
    },
    comms: {
      header: "ESTABLISH_CONNECTION",
      direct_uplink: "DIRECT UPLINK",
      protocol: "SELECT PREFERRED COMMUNICATION PROTOCOL",
      linkedin: "PROFESSIONAL_NET",
      github: "CODE_REPOSITORY",
      email: "DIRECT_MESSAGE",
      form_title: "TRANSMISSION_INTERFACE_V1.0",
      sender_id: "SENDER_ID",
      enter_name: "ENTER_NAME",
      return_addr: "RETURN_SIGNAL_ADDRESS",
      enter_email: "ENTER_EMAIL",
      content: "DATA_PACKET_CONTENT",
      input_msg: "INPUT_MESSAGE_DATA...",
      initiate: "INITIATE_TRANSMISSION",
      uploading: "UPLOADING DATA PACKETS...",
      complete: "TRANSMISSION COMPLETE",
      failed: "TRANSMISSION FAILED. RETRY?",
      connecting: "CONNECTING..."
    },
    ai: {
      header: "AI_INTERROGATION_TERMINAL",
      status: "CONN_STATUS: STABLE // LATENCY: 12ms",
      placeholder: "ENTER QUERY...",
      processing: "PROCESSING_NEURAL_NETWORK...",
      warning: "AI MODEL: GEMINI-3-FLASH // RESTRICTED ACCESS: PORTFOLIO DATA ONLY",
      initial_msg: `GREETINGS. I AM SK_CORE_AI, THE VIRTUAL ASSISTANT FOR STÉPHANE KPOVIESSI.
I HAVE FULL ACCESS TO THE CAREER DATABASE. 
YOU MAY QUERY ME ABOUT **SKILLS**, **PROJECTS**, **EXPERIENCE**, OR **CERTIFICATIONS**.

> HOW CAN I ASSIST YOU TODAY?`
    }
  }
};

// --- FRENCH DATA ---

export const DATA_FR: AppData = {
  personalInfo: {
    ...DATA_EN.personalInfo,
    title: "Ingénieur Big Data | Spécialiste IA",
    location: "Île-de-France, France",
    bio: `Je transforme la complexité de vos données en leviers de croissance concrets. Mon approche combine rigueur logicielle (Python, Go, SQL) et IA de pointe pour bâtir des infrastructures de production sécurisées, scalables et prêtes pour le futur. Mon objectif : automatiser vos tâches critiques et rendre vos données immédiatement actionnables.

Mes piliers d'expertise :
Data Engineering : Modernisation d'architectures et migration de pipelines legacy vers des écosystèmes performants et maintenables.
IA Générative & Agents : Conception de systèmes RAG et orchestration de workflows multi-agents pour automatiser les processus métier complexes.
Data Science : Analyse prédictive et modélisation avancée pour transformer l'incertitude en décisions basées sur la donnée.
Computer Vision : Développement d'algorithmes de vision par ordinateur pour l'industrie (Génération d'image, détection, analyse vidéo, ...).

Vous souhaitez structurer votre écosystème Data ou déployer des solutions d'IA qui génèrent de la valeur ? Relevons vos défis techniques ensemble.

> [DISCUTONS_DE_VOTRE_PROJET]`,
    marketing: {
      intro: "Je transforme la complexité de vos données en leviers de croissance concrets. Mon approche combine rigueur logicielle (Python, Go, SQL) et IA de pointe pour bâtir des infrastructures de production sécurisées, scalables et prêtes pour le futur. Mon objectif : automatiser vos tâches critiques et rendre vos données immédiatement actionnables.\n\nMes piliers d'expertise :",
      pillars: [
        { title: "Data Engineering", desc: "Modernisation d'architectures et migration de pipelines legacy vers des écosystèmes performants et maintenables." },
        { title: "IA Générative & Agents", desc: "Conception de systèmes RAG et orchestration de workflows multi-agents pour automatiser les processus métier complexes." },
        { title: "Data Science", desc: "Analyse prédictive et modélisation avancée pour transformer l'incertitude en décisions basées sur la donnée." },
        { title: "Computer Vision", desc: "Développement d'algorithmes de vision par ordinateur pour l'industrie (Génération d'image, détection, analyse vidéo, ...)." }
      ],
      outro: "Vous souhaitez structurer votre écosystème Data ou déployer des solutions d'IA qui génèrent de la valeur ? Relevons vos défis techniques ensemble.\n\n> [DISCUTONS_DE_VOTRE_PROJET]"
    }
  },
  skills: [
    ...SKILLS_COMMON,
    { name: "Anglais", level: 5, category: "Languages" },
    { name: "Français", level: 5, category: "Languages" },
    { name: "Yoruba", level: 5, category: "Languages" },
    { name: "Fon", level: 5, category: "Languages" },
    { name: "Goun", level: 5, category: "Languages" },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Data Scientist - Stagiaire",
      company: "Allianz France",
      location: "Paris, France",
      date: "Nov 2025 - Présent",
      skills: ["Python", "PySpark", "SAS", "SQL", "Architecture Médaillon", "Git"],
      description: [
        "Pilotage de la migration de bout en bout des pipelines 'Construction Data Mart' de SAS vers une architecture PySpark moderne.",
        "Conception et mise en œuvre d'une Architecture Médaillon (Bronze/Silver/Gold) évolutive pour traiter les données d'assurance.",
        "Rétro-ingénierie et documentation de plus de 15 000 lignes de code SAS existant sur 19 fichiers complexes.",
        "Développement de processeurs PySpark modulaires et réutilisables, et mise en place d'une stratégie de test rigoureuse.",
        "Catalogage de plus de 150 règles métier et 45 jeux de données pour créer un dictionnaire de données complet."
      ],
      logo: "/allianz-france.png"
    },
    {
      id: "exp-2",
      role: "Ingénieur Machine Learning - Stagiaire",
      company: "Groupe Sylvagreg",
      location: "Lille, France",
      date: "Mai 2024 - Août 2024",
      skills: ["PyTorch", "GANs", "Vision par Ordinateur", "Modélisation 3D", "AWS", "Docker"],
      description: [
        "Développement d'algorithmes de Deep Learning avancés (GANs) pour générer des modèles 3D à partir d'images 2D.",
        "Conception et optimisation de pipelines de traitement d'images combinant photogrammétrie 3D et réseaux de neurones.",
        "Mise en œuvre d'une solution cloud pour le traitement massif de données et déploiement d'une application avec interface utilisateur.",
        "Recherche de pointe sur les solutions existantes de modélisation 3D à partir d'images 2D."
      ],
      logo: "/sylvagreg.png"
    },
    {
      id: "exp-3",
      role: "Analyste de Données Commerciales - Stagiaire",
      company: "LYNE ET FRERES SARL",
      location: "Cotonou, Bénin",
      date: "Juin 2022 - Août 2022",
      skills: ["Analyse de Données", "BI", "Python", "Pandas", "SQL", "Tableaux de Bord"],
      description: [
        "Analyse des données de vente et d'import/export pour identifier les tendances et les opportunités commerciales.",
        "Création de tableaux de bord interactifs pour la visualisation des KPI et l'aide à la décision.",
        "Identification des produits, marchés et tendances saisonnières les plus rentables.",
        "Optimisation de la gestion des stocks et de la chaîne d'approvisionnement grâce à des insights basés sur les données."
      ],
      logo: "https://ui-avatars.com/api/?name=LF&background=ffffff&color=d00&bold=true&size=128"
    },
    {
      id: "exp-4",
      role: "Gestion & Maintenance Informatique",
      company: "ONIP",
      location: "Bénin",
      date: "Juin 2021 - Juil 2021",
      skills: ["Support IT", "Gestion de Contenu", "Réseaux", "Audit"],
      description: [
        "Travail au sein du Bureau d'Audit des Systèmes d'Information, des Achats et de la Logistique.",
        "Contribution active à la gestion des systèmes d'information et à la maintenance informatique.",
        "Travail sur le traitement d'images et participation à la gestion du site web de l'ONIP.",
        "Expérience pratique dans le sertissage de câbles réseau RJ45 et la maintenance des équipements."
      ],
      logo: "/onip-benin.png"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Agents IA d'Entreprise",
      description: "Construction d'organisations d'IA multi-agents qui collaborent comme des humains pour des forces de travail autonomes.",
      tags: ["Multi-Agent", "LLM", "Python", "Enterprise AI"],
      category: "AI",
      link: "https://github.com/EngineerProjects/Enterprise-AI"
    },
    {
      id: "proj-2",
      title: "Classification Tumeurs Cérébrales",
      description: "Système d'IA pour la classification des tumeurs cérébrales dans les images IRM utilisant des techniques avancées de vision par ordinateur.",
      tags: ["Vision par Ordinateur", "IA Médicale", "CNN", "Deep Learning"],
      category: "AI",
      link: "https://www.kaggle.com/code/kpoviesistphane/ia-sant-project"
    },
    {
      id: "proj-3",
      title: "Système Chatbot RAG",
      description: "Chatbot avancé avec Génération Augmentée par Récupération (RAG), intégration de recherche web et support multi-langues.",
      tags: ["RAG", "LLM", "NLP", "Base Vectorielle", "FastAPI"],
      category: "AI",
      link: "https://github.com/Amiche02/ollama"
    },
    {
      id: "proj-4",
      title: "Traitement Doc PulseRAG",
      description: "Composant central pour Hello Pulse avec traitement de documents, recherche web et fonctionnalités TTS/STT.",
      tags: ["RAG", "Embeddings", "TTS", "STT", "Recherche"],
      category: "Data",
      link: "https://github.com/EngineerProjects/PulseRAG"
    },
    {
      id: "proj-5",
      title: "Analyse Vidéo Football",
      description: "Système d'IA pour analyser les vidéos de matchs de football amateur utilisant la vision par ordinateur et une infrastructure Big Data.",
      tags: ["CV", "YOLO", "Sports Analytics", "OpenCV"],
      category: "AI",
      link: "https://github.com/Amiche02/Grassroot_football_video_analysis"
    },
    {
      id: "proj-6",
      title: "Détection Maladies Plantes",
      description: "Système de détection de maladies des plantes en temps réel utilisant YOLOv8 avec 96% de précision pour l'agriculture.",
      tags: ["CV", "YOLOv8", "Agriculture", "Web App"],
      category: "AI",
      link: "https://huggingface.co/spaces/Amiche02/Plant-Disease-Detector"
    },
    {
      id: "proj-7",
      title: "Solution BI Retail",
      description: "Solution BI complète pour la chaîne d'approvisionnement et l'analyse des ventes utilisant Docker, Airflow et PowerBI.",
      tags: ["ETL", "Airflow", "PowerBI", "Docker", "PostgreSQL"],
      category: "Data",
      link: "https://github.com/Amiche02/BI_Retail"
    },
    {
      id: "proj-8",
      title: "Analyse Sentiment BERT",
      description: "Implémentation PyTorch pour l'extraction de sentiment de tweets utilisant des modèles BERT et Transformers modernes.",
      tags: ["BERT", "NLP", "PyTorch", "Transformers"],
      category: "AI",
      link: "https://github.com/Amiche02/Bert-sentiment"
    },
    {
      id: "proj-9",
      title: "Sylva3D Photogrammétrie",
      description: "Application GUI dockerisée pour les tâches de photogrammétrie utilisant COLMAP et OpenMVS avec accélération CUDA.",
      tags: ["Photogrammétrie", "3D", "CUDA", "Docker", "GUI"],
      category: "Dev",
      link: "https://github.com/Amiche02/Sylva3dGUI"
    },
    {
      id: "proj-10",
      title: "Prix Immobiliers Avancés",
      description: "Solution de compétition Kaggle utilisant des méthodes d'ensemble et une ingénierie de fonctionnalités avancée.",
      tags: ["ML", "Méthodes Ensemble", "XGBoost", "Feature Eng"],
      category: "Data",
      link: "https://www.kaggle.com/code/kpoviesistphane/house-prices-analysis-with-python"
    },
    {
      id: "proj-11",
      title: "Analyse Code LocalIngest",
      description: "Outil CLI et TUI pour analyser les dépôts de code et générer des rapports Markdown complets.",
      tags: ["CLI", "Go/Python", "TUI", "Outils Développeur"],
      category: "Dev",
      link: "https://github.com/EngineerProjects/LocalIngest"
    },
    {
      id: "proj-12",
      title: "API E-commerce Shop-App",
      description: "API backend e-commerce robuste construite avec Golang, Gin, PostgreSQL et Docker avec authentification JWT.",
      tags: ["Golang", "API", "PostgreSQL", "Docker", "JWT"],
      category: "Dev",
      link: "https://github.com/Amiche02/Shop-app-service"
    },
    {
      id: "proj-13",
      title: "Collection Pipelines ML",
      description: "Collection complète de projets d'apprentissage automatique de bout en bout couvrant divers domaines.",
      tags: ["ML", "Data Science", "Santé", "Recommandation"],
      category: "AI",
      link: "https://github.com/Amiche02/ML_Pipeline"
    },
    {
      id: "proj-14",
      title: "Extraction Table Gemini OCR",
      description: "Système OCR avancé combinant Tesseract et Gemini LLM pour l'extraction précise de tableaux à partir d'images.",
      tags: ["OCR", "Gemini", "LLM", "CV", "Python"],
      category: "AI",
      link: "https://github.com/Amiche02/Gemini-OCR"
    },
    {
      id: "proj-15",
      title: "Transcription Audio2Text",
      description: "Application web simple pour la transcription audio-texte utilisant la reconnaissance vocale avec interface Gradio.",
      tags: ["Audio", "Reconnaissance Vocale", "Gradio", "Web App"],
      category: "AI",
      link: "https://github.com/Amiche02/Audio2text"
    }
  ],
  education: [
    {
      degree: "Diplôme d'Ingénieur - Big Data & DS",
      institution: "JUNIA ISEN",
      location: "Lille, France",
      date: "Sep 2024 - Juil 2025",
      description: "Spécialisation en systèmes distribués, cloud computing et architectures avancées de machine learning."
    },
    {
      degree: "Diplôme d'Ingénieur - Électronique",
      institution: "JUNIA ISEN",
      location: "Rabat, Maroc",
      date: "Sep 2022 - Juil 2023",
      description: "Bases de l'ingénierie axées sur les systèmes numériques, le traitement du signal et l'électronique embarquée."
    },
    {
      degree: "CPGE MPSI (Maths/Physique)",
      institution: "Marie Stella",
      location: "Cotonou, Bénin",
      date: "Sep 2020 - Juil 2022",
      description: "Programme préparatoire intensif axé sur les mathématiques avancées, la physique et les fondamentaux de l'ingénierie."
    }
  ],
  certifications: DATA_EN.certifications, // Usually names stay in English or are proper nouns
  associations: [
    {
      role: "Vice-Président",
      organization: "Commission Réseau JUNIA ALUMNI",
      location: "Lille, France",
      date: "Sep 2024 - Présent",
      skills: ["Leadership", "Gestion d'Événements", "Coordination", "Gestion de Projet"],
      description: [
        "Coordination des travaux de la commission et organisation des événements alumni.",
        "Gestion des réservations de salles et collaboration avec le BDE.",
        "Planification des dates d'événements et supervision des responsables communication."
      ]
    },
    {
      role: "Responsable Communication",
      organization: "Commission Réseau JUNIA ALUMNI",
      location: "Lille, France",
      date: "Sep 2023 - Juil 2024",
      skills: ["Communication", "Relations Alumni", "Réseautage", "Réseaux Sociaux"],
      description: [
        "Contact des anciens de JUNIA ISEN pour partager leurs expériences lors d'afterworks.",
        "Communication des dates et événements aux étudiants.",
        "Liaison entre les anciens et les étudiants actuels."
      ]
    }
  ],
  ui: {
    nav: {
      profile: "PROFIL",
      skills: "COMPÉTENCES",
      experience: "EXPÉRIENCE",
      projects: "PROJETS",
      contact: "CONTACT",
      assistant: "ASSISTANT",
      ai_mode: "MODE_IA"
    },
    dashboard: {
      sys_integrity: "INTÉGRITÉ_SYS",
      power_cell: "BATTERIE",
      uplink: "LIAISON",
      storage: "STOCKAGE",
      admin: "ADMIN",
      admin_access: "ACCÈS ADMIN",
      location: "LOCALISATION",
      stack: "STACK",
      hobbies: "LOISIRS & INTÉRÊTS",
      status_log: "JOURNAL STATUT",
      last_login: "DERNIÈRE_CX",
      firewall: "PARE-FEU",
      root_access: "ACCÈS_ROOT"
    },
    skills: {
      title: "COMPÉTENCES TECHNIQUES",
      scan: "SCAN_PILOTES_NOYAU...",
      loaded: "MODULES_TOTAL_CHARGÉS"
    },
    experience: {
      title: "EXPÉRIENCE PROFESSIONNELLE",
      path: "/VAR/LOG/HISTORIQUE_CARRIÈRE",
      mode: "MODE: LECTURE_SEULE",
      assoc_title: "LEADERSHIP & ASSOCIATIONS",
      edu_title: "FORMATION ACADÉMIQUE",
      cert_title: "LICENCES & CERTIFICATIONS"
    },
    projects: {
      title: "PROJETS",
      access: "ACCÈS FICHIERS PROJETS...",
      all: "Tout",
      ai: "IA",
      data: "Data",
      dev: "Dev"
    },
    comms: {
      header: "ÉTABLIR_CONNEXION",
      direct_uplink: "LIAISON DIRECTE",
      protocol: "SÉLECTIONNER PROTOCOLE COMM",
      linkedin: "RÉSEAU_PRO",
      github: "DÉPÔT_CODE",
      email: "MESSAGE_DIRECT",
      form_title: "INTERFACE_TRANSMISSION_V1.0",
      sender_id: "ID_EXPÉDITEUR",
      enter_name: "VOTRE_NOM",
      return_addr: "ADRESSE_RETOUR",
      enter_email: "VOTRE_EMAIL",
      content: "CONTENU_PAQUET_DONNÉES",
      input_msg: "SAISIR_MESSAGE...",
      initiate: "INITIER_TRANSMISSION",
      uploading: "ENVOI PAQUETS DONNÉES...",
      complete: "TRANSMISSION TERMINÉE",
      failed: "ÉCHEC TRANSMISSION. RÉESSAYER?",
      connecting: "CONNEXION..."
    },
    ai: {
      header: "TERMINAL_INTERROGATION_IA",
      status: "ÉTAT_CX: STABLE // LATENCE: 12ms",
      placeholder: "ENTREZ REQUÊTE...",
      processing: "TRAITEMENT_RÉSEAU_NEURAL...",
      warning: "MODÈLE IA: GEMINI-3-FLASH // ACCÈS RESTREINT: DONNÉES PORTFOLIO",
      initial_msg: `SALUTATIONS. JE SUIS SK_CORE_AI, L'ASSISTANT VIRTUEL DE STÉPHANE KPOVIESSI.
J'AI UN ACCÈS COMPLET À LA BASE DE DONNÉES DE CARRIÈRE.
VOUS POUVEZ M'INTERROGER SUR LES **COMPÉTENCES**, **PROJETS**, **EXPÉRIENCES** OU **CERTIFICATIONS**.

> COMMENT PUIS-JE VOUS AIDER AUJOURD'HUI ?`
    }
  }
};
