# HDE Software Studio — Platform Website

> **Custom Software Applications Engineered for Real Business Impact**  
> Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide React**, inspired by the precision industrial studio aesthetic of **[getartcraft.com](https://getartcraft.com/)**.

---

## 🚀 Key Features

1. **ArtCraft Precision Visual Identity**:
   - **Warm Parchment Light Theme** (`#f2f1ee` base, `#faf9f7` raised, `#101014` ink, hairline borders).
   - **Obsidian Dark Theme** (`#0b0b0c` base, `#141416` raised, `#f2f1ee` ink, hairline borders).
   - **Typographic Pairing**:
     - Headings: **Archivo** (Geometric, uppercase, tight tracking `tracking-[-0.03em]`).
     - Editorial Accents: **Instrument Serif** (Expressive italics for contrast phrases).
     - Body: **Inter** (Clean technical readability).
     - Technical HUD & Badges: **JetBrains Mono** (Monospace tags, coordinates, live radar dots).
2. **Showcase of Verified Production Applications with Official Logos**:
   - **AI Home Decorator** ([Google Play Store](https://play.google.com/store/apps/details?id=com.aihomedecorator.twa)): 5,000+ installs, generative AI interior restyling.
   - **HDE Construction Estimator & Directory** ([homedesignenglish.com](https://homedesignenglish.com/)): Dynamic material & labor estimation engine with contractor verification.
   - **Wall Paint AI Visualizer** ([wallpaint.in](https://wallpaint.in/)): Computer vision edge detection & realistic surface recoloring.
   - **HDE Studio (Desktop CAD Suite)**: 2D/3D architectural drafting workspace with interactive screenshot gallery modal.
   - **Cloudflare R2 Asset Hub**: S3-compatible, zero-egress document distribution.
   - **Developer Automation CLI**: Cross-platform automation toolchain.
3. **Comprehensive Capabilities**: 10 tailored services covering Frontend, Backend, Full Stack SaaS, Custom Business Logic, AI Integrations, API Gateways, Mobile Apps, Desktop CAD, CLI Tools, and Bug Fixing & Managed Hosting.
4. **Transparent Yes / No Scope Philosophy**: A grounded engineering commitment — when we can deliver with excellence, we say YES; if an inquiry is misaligned or mathematically unviable, we say NO.
5. **Interactive Custom Application Order Configurator**:
   - Multi-select application types and lifecycle scopes.
   - Real-time Technical Blueprint specification generator.
   - One-click Email order submission (`thyagaraja1983@gmail.com`) + server-side lead ingestion (`/api/order`).
   - Direct WhatsApp discussion (`+919113989237`).
   - One-click copy specification to clipboard.

---

## 🧞 Available Scripts

```bash
# Start local live development server (opens at http://localhost:3000)
npm run dev

# Build production bundle (verified & optimized)
npm run build

# Start production server
npm run start
```

---

## 📁 Repository Structure

```
.
├── public/
│   └── images/
│       ├── ai-home-decorator-logo.jpg # Official AI Home Decorator logo
│       ├── hde-directory-logo.png     # Official HDE Directory logo
│       ├── wall-paint-logo.png        # Official Wall Paint AI logo
│       ├── hde-icon.png               # HDE Studio icon
│       ├── hde-tech-logo.svg          # Custom royalty-free cybernetic vector mark
│       └── portfolio/                 # CAD screenshots & blueprints
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── order/
│   │   │       └── route.ts           # Server-side order inquiry API handler
│   │   ├── globals.css                # CSS variables, ArtCraft tokens, fonts & animations
│   │   ├── layout.tsx                 # Root layout, viewport theme colors, metadata
│   │   └── page.tsx                   # Main orchestrator page
│   ├── components/
│   │   ├── Navbar.tsx                 # Status HUD, links, theme switch, invert CTA
│   │   ├── Hero.tsx                   # Archivo display headline & 4-metric grid
│   │   ├── LiveProduction.tsx         # Verified apps with official logos
│   │   ├── Services.tsx               # 10 tailored capabilities with hairline grids
│   │   ├── Projects.tsx               # Clean, logo-driven application cards
│   │   ├── Process.tsx                # 5-stage lifecycle & code audit callout
│   │   ├── Philosophy.tsx             # Editorial YES vs NO scope manifesto
│   │   ├── TeamAbout.tsx              # Distributed team roster & industries
│   │   ├── OrderConfigurator.tsx      # Real-time technical blueprint builder
│   │   ├── GalleryModal.tsx           # CAD screenshot viewer modal
│   │   └── Footer.tsx                 # Studio footnote & live system directory
│   ├── data/
│   │   └── portfolioData.ts           # Portfolio projects & service data
│   └── types.ts                       # TypeScript interfaces
├── next.config.mjs                    # Next.js configuration
├── package.json                       # Next.js 14, React 18, Tailwind 3, Lucide React
├── postcss.config.mjs                 # PostCSS configuration
├── tailwind.config.js                 # Theme tokens & font family mappings
└── tsconfig.json                      # Next.js TypeScript config
```
