import React, { useState } from 'react';
import { skillsData, ProficiencyLevel } from '../data/skills.ts';
import { Search, CheckCircle2, Bookmark, Compass } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [filterLevel, setFilterLevel] = useState<string>('All');
  const [skillSearch, setSkillSearch] = useState<string>('');

  const proficiencyLevels: string[] = [
    'All',
    'Practical Project Experience',
    'Familiar',
    'Currently Learning',
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Technical Competencies</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Skills & Domain Proficiencies
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Grouped by technical domain and categorized by real-world application depth rather than arbitrary percentage metrics.
          </p>
        </div>

        {/* Filter & Legend Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          {/* Level Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0E1420] border border-slate-800 rounded-lg">
            {proficiencyLevels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilterLevel(lvl)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  filterLevel === lvl
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-[#121A29]'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              placeholder="Filter specific skills..."
              aria-label="Filter skills"
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#0E1420] border border-slate-800 focus:border-indigo-500 rounded-lg text-slate-200 outline-none placeholder:text-slate-500 font-mono"
            />
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => {
            const visibleSkills = category.skills.filter((s) => {
              const matchesLevel = filterLevel === 'All' || s.level === filterLevel;
              const matchesSearch =
                !skillSearch ||
                s.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
                (s.note && s.note.toLowerCase().includes(skillSearch.toLowerCase()));
              return matchesLevel && matchesSearch;
            });

            if (visibleSkills.length === 0) return null;

            return (
              <div
                key={category.id}
                className="p-6 rounded-xl bg-[#0E1420] border border-slate-800 flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">{category.name}</h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {visibleSkills.length} {visibleSkills.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="space-y-2.5">
                    {visibleSkills.map((skill) => {
                      let levelBadgeColor = 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30';
                      if (skill.level === 'Familiar') {
                        levelBadgeColor = 'text-sky-300 bg-sky-500/10 border-sky-500/30';
                      } else if (skill.level === 'Currently Learning') {
                        levelBadgeColor = 'text-purple-300 bg-purple-500/10 border-purple-500/30';
                      }

                      return (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-lg bg-[#121A29] border border-slate-800/80 flex flex-col gap-1"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-100">{skill.name}</span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${levelBadgeColor}`}>
                              {skill.level}
                            </span>
                          </div>
                          {skill.note && (
                            <span className="text-[11px] text-slate-400 font-mono">
                              {skill.note}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
