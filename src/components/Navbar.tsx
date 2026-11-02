'use client';

import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { HDELogo } from './HDELogo';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar - Studio HUD style */}
      <div className="border-b border-line bg-bg-raised text-muted text-[11px] font-mono uppercase tracking-[0.12em] py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 radar-dot flex-shrink-0" />
            <span className="text-ink font-semibold">[SYS // ACTIVE]</span>
            <span className="hidden sm:inline text-muted">&bull; ACCEPTING BESPOKE APPLICATION COMMISSIONS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-faint">CUSTOM ARCHITECTURE // SCRATCH TO CLOUD HOSTING</span>
            <a 
              href="#order" 
              className="text-ink hover:text-accent font-semibold border-b border-line hover:border-ink transition-colors pb-0.5 inline-flex items-center gap-1"
            >
              <span>CONFIGURE APPLICATION</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-bg/90 backdrop-blur-md border-b border-line transition-colors">
        <div className="px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="group flex items-center">
            <HDELogo size={36} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-[11px] font-mono uppercase tracking-[0.14em]">
            <a 
              href="#services" 
              className="text-muted hover:text-ink transition-colors"
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-muted hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <span>Applications</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 border border-accent/40 text-accent font-bold">
                LIVE
              </span>
            </a>
            <a 
              href="#lifecycle" 
              className="text-muted hover:text-ink transition-colors"
            >
              Lifecycle
            </a>
            <a 
              href="#team" 
              className="text-muted hover:text-ink transition-colors"
            >
              Team & Scope
            </a>
            <a 
              href="#philosophy" 
              className="text-muted hover:text-ink transition-colors"
            >
              Philosophy
            </a>
          </div>

          {/* Actions & CTA */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button - Sharp architectural styling */}
            <button 
              onClick={toggleTheme}
              className="w-9 h-9 border border-line hover:border-line-strong bg-bg-raised text-ink flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle dark/light mode"
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-ink" />
              )}
            </button>

            {/* Order App Invert CTA Button */}
            <a 
              href="#order" 
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-invert-bg bg-invert-bg text-invert-fg font-mono uppercase text-[11px] tracking-[0.14em] font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Order App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 border border-line text-ink flex items-center justify-center hover:bg-bg-raised cursor-pointer"
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-line bg-bg px-6 py-6 space-y-4">
            <div className="space-y-3 font-mono text-xs uppercase tracking-[0.14em]">
              <a 
                href="#services" 
                onClick={() => setMobileOpen(false)} 
                className="block text-muted hover:text-ink py-1 border-b border-line"
              >
                [01] Services & Capabilities
              </a>
              <a 
                href="#portfolio" 
                onClick={() => setMobileOpen(false)} 
                className="block text-muted hover:text-ink py-1 border-b border-line"
              >
                [02] Built Applications (Live)
              </a>
              <a 
                href="#lifecycle" 
                onClick={() => setMobileOpen(false)} 
                className="block text-muted hover:text-ink py-1 border-b border-line"
              >
                [03] End-to-End Lifecycle
              </a>
              <a 
                href="#team" 
                onClick={() => setMobileOpen(false)} 
                className="block text-muted hover:text-ink py-1 border-b border-line"
              >
                [04] Distributed Team
              </a>
              <a 
                href="#philosophy" 
                onClick={() => setMobileOpen(false)} 
                className="block text-muted hover:text-ink py-1 border-b border-line"
              >
                [05] Operational Principle (Yes/No)
              </a>
            </div>

            <div className="pt-2">
              <a 
                href="#order" 
                onClick={() => setMobileOpen(false)} 
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-invert-bg text-invert-fg font-mono uppercase text-xs tracking-[0.14em] font-semibold text-center"
              >
                <span>Configure Application Order</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
