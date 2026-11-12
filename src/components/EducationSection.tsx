import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Layers } from 'lucide-react';
import { educationData } from '../data/education.ts';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#0E1420]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Academic Foundation</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Education & Academic Specialization
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Grounded in core computer science, discrete mathematics, software engineering, and applied artificial intelligence.
          </p>
        </div>

        {/* Degree Showcase Card */}
        <div className="max-w-4xl p-6 sm:p-8 rounded-2xl bg-[#0E1420] border border-slate-800 space-y-8">
          {/* Top Degree Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#121A29] border border-slate-700/60 text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{educationData.degree}</h3>
                <div className="text-indigo-400 font-medium text-sm mt-0.5">
                  Major: {educationData.major}
                </div>
                <div className="text-slate-300 font-semibold text-sm mt-1">
                  {educationData.institution}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {educationData.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {educationData.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="sm:text-right bg-[#121A29] p-3 rounded-xl border border-slate-700/60 w-fit sm:w-auto">
              <span className="text-xs font-mono text-slate-400 block">Cumulative GPA</span>
              <span className="text-xl font-bold text-white font-mono">{educationData.cgpa}</span>
            </div>
          </div>

          {/* Academic Focus Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Core Academic Curriculum & Focus</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {educationData.coreAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 text-xs font-mono rounded bg-[#121A29] text-slate-300 border border-slate-800"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Highlighted Final Year Project */}
          <div className="p-5 rounded-xl bg-[#080B12] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold">
                <Award className="w-4 h-4" />
                <span>UNIVERSITY FINAL YEAR PROJECT (FYP)</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Featured Capstone</span>
            </div>

            <h4 className="text-base font-bold text-white">{educationData.finalYearProject.title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {educationData.finalYearProject.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
              {educationData.finalYearProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-[#121A29] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
