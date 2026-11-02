'use client';

import React from 'react';
import { 
  Layout, 
  Database, 
  Layers, 
  Cpu, 
  Sparkles, 
  Cable, 
  Smartphone, 
  Monitor, 
  Terminal, 
  Wrench, 
  ArrowUpRight 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  frontend: <Layout className="w-5 h-5" />,
  backend: <Database className="w-5 h-5" />,
  fullstack: <Layers className="w-5 h-5" />,
  'custom-software': <Cpu className="w-5 h-5" />,
  'ai-integration': <Sparkles className="w-5 h-5" />,
  'api-integration': <Cable className="w-5 h-5" />,
  'mobile-apps': <Smartphone className="w-5 h-5" />,
  'desktop-apps': <Monitor className="w-5 h-5" />,
  'cli-tools': <Terminal className="w-5 h-5" />,
  'lifecycle-support': <Wrench className="w-5 h-5" />,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 border-b border-line bg-bg relative">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 border border-line bg-bg-raised px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-muted mb-4">
            <span>[ 01 // CAPABILITIES & SERVICES ]</span>
          </div>

          <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-ink leading-[1.05] mb-4">
            Tailored Services For{' '}
            <span className="font-serif italic font-normal tracking-normal lowercase block sm:inline text-ink">
              every layer
            </span>{' '}
            Of Your Stack.
          </h2>

          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
            Whether you need an entire software application created from scratch or specific engineering for your existing product, we tailor our craft to your exact technical and business requirements.
          </p>
        </div>

        {/* Services Grid with Hairline Architectural Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
          {servicesData.map((service, index) => {
            const indexNumber = String(index + 1).padStart(2, '0');
            return (
              <div 
                key={service.id} 
                className="border-r border-b border-line bg-bg hover:bg-bg-raised p-7 transition-colors duration-150 flex flex-col justify-between group text-left"
              >
                <div>
                  {/* Top Row: Monospace Index, Icon, and Badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-faint group-hover:text-ink font-bold">
                        [{indexNumber}]
                      </span>
                      <div className="w-8 h-8 border border-line bg-bg-sunken text-ink flex items-center justify-center">
                        {serviceIcons[service.id]}
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 border border-line text-muted">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display uppercase text-lg sm:text-xl font-bold text-ink mb-3 tracking-tight group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Checklist of Capabilities */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-line">
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint mb-2">
                      Core Competencies
                    </div>
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-muted">
                        <span className="text-accent">&bull;</span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-line flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    End-to-End Delivery
                  </span>
                  <button 
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink font-semibold group-hover:text-accent transition-colors cursor-pointer"
                  >
                    <span>Commission Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
