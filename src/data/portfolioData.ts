import { Project, ServiceItem, LifecycleStep, TeamMemberRole } from '../types';

export const projectsData: Project[] = [
  {
    id: 'ai-home-decorator',
    title: 'AI Home Decorator',
    tagline: 'Generative AI Spatial Interior Platform',
    category: 'ai',
    categoryLabel: 'AI & Mobile',
    iconLetter: 'AI',
    iconGradient: 'from-indigo-500 to-cyan-400',
    description: 'An end-to-end spatial interior styling platform powered by Google AI Studio Generative AI. Enables users to snap room photos, choose architectural styles, and generate realistic interior redesigns while preserving structural walls and lighting.',
    highlights: [
      '5,000+ Installs on Google Play Store',
      'Real-time image-to-image AI styling pipelines',
      'End-to-end user authentication and image gallery',
      'Production-tested on Google Cloud Platform (GCP)'
    ],
    tags: ['Google AI Studio', 'React', 'TypeScript', 'Supabase', 'GCP', 'Mobile TWA'],
    image: '/images/portfolio/hde-hero.png',
    appLogo: '/images/ai-home-decorator-logo.jpg',
    webLink: 'https://aihomedecorator.com',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.aihomedecorator.twa',
    orderType: 'ai-mobile'
  },
  {
    id: 'hde-directory-estimator',
    title: 'HDE Construction Estimator & Directory',
    tagline: 'SaaS Calculation Engine & Professional Hub',
    category: 'saas',
    categoryLabel: 'SaaS & Web',
    iconLetter: 'HDE',
    iconGradient: 'from-purple-600 to-indigo-600',
    description: 'A logic-heavy construction estimation engine that calculates project budgets, materials, and labor dynamically. Features custom SPA routing and a robust Professional Directory with automated verification workflows and role-based access control (RBAC).',
    highlights: [
      'Dynamic construction cost calculation logic',
      'Professional contractor directory with verification',
      'PWA & Mobile publication with offline support',
      'Supabase database with automated security rules'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Supabase', 'PWA', 'Play Store'],
    image: '/images/portfolio/hde-banner.png',
    appLogo: '/images/hde-directory-logo.png',
    webLink: 'https://homedesignenglish.com/',
    playStoreLink: 'https://play.google.com/store/apps/details?id=in.toolwebsite.twa',
    orderType: 'saas'
  },
  {
    id: 'hde-studio-cad',
    title: 'HDE Studio — Architectural CAD Engine',
    tagline: 'High-Precision 2D/3D Floor Plan Workspace',
    category: 'desktop',
    categoryLabel: 'Desktop & CAD',
    iconLetter: 'CAD',
    iconGradient: 'from-cyan-500 to-blue-600',
    description: 'Specialized desktop software for architectural drafting and space planning. Includes custom CAD furniture blocks, precision wall drafting, real-time dynamic dimensioning, multi-layer floor plans, and publication-ready monochrome vector PDF blueprint exports.',
    highlights: [
      'High-performance Canvas 2D vector drafting engine',
      'Custom block suite with lounge, kitchen, and bathroom components',
      'Interactive dimensioning and snapping guides',
      'High-resolution PDF working sheet export (2480x1754)'
    ],
    tags: ['Desktop CAD', 'Canvas 2D/3D', 'Vectorcraft', 'Architecture', 'PDF Engine'],
    image: '/images/portfolio/workspace.webp',
    appLogo: '/images/hde-icon.png',
    gallery: [
      '/images/portfolio/workspace.webp',
      '/images/portfolio/cad blocks.webp',
      '/images/portfolio/Dimension.webp',
      '/images/portfolio/wall drafting.webp',
      '/images/portfolio/flooring.webp',
      '/images/portfolio/Doors and windows.webp',
      '/images/portfolio/pdf.webp'
    ],
    webLink: null,
    playStoreLink: null,
    orderType: 'desktop-cad'
  },
  {
    id: 'wall-paint-ai',
    title: 'Wall Paint AI',
    tagline: 'Real-Time Surface Color Visualization',
    category: 'ai',
    categoryLabel: 'AI & Web',
    iconLetter: 'WP',
    iconGradient: 'from-amber-500 to-orange-500',
    description: 'An AI-driven web application for instant room wall recoloring. Uses computer vision edge detection combined with custom CSS masking algorithms to achieve photo-realistic color rendering that respects natural room lighting, shadows, and textures.',
    highlights: [
      'Edge detection algorithms for automatic wall segmentation',
      'Realistic blending mode preserving shadows and natural depth',
      'Instant color palette comparison engine',
      'Deployed for fast consumer and contractor visualization'
    ],
    tags: ['Computer Vision', 'Generative AI', 'React', 'Firebase', 'CSS Masking'],
    image: '/images/portfolio/Doors and windows.webp',
    appLogo: '/images/wall-paint-logo.png',
    webLink: 'https://wallpaint.in/',
    playStoreLink: null,
    orderType: 'ai-web'
  },
  {
    id: 'hde-cloud-r2',
    title: 'HDE Cloud Asset & Document Hub',
    tagline: 'High-Throughput Storage & Automated PDF Generation',
    category: 'backend',
    categoryLabel: 'Backend & Cloud',
    iconLetter: 'R2',
    iconGradient: 'from-emerald-500 to-teal-600',
    description: 'Cloud infrastructure engineered around Cloudflare R2 object storage with S3-compatible APIs. Delivers instantaneous, encrypted blueprint storage, real-time PDF generation pipelines, and zero-egress asset distribution for high-traffic workloads.',
    highlights: [
      'Zero-egress cost Cloudflare R2 integration',
      'S3-compatible secure credential authentication',
      'Automated PDF blueprint generation & CDN delivery',
      'High concurrency file streaming with token security'
    ],
    tags: ['Cloudflare R2', 'S3 API', 'Node.js', 'PDF Generation', 'Security'],
    image: '/images/portfolio/pdf.webp',
    webLink: null,
    playStoreLink: null,
    orderType: 'backend'
  },
  {
    id: 'hde-cli-toolchain',
    title: 'Developer Automation & CLI Suite',
    tagline: 'Terminal Tooling & Deployment Automation',
    category: 'cli',
    categoryLabel: 'CLI & DevOps',
    iconLetter: 'CLI',
    iconGradient: 'from-slate-700 to-zinc-900',
    description: 'Cross-platform command-line toolchain built to automate repetitive engineering workflows: scaffold application modules, execute schema migrations, convert vector graphic assets, and trigger zero-downtime deployment pipelines.',
    highlights: [
      'Cross-platform binary execution for macOS, Windows, Linux',
      'Interactive terminal prompts and real-time progress bars',
      'Automated asset conversions and database schema synchronization',
      'CI/CD integration for cloud deployments'
    ],
    tags: ['CLI Tooling', 'Node.js / Rust', 'Shell Scripting', 'CI/CD Automation'],
    image: '/images/portfolio/Layers.webp',
    webLink: null,
    playStoreLink: null,
    orderType: 'cli'
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'frontend',
    title: 'Frontend Web Apps',
    category: 'Web Development',
    badge: 'Blazing Fast UI',
    color: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400',
    description: 'Modern, highly responsive single-page and multi-page web applications built for unmatched speed, accessibility, and high conversion. Seamless animations and intuitive user interfaces.',
    capabilities: ['React & Next.js Ecosystem', 'TypeScript & Tailwind CSS', 'Micro-Interactions & Responsive UX', 'Sub-second Page Load & SEO', 'Progressive Web Apps (PWA)']
  },
  {
    id: 'backend',
    title: 'Backend Solutions',
    category: 'Architecture & DB',
    badge: 'High Concurrency',
    color: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400',
    description: 'Robust server architecture, microservices, and databases engineered for security, high throughput, and zero downtime. Tailored schema modeling and rock-solid authorization.',
    capabilities: ['Node.js, Express & FastAPI', 'PostgreSQL, MySQL & Supabase', 'Database Indexing & Caching', 'JWT & RBAC Security Layers', 'Scalable Microservices']
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    category: 'End-to-End',
    badge: 'Turnkey SaaS',
    color: 'from-indigo-500 to-purple-600',
    iconBg: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400',
    description: 'Comprehensive software delivery connecting frontend polish directly with backend power. Ideal for custom SaaS platforms, enterprise client portals, and bespoke internal tools.',
    capabilities: ['Complete Product Architecture', 'Unified Type Safety', 'Automated CI/CD Pipelines', 'Subscription & Billing Flows', 'Real-time WebSocket Sync']
  },
  {
    id: 'custom-software',
    title: 'Custom Software Applications',
    category: 'Bespoke Logic',
    badge: '100% Tailored',
    color: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400',
    description: 'Unique business operations require unique software. We create bespoke applications built around your specific operational workflows, calculations, data structures, and industry rules.',
    capabilities: ['Workflow Digitization', 'Calculation & Logic Engines', 'Document & PDF Automation', 'Audit Trails & Reporting', 'Custom Business Dashboards']
  },
  {
    id: 'ai-integration',
    title: 'AI Integrations & Agents',
    category: 'Intelligent Systems',
    badge: 'Generative AI',
    color: 'from-fuchsia-500 to-pink-600',
    iconBg: 'bg-fuchsia-50 dark:bg-fuchsia-950/50 text-fuchsia-600 dark:text-fuchsia-400',
    description: 'Integrate the power of Generative AI, LLMs, and computer vision directly into your product. From image styling pipelines (Google AI Studio) to automated reasoning agents.',
    capabilities: ['Google AI Studio & Gemini API', 'Claude, OpenAI & Antigravity', 'Image-to-Image & Spatial AI', 'RAG & Semantic Search', 'Automated Agent Workflows']
  },
  {
    id: 'api-integration',
    title: 'API Integrations & Connectors',
    category: 'Connectivity',
    badge: 'Unified Systems',
    color: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400',
    description: 'Unify disparate platforms into seamless flows. We connect payment gateways, ERP systems, third-party clouds, and custom Webhooks with resilient retry queues.',
    capabilities: ['Stripe, Razorpay, PayPal', 'Cloudflare R2 & AWS S3', 'Custom REST & GraphQL Endpoints', 'Fault-Tolerant Webhooks', 'Third-party SaaS Connectors']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    category: 'iOS & Android',
    badge: '5K+ Shipped',
    color: 'from-rose-500 to-red-600',
    iconBg: 'bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400',
    description: 'Cross-platform mobile applications engineered for native feel, fluid gesture responsiveness, offline data synchronization, and published to Google Play & Apple App Store.',
    capabilities: ['React Native & Flutter Apps', 'Google Play Store Publication', 'Offline-First SQLite Cache', 'Biometrics & Native Sensors', 'Push Notification Handlers']
  },
  {
    id: 'desktop-apps',
    title: 'Desktop Applications & CAD',
    category: 'High Performance',
    badge: 'Hardware Accelerated',
    color: 'from-violet-500 to-indigo-600',
    iconBg: 'bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400',
    description: 'Specialized desktop software, CAD drafting engines, and canvas tools capable of high-precision calculations, vector graphics manipulation, multi-layer rendering, and local file access.',
    capabilities: ['Electron & Tauri Architecture', 'Canvas 2D/3D Rendering', 'CAD Drafting & Custom Blocks', 'High-Res PDF Exporting', 'Local File System Access']
  },
  {
    id: 'cli-tools',
    title: 'CLI Tools & Automation Scripts',
    category: 'Developer Utilities',
    badge: 'DevOps & Terminal',
    color: 'from-slate-700 to-zinc-900',
    iconBg: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
    description: 'Command line utilities, build orchestrators, and automated scripts that eliminate manual friction, automate data transformations, and boost engineering productivity.',
    capabilities: ['Cross-Platform Terminal Tools', 'Automated Data Migrations', 'Interactive Shell Prompts', 'CI/CD & DevOps Scripts', 'Log & Health Diagnostics']
  },
  {
    id: 'lifecycle-support',
    title: 'Bug Fixing, Hosting & Maintenance',
    category: 'Continuous SLA',
    badge: '24/7 Reliability',
    color: 'from-teal-500 to-emerald-600',
    iconBg: 'bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400',
    description: 'Software needs care after launch. We handle production deployment, continuous server monitoring, bug fixing, security patching, and managed hosting solutions so you focus on business.',
    capabilities: ['Cloudflare & Cloud Hosting', 'Rapid Bug Triage & Patches', 'Database Backups & Health', 'Zero-Downtime Updates', 'Long-term Maintenance SLAs']
  }
];

export const lifecycleSteps: LifecycleStep[] = [
  {
    step: '01',
    title: 'Discovery & Feasibility Check',
    subtitle: 'Transparent Yes/No Assessment',
    description: 'We evaluate your application concept, business objectives, and technical constraints. We assess real feasibility: if we can deliver it with excellence, we say YES; if it is outside our scope, we say NO with candid advice.',
    badge: 'Stage 1'
  },
  {
    step: '02',
    title: 'Architecture & UI/UX Design',
    subtitle: 'Wireframing & Prototypes',
    description: 'Our Graphic Designers and UI/UX Engineers collaborate with Systems Architects to prototype intuitive user journeys, high-fidelity mockups, and database schemas tailored to your scale.',
    badge: 'Stage 2'
  },
  {
    step: '03',
    title: 'Full-Cycle Engineering',
    subtitle: 'Frontend, Backend, AI & APIs',
    description: 'Our Frontend, Backend, and Full Stack engineers construct clean, testable codebases. We integrate custom AI models, third-party APIs, native mobile bridges, desktop CAD engines, or CLI tools.',
    badge: 'Stage 3'
  },
  {
    step: '04',
    title: 'Production Deployment',
    subtitle: 'Stores & Cloud Infrastructure',
    description: 'We handle live publication — Google Play Store approvals, Cloudflare R2 configurations, Google Cloud Platform (GCP) or AWS hosting, custom domain SSL certificates, and zero-downtime CI/CD.',
    badge: 'Stage 4'
  },
  {
    step: '05',
    title: 'Bug Fixing, Maintenance & Hosting',
    subtitle: 'Continuous SLA & Peace of Mind',
    description: 'Our relationship does not end at deployment. We provide dedicated bug fixing, OS/dependency updates, real-time server monitoring, performance tuning, and managed cloud hosting solutions.',
    badge: 'Stage 5'
  }
];

export const teamRolesData: TeamMemberRole[] = [
  {
    role: 'Frontend Developers',
    focus: 'UI/UX Polish & Interactivity',
    description: 'Specialists in responsive layouts, high-conversion funnels, React, Next.js, TypeScript, and fluid animations across all viewports.'
  },
  {
    role: 'Backend Engineers',
    focus: 'APIs, Scalability & Databases',
    description: 'Architecting secure databases (PostgreSQL, Supabase), high-throughput REST/GraphQL endpoints, Cloudflare R2 integrations, and microservices.'
  },
  {
    role: 'Full Stack Developers',
    focus: 'Turnkey Applications & SaaS',
    description: 'Unifying frontend interfaces with backend engines, authentication workflows, payment gateways, and custom business logic.'
  },
  {
    role: 'Graphic Designers & UI/UX',
    focus: 'Visual Identity & Branding',
    description: 'Crafting brand assets, vector icons, user wireframes, and design systems that establish immediate credibility and user trust.'
  },
  {
    role: 'Marketing & SEO Researchers',
    focus: 'Search Visibility & Growth',
    description: 'Analyzing search intent, competitive keywords, semantic markup, and App Store Optimization (ASO) to ensure your software is discovered by target clients.'
  },
  {
    role: 'Professional Translators',
    focus: 'Localization & Global Reach',
    description: 'Adapting your application interface, legal copy, and documentation across international languages for seamless worldwide user adoption.'
  }
];

export const industriesData: string[] = [
  'Architecture & Space Planning',
  'Construction & Estimation',
  'SaaS & B2B Client Portals',
  'E-Commerce & Digital Storefronts',
  'Interior Design & Paint Simulation',
  'Real Estate & Property Tech',
  'Developer Tooling & DevOps',
  'Field Service & Operations'
];
