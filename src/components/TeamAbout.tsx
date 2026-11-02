import React from 'react';
import { 
  Code, 
  Database, 
  Layers, 
  Palette, 
  Box, 
  TrendingUp, 
  Languages, 
  ArrowUpRight 
} from 'lucide-react';
import { teamRolesData, industriesData } from '../data/portfolioData';

const roleIcons: Record<string, React.ReactNode> = {
  'Frontend Developers': <Code className="w-4 h-4" />,
  'Backend Engineers': <Database className="w-4 h-4" />,
  'Full Stack Developers': <Layers className="w-4 h-4" />,
  'Graphic Designers & UI/UX': <Palette className="w-4 h-4" />,
  'Marketing & SEO Researchers': <TrendingUp className="w-4 h-4" />,
  'Professional Translators': <Languages className="w-4 h-4" />,
};

export const TeamAbout: React.FC = () => {
  return (
    <section id="team" className="py-20 border-b border-line bg-bg relative">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 border border-line bg-bg-raised px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-muted mb-4">
            <span>[ 05 // DISTRIBUTED TEAM ]</span>
          </div>

          <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-ink leading-[1.05] mb-4">
            A Specialized Distributed Team{' '}
            <span className="font-serif italic font-normal tracking-normal lowercase block sm:inline text-ink">
              built for
            </span>{' '}
            Complete Execution.
          </h2>

          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
            We are a nimble, professional team scattered across multiple locations &mdash; bringing together seasoned developers, UI/UX designers, SEO strategists, and localization experts. We started small, but we are gradually growing with every product we deliver.
          </p>
        </div>

        {/* Team Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamRolesData.map((member, index) => (
            <div 
              key={member.role}
              className="border border-line bg-bg hover:bg-bg-raised p-6 flex flex-col justify-between transition-colors duration-150 group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-line">
                  <div className="w-7 h-7 border border-line bg-bg-sunken text-ink flex items-center justify-center">
                    {roleIcons[member.role]}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                    [ROLE // 0{index + 1}]
                  </span>
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent mb-1">
                  {member.focus}
                </div>

                <h3 className="font-display uppercase text-base font-bold text-ink mb-2 tracking-tight group-hover:text-accent transition-colors">
                  {member.role}
                </h3>

                <p className="font-sans text-xs text-muted leading-relaxed font-normal">
                  {member.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-line flex items-center gap-1.5 font-mono text-[10px] text-faint uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Active in all projects</span>
              </div>
            </div>
          ))}

          {/* Organic Trajectory Card */}
          <div className="border border-line bg-bg-raised p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-line">
                <div className="w-7 h-7 border border-line bg-bg-sunken text-ink flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent font-semibold">
                  GROWTH
                </span>
              </div>

              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-1">
                Organic Trajectory
              </div>

              <h3 className="font-display uppercase text-base font-bold text-ink mb-2 tracking-tight">
                Started Small, Gradually Growing
              </h3>

              <p className="font-sans text-xs text-muted leading-relaxed font-normal">
                We don't inflate our headcount with corporate layers. Our agility is our superpower: direct communication with the engineers and designers building your software.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-line flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-ink font-semibold">
              <span>Complete Solutions</span>
              <span className="text-accent">100% Accountable</span>
            </div>
          </div>
        </div>

        {/* Industries Matrix */}
        <div className="border border-line bg-bg-raised p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display uppercase text-lg font-bold text-ink">
                Providing Complete Solutions Across Any Industry
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted">
                From specialized architectural tools to consumer mobile apps and enterprise data backends.
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 border border-line text-muted flex-shrink-0">
              Cross-Disciplinary Coverage
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {industriesData.map((ind, i) => (
              <span 
                key={i} 
                className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 border border-line bg-bg text-muted hover:text-ink hover:border-line-strong transition-colors"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
