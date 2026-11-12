import React, { useState } from 'react';
import { Shield, Terminal, Activity, FileText, CheckCircle2, ExternalLink, Network, Search, AlertTriangle } from 'lucide-react';
import { securityLabsData, cybersecurityRoadmap, SecurityLab } from '../data/cybersecurityLabs.ts';

export const CybersecuritySection: React.FC = () => {
  const [selectedLab, setSelectedLab] = useState<SecurityLab>(securityLabsData[0]);

  return (
    <section id="cybersecurity" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#0E1420]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Security Operations & Research</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Understanding Systems, Identifying Risks, and Building More Secure Applications
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            I am developing practical knowledge in cybersecurity, networking, Linux, ethical hacking, vulnerability assessment, and security operations through structured learning and hands-on experimentation.
          </p>
        </div>

        {/* 3 Core Security Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* 1. Fundamentals */}
          <div className="p-6 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-sky-400 w-fit">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Networking & Fundamentals</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Foundational understanding of how packets traverse networks, protocol handshakes, and Linux system internals.
            </p>
            <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-400 font-mono">
              <div>· TCP/IP Protocol Suite & Subnetting</div>
              <div>· DNS, DHCP, HTTP & TLS/HTTPS</div>
              <div>· Linux Permissions & Process Trees</div>
              <div>· CIA Triad & Threat Modeling</div>
              <div>· Common Web Vulnerability Concepts</div>
            </div>
          </div>

          {/* 2. Ethical Hacking & Recon */}
          <div className="p-6 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-amber-400 w-fit">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Ethical Hacking & Reconnaissance</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Methodical discovery of network ports, web endpoints, parameter fuzzing, and security misconfigurations.
            </p>
            <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-400 font-mono">
              <div>· Kali Linux & Command-line tooling</div>
              <div>· Nmap (Service versioning & scripts)</div>
              <div>· Burp Suite (HTTP proxy inspection)</div>
              <div>· Gobuster (Content & dir discovery)</div>
              <div>· Wireshark (Deep packet forensics)</div>
            </div>
          </div>

          {/* 3. Defensive Security & SOC */}
          <div className="p-6 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-emerald-400 w-fit">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Defensive Operations & SOC</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Log correlation, investigating anomalies, alert triage workflows, and mapping attack patterns to defensive frameworks.
            </p>
            <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-400 font-mono">
              <div>· Security Operations Center (SOC) Triage</div>
              <div>· Windows Security Event Log IDs</div>
              <div>· Linux auth.log & syslog Inspection</div>
              <div>· MITRE ATT&CK Framework Mapping</div>
              <div>· SIEM Concepts (Wazuh & Splunk)</div>
            </div>
          </div>
        </div>

        {/* Hands-On Lab Showcase */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1420] border border-slate-800 space-y-6 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-1">
                Practical Exercises & Case Studies
              </div>
              <h3 className="text-lg font-bold text-white">Hands-On Technical Security Labs</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Practical labs performed in sandbox and learning environments.
              </p>
            </div>

            {/* Lab selector tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121A29] border border-slate-700/60 rounded-lg">
              {securityLabsData.map((lab) => (
                <button
                  key={lab.id}
                  onClick={() => setSelectedLab(lab)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors whitespace-nowrap ${
                    selectedLab.id === lab.id
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lab.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Lab Details */}
          <div className="p-6 rounded-xl bg-[#080B12] border border-slate-800 space-y-6 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-indigo-400">{selectedLab.category}</span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">{selectedLab.name}</h4>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Environment:</span>
                <span className="text-slate-200 bg-[#121A29] px-2.5 py-1 rounded border border-slate-800">
                  {selectedLab.environment}
                </span>
              </div>
            </div>

            {/* Objective & Tools */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Objective</span>
                <p className="text-slate-300 leading-relaxed">{selectedLab.objective}</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Tools Utilized</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedLab.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[#121A29] text-indigo-300 border border-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Steps Performed */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Methodology & Steps</span>
              <ul className="space-y-1.5 text-slate-300">
                {selectedLab.stepsPerformed.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Findings & What Learned */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono uppercase text-sky-400 font-semibold">Key Findings</span>
                <p className="text-slate-300 text-xs leading-relaxed">{selectedLab.findings}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold">What I Learned</span>
                <p className="text-slate-300 text-xs leading-relaxed">{selectedLab.whatLearned}</p>
              </div>
            </div>

            {selectedLab.externalLink && (
              <div className="pt-2 flex justify-end">
                <a
                  href={selectedLab.externalLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-mono"
                >
                  <span>{selectedLab.externalLinkLabel || 'View Learning Lab'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* 7-Step Security Roadmap */}
        <div>
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Structured Path</p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Cybersecurity Technical Learning Roadmap
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              A transparent, self-directed progression from foundational networking and Linux command-line skills to defensive SOC engineering and ethical web penetration testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cybersecurityRoadmap.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-xl bg-[#0E1420] border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-indigo-400 font-bold">STAGE 0{item.step}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded ${
                      item.status.includes('Completed')
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                        : item.status === 'In Progress'
                        ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
