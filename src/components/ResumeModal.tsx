import React from 'react';
import { X, Printer, Download, Mail, Globe, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { PORTFOLIO_INFO, WORK_EXPERIENCE, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B1F3A]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-soft-level3 border border-[#E2E8F0] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Non-printable) */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between sticky top-0 z-20 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-[#0B1F3A] uppercase tracking-wider">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-mono">
              Ready to Export
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0B1F3A] bg-white border border-[#CBD5E1] hover:bg-[#F1F5F9] rounded-md transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0B1F3A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-white print:p-0 print:m-0 text-[#0B1C30]">
          
          {/* Header */}
          <div className="border-b border-[#E2E8F0] pb-6">
            <h1 className="text-3xl font-display font-extrabold text-[#0B1F3A] tracking-tight">
              {PORTFOLIO_INFO.name}
            </h1>
            <p className="text-base text-[#0F766E] font-medium mt-1">
              {PORTFOLIO_INFO.title}
            </p>
            
            <div className="flex flex-wrap items-center gap-y-1 gap-x-5 text-xs font-mono text-[#64748B] mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {PORTFOLIO_INFO.location}
              </span>
              <span className="flex items-center gap-1 text-[#0B1F3A]">
                <Mail className="w-3.5 h-3.5 text-[#14B8A6]" />
                {PORTFOLIO_INFO.email}
              </span>
              <a href={PORTFOLIO_INFO.github} target="_blank" rel="noreferrer" className="underline hover:text-[#0B1F3A]">
                github.com/akipkirui
              </a>
              <a href={PORTFOLIO_INFO.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-[#0B1F3A]">
                linkedin.com/in/akipkirui
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 pb-1 border-b border-[#E2E8F0]">
              Executive Summary
            </h2>
            <p className="text-sm text-[#44474D] leading-relaxed">
              Senior Full-Stack Digital Engineer & Systems Architect with over 8 years of hands-on production experience designing, building, and operating high-throughput cloud architectures, microservices fabrics, and design-grade interactive web applications. Proven track record driving 99.98% uptime SLAs, optimizing P99 latencies under 100ms, and leading high-velocity engineering pods.
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-3 pb-1 border-b border-[#E2E8F0]">
              Core Competencies & Technology Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#0B1F3A] block mb-1">Languages:</strong>
                <span className="text-[#44474D]">TypeScript, Go (Golang), JavaScript (ESNext), Python, Rust, SQL</span>
              </div>
              <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#0B1F3A] block mb-1">Frontend & Interfaces:</strong>
                <span className="text-[#44474D]">React 19, Next.js, Tailwind CSS v4, Motion, WebGL / Three.js, WCAG AAA A11y</span>
              </div>
              <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#0B1F3A] block mb-1">Backend & Distributed:</strong>
                <span className="text-[#44474D]">PostgreSQL, Redis Streams, Apache Kafka, gRPC, Node.js, GraphQL, WebSockets</span>
              </div>
              <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#0B1F3A] block mb-1">Cloud & Infrastructure:</strong>
                <span className="text-[#44474D]">Docker, Kubernetes, AWS (ECS, Lambda, S3, RDS), Terraform, CI/CD, OpenTelemetry</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-4 pb-1 border-b border-[#E2E8F0]">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="font-display font-bold text-base text-[#0B1F3A]">
                      {exp.role} — <span className="text-[#0F766E]">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-[#64748B]">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-[#44474D] italic">
                    {exp.description}
                  </p>
                  <ul className="space-y-1 mt-2">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-[#334155] flex items-start gap-2">
                        <span className="text-[#14B8A6] mt-0.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-3 pb-1 border-b border-[#E2E8F0]">
              Education & Certifications
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#0B1F3A]">Bachelor of Science in Computer Science</span>
                <span className="font-mono text-[#64748B]">First Class Honours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#0B1F3A]">AWS Certified Solutions Architect – Professional</span>
                <span className="font-mono text-[#0F766E]">Amazon Web Services</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#0B1F3A]">Certified Kubernetes Administrator (CKA)</span>
                <span className="font-mono text-[#0F766E]">Cloud Native Computing Foundation</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
