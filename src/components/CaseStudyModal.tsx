import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Zap, Shield, ArrowRight, Layers, Cpu, Server, Code2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenSchedule: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenSchedule,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B1F3A]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-soft-level3 border border-[#E2E8F0] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#14B8A6]/10 text-[#0F766E] border border-[#14B8A6]/20">
              {project.category}
            </span>
            <span className="text-xs text-[#64748B] font-mono hidden sm:inline">
              ARCHITECTURAL DEEP-DIVE
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0B1F3A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Hero Banner & Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0B1F3A] tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#44474D]">
              {project.subtitle}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0]">
                  <div className="text-xs text-[#64748B] font-medium">{m.label}</div>
                  <div className="text-lg sm:text-xl font-display font-bold text-[#0B1F3A]">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Image & Tech Chips */}
          <div className="rounded-xl overflow-hidden border border-[#E2E8F0]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 sm:h-72 object-cover"
            />
            <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-mono text-[#334155] shadow-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Problem vs Solution Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#FFF5F5] p-5 rounded-xl border border-[#FED7D7]">
              <div className="text-xs font-bold font-mono text-[#C53030] uppercase tracking-wider mb-2">
                The Bottleneck & Problem
              </div>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="bg-[#F0FDF4] p-5 rounded-xl border border-[#BBF7D0]">
              <div className="text-xs font-bold font-mono text-[#15803D] uppercase tracking-wider mb-2">
                Engineered Solution
              </div>
              <p className="text-sm text-[#374151] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture Flow Diagram */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-[#14B8A6]" />
              <h3 className="text-lg font-display font-bold text-[#0B1F3A]">
                System Architecture Topology
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.caseStudy.architectureDiagram.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-soft-level1 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#0B1F3A] text-white text-xs font-mono font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F1F5F9] text-[#0F766E]">
                        {step.tech}
                      </span>
                    </div>
                    <div className="font-semibold text-sm text-[#0B1F3A] mb-1">
                      {step.title}
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges & Solutions */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-[#14B8A6]" />
              <h3 className="text-lg font-display font-bold text-[#0B1F3A]">
                Technical Obstacles & Resolutions
              </h3>
            </div>
            <div className="space-y-3">
              {project.caseStudy.challenges.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <h4 className="text-sm font-bold text-[#0B1F3A] mb-1 flex items-center gap-2">
                    <span className="text-[#14B8A6]">◆</span>
                    {c.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed pl-4">
                    {c.resolution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmarks Comparison Table */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#14B8A6]" />
              <h3 className="text-lg font-display font-bold text-[#0B1F3A]">
                Verified Performance Benchmarks
              </h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F1F5F9] text-[#475569] font-mono text-xs uppercase">
                  <tr>
                    <th className="py-3 px-4">Evaluation Metric</th>
                    <th className="py-3 px-4">Baseline (Legacy)</th>
                    <th className="py-3 px-4 text-[#0F766E]">Optimized Architecture</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] font-mono">
                  {project.caseStudy.benchmarks.map((b, idx) => (
                    <tr key={idx} className="hover:bg-[#F8FAFC]">
                      <td className="py-3 px-4 font-sans font-medium text-[#0B1F3A]">{b.metric}</td>
                      <td className="py-3 px-4 text-[#94A3B8]">{b.before}</td>
                      <td className="py-3 px-4 text-[#0F766E] font-bold">{b.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Production Code Snippet */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#14B8A6]" />
                <h3 className="text-lg font-display font-bold text-[#0B1F3A]">
                  Core Implementation Artifact
                </h3>
              </div>
              <span className="text-xs font-mono text-[#64748B]">
                {project.caseStudy.codeSnippet.filename}
              </span>
            </div>
            <div className="rounded-xl overflow-hidden bg-[#0B1F3A] p-4 text-[#E2E8F0] font-mono text-xs leading-relaxed overflow-x-auto shadow-inner">
              <pre>
                <code>{project.caseStudy.codeSnippet.code}</code>
              </pre>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E2E8F0]">
            <h4 className="text-sm font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#14B8A6]" />
              Architectural Takeaways & Insights
            </h4>
            <ul className="space-y-2">
              {project.caseStudy.takeaways.map((t, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-[#44474D] flex items-start gap-2">
                  <span className="text-[#14B8A6] mt-0.5">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-[#0B1F3A] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9] rounded-md transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-[#0B1F3A] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9] rounded-md transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#0F766E]" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenSchedule();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0B1F3A] bg-[#14B8A6] hover:bg-[#2DD4BF] rounded-md shadow-soft-level1 transition-all cursor-pointer"
          >
            <span>Discuss Architecture for Your Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
