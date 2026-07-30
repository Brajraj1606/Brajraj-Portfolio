import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';
import { SocialIcons } from './SocialIcons';

interface FooterProps {
  portfolio: PortfolioData;
}

export const Footer: React.FC<FooterProps> = ({ portfolio }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-base block">{portfolio.contact.name}</span>
              <span className="text-xs text-slate-400 block">
                Cyber Security & Digital Forensics Portfolio
              </span>
            </div>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-2">
            <SocialIcons socials={portfolio.contact.socials} iconSize="sm" />
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {portfolio.contact.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#overview" className="hover:text-slate-300 transition-colors">
              Overview
            </a>
            <a href="#internship" className="hover:text-slate-300 transition-colors">
              CID Internship
            </a>
            <a href="#projects" className="hover:text-slate-300 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
