import React from 'react';
import { Layers, Cpu, Shield, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile.ts';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Background & Philosophy</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Engineering Through Practical Building & Deep Curiosity
          </h2>
        </div>

        {/* Narrative & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-8 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            {profileData.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="lg:col-span-4 p-6 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-slate-200">
              Quick Facts
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col">
                <span className="text-slate-400">Education</span>
                <span className="text-white font-medium">COMSATS University Islamabad</span>
                <span className="text-slate-400 text-xs">BS Computer Science (AI) · CGPA 3.05</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex flex-col">
                <span className="text-slate-400">Current Engineering Role</span>
                <span className="text-white font-medium">Full Stack Engineer @ Webloop</span>
                <span className="text-slate-400 text-xs">Part-time · Rawalpindi, Pakistan</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex flex-col">
                <span className="text-slate-400">Freelance Development</span>
                <span className="text-white font-medium">Full-Stack Web Developer @ Fiverr</span>
                <span className="text-slate-400 text-xs">2022 – Present · Remote</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex flex-col">
                <span className="text-slate-400">Core Engineering Principles</span>
                <span className="text-indigo-300 font-medium">Build to learn · Clean architecture · Zero fluff</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Specialization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profileData.specializations.map((spec) => {
            let Icon = Layers;
            let accentColor = 'text-indigo-400';
            let targetSection = 'fullstack';

            if (spec.id === 'ai') {
              Icon = Cpu;
              accentColor = 'text-sky-400';
              targetSection = 'ai-engineering';
            } else if (spec.id === 'security') {
              Icon = Shield;
              accentColor = 'text-emerald-400';
              targetSection = 'cybersecurity';
            }

            return (
              <div
                key={spec.id}
                className="p-6 rounded-xl bg-[#0E1420] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 w-fit">
                      <Icon className={`w-5 h-5 ${accentColor}`} />
                    </div>
                    <button
                      onClick={() => onNavigate(targetSection)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                      title={`Explore ${spec.title}`}
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {spec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 space-y-1.5">
                  {spec.coreHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
