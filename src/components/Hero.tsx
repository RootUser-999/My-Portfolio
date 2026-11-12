import React from 'react';
import { ArrowRight, FileText, Send, Github, Linkedin, ExternalLink, Mail, Shield, Cpu, Layers } from 'lucide-react';
import { profileData } from '../data/profile.ts';
import { Terminal } from './Terminal.tsx';

interface HeroProps {
  onOpenResume: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNavigate }) => {
  return (
    <section id="home" className="pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-800/60 relative overflow-hidden">
      {/* Background radial gradient glow (subtle) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Typographic Hierarchy) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121A29] border border-slate-700/60 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-[11px] text-slate-300">{profileData.status}</span>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wide text-indigo-400 uppercase">
                Hello, I'm {profileData.name}.
              </p>
              <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                {profileData.headline}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-3 leading-[1.15]" style={{ textWrap: 'balance' }}>
                {profileData.heroHeadline}
              </h1>
            </div>

            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              {profileData.heroBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-lg shadow-indigo-950/40"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 bg-[#121A29] hover:bg-[#1A2438] border border-slate-700/70 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-[#121A29] rounded-lg transition-colors border border-transparent hover:border-slate-800"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Socials & Contact Quick Links */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="font-mono text-slate-400">CONNECT:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-indigo-400 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>RootUser-999</span>
              </a>

              <span className="text-slate-700" aria-hidden="true">·</span>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>shahzeb-aman</span>
              </a>

              <span className="text-slate-700" aria-hidden="true">·</span>

              <a
                href={profileData.fiverr}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                title="Fiverr Profile"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Fiverr Pro</span>
              </a>

              <span className="text-slate-700" aria-hidden="true">·</span>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-purple-400 transition-colors"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column (Technical Composition & Interactive Terminal) */}
          <div className="lg:col-span-5 space-y-4">
            <Terminal onNavigate={onNavigate} />

            {/* Connected Technical Triad Nodes */}
            <div className="grid grid-cols-3 gap-2 p-3 bg-[#0E1420] border border-slate-800/80 rounded-xl">
              <button
                onClick={() => onNavigate('fullstack')}
                className="p-2.5 rounded-lg bg-[#121A29] hover:bg-[#1A2438] border border-slate-800 transition-colors text-left flex flex-col gap-1 group"
              >
                <Layers className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-200">Full-Stack</span>
                <span className="text-[10px] text-slate-400">Django · React</span>
              </button>

              <button
                onClick={() => onNavigate('ai-engineering')}
                className="p-2.5 rounded-lg bg-[#121A29] hover:bg-[#1A2438] border border-slate-800 transition-colors text-left flex flex-col gap-1 group"
              >
                <Cpu className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-200">AI / ML</span>
                <span className="text-[10px] text-slate-400">CNN · LLM · RAG</span>
              </button>

              <button
                onClick={() => onNavigate('cybersecurity')}
                className="p-2.5 rounded-lg bg-[#121A29] hover:bg-[#1A2438] border border-slate-800 transition-colors text-left flex flex-col gap-1 group"
              >
                <Shield className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-200">Security</span>
                <span className="text-[10px] text-slate-400">SOC · Linux · Recon</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
