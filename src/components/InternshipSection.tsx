import React from 'react';
import {
  ShieldAlert,
  Search,
  HardDrive,
  Eye,
  Terminal,
  FileCheck2,
  Lock,
  ChevronRight,
  Globe,
  Radio
} from 'lucide-react';
import { Internship } from '../types/portfolio';

interface InternshipProps {
  internship: Internship;
}

export const InternshipSection: React.FC<InternshipProps> = ({ internship }) => {
  const forensicToolsList = [
    {
      name: 'Autopsy Forensic Browser',
      category: 'Disk Analysis & Evidence Recovery',
      desc: 'Used for disk image extraction, deleted file recovery, and file system timeline analysis.'
    },
    {
      name: 'Kali Linux Toolsuite',
      category: 'Ethical Hacking & Audit',
      desc: 'Applied penetration testing tools for network auditing and vulnerability assessments.'
    },
    {
      name: 'Dark Web Intelligence',
      category: 'Threat Intelligence & Tor',
      desc: 'Monitored onion networks for threat actors, leaked data credentials, and security risks.'
    },
    {
      name: 'Steganography Tools',
      category: 'Hidden Data Extraction',
      desc: 'Analyzed media files for hidden payloads and embedded covert data.'
    }
  ];

  return (
    <section id="internship" className="py-20 bg-slate-900/80 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Real-World Forensic Investigation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              CID Cyber Crime Cell Internship
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              3-Month hands-on experience with Gujarat State Police CID Cyber Crime Division in evidence collection, digital forensics, dark web intelligence, and case documentation.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2.5 rounded-2xl border border-slate-700/80">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <div className="text-xs">
              <span className="text-slate-400 block font-medium">Duration & Period</span>
              <span className="text-white font-bold">{internship.duration}</span>
            </div>
          </div>
        </div>

        {/* Main Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Role Details & Bullets */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-2xl font-bold text-white">{internship.role}</h3>
                <p className="text-sm font-semibold text-cyan-400 mt-1">
                  {internship.organization} • {internship.location}
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
                May 2025 - July 2025
              </span>
            </div>

            {/* Bullet Points */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Responsibilities & Investigation Scope
              </h4>
              <ul className="space-y-3.5">
                {internship.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed group">
                    <div className="w-5 h-5 rounded-full bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Forensic Tools Used */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Applied Forensic & Cybersecurity Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {internship.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Forensic Capabilities Breakdown Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 px-1">
              Core Technical Competencies Handled
            </h3>

            <div className="space-y-3">
              {forensicToolsList.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
                      {item.category}
                    </span>
                    {index === 0 && <HardDrive className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />}
                    {index === 1 && <Terminal className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />}
                    {index === 2 && <Globe className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />}
                    {index === 3 && <Lock className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Certificate Quick Badge */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCheck2 className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-xs font-bold text-white">3-Month Internship Certificate</p>
                  <p className="text-[11px] text-slate-400">Issued by CID Cyber Crime Cell, Gujarat</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-bold">
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
