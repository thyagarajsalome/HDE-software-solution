'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface ProjectsProps {
  onOpenGallery: (project: Project) => void;
  onOrderApp: (appName: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenGallery, onOrderApp }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 border-b border-line bg-bg relative">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 border border-line bg-bg-raised px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-muted mb-4">
            <span>[ 02 // PRODUCTION APPLICATIONS ]</span>
          </div>

          <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-ink leading-[1.05] mb-4">
            Already Built Applications{' '}
            <span className="font-serif italic font-normal tracking-normal lowercase block sm:inline text-ink">
              & live systems.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
            Explore applications, SaaS platforms, AI tools, desktop CAD systems, and mobile apps we have engineered and shipped. Click on any application to visit the live link, view the demo, or order a custom version tailored for your own business.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-6">
            {[
              { id: 'all', label: 'All Systems' },
              { id: 'ai', label: 'AI & Vision' },
              { id: 'desktop', label: 'Desktop CAD' },
              { id: 'saas', label: 'SaaS & Portals' },
              { id: 'backend', label: 'Backend & R2' },
              { id: 'cli', label: 'CLI & Tools' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as ProjectCategory)}
                className={`px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] border transition-colors cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-invert-bg text-invert-fg border-invert-bg font-semibold'
                    : 'bg-bg text-muted border-line hover:border-line-strong hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const liveUrl = project.playStoreLink || project.webLink;
            return (
              <div 
                key={project.id}
                className="border border-line bg-bg hover:bg-bg-raised p-6 flex flex-col justify-between transition-colors duration-150 group text-left"
              >
                <div>
                  {/* Top Status & Category Row */}
                  <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-line">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 border border-line text-muted font-semibold bg-bg-sunken">
                      {project.categoryLabel}
                    </span>
                    {liveUrl && (
                      <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-accent font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 radar-dot block" />
                        <span>LIVE SYSTEM</span>
                      </div>
                    )}
                  </div>

                  {/* Header with Official Logo & Title */}
                  <div className="flex items-start gap-3.5 mb-4">
                    {project.appLogo && (
                      <div className="w-12 h-12 flex-shrink-0 border border-line bg-bg-sunken p-1 flex items-center justify-center overflow-hidden">
                        <img 
                          src={project.appLogo} 
                          alt={`${project.title} logo`} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-0.5 truncate">
                        {project.tagline}
                      </div>
                      <h3 className="font-display uppercase text-base sm:text-lg font-bold text-ink tracking-tight group-hover:text-accent transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed mb-5 font-normal">
                    {project.description}
                  </p>

                  {/* Key Production Highlight Readout Banner */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="border border-line bg-bg-sunken p-2.5 mb-5 flex items-center justify-between font-mono text-[11px]">
                      <span className="text-faint uppercase tracking-wider">Highlight:</span>
                      <span className="font-bold text-ink truncate ml-2">{project.highlights[0]}</span>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tech, i) => (
                      <span 
                        key={i} 
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-line text-faint"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-line space-y-2">
                  <div className="flex items-center gap-2">
                    {liveUrl && (
                      <a 
                        href={liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-invert-bg text-invert-fg font-mono uppercase text-[10px] tracking-[0.14em] font-semibold hover:opacity-90 transition-opacity"
                      >
                        <span>Open Live System</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {project.gallery && project.gallery.length > 0 && (
                      <button 
                        onClick={() => onOpenGallery(project)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-bg-sunken text-ink border border-line hover:border-line-strong font-mono uppercase text-[10px] tracking-[0.14em] font-semibold transition-colors cursor-pointer"
                        title="Inspect Screenshot Gallery"
                      >
                        <Eye className="w-3.5 h-3.5 text-muted" />
                        <span>CAD Gallery</span>
                      </button>
                    )}
                  </div>

                  <button 
                    onClick={() => onOrderApp(project.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-bg text-ink border border-line hover:border-line-strong font-mono uppercase text-[10px] tracking-[0.14em] font-semibold transition-colors cursor-pointer"
                  >
                    <span>Order Custom Version</span>
                    <ArrowUpRight className="w-3 h-3 text-muted" />
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
