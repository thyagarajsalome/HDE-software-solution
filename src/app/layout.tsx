import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2f1ee' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0c' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'HDE — Capable Software Engineering Studio',
  description: 'HDE is a specialized engineering studio creating customized software applications. From scratch to production deployment, desktop CAD engines, AI integrations, mobile apps, and 24/7 cloud hosting.',
  keywords: [
    'HDE',
    'HDE Software',
    'Custom Software Studio',
    'Full Stack Web Apps',
    'Desktop CAD Software',
    'Generative AI Integration',
    'API Gateways',
    'Mobile Apps',
    'CLI Tools',
    'Cloud Hosting Solutions'
  ],
  authors: [{ name: 'HDE Software Studio' }],
  metadataBase: new URL('https://hdesoftware.com'),
  openGraph: {
    title: 'HDE — Capable Software Engineering Studio',
    description: 'We build customized software applications from scratch to production hosting and maintenance.',
    url: 'https://hdesoftware.com',
    siteName: 'HDE Software Studio',
    images: [
      {
        url: '/images/hde-logo-full.png',
        width: 1200,
        height: 630,
        alt: 'HDE Software Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDE — Capable Software Engineering Studio',
    description: 'We build customized software applications from scratch to production hosting and maintenance.',
    images: ['/images/hde-logo-full.png'],
  },
  icons: {
    icon: '/images/hde-tech-logo.svg',
    apple: '/images/hde-tech-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('hde-theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-bg text-ink antialiased selection:bg-invert-bg selection:text-invert-fg min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
