import React, { useState } from 'react';
import { Cpu, Terminal, CheckCircle2, Sparkles, Layers, Code, Database, Cloud } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechStackMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [Code, Layers, Database, Cloud];

  return (
    <section id="stack" className="py-20 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F5F9] text-[#0F766E] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities & Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0B1F3A] tracking-tight">
            Production Stack & Systems Matrix.
          </h2>
          <p className="mt-2 text-base text-[#44474D]">
            Rigorous type safety, deterministic backends, and low-latency infrastructure. 
            Tools selected for production durability rather than transient trends.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = icons[idx] || Code;
            const isActive = activeTab === idx;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#14B8A6]/10 border border-[#14B8A6] text-[#0F766E] font-semibold ring-2 ring-[#14B8A6]/20 shadow-soft-level1'
                    : 'bg-[#F1F5F9] border border-transparent text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0B1F3A]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#14B8A6]' : 'text-[#64748B]'}`} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm text-[#64748B] italic">
            "{SKILL_CATEGORIES[activeTab].description}"
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-5 rounded-xl border bg-white shadow-soft-level1 hover:shadow-soft-level2 transition-all duration-200 relative ${
                skill.featured ? 'border-[#14B8A6]/40 hover:border-[#14B8A6]' : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              {skill.featured && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#14B8A6]/15 text-[#0F766E] flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    CORE
                  </span>
                </div>
              )}

              {/* Skill Name & Years */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-base text-[#0B1F3A]">
                  {skill.name}
                </h3>
                {!skill.featured && (
                  <span className="text-xs font-mono text-[#64748B]">
                    {skill.years} yrs exp
                  </span>
                )}
              </div>

              {/* Progress Bar & Level */}
              <div className="mb-3">
                <div className="flex justify-between items-center text-xs font-mono text-[#64748B] mb-1">
                  <span>Proficiency</span>
                  <span className="font-bold text-[#0B1F3A]">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0F766E] to-[#14B8A6] rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {/* Specific Technical Highlight */}
              <p className="text-xs text-[#44474D] leading-relaxed">
                {skill.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-soft-level1 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-sm shrink-0">
              01
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#0B1F3A] mb-1">
                Type Safety from DB to Client
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Strict type contracts across GraphQL, OpenAPI, or gRPC eliminate runtime interface drift between services.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-sm shrink-0">
              02
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#0B1F3A] mb-1">
                Zero Jargon, Measurable Impact
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Every architectural choice is anchored in business velocity, cloud spend efficiency, and customer experience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-sm shrink-0">
              03
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#0B1F3A] mb-1">
                Observability on Day One
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Production systems are instrumented with OpenTelemetry traces, structured JSON logs, and synthetic health checks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
