import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { HDELogo } from './HDELogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line bg-bg text-muted pt-16 pb-12 transition-colors">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-line">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <HDELogo size={38} />
            </a>

            <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed max-w-sm font-normal">
              We engineer customized software applications tailored to your business requirements &mdash; from scratch to finish, production deployment, bug fixing, maintenance, and cloud hosting solutions.
            </p>

            {/* Badges */}
            <div className="flex items-center gap-2 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-line text-muted">
                5,000+ App Installs
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-line text-muted">
                Pragmatic Yes / No Scope
              </span>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3 font-mono text-[11px]">
            <h4 className="uppercase tracking-[0.14em] text-ink font-semibold">
              [ SERVICES ]
            </h4>
            <ul className="space-y-2 uppercase tracking-wider">
              <li><a href="#services" className="hover:text-ink transition-colors">Frontend Web Apps</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">Backend Solutions & DBs</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">Full Stack SaaS Platforms</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">AI & Agentic Systems</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">Mobile Apps (Android & iOS)</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">Desktop & CAD Software</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">CLI Tools & Automation</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">Cloud Hosting & 24/7 SLA</a></li>
            </ul>
          </div>

          {/* Live Applications */}
          <div className="space-y-3 font-mono text-[11px]">
            <h4 className="uppercase tracking-[0.14em] text-ink font-semibold">
              [ LIVE SYSTEMS ]
            </h4>
            <ul className="space-y-2 uppercase tracking-wider">
              <li>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.aihomedecorator.twa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-ink transition-colors inline-flex items-center gap-1.5"
                >
                  <img src="/images/ai-home-decorator-logo.jpg" alt="" className="w-3.5 h-3.5 rounded-sm object-cover" />
                  <span>AI Home Decorator</span>
                  <ArrowUpRight className="w-3 h-3 text-faint" />
                </a>
              </li>
              <li>
                <a 
                  href="https://homedesignenglish.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-ink transition-colors inline-flex items-center gap-1.5"
                >
                  <img src="/images/hde-directory-logo.png" alt="" className="w-3.5 h-3.5 rounded-sm object-contain bg-white/90" />
                  <span>HDE Directory & Estimator</span>
                  <ArrowUpRight className="w-3 h-3 text-faint" />
                </a>
              </li>
              <li>
                <a 
                  href="https://wallpaint.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-ink transition-colors inline-flex items-center gap-1.5"
                >
                  <img src="/images/wall-paint-logo.png" alt="" className="w-3.5 h-3.5 rounded-sm object-contain bg-white/90" />
                  <span>Wall Paint AI Visualizer</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-faint" />
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-ink transition-colors inline-flex items-center gap-1.5">
                  <img src="/images/hde-icon.png" alt="" className="w-3.5 h-3.5 rounded-sm object-contain" />
                  <span>HDE Studio (Desktop CAD)</span>
                </a>
              </li>
              <li><a href="#portfolio" className="hover:text-ink transition-colors">Cloudflare R2 Asset Hub</a></li>
              <li><a href="#portfolio" className="hover:text-ink transition-colors">Developer Automation CLI</a></li>
            </ul>
          </div>

          {/* Contact & Desk Info */}
          <div className="space-y-3 font-mono text-[11px]">
            <h4 className="uppercase tracking-[0.14em] text-ink font-semibold">
              [ DIRECT CONTACT ]
            </h4>
            <div className="space-y-2.5">
              <a href="mailto:thyagaraja1983@gmail.com" className="flex items-center gap-2 hover:text-ink transition-colors">
                <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span>thyagaraja1983@gmail.com</span>
              </a>

              <a href="tel:+919113989237" className="flex items-center gap-2 hover:text-ink transition-colors">
                <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span>+91 9113989237</span>
              </a>

              <div className="flex items-center gap-2 text-faint pt-1">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Bengaluru / Distributed Globally</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-faint uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>&copy; {new Date().getFullYear()} HDE Software Studio. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>PRECISION ARCHITECTURE &bull; ARTISANAL CODE</span>
            <a href="#" className="hover:text-ink transition-colors">&uarr; TOP</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
