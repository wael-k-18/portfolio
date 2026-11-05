# Wael Karbelkar — Personal Portfolio

**Tokyo Midnight** themed personal portfolio website for Wael Karbelkar — AI/ML Developer · Computer Vision · Creative Technologist.

## 🌃 Design Philosophy

Inspired by retro Japanese street racing culture, Tokyo at midnight, neon-lit streets, and the visual atmosphere of *Fast & Furious: Tokyo Drift*. A dark, cinematic, atmospheric portfolio that feels like driving through Tokyo at midnight.

## ✨ Features

- **Tokyo Midnight Theme** — Near-black backgrounds with electric cyan, neon magenta, and violet accents
- **Cinematic Animations** — Framer Motion powered scroll reveals, hover effects, and entrance animations
- **Responsive Design** — Mobile-first, works beautifully on all devices
- **Glassmorphism UI** — Modern glass/backdrop-filter effects throughout
- **Accessible** — Semantic HTML, keyboard navigation, reduced motion support
- **SEO Optimized** — Meta tags, Open Graph, Twitter cards, structured data

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Syne (display), Inter (body), JetBrains Mono (code)
- **Deployment:** Vercel-ready

## 📁 Project Structure

```
├── app/
│   ├── components/       # React components (Navbar, Hero, About, etc.)
│   ├── data/
│   │   └── portfolio.ts  # Centralized portfolio content
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── globals.css       # Global styles & design tokens
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page composition
├── public/               # Static assets
├── .claude/              # Configuration for Claude
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/wael-k-18/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design Tokens

Colors are defined in `app/globals.css` as CSS custom properties:

```css
:root {
  --background: #050508;        /* Near-black */
  --card-bg: #0d0d14;           /* Dark charcoal */
  --accent-cyan: #00f3ff;       /* Electric cyan */
  --accent-magenta: #ff00aa;    /* Neon magenta */
  --accent-violet: #aa00ff;     /* Neon violet */
  --accent-red: #ff2a6d;        /* Accent red */
  --glass-bg: rgba(13, 13, 20, 0.7);
  --glass-border: rgba(255, 255, 255, 0.08);
}
```

## 📝 Content Management

All portfolio content is centralized in `app/data/portfolio.ts`. Update this file to modify:

- Personal information
- Experience entries
- Project details
- Skills categories
- Education & certifications
- Creative work
- Contact information

No component editing required for content changes.

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Deploy — zero configuration needed

```bash
# Build verification
npm run build
```

### Manual Build

```bash
npm run build
npm run start
```

The `out/` directory (if using static export) or the `.next/` directory contains production-ready files.

## 📱 Responsive Breakpoints

- **Mobile:** ≤ 640px
- **Tablet:** 641px – 1024px
- **Desktop:** ≥ 1025px

## ♿ Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h6)
- Focus-visible states
- `prefers-reduced-motion` support
- Alt text for all meaningful images
- Sufficient color contrast (WCAG AA)

## 🔧 Customization

### Fonts

Change fonts in `app/layout.tsx`:

```typescript
const syne = Syne({ /* ... */ });
const inter = Inter({ /* ... */ });
const jetbrainsMono = JetBrains_Mono({ /* ... */ });
```

### Colors

Modify CSS variables in `app/globals.css`:

```css
:root {
  --accent-cyan: #your-color;
  --accent-magenta: #your-color;
  /* ... */
}
```

### Animations

Adjust Framer Motion variants in component files under `app/components/`.

## 📄 License

MIT License — Feel free to use as inspiration for your own portfolio.

## 🤝 Connect

- **Email:** waelkarbelkar@gmail.com
- **LinkedIn:** [linkedin.com/in/wael-k18](https://www.linkedin.com/in/wael-k18)
- **GitHub:** [github.com/wael-k-18](https://github.com/wael-k-18)
- **Instagram:** [instagram.com/waelfdv_](https://www.instagram.com/waelfdv_)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.