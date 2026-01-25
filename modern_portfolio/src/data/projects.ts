// src/data/projects.ts
import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: "enterprise-ai",
    title: "Enterprise-AI: Multi-Agent AI Systems",
    description: "Building multi-agent AI organizations that collaborate like humans for enterprise-grade autonomous AI workforces.",
    longDescription: "Enterprise-AI revolutionizes complex task handling by creating autonomous AI teams that collaborate like human organizations. Features true multi-agent collaboration with persistent memory, tool sharing, and autonomous coordination - enabling AI teams to handle enterprise-level complexity with minimal human oversight. Includes 15+ specialized tools across research, code execution, file operations, and browser automation.",
    tags: ["Multi-Agent Systems", "LLM", "AI Collaboration", "Autonomous Agents", "Enterprise AI", "Python"],
    github: "https://github.com/EngineerProjects/Enterprise-AI"
  },
  {
    id: "brain-tumor-classification",
    title: "Brain Tumor Classification using AI",
    description: "AI system for classifying brain tumors in MRI images using advanced computer vision techniques.",
    longDescription: "Developed a comprehensive AI system for classifying brain tumors into 4 categories from 7,023 MRI images. Compared various architectures including CNN, Transfer Learning with MobileNetV2, and Vision Transformer. Achieved significant performance gains with ViT and transfer learning approaches through data augmentation and multi-metric evaluation system.",
    tags: ["Computer Vision", "Medical AI", "Deep Learning", "CNN", "Vision Transformer", "Healthcare"],
    link: "https://www.kaggle.com/code/kpoviesistphane/ia-sant-project"
  },
  {
    id: "rag-chatbot-system",
    title: "RAG Chatbot System with LLM",
    description: "Advanced chatbot with Retrieval-Augmented Generation, web search integration, and multi-language support.",
    longDescription: "Comprehensive RAG system integrating ChromaDB for vector similarity search, Ollama language model, optional web search, and Streamlit frontend. Features document upload & management, web search integration, text-to-speech and speech-to-text capabilities, embeddings service with dynamic model loading, and complete end-to-end pipeline for document indexing and LLM-based chat.",
    tags: ["RAG", "LLM", "NLP", "Vector Database", "Web Search", "Streamlit", "FastAPI"],
    github: "https://github.com/Amiche02/ollama"
  },
  {
    id: "pulserag",
    title: "PulseRAG: Advanced Document Processing System",
    description: "Core component for Hello Pulse with document processing, web search integration, and TTS/STT functionalities.",
    longDescription: "PulseRAG handles document processing, web search integration, text embeddings, and text-to-speech functionalities to enrich brainstorming sessions. Features hybrid text segmentation, embeddings with sentence-transformers, web search with DuckDuckGo, multilingual TTS with Coqui TTS, and real-time STT with Whisper. Designed for Hello Pulse innovation platform.",
    tags: ["RAG", "Document Processing", "TTS", "STT", "Web Search", "Embeddings", "Innovation Platform"],
    github: "https://github.com/EngineerProjects/PulseRAG"
  },
  {
    id: "football-video-analysis",
    title: "Grassroot Football Video Analysis",
    description: "AI system for analyzing grassroots football match videos using advanced computer vision and big data infrastructure.",
    longDescription: "Comprehensive system for analyzing grassroots football match videos using player detection, tracking, and performance analysis tools. Features player tracking with YOLOv5 & YOLOv8, camera motion estimation, field view transformation, ball position interpolation, automatic team classification via K-Means clustering, and big data video management for 500+ match videos.",
    tags: ["Computer Vision", "Object Detection", "Sports Analytics", "YOLO", "OpenCV", "Big Data"],
    github: "https://github.com/Amiche02/Grassroot_football_video_analysis"
  },
  {
    id: "plant-disease-detection",
    title: "Early Plants Disease Detection System",
    description: "Real-time plant disease detection system using YOLOv8 with 96% accuracy for agricultural applications.",
    longDescription: "Computer vision system for detecting and classifying plant diseases from images using YOLOv8. Created web application for real-time detection of pathologies on tomato leaves. Achieved 96% precision (mAP50=0.965) and deployed on Hugging Face Spaces for public access. Includes comprehensive dataset analysis and model optimization techniques.",
    tags: ["Computer Vision", "YOLOv8", "Agriculture", "Disease Detection", "Web Application", "Hugging Face"],
    github: "https://huggingface.co/spaces/Amiche02/Plant-Disease-Detector",
    link: "https://www.kaggle.com/code/kpoviesistphane/tomato-leaf-disease-detection-with-python"
  },
  {
    id: "bi-retail-project",
    title: "BI_Retail: Business Intelligence Solution",
    description: "Comprehensive BI solution for retail supply chain and sales data analysis using Docker, Airflow, and PowerBI.",
    longDescription: "Complete Business Intelligence solution analyzing retail supply chain and sales data. Leverages Docker for environment setup, Apache Airflow for workflow management, PostgreSQL as data warehouse, and PowerBI for visualization. Features automated ETL processes, comprehensive dashboards for logistics performance and sales analysis, and scalable cloud deployment architecture.",
    tags: ["Business Intelligence", "ETL", "Apache Airflow", "PostgreSQL", "PowerBI", "Docker", "Data Warehouse"],
    github: "https://github.com/Amiche02/BI_Retail"
  },
  {
    id: "bert-sentiment-analysis",
    title: "BERT Sentiment Analysis System",
    description: "PyTorch implementation for tweet sentiment extraction using BERT-based models with modern Transformers.",
    longDescription: "Advanced sentiment analysis system using BERT for tweet sentiment extraction. Features custom dataset preprocessing, model definition based on bert-base-uncased, training and evaluation with extraction head for start/end indices prediction, and inference for extracting sentiment-bearing phrases. Updated for modern Hugging Face Transformers v4.35.0+ with Docker support.",
    tags: ["BERT", "NLP", "Sentiment Analysis", "PyTorch", "Transformers", "Docker"],
    github: "https://github.com/Amiche02/Bert-sentiment"
  },
  {
    id: "sylva3d-photogrammetry",
    title: "Sylva3D: Photogrammetry GUI",
    description: "Dockerized GUI application for photogrammetry tasks using COLMAP and OpenMVS with CUDA acceleration.",
    longDescription: "Comprehensive photogrammetry solution providing GUI for 3D model reconstruction from photographs. Integrates COLMAP and OpenMVS with CUDA acceleration for efficient processing. Features complete photogrammetry pipeline, graphical user interface built with Python and tkinter, GPU acceleration with NVIDIA CUDA, and Docker deployment for easy setup.",
    tags: ["Photogrammetry", "3D Modeling", "COLMAP", "OpenMVS", "CUDA", "GUI", "Docker"],
    github: "https://github.com/Amiche02/Sylva3dGUI"
  },
  {
    id: "house-prices-prediction",
    title: "Advanced House Prices Prediction",
    description: "Kaggle competition solution using ensemble methods and advanced feature engineering for real estate price prediction.",
    longDescription: "Comprehensive machine learning solution for house price prediction achieving top 300/5000 ranking on Kaggle. Features extensive EDA and advanced feature engineering with missing data treatment, outlier detection, and logarithmic/Box-Cox transformations. Implements ensemble models via blending and stacking (Random Forest, GBM, XGBoost, SVR, Ridge) achieving RMSE of 0.122.",
    tags: ["Machine Learning", "Ensemble Methods", "Feature Engineering", "XGBoost", "Kaggle", "Real Estate"],
    link: "https://www.kaggle.com/code/kpoviesistphane/house-prices-analysis-with-python"
  },
  {
    id: "code-ingest-tool",
    title: "LocalIngest: Code Analysis Tool",
    description: "CLI and Terminal UI tool for analyzing code repositories and generating comprehensive Markdown reports.",
    longDescription: "Beautiful and fast CLI tool for analyzing any code repository and automatically generating Markdown reports. Features full directory structure analysis, source code content preview, project summary with statistics, interactive and non-interactive modes, and customizable exclusion patterns. Designed for developers who want to quickly document, inspect, or prepare repositories for LLM analysis.",
    tags: ["CLI Tools", "Code Analysis", "Documentation", "Terminal UI", "Developer Tools"],
    github: "https://github.com/EngineerProjects/LocalIngest"
  },
  {
    id: "shop-app-service",
    title: "Shop-App: E-commerce Backend API",
    description: "Robust e-commerce backend API built with Golang, Gin, PostgreSQL, and Docker with JWT authentication.",
    longDescription: "Complete e-commerce backend solution featuring user registration/login, product management, basket functionality, and order processing. Uses JWT-based authentication and supports fully containerized deployment. Includes Infrastructure as Code (IaC) setup using Terraform for Azure cloud resources and CI/CD with GitHub Actions for scalable deployment.",
    tags: ["Golang", "E-commerce", "REST API", "PostgreSQL", "Docker", "Terraform", "Azure"],
    github: "https://github.com/Amiche02/Shop-app-service"
  },
  {
    id: "ml-pipeline-collection",
    title: "ML Pipeline: Machine Learning Projects Collection",
    description: "Comprehensive collection of end-to-end machine learning projects covering various domains and applications.",
    longDescription: "Repository containing multiple machine learning projects including disease prediction (breast cancer, heart disease, liver disease, Parkinson's), recommendation systems (books, movies, hybrid systems), sentiment analysis, fraud detection, and energy consumption forecasting. Each project follows structured approach with data preprocessing, feature engineering, model training, evaluation, and prediction.",
    tags: ["Machine Learning", "Disease Prediction", "Recommendation Systems", "Data Science", "Healthcare AI"],
    github: "https://github.com/Amiche02/ML_Pipeline"
  },
  {
    id: "gemini-ocr",
    title: "Gemini OCR: Table Extraction from Images",
    description: "Advanced OCR system combining Tesseract and Gemini LLM for precise table extraction and interpretation from images.",
    longDescription: "Innovative tool combining Optical Character Recognition (OCR) and advanced Language Model (LLM) to extract and interpret tables from images. Features advanced OCR with Tesseract, Gemini model integration for data analysis and structuring, high accuracy with optimized algorithms, and versatility for processing various image types containing tables.",
    tags: ["OCR", "LLM", "Table Extraction", "Gemini", "Computer Vision", "Document Processing"],
    github: "https://github.com/Amiche02/Gemini-OCR"
  },
  {
    id: "audio-to-text",
    title: "Audio2Text: Speech Recognition App",
    description: "Simple web application for audio-to-text transcription using speech recognition technology with Gradio interface.",
    longDescription: "Web application for transcribing audio to text using speech recognition technology. Built with Python, utilizing Gradio for user interface and Hugging Face Transformers for speech recognition. Features real-time audio recording, audio file upload support, and simple intuitive user interface for seamless transcription experience.",
    tags: ["Speech Recognition", "Audio Processing", "Gradio", "Transcription", "Web Application"],
    github: "https://github.com/Amiche02/Audio2text"
  }
];
