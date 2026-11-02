import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const LiveProduction: React.FC = () => {
  return (
    <section className="py-16 border-b border-line bg-bg relative">
      <div className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        
        <div className="border border-line bg-bg-raised p-8 sm:p-12 relative">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            
            {/* Left: Verified Production Narrative */}
            <div className="space-y-5 max-w-2xl text-left">
              
              <div className="inline-flex items-center gap-2 border border-line bg-bg px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.12em] text-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-500 radar-dot" />
                <span className="text-ink font-semibold">VERIFIED PRODUCTION</span>
                <span className="text-faint">//</span>
                <span>SERVING GLOBAL USERS</span>
              </div>

              <h2 className="font-display uppercase text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                Applications Actively Serving{' '}
                <span className="font-serif italic font-normal tracking-normal lowercase block sm:inline text-ink">
                  real users
                </span>{' '}
                Worldwide.
              </h2>

              <p className="font-sans text-sm sm:text-base text-muted leading-relaxed font-normal">
                We don't build toy projects that remain hidden on local drives. We ship battle-tested applications into active production &mdash; with over <strong className="text-ink font-semibold">5,000+ installs on the Google Play Store</strong>, live SaaS platforms, and automated cloud backends.
              </p>

              {/* Direct Links to Live Verified Apps with Official Logos */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.aihomedecorator.twa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-invert-bg text-invert-fg font-mono uppercase text-[11px] tracking-[0.12em] font-semibold hover:opacity-90 transition-opacity"
                >
                  <img 
                    src="/images/ai-home-decorator-logo.jpg" 
                    alt="AI Home Decorator" 
                    className="w-5 h-5 rounded-sm object-cover border border-white/20 flex-shrink-0"
                  />
                  <span>AI Home Decorator [5K+ Installs]</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a 
                  href="https://homedesignenglish.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-bg text-ink border border-line hover:border-line-strong font-mono uppercase text-[11px] tracking-[0.12em] font-semibold hover:bg-bg-sunken transition-colors"
                >
                  <img 
                    src="/images/hde-directory-logo.png" 
                    alt="HDE Estimator & Directory" 
                    className="w-5 h-5 rounded-sm object-contain bg-white/95 p-0.5 border border-line flex-shrink-0"
                  />
                  <span>HDE Directory & Estimator</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
                </a>

                <a 
                  href="https://wallpaint.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-bg text-ink border border-line hover:border-line-strong font-mono uppercase text-[11px] tracking-[0.12em] font-semibold hover:bg-bg-sunken transition-colors"
                >
                  <img 
                    src="/images/wall-paint-logo.png" 
                    alt="Wall Paint AI" 
                    className="w-5 h-5 rounded-sm object-contain bg-white/95 p-0.5 border border-line flex-shrink-0"
                  />
                  <span>Wall Paint AI</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
                </a>
              </div>
            </div>

            {/* Right: Technical Spec Grid */}
            <div className="grid grid-cols-2 gap-px bg-line border border-line w-full lg:w-auto flex-shrink-0">
              
              <div className="p-5 bg-bg text-left">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-ink tracking-tight">5,000+</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mt-1">Play Store Installs</div>
                <div className="font-mono text-[10px] text-accent mt-0.5">&uarr; Verified Production</div>
              </div>

              <div className="p-5 bg-bg text-left">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-ink tracking-tight">99.9%</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mt-1">Uptime SLA</div>
                <div className="font-mono text-[10px] text-faint mt-0.5">Cloud Hosting Support</div>
              </div>

              <div className="p-5 bg-bg text-left">
                <div className="font-mono text-xl sm:text-2xl font-bold text-ink tracking-tight">Full-Stack</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mt-1">Web, Mobile & CAD</div>
                <div className="font-mono text-[10px] text-faint mt-0.5">End-to-End Delivery</div>
              </div>

              <div className="p-5 bg-bg text-left">
                <div className="font-mono text-xl sm:text-2xl font-bold text-ink tracking-tight">0 &rarr; 100%</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mt-1">Scratch to Deploy</div>
                <div className="font-mono text-[10px] text-faint mt-0.5">Bug Fixing Included</div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
