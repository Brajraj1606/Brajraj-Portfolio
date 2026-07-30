import React from 'react';
import { SocialLinks } from '../types/portfolio';

interface SocialIconsProps {
  socials?: SocialLinks;
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
}

// Ensure full URL with protocol
const formatUrl = (url?: string): string => {
  if (!url) return '#';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
};

export const SocialIcons: React.FC<SocialIconsProps> = ({
  socials,
  className = '',
  iconSize = 'md'
}) => {
  if (!socials) return null;

  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5 text-xs',
    md: 'w-10 h-10 p-2.5 text-sm',
    lg: 'w-12 h-12 p-3 text-base'
  };

  const svgSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const items = [
    {
      name: 'LinkedIn',
      url: socials.linkedin,
      color: 'hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/60 hover:text-[#0A66C2] text-slate-300',
      badge: 'bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/30',
      icon: (
        <svg className={svgSizes[iconSize]} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: socials.github,
      color: 'hover:bg-slate-700/80 hover:border-slate-500 hover:text-white text-slate-300',
      badge: 'bg-slate-800 text-slate-200 border-slate-700',
      icon: (
        <svg className={svgSizes[iconSize]} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: socials.instagram,
      color: 'hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-amber-500/20 hover:border-pink-500/60 hover:text-pink-400 text-slate-300',
      badge: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      icon: (
        <svg className={svgSizes[iconSize]} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      url: socials.twitter,
      color: 'hover:bg-slate-800 hover:border-slate-400 hover:text-white text-slate-300',
      badge: 'bg-slate-800 text-slate-300 border-slate-700',
      icon: (
        <svg className={svgSizes[iconSize]} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'TryHackMe',
      url: socials.tryhackme,
      color: 'hover:bg-[#C1272D]/20 hover:border-[#C1272D]/70 hover:text-[#FF3B3F] text-slate-300',
      badge: 'bg-[#C1272D]/15 text-[#FF3B3F] border-[#C1272D]/40',
      icon: (
        <svg className={svgSizes[iconSize]} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Hack The Box',
      url: socials.hackthebox,
      color: 'hover:bg-[#9FEF00]/20 hover:border-[#9FEF00]/70 hover:text-[#9FEF00] text-slate-300',
      badge: 'bg-[#9FEF00]/10 text-[#9FEF00] border-[#9FEF00]/30',
      icon: (
        <svg className={svgSizes[iconSize]} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.996 0L1.77 5.903v12.194l10.226 5.903 10.233-5.903V5.903L11.996 0zm0 2.825l7.781 4.493-2.915 1.683-4.866-2.81-4.866 2.81-2.915-1.683 7.781-4.493zm-7.781 13.78V9.1l4.866 2.81v5.619l-4.866-1.924zm10.631 1.924V11.91l4.866-2.81v7.505l-4.866 1.924z" />
        </svg>
      )
    }
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {items.map((item) => {
        if (!item.url) return null;
        const targetUrl = formatUrl(item.url);

        return (
          <a
            key={item.name}
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit profile on ${item.name}`}
            className={`relative group rounded-xl bg-slate-900/90 border border-slate-800 transition-all duration-300 shadow-md flex items-center justify-center ${sizeClasses[iconSize]} ${item.color} hover:scale-110 active:scale-95`}
          >
            {item.icon}

            {/* Tooltip on hover */}
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-semibold text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-20">
              {item.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};
