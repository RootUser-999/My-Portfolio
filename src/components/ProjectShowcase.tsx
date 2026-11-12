import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, Layers, Cpu, Shield, Sparkles, FolderGit2 } from 'lucide-react';
import { projectsData, Project, secondaryWorkData } from '../data/projects.ts';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All Projects',
    'Full Stack',
    'AI / Machine Learning',
    'Generative AI',
    'Cybersecurity',
    'SaaS Applications',
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category match
      let matchesCategory = true;
      if (selectedCategory === 'Full Stack') {
        matchesCategory = project.categories.includes('Full Stack');
      } else if (selectedCategory === 'AI / Machine Learning') {
        matchesCategory = project.categories.includes('AI / Machine Learning');
      } else if (selectedCategory === 'Generative AI') {
        matchesCategory = project.categories.includes('Generative AI');
      } else if (selectedCategory === 'Cybersecurity') {
        matchesCategory = project.categories.includes('Cybersecurity');
      } else if (selectedCategory === 'SaaS Applications') {
        matchesCategory = project.categories.includes('SaaS');
      }

      // Search query match
      const query = searchQuery.trim().toLowerCase();
      let matchesSearch = true;
      if (query) {
        const titleMatch = project.title.toLowerCase().includes(query);
        const descMatch = project.shortDescription.toLowerCase().includes(query);
        const techMatch = project.technologies.some((t) => t.toLowerCase().includes(query));
        matchesSearch = titleMatch || descMatch || techMatch;
      }

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Featured Portfolio</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Engineering Projects & Technical Case Studies
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            In-depth case studies covering multi-tenant SaaS architecture, deep learning computer vision, local and API-driven LLM applications, and defensive security.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0E1420] border border-slate-800 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-[#121A29]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, stack, title..."
              aria-label="Search projects"
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#0E1420] border border-slate-800 focus:border-indigo-500 rounded-lg text-slate-200 outline-none placeholder:text-slate-500 font-mono"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-[#0E1420] border border-slate-800 space-y-3">
            <p className="text-slate-400 text-sm">No engineering projects match your current filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Projects');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isFYP = project.status === 'Final Year Project';
              const isInProgress = project.status === 'In Progress';

              return (
                <div
                  key={project.id}
                  className="rounded-xl bg-[#0E1420] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
                >
                  {/* Card Visual Header */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#080B12] border-b border-slate-800">
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-transparent to-transparent opacity-80" />

                    {/* Clean unboxed status overlay */}
                    <div className="absolute top-3 left-3 bg-[#080B12]/85 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700/60 text-[11px] font-mono text-slate-300">
                      {project.status}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.technologies.slice(0, 3).join(', ')}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#121A29] text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-500">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-[#121A29] hover:bg-indigo-600 hover:text-white rounded-lg border border-slate-700/60 transition-colors flex items-center justify-center gap-2"
                      >
                        <span>View Case Study & Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Additional Project Inventory */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex items-center gap-2 mb-6">
            <FolderGit2 className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white">Other Engineering Work & Prototypes</h3>
            <span className="text-xs font-mono text-slate-400 ml-2">Verified source inventory</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {secondaryWorkData.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0E1420] border border-slate-800/80 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>{item.status}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-800">
                  {item.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-slate-400 bg-[#121A29] px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
