import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile.ts';
import { experienceData } from '../data/experience.ts';
import { educationData } from '../data/education.ts';
import { certificationsData } from '../data/certifications.ts';
import { skillsData } from '../data/skills.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#0E1420] border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="sticky top-0 z-20 bg-[#0E1420]/95 backdrop-blur-md px-6 py-3.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase text-indigo-400">
              Curriculum Vitae / Resume
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-mono text-slate-400">Shahzeb</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-[#121A29] hover:bg-slate-800 border border-slate-700/60 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume view"
              className="p-1.5 text-slate-400 hover:text-white rounded-md bg-[#121A29] hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#080B12] text-slate-300 font-sans text-xs sm:text-sm">
          {/* Header Lockup */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {profileData.name}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-indigo-400 font-semibold mt-1">
                  {profileData.headline}
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profileData.email}</span>
                </div>
              </div>
            </div>

            {/* Links strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <a href={profileData.github} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                <span>github.com/RootUser-999</span>
              </a>
              <span>·</span>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/shahzeb-aman</span>
              </a>
              <span>·</span>
              <a href={profileData.fiverr} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>fiverr.com/shahzabaman</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-300">
              Professional Summary
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Computer Science graduate from COMSATS University Islamabad specializing in Full-Stack Engineering, Applied Artificial Intelligence (Deep Learning CNNs, LLMs, RAG), and Cybersecurity. Proven experience building production-grade web systems in Python, Django REST Framework, and React, alongside training computer vision models for mineral classification and synthetic media forensics. Dedicated to practical software architecture and secure digital systems.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-300">
              Education
            </h3>
            <div className="p-4 rounded-xl bg-[#0E1420] border border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{educationData.degree}</h4>
                  <p className="text-xs text-slate-300">{educationData.institution} · {educationData.location}</p>
                </div>
                <div className="text-xs font-mono text-indigo-400 sm:text-right">
                  <div>{educationData.duration}</div>
                  <div className="text-slate-400">CGPA: {educationData.cgpa}</div>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                <strong className="text-slate-300">Final Year Project:</strong> {educationData.finalYearProject.title} — {educationData.finalYearProject.description}
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-300">
              Work Experience
            </h3>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-[#0E1420] border border-slate-800 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                      <p className="text-xs text-indigo-400 font-semibold">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-300">
              Selected Technical Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Nexora AI (SaaS)</span>
                <span className="text-slate-400 block">React, Django REST, PostgreSQL, Gemini API, Redis, Celery</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Multi-tenant business ERP managing CRM, inventory, invoice automation, and background task workers.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                <span className="font-bold text-white block">GemVision AI (Deep Learning FYP)</span>
                <span className="text-slate-400 block">TensorFlow, Keras, Custom 2D CNN, Django, Flutter</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Two-tier computer vision system with validation filter and CNN gemstone identification with pricing benchmarks.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Deepfake Detection AI</span>
                <span className="text-slate-400 block">Python, TensorFlow, CNN, Frame Sampling, Django</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Digital forensics tool decomposing video into temporal keyframes for artifact authenticity classification.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                <span className="font-bold text-white block">CyberMentor AI</span>
                <span className="text-slate-400 block">Python, Django, Qwen3-4B local inference server</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Decoupled conversational learning interface for defensive cybersecurity concepts and command execution.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-300">
              Core Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Full-Stack & Languages</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Python, JavaScript, TypeScript, Dart, SQL, Django, Django REST, Node.js, React, Tailwind CSS, PostgreSQL, SQLite, Redis.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Artificial Intelligence</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  TensorFlow, Keras, Custom 2D CNN, Computer Vision, Gemini API, Qwen, Prompt Engineering, RAG Pipelines, Vector Search.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Cybersecurity & Tools</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Networking, TCP/IP, Linux, Wireshark, Nmap, Gobuster, Kali Linux, Windows Event Logs, SOC Triage, Docker, Git.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h3 className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-300">
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((c) => (
                <div key={c.id} className="flex items-center justify-between p-2 rounded bg-[#0E1420] border border-slate-800">
                  <span className="text-white font-medium">{c.title}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{c.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
