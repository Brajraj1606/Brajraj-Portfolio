import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { Education } from '../types/portfolio';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950 border border-emerald-800/80 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Degrees
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Formal education background spanning MSc in Cyber Security & Digital Forensics, BCA in Computer Applications, and secondary education.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
          {education.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  item.status === 'Pursuing'
                    ? 'bg-cyan-500 border-cyan-300 ring-4 ring-cyan-950'
                    : 'bg-slate-900 border-slate-600 group-hover:border-cyan-400'
                }`}
              >
                {item.status === 'Pursuing' && (
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Card Container */}
              <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 shadow-xl space-y-3 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-1">{item.institution}</p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </span>

                    {item.status && (
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-400 text-[11px] font-bold uppercase">
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>

                  {item.grade && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 font-bold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.grade}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
