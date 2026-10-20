export type Lang = "en" | "fr";
export type L = Record<Lang, string>;
export type LL = Record<Lang, string[]>;

export const person = {
  name: "Stéphane KPOVIESSI",
  email: "oastephanekpoviessi@gmail.com",
  linkedin: "https://linkedin.com/in/stephanekpoviessi",
  github: "https://github.com/Amiche02",
  org: "https://github.com/KPO-Tech",
  seshat: "https://seshat-ai.com",
  location: { en: "Île-de-France, France", fr: "Île-de-France, France" } as L,
  site: "https://kpoviessi-stephane.vercel.app",
};

export const nav: { id: string; label: L }[] = [
  { id: "seshat", label: { en: "Seshat", fr: "Seshat" } },
  { id: "experience", label: { en: "Experience", fr: "Parcours" } },
  { id: "projects", label: { en: "Projects", fr: "Projets" } },
  { id: "skills", label: { en: "Skills", fr: "Compétences" } },
  { id: "journey", label: { en: "Journey", fr: "Trajet" } },
  { id: "contact", label: { en: "Contact", fr: "Contact" } },
];

export const ui = {
  cta: { contact: { en: "Get in touch", fr: "Me contacter" } as L, cv: { en: "Résumé", fr: "CV" } as L },
  nav: { menu: { en: "Menu", fr: "Menu" } as L },
};

export const hero = {
  eyebrow: { en: "Founder · AI & Data Engineer", fr: "Fondateur · Ingénieur IA & Data" } as L,
  available: {
    en: "Open to full-time roles, freelance missions and collaborations",
    fr: "Disponible pour un CDI, des missions freelance et des collaborations",
  } as L,
  titleA: { en: "I build AI systems that", fr: "Je construis des systèmes d'IA qui" } as L,
  titleB: { en: "hold up in production.", fr: "tiennent en production." } as L,
  lead: {
    en: "Founder of Seshat, an open-source Go agent runtime. Engineer in Big Data & Data Science, trained on insurance-grade pipelines at Allianz. I design the whole chain: data, retrieval, agents, and the product around them.",
    fr: "Fondateur de Seshat, un runtime d'agents open source en Go. Ingénieur Big Data & Data Science, formé sur des pipelines de niveau assurance chez Allianz. Je conçois toute la chaîne : données, recherche, agents et produit autour.",
  } as L,
  building: {
    label: { en: "currently building", fr: "en construction" } as L,
    words: {
      en: ["an open-source agent runtime in Go", "hybrid RAG for real documents", "governed multi-agent workflows", "data pipelines that pass parity tests"],
      fr: ["un runtime d'agents open source en Go", "du RAG hybride sur de vrais documents", "des workflows multi-agents gouvernés", "des pipelines qui passent les tests de parité"],
    },
  },
  chips: ["Go", "RAG", "MCP", "PySpark", "PyTorch"],
  stats: [
    { n: 15000, suffix: "+", l: { en: "lines of SAS migrated to PySpark", fr: "lignes SAS migrées vers PySpark" } as L },
    { n: 150, suffix: "+", l: { en: "business rules in production", fr: "règles métier en production" } as L },
    { n: 15, suffix: "+", l: { en: "LLM providers in Seshat", fr: "fournisseurs LLM dans Seshat" } as L },
    { n: 60, suffix: "+", l: { en: "built-in agent tools", fr: "outils d'agents intégrés" } as L },
  ],
};

export const seshat = {
  kicker: { en: "Flagship project", fr: "Projet phare" } as L,
  title: { en: "Seshat: agents you can govern.", fr: "Seshat : des agents que l'on gouverne." } as L,
  lead: {
    en: "An open-source agent runtime written in Go, and the products built on it. Permissions, sandboxing, audit-friendly sessions and recovery are part of the engine, not an afterthought. I design and build all of it, from the runtime to the desktop app.",
    fr: "Un runtime d'agents open source écrit en Go, et les produits construits dessus. Permissions, sandbox, sessions auditables et reprise font partie du moteur, pas d'un ajout tardif. Je conçois et construis l'ensemble, du runtime à l'application de bureau.",
  } as L,
  products: [
    {
      name: "Seshat Runtime",
      status: { en: "Released", fr: "Publié" } as L,
      tone: "live" as const,
      text: {
        en: "The engine. Go agent runtime with tools, sandboxed bash, MCP, RAG, 15+ LLM providers, sessions and permissions. Terminal UI, gRPC and Go SDK. Apache-2.0.",
        fr: "Le moteur. Runtime d'agents en Go avec outils, bash en sandbox, MCP, RAG, 15+ fournisseurs LLM, sessions et permissions. Interface terminal, gRPC et SDK Go. Apache-2.0.",
      } as L,
      href: "https://github.com/KPO-Tech/seshat-runtime",
      cta: { en: "View on GitHub", fr: "Voir sur GitHub" } as L,
    },
    {
      name: "SeshatOS",
      status: { en: "In development", fr: "En développement" } as L,
      tone: "wip" as const,
      text: {
        en: "Local-first desktop app and backend: chat, document intelligence, knowledge, scheduled automation. Runs without any cloud. Source-available.",
        fr: "Application de bureau et backend local-first : chat, intelligence documentaire, connaissance, automatisation planifiée. Fonctionne sans cloud. Source disponible.",
      } as L,
      href: "https://github.com/KPO-Tech/SeshatOS",
      cta: { en: "View on GitHub", fr: "Voir sur GitHub" } as L,
    },
    {
      name: "SeshatCloud",
      status: { en: "In construction", fr: "En construction" } as L,
      tone: "wip" as const,
      text: {
        en: "Multi-tenant server and admin console for organizations: team workspaces, knowledge at scale, automation that keeps running when your laptop is off. Private.",
        fr: "Serveur multi-organisations et console d'administration : espaces d'équipe, connaissance à grande échelle, automatisation qui tourne même ordinateur éteint. Privé.",
      } as L,
      href: "",
      cta: { en: "", fr: "" } as L,
    },
  ],
  points: [
    { en: "Hybrid RAG: ingestion, chunking, embeddings, PostgreSQL/pgvector and Chroma, sourced answers.", fr: "RAG hybride : ingestion, découpage, embeddings, PostgreSQL/pgvector et Chroma, réponses sourcées." },
    { en: "Multi-agent orchestration with MCP, human-in-the-loop approval and scheduled tasks.", fr: "Orchestration multi-agents avec MCP, validation humaine et tâches planifiées." },
    { en: "Real document reading: Docling-based extraction, OCR, tables and layout.", fr: "Lecture documentaire réelle : extraction basée sur Docling, OCR, tableaux et mise en page." },
    { en: "One interface over 15+ providers, cloud or local models, credentials in native OS keychains.", fr: "Une interface unique sur 15+ fournisseurs, modèles cloud ou locaux, identifiants dans les trousseaux natifs." },
  ] as L[],
  stack: ["Go", "Python", "TypeScript", "Electron", "React", "PostgreSQL", "pgvector", "gRPC", "MCP", "Docker"],
  links: {
    site: { en: "Visit seshat-ai.com", fr: "Visiter seshat-ai.com" } as L,
    org: { en: "KPO-Tech on GitHub", fr: "KPO-Tech sur GitHub" } as L,
  },
};

export interface Role {
  company: string;
  role: L;
  period: L;
  place: L;
  summary: L;
  points: L[];
  stack: string[];
  links?: { label: string; href: string }[];
  current?: boolean;
}

export const experience = {
  title: { en: "Experience", fr: "Parcours" } as L,
  lead: {
    en: "From industrial data pipelines to my own agent platform.",
    fr: "Des pipelines de données industriels à ma propre plateforme d'agents.",
  } as L,
  roles: [
    {
      company: "Seshat AI",
      role: { en: "Founder & AI Engineer", fr: "Fondateur & ingénieur IA" },
      period: { en: "Sep 2026 – Present", fr: "Sept. 2026 – Aujourd'hui" },
      place: { en: "Île-de-France", fr: "Île-de-France" },
      summary: {
        en: "Open-source agentic AI and automation platform, plus AI integration work for teams that want to keep control of their data.",
        fr: "Plateforme open source d'IA agentique et d'automatisation, et missions d'intégration d'IA pour des équipes qui veulent garder la main sur leurs données.",
      },
      points: [
        { en: "Architecture of a modular platform: Go runtime, local and multi-tenant cloud backends, Electron/React desktop app, admin console.", fr: "Architecture d'une plateforme modulaire : runtime Go, backends local et cloud multi-organisations, application Electron/React, console d'administration." },
        { en: "Hybrid RAG engine and agent orchestration with tool calling, MCP, permissions, audit and scheduled tasks.", fr: "Moteur de RAG hybride et orchestration d'agents avec appel d'outils, MCP, permissions, audit et tâches planifiées." },
        { en: "Release process, documentation site, CI and open-source governance across four repositories.", fr: "Processus de release, site de documentation, CI et gouvernance open source sur quatre dépôts." },
      ],
      stack: ["Go", "Python", "TypeScript", "PostgreSQL", "pgvector", "MCP", "Electron"],
      links: [{ label: "seshat-ai.com", href: "https://seshat-ai.com" }, { label: "GitHub", href: "https://github.com/KPO-Tech" }],
      current: true,
    },
    {
      company: "Allianz France",
      role: { en: "Data Engineer / Data Scientist (internship)", fr: "Ingénieur data / data scientist (stage)" },
      period: { en: "Nov 2025 – Apr 2026", fr: "Nov. 2025 – Avr. 2026" },
      place: { en: "Paris · P4D, Advanced Data & Climate", fr: "Paris · P4D, Advanced Data & Climate" },
      summary: {
        en: "Owned the end-to-end migration of an insurance datamart from a legacy SAS environment to a modern PySpark architecture.",
        fr: "Responsable de la migration de bout en bout d'un datamart d'assurance d'un environnement SAS historique vers une architecture PySpark moderne.",
      },
      points: [
        { en: "Medallion architecture (Bronze / Silver / Gold) on Azure Databricks, integrating 150+ business rules across portfolios, capital and premiums.", fr: "Architecture Médaillon (Bronze / Silver / Gold) sur Azure Databricks, intégrant plus de 150 règles métier sur portefeuilles, capitaux et émissions." },
        { en: "Reverse-engineered and documented 15,000+ lines of SAS (19 files) to preserve every piece of business logic.", fr: "Rétro-ingénierie et documentation de plus de 15 000 lignes de SAS (19 fichiers) pour préserver toute la logique métier." },
        { en: "Automated SAS vs Python parity tests and schema validation, securing non-regression before production.", fr: "Tests de parité SAS / Python et validation de schémas automatisés pour sécuriser la non-régression avant la mise en production." },
        { en: "Geospatial data quality pipeline: GPS validation, address reconstruction, fewer false positives in reporting.", fr: "Pipeline de qualité de données géospatiales : validation GPS, reconstitution d'adresses, moins de faux positifs dans le reporting." },
      ],
      stack: ["PySpark", "Azure Databricks", "Python", "SAS", "SQL", "Parquet"],
    },
    {
      company: "Hello Pulse",
      role: { en: "Co-founder & CTO", fr: "Co-fondateur & CTO" },
      period: { en: "Sep 2023 – Present", fr: "Sept. 2023 – Aujourd'hui" },
      place: { en: "France", fr: "France" },
      summary: {
        en: "AI-augmented collaborative platform for brainstorming, facilitation and prototyping. I lead the technical strategy and wrote most of the codebase.",
        fr: "Plateforme collaborative augmentée par l'IA pour le brainstorming, la facilitation et le prototypage. Je pilote la stratégie technique et ai écrit l'essentiel du code.",
      },
      points: [
        { en: "Go (Fiber) backend with WebSocket real-time collaboration, PostgreSQL, Redis pub/sub and S3-compatible storage.", fr: "Backend Go (Fiber) avec collaboration temps réel WebSocket, PostgreSQL, Redis pub/sub et stockage compatible S3." },
        { en: "Collaborative canvas (Next.js, Konva), rich-text documents, team calendar and AI assistant streaming over SSE.", fr: "Canvas collaboratif (Next.js, Konva), documents riches, calendrier d'équipe et assistant IA en streaming SSE." },
        { en: "Auth stack built in-house: JWT, HttpOnly cookies, revocable sessions, TOTP MFA. CI with vet, tests and govulncheck.", fr: "Authentification maison : JWT, cookies HttpOnly, sessions révocables, MFA TOTP. CI avec vet, tests et govulncheck." },
      ],
      stack: ["Go", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    },
    {
      company: "Groupe Sylvagreg",
      role: { en: "Machine Learning Engineer (internship)", fr: "Ingénieur machine learning (stage)" },
      period: { en: "May – Aug 2024", fr: "Mai – Août 2024" },
      place: { en: "Lille", fr: "Lille" },
      summary: {
        en: "R&D on a 3D reconstruction solution from 2D images for a construction group.",
        fr: "R&D sur une solution de reconstruction 3D à partir d'images 2D pour un groupe de construction.",
      },
      points: [
        { en: "State-of-the-art review and benchmark, then generative models (GANs) in PyTorch combined with photogrammetry.", fr: "État de l'art et benchmark, puis modèles génératifs (GANs) sous PyTorch combinés à la photogrammétrie." },
        { en: "Automated preprocessing, augmentation and inference pipelines; Docker, AWS deployment and a visualization interface.", fr: "Automatisation des chaînes de prétraitement, d'augmentation et d'inférence ; Docker, déploiement AWS et interface de visualisation." },
      ],
      stack: ["PyTorch", "Computer Vision", "Photogrammetry", "Docker", "AWS"],
      links: [{ label: "Sylva3D", href: "https://github.com/EngineerProjects/sylva3D" }, { label: "Sylva3D GUI", href: "https://github.com/EngineerProjects/Sylva3dGUI" }],
    },
    {
      company: "Lyne et Frères",
      role: { en: "Data Analyst", fr: "Data analyst" },
      period: { en: "2023 – 2025", fr: "2023 – 2025" },
      place: { en: "Benin · remote", fr: "Bénin · à distance" },
      summary: {
        en: "Strategic support missions for a family business in agriculture and trade: my first real-world deployments with non-technical teams.",
        fr: "Missions d'appui stratégique pour une entreprise familiale d'agriculture et de commerce : mes premiers déploiements en conditions réelles auprès d'équipes non techniques.",
      },
      points: [
        { en: "Commercial, operational and agricultural analysis with Python/Pandas to track KPIs and support decisions.", fr: "Analyse commerciale, opérationnelle et agricole avec Python/Pandas pour suivre les indicateurs et éclairer les décisions." },
        { en: "Dashboards and reports in Streamlit and web interfaces; internal open-source AI tools (OpenWebUI) with staff onboarding.", fr: "Tableaux de bord et rapports Streamlit et web ; outils d'IA internes open source (OpenWebUI) avec accompagnement des équipes." },
      ],
      stack: ["Python", "Pandas", "Streamlit", "OpenWebUI"],
    },
  ] as Role[],
};

export interface Project {
  title: string;
  tag: L;
  text: L;
  stack: string[];
  href?: string;
  note?: L;
  featured?: boolean;
}

export const projects = {
  title: { en: "Selected work", fr: "Projets sélectionnés" } as L,
  lead: {
    en: "Agents, data pipelines and computer vision. Most of it is open source.",
    fr: "Agents, pipelines de données et vision par ordinateur. Presque tout est open source.",
  } as L,
  viewAll: { en: "All repositories on GitHub", fr: "Tous les dépôts sur GitHub" } as L,
  items: [
    {
      title: "Tech Watch Agent",
      tag: { en: "Agents", fr: "Agents" },
      text: {
        en: "Multi-agent research and technology watch: topic planning, multi-source collection, key-point extraction, sourced summaries and targeted reports. LangGraph workflows, FastAPI backend, pgvector semantic memory, React control UI.",
        fr: "Veille multi-agents : planification par sujet, collecte multi-sources, extraction des points clés, synthèses sourcées et rapports ciblés. Workflows LangGraph, backend FastAPI, mémoire sémantique pgvector, interface React.",
      },
      stack: ["LangGraph", "FastAPI", "pgvector", "React", "Docker"],
      href: "https://github.com/EngineerProjects/tech-watch-agent",
      featured: true,
    },
    {
      title: "LocalIngest",
      tag: { en: "Developer tool", fr: "Outil développeur" },
      text: {
        en: "CLI and terminal UI that analyzes a code repository and generates a Markdown report (structure, source preview, statistics) for documentation or LLM ingestion.",
        fr: "CLI et interface terminal qui analyse un dépôt de code et génère un rapport Markdown (structure, aperçu des sources, statistiques) pour la documentation ou l'ingestion par un LLM.",
      },
      stack: ["Python", "CLI", "TUI"],
      href: "https://github.com/KPO-Tech/LocalIngest",
      featured: true,
    },
    {
      title: "Advanced Football Video Analysis",
      tag: { en: "Computer vision", fr: "Vision par ordinateur" },
      text: {
        en: "Detection and tracking of players and ball on match footage, movement analysis and extraction of usable data for amateur sport.",
        fr: "Détection et suivi des joueurs et du ballon sur des vidéos de match, analyse des mouvements et extraction de données exploitables pour le sport amateur.",
      },
      stack: ["YOLO", "OpenCV", "Python"],
      href: "https://github.com/EngineerProjects/Advanced-Football-Video-Analysis",
      featured: true,
    },
    {
      title: "BI Retail",
      tag: { en: "Data engineering", fr: "Data engineering" },
      text: {
        en: "Sales and supply-chain data pipeline: generation and ingestion, PySpark transformations, PostgreSQL warehouse, Airflow orchestration and Power BI dashboards.",
        fr: "Chaîne de données ventes et supply chain : génération et ingestion, transformations PySpark, entrepôt PostgreSQL, orchestration Airflow et tableaux de bord Power BI.",
      },
      stack: ["PySpark", "Airflow", "PostgreSQL", "Power BI", "Docker"],
      href: "https://github.com/EngineerProjects/BI_Retail",
    },
    {
      title: "Sylva3D",
      tag: { en: "Computer vision", fr: "Vision par ordinateur" },
      text: {
        en: "2D-to-3D reconstruction engine and its desktop interface, built during the Sylvagreg internship: photogrammetry plus PyTorch generative models.",
        fr: "Moteur de reconstruction 2D vers 3D et son interface, construits pendant le stage Sylvagreg : photogrammétrie et modèles génératifs PyTorch.",
      },
      stack: ["PyTorch", "Photogrammetry", "GUI"],
      href: "https://github.com/EngineerProjects/sylva3D",
    },
    {
      title: "Waste-collection robot",
      tag: { en: "Robotics & vision", fr: "Robotique & vision" },
      text: {
        en: "AceObject: detects, classifies and tracks waste while distinguishing it from obstacles, then plans a collection route with Dijkstra. Reinforcement learning explored for obstacle avoidance.",
        fr: "AceObject : détecte, classe et suit les déchets en les distinguant des obstacles, puis planifie un itinéraire de collecte avec Dijkstra. Piste d'apprentissage par renforcement explorée pour l'évitement.",
      },
      stack: ["YOLOv8", "OpenCV", "Dijkstra", "RL"],
    },
    {
      title: "Solar irradiance forecasting",
      tag: { en: "Machine learning", fr: "Machine learning" },
      text: {
        en: "Weather data preparation, temporal features and forecasting model evaluation, with a REST API serving the results.",
        fr: "Préparation de données météo, variables temporelles et évaluation de modèles de prévision, avec une API REST pour exposer les résultats.",
      },
      stack: ["Scikit-learn", "Pandas", "FastAPI"],
      href: "https://github.com/EngineerProjects/solar-forecasting",
    },
    {
      title: "Job-hunting skills",
      tag: { en: "Agent skills", fr: "Skills d'agents" },
      text: {
        en: "A suite of skills for Claude Code and MCP-compatible runtimes: deterministic browser automation, job analysis, CV adaptation and application tracking with a human in the loop.",
        fr: "Une suite de skills pour Claude Code et les runtimes compatibles MCP : automatisation de navigateur déterministe, analyse d'offres, adaptation de CV et suivi des candidatures avec validation humaine.",
      },
      stack: ["MCP", "Playwright", "Agent skills"],
      href: "https://github.com/EngineerProjects/job-hunting-skills",
    },
  ] as Project[],
};

export const skills = {
  title: { en: "Skills", fr: "Compétences" } as L,
  lead: {
    en: "The tools I reach for, grouped by what they are used for.",
    fr: "Les outils que j'utilise, regroupés selon leur usage.",
  } as L,
  groups: [
    { name: { en: "Agents & LLM systems", fr: "Agents & systèmes LLM" } as L, items: ["Seshat runtime", "MCP", "Tool calling", "LangGraph", "LangChain", "Pydantic AI", "RAG & hybrid search", "Embeddings", "Ollama", "Hugging Face"] },
    { name: { en: "Backend & product", fr: "Backend & produit" } as L, items: ["Go", "Python", "FastAPI", "TypeScript", "Next.js / React", "Electron", "gRPC", "REST & SSE", "WebSocket"] },
    { name: { en: "Data engineering", fr: "Data engineering" } as L, items: ["PySpark", "Azure Databricks", "Medallion architecture", "PostgreSQL / pgvector", "Airflow", "Pandas / NumPy", "SQL", "Parquet", "Data quality"] },
    { name: { en: "Machine learning & vision", fr: "Machine learning & vision" } as L, items: ["PyTorch", "Scikit-learn", "TensorFlow", "YOLO / OpenCV", "GANs", "Photogrammetry", "Reinforcement learning"] },
    { name: { en: "Cloud & delivery", fr: "Cloud & livraison" } as L, items: ["Docker", "Azure", "AWS", "Git & GitHub Actions", "CI/CD", "Power BI", "Streamlit"] },
  ],
};

export const journey = {
  title: { en: "From Cotonou to Paris.", fr: "De Cotonou à Paris." } as L,
  lead: {
    en: "Four cities, three languages learned on the way, and one constant: building things people can use.",
    fr: "Quatre villes, des langues apprises en chemin, et une constante : construire des choses utiles.",
  } as L,
  stops: [
    { city: "Cotonou", country: { en: "Benin", fr: "Bénin" } as L, years: "2020 – 2022", text: { en: "Native speaker of Fon, Yoruba and Goun. Preparatory class in maths and physics (MPSI) at Marie Stella.", fr: "Langues maternelles : fon, yoruba et goun. Classe préparatoire MPSI (maths et physique) à Marie Stella." } as L },
    { city: "Rabat", country: { en: "Morocco", fr: "Maroc" } as L, years: "2022 – 2023", text: { en: "Bachelor in Electronics & Digital Systems at JUNIA ISEN. Where the code started to meet hardware.", fr: "Licence Électronique & Systèmes numériques à JUNIA ISEN. Là où le code a rencontré le matériel." } as L },
    { city: "Lille", country: { en: "France", fr: "France" } as L, years: "2023 – 2026", text: { en: "Engineering degree in Big Data & Data Science, a first ML internship, the alumni network, and the first lines of Hello Pulse.", fr: "Diplôme d'ingénieur Big Data & Data Science, un premier stage en ML, le réseau alumni et les premières lignes de Hello Pulse." } as L },
    { city: "Île-de-France", country: { en: "France", fr: "France" } as L, years: "2025 –", text: { en: "Insurance-grade data at Allianz, then Seshat full time. Building from here.", fr: "Data de niveau assurance chez Allianz, puis Seshat à plein temps. On construit d'ici." } as L },
  ],
  quests: {
    label: { en: "Side quests", fr: "Quêtes annexes" } as L,
    items: [
      { en: "Drumming", fr: "Batterie" },
      { en: "Strategy games", fr: "Jeux de stratégie" },
      { en: "Open source", fr: "Open source" },
      { en: "Building communities", fr: "Construire des communautés" },
      { en: "Entrepreneurship", fr: "Entrepreneuriat" },
    ] as L[],
  },
};

export const background = {
  title: { en: "Education & more", fr: "Formation & engagements" } as L,
  education: {
    label: { en: "Education", fr: "Formation" } as L,
    items: [
      { t: { en: "Engineering degree: Big Data & Data Science", fr: "Diplôme d'ingénieur : Big Data & Data Science" } as L, s: "JUNIA ISEN · Lille", p: "2026" },
      { t: { en: "Bachelor: Electronics & Digital Systems", fr: "Licence : Électronique & Systèmes numériques" } as L, s: "JUNIA ISEN · Rabat", p: "2023" },
      { t: { en: "Preparatory class (MPSI)", fr: "Classe préparatoire (MPSI)" } as L, s: "Marie Stella · Cotonou", p: "2020 – 2022" },
    ],
  },
  certs: {
    label: { en: "Certifications", fr: "Certifications" } as L,
    items: [
      { t: "Microsoft AI Engineer Career Path", s: "Microsoft Learn", p: { en: "In progress", fr: "En cours" } as L, href: "https://learn.microsoft.com/fr-fr/training/career-paths/ai-engineer" },
      { t: "Create ML Models in Microsoft Azure", s: "Microsoft / Coursera", p: { en: "2023", fr: "2023" } as L, href: "https://www.coursera.org/account/accomplishments/verify/LU2ZQ972BWNF" },
      { t: "Supervised ML: Regression & Classification", s: "DeepLearning.AI / Stanford", p: { en: "2023", fr: "2023" } as L, href: "https://www.coursera.org/account/accomplishments/verify/MWJS4Q3S2C3L" },
      { t: "Data Analysis with Python", s: "freeCodeCamp", p: { en: "2023", fr: "2023" } as L, href: "https://www.freecodecamp.org/certification/amiche/data-analysis-with-python-v7" },
    ],
  },
  community: {
    label: { en: "Community", fr: "Engagement" } as L,
    org: "JUNIA Alumni · " ,
    items: [
      { t: { en: "Vice-president", fr: "Vice-président" } as L, p: { en: "Sep 2024 – Aug 2025", fr: "Sept. 2024 – Août 2025" } as L, d: { en: "Animated the alumni network and organized professional events.", fr: "Animation du réseau alumni et organisation d'événements professionnels." } as L },
      { t: { en: "Communications lead", fr: "Responsable communication" } as L, p: { en: "Sep 2023 – Aug 2024", fr: "Sept. 2023 – Août 2024" } as L, d: { en: "Announcements and promotion of network initiatives.", fr: "Annonces et valorisation des initiatives du réseau." } as L },
    ],
  },
  languages: {
    label: { en: "Languages", fr: "Langues" } as L,
    items: [
      { t: { en: "French", fr: "Français" } as L, d: { en: "Native", fr: "Langue maternelle" } as L },
      { t: { en: "English", fr: "Anglais" } as L, d: { en: "B2, Linguaskill Business", fr: "B2, Linguaskill Business" } as L },
      { t: { en: "Yoruba, Fon, Goun", fr: "Yoruba, fon, goun" } as L, d: { en: "Native", fr: "Langues maternelles" } as L },
    ],
  },
};

export const contact = {
  title: { en: "Let's build something.", fr: "Construisons quelque chose." } as L,
  lead: {
    en: "A role, a mission, an AI project to scope, or just a question about Seshat. Write to me, I answer quickly.",
    fr: "Un poste, une mission, un projet d'IA à cadrer, ou une simple question sur Seshat. Écrivez-moi, je réponds vite.",
  } as L,
  form: {
    name: { en: "Name", fr: "Nom" } as L,
    email: { en: "Email", fr: "Email" } as L,
    message: { en: "Message", fr: "Message" } as L,
    send: { en: "Send message", fr: "Envoyer" } as L,
    sending: { en: "Sending…", fr: "Envoi…" } as L,
    sent: { en: "Message sent. Thank you, I'll reply soon.", fr: "Message envoyé. Merci, je réponds bientôt." } as L,
    error: { en: "Something went wrong. Please email me directly.", fr: "Une erreur est survenue. Écrivez-moi directement par email." } as L,
  },
  copy: { en: "Copy email", fr: "Copier l'email" } as L,
  copied: { en: "Copied", fr: "Copié" } as L,
  resumes: {
    label: { en: "Résumés", fr: "CV" } as L,
    items: [
      { name: { en: "AI / GenAI Engineer", fr: "AI / GenAI Engineer" } as L, en: "/cv/cv-genai-engineer-en.pdf", fr: "/cv/cv-genai-engineer-fr.pdf" },
      { name: { en: "Machine Learning / AI Engineer", fr: "Machine Learning / AI Engineer" } as L, en: "/cv/cv-ml-ai-engineer-en.pdf", fr: "/cv/cv-ml-ai-engineer-fr.pdf" },
      { name: { en: "Data Analyst / Data Engineer", fr: "Data Analyst / Data Engineer" } as L, en: "/cv/cv-data-engineer-en.pdf", fr: "/cv/cv-data-engineer-fr.pdf" },
    ],
  },
};

export const footer = {
  built: { en: "Designed and built by Stéphane. Next.js, Tailwind, Framer Motion.", fr: "Conçu et développé par Stéphane. Next.js, Tailwind, Framer Motion." } as L,
};

export const chat = {
  title: { en: "Ask Lys", fr: "Demander à Lys" } as L,
  sub: { en: "Stéphane's AI assistant", fr: "L'assistante IA de Stéphane" } as L,
  initial: {
    en: "Hi, I'm Lys, Stéphane's AI assistant. Ask me about his work, Seshat or his availability.",
    fr: "Bonjour, je suis Lys, l'assistante IA de Stéphane. Posez-moi vos questions sur son travail, Seshat ou sa disponibilité.",
  } as L,
  placeholder: { en: "Type your question…", fr: "Votre question…" } as L,
  error: { en: "Sorry, something went wrong. Please try again, or email Stéphane directly.", fr: "Désolée, une erreur est survenue. Réessayez, ou écrivez directement à Stéphane." } as L,
  reset: { en: "Clear conversation", fr: "Effacer la conversation" } as L,
  notif: { en: "Questions about Stéphane? Ask Lys.", fr: "Des questions sur Stéphane ? Demandez à Lys." } as L,
  close: { en: "Close", fr: "Fermer" } as L,
  open: { en: "Open chat", fr: "Ouvrir le chat" } as L,
};
