import React, { useState } from 'react';
import { Layers, Server, Database, Code, ArrowRight, ShieldCheck, Clock, Check } from 'lucide-react';

export const FullStackSection: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<'crud' | 'auth' | 'async'>('crud');

  return (
    <section id="fullstack" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#0E1420]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Engineering Specialization</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Building Complete Applications from Architecture to Deployment
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Designing resilient backend micro-services, type-safe API contracts, robust database models, and responsive client interfaces.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* 1. Backend */}
          <div className="p-6 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 w-fit text-indigo-400">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Backend Engineering</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              API-driven systems built with clean service layers, modular business logic, and secure authentication.
            </p>
            <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-400 font-mono">
              <div>· Python / Django / DRF</div>
              <div>· Node.js / Express</div>
              <div>· REST API Design</div>
              <div>· JWT Authentication & RBAC</div>
              <div>· Celery Async Background Tasks</div>
            </div>
          </div>

          {/* 2. Frontend */}
          <div className="p-6 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 w-fit text-sky-400">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Frontend Development</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Responsive user interfaces using component-driven paradigms, type safety, and disciplined design systems.
            </p>
            <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-400 font-mono">
              <div>· React.js / TypeScript</div>
              <div>· Tailwind CSS / Bootstrap</div>
              <div>· Next.js Architecture</div>
              <div>· Flutter Mobile UI</div>
              <div>· Accessible, Fast Loading</div>
            </div>
          </div>

          {/* 3. Databases */}
          <div className="p-6 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 w-fit text-emerald-400">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Database Technologies</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Relational and document storage, schema migrations, indexing strategies, and fast cache layers.
            </p>
            <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-400 font-mono">
              <div>· PostgreSQL (Multi-tenant)</div>
              <div>· Redis (Message Queue & Cache)</div>
              <div>· MongoDB (Document Storage)</div>
              <div>· SQLite (Embedded & Testing)</div>
              <div>· Django ORM / Drizzle</div>
            </div>
          </div>

          {/* 4. Systems & DevOps */}
          <div className="p-6 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 w-fit text-purple-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Software Principles</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Modular architecture, defensive programming, error logging, and containerized deployment workflows.
            </p>
            <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-400 font-mono">
              <div>· Docker Containerization</div>
              <div>· Git / GitHub Collaboration</div>
              <div>· Error Isolation & Logging</div>
              <div>· Role-Based Access Control</div>
              <div>· Scalable Directory Layouts</div>
            </div>
          </div>
        </div>

        {/* Interactive Full-Stack Architecture Visualizer */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1420] border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white">Full-Stack Architecture Patterns</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Toggle interactive diagrams to inspect real data and control flows implemented in my projects.
              </p>
            </div>

            {/* Diagram selector tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#121A29] border border-slate-700/60 rounded-lg">
              <button
                onClick={() => setActiveDiagram('crud')}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                  activeDiagram === 'crud' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                REST & Database Flow
              </button>
              <button
                onClick={() => setActiveDiagram('auth')}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                  activeDiagram === 'auth' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Auth & RBAC Flow
              </button>
              <button
                onClick={() => setActiveDiagram('async')}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                  activeDiagram === 'async' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Async Workers & Queue
              </button>
            </div>
          </div>

          {/* Diagram Display */}
          <div className="p-6 rounded-xl bg-[#080B12] border border-slate-800/80 font-mono text-xs">
            {activeDiagram === 'crud' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-indigo-400 font-semibold border-b border-slate-800 pb-2">
                  <span>Pattern: Frontend → REST API → Backend → Database</span>
                  <span className="text-[11px] text-slate-400">Implemented in: Nexora AI & Hire Flow</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">1. React Client</div>
                    <div className="text-slate-400 text-[11px]">User Action / Form Submit</div>
                    <div className="text-indigo-400 text-[10px] pt-1">HTTP POST /api/v1/resource</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">2. Django DRF API</div>
                    <div className="text-slate-400 text-[11px]">URL Routing & Serializer</div>
                    <div className="text-sky-400 text-[10px] pt-1">Field Validation & Sanitization</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">3. Business Service</div>
                    <div className="text-slate-400 text-[11px]">Tenant Scope & Domain Logic</div>
                    <div className="text-purple-400 text-[10px] pt-1">Audit Log & State Update</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">4. PostgreSQL</div>
                    <div className="text-slate-400 text-[11px]">ACID Transaction & Commit</div>
                    <div className="text-emerald-400 text-[10px] pt-1">201 Created Response</div>
                  </div>
                </div>
              </div>
            )}

            {activeDiagram === 'auth' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-indigo-400 font-semibold border-b border-slate-800 pb-2">
                  <span>Pattern: Authentication → Token Verification → Role Authorization → Protected Resource</span>
                  <span className="text-[11px] text-slate-400">Implemented in: Nexora AI (RBAC) & GemVision</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">1. Credentials Submit</div>
                    <div className="text-slate-400 text-[11px]">Email + Password / OTP</div>
                    <div className="text-indigo-400 text-[10px] pt-1">Bcrypt Hash Verification</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">2. JWT Token Issued</div>
                    <div className="text-slate-400 text-[11px]">Access & Refresh Tokens</div>
                    <div className="text-sky-400 text-[10px] pt-1">Payload: UserID, Tenant, Role</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">3. Permission Gate</div>
                    <div className="text-slate-400 text-[11px]">DRF HasPermission Class</div>
                    <div className="text-purple-400 text-[10px] pt-1">Check Admin/Manager/Staff</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">4. Data Access</div>
                    <div className="text-slate-400 text-[11px]">Tenant Queryset Isolation</div>
                    <div className="text-emerald-400 text-[10px] pt-1">Filtered JSON Return</div>
                  </div>
                </div>
              </div>
            )}

            {activeDiagram === 'async' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-indigo-400 font-semibold border-b border-slate-800 pb-2">
                  <span>Pattern: Client Request → Fast 202 Ack → Redis Queue → Celery Worker → Database</span>
                  <span className="text-[11px] text-slate-400">Implemented in: Nexora AI (Reports & Bulk Tasks)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">1. Heavy Action</div>
                    <div className="text-slate-400 text-[11px]">Export 10k Invoices / AI Report</div>
                    <div className="text-indigo-400 text-[10px] pt-1">Returns 202 Accepted</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">2. Redis Broker</div>
                    <div className="text-slate-400 text-[11px]">Serialized Task Payload</div>
                    <div className="text-sky-400 text-[10px] pt-1">FIFO Queue & Persistence</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">3. Celery Worker</div>
                    <div className="text-slate-400 text-[11px]">Detached Execution Thread</div>
                    <div className="text-purple-400 text-[10px] pt-1">Processes Data & API Calls</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#0E1420] border border-slate-800 space-y-1">
                    <div className="text-white font-bold">4. Result Notification</div>
                    <div className="text-slate-400 text-[11px]">Store Artifact in DB / S3</div>
                    <div className="text-emerald-400 text-[10px] pt-1">Mark Task Finished</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
