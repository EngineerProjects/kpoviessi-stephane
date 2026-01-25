# 🚀 Deployment Guide

This guide covers deploying your portfolio to various platforms.

## 🔧 Pre-deployment Checklist

### **Environment Variables**
Ensure you have these environment variables set:
```env
# Required
CONTACT_EMAIL=your-email@domain.com
EMAIL_USER=your-smtp-email@gmail.com  
EMAIL_PASS=your-app-specific-password

# Optional but Recommended
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### **Build Test**
```bash
npm run build
npm run start
```

## 🌟 Vercel (Recommended)

Vercel is the easiest platform for Next.js deployment.

### **Method 1: GitHub Integration**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Connect your GitHub account
4. Import your repository
5. Vercel will auto-detect Next.js and deploy

### **Method 2: Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts to configure your project
```

### **Environment Variables in Vercel**
1. Go to your project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add your environment variables
4. Redeploy your project

### **Custom Domain**
1. Go to **Settings → Domains**
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL is automatically handled

---

## 🚀 Netlify

### **Method 1: Git Integration**
1. Push code to GitHub/GitLab/Bitbucket
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

### **Method 2: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your project
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### **Environment Variables in Netlify**
1. Go to **Site settings → Environment variables**
2. Add your variables
3. Trigger a new deployment

---

## ⚡ Railway

Railway is great for full-stack applications.

### **Deployment Steps**
1. Visit [railway.app](https://railway.app)
2. Connect your GitHub account
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Railway auto-detects Next.js

### **Environment Variables**
1. Go to your project dashboard
2. Click **Variables** tab
3. Add your environment variables
4. Redeploy

### **Custom Domain**
1. Go to **Settings → Domains**
2. Add your custom domain
3. Configure DNS records

---

## 🌊 DigitalOcean App Platform

### **Deployment Steps**
1. Visit [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
5. Add environment variables
6. Deploy

---

## 📦 Docker Deployment

### **Create Dockerfile**
```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### **Update next.config.ts**
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    turbo: {
      // Add any turbo configuration if needed
    }
  }
};

export default nextConfig;
```

### **Build and Run**
```bash
# Build Docker image
docker build -t my-portfolio .

# Run container
docker run -p 3000:3000 my-portfolio
```

---

## 🔍 Post-Deployment Checklist

### **SEO & Performance**
- [ ] Google Analytics is working
- [ ] All pages load correctly
- [ ] Language switching works
- [ ] Contact form sends emails
- [ ] SSL certificate is active
- [ ] Site loads under 3 seconds

### **Testing**
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test language switching
- [ ] Test on mobile devices
- [ ] Test project filtering
- [ ] Check console for errors

### **SEO Setup**
1. **Google Search Console**
   - Add your domain
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Google Analytics**
   - Create property
   - Add tracking ID to environment variables

3. **Meta Tags**
   - Verify Open Graph images work
   - Test with Facebook Debugger
   - Test with Twitter Card Validator

### **Performance Optimization**
```bash
# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

---

## 🛠️ Troubleshooting

### **Common Issues**

**Build Fails**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Environment Variables Not Working**
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart development server after adding variables
- Check variable names for typos

**Images Not Loading**
- Verify image paths are correct
- Check image optimization settings
- Ensure images are in the `public` folder

**Email Not Sending**
- Use App Passwords for Gmail
- Check SMTP settings
- Verify environment variables

---

## 📞 Support

If you encounter issues:
1. Check the [Next.js deployment documentation](https://nextjs.org/docs/deployment)
2. Review platform-specific guides
3. Check environment variable configuration
4. Test locally first with `npm run build && npm start`

Your portfolio is now ready for production! 🎉