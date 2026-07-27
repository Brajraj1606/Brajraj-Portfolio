import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Code2,
  Database,
  ShoppingBag,
  Cpu,
  X,
  Search,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = ['All', 'Web Dev', 'E-Commerce', 'ERP & Automation', 'C Programming'];

  const filteredProjects = projects.filter((project) => {
    // Filter match
    let matchesFilter = true;
    if (selectedFilter === 'Web Dev') {
      matchesFilter = project.technologies.some((t) => ['HTML5', 'CSS', 'JavaScript', 'PHP'].includes(t));
    } else if (selectedFilter === 'E-Commerce') {
      matchesFilter = project.id === 'furnishwise';
    } else if (selectedFilter === 'ERP & Automation') {
      matchesFilter = project.id === 'odoo-business';
    } else if (selectedFilter === 'C Programming') {
      matchesFilter = project.technologies.includes('C Language') || project.id === 'guess-game';
    }

    // Search query match
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.type.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q)) ||
      project.description.some((d) => d.toLowerCase().includes(q));

    return matchesFilter && matchesSearch;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'furnishwise':
        return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case 'odoo-business':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'guess-game':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950 border border-blue-800/80 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Technical Projects Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Web & Software Projects
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Key projects demonstrating skills in web development, database management, e-commerce, ERP automation, and C programming logic.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-800 pb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === filter
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 border border-slate-800/90 rounded-3xl p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">{project.type}</p>
                    </div>
                  </div>
                  {project.badge && (
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-semibold">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Bullets Preview */}
                <ul className="space-y-2 pt-1">
                  {project.description.slice(0, 3).map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                      <span className="line-clamp-2">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack & Details CTA */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-medium text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-cyan-400 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 transition-colors shrink-0"
                >
                  <span>Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View for Project */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                  {getProjectIcon(activeModalProject.id)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeModalProject.title}</h3>
                  <p className="text-xs font-semibold text-cyan-400">{activeModalProject.type}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Detailed Feature Breakdown
                </h4>
                <ul className="space-y-3">
                  {activeModalProject.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {activeModalProject.url && (
                <div className="pt-2">
                  <p className="text-xs text-slate-400">
                    Deployment Note:{' '}
                    <span className="text-slate-300 font-medium">{activeModalProject.url}</span>
                  </p>
                </div>
              )}

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
