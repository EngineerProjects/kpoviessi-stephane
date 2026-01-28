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
  { name: "Pydantic AI", level: 4, category: "ML/AI" },
  { name: "LangChain", level: 4, category: "ML/AI" },
  { name: "Ollama", level: 4, category: "ML/AI" },
  { name: "MCP", level: 4, category: "ML/AI" },

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
    bio: `I help companies explore and leverage their data. My work involves designing predictive models and artificial intelligence systems that address concrete business challenges.

Pillars of expertise:

Generative AI & Agentic Systems: Creating agents capable of using your tools (web search, code, navigation). I develop autonomous systems and custom connectors (MCP) to automate your business processes.

Data Science & Statistics: In-depth analysis and advanced modeling to identify trends and facilitate decision-making.

Computer Vision: Development of vision algorithms (detection, video analysis, generation) tailored to your specific needs.

Data Engineering (Support): Mastery of the technical environment (Python, Go, SQL) to build clean and actionable data pipelines.

Do you have a project in mind or a data-related issue?
Feel free to contact me to discuss it or to see a demo of my latest work.

> [LETS_DISCUSS_YOUR_PROJECT]`,
    marketing: {
      intro: "I help companies explore and leverage their data. My work involves designing predictive models and artificial intelligence systems that address concrete business challenges.\n\nPillars of expertise:",
      pillars: [
        { title: "Generative AI & Agentic Systems", desc: "Creating agents capable of using your tools (web search, code, navigation). I develop autonomous systems and custom connectors (MCP) to automate your business processes." },
        { title: "Data Science & Statistics", desc: "In-depth analysis and advanced modeling to identify trends and facilitate decision-making." },
        { title: "Computer Vision", desc: "Development of vision algorithms (detection, video analysis, generation) tailored to your specific needs." },
        { title: "Data Engineering (Support)", desc: "Mastery of the technical environment (Python, Go, SQL) to build clean and actionable data pipelines." }
      ],
      outro: "Do you have a project in mind or a data-related issue?\nFeel free to contact me to discuss it or to see a demo of my latest work.\n\n> [LETS_DISCUSS_YOUR_PROJECT]"
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
    { name: "English", level: 3, category: "Languages" },
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
      id: "exp-pulse",
      role: "Co-founder & CTO",
      company: "Hello Pulse",
      location: "France",
      date: "Sep 2023 - Present",
      skills: ["Golang", "PostgreSQL", "RAG", "AI Agents", "Docker", "Product Strategy"],
      description: [
        "Co-founded a collaborative AI platform combining team workflows with intelligent assistance as a Student Entrepreneur.",
        "Architected a scalable backend using Golang (Gin), PostgreSQL (pgvector), and MinIO within a Dockerized infrastructure.",
        "Developed 'Pulse Studio' (2nd Product): An AI-powered market research and prototyping tool to validate business opportunities instantly.",
        "Created specialized 'Facilitator' and 'Orchestrator' agents for real-time meeting guidance and automated deliverable generation.",
        "Led technical strategy from MVP to a production-ready solution supporting hierarchical project management."
      ],
      logo: "/hello_pulse.png"
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
      title: "Transcription Audio2Text",
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
  services: [
    {
      id: "srv-2",
      title: "Data Science & Modeling",
      description: "Transformation of historical data into predictive models to anticipate needs and optimize decisions.",
      features: ["Statistical & Exploratory Analysis", "Machine Learning Models", "Forecasting", "Algorithm Optimization"],
      priceRange: "Hourly / Daily Rate",
      icon: "DataScience"
    },
    {
      id: "srv-1",
      title: "AI Systems & Agents Design",
      description: "Development of autonomous intelligent agents and RAG solutions capable of interacting with your business tools.",
      features: ["Advanced RAG Implementation", "Autonomous Agents (LangChain/Pydantic AI)", "Custom Connectors (MCP)", "Complex Workflow Automation"],
      priceRange: "Project-based",
      icon: "AI"
    },
    {
      id: "srv-3",
      title: "Computer Vision & Deep Learning",
      description: "Creation of image and video-based solutions for automation and intelligent analysis.",
      features: ["Object Detection & Segmentation", "Real-time Video Analysis", "Image Generation (GANs/Diffusion)", "Specialized Model Fine-tuning"],
      priceRange: "Daily Rate / Project",
      icon: "ComputerVision"
    }
  ],
  products: [
    {
      id: "prod-1",
      title: "Data Engineering Starter Kit",
      description: "A production-ready boilerplate for modern Data Engineering projects using Docker, Airflow, and PySpark.",
      price: "$49",
      tags: ["Template", "Code", "Docker"],
      link: "#"
    },
    {
      id: "prod-2",
      title: "AI Project Checklist",
      description: "The ultimate guide to planning, executing, and deploying AI projects successfully in enterprise environments.",
      price: "Free / Donation",
      tags: ["E-book", "Guide", "PDF"],
      link: "#"
    }
  ],
  ui: {
    nav: {
      profile: "PROFILE",
      skills: "SKILLS",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
      services: "SERVICES",
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
    services: {
      title: "SERVICES & ASSETS",
      subtitle: "SUPPLY_MODULE_V1.0",
      services_tab: "CONTRACT_SERVICES",
      products_tab: "DIGITAL_ASSETS",
      acquire: "ACQUIRE_ASSET",
      inquire: "INITIATE_PROTOCOL",
      features: "SPECS"
    },
    comms: {
      header: "ESTABLISH_CONNECTION",
      direct_uplink: "DIRECT UPLINK",
      protocol: "SÉLECTIONNER PROTOCOLE COMM",
      linkedin: "PROFESSIONAL_NET",
      github: "CODE_REPOSITORY",
      email: "DIRECT_MESSAGE",
      form_title: "TRANSMISSION_INTERFACE_V1.0",
      sender_id: "SENDER_ID",
      enter_name: "VOTRE_NOM",
      return_addr: "RETURN_SIGNAL_ADDRESS",
      enter_email: "VOTRE_EMAIL",
      content: "CONTENU_PAQUET_DONNÉES",
      input_msg: "SAISIR_MESSAGE...",
      initiate: "INITIER_TRANSMISSION",
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
      // UPDATED EN INITIAL MSG
      initial_msg: `// SK_CORE_AI ONLINE. 

I'm ready. Accessing Stéphane's neural archives. 
Ask me about his stack, his time at Allianz, or what he's building right now.

> Ready to explore?`
    }
  }
};

// --- FRENCH DATA ---

export const DATA_FR: AppData = {
  personalInfo: {
    ...DATA_EN.personalInfo,
    title: "Ingénieur Big Data | Spécialiste IA",
    location: "Île-de-France, France",
    bio: `J'accompagne les entreprises dans l'exploration et la valorisation de leurs données. Mon travail consiste à concevoir des modèles prédictifs et des systèmes d'intelligence artificielle qui répondent à des problématiques métiers concrètes.

Piliers d'expertise :

IA Générative & Systèmes Agentiques : Création d'agents capables d'utiliser vos outils (recherche web, code, navigation). Je développe des systèmes autonomes et des connecteurs personnalisés (MCP) pour automatiser vos processus métier.

Data Science & Statistique : Analyse approfondie et modélisation avancée pour identifier des tendances et faciliter vos prises de décision.

Computer Vision : Développement d'algorithmes de vision (détection, analyse vidéo, génération) adaptés à vos besoins spécifiques.

Data Engineering (Support) : Maîtrise de l'environnement technique (Python, Go, SQL) pour construire des pipelines de données propres et exploitables.

Vous avez un projet en tête ou une problématique liée à vos données ?
N'hésitez pas à me contacter pour en discuter ou pour voir une démonstration de mes derniers travaux.

> [DISCUTONS_DE_VOTRE_PROJET]`,
    marketing: {
      intro: "J'accompagne les entreprises dans l'exploration et la valorisation de leurs données. Mon travail consiste à concevoir des modèles prédictifs et des systèmes d'intelligence artificielle qui répondent à des problématiques métiers concrètes.\n\nPiliers d'expertise :",
      pillars: [
        { title: "IA Générative & Systèmes Agentiques", desc: "Création d'agents capables d'utiliser vos outils (recherche web, code, navigation). Je développe des systèmes autonomes et des connecteurs personnalisés (MCP) pour automatiser vos processus métier." },
        { title: "Data Science & Statistique", desc: "Analyse approfondie et modélisation avancée pour identifier des tendances et faciliter vos prises de décision." },
        { title: "Computer Vision", desc: "Développement d'algorithmes de vision (détection, analyse vidéo, génération) adaptés à vos besoins spécifiques." },
        { title: "Data Engineering (Support)", desc: "Maîtrise de l'environnement technique (Python, Go, SQL) pour construire des pipelines de données propres et exploitables." }
      ],
      outro: "Vous avez un projet en tête ou une problématique liée à vos données ?\nN'hésitez pas à me contacter pour en discuter ou pour voir une démonstration de mes derniers travaux.\n\n> [DISCUTONS_DE_VOTRE_PROJET]"
    },
    socials: {
      linkedin: "https://linkedin.com/in/stephanekpoviessi",
      github: "https://github.com/Amiche02",
      github_org: "https://github.com/EngineerProjects",
      email: "mailto:oastephanekpoviessi@gmail.com"
    }
  },
  skills: [
    ...SKILLS_COMMON,
    { name: "Anglais", level: 3, category: "Languages" },
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
      id: "exp-pulse",
      role: "Co-fondateur & CTO",
      company: "Hello Pulse",
      location: "France",
      date: "Sep 2023 - Présent",
      skills: ["Golang", "PostgreSQL", "RAG", "Agents IA", "Docker", "Stratégie Produit"],
      description: [
        "Co-fondation d'une plateforme collaborative alliant flux de travail d'équipe et assistance IA en tant qu'Étudiant-Entrepreneur.",
        "Architecture backend évolutive utilisant Golang (Gin), PostgreSQL (pgvector) et MinIO sur une infrastructure Docker.",
        "Développement de 'Pulse Studio' (Second Produit) : un outil de prototypage et d'étude de marché propulsé par l'IA pour valider les opportunités.",
        "Développement des agents 'Facilitateur' et 'Orchestrateur' pour le guidage en temps réel et la génération automatisée de livrables.",
        "Pilotage de la stratégie technique du MVP vers une solution de production gérant des projets hiérarchiques complexes."
      ],
      logo: "/hello_pulse.png"
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
  // SERVICES FR
  services: [
    {
      id: "srv-2",
      title: "Data Science & Modélisation",
      description: "Transformation de vos données historiques en modèles de prédiction pour anticiper vos besoins et optimiser vos décisions.",
      features: ["Analyse Statistique & Exploratoire", "Modèles de Machine Learning", "Prévisions & Forecasting", "Optimisation d'Algorithmes"],
      priceRange: "Taux Horaire / TJM",
      icon: "DataScience"
    },
    {
      id: "srv-1",
      title: "Conception de Systèmes IA & Agents",
      description: "Développement d'agents intelligents autonomes et de solutions RAG capables d'interagir avec vos outils métier.",
      features: ["Implémentation RAG Avancée", "Agents Autonomes (LangChain/Pydantic AI)", "Connecteurs Personnalisés (MCP)", "Automatisation de Workflows complexes"],
      priceRange: "Sur Devis",
      icon: "AI"
    },
    {
      id: "srv-3",
      title: "Computer Vision & Deep Learning",
      description: "Création de solutions basées sur l'image et la vidéo pour l'automatisation et l'analyse intelligente.",
      features: ["Détection & Segmentation d'objets", "Analyse Vidéo Temps Réel", "Génération d'Images (GANs/Diffusion)", "Fine-tuning de Modèles spécialisés"],
      priceRange: "TJM / Projet",
      icon: "ComputerVision"
    }
  ],
  // PRODUCTS FR
  products: [
    {
      id: "prod-1",
      title: "Kit Démarrage Data Engineering",
      description: "Un boilerplate prêt pour la production pour les projets Data Engineering modernes utilisant Docker, Airflow et PySpark.",
      price: "49€",
      tags: ["Template", "Code", "Docker"],
      link: "#"
    },
    {
      id: "prod-2",
      title: "Checklist Projet IA",
      description: "Le guide ultime pour planifier, exécuter et déployer des projets d'IA avec succès en environnement d'entreprise.",
      price: "Gratuit / Don",
      tags: ["E-book", "Guide", "PDF"],
      link: "#"
    }
  ],
  ui: {
    nav: {
      profile: "PROFIL",
      skills: "COMPÉTENCES",
      experience: "EXPÉRIENCE",
      projects: "PROJETS",
      services: "SERVICES", // Added
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
    services: { // New UI Labels FR
      title: "SERVICES & ASSETS",
      subtitle: "MODULE_APPROVISIONNEMENT_V1.0",
      services_tab: "SERVICES_CONTRACTUELS",
      products_tab: "ACTIFS_NUMÉRIQUES",
      acquire: "ACQUÉRIR_ASSET",
      inquire: "LANCER_PROTOCOLE",
      features: "SPECS"
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
      // UPDATED FR INITIAL MSG
      initial_msg: `// SK_CORE_AI EN LIGNE.

Système prêt. J'ai accès aux archives de Stéphane. 
Posez-moi des questions sur sa stack technique, son expérience chez Allianz ou ses projets actuels.

> Par quoi voulez-vous commencer ?`
    }
  }
};