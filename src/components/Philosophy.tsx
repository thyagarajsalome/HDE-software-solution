import React from 'react';
import { Check, X } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 border-b border-line bg-bg relative">
      <div className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 border border-line bg-bg-raised px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-muted mb-4">
            <span>[ 04 // OPERATIONAL PRINCIPLE ]</span>
          </div>

          <h2 className="font-display uppercase text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-ink leading-[1.0] mb-4">
            When We Can Deliver, <span className="text-accent">We Say YES.</span><br />
            If It’s Out Of Scope, <span className="text-faint">We Say NO.</span>
          </h2>
        </div>

        {/* Editorial Statement Box */}
        <div className="border border-line bg-bg-raised p-8 sm:p-12 mb-10 relative">
          <p className="font-serif italic text-xl sm:text-2xl text-ink leading-relaxed mb-6 font-normal">
            &ldquo;If we accept any project, and we know we can deliver your customized software application with exceptional quality and reliability, <strong className="font-semibold text-accent not-italic font-sans">we say YES</strong>. But if an inquiry is technically out of our scope, misaligned with realistic timelines, or mathematically unsound, <strong className="font-semibold text-faint not-italic font-sans">we say NO</strong>.&rdquo;
          </p>

          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed font-normal">
            Though we readily accept complex technical challenges, <strong className="text-ink font-semibold">we deeply respect your business decisions, budget constraints, and real-world commercial impact</strong>. We refuse to sell vaporware or make empty promises just to sign a contract. Accordingly, we remain transparent, pragmatic, and brutally realistic about what will actually work in production.
          </p>
        </div>

        {/* YES vs NO Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* YES Box */}
          <div className="border border-line bg-bg hover:bg-bg-raised p-7 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-line">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  [ CRITERIA // 01 ]
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-accent/30 text-accent font-semibold">
                  WE SAY YES
                </span>
              </div>

              <h3 className="font-display uppercase text-lg sm:text-xl font-bold text-ink mb-4 tracking-tight">
                When Engineering Criteria Are Met
              </h3>

              <ul className="space-y-3 font-mono text-xs text-muted">
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">&bull;</span>
                  <span>The technical requirements align with our high standards of engineering.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">&bull;</span>
                  <span>The timeline and budget allow for rigorous testing, security, and responsive UI.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">&bull;</span>
                  <span>We can manage the application from scratch to live hosting and support.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">&bull;</span>
                  <span>We commit 100% of our focus to shipping a successful business outcome.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-line font-mono text-[10px] uppercase tracking-[0.14em] text-accent font-semibold">
              Uncompromising Quality Guaranteed
            </div>
          </div>

          {/* NO Box */}
          <div className="border border-line bg-bg hover:bg-bg-raised p-7 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-line">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-faint">
                  [ CRITERIA // 02 ]
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-line text-muted font-semibold">
                  WE SAY NO
                </span>
              </div>

              <h3 className="font-display uppercase text-lg sm:text-xl font-bold text-ink mb-4 tracking-tight">
                When Feasibility Is Compromised
              </h3>

              <ul className="space-y-3 font-mono text-xs text-muted">
                <li className="flex items-start gap-2.5">
                  <span className="text-faint mt-0.5">&bull;</span>
                  <span>The proposed project scope is fundamentally out of our core competencies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-faint mt-0.5">&bull;</span>
                  <span>Unrealistic deadlines that would force cutting corners on security or code quality.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-faint mt-0.5">&bull;</span>
                  <span>When a ready-made off-the-shelf tool would be cheaper for you than custom code.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-faint mt-0.5">&bull;</span>
                  <span>We give you honest, actionable recommendations instead of wasting your time.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-line font-mono text-[10px] uppercase tracking-[0.14em] text-muted font-semibold">
              Pragmatic Commercial Integrity
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
