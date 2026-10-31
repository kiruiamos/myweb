import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F3A] text-white border-t border-[#1E293B] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1E293B]">
          
          {/* Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#14B8A6] flex items-center justify-center text-[#0B1F3A] font-bold text-base shadow-sm">
                AK
              </div>
              <span className="font-display font-bold text-lg text-white">
                {PORTFOLIO_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Independent Digital Engineer & Systems Architect. Bridging software reliability, 
              distributed microservices, and design-grade web craft.
            </p>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071527] border border-[#1E293B] text-xs font-mono text-[#14B8A6]">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse"></span>
              <span>Available for select Q2/Q3 partnerships</span>
            </div>
          </div>

          {/* Quick Nav (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <div className="font-mono uppercase tracking-wider text-[#94A3B8] text-xs font-bold mb-3">
                Navigation
              </div>
              <ul className="space-y-2 text-[#CBD5E1]">
                <li><a href="#work" className="hover:text-[#14B8A6] transition-colors">Featured Work</a></li>
                <li><a href="#architecture" className="hover:text-[#14B8A6] transition-colors">Architecture Sandbox</a></li>
                <li><a href="#stack" className="hover:text-[#14B8A6] transition-colors">Tech Matrix</a></li>
                <li><a href="#experience" className="hover:text-[#14B8A6] transition-colors">Experience</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono uppercase tracking-wider text-[#94A3B8] text-xs font-bold mb-3">
                Direct Channels
              </div>
              <ul className="space-y-2 text-[#CBD5E1]">
                <li>
                  <a href={`mailto:${PORTFOLIO_INFO.email}`} className="hover:text-[#14B8A6] transition-colors">
                    Email Amos
                  </a>
                </li>
                <li>
                  <a href={PORTFOLIO_INFO.github} target="_blank" rel="noreferrer" className="hover:text-[#14B8A6] transition-colors">
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a href={PORTFOLIO_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#14B8A6] transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#14B8A6] transition-colors">
                    Schedule 30m Call
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* System Status & Commit Info (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono uppercase tracking-wider text-[#94A3B8] text-xs font-bold mb-2">
              System Telemetry
            </div>

            <div className="bg-[#071527] p-3.5 rounded-xl border border-[#1E293B] text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping"></span>
                  ALL SYSTEMS NOMINAL
                </span>
                <span>99.98%</span>
              </div>
              <div className="text-[#94A3B8] flex justify-between">
                <span>Commit:</span>
                <span className="text-white">7f3a90b (main)</span>
              </div>
              <div className="text-[#94A3B8] flex justify-between">
                <span>Location:</span>
                <span className="text-[#14B8A6]">Nairobi, KE (EAT)</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-[#94A3B8] hover:text-white bg-[#071527] border border-[#1E293B] rounded-lg transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with React 19 • Tailwind CSS v4 • TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
