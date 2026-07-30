import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface HeaderProps {
  portfolio: PortfolioData;
  accentColor: string;
  setAccentColor: (color: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  portfolio,
  accentColor,
  setAccentColor
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Cyber Internship', href: '#internship' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills & Tools', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-3 group">
          {portfolio.contact.avatarUrl ? (
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/50 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
              <img
                src={portfolio.contact.avatarUrl}
                alt={portfolio.contact.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
          )}
          <div>
            <span className="font-bold text-slate-100 text-lg tracking-tight block group-hover:text-cyan-400 transition-colors">
              {portfolio.contact.name}
            </span>
            <span className="text-xs text-slate-400 block font-medium">
              MSc Cyber Security Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-800/60 p-1.5 rounded-full border border-slate-700/60 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/60 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Accent Selector */}
          <div className="flex items-center bg-slate-800/80 p-1 rounded-lg border border-slate-700/80 mr-1">
            <button
              onClick={() => setAccentColor('cyan')}
              title="Cyan Theme"
              className={`w-4 h-4 rounded-full bg-cyan-500 ${
                accentColor === 'cyan' ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
              } transition-all`}
            />
            <button
              onClick={() => setAccentColor('emerald')}
              title="Emerald Theme"
              className={`w-4 h-4 rounded-full bg-emerald-500 ml-1.5 ${
                accentColor === 'emerald' ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
              } transition-all`}
            />
            <button
              onClick={() => setAccentColor('indigo')}
              title="Indigo Theme"
              className={`w-4 h-4 rounded-full bg-indigo-500 ml-1.5 ${
                accentColor === 'indigo' ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
              } transition-all`}
            />
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-600/25"
          >
            <span>Hire / Contact</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-cyan-600 text-white shadow-lg shadow-cyan-600/20"
            >
              <span>Hire / Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
