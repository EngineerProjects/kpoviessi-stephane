export const personalInfo = {
  name: "Stéphane KPOVIESSI",
  title: "AI Systems & Data Infrastructure Engineer",
  location: "Paris Metropolitan Area, France",
  email: "oastephanekpoviessi@gmail.com",
  phone: "+33 7 48 59 47 13",
  linkedin: "https://linkedin.com/in/stephanekpoviessi",
  github: "https://github.com/Amiche02",
  githubOrg: "https://github.com/EngineerProjects",
};

export const resumeLinks = [
  {
    label: "Resume: Data Infra & Systems",
    href: "/cv-stephane-kpoviessi-data-engineer.pdf",
  },
  {
    label: "Resume: AI & Machine Learning",
    href: "/cv-stephane-kpoviessi-data-scientist.pdf",
  },
];

export const about = {
  summary:
    "AI Systems & Data Infrastructure Engineer specializing in building robust, large-scale data pipelines, autonomous multi-agent workflows, and deterministic runtime systems. I design and build production-grade platforms where analytical rigor meets highly reliable software execution.",
  detail:
    "My engineering practice lies at the intersection of data platform architecture, machine learning systems, computer vision, and local developer environments. I have architected legacy-to-distributed migrations at Allianz France, engineered core Go-based multi-agent engines as a startup CTO, optimized deep generative vision pipelines (GANs) at Groupe Sylvagreg, and developed experimental local developer toolkits and isolated agent sandboxes.",
  expertise: [
    {
      title: "Data Platform Engineering",
      description:
        "Architecting highly reliable Bronze/Silver/Gold Medallion pipelines, distributed PySpark systems, data quality validations, and transactional storage structures for massive corporate datasets.",
      icon: "database",
    },
    {
      title: "Autonomous Agentic Systems",
      description:
        "Designing multi-agent state machines, context-aware RAG pipelines, LangGraph and Pydantic AI orchestration, Model Context Protocol (MCP) servers, and isolated runtime sandboxes.",
      icon: "brain",
    },
    {
      title: "Computer Vision & Generative AI",
      description:
        "Developing real-time video processing pipelines, YOLO object tracking, image segmentation with SAM, GAN optimization with PyTorch, and procedural 3D environment rendering.",
      icon: "eye",
    },
    {
      title: "Systems & Developer Tooling",
      description:
        "Building lightweight CLI/TUI developer utilities, custom local repository parsers, gRPC microservices, and desktop system integrations using Go, Rust, and Electron.",
      icon: "wrench",
    },
  ],
};

export const skills = {
  data_engineering: {
    label: "Data Engineering",
    items: [
      { name: "PySpark", level: "Expert" },
      { name: "Databricks", level: "Advanced" },
      { name: "Azure Data Lake Storage", level: "Advanced" },
      { name: "Parquet / Delta Lake", level: "Advanced" },
      { name: "PostgreSQL / pgvector", level: "Advanced" },
      { name: "Pandas / NumPy", level: "Expert" },
      { name: "Apache Airflow", level: "Intermediate" },
      { name: "Docker", level: "Advanced" },
      { name: "Redis / In-Memory Cache", level: "Intermediate" },
      { name: "SQLite / GORM", level: "Advanced" },
    ],
  },
  ml_ai: {
    label: "AI Systems & Orchestration",
    items: [
      { name: "LangGraph / LangChain", level: "Advanced" },
      { name: "LlamaIndex", level: "Intermediate" },
      { name: "Pydantic AI", level: "Advanced" },
      { name: "Ollama / Local LLMs", level: "Advanced" },
      { name: "OpenAI / Anthropic APIs", level: "Advanced" },
      { name: "Model Context Protocol (MCP)", level: "Advanced" },
      { name: "PyTorch", level: "Expert" },
      { name: "Scikit-Learn", level: "Expert" },
      { name: "Computer Vision (YOLO/OpenCV/SAM)", level: "Advanced" },
      { name: "Generative Adversarial Nets (GANs)", level: "Advanced" },
      { name: "Vector Search & Embeddings", level: "Advanced" },
    ],
  },
  programming: {
    label: "Computation & Core",
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
    role: "Data Engineer",
    internship: true,
    company: "Allianz France",
    location: "Paris La Défense, France",
    period: "Nov 2025 - Apr 2026",
    summary:
      "Led the end-to-end modernization of critical commercial property and liability data pipelines. Successfully migrated legacy SAS codebases to a distributed PySpark architecture on Databricks with absolute parity.",
    highlights: [
      {
        category: "Modern Medallion Architecture",
        points: [
          "Designed and built a modular Bronze/Silver/Gold pipeline structuring portfolios, asset capitals, and operational emissions.",
          "Restructured transactional staging to store data efficiently in optimized, compressed Parquet tables, improving downstream read times.",
        ],
      },
      {
        category: "Legacy Deconstruction",
        points: [
          "Deconstructed, reverse-engineered, and documented over 15,000 lines of legacy SAS scripts across 19 interconnected business modules.",
          "Preserved 100% of complex insurance accounting and risk business logic during translation to PySpark (Python 3.9+).",
        ],
      },
      {
        category: "Functional Parity & Quality Assurance",
        points: [
          "Designed an automated schema validation framework that rejects corrupted or structural-shifting data points at ingestion.",
          "Implemented functional parity testing pipelines to run SAS and PySpark nodes side-by-side, validating and correcting data down to the float decimal.",
        ],
      },
      {
        category: "Geospatial Data Cleansing",
        points: [
          "Designed an ETL pipeline for raw coordinates: parsing and reconstructing GPS locations, validating postal address syntax, and resolving outliers.",
          "Reduced address parsing false positives, establishing a deterministic baseline for geographic risk reporting.",
        ],
      },
    ],
    stack: ["Python", "PySpark", "Databricks", "Azure Data Lake", "SAS", "SQL", "Parquet", "Git"],
    logo: "/images/allianz_france.png",
    featured: true,
  },
  {
    role: "Co-Founder & CTO",
    company: "Hello Pulse",
    location: "France (Remote)",
    period: "Sep 2023 - Present",
    summary:
      "Co-founded and engineered an AI-orchestrated collaborative workspace platform. Led the technical team, designed backend infrastructure, and prototyped agentic engines.",
    highlights: [
      {
        category: "Infrastructure & Backend",
        points: [
          "Architected a scalable, low-latency API backend using Go (Golang), PostgreSQL, and Docker.",
          "Structured database indexes and connection pooling to handle high-frequency transactional data operations safely.",
        ],
      },
      {
        category: "Multi-Agent Automation",
        points: [
          "Designed multi-agent routing engines to automate product research, feature validation, and deliverable compilation.",
          "Configured modular agent communication paths, enabling seamless data handover between specialized LLM agents.",
        ],
      },
      {
        category: "Product & Technical Strategy",
        points: [
          "Guided technical direction from initial proof-of-concept (MVP) into scalable production architecture.",
          "Mentored engineers on system boundaries, API contracts, and clean interface integration patterns.",
        ],
      },
    ],
    stack: ["Go", "PostgreSQL", "Docker", "LLMs", "AI Agents", "Product Engineering"],
    logo: "/images/hello_pulse.png",
    featured: true,
  },
  {
    role: "Machine Learning Engineer",
    internship: true,
    company: "Groupe Sylvagreg",
    location: "Lille, France",
    period: "May 2024 - Aug 2024",
    summary:
      "Researched and built a generative computer vision solution to construct printable, geometrically coherent 3D models directly from single 2D structural images.",
    highlights: [
      {
        category: "3D Reconstruction Research",
        points: [
          "Conducted state-of-the-art benchmarks on deep-learning photogrammetry and single-view 3D mesh synthesis.",
        ],
      },
      {
        category: "Generative Modeling & PyTorch",
        points: [
          "Designed, optimized, and trained custom Generative Adversarial Networks (GANs) using PyTorch.",
          "Enforced structural and geometric consistency, reducing deformities in generative meshes.",
        ],
      },
      {
        category: "Image Ingestion Pipelines",
        points: [
          "Built preprocessing and data augmentation workflows using PIL and specialized OpenCV operations.",
          "Implemented a structured end-to-end pipeline mapping 2D inputs to watertight, printable 3D meshes.",
        ],
      },
      {
        category: "Technical Documentation",
        points: [
          "Documented model training parameters, loss curves, and mathematical constraints, enabling smooth knowledge handoff.",
        ],
      },
    ],
    stack: ["Python", "PyTorch", "OpenCV", "GANs", "3D Modeling", "Photogrammetry", "PIL"],
    logo: "/images/sylvagreg.png",
    featured: false,
  },
  {
    role: "Business Data Analyst",
    internship: true,
    company: "LYNE ET FRERES SARL",
    location: "Cotonou, Benin",
    period: "Jun 2021 - Aug 2022",
    summary:
      "Analyzed commercial sales, import/export records, and maritime shipping logistics to optimize supply chain inventory flow and commercial performance.",
    highlights: [
      {
        category: "Sales & Flow Intelligence",
        points: [
          "Structured historic transactional datasets, uncovering seasonal demand trends and highly profitable import routes.",
          "Assisted inventory managers in establishing minimum safety stock thresholds to reduce transit bottlenecks.",
        ],
      },
      {
        category: "Logistics Optimization",
        points: [
          "Analyzed shipping timetables and transit logs, simulating supply chain pathways to decrease delivery latency and shipping costs.",
        ],
      },
      {
        category: "Customer Analytics",
        points: [
          "Compiled customer purchase behaviors into structured datasets, segmenting buyers to enable personalized campaign routing.",
        ],
      },
      {
        category: "BI Dashboarding",
        points: [
          "Built interactive reporting pipelines using Power BI and custom SQL views, providing executives with clean KPI visualizations.",
        ],
      },
    ],
    stack: ["Data Analysis", "SQL", "PostgreSQL", "Power BI", "Excel", "Logistics Modeling"],
    logo: "",
    featured: false,
  },
];

export const associativeExperiences = [
  {
    role: "Vice President",
    organization: "JUNIA Alumni",
    location: "Lille, France",
    period: "2024 - Present",
    points: [
      "Coordinated committee operations, organized networking summits, and supervised creative design and event production teams.",
      "Managed active student and alumni community integrations in partnership with the student union.",
    ],
  },
  {
    role: "Head of Communications",
    organization: "JUNIA Alumni",
    location: "Lille, France",
    period: "2023 - 2024",
    points: [
      "Orchestrated professional alumni networking events, managed digital community engagement, and synchronized student-alumni experience sharing.",
    ],
  },
];

export const projects = [
  {
    title: "Nexus AI",
    context:
      "Modern AI assistants require isolated runtimes, extensible skills, persistent sessions, and secure local environments to act as true operating systems.",
    solution:
      "Architected an experimental AI Operating System backend in Go. Integrates gRPC microservices, secure local tool sandboxes, persistent sqlite sessions with GORM, RAG pipelines, and a Model Context Protocol (MCP) layer, wrapped in a polished React and Electron desktop client.",
    impact: [
      "Established an extensible, secure agent execution runtime.",
      "Engineered pluggable skills that allow agents to read local files and query external APIs under strict user permission grids.",
      "Reduced system-to-model overhead by employing lightweight gRPC channels.",
    ],
    stack: ["Go (Golang)", "gRPC", "PostgreSQL", "SQLite", "GORM", "React", "Electron", "TypeScript", "RAG", "MCP"],
    link: "https://github.com/EngineerProjects/Nexus_ai",
    featured: true,
    category: "AI Systems",
  },
  {
    title: "Tech Watch Agent",
    context:
      "Tracking the rapid pace of open-source research and engineering across multiple channels (GitHub, Reddit, arXiv) leads to critical cognitive overload.",
    solution:
      "Built a fully autonomous research platform driven by a LangGraph multi-agent team. It monitors, crawls, and synthesizes technical articles, utilizing pgvector for hybrid semantic searches, Redis for session caches, and FastAPI for real-time Server-Sent Events (SSE) updates.",
    impact: [
      "Automated complete daily technology summarization and research discovery pipelines.",
      "Engineered robust multi-agent coordination with designated debate and editing loops, producing high-fidelity technical reports.",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "Redis", "Docker", "React", "TypeScript", "SearXNG"],
    link: "https://github.com/EngineerProjects/tech-watch-agent",
    featured: true,
    category: "AI Systems",
  },
  {
    title: "BI Retail",
    context:
      "Retail sales datasets, customer transactions, and product histories are typically siloed, preventing executive business exploration and cohort forecasting.",
    solution:
      "Developed a complete Business Intelligence & Data Analytics platform. Engineered robust data processing and transformation pipelines in Python, structured clean relational models in SQL, and built automated visual reporting dashboards in Power BI.",
    impact: [
      "Aggregated and cleaned multi-channel commercial records into a unified analytical data mart.",
      "Designed cohort segmentation trackers and sales trend telemetry dashboards, reducing reporting latency.",
      "Optimized retail stock calculations, providing real-time data support for downstream inventory planning.",
    ],
    stack: ["Python", "SQL", "Power BI", "Data Analysis", "Data Visualization", "Business Intelligence"],
    link: "https://github.com/EngineerProjects/BI_Retail",
    featured: true,
    category: "Data Science",
  },
  {
    title: "Sylva3D",
    context:
      "Generating and rendering realistic, real-time procedural environments requires mathematically robust graphics kernels and ecological simulation logic.",
    solution:
      "Developed a custom procedural 3D physics and rendering engine in Python. Built direct OpenGL binding systems, mathematical noise models for terrain generation, and real-time vegetative growth simulations.",
    impact: [
      "Prototyped procedural vegetation structures displaying low vertex overhead.",
      "Created a robust coordinate rendering pipeline for simulated training environments.",
    ],
    stack: ["Python", "OpenGL", "3D Math", "Procedural Modeling", "Simulation Physics"],
    link: "https://github.com/EngineerProjects/sylva3D",
    featured: true,
    category: "3D Systems",
  },
  {
    title: "Advanced Football Video Analysis",
    context:
      "Automating soccer tactical analysis is highly challenging due to fast camera motion, rapid player occlusion, and irregular ball tracking.",
    solution:
      "Engineered a computer vision pipeline utilizing YOLO object detection and OpenCV tracking models to isolate players, identify teams based on uniform colors, track ball vectors, and compute tactical heatmaps.",
    impact: [
      "Automated soccer game recording parsing, generating actionable movement charts.",
      "Provided amateur clubs with high-fidelity coordinate metrics previously limited to professional enterprises.",
    ],
    stack: ["Python", "OpenCV", "Computer Vision", "YOLO", "Deep Learning", "Video Tracking"],
    link: "https://github.com/EngineerProjects/Advanced-Football-Video-Analysis",
    featured: true,
    category: "Computer Vision",
  },
  {
    title: "LocalIngest",
    context:
      "Ingesting local codebases into LLM contexts or RAG indexers typically requires manual parsing, which strips structural files of logical sequence.",
    solution:
      "Created a high-speed CLI/TUI developer tool that maps complete local folders, generates accurate tree models, and structures complete project files into an optimized markdown digest.",
    impact: [
      "Accelerated LLM codebase onboarding from hours to seconds.",
      "Features rich interactive TUI controls using Typer and Rich libraries.",
    ],
    stack: ["Python", "CLI/TUI", "Rich", "Typer", "AST Parsing", "Developer Tooling"],
    link: "https://github.com/EngineerProjects/LocalIngest",
    featured: false,
    category: "Developer Tooling",
  },
  {
    title: "Solar Irradiance Forecasting",
    context:
      "Predicting solar energy output is highly volatile and heavily reliant on unstable weather metrics.",
    solution:
      "Built a machine learning forecasting pipeline. Performed extensive atmospheric feature engineering, processed historic satellite logs, and trained regression models to forecast irradiance rates.",
    impact: [
      "Optimized solar grid storage dispatch simulations.",
      "Designed a robust feature parsing loop that handles missing atmospheric readings safely.",
    ],
    stack: ["Python", "Scikit-Learn", "Pandas", "Machine Learning", "Irradiance Forecasting"],
    link: "https://github.com/EngineerProjects/solar-forecasting",
    featured: true,
    category: "Data Science",
  },
  {
    title: "Shop App Service",
    context:
      "E-commerce backends must maintain transactional integrity, fast product search, and modular service architectures.",
    solution:
      "Developed a clean, service-oriented backend API in Go, showcasing modular routing patterns, secure session handling, and transactional database mapping.",
    impact: [
      "Engineered decoupled system layers ready for microservice containerization.",
      "Implemented strict database locks to prevent race conditions during checkout loops.",
    ],
    stack: ["Go (Golang)", "GORM", "PostgreSQL", "Clean Architecture", "REST APIs"],
    link: "https://github.com/EngineerProjects/Shop-app-service",
    featured: false,
    category: "Backend",
  },
  {
    title: "Sylva3D GUI",
    context:
      "Procedural 3D scene generators need responsive desktop user interfaces to manipulate environment variables, cameras, and asset densities in real time.",
    solution:
      "Designed and coded a high-density, multi-panel desktop control interface for the Sylva3D rendering engine, displaying parameter dials, scene trees, and engine status indicators.",
    impact: [
      "Streamlined creative and technical tuning of procedural scene generation parameters.",
      "Provided real-time engine telemetry and viewport frame indicators.",
    ],
    stack: ["Python", "PyQt / PySide", "3D Telemetry", "Desktop GUI Engineering"],
    link: "https://github.com/EngineerProjects/Sylva3dGUI",
    featured: false,
    category: "3D Systems",
  },
  {
    title: "SAM Background Remover",
    context:
      "Professional image segmentation tools are required to extract high-fidelity object layers without manual masking.",
    solution:
      "Wired Meta's Segment Anything Model (SAM) into a clean desktop vision tool to perform instant, high-contrast foreground isolation and backdrop removal.",
    impact: [
      "Automated precision masking workflows for designers and digital artists.",
      "Optimized segmentation runtimes using GPU-accelerated PyTorch backends.",
    ],
    stack: ["Python", "PyTorch", "Segment Anything (SAM)", "Computer Vision", "UI Masking"],
    link: "https://github.com/EngineerProjects/sam_background_remover",
    featured: false,
    category: "Computer Vision",
  },
];

export const education = [
  {
    degree: "Master of Science in Engineering (Diplôme d'Ingénieur)",
    school: "JUNIA ISEN Lille",
    level: "Master's Degree (BAC+5)",
    specialization: "Big Data & Data Science",
    period: "2023 - 2026",
    description:
      "Elite French Graduate School of Engineering. Advanced curriculum specializing in massive data engineering, statistical modeling, distributed systems, and production machine learning.",
    courses: [
      "Data Infrastructure: Distributed processing, batch/streaming ETL, medallion design rules",
      "Advanced Machine Learning: Neural architectures, supervised/unsupervised training grids",
      "Stochastic & Applied Mathematics: Probability theory, operations research, optimization theory",
      "Enterprise Data Platforms: Data warehousing, SQL, NoSQL systems, and BI dash toolkits",
    ],
    keySkills: [
      "Python",
      "SQL / NoSQL",
      "PySpark",
      "Machine Learning",
      "Distributed Computing",
      "Data Platforms",
      "Statistical Optimization",
      "Deep Learning",
    ],
    link: "https://www.junia.com",
  },
  {
    degree: "Bachelor of Science in Digital Engineering",
    school: "JUNIA ISEN Rabat",
    level: "Bachelor's Degree (BAC+3)",
    specialization: "Electronics, Computer Systems & Digital Sciences",
    period: "2020 - 2023",
    description:
      "Intensive undergraduate engineering program covering foundations of computer science, advanced algebra, embedded computing, and digital systems.",
    courses: [
      "Computer Science: Algorithms, strict C programming, data structures, software foundations",
      "Mathematics: Multi-variable calculus, linear algebra, vector fields, probability grids",
      "Signal Processing: Analog/digital signals, systems controls, embedded electronics",
    ],
    keySkills: [
      "Algorithmic Logic",
      "C Programming",
      "Applied Mathematics",
      "Signal Modeling",
      "Embedded Systems",
    ],
  },
  {
    degree: "Classe Préparatoire MPSI / MP",
    school: "Marie Stella",
    specialization: "Advanced Mathematics, Physics & Computer Science",
    period: "2020 - 2022",
    description:
      "Highly selective, intensive two-year undergraduate program preparing candidates for the French Grandes Écoles entrance examinations.",
    courses: [
      "Pure Mathematics: Abstract algebra, rigorous analysis, topology, probability structures",
      "Physics & Engineering: Electromagnetism, classical mechanics, thermodynamics, physical modeling",
    ],
    keySkills: [
      "Analytical Rigor",
      "Mathematical Proofs",
      "Logical Problem Solving",
      "Mental Stamina & Speed",
    ],
    distinction: "Graduated valedictorian (Major de promotion) across all preparatory terms.",
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft (Coursera Verify LU2ZQ972BWNF)",
  },
  {
    name: "Data Analysis with Python",
    issuer: "FreeCodeCamp (Verify Certification: Amiche)",
  },
  {
    name: "Supervised Machine Learning",
    issuer: "DeepLearning.AI (Verify MWJS4Q3S2C3L)",
  },
  {
    name: "Artificial Intelligence A-Z",
    issuer: "Udemy (Verify UC-f0f26f78-fc5e-4cd5-a5f8-7c7f64680774)",
  },
];

export const languages = [
  { name: "French", level: "Native" },
  { name: "Yoruba", level: "Native" },
  { name: "Fon", level: "Native" },
  { name: "Goun", level: "Native" },
  { name: "English", level: "B2 - Professional Working Proficiency" },
];

export const interests = [
  "Artificial Intelligence & Agentic State Research",
  "Multi-Agent Communication Networks",
  "High-Performance Data Infrastructure",
  "Computer Vision & Generative Graphics",
  "Open Source Developer Toolkits",
  "Venture & Technical Entrepreneurship",
  "Percussion & Drumming (Acoustic Drums)",
];

// ── UI Strings ──────────────────────────────────────────────
// Static labels used directly inside components

export const ui = {
  nav: {
    scope: "SCOPE",
    stack: "STACK",
    blueprints: "BLUEPRINTS",
    records: "RECORDS",
    handshake: "HANDSHAKE",
    status: "SYS: ACTIVE",
    mobile_title: "HUD NAVIGATION SYSTEM",
    connect_links: "CONNECT LINKS:",
  },
  hero: {
    badge: "CORE SYSTEMS PLATFORM",
    hook: "Designing scalable multi-agent platforms, deterministic big data pipelines, and high-performance execution runtimes. Dedicated to transforming volatile models into production-grade pipelines.",
    cta_explore: "Explore Blueprints",
    cta_resume_infra: "Resume: Data Infra & Systems",
    cta_resume_ai: "Resume: AI & Machine Learning",
    status_ready: "READY_FOR_DEPLOY",
    telemetry_title: "ENGINE STATS",
    telemetry_runtime: "RUNTIME ENVIRONMENT",
    telemetry_orchestration: "ORCHESTRATION PIPELINES",
    telemetry_data_engine: "DATA CLUSTER ENGINE",
  },
  about: {
    badge: "01 // CORE RESEARCH SCOPE",
    heading_1: "Engineering",
    heading_2: "Profile",
    heading_suffix: "& Interests",
    focus_label: "FOCUS: SCALE & DETAILED PARITY",
    philosophy_title: "Systems Architecture Rule",
    philosophy_sub: "FROM METRIC TO MACHINE",
    philosophy_quote:
      "I do not merely train models or run queries. I architect complete, self-healing platforms that ensure functional parity, schema safety, and micro-second reliability.",
  },
  skills: {
    badge: "02 // ENGINE CALIBRATION SPECIFICATIONS",
    heading_1: "Technical",
    heading_2: "Specifications",
    heading_3: "Grid",
    subheading: "HARDWARE & SOFTWARE STACK",
    ready: "READY FOR EXECUTION",
  },
  projects: {
    badge: "03 // ACTIVE PLATFORM BLUEPRINTS",
    heading_1: "Technical",
    heading_2: "Case Studies",
    heading_3: "& Systems",
    cta_heading: "EXPLORE COMPLETE CLUSTER NODES",
    cta_body:
      "I actively contribute to open-source software, testing local sandboxes and structural parsing strategies. Explore my global GitHub organization for full implementation scripts.",
    cta_button: "Access Github Org",
    auxiliary_title: "AUXILIARY EXPERIMENTAL NODES",
    auxiliary_badge: "AUXILIARY CATALOGUE // OPTIMIZATIONS",
    specified_blueprints: "SPECIFIED BLUEPRINTS",
    context_label: "SYSTEM CONTEXT:",
    solution_label: "TECHNICAL SOLUTION:",
    impact_label: "VERIFIED PRODUCTION IMPACT:",
  },
  experience: {
    badge: "04 // OPERATIONAL RECORDS & EXPERIENCE",
    heading_1: "Operational",
    heading_2: "Releases",
    heading_3: "& Experience",
    subheading: "CHRONOLOGICAL CHANGELOG",
    expand: "Expand Log Nodes",
    collapse: "Collapse Details",
    community_title: "Community & Leadership Changelog",
    community_sub: "JUNIA ALUMNI NETWORKS",
  },
  education: {
    badge: "05 // SCIENTIFIC & MATHEMATICAL RIGOR",
    heading_1: "Academic",
    heading_2: "Foundations",
    cert_badge: "REGISTRY CREDENTIALS",
    cert_heading_1: "Verified",
    cert_heading_2: "Registry",
    syllabus_label: "CORE TECHNICAL SYLLABUS:",
    distinction_prefix: "[DISTINCTION]",
    verify_link: "Verify Institution",
    issuer_label: "ISSUER:",
    continuous_quote:
      "Continuous alignment with changing cloud paradigms, mathematical operations research, and automated workflow state machines.",
  },
  contact: {
    badge: "05 // SECURE HANDSHAKE PROTOCOL",
    heading_1: "Initiate",
    heading_2: "Connection",
    heading_3: "Gateway",
    subheading: "ENCRYPTED COMMS TUNNEL",
    intro:
      "Open to collaborative development on autonomous agentic systems, PySpark migration audits, microservice designs, or other challenging engineering initiatives.",
    email_label: "REGISTRY EMAIL",
    phone_label: "ENCRYPTED VOICE",
    form_name: "// COMPLETE NAME",
    form_email: "// EMAIL ADDRESS",
    form_message: "// RAW DATA PACK (MESSAGE)",
    form_name_placeholder: "Ident: John Doe",
    form_email_placeholder: "Ident: john@net.com",
    form_message_placeholder: "Enter payload message specs...",
    submit_idle: "Submit",
    submit_sending: "Transmitting Datapack...",
    submit_sent: "Handshake Established",
    submit_error: "Transmission Interrupted",
    success_msg:
      "TRANSMISSION SUCCESSFUL. I WILL RESPOND ON THIS COORDINATE PROMPTLY.",
  },
  footer: {
    registry: "SOURCE",
    record: "REGISTRY RECORD 4022A",
    hosted: "HOSTED PLATFORM // SECURE CLUSTER",
    design: "DESIGN & CORE ARCHITECTURE BY S. KPOVIESSI",
    compiled: "COMPILED TARGET: TARGET_X86_64",
    rendered: "RENDERED IN CUSP LAYOUT ENGINE",
  },
  chat: {
    title: "SYSTEM ASSISTANT",
    initial:
      "Hi 👋 I'm Lys, Stéphane's AI assistant. How can I help you?",
    error: "Apologies, a communication timeout occurred. Let us re-try the query.",
    reset_title: "Reset System Cache",
    assistant_label: "■ TELEMETRY_OUT",
    user_label: "■ CONSOLE_IN",
    loading_label: "■ PROCESS: COMPUTE_WEIGHTS",
    placeholder: "Enter system query specs...",
    footer: "SECURE TUNNEL AUGMENTED BY STÉPHANE",
  },
};
