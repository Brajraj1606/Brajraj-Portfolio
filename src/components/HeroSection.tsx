import React, { useState } from 'react';
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  Award,
  Terminal,
  Cpu,
  FileCode2,
  Lock,
  Search
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface HeroSectionProps {
  portfolio: PortfolioData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ portfolio }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="overview" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Security Grid Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Profile Avatar & Status Pill */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-xl">
                  <img
                    src={portfolio.contact.avatarUrl || '/profile.jpg'}
                    alt={portfolio.contact.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-900 p-0.5" title="Verified Professional">
                  <div className="w-full h-full rounded-full bg-emerald-500 ring-2 ring-slate-900 animate-pulse" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-cyan-500/30 text-cyan-400 text-xs font-semibold shadow-sm backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  <span>Seeking Cybersecurity & Digital Forensics Roles</span>
                </div>

                <div className="text-xs text-slate-400 font-medium">
                  Verified MSc Cyber Security Candidate • Gujarat University
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {portfolio.contact.name}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                {portfolio.contact.title}
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
              {portfolio.contact.summary}
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleCopy(portfolio.contact.email, 'email')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-medium transition-all"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{portfolio.contact.email}</span>
                {copiedText === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 ml-1" />
                )}
              </button>

              <button
                onClick={() => handleCopy(portfolio.contact.phone, 'phone')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-medium transition-all"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{portfolio.contact.phone}</span>
                {copiedText === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 ml-1" />
                )}
              </button>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{portfolio.contact.location}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#internship"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-600/30 transition-all hover:scale-[1.02]"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>View CID Cyber Crime Experience</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
              >
                <FileCode2 className="w-4 h-4 text-slate-400" />
                <span>Explore Technical Projects</span>
              </a>
            </div>
          </div>

          {/* Right Spotlight Card: CID Crime Cell Highlight & Quick Stats */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glowing aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-500" />

              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                        Featured Internship
                      </h3>
                      <p className="text-xs text-slate-400">3-Month State Investigation</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold">
                    CID Cyber Crime
                  </span>
                </div>

                {/* Internship Summary */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Search className="w-4 h-4 text-cyan-400" />
                    CID State Cyber Crime Cell, Gujarat
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Assisted state cyber-crime investigations involving digital evidence recovery using Autopsy, dark web monitoring, and Kali Linux ethical hacking suites.
                  </p>
                </div>

                {/* Forensic Tool Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {portfolio.internship.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700/80 text-[11px] font-medium text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Core Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-800">
                    <div className="text-2xl font-extrabold text-cyan-400">4+</div>
                    <div className="text-xs text-slate-400 font-medium">Built Tech Projects</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-800">
                    <div className="text-2xl font-extrabold text-emerald-400">MSc</div>
                    <div className="text-xs text-slate-400 font-medium">Cyber Security (Pursuing)</div>
                  </div>
                </div>

                {/* Academic Quick Stat */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">BCA Graduation Score</span>
                  <span className="font-bold text-slate-200">CGPA: 6.40% (Gujarat Univ)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
