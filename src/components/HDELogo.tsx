import React from 'react';

interface HDELogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const HDELogo: React.FC<HDELogoProps> = ({ 
  className = '', 
  size = 38,
  showText = true 
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-Tech Vector Mark */}
      <div 
        className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-200"
        style={{ width: size, height: size }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="hde-tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2d81ff" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            
            <linearGradient id="hde-bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#101014" />
              <stop offset="100%" stopColor="#1e1e24" />
            </linearGradient>

            <linearGradient id="hde-circuit-glow" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#3d8bff" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* Hexagonal Tech Shield Outer Frame */}
          <rect 
            x="7" 
            y="7" 
            width="86" 
            height="86" 
            rx="18" 
            fill="url(#hde-bg-gradient)" 
            stroke="var(--line-strong)" 
            strokeWidth="2.5" 
          />

          {/* Precision Corner Crosses */}
          <path d="M15 15h6M18 12v6M79 15h6M82 12v6M15 85h6M18 82v6M79 85h6M82 82v6" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

          {/* Left Bracket / Upright: < */}
          <path 
            d="M34 27 L22 50 L34 73" 
            stroke="url(#hde-tech-gradient)" 
            strokeWidth="6" 
            strokeLinecap="square" 
            strokeLinejoin="miter" 
          />

          {/* Right Bracket / Upright: > */}
          <path 
            d="M66 27 L78 50 L66 73" 
            stroke="url(#hde-tech-gradient)" 
            strokeWidth="6" 
            strokeLinecap="square" 
            strokeLinejoin="miter" 
          />

          {/* Central Connecting Monogram "H" Bar & Core Node */}
          <path 
            d="M26 50 H74" 
            stroke="url(#hde-circuit-glow)" 
            strokeWidth="5" 
            strokeLinecap="square" 
          />

          {/* Central Processing Node */}
          <circle cx="50" cy="50" r="5" fill="#38bdf8" />
          <circle cx="50" cy="50" r="8" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold text-lg sm:text-xl tracking-[-0.03em] uppercase text-ink leading-none">
              HDE
            </span>
            <span className="font-serif italic font-normal text-sm sm:text-base text-muted leading-none">
              studio
            </span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint mt-1">
            Software Engineering
          </span>
        </div>
      )}
    </div>
  );
};
