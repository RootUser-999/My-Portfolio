import React from 'react';
import { Github, Linkedin, ExternalLink, Mail, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile.ts';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B12] border-t border-slate-800/80 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-base font-bold text-white tracking-tight">{profileData.name}</span>
            <p className="text-xs text-slate-400">
              Full-Stack Engineer · AI/ML Engineer · Cybersecurity Enthusiast
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profileData.fiverr}
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Fiverr profile"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-[#121A29] hover:bg-slate-800 text-slate-300 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('about')} className="hover:text-white">About</button>
            <span>·</span>
            <button onClick={() => onNavigate('projects')} className="hover:text-white">Projects</button>
            <span>·</span>
            <button onClick={() => onNavigate('fullstack')} className="hover:text-white">Full-Stack</button>
            <span>·</span>
            <button onClick={() => onNavigate('ai-engineering')} className="hover:text-white">AI</button>
            <span>·</span>
            <button onClick={() => onNavigate('cybersecurity')} className="hover:text-white">Security</button>
            <span>·</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
