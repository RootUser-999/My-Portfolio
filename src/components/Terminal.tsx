import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Play } from 'lucide-react';
import { executeTerminalCommand, TerminalLine } from '../utils/terminalEngine.ts';

interface TerminalProps {
  onNavigate: (sectionId: string) => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onNavigate }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'system',
      content: 'Shahzeb Engineering Shell v2.4 (x86_64-pc-linux-gnu)',
    },
    {
      id: 'init-2',
      type: 'output',
      content: 'Type "help" to view commands, or click quick buttons below.',
    },
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const commandEntry: TerminalLine = {
      id: 'cmd-' + Date.now(),
      type: 'input',
      content: `$ ${trimmed}`,
    };

    const outputLines = executeTerminalCommand(trimmed, onNavigate);

    setHistory((prev) => [...prev, commandEntry, ...outputLines]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const quickCommands = ['help', 'whoami', 'skills', 'projects', 'status'];

  return (
    <div className="w-full rounded-xl bg-[#0E1420] border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-xs flex flex-col h-[380px]">
      {/* Terminal Top Bar */}
      <div className="bg-[#121A29] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-slate-400 font-medium tracking-tight">shahzeb@workstation:~</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
          <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
          <span>bash 5.2</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto space-y-2 bg-[#080B12]/80"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line) => {
          let colorClass = 'text-slate-300';
          if (line.type === 'input') colorClass = 'text-indigo-300 font-semibold';
          if (line.type === 'error') colorClass = 'text-rose-400';
          if (line.type === 'system') colorClass = 'text-sky-400';

          return (
            <div key={line.id} className={`${colorClass} leading-relaxed whitespace-pre-wrap`}>
              {line.content}
            </div>
          );
        })}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 font-bold shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (try 'help')..."
            aria-label="Terminal command prompt"
            className="flex-1 bg-transparent text-slate-100 outline-none border-none p-0 focus:ring-0 placeholder:text-slate-600 font-mono text-xs"
          />
          <button
            type="submit"
            aria-label="Submit terminal command"
            className="text-slate-500 hover:text-indigo-400 p-1"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* Quick Command Pills */}
      <div className="bg-[#0E1420] px-3 py-2 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto shrink-0">
        <span className="text-[10px] text-slate-400 whitespace-nowrap mr-1">Quick:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 text-[11px] text-slate-300 bg-[#121A29] hover:bg-indigo-600/20 hover:text-indigo-300 border border-slate-700/60 rounded transition-colors whitespace-nowrap flex items-center gap-1"
          >
            <Play className="w-2.5 h-2.5 text-indigo-400" />
            <span>{cmd}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
