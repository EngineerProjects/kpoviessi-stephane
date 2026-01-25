# 🚀 Stéphane KPOVIESSI - Portfolio

A modern, multilingual portfolio website showcasing expertise in Big Data Engineering, Machine Learning, and AI. Built with Next.js 15, TypeScript, and Tailwind CSS.

![Portfolio Preview](./public/portfolio-preview.png)

## ✨ Features

### 🌍 **Multilingual Support**
- **English & French** with professional translations
- Automatic browser language detection
- Persistent language preferences
- Extensible for additional languages

### 🎯 **Smart Project Categorization**
- **ML/AI** - Machine Learning & Artificial Intelligence projects
- **Data Engineering** - ETL, pipelines, and big data solutions
- **Data Analysis** - Statistical analysis and visualization
- **Web Development** - Full-stack applications

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Modern animations with Framer Motion
- Accessible design principles

### 🏢 **Professional Sections**
- **Experience** - Work history with multilingual descriptions
- **Education** - Academic background and achievements
- **Associations** - Leadership roles and community involvement
- **Certifications** - Professional credentials with verification links
- **Skills** - Technical expertise with proficiency levels

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and interactions

### **Internationalization**
- **react-i18next** - Professional translation management
- **i18next-browser-languagedetector** - Automatic language detection

### **Communication**
- **Nodemailer** - Email functionality for contact form
- **React Hook Form** - Form validation and handling

### **Development & Build**
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Turbopack** - Fast development builds

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ and npm
- Git

### **Installation**

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the portfolio.

### **Environment Configuration**

Create a `.env.local` file with the following variables:

```env
# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password
CONTACT_EMAIL=your_contact@email.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page  
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── data/                 # Static data and content
│   ├── associations.ts   # Association roles
│   ├── certifications.ts # Professional certifications
│   ├── education.ts      # Educational background
│   ├── experience.ts     # Work experience
│   ├── personal.ts       # Personal information
│   ├── projects.ts       # Project portfolio
│   └── skills.ts         # Technical skills
├── i18n/                 # Internationalization
│   ├── i18n.ts          # i18next configuration
│   └── LanguageContext.tsx # Language context provider
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── theme/                # Theme configuration
```

## 🎨 Customization

### **Adding New Languages**

1. Add translations to `src/i18n/i18n.ts`:
```typescript
es: {
  translation: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      // ... more translations
    }
  }
}
```

2. Update data files with new language keys:
```typescript
title: {
  en: "Big Data Engineer",
  fr: "Ingénieur Big Data",
  es: "Ingeniero de Big Data"
}
```

### **Adding New Projects**

Edit `src/data/projects.ts`:
```typescript
{
  id: "new-project",
  title: "Project Title",
  description: "Short description",
  longDescription: "Detailed description",
  tags: ["Machine Learning", "Python", "TensorFlow"],
  github: "https://github.com/username/project",
  link: "https://project-demo.com"
}
```

### **Customizing Styles**

The portfolio uses Tailwind CSS with custom color schemes defined in `tailwind.config.ts`. Modify the theme section to match your preferred colors.

## 📊 Analytics & SEO

### **Google Analytics**
Add your Google Analytics ID to `.env.local` and the Analytics component will automatically track page views and user interactions.

### **SEO Optimization**
- Automatic sitemap generation
- Structured data markup
- Open Graph meta tags
- Responsive meta descriptions
- Multilingual SEO support

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### **Other Platforms**
The portfolio can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Stéphane KPOVIESSI**
- Email: oastephanekpoviessi@gmail.com
- LinkedIn: [stephanekpoviessi](https://linkedin.com/in/stephanekpoviessi)
- GitHub: [Amiche02](https://github.com/Amiche02)

---

**Built with ❤️ using modern web technologies**