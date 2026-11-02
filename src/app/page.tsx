'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LiveProduction } from '@/components/LiveProduction';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
import { Philosophy } from '@/components/Philosophy';
import { TeamAbout } from '@/components/TeamAbout';
import { OrderConfigurator } from '@/components/OrderConfigurator';
import { GalleryModal } from '@/components/GalleryModal';
import { Footer } from '@/components/Footer';
import { Project } from '@/types';

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const [orderDescription, setOrderDescription] = useState<string>('');
  const [orderAppType, setOrderAppType] = useState<string>('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('hde-theme');
      if (saved) {
        setIsDark(saved === 'dark');
      } else {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('hde-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('hde-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleOrderApp = (appName: string) => {
    setOrderDescription(
      `I am interested in ordering a customized application inspired by "${appName}". Here are my technical requirements:\n`
    );
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setOrderAppType(serviceName);
    setOrderDescription(
      `I need tailored engineering services for "${serviceName}". Here is an overview of what we are aiming to achieve:\n`
    );
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-invert-bg selection:text-invert-fg font-sans transition-colors duration-150 relative">
      {/* Precision hairline outer boundary grid */}
      <div className="max-w-[1440px] mx-auto border-x border-line relative min-h-screen">
        {/* Top Navbar */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <LiveProduction />
          <Services onSelectService={handleSelectService} />
          <Projects onOpenGallery={setGalleryProject} onOrderApp={handleOrderApp} />
          <Process />
          <Philosophy />
          <TeamAbout />
          <OrderConfigurator 
            initialDescription={orderDescription} 
            initialAppType={orderAppType} 
          />
        </main>

        {/* Studio Footer */}
        <Footer />
      </div>

      {/* Interactive Screenshot Gallery Modal */}
      <GalleryModal 
        project={galleryProject} 
        onClose={() => setGalleryProject(null)} 
        onOrder={handleOrderApp} 
      />
    </div>
  );
}
