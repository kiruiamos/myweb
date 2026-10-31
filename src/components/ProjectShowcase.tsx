import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Layers, Sparkles, Filter } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

interface ProjectShowcaseProps {
  onOpenSchedule: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenSchedule }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const categories = [
    'All',
    'Distributed Systems & Backend',
    'Full-Stack SaaS',
    'Modern Frontend & WebGL',
    'Cloud Architecture',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F5F9] text-[#0F766E] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered Systems Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0B1F3A] tracking-tight">
              Featured Production Architectures.
            </h2>
            <p className="mt-2 text-base text-[#44474D] max-w-2xl">
              Production case studies spanning high-throughput distributed backends, 
              hardware-accelerated WebGL telemetry, and enterprise design systems.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="w-2 h-2 rounded-full bg-[#14B8A6] animate-ping" />
            <span className="text-xs font-mono text-[#0B1F3A]">
              <strong>6</strong> Case Studies Documented • <strong>100%</strong> Production Deployed
            </span>
          </div>
        </div>

        {/* Categorical Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border border-[#14B8A6] bg-[#14B8A6]/10 text-[#0F766E] font-semibold shadow-soft-level1 ring-2 ring-[#14B8A6]/20'
                    : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0B1F3A] border border-transparent'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-soft-level1 hover:shadow-soft-level2 hover:border-[#14B8A6] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Embedded Preview Image Container */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-[#0B1F3A]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0B1F3A]/90 text-white backdrop-blur-md border border-white/10 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Top Right Featured Star */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#14B8A6] text-[#0B1F3A] flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        FEATURED
                      </span>
                    </div>
                  )}

                  {/* Impact Summary Pill Over Image Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90">
                    <div className="flex gap-2">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <span key={idx} className="bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10 text-[11px]">
                          <strong className="text-[#14B8A6]">{m.value}</strong> {m.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-display font-bold text-[#0B1F3A] group-hover:text-[#0F766E] transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] line-clamp-2 mb-4 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Technology Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-[#F1F5F9] text-[#64748B]">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Problem & Solution Extract */}
                  <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0] text-xs text-[#44474D] leading-relaxed mb-4">
                    <p className="line-clamp-2">
                      <strong className="text-[#0B1F3A]">Challenge:</strong> {project.problem}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-transparent gap-2">
                <button
                  onClick={() => setActiveCaseStudy(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132F54] rounded-md transition-colors cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 text-[#64748B] hover:text-[#0B1F3A] hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-md transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 text-[#0F766E] hover:text-[#0B1F3A] hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-md transition-colors"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 p-8 rounded-2xl bg-[#0B1F3A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-level2">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#14B8A6] font-semibold mb-1">
              Have a high-scale challenge?
            </div>
            <h3 className="text-2xl font-display font-bold">
              Looking for an architect to untangle your system bottlenecks?
            </h3>
            <p className="text-sm text-[#94A3B8] mt-1 max-w-xl">
              I consult on system architecture reviews, low-latency API design, and full-stack rewrites.
            </p>
          </div>
          <button
            onClick={onOpenSchedule}
            className="shrink-0 px-6 py-3 text-sm font-semibold text-[#0B1F3A] bg-[#14B8A6] hover:bg-[#2DD4BF] rounded-md transition-all shadow-sm cursor-pointer"
          >
            Schedule Architecture Review
          </button>
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onOpenSchedule={onOpenSchedule}
      />
    </section>
  );
};
