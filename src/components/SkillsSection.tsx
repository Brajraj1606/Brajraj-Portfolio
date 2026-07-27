import React, { useState } from 'react';
import {
  Cpu,
  Shield,
  Code,
  Globe,
  Database,
  Wrench,
  Check,
  Search,
  Terminal,
  Sparkles
} from 'lucide-react';
import { SkillCategory } from '../types/portfolio';

interface SkillsSectionProps {
  skills: SkillCategory[];
  software: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, software }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [skillSearch, setSkillSearch] = useState<string>('');

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('cyber') || category.toLowerCase().includes('security')) {
      return <Shield className="w-4 h-4 text-cyan-400" />;
    }
    if (category.toLowerCase().includes('programming')) {
      return <Code className="w-4 h-4 text-blue-400" />;
    }
    if (category.toLowerCase().includes('web')) {
      return <Globe className="w-4 h-4 text-emerald-400" />;
    }
    if (category.toLowerCase().includes('database') || category.toLowerCase().includes('erp')) {
      return <Database className="w-4 h-4 text-indigo-400" />;
    }
    return <Wrench className="w-4 h-4 text-amber-400" />;
  };

  const categories = ['All', ...skills.map((s) => s.category)];

  const filteredCategories = skills.filter((s) => {
    if (activeCategory !== 'All' && s.category !== activeCategory) return false;
    if (!skillSearch) return true;
    const q = skillSearch.toLowerCase();
    return (
      s.category.toLowerCase().includes(q) ||
      s.items.some((item) => item.toLowerCase().includes(q))
    );
  });

  return (
    <section id="skills" className="py-20 bg-slate-900/60 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Skills & Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Security Tools, Languages & Platforms
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Comprehensive list of cybersecurity tools, programming languages, database management platforms, and software development environments.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCategories.map((group, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 hover:border-slate-700 transition-all shadow-lg"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-base font-bold text-white">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
                  >
                    <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Software & IDEs Showcase Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Software Tools & Operating Environments</h3>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {software.map((sw) => (
              <span
                key={sw}
                className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-cyan-300 hover:border-cyan-800 transition-all"
              >
                {sw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
