import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Code } from 'lucide-react';
import { certificationsData } from '../data/certifications.ts';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Verified Credentials</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Industry credentials in cybersecurity foundations, network defense, security risk management, and responsive web design.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {certificationsData.map((cert) => {
            const isSecurity = cert.domain === 'Cybersecurity';
            const Icon = isSecurity ? ShieldCheck : Code;
            const iconColor = isSecurity ? 'text-emerald-400' : 'text-indigo-400';

            return (
              <div
                key={cert.id}
                className="p-6 rounded-xl bg-[#0E1420] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-[#121A29] border border-slate-700/60">
                        <Icon className={`w-4 h-4 ${iconColor}`} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-300">
                        {cert.issuer}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      {cert.credentialStatus}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">{cert.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                    Core Competencies Validated:
                  </span>
                  <div className="space-y-1">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
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
