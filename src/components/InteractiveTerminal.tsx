import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Copy, Check, Play, CornerDownLeft, Sparkles } from 'lucide-react';
import { TERMINAL_FILES, PORTFOLIO_INFO } from '../data/portfolioData';

interface InteractiveTerminalProps {
  onOpenContact?: () => void;
  onOpenProject?: (projectId: string) => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  onOpenContact,
  onOpenProject
}) => {
  const [activeTab, setActiveTab] = useState<'architecture.ts' | 'stack.config' | 'deploy.sh' | 'cli'>('architecture.ts');
  const [copied, setCopied] = useState(false);

  // CLI state
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: 'amos --version',
      output: (
        <span className="text-[#94A3B8]">
          Amos Kipkirui Systems Architect v2.4.0 (x86_64-linux-production)
          <br />Type <span className="text-[#14B8A6] font-semibold">help</span> to view available system commands.
        </span>
      ),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (activeTab === 'cli') return;
    const content = TERMINAL_FILES[activeTab]?.content || '';
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="text-[#CBD5E1]">Available commands:</p>
            <p><span className="text-[#14B8A6] font-semibold">whoami</span> - About Amos Kipkirui & architectural philosophy</p>
            <p><span className="text-[#14B8A6] font-semibold">skills</span> - Core languages, backend, and cloud matrix</p>
            <p><span className="text-[#14B8A6] font-semibold">projects</span> - View production case studies & systems</p>
            <p><span className="text-[#14B8A6] font-semibold">uptime</span> - Telemetry & production system reliability</p>
            <p><span className="text-[#14B8A6] font-semibold">contact</span> - Email, LinkedIn, and booking options</p>
            <p><span className="text-[#14B8A6] font-semibold">clear</span> - Clear current console buffer</p>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-xs sm:text-sm text-[#CBD5E1] space-y-1">
            <p className="font-semibold text-white">{PORTFOLIO_INFO.name} — {PORTFOLIO_INFO.title}</p>
            <p>Based in: {PORTFOLIO_INFO.location}</p>
            <p className="text-[#94A3B8]">{PORTFOLIO_INFO.bio}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#CBD5E1]">
            <div>
              <p className="text-[#14B8A6] font-semibold">Languages & Core:</p>
              <p className="text-[#94A3B8]">TypeScript, Go, Rust, Python, SQL</p>
            </div>
            <div>
              <p className="text-[#14B8A6] font-semibold">Frontend & UX:</p>
              <p className="text-[#94A3B8]">React 19, Next.js, Tailwind v4, WebGL</p>
            </div>
            <div>
              <p className="text-[#14B8A6] font-semibold">Backend & Data:</p>
              <p className="text-[#94A3B8]">PostgreSQL, Redis, Kafka, gRPC, Node.js</p>
            </div>
            <div>
              <p className="text-[#14B8A6] font-semibold">Cloud & Ops:</p>
              <p className="text-[#94A3B8]">Docker, K8s, AWS, Terraform, CI/CD</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-1.5 text-xs sm:text-sm text-[#CBD5E1]">
            <p className="text-[#14B8A6] font-semibold">Active Production Case Studies:</p>
            <p>1. <span className="text-white font-medium">Kestra Cloud Engine</span> — Distributed workflow telemetry (2.4M jobs/day)</p>
            <p>2. <span className="text-white font-medium">Apex Protocol</span> — 60fps WebGL real-time orderbook (50k ticks/sec)</p>
            <p>3. <span className="text-white font-medium">Nexus Component Studio</span> — Accessible UI kit (WCAG AAA, 14kb)</p>
            <p>4. <span className="text-white font-medium">Aether AI Copilot</span> — Hybrid RAG vector search engine</p>
            <p className="text-[#94A3B8] italic mt-1">Scroll down or click any project card to view complete architectural blueprints.</p>
          </div>
        );
        break;

      case 'uptime':
        outputNode = (
          <div className="space-y-1 text-xs sm:text-sm text-[#CBD5E1]">
            <p className="text-emerald-400 font-semibold">🟢 Systems Operational (99.98% SLA)</p>
            <p>Load Average: 0.14, 0.22, 0.18</p>
            <p>Active Cluster Nodes: 12 healthy pods across 2 multi-zones</p>
            <p>P99 Edge Latency: 14.2ms</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs sm:text-sm text-[#CBD5E1]">
            <p>Direct Email: <span className="text-[#14B8A6] font-mono select-all">akipkirui2024@gmail.com</span></p>
            <p>Availability: <span className="text-emerald-400">Available for Q2/Q3 Projects</span></p>
            <p>GitHub: <a href="https://github.com/akipkirui" target="_blank" rel="noreferrer" className="underline text-[#94A3B8] hover:text-white">github.com/akipkirui</a></p>
            {onOpenContact && (
              <button
                type="button"
                onClick={onOpenContact}
                className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-[#14B8A6] text-[#0B1F3A] font-semibold text-xs rounded hover:bg-[#2DD4BF] cursor-pointer"
              >
                Open Scheduling Form →
              </button>
            )}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <span className="text-rose-400 text-xs sm:text-sm">
            command not found: {cmd}. Type <span className="text-[#14B8A6] underline cursor-pointer" onClick={() => setInputVal('help')}>help</span> for available commands.
          </span>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: inputVal, output: outputNode }]);
    setInputVal('');
  };

  useEffect(() => {
    if (activeTab === 'cli') {
      terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, activeTab]);

  return (
    <div className="w-full rounded-xl overflow-hidden bg-[#0B1F3A] border border-[#1E3A8A]/30 shadow-soft-level3 text-[#F8FAFC]">
      {/* Top Bar with Faux macOS / Unix Controls */}
      <div className="px-4 py-3 bg-[#071527] border-b border-[#1E293B] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block"></span>
          </div>
          <span className="text-xs text-[#94A3B8] font-mono ml-2 hidden sm:inline-block">
            amos@cloud-node-01: ~/systems
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-[#0B1F3A] p-0.5 rounded-lg border border-[#1E293B]">
          {(['architecture.ts', 'stack.config', 'deploy.sh'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#1E293B] text-[#14B8A6] font-semibold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
          <button
            onClick={() => setActiveTab('cli')}
            className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1 transition-colors cursor-pointer ${
              activeTab === 'cli'
                ? 'bg-[#14B8A6] text-[#0B1F3A] font-semibold'
                : 'text-[#14B8A6] hover:bg-[#1E293B]'
            }`}
          >
            <TerminalIcon className="w-3 h-3" />
            <span>live_cli</span>
          </button>
        </div>

        {/* Action Button: Copy or Reset */}
        <div className="flex items-center gap-2">
          {activeTab !== 'cli' ? (
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-[#94A3B8] hover:text-white hover:bg-[#1E293B] rounded transition-colors cursor-pointer"
              title="Copy snippet"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" />
                  <span className="text-[#14B8A6]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={() => setHistory([])}
              className="text-xs font-mono text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Code Display or Interactive CLI */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm min-h-[300px] max-h-[360px] overflow-y-auto">
        {activeTab !== 'cli' ? (
          <div className="space-y-1">
            {TERMINAL_FILES[activeTab].content.split('\n').map((line, idx) => (
              <div key={idx} className="flex">
                <span className="w-8 select-none text-[#475569] text-right pr-4 text-xs font-mono">
                  {idx + 1}
                </span>
                <span className="text-[#E2E8F0] whitespace-pre-wrap break-all flex-1 font-mono">
                  {line.startsWith('#') || line.startsWith('//') || line.startsWith(' *') || line.startsWith('/**') ? (
                    <span className="text-[#64748B] italic">{line}</span>
                  ) : line.includes('import') || line.includes('export') || line.includes('package') || line.includes('const') || line.includes('function') ? (
                    <span className="text-[#38BDF8]">{line}</span>
                  ) : line.includes('status:') || line.includes('runtime:') || line.includes('P99') ? (
                    <span className="text-[#14B8A6] font-medium">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3 font-mono">
            <div className="flex items-center gap-2 pb-2 border-b border-[#1E293B] text-xs text-[#94A3B8]">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Interactive CLI active. Try commands: <code className="text-[#14B8A6]">whoami</code>, <code className="text-[#14B8A6]">skills</code>, <code className="text-[#14B8A6]">projects</code>, <code className="text-[#14B8A6]">uptime</code>, <code className="text-[#14B8A6]">contact</code></span>
            </div>

            {history.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-[#14B8A6] font-bold">visitor@amos-box:~$</span>
                  <span>{item.command}</span>
                </div>
                <div className="pl-4 border-l border-[#1E293B] py-0.5">{item.output}</div>
              </div>
            ))}

            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-[#14B8A6] font-bold shrink-0">visitor@amos-box:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help' or command..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none font-mono text-xs sm:text-sm placeholder-[#475569]"
                autoFocus
              />
              <button
                type="submit"
                className="p-1 text-[#94A3B8] hover:text-[#14B8A6] transition-colors"
                title="Execute command"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
            <div ref={terminalBottomRef} />
          </div>
        )}
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="px-4 py-2 bg-[#071527] border-t border-[#1E293B] flex items-center justify-between text-xs font-mono text-[#64748B]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
            CLUSTER_ONLINE
          </span>
          <span className="hidden sm:inline">SHA: 7f3a90b</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#94A3B8]">UTF-8</span>
          <span className="text-[#14B8A6] font-medium">TypeScript / Go</span>
        </div>
      </div>
    </div>
  );
};
