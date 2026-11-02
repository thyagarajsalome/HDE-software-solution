'use client';

import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface GalleryModalProps {
  project: Project | null;
  onClose: () => void;
  onOrder: (appName: string) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ project, onClose, onOrder }) => {
  if (!project || !project.gallery || project.gallery.length === 0) return null;

  const [activeImage, setActiveImage] = useState<string>(project.gallery[0]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-bg border border-line max-w-4xl w-full p-6 relative shadow-2xl flex flex-col max-h-[90vh] text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-line mb-4">
          <div className="flex items-center gap-3">
            {project.appLogo && (
              <img 
                src={project.appLogo} 
                alt={project.title} 
                className="w-7 h-7 object-contain rounded-sm border border-line bg-bg-raised p-0.5" 
              />
            )}
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted block">
                [ GALLERY // {project.title} ]
              </span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 border border-line text-muted hover:text-ink flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Display Image */}
        <div className="flex-1 overflow-hidden flex items-center justify-center bg-bg-sunken border border-line mb-4 p-2 relative min-h-[300px] max-h-[520px]">
          <img 
            src={activeImage} 
            alt="Preview" 
            className="max-w-full max-h-[500px] object-contain" 
          />
        </div>

        {/* Thumbnails */}
        <div className="flex items-center gap-2 overflow-x-auto py-2">
          {project.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`w-16 h-12 overflow-hidden border transition-all cursor-pointer flex-shrink-0 ${
                activeImage === img ? 'border-ink' : 'border-line opacity-50 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
            HDE Desktop CAD & Vector Engine Specs
          </span>
          <button 
            onClick={() => {
              onClose();
              onOrder(project.title);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-invert-bg text-invert-fg font-mono uppercase text-[11px] tracking-[0.14em] font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            <span>Request Custom CAD / Desktop Tool</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
