# Projets

---

## 🤖 Agents IA d’entreprise

**Lien :** https://github.com/EngineerProjects/Enterprise-AI  

### Contexte  
Les entreprises ont besoin d’automatiser des tâches complexes impliquant plusieurs étapes, outils et décisions humaines. Les LLM seuls restent limités sans orchestration et structuration des rôles.

### Solution  
Conception d’un système multi-agents où chaque agent possède un rôle spécifique (analyse, exécution, coordination).

Mise en place d’un orchestrateur central permettant de :
- coordonner les agents  
- gérer les échanges  
- structurer les workflows  

Les agents sont capables d’interagir avec des outils externes (web, code, données) pour accomplir des tâches complexes.

### Architecture  
- Orchestrateur central  
- Agents spécialisés  
- Intégration d’outils externes  
- Gestion du contexte et des interactions  

### Impact  
- Automatisation de workflows complexes  
- Réduction des tâches manuelles  
- Structuration des processus métier  

### Stack  
Python, LLM, Agents, LangChain, Pydantic AI  

---

## 💬 Système Chatbot RAG

**Lien :** https://github.com/Amiche02/ollama  

### Contexte  
Les modèles LLM classiques sont limités par leur absence d’accès à des données actualisées ou spécifiques.

### Solution  
Développement d’un système RAG (Retrieval-Augmented Generation) combinant :
- base vectorielle pour la recherche sémantique  
- intégration de recherche web en temps réel  
- génération de réponses contextualisées via LLM  

Mise en place d’un pipeline complet incluant ingestion, embeddings et gestion des requêtes.

### Architecture  
- Pipeline d’ingestion de données  
- Base vectorielle  
- Moteur de recherche hybride  
- LLM pour génération de réponses  

### Impact  
- Amélioration significative de la pertinence des réponses  
- Capacité à traiter des requêtes dynamiques et contextualisées  

### Stack  
Python, LLM, RAG, Vector Database, FastAPI  

---

## 📊 Solution BI & Data Pipeline

**Lien :** https://github.com/Amiche02/BI_Retail  

### Contexte  
Les données de vente et de supply chain sont souvent dispersées et difficilement exploitables pour la prise de décision.

### Solution  
Développement d’une solution BI complète incluant :
- pipeline ETL pour ingestion et transformation des données  
- structuration des données dans un entrepôt  
- création de dashboards pour le suivi des KPI  

### Architecture  
- Pipeline ETL  
- Base de données PostgreSQL  
- Orchestration avec Airflow  
- Visualisation avec Power BI  

### Impact  
- Meilleure visibilité sur les performances commerciales  
- Optimisation de la supply chain  
- Aide à la prise de décision stratégique  

### Stack  
Python, Airflow, PostgreSQL, Docker, Power BI  

---

## 👁️ Computer Vision — Analyse Vidéo

**Lien :** https://github.com/Amiche02/Grassroot_football_video_analysis  

### Contexte  
L’analyse de performances dans le sport amateur est peu accessible en raison du manque d’outils automatisés.

### Solution  
Développement d’un système de vision par ordinateur pour analyser des vidéos de matchs et extraire des informations pertinentes.

### Fonctionnalités  
- Détection d’objets (joueurs, ballon)  
- Analyse des mouvements  
- Extraction de données exploitables  

### Architecture  
- Pipeline de traitement vidéo  
- Modèles de détection (YOLO / OpenCV)  
- Traitement et analyse des frames  

### Impact  
- Automatisation de l’analyse vidéo  
- Accessibilité à des insights pour le sport amateur  

### Stack  
Python, OpenCV, YOLO, Computer Vision  

---