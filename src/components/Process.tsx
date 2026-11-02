import React from 'react';
import { Compass, PenTool, Code2, Rocket, LifeBuoy, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { lifecycleSteps } from '../data/portfolioData';

const stepIcons: Record<string, React.ReactNode> = {
  '01': <Compass className="w-5 h-5" />,
  '02': <PenTool className="w-5 h-5" />,
  '03': <Code2 className="w-5 h-5" />,
  '04': <Rocket className="w-5 h-5" />,
  '05': <LifeBuoy className="w-5 h-5" />,
};

export const Process: React.FC = () => {
  return (
    <section id="lifecycle" className="py-20 border-b border-line bg-bg relative">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 border border-line bg-bg-raised px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-muted mb-4">
            <span>[ 03 // END-TO-END LIFECYCLE ]</span>
          </div>

          <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-ink leading-[1.05] mb-4">
            Complete Software Lifecycle{' '}
            <span className="font-serif italic font-normal tracking-normal lowercase block sm:inline text-ink">
              managed from
            </span>{' '}
            Scratch To Cloud.
          </h2>

          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
            Building custom software requires more than just typing code. We guide and manage your application through every critical stage &mdash; ensuring stability, performance, and long-term hosting viability.
          </p>
        </div>

        {/* 5-Step Industrial Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-l border-line mb-12">
          {lifecycleSteps.map((st) => (
            <div 
              key={st.step} 
              className="border-r border-b border-line bg-bg hover:bg-bg-raised p-6 flex flex-col justify-between transition-colors duration-150 group text-left"
            >
              <div>
                {/* Step Monospace Index & Icon */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-line">
                  <span className="font-mono text-2xl font-bold text-faint group-hover:text-ink transition-colors">
                    [{st.step}]
                  </span>
                  <div className="w-8 h-8 border border-line bg-bg-sunken text-ink flex items-center justify-center">
                    {stepIcons[st.step]}
                  </div>
                </div>

                {/* Subtitle / Badge */}
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent mb-1.5">
                  {st.badge} &bull; {st.subtitle}
                </div>

                {/* Title */}
                <h3 className="font-display uppercase text-base sm:text-lg font-bold text-ink mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {st.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-muted leading-relaxed font-normal">
                  {st.description}
                </p>
              </div>

              {/* Status footer */}
              <div className="pt-4 mt-6 border-t border-line flex items-center gap-1.5 font-mono text-[10px] text-faint uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Zero headache delivery</span>
              </div>
            </div>
          ))}
        </div>

        {/* Code Audit Banner */}
        <div className="border border-line bg-bg-raised p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 border border-line bg-bg text-ink flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-display uppercase text-base sm:text-lg font-bold text-ink mb-1">
                Already have an existing application with bugs or hosting issues?
              </h4>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                We don't just build new systems. We audit legacy codebases, eliminate persistent bugs, refactor slow APIs, and migrate servers to high-performance cloud hosting.
              </p>
            </div>
          </div>

          <a 
            href="#order" 
            className="inline-flex items-center gap-2 px-5 py-3 bg-invert-bg text-invert-fg font-mono uppercase text-[11px] tracking-[0.14em] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <span>Request Code Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
