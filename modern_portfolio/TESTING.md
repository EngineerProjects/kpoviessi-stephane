# 🧪 Testing & Performance Guide

Comprehensive testing and performance optimization for your portfolio.

## 🚀 Performance Optimization

### **Image Optimization**
```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['example.com'], // Add external image domains
  },
};
```

### **Bundle Analysis**
```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze bundle
ANALYZE=true npm run build
```

### **Core Web Vitals Optimization**

**1. Largest Contentful Paint (LCP)**
- Optimize hero images
- Use `priority` prop on hero images
- Implement proper loading states

**2. First Input Delay (FID)**
- Minimize JavaScript execution time
- Use `next/dynamic` for heavy components
- Implement code splitting

**3. Cumulative Layout Shift (CLS)**
- Specify image dimensions
- Reserve space for dynamic content
- Use `transform` instead of changing layout properties

## ⚡ Performance Best Practices

### **Code Splitting**
```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false // Client-side only if needed
});
```

### **Lazy Loading**
```typescript
// Lazy load components below the fold
const LazySection = dynamic(() => import('./LazySection'), {
  loading: () => <div>Loading...</div>
});
```

### **Font Optimization**
```typescript
// In app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Improve loading performance
  preload: true,
});
```

## 🧪 Testing Checklist

### **Manual Testing**

**✅ Navigation**
- [ ] All navigation links work
- [ ] Mobile menu functions properly
- [ ] Breadcrumbs are accurate
- [ ] Back button works correctly

**✅ Responsive Design**
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Large screens (1920px+)

**✅ Language Switching**
- [ ] EN ↔ FR switching works
- [ ] Content translates correctly
- [ ] Language persists on page reload
- [ ] URL doesn't break on language change

**✅ Forms & Interactions**
- [ ] Contact form submits successfully
- [ ] Email validation works
- [ ] Loading states display
- [ ] Success/error messages show
- [ ] Form resets after submission

**✅ Projects Section**
- [ ] Category filtering works
- [ ] Categories stay visible after selection
- [ ] "All Projects" resets filters
- [ ] Project cards display correctly
- [ ] External links open in new tabs

**✅ Performance**
- [ ] Page loads under 3 seconds
- [ ] Images load progressively
- [ ] Animations are smooth (60fps)
- [ ] No layout shifts on load
- [ ] Scroll is smooth

### **Automated Testing Tools**

**1. Lighthouse (Built into Chrome DevTools)**
```bash
# Test performance
# Target scores:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 95+
# SEO: 95+
```

**2. PageSpeed Insights**
- Visit: https://pagespeed.web.dev/
- Test both mobile and desktop
- Follow optimization suggestions

**3. GTmetrix**
- Visit: https://gtmetrix.com/
- Comprehensive performance analysis
- Waterfall chart for optimization

**4. WebPageTest**
- Visit: https://www.webpagetest.org/
- Detailed performance metrics
- Connection speed simulation

## 📊 Performance Monitoring

### **Real User Monitoring**
```typescript
// utils/performance.ts
export function reportWebVitals(metric: any) {
  // Log to analytics service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.label,
      non_interaction: true,
    });
  }
}
```

### **Error Monitoring**
```typescript
// utils/errorTracking.ts
export function trackError(error: Error, context?: string) {
  console.error('Application Error:', error, context);
  
  // Send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Example: Sentry, LogRocket, etc.
  }
}
```

## 🔍 SEO Testing

### **Meta Tags Validation**
- [ ] Title tags (50-60 characters)
- [ ] Meta descriptions (150-160 characters)
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Canonical URLs

### **SEO Tools**
1. **Google Search Console**
   - Monitor search performance
   - Check for crawl errors
   - Submit sitemaps

2. **Facebook Debugger**
   - Test Open Graph tags
   - Preview social shares

3. **Twitter Card Validator**
   - Validate Twitter cards
   - Preview tweet appearance

## 🔧 Browser Testing

### **Desktop Browsers**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### **Mobile Browsers**
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Samsung Internet
- [ ] Firefox Mobile

## 📱 Device Testing

### **Viewport Testing**
```css
/* Test these breakpoints */
/* Mobile: 320px, 375px, 414px */
/* Tablet: 768px, 834px, 1024px */
/* Desktop: 1280px, 1440px, 1920px */
```

### **Touch Testing**
- [ ] Touch targets 44px+ minimum
- [ ] Swipe gestures work
- [ ] Pinch zoom disabled where appropriate
- [ ] No hover states on touch devices

## 🚨 Accessibility Testing

### **WCAG 2.1 AA Compliance**
- [ ] Color contrast 4.5:1 minimum
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Focus indicators visible
- [ ] Alt text for images
- [ ] Semantic HTML structure

### **Testing Tools**
1. **axe-core** (Browser extension)
2. **Lighthouse** accessibility audit
3. **WAVE** Web Accessibility Evaluator
4. **Screen reader testing** (NVDA, JAWS, VoiceOver)

## 🎯 Performance Targets

### **Core Web Vitals**
- **LCP**: < 2.5 seconds
- **FID**: < 100 milliseconds
- **CLS**: < 0.1

### **Additional Metrics**
- **Time to First Byte**: < 0.8 seconds
- **First Contentful Paint**: < 1.8 seconds
- **Speed Index**: < 3.4 seconds
- **Total Blocking Time**: < 200 milliseconds

### **Network Performance**
- **Bundle Size**: < 200KB gzipped
- **Image Optimization**: WebP/AVIF formats
- **Caching**: Proper cache headers set
- **CDN**: Static assets served from CDN

## 🔄 Continuous Testing

### **Pre-deployment Testing**
```bash
#!/bin/bash
# testing-script.sh

echo "Running pre-deployment tests..."

# Build test
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed"
  exit 1
fi

# Type check
npm run type-check
if [ $? -ne 0 ]; then
  echo "❌ Type check failed"
  exit 1
fi

# Linting
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ Linting failed"
  exit 1
fi

echo "✅ All tests passed!"
```

### **Performance Budget**
```json
// performance-budget.json
{
  "budget": {
    "javascript": "200KB",
    "css": "50KB",
    "images": "500KB",
    "total": "1MB"
  }
}
```

Remember: Test early, test often, and always test on real devices! 📱✨