import React from 'react';
import { ArrowUpRight, Code, Layers, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-16 pb-16 md:pt-24 md:pb-24 border-b border-line overflow-hidden">
      
      {/* Background Subtle Tech Gridlines */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="px-4 sm:px-6 lg:px-12 relative max-w-6xl mx-auto text-center">
        
        {/* Top HUD Index Badge */}
        <div className="inline-flex items-center gap-2 border border-line bg-bg-raised px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-muted mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>[ 00 // HDE SOFTWARE STUDIO ]</span>
          <span className="text-faint">&bull;</span>
          <span className="text-ink font-semibold">CUSTOM ENGINEERING</span>
        </div>

        {/* Main Display Headline with Archivo + Instrument Serif */}
        <h1 className="font-display uppercase text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[0.96] text-ink max-w-5xl mx-auto mb-8">
          Custom Software Engineered For{' '}
          <span className="font-serif italic font-normal tracking-normal lowercase block sm:inline text-ink">
            real business
          </span>{' '}
          Impact.
        </h1>

        {/* Precision Subtitle */}
        <p className="font-sans text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          We architect and engineer customized software applications tailored exactly to your requirements. From initial scratch to finish, production deployment, bug fixing, ongoing maintenance, and cloud hosting solutions.
        </p>

        {/* Studio Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 mb-16">
          <a 
            href="#order" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-invert-bg text-invert-fg border border-invert-bg font-mono uppercase text-[11px] font-semibold tracking-[0.14em] hover:opacity-90 transition-opacity"
          >
            <span>Order Your Custom App</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a 
            href="#portfolio" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-bg-raised text-ink border border-line hover:border-line-strong font-mono uppercase text-[11px] font-semibold tracking-[0.14em] hover:bg-bg-sunken transition-all"
          >
            <span>Explore Built Systems</span>
            <ArrowUpRight className="w-4 h-4 text-muted" />
          </a>
        </div>

        {/* Architectural 4-Metric Grid with hairline dividers & crosshair corners */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-line bg-bg text-left">
          
          <div className="p-6 border-b sm:border-b-0 border-r border-line hover:bg-bg-raised transition-colors relative">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted flex items-center justify-between mb-2">
              <span>[ METRIC // 01 ]</span>
              <span className="text-accent font-bold">LIVE</span>
            </div>
            <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-1">
              5,000+
            </div>
            <div className="font-sans text-xs font-semibold text-ink">
              Active Installs
            </div>
            <div className="font-mono text-[11px] text-faint mt-0.5">
              Google Play Store & Web
            </div>
          </div>

          <div className="p-6 border-b sm:border-b-0 lg:border-r border-line hover:bg-bg-raised transition-colors relative">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-2">
              <span>[ METRIC // 02 ]</span>
            </div>
            <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-1">
              0 &rarr; 100%
            </div>
            <div className="font-sans text-xs font-semibold text-ink">
              Full Lifecycle
            </div>
            <div className="font-mono text-[11px] text-faint mt-0.5">
              Scratch to Cloud Hosting
            </div>
          </div>

          <div className="p-6 border-r border-line hover:bg-bg-raised transition-colors relative">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-2">
              <span>[ METRIC // 03 ]</span>
            </div>
            <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-1">
              YES / NO
            </div>
            <div className="font-sans text-xs font-semibold text-ink">
              Honest Scope
            </div>
            <div className="font-mono text-[11px] text-faint mt-0.5">
              We respect business reality
            </div>
          </div>

          <div className="p-6 hover:bg-bg-raised transition-colors relative">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-2">
              <span>[ METRIC // 04 ]</span>
            </div>
            <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-1">
              Distributed
            </div>
            <div className="font-sans text-xs font-semibold text-ink">
              Specialized Team
            </div>
            <div className="font-mono text-[11px] text-faint mt-0.5">
              Devs, Designers, SEO, Translators
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
