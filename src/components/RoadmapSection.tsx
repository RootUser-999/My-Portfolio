import React from 'react';
import { Compass, Sparkles, Server, Shield } from 'lucide-react';
import { activeRoadmapData } from '../data/roadmap.ts';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#0E1420]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Continuous Growth</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Currently Learning & Exploring
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            An open roadmap of my active technical investigations, hands-on experiments, and emerging engineering interests.
          </p>
        </div>

        {/* 3 Domain Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activeRoadmapData.map((domain, dIdx) => {
            let Icon = Sparkles;
            let accentColor = 'text-sky-400';
            if (dIdx === 1) {
              Icon = Server;
              accentColor = 'text-indigo-400';
            } else if (dIdx === 2) {
              Icon = Shield;
              accentColor = 'text-emerald-400';
            }

            return (
              <div
                key={domain.domain}
                className="p-6 rounded-2xl bg-[#0E1420] border border-slate-800 space-y-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#121A29] border border-slate-700/60">
                        <Icon className={`w-4 h-4 ${accentColor}`} />
                      </div>
                      <h3 className="text-base font-bold text-white">{domain.domain}</h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-[#121A29] px-2 py-0.5 rounded border border-slate-800">
                      {domain.badge}
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {domain.topics.map((topic, tIdx) => {
                      let statusBadge = 'text-sky-300 bg-sky-500/10 border-sky-500/30';
                      if (topic.status === 'Building Prototypes') {
                        statusBadge = 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30';
                      } else if (topic.status === 'Deepening Theory') {
                        statusBadge = 'text-purple-300 bg-purple-500/10 border-purple-500/30';
                      }

                      return (
                        <div
                          key={tIdx}
                          className="p-3.5 rounded-xl bg-[#121A29] border border-slate-800/80 space-y-1.5"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs font-bold text-white leading-snug">{topic.title}</h4>
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border shrink-0 ${statusBadge}`}>
                              {topic.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {topic.description}
                          </p>
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
