import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, FileText, ArrowUpRight } from 'lucide-react';
import { WORK_EXPERIENCE, PORTFOLIO_INFO } from '../data/portfolioData';

interface ExperienceTimelineProps {
  onOpenResume: () => void;
  onOpenSchedule: () => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  onOpenResume,
  onOpenSchedule,
}) => {
  return (
    <section id="experience" className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#0F766E] text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-soft-level1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0B1F3A] tracking-tight">
              Engineering Leadership & Experience.
            </h2>
            <p className="mt-2 text-base text-[#44474D] max-w-2xl">
              8+ years leading cross-functional engineering teams, authoring RFCs, and shipping mission-critical systems.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white border border-[#E2E8F0] text-[#0B1F3A] text-sm font-medium hover:bg-[#F1F5F9] shadow-soft-level1 transition-all cursor-pointer self-start md:self-auto"
          >
            <FileText className="w-4 h-4 text-[#64748B]" />
            <span>View Full Curriculum Vitae</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          </button>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-[#CBD5E1] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[#0B1F3A] group-hover:border-[#14B8A6] transition-colors" />

              {/* Experience Card */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-soft-level1 hover:shadow-soft-level2 transition-all duration-200">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#0F766E] px-2.5 py-0.5 rounded-full bg-[#14B8A6]/10">
                      {exp.period}
                    </span>
                    <span className="text-xs text-[#64748B] font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span className="text-xs text-[#94A3B8] font-mono">• {exp.type}</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#64748B]">
                    {exp.company}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-display font-bold text-[#0B1F3A] mb-2">
                  {exp.role} <span className="text-[#64748B] font-normal text-base">at {exp.company}</span>
                </h3>

                {/* Role Summary */}
                <p className="text-sm text-[#44474D] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-5">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F1F5F9]">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
