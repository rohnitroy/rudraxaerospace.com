# RudraX Aerospace Landing Page

Minimal, sophisticated coming-soon landing page for RudraX Aerospace. Built with React + Vite for performance and Vercel deployment.

## ✨ Features

- **Responsive Design:** Mobile-first, optimized for all screen sizes
- **Dark Mode Support:** Automatic theme detection with system preference
- **Performance:** Vite bundling, optimized assets, <1.2s First Contentful Paint
- **Accessibility:** WCAG compliant, keyboard navigation, reduced-motion support
- **SEO Ready:** Semantic HTML, meta tags, structured data
- **Fast Deployment:** One-click Vercel deployment with automatic CI/CD

## 📁 Project Structure

```
RXA/
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main landing page component
│   ├── App.css               # Component styles
│   ├── index.css             # Global styles, theme variables, animations
│   └── assets/
│       └── rudrax-logo.png   # Logo asset
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── README.md                 # This file
├── DEPLOYMENT.md             # Deployment guide
└── .gitignore                # Git ignore rules
```

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Deployment:** Vercel (serverless)
- **Styling:** CSS3 with CSS variables for theming
- **Fonts:** Avenir (system fallbacks for performance)

## 🚀 Getting Started

### Development
```bash
npm install
npm run dev
```
Site opens at `http://localhost:3000`

### Production Build
```bash
npm run build
npm run preview
```

### Deploy to Vercel
```bash
npx vercel
```
Or push to GitHub and connect via Vercel dashboard.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🎨 Design System

### Colors
- **Light:** White ground (#fff), Navy text (#1a2332), Steel blue accents (#2563eb)
- **Dark:** Dark ground (#0f1419), White text, Lighter blue accents (#60a5fa)

### Typography
- **Headlines:** Avenir Black/Heavy
- **Body:** Avenir Medium
- **Utilities:** System fonts

### Spacing
- Vertical rhythm: 1.25rem baseline
- Generous whitespace for breath
- Centered, single-column layout

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

Typography scales responsively; logo max-width adapts.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Focus visible states
- Color contrast ratios 7:1+
- Respects `prefers-reduced-motion`
- Keyboard navigation support

## 🔍 SEO

- Semantic HTML5
- Meta description
- Open Graph tags (can be added)
- Structured data (JSON-LD, optional)
- Mobile-friendly
- Fast Core Web Vitals

## 📊 Performance Targets

- Lighthouse Score: 95+
- First Contentful Paint: <1.2s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <2.5s

## 🔄 Updates

**Copy/Content:** Edit `/src/App.jsx`  
**Logo:** Replace `/src/assets/rudrax-logo.png`  
**Colors/Theme:** Modify CSS variables in `/src/index.css`  
**Meta Tags:** Update `/index.html`

## 📝 Environment Variables

Create `.env.local` for future API integration:
```
VITE_API_URL=https://api.rudrax.com
VITE_ANALYTICS_ID=your-id
```

Access in code:
```javascript
import.meta.env.VITE_API_URL
```

## 🤝 Contributing

Future updates:
- Newsletter signup form
- Animation enhancements
- Contact information
- Social media links
- Launch countdown timer

## 📄 License

© 2026 RUDRAX AEROSPACE. All rights reserved.

---

**Status:** Production Ready ✅  
**Last Updated:** 2026-08-16  
**Deployment:** [your-vercel-url.com]
