import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/experience.ts';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#0E1420]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Engineering Roles</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Professional Experience & Hands-On Engineering
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Real software engineering positions focused on backend systems, REST API development, database modeling, and full-stack solutions.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="space-y-8 max-w-4xl">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-xl bg-[#0E1420] border border-slate-800 hover:border-slate-700 transition-colors relative"
            >
              {/* Top metadata strip */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-bold text-white">{exp.role}</span>
                    <span className="text-xs font-mono text-indigo-400 font-semibold">@{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
                    <span>{exp.employmentType}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-[#121A29] px-3 py-1 rounded-md border border-slate-700/60 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2.5 mb-6">
                <p className="text-xs uppercase font-mono text-slate-400 tracking-wider font-semibold">
                  Key Engineering Responsibilities:
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1">Technologies:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-slate-300 bg-[#121A29] px-2.5 py-1 rounded border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
