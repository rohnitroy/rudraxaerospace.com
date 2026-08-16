# RudraX Aerospace Landing Page - Deployment Guide

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```
The site will open automatically at `http://localhost:3000`

3. **Build for production:**
```bash
npm run build
```

---

## 📦 Deploy to Vercel

Vercel is optimized for Vite + React and provides automatic deployments.

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy from project directory:**
```bash
vercel
```

3. **Follow the prompts:**
   - Link to your Vercel account (or create one at vercel.com)
   - Confirm project settings
   - Wait for deployment to complete

### Option 2: GitHub Integration

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: RudraX Aerospace landing page"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

### Option 3: Manual Deployment

1. **Build the project:**
```bash
npm run build
```

2. **Deploy the `dist/` folder:**
   - Zip the `dist` folder
   - Upload to Vercel via the web dashboard
   - Or drag-and-drop to [vercel.com/new](https://vercel.com/new)

---

## 🎨 Design Details

### Color Scheme
- **Light theme:** White background, navy text (#1a2332), steel blue accents (#2563eb)
- **Dark theme:** Dark background (#0f1419), white text, lighter blue accents (#60a5fa)
- Automatically switches based on system preference

### Typography
- **Display (Headlines):** Avenir Black/Heavy, geometric sans-serif
- **Body:** Avenir Medium, optimized for readability
- **Animations:** Fade-in effects on page load, respects `prefers-reduced-motion`

### Responsive
- Optimized for mobile, tablet, and desktop
- Logo and typography scale responsively
- Touch-friendly tap targets

---

## 🔧 Configuration

### Custom Domain
After deployment on Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `rudrax.com`)
4. Follow DNS setup instructions

### Environment Variables
If you add environment variables later, create `.env.local`:
```
VITE_API_URL=https://your-api.com
```
Access in code: `import.meta.env.VITE_API_URL`

### Build Optimization
Vercel automatically:
- Minifies code
- Optimizes images
- Enables gzip compression
- Configures caching headers

---

## 📊 Performance

- **Lighthouse Score Target:** 95+
- **First Contentful Paint:** <1.2s
- **Cumulative Layout Shift:** <0.1

Vite's optimizations ensure fast load times. Monitor via Vercel Analytics.

---

## 🔒 Security

- No API keys or secrets in code
- Content Security Policy enabled
- HTTPS enforced by Vercel
- Regular dependency updates recommended

```bash
npm outdated          # Check for updates
npm update            # Update packages
npm audit             # Security audit
```

---

## 📝 Content Updates

### Update Copy
Edit `/src/App.jsx` and modify the text in the component.

### Update Logo
Replace `/src/assets/rudrax-logo.png` with new logo file, or update import path.

### Update Meta Tags
Edit `/index.html` to change page title, description, or favicon.

### Revert to Previous Deployment
Use Vercel dashboard → Deployments → Click any previous deployment → "Promote to Production"

---

## 🐛 Troubleshooting

### Site won't load locally
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build fails on Vercel
Check Vercel build logs:
1. Go to your project on Vercel
2. Click on the failed deployment
3. View "Build" tab for errors

### Dark mode not working
Ensure your system preference is set correctly, or check browser DevTools → Rendering → Emulate CSS media feature prefers-color-scheme

---

## 📞 Support

For Vite issues: [vitejs.dev](https://vitejs.dev)  
For Vercel issues: [vercel.com/docs](https://vercel.com/docs)  
For React issues: [react.dev](https://react.dev)

---

**Deployment Status:** Ready for production ✅
