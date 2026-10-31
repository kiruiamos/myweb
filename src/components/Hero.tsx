import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Zap, Activity, Database, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';

interface HeroProps {
  onOpenSchedule: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule, onOpenResume }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Subtle Gradient & Grid Accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#14B8A6]/15 via-[#0B1F3A]/5 to-transparent blur-3xl rounded-full" />
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary Conversion */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Availability Beacon Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-soft-level1 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-beacon absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#14B8A6]"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#0B1F3A]">
                {PORTFOLIO_INFO.availabilityStatus}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#CBD5E1]"></span>
              <span className="text-xs text-[#64748B] font-mono">Q2/Q3 2026</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-[-0.03em] text-[#0B1F3A] mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F3A] via-[#0F766E] to-[#14B8A6]">High-Performance</span> Web Applications & Scalable Systems.
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#44474D] leading-relaxed max-w-2xl mb-8 font-normal">
              I partner with founders and forward-thinking engineering organizations to bridge 
              rigorous distributed cloud architecture with design-grade frontend fidelity. 
              Zero fluff—just resilient, battle-tested software.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              {/* Secondary Accent CTA: Hire Amos */}
              <button
                onClick={onOpenSchedule}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0B1F3A] bg-[#14B8A6] hover:bg-[#2DD4BF] rounded-md transition-all shadow-soft-level1 hover:shadow-soft-level2 active:translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Discovery Call</span>
              </button>

              {/* Primary CTA: Explore Work */}
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-[#0B1F3A] hover:bg-[#132F54] rounded-md transition-all shadow-soft-level1 hover:shadow-soft-level2 active:translate-y-0.5"
              >
                <span>Explore Technical Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Ghost Outline: Resume */}
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-[#0B1F3A] bg-white hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-md transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#64748B]" />
                <span>View CV</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-[#E2E8F0] w-full text-xs font-mono text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                <span>TypeScript & Go specialist</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                <span>Zero-downtime deployments</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                <span>SOC2 & HIPAA conscious</span>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Architecture Terminal */}
          <div className="lg:col-span-5 w-full">
            <InteractiveTerminal onOpenContact={onOpenSchedule} />
          </div>

        </div>

        {/* Key Metrics Bar */}
        <div className="mt-14 pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PORTFOLIO_INFO.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-soft-level1 hover:shadow-soft-level2 transition-all duration-200"
            >
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#0B1F3A] tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#0F766E] mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-[#64748B]">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
