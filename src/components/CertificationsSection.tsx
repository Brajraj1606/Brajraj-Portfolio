import React from 'react';
import { Award, CheckCircle2, Languages, Heart, Calendar } from 'lucide-react';
import { Certification } from '../types/portfolio';

interface CertificationsSectionProps {
  certifications: Certification[];
  languages: string[];
  interests: string[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
  languages,
  interests
}) => {
  return (
    <section id="certifications" className="py-20 bg-slate-900/80 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950 border border-amber-800/80 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Certifications & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certificates, Languages & Technical Passions
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Verified certifications earned from institute coursework, computer science training, and spoken language proficiencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 shadow-xl flex items-start gap-4 group transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-800/80 flex items-center justify-center shrink-0 text-amber-400 group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6" />
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {cert.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    <span>{cert.date}</span>
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-300">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Technical Interests 2-Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Languages */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <Languages className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white">Spoken & Written Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 rounded-2xl bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-200 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{lang}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Technical Interests */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <Heart className="w-5 h-5 text-rose-400" />
              <h3 className="text-base font-bold text-white">Technical Interests & Focus</h3>
            </div>
            <ul className="space-y-2.5">
              {interests.map((interest, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
