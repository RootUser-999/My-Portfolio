import React, { useState } from 'react';
import { Cpu, Eye, Sparkles, Database, Terminal, ArrowRight, Play, CheckCircle } from 'lucide-react';

export const AIEngineeringSection: React.FC = () => {
  const [agentStep, setAgentStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateAgentWorkflow = () => {
    setIsSimulating(true);
    setAgentStep(1);
    const intervals = [
      setTimeout(() => setAgentStep(2), 700),
      setTimeout(() => setAgentStep(3), 1500),
      setTimeout(() => setAgentStep(4), 2300),
      setTimeout(() => setAgentStep(5), 3100),
      setTimeout(() => setIsSimulating(false), 3800),
    ];
    return () => intervals.forEach(clearTimeout);
  };

  return (
    <section id="ai-engineering" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">AI & Machine Learning</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Building AI-Powered Applications and Exploring Intelligent Systems
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Combining classical deep learning computer vision, modern generative LLM orchestration, structured prompt engineering, and emerging RAG pipelines.
          </p>
        </div>

        {/* 4 Pillars of AI Engineering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pillar 1: ML & Deep Learning */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-sky-400">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400">Pillar 01 · Computer Vision</span>
            </div>
            <h3 className="text-lg font-bold text-white">Machine Learning & Deep Learning</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Supervised model training and computer vision using TensorFlow and Keras. Focused on custom 2D Convolutional Neural Networks (CNNs) for image classification and forensic frame analysis.
            </p>
            <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Custom 2D CNN Architecture Design (Conv2D, MaxPooling, Dropout, Dense)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Image Preprocessing & Augmentation Pipelines via OpenCV</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Video Frame Extraction & Forensic Temporal Sampling</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Featured Works:</span>
              <span className="text-sky-300 font-semibold">GemVision AI · Deepfake Detection</span>
            </div>
          </div>

          {/* Pillar 2: Generative AI & LLMs */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-indigo-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400">Pillar 02 · Language Models</span>
            </div>
            <h3 className="text-lg font-bold text-white">Generative AI & LLM Engineering</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Integrating large language models through both hosted APIs (Google Gemini) and self-hosted inference servers (Qwen3-4B). Prompt engineering with structured JSON schemas.
            </p>
            <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Decoupled Local Model Inference Serving via HTTP Endpoints</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Structured Output Guarantees (JSON Schema Mode enforcement)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Prompt Injection Mitigation & Ethical Boundaries</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Featured Works:</span>
              <span className="text-indigo-300 font-semibold">CyberMentor AI · Nexora AI</span>
            </div>
          </div>

          {/* Pillar 3: RAG & Embeddings */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-purple-400">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400">Pillar 03 · Knowledge Retrieval</span>
            </div>
            <h3 className="text-lg font-bold text-white">RAG & Dense Embeddings</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Retrieval-Augmented Generation to prevent model hallucination. Parsing unstructured business documents, creating text chunks with sliding overlap, and generating vector embeddings.
            </p>
            <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Text Chunking & Embedding Generation via dense embedding models</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Cosine Distance & Vector Search ranking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Context-grounded prompt construction with cited sources</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Stage:</span>
              <span className="text-purple-300 font-semibold">Prototypes & Evaluation</span>
            </div>
          </div>

          {/* Pillar 4: AI Agents & Automation */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0E1420] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-emerald-400">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400">Pillar 04 · Agentic Execution</span>
            </div>
            <h3 className="text-lg font-bold text-white">AI Agents & Tool Calling</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Agentic workflows where an LLM functions as a reasoning engine, deciding when to consult vector retrieval, query SQL records, or invoke external REST endpoints.
            </p>
            <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Function Calling with strict JSON Schema parameter validation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Controlled Tool Execution (Read-Only queries vs Mutating operations)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Multi-step plan decomposition & error recovery loops</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Active Project:</span>
              <span className="text-emerald-300 font-semibold">Agent & RAG Ops (In Progress)</span>
            </div>
          </div>
        </div>

        {/* Interactive Architecture Simulator: AI Agent Tool-Calling Workflow */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1420] border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-[11px] font-mono text-indigo-300 mb-2">
                Architectural Visualization (Active Project Concept)
              </div>
              <h3 className="text-lg font-bold text-white">
                RAG & Agentic Tool-Calling Workflow Pipeline
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Illustrative architecture for the in-progress AI Business Operations Assistant.
              </p>
            </div>

            <button
              onClick={simulateAgentWorkflow}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg transition-colors shrink-0"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isSimulating ? 'Simulating Step...' : 'Simulate Query Run'}</span>
            </button>
          </div>

          {/* Interactive Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono text-xs">
            {/* Step 1 */}
            <div
              className={`p-4 rounded-xl border transition-all ${
                agentStep >= 1
                  ? 'bg-[#121A29] border-indigo-500/80 text-white shadow-md'
                  : 'bg-[#080B12] border-slate-800 text-slate-500'
              }`}
            >
              <div className="text-[10px] text-indigo-400 font-bold mb-1">01. USER INPUT</div>
              <div className="font-semibold text-xs">Query Ingestion</div>
              <p className="text-[11px] text-slate-400 mt-2">
                "What was our top selling product in Q3 and check warehouse inventory?"
              </p>
            </div>

            {/* Step 2 */}
            <div
              className={`p-4 rounded-xl border transition-all ${
                agentStep >= 2
                  ? 'bg-[#121A29] border-sky-500/80 text-white shadow-md'
                  : 'bg-[#080B12] border-slate-800 text-slate-500'
              }`}
            >
              <div className="text-[10px] text-sky-400 font-bold mb-1">02. LLM REASONING</div>
              <div className="font-semibold text-xs">Intent & Plan</div>
              <p className="text-[11px] text-slate-400 mt-2">
                Agent decomposes into 2 sub-goals: Sales Analytics Query + Inventory Tool Call.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className={`p-4 rounded-xl border transition-all ${
                agentStep >= 3
                  ? 'bg-[#121A29] border-purple-500/80 text-white shadow-md'
                  : 'bg-[#080B12] border-slate-800 text-slate-500'
              }`}
            >
              <div className="text-[10px] text-purple-400 font-bold mb-1">03. TOOL CALLING</div>
              <div className="font-semibold text-xs">SQL & Vector Search</div>
              <p className="text-[11px] text-slate-400 mt-2">
                Executes: <code>get_sales_metrics()</code> & <code>query_stock(id)</code>.
              </p>
            </div>

            {/* Step 4 */}
            <div
              className={`p-4 rounded-xl border transition-all ${
                agentStep >= 4
                  ? 'bg-[#121A29] border-amber-500/80 text-white shadow-md'
                  : 'bg-[#080B12] border-slate-800 text-slate-500'
              }`}
            >
              <div className="text-[10px] text-amber-400 font-bold mb-1">04. CONTEXT SYNTHESIS</div>
              <div className="font-semibold text-xs">Grounding & Check</div>
              <p className="text-[11px] text-slate-400 mt-2">
                Tool returns raw data. LLM validates output matches business constraints.
              </p>
            </div>

            {/* Step 5 */}
            <div
              className={`p-4 rounded-xl border transition-all ${
                agentStep >= 5
                  ? 'bg-[#121A29] border-emerald-500/80 text-white shadow-md'
                  : 'bg-[#080B12] border-slate-800 text-slate-500'
              }`}
            >
              <div className="text-[10px] text-emerald-400 font-bold mb-1">05. STRUCTURED OUTPUT</div>
              <div className="font-semibold text-xs">Grounded Response</div>
              <p className="text-[11px] text-slate-400 mt-2">
                Returns verified product name, units sold, and current stock count with zero hallucination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
