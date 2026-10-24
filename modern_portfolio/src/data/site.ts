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
  "eyebrow": {
    "en": "Founder · AI & Data Engineer",
    "fr": "Fondateur · Ingénieur IA & Data"
  },
  "available": {
    "en": "Open to full-time roles, freelance missions and collaborations",
    "fr": "Disponible pour un CDI, des missions freelance et des collaborations"
  },
  "titleA": {
    "en": "I build AI systems that",
    "fr": "Je construis des systèmes d'IA qui"
  },
  "titleB": {
    "en": "solve practical problems.",
    "fr": "répondent à un besoin concret."
  },
  "lead": {
    "en": "I turn complex technology into tools people can use: agents that act under control, document search with sources, and data workflows with validated results. I founded Seshat after working on data modernization at Allianz and experimental 3D reconstruction at Sylvagreg.",
    "fr": "Je transforme des technologies complexes en outils utilisables : des agents dont on contrôle les actions, une recherche documentaire sourcée et des traitements de données aux résultats vérifiés. J'ai fondé Seshat après une expérience en modernisation data chez Allianz et en reconstruction 3D expérimentale chez Sylvagreg."
  },
  "building": {
    "label": {
      "en": "currently building",
      "fr": "en construction"
    },
    "words": {
      "en": [
        "an open-source agent runtime in Go",
        "hybrid RAG for real documents",
        "governed multi-agent workflows",
        "data pipelines that pass parity tests"
      ],
      "fr": [
        "un runtime d'agents open source en Go",
        "du RAG hybride sur de vrais documents",
        "des workflows multi-agents gouvernés",
        "des pipelines qui passent les tests de parité"
      ]
    }
  },
  "chips": [
    "Go",
    "RAG",
    "MCP",
    "PySpark",
    "PyTorch"
  ],
  "stats": [
    {
      "n": 8,
      "prefix": ">",
      "suffix": "×",
      "l": {
        "en": "speedup on the measured Allianz workflow",
        "fr": "sur le workflow Allianz mesuré"
      }
    },
    {
      "n": 15000,
      "prefix": "",
      "suffix": "+",
      "l": {
        "en": "lines of SAS analyzed",
        "fr": "lignes SAS analysées"
      }
    },
    {
      "n": 150,
      "prefix": "",
      "suffix": "+",
      "l": {
        "en": "business rules integrated",
        "fr": "règles métier intégrées"
      }
    },
    {
      "n": 12,
      "prefix": "",
      "suffix": "",
      "l": {
        "en": "LLM providers and endpoints in the runtime catalog",
        "fr": "fournisseurs et points d’accès LLM au catalogue du runtime"
      }
    }
  ],
  "measurementNote": {
    "en": "Allianz measurement: SAS versus Azure Databricks, with identical memory capacity. The speedup applies to the measured workflow.",
    "fr": "Mesure Allianz : SAS comparé à Azure Databricks, à capacité mémoire identique. Le gain concerne le workflow mesuré."
  }
};

export const seshat = {
  "kicker": {
    "en": "Flagship project",
    "fr": "Projet phare"
  },
  "title": {
    "en": "Seshat: agents you can govern.",
    "fr": "Seshat : des agents que l'on gouverne."
  },
  "lead": {
    "en": "An AI agent needs more than a model: it needs tools, execution controls and a way to integrate into an application. I built an open-source Go runtime around these requirements. It is the foundation of SeshatOS and SeshatCloud, two products still in development.",
    "fr": "Un agent IA a besoin de plus qu'un modèle : des outils, des contrôles d'exécution et un moyen de s'intégrer à une application. J'ai conçu un runtime open source en Go autour de ces besoins. Il sert de fondation à SeshatOS et SeshatCloud, deux produits encore en développement."
  },
  "products": [
    {
      "name": "Seshat Runtime",
      "status": {
        "en": "Released",
        "fr": "Publié"
      },
      "tone": "live",
      "text": {
        "en": "An embeddable Go engine with an SDK, gRPC API and terminal interface. Delegates tasks to sub-agents, connects tools via MCP and supports local and hosted models. Apache-2.0.",
        "fr": "Un moteur Go intégrable par SDK et API gRPC, avec interface terminal. Il délègue des tâches à des sous-agents, connecte des outils via MCP et prend en charge des modèles locaux ou hébergés. Apache-2.0."
      },
      "href": "https://github.com/KPO-Tech/seshat-runtime",
      "cta": {
        "en": "View on GitHub",
        "fr": "Voir sur GitHub"
      }
    },
    {
      "name": "SeshatOS",
      "status": {
        "en": "In development",
        "fr": "En développement"
      },
      "tone": "wip",
      "text": {
        "en": "Desktop product in development, built on the runtime: an Electron/React interface and local backend to bring chat and document workflows into a self-hosted environment. Source-available.",
        "fr": "Produit desktop en développement, construit sur le runtime : interface Electron/React et backend local pour proposer le chat et des usages documentaires dans un environnement auto-hébergé. Source disponible."
      },
      "href": "https://github.com/KPO-Tech/SeshatOS",
      "cta": {
        "en": "View on GitHub",
        "fr": "Voir sur GitHub"
      }
    },
    {
      "name": "SeshatCloud",
      "status": {
        "en": "In construction",
        "fr": "En construction"
      },
      "tone": "wip",
      "text": {
        "en": "Organizational product in development: a multi-tenant server, administration and document-intelligence services. Work focuses on integration and packaging; it is not yet a packaged commercial offer.",
        "fr": "Produit pour les organisations en développement : serveur multi-organisations, administration et services d'intelligence documentaire. Le travail porte sur l'intégration et le packaging ; l'offre commerciale n'est pas encore finalisée."
      },
      "href": "",
      "cta": {
        "en": "",
        "fr": ""
      }
    }
  ],
  "points": [
    {
      "en": "Make documents usable: ingestion and hybrid retrieval give agents relevant passages to build source-backed answers.",
      "fr": "Rendre les documents exploitables : ingestion et recherche hybride fournissent aux agents les passages utiles à une réponse sourcée."
    },
    {
      "en": "Divide complex tasks: parallel sub-agents and dependency-based workflows coordinate tool execution and intermediate results.",
      "fr": "Décomposer les tâches complexes : sous-agents parallèles et workflows à dépendances coordonnent les outils et leurs résultats intermédiaires."
    },
    {
      "en": "Keep actions under control: permission rules and human approval govern execution; tool calls, failures and latency support diagnosis.",
      "fr": "Garder le contrôle : règles de permissions et validation humaine encadrent les actions ; appels d'outils, erreurs et latences aident au diagnostic."
    },
    {
      "en": "Integrate without rebuilding the engine: SDK, gRPC and MCP connect applications, services and multiple LLM endpoints behind a shared runtime.",
      "fr": "Intégrer sans reconstruire le moteur : SDK, gRPC et MCP relient applications, services et points d’accès LLM à un runtime commun."
    }
  ],
  "stack": [
    "Go",
    "Python",
    "TypeScript",
    "Electron",
    "React",
    "PostgreSQL",
    "pgvector",
    "gRPC",
    "MCP",
    "Docker"
  ],
  "links": {
    "site": {
      "en": "Visit seshat-ai.com",
      "fr": "Visiter seshat-ai.com"
    },
    "org": {
      "en": "KPO-Tech on GitHub",
      "fr": "KPO-Tech sur GitHub"
    }
  }
};

export interface Role {
  company: string;
  role: L;
  kind: L;
  period: L;
  place: L;
  summary: L;
  metric: { v: string; l: L };
  art: "agent" | "medallion" | "chart" | "cube";
  logo?: string;
  points: L[];
  stack: string[];
  links?: { label: string; href: string }[];
  current?: boolean;
}

export const experience = {
  "title": {
    "en": "Experience",
    "fr": "Parcours"
  },
  "lead": {
    "en": "From industrial data pipelines to my own agent platform.",
    "fr": "Des pipelines de données industriels à ma propre plateforme d'agents."
  },
  "more": {
    "en": "Details",
    "fr": "Détails"
  },
  "less": {
    "en": "Hide details",
    "fr": "Masquer"
  },
  "roles": [
    {
      "company": "Seshat AI",
      "logo": "/logos/seshat.png",
      "role": {
        "en": "Founder & AI Engineer",
        "fr": "Fondateur & ingénieur IA"
      },
      "kind": {
        "en": "Founder",
        "fr": "Fondateur"
      },
      "period": {
        "en": "Sep 2026 – Present",
        "fr": "Sept. 2026 – Aujourd'hui"
      },
      "place": {
        "en": "Île-de-France",
        "fr": "Île-de-France"
      },
      "summary": {
        "en": "I design and build the execution layer that turns an LLM conversation into controlled actions. The released Go runtime handles tools and sub-agents; the desktop and organizational products built on it remain in development.",
        "fr": "Je conçois et développe la couche d'exécution qui transforme une conversation LLM en actions contrôlées. Le runtime Go publié gère les outils et les sous-agents ; les produits desktop et organisationnels construits dessus restent en développement."
      },
      "metric": {
        "v": "SDK + gRPC",
        "l": {
          "en": "an engine designed for integration",
          "fr": "un moteur conçu pour être intégré"
        }
      },
      "art": "agent",
      "points": [
        {
          "en": "Built an extensible runtime with a shared execution loop for local and hosted models, exposed through a Go SDK, gRPC API and terminal interface.",
          "fr": "Conception d'un runtime extensible avec une boucle d'exécution commune aux modèles locaux et hébergés, exposée par SDK Go, API gRPC et interface terminal."
        },
        {
          "en": "Connected task delegation, parallel sub-agents and MCP tools, with permission checks and human approval around agent actions.",
          "fr": "Intégration de la délégation de tâches, des sous-agents parallèles et des outils MCP, avec contrôles de permissions et validation humaine des actions."
        },
        {
          "en": "Combined document ingestion, hybrid retrieval and source-backed answers so agents can work with documents rather than rely on model knowledge alone.",
          "fr": "Assemblage d'une chaîne d'ingestion, de recherche hybride et de réponses sourcées pour que les agents s'appuient sur les documents."
        },
        {
          "en": "Added execution monitoring and automated tests around agents, permissions and workflows; maintained releases, CI and documentation as the engine evolves.",
          "fr": "Suivi des exécutions et tests automatisés autour des agents, permissions et workflows ; maintenance des releases, de la CI et de la documentation du moteur."
        }
      ],
      "stack": [
        "Go",
        "Python",
        "TypeScript",
        "PostgreSQL",
        "pgvector",
        "MCP",
        "Electron"
      ],
      "links": [
        {
          "label": "seshat-ai.com",
          "href": "https://seshat-ai.com"
        },
        {
          "label": "GitHub",
          "href": "https://github.com/KPO-Tech"
        }
      ],
      "current": true
    },
    {
      "company": "Allianz France",
      "logo": "/logos/allianz.png",
      "role": {
        "en": "Data Engineer / Data Scientist",
        "fr": "Ingénieur data / data scientist"
      },
      "kind": {
        "en": "Internship",
        "fr": "Stage"
      },
      "period": {
        "en": "Nov 2025 – Apr 2026",
        "fr": "Nov. 2025 – Avr. 2026"
      },
      "place": {
        "en": "Paris · P4D, Advanced Data & Climate",
        "fr": "Paris · P4D, Advanced Data & Climate"
      },
      "summary": {
        "en": "Modernized SAS processing on Azure Databricks while preserving insurance business logic. The measured workflow ran more than 8× faster than its SAS reference with identical memory capacity; parity and regression tests checked that speed did not come at the expense of consistent results.",
        "fr": "Modernisation de traitements SAS sur Azure Databricks en préservant la logique métier de l'assurance. Le workflow mesuré a été accéléré de plus de 8× par rapport à sa référence SAS, à capacité mémoire identique ; des tests de parité et de non-régression vérifiaient la cohérence des résultats."
      },
      "metric": {
        "v": "> 8×",
        "l": {
          "en": "speedup on the measured workflow",
          "fr": "sur le workflow mesuré"
        }
      },
      "art": "medallion",
      "points": [
        {
          "en": "Reverse-engineered more than 15,000 lines of SAS to understand dependencies and translate business processing into Python/PySpark.",
          "fr": "Rétro-ingénierie de plus de 15 000 lignes SAS pour comprendre les dépendances et transposer les traitements métier en Python/PySpark."
        },
        {
          "en": "Organized processing into Bronze, Silver and Gold layers on Azure Databricks, integrating more than 150 business rules.",
          "fr": "Organisation des traitements en couches Bronze, Silver et Gold sur Azure Databricks, avec plus de 150 règles métier intégrées."
        },
        {
          "en": "Compared workflow execution times in SAS and Databricks with identical memory capacity. The measured speedup exceeds 8×; it is not a claim about every datamart process.",
          "fr": "Comparaison des temps d'exécution du workflow sous SAS et Databricks à capacité mémoire identique. Le gain mesuré dépasse 8× et ne porte pas sur tous les traitements du datamart."
        },
        {
          "en": "Automated SAS/Python parity and regression checks to identify discrepancies in business indicators, alongside geospatial quality controls.",
          "fr": "Automatisation des contrôles de parité SAS/Python et de non-régression pour repérer les écarts sur les indicateurs, complétée par des contrôles qualité géospatiaux."
        }
      ],
      "stack": [
        "PySpark",
        "Azure Databricks",
        "Python",
        "SAS",
        "SQL",
        "Parquet"
      ]
    },
    {
      "company": "Lyne et Frères SARL",
      "role": {
        "en": "Data Analyst",
        "fr": "Data Analyst"
      },
      "kind": {
        "en": "Part-time",
        "fr": "Temps partiel"
      },
      "period": {
        "en": "2023 – 2025",
        "fr": "2023 – 2025"
      },
      "place": {
        "en": "Benin · remote from France",
        "fr": "Bénin · à distance depuis la France"
      },
      "summary": {
        "en": "Alongside my studies, I helped the family business turn commercial, operational and agricultural data into activity reports. The work combined data preparation, reporting and discussions with users so the indicators could support day-to-day decisions.",
        "fr": "En parallèle de mes études, j'ai aidé l'entreprise familiale à transformer ses données commerciales, opérationnelles et agricoles en reportings d'activité. Le travail associait préparation des données, restitution et échanges avec les utilisateurs pour appuyer le pilotage quotidien."
      },
      "metric": {
        "v": "2",
        "l": {
          "en": "years alongside my studies",
          "fr": "ans en parallèle des études"
        }
      },
      "art": "chart",
      "points": [
        {
          "en": "Structured and analyzed data with Python/Pandas to follow volumes, trends and deviations in activity indicators.",
          "fr": "Structuration et analyse des données avec Python/Pandas pour suivre volumes, tendances et écarts sur les indicateurs d'activité."
        },
        {
          "en": "Built reports and Streamlit interfaces that let business users consult the results and discuss the points requiring attention.",
          "fr": "Développement de rapports et d'interfaces Streamlit permettant aux équipes de consulter les résultats et de discuter les points d'attention."
        },
        {
          "en": "Automated recurring data processing to make report preparation repeatable, and supported users in interpreting the output.",
          "fr": "Automatisation des traitements récurrents pour rendre la préparation des reportings reproductible, avec accompagnement dans l'interprétation des résultats."
        },
        {
          "en": "Deployed open-source AI tools, including OpenWebUI, for internal uses and helped employees get started.",
          "fr": "Déploiement d'outils IA open source, dont OpenWebUI, pour des usages internes et accompagnement des employés dans leur prise en main."
        }
      ],
      "stack": [
        "Python",
        "Pandas",
        "Streamlit"
      ]
    },
    {
      "company": "Groupe Sylvagreg",
      "logo": "/logos/sylvagreg.png",
      "role": {
        "en": "Machine Learning Engineer",
        "fr": "Ingénieur machine learning"
      },
      "kind": {
        "en": "Internship",
        "fr": "Stage"
      },
      "period": {
        "en": "May – Aug 2024",
        "fr": "Mai – Août 2024"
      },
      "place": {
        "en": "Lille",
        "fr": "Lille"
      },
      "summary": {
        "en": "Built an experimental path from 2D photographs to 3D reconstructions for a construction group. The objective was to make model outputs inspectable through an application, rather than leave them in a research notebook.",
        "fr": "Développement d'une chaîne expérimentale allant des photos 2D aux reconstructions 3D pour un groupe de construction. L'objectif était de rendre les sorties des modèles consultables dans une application, au-delà du seul notebook de recherche."
      },
      "metric": {
        "v": "2D → 3D",
        "l": {
          "en": "reconstruction from photos",
          "fr": "reconstruction à partir de photos"
        }
      },
      "art": "cube",
      "points": [
        {
          "en": "Combined photogrammetry and PyTorch generative models to explore 3D reconstruction from 2D images.",
          "fr": "Association de la photogrammétrie et de modèles génératifs PyTorch pour explorer la reconstruction 3D à partir d'images 2D."
        },
        {
          "en": "Automated preprocessing and inference, then connected AWS/Docker deployment to a visualization interface for testing and inspecting reconstructions.",
          "fr": "Automatisation du prétraitement et de l'inférence, puis déploiement AWS/Docker relié à une interface de visualisation pour tester et examiner les reconstructions."
        },
        {
          "en": "Delivered an experimental R&D application for testing and inspecting reconstruction outputs.",
          "fr": "Réalisation d'une application de R&D expérimentale pour tester et examiner les reconstructions."
        }
      ],
      "stack": [
        "PyTorch",
        "Computer Vision",
        "Photogrammetry",
        "Docker",
        "AWS"
      ],
      "links": [
        {
          "label": "Sylva3D",
          "href": "https://github.com/EngineerProjects/sylva3D"
        },
        {
          "label": "Sylva3D GUI",
          "href": "https://github.com/EngineerProjects/Sylva3dGUI"
        }
      ]
    }
  ] as Role[]
};

export interface Project {
  title: string;
  tag: L;
  text: L;
  stack: string[];
  href?: string;
  note?: L;
  featured?: boolean;
  caseStudy?: { challenge: L; approach: L; outcome: L };
  art: "canvas" | "watch" | "terminal" | "football" | "retail" | "cube" | "robot" | "solar" | "skills";
  cat: "founded" | "agents" | "data" | "vision" | "tools";
}

export const projects = {
  "title": {
    "en": "Selected work",
    "fr": "Projets sélectionnés"
  },
  "lead": {
    "en": "The need, the engineering decisions and what each project makes possible. Open the case studies to see the work behind the stack.",
    "fr": "Le besoin, les choix d'ingénierie et ce que chaque projet permet de faire. Les études de cas expliquent le travail derrière la stack."
  },
  "filters": {
    "all": {
      "en": "All",
      "fr": "Tout"
    },
    "founded": {
      "en": "Co-founded",
      "fr": "Co-fondé"
    },
    "agents": {
      "en": "Agents",
      "fr": "Agents"
    },
    "data": {
      "en": "Data",
      "fr": "Data"
    },
    "vision": {
      "en": "Vision",
      "fr": "Vision"
    },
    "tools": {
      "en": "Tools",
      "fr": "Outils"
    }
  },
  "open": {
    "en": "View on GitHub",
    "fr": "Voir sur GitHub"
  },
  "viewAll": {
    "en": "All repositories on GitHub",
    "fr": "Tous les dépôts sur GitHub"
  },
  "items": [
    {
      "title": "Tech Watch Agent",
      "art": "watch",
      "cat": "agents",
      "tag": {
        "en": "Agents",
        "fr": "Agents"
      },
      "text": {
        "en": "From a research topic to source-backed reports: a multi-agent application to plan searches, gather information and follow each execution. Semantic memory makes collected information retrievable.",
        "fr": "Du sujet de recherche au rapport sourcé : une application multi-agents pour planifier les recherches, collecter les informations et suivre chaque exécution. La mémoire sémantique permet de retrouver les éléments collectés."
      },
      "stack": [
        "LangGraph",
        "FastAPI",
        "pgvector",
        "React",
        "Docker"
      ],
      "href": "https://github.com/EngineerProjects/tech-watch-agent",
      "featured": true,
      "caseStudy": {
        "challenge": {
          "en": "Collecting articles is only one step: a useful watch needs a defined topic, a synthesis and sources that can be checked.",
          "fr": "Collecter des articles ne suffit pas : une veille utile demande un sujet défini, une synthèse et des sources que l'on peut vérifier."
        },
        "approach": {
          "en": "I connected research planning, multi-source collection and synthesis through LangGraph, with FastAPI execution tracking, pgvector memory and a React interface.",
          "fr": "J'ai relié planification, collecte multi-source et synthèse dans LangGraph, avec suivi des exécutions FastAPI, mémoire pgvector et interface React."
        },
        "outcome": {
          "en": "A complete application to configure a watch, follow its execution and retrieve source-backed reports and previously collected information.",
          "fr": "Une application complète pour configurer une veille, suivre son exécution et consulter des rapports sourcés ainsi que les informations déjà collectées."
        }
      }
    },
    {
      "title": "Hello Pulse",
      "art": "canvas",
      "cat": "founded",
      "tag": {
        "en": "Co-founded · private",
        "fr": "Co-fondé · privé"
      },
      "text": {
        "en": "Collaborative platform for brainstorming and prototyping with an AI that asks the right questions. Real-time canvas, rich documents, team calendar, AI assistant over SSE. Advanced prototype: Go (Fiber) backend, Next.js, PostgreSQL, Redis, in-house auth with TOTP MFA. Private repository.",
        "fr": "Plateforme collaborative de brainstorming et de prototypage, avec une IA qui pose les bonnes questions. Canvas temps réel, documents riches, calendrier d'équipe, assistant IA en SSE. Prototype avancé : backend Go (Fiber), Next.js, PostgreSQL, Redis, authentification maison avec MFA TOTP. Dépôt privé."
      },
      "stack": [
        "Go",
        "Next.js",
        "PostgreSQL",
        "Redis",
        "Konva"
      ]
    },
    {
      "title": "LocalIngest",
      "art": "terminal",
      "cat": "tools",
      "tag": {
        "en": "Developer tool",
        "fr": "Outil développeur"
      },
      "text": {
        "en": "CLI and terminal UI that analyzes a code repository and generates a Markdown report (structure, source preview, statistics) for documentation or LLM ingestion.",
        "fr": "CLI et interface terminal qui analyse un dépôt de code et génère un rapport Markdown (structure, aperçu des sources, statistiques) pour la documentation ou l'ingestion par un LLM."
      },
      "stack": [
        "Python",
        "CLI",
        "TUI"
      ],
      "href": "https://github.com/KPO-Tech/LocalIngest",
      "featured": true
    },
    {
      "title": "Advanced Football Video Analysis",
      "art": "football",
      "cat": "vision",
      "tag": {
        "en": "Computer vision",
        "fr": "Vision par ordinateur"
      },
      "text": {
        "en": "Detection and tracking of players and ball on match footage, movement analysis and extraction of usable data for amateur sport.",
        "fr": "Détection et suivi des joueurs et du ballon sur des vidéos de match, analyse des mouvements et extraction de données exploitables pour le sport amateur."
      },
      "stack": [
        "YOLO",
        "OpenCV",
        "Python"
      ],
      "href": "https://github.com/EngineerProjects/Advanced-Football-Video-Analysis",
      "featured": true
    },
    {
      "title": "BI Retail",
      "art": "retail",
      "cat": "data",
      "tag": {
        "en": "Data engineering",
        "fr": "Data engineering"
      },
      "text": {
        "en": "A complete sales and supply-chain reporting pipeline: prepare data, model a warehouse and explore sales and product trends in Power BI.",
        "fr": "Une chaîne de reporting ventes et supply chain complète : préparer les données, modéliser un entrepôt et explorer les ventes et tendances produit dans Power BI."
      },
      "stack": [
        "PySpark",
        "Airflow",
        "PostgreSQL",
        "Power BI",
        "Docker"
      ],
      "href": "https://github.com/EngineerProjects/BI_Retail",
      "caseStudy": {
        "challenge": {
          "en": "Sales and supply-chain analysis needs consistent data before a dashboard can be useful.",
          "fr": "L'analyse des ventes et de la supply chain demande des données cohérentes avant de construire un tableau de bord."
        },
        "approach": {
          "en": "I built ingestion and PySpark transformations, orchestrated the pipeline in Airflow and modeled a PostgreSQL warehouse feeding Power BI.",
          "fr": "J'ai construit l'ingestion et les transformations PySpark, orchestré la chaîne dans Airflow et modélisé un entrepôt PostgreSQL alimentant Power BI."
        },
        "outcome": {
          "en": "A complete reporting pipeline connecting data preparation to dashboards for exploring sales, products and trends.",
          "fr": "Un projet reliant la préparation des données aux tableaux de bord pour explorer ventes, produits et tendances, avec une chaîne de reporting complète."
        }
      }
    },
    {
      "title": "Sylva3D",
      "art": "cube",
      "cat": "vision",
      "tag": {
        "en": "Computer vision",
        "fr": "Vision par ordinateur"
      },
      "text": {
        "en": "2D-to-3D reconstruction engine and its desktop interface, built during the Sylvagreg internship: photogrammetry plus PyTorch generative models.",
        "fr": "Moteur de reconstruction 2D vers 3D et son interface, construits pendant le stage Sylvagreg : photogrammétrie et modèles génératifs PyTorch."
      },
      "stack": [
        "PyTorch",
        "Photogrammetry",
        "GUI"
      ],
      "href": "https://github.com/EngineerProjects/sylva3D",
      "caseStudy": {
        "challenge": {
          "en": "Evaluate how 2D images can produce a 3D reconstruction, and make the output easy to inspect during experiments.",
          "fr": "Évaluer la reconstruction 3D à partir d'images 2D et rendre les résultats faciles à examiner pendant les expérimentations."
        },
        "approach": {
          "en": "I combined photogrammetry, PyTorch generative models and automated processing with an application for visual inspection.",
          "fr": "J'ai associé photogrammétrie, modèles génératifs PyTorch et traitements automatisés à une application de visualisation."
        },
        "outcome": {
          "en": "An experimental reconstruction solution and visualization interface developed during the Sylvagreg internship. The work connects ML experimentation with an application that can be tested.",
          "fr": "Une solution expérimentale de reconstruction et une interface développées pendant le stage Sylvagreg, reliant expérimentation ML et application testable."
        }
      }
    },
    {
      "title": "Waste-collection robot",
      "art": "robot",
      "cat": "vision",
      "tag": {
        "en": "Robotics & vision",
        "fr": "Robotique & vision"
      },
      "text": {
        "en": "AceObject: detects, classifies and tracks waste while distinguishing it from obstacles, then plans a collection route with Dijkstra. Reinforcement learning explored for obstacle avoidance.",
        "fr": "AceObject : détecte, classe et suit les déchets en les distinguant des obstacles, puis planifie un itinéraire de collecte avec Dijkstra. Piste d'apprentissage par renforcement explorée pour l'évitement."
      },
      "stack": [
        "YOLOv8",
        "OpenCV",
        "Dijkstra",
        "RL"
      ]
    },
    {
      "title": "Solar irradiance forecasting",
      "art": "solar",
      "cat": "data",
      "tag": {
        "en": "Machine learning",
        "fr": "Machine learning"
      },
      "text": {
        "en": "Weather data preparation, temporal features and forecasting model evaluation, with a REST API serving the results.",
        "fr": "Préparation de données météo, variables temporelles et évaluation de modèles de prévision, avec une API REST pour exposer les résultats."
      },
      "stack": [
        "Scikit-learn",
        "Pandas",
        "FastAPI"
      ],
      "href": "https://github.com/EngineerProjects/solar-forecasting",
      "caseStudy": {
        "challenge": {
          "en": "Turn weather observations into solar irradiance predictions that another application can request.",
          "fr": "Transformer les observations météo en prévisions d'irradiance solaire consultables par une autre application."
        },
        "approach": {
          "en": "I prepared weather data, created temporal features, evaluated forecasting models and exposed predictions through FastAPI.",
          "fr": "J'ai préparé les données météo, créé des variables temporelles, évalué les modèles de prévision et exposé les prédictions via FastAPI."
        },
        "outcome": {
          "en": "A complete path from weather data to a prediction API, combining model evaluation and application integration.",
          "fr": "Une chaîne allant des données météo à une API de prédiction, avec évaluation des modèles et intégration applicative."
        }
      }
    },
    {
      "title": "Job-hunting skills",
      "art": "skills",
      "cat": "agents",
      "tag": {
        "en": "Agent skills",
        "fr": "Skills d'agents"
      },
      "text": {
        "en": "A suite of skills for Claude Code and MCP-compatible runtimes: deterministic browser automation, job analysis, CV adaptation and application tracking with a human in the loop.",
        "fr": "Une suite de skills pour Claude Code et les runtimes compatibles MCP : automatisation de navigateur déterministe, analyse d'offres, adaptation de CV et suivi des candidatures avec validation humaine."
      },
      "stack": [
        "MCP",
        "Playwright",
        "Agent skills"
      ],
      "href": "https://github.com/EngineerProjects/job-hunting-skills"
    }
  ] as Project[],
  "caseStudy": {
    "open": {
      "en": "How I built it",
      "fr": "Comprendre le projet"
    },
    "challenge": {
      "en": "The need",
      "fr": "Le besoin"
    },
    "approach": {
      "en": "What I built",
      "fr": "La réalisation"
    },
    "outcome": {
      "en": "What it enables",
      "fr": "Le résultat"
    }
  }
};

export interface Skill {
  n: string;
  /** Where it was actually used: roles and projects from this page. */
  used?: string[];
}

export const skills = {
  title: { en: "Skills", fr: "Compétences" } as L,
  lead: {
    en: "Not a list of keywords: pick a skill to see where I actually used it.",
    fr: "Pas une liste de mots-clés : choisissez une compétence pour voir où je l'ai vraiment utilisée.",
  } as L,
  usedIn: { en: "Used in", fr: "Utilisé dans" } as L,
  none: { en: "Hands-on practice and courses, no production project listed here.", fr: "Pratique et formations, pas de projet de production listé ici." } as L,
  pick: { en: "Select a skill", fr: "Choisissez une compétence" } as L,
  skills: { en: "skills", fr: "compétences" } as L,
  groups: [
    {
      id: "agents",
      icon: "bot",
      name: { en: "Agents & LLM systems", fr: "Agents & systèmes LLM" } as L,
      tagline: { en: "The core of my work today.", fr: "Le cœur de mon travail aujourd'hui." } as L,
      items: [
        { n: "Seshat runtime", used: ["Seshat", "Hello Pulse"] },
        { n: "MCP", used: ["Seshat", "Job-hunting skills"] },
        { n: "Tool calling", used: ["Seshat"] },
        { n: "RAG & hybrid search", used: ["Seshat", "Tech Watch Agent"] },
        { n: "Embeddings", used: ["Seshat", "Tech Watch Agent"] },
        { n: "LangGraph", used: ["Tech Watch Agent"] },
        { n: "LangChain", used: ["Tech Watch Agent"] },
        { n: "Pydantic AI", used: ["Hello Pulse"] },
        { n: "Ollama", used: ["Seshat"] },
        { n: "Hugging Face" },
      ],
    },
    {
      id: "backend",
      icon: "server",
      name: { en: "Backend & product", fr: "Backend & produit" } as L,
      tagline: { en: "From the API to the desktop app.", fr: "De l'API à l'application de bureau." } as L,
      items: [
        { n: "Go", used: ["Seshat", "Hello Pulse"] },
        { n: "Python", used: ["Seshat", "Allianz", "Tech Watch Agent"] },
        { n: "TypeScript", used: ["Seshat", "Hello Pulse"] },
        { n: "Next.js / React", used: ["Hello Pulse", "Tech Watch Agent"] },
        { n: "FastAPI", used: ["Tech Watch Agent", "Solar forecasting"] },
        { n: "Electron", used: ["SeshatOS"] },
        { n: "gRPC", used: ["Seshat"] },
        { n: "REST & SSE", used: ["Hello Pulse"] },
        { n: "WebSocket", used: ["Hello Pulse"] },
      ],
    },
    {
      id: "data",
      icon: "database",
      name: { en: "Data engineering", fr: "Data engineering" } as L,
      tagline: { en: "Pipelines that pass parity tests.", fr: "Des pipelines qui passent les tests de parité." } as L,
      items: [
        { n: "PySpark", used: ["Allianz", "BI Retail"] },
        { n: "Azure Databricks", used: ["Allianz"] },
        { n: "Medallion architecture", used: ["Allianz"] },
        { n: "PostgreSQL / pgvector", used: ["Seshat", "Hello Pulse", "Tech Watch Agent", "BI Retail"] },
        { n: "SQL", used: ["Allianz", "BI Retail"] },
        { n: "Airflow", used: ["BI Retail"] },
        { n: "Pandas / NumPy", used: ["Lyne et Frères", "Solar forecasting"] },
        { n: "Parquet", used: ["Allianz"] },
        { n: "Data quality", used: ["Allianz"] },
      ],
    },
    {
      id: "ml",
      icon: "eye",
      name: { en: "Machine learning & vision", fr: "Machine learning & vision" } as L,
      tagline: { en: "Where I started.", fr: "Là où j'ai commencé." } as L,
      items: [
        { n: "PyTorch", used: ["Sylvagreg"] },
        { n: "GANs", used: ["Sylvagreg"] },
        { n: "Photogrammetry", used: ["Sylvagreg", "Sylva3D"] },
        { n: "YOLO / OpenCV", used: ["Football video analysis", "Waste-collection robot"] },
        { n: "Scikit-learn", used: ["Solar forecasting"] },
        { n: "Reinforcement learning", used: ["Waste-collection robot"] },
        { n: "TensorFlow" },
      ],
    },
    {
      id: "cloud",
      icon: "cloud",
      name: { en: "Cloud & delivery", fr: "Cloud & livraison" } as L,
      tagline: { en: "Shipping it, and keeping it running.", fr: "Le livrer, et le garder en route." } as L,
      items: [
        { n: "Docker", used: ["Hello Pulse", "BI Retail", "Sylvagreg", "Tech Watch Agent"] },
        { n: "Azure", used: ["Allianz"] },
        { n: "AWS", used: ["Sylvagreg"] },
        { n: "Git & GitHub Actions", used: ["Hello Pulse", "Seshat"] },
        { n: "CI/CD", used: ["Hello Pulse", "Seshat"] },
        { n: "Power BI", used: ["BI Retail"] },
        { n: "Streamlit", used: ["Lyne et Frères"] },
      ],
    },
  ] as { id: string; icon: string; name: L; tagline: L; items: Skill[] }[],
};

export const journey = {
  title: { en: "From Cotonou to Paris.", fr: "De Cotonou à Paris." } as L,
  lead: {
    en: "Four cities, three languages learned on the way, and one constant: building things people can use.",
    fr: "Quatre villes, des langues apprises en chemin, et une constante : construire des choses utiles.",
  } as L,
  stops: [
    { city: "Cotonou", country: { en: "Benin", fr: "Bénin" } as L, years: "2020 – 2022", text: { en: "Native speaker of Fon, Yoruba and Goun. Preparatory studies in Mathematics, Physics and Engineering Sciences at CPMS.", fr: "Langues maternelles : fon, yoruba et goun. Classes préparatoires en Maths, Physique et Sciences de l’ingénieur au CPMS." } as L },
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
      { t: { en: "Mathematics, Physics & Engineering Sciences", fr: "Maths, Physique et Sciences de l’ingénieur" } as L, s: "CPMS · Cotonou", p: "2020 – 2022" },
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
      { lvl: 6, t: { en: "French", fr: "Français" } as L, d: { en: "Native", fr: "Langue maternelle" } as L },
      { lvl: 4, t: { en: "English", fr: "Anglais" } as L, d: { en: "B2, Linguaskill Business", fr: "B2, Linguaskill Business" } as L },
      { lvl: 6, t: { en: "Yoruba, Fon, Goun", fr: "Yoruba, fon, goun" } as L, d: { en: "Native", fr: "Langues maternelles" } as L },
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
    view: { en: "View", fr: "Voir" } as L,
    download: { en: "Download", fr: "Télécharger" } as L,
    newTab: { en: "opens in a new tab", fr: "s’ouvre dans un nouvel onglet" } as L,
    label: { en: "Résumés", fr: "CV" } as L,
    title: { en: "Choose a profile", fr: "Choisir un profil" } as L,
    hint: { en: "Open a résumé to read it, or use the download icon to save a copy.", fr: "Ouvrez un CV pour le consulter, ou utilisez l’icône de téléchargement pour le conserver." } as L,
    items: [
      {
        name: { en: "AI / GenAI Engineer", fr: "AI / GenAI Engineer" } as L,
        tag: { en: "Agents, RAG, LLM systems", fr: "Agents, RAG, systèmes LLM" } as L,
        en: "/cv/Stephane-Kpoviessi-CV-AI-GenAI-Engineer-EN.pdf?v=20261024",
        fr: "/cv/Stephane-Kpoviessi-CV-AI-GenAI-Engineer-FR.pdf?v=20261024",
      },
      {
        name: { en: "Machine Learning / AI Engineer", fr: "Machine Learning / AI Engineer" } as L,
        tag: { en: "Models to integrated AI apps", fr: "Des modèles aux applications IA" } as L,
        en: "/cv/Stephane-Kpoviessi-CV-ML-AI-Engineer-EN.pdf?v=20261024",
        fr: "/cv/Stephane-Kpoviessi-CV-ML-AI-Engineer-FR.pdf?v=20261024",
      },
      {
        name: { en: "Data Analyst / Data Engineer", fr: "Data Analyst / Data Engineer" } as L,
        tag: { en: "SQL, Python, BI, Databricks", fr: "SQL, Python, BI, Databricks" } as L,
        en: "/cv/Stephane-Kpoviessi-CV-Data-Engineer-EN.pdf?v=20261024",
        fr: "/cv/Stephane-Kpoviessi-CV-Data-Engineer-FR.pdf?v=20261024",
      },
      {
        name: { en: "Freelance AI Engineer", fr: "AI Engineer Freelance" } as L,
        tag: { en: "AI integration missions", fr: "Missions d'intégration d'IA" } as L,
        en: "/cv/Stephane-Kpoviessi-CV-Freelance-AI-Engineer-EN.pdf?v=20261024",
        fr: "/cv/Stephane-Kpoviessi-CV-Freelance-AI-Engineer-FR.pdf?v=20261024",
      },
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
