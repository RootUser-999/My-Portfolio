import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Cpu, Layers } from 'lucide-react';
import { Project } from '../data/projects.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8"
      onClick={onClose}
    >
      <div
        className="bg-[#0E1420] border border-slate-700/80 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#0E1420]/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Case Study
            </span>
            <span className="text-slate-700" aria-hidden="true">/</span>
            <span className="text-xs font-mono text-slate-300">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-[#121A29] hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Category */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.status}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Project Showcase Visual */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#080B12] aspect-video w-full">
            <img
              src={project.imagePath}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Detailed Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-indigo-300">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          {/* Problem Solved */}
          <div className="p-5 rounded-xl bg-[#121A29] border border-slate-800 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Statement & Objective</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-indigo-300">
              Key Capabilities & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture & Interactive Flow Diagram */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-indigo-300 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>System Architecture & Pipeline</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.architectureSummary}
            </p>

            {/* Visual step pipeline */}
            <div className="p-4 rounded-xl bg-[#080B12] border border-slate-800 space-y-3 font-mono text-xs">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                Data & Request Flow:
              </div>
              <div className="space-y-2">
                {project.architectureFlow.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded bg-[#0E1420] border border-slate-800 gap-2"
                  >
                    <div className="flex items-center gap-2 text-indigo-300 font-medium">
                      <span>{step.from}</span>
                      <span className="text-slate-600">→</span>
                      <span className="text-sky-300">{step.to}</span>
                    </div>
                    <span className="text-slate-400 text-[11px] bg-[#121A29] px-2 py-0.5 rounded border border-slate-800 w-fit">
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-indigo-300">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-slate-200 bg-[#121A29] border border-slate-700/60 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Engineering Decisions */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-indigo-300">
              Challenges & Engineering Decisions
            </h3>
            <div className="space-y-2">
              {project.challengesAndDecisions.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#121A29]/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-indigo-300">
              What I Learned
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc list-inside">
              {project.whatLearned.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* Links / Action Footer */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-[#121A29] hover:bg-[#1A2438] border border-slate-700/60 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub</span>
                </a>
              )}

              <span className="text-xs font-mono text-slate-400 bg-[#080B12] px-3 py-1.5 rounded border border-slate-800">
                Status: {project.publicLinkStatus}
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#121A29] hover:bg-slate-800 rounded-lg transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
