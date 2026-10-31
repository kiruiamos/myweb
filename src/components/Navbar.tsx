import React, { useState, useEffect } from 'react';
import { Terminal, Calendar, Menu, X, ArrowUpRight, FileText, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenSchedule: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Featured Work', href: '#work' },
    { name: 'Architecture & Sandbox', href: '#architecture' },
    { name: 'Technical Stack', href: '#stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-soft-level1 py-3'
          : 'bg-[#F8FAFC]/75 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Moniker */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-[#132F54] transition-colors">
              <span className="text-[#14B8A6]">A</span>K
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-[#0B1F3A] flex items-center gap-1.5">
                {PORTFOLIO_INFO.name}
                <span className="text-xs px-1.5 py-0.5 rounded bg-[#0B1F3A]/5 text-[#0F766E] font-mono font-medium">
                  v2.4
                </span>
              </span>
              <span className="text-xs text-[#64748B] font-mono">systems & full-stack architect</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-[#44474D] hover:text-[#0B1F3A] hover:bg-[#F1F5F9] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Availability Beacon & Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Availability Beacon */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-soft-level1 text-xs font-medium text-[#0F766E]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#14B8A6]"></span>
              </span>
              <span>{PORTFOLIO_INFO.availabilityStatus}</span>
            </div>

            {/* Resume button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#0B1F3A] hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-md transition-all cursor-pointer"
              title="View & Download Resume / CV"
            >
              <FileText className="w-4 h-4 text-[#64748B]" />
              <span>Resume</span>
            </button>

            {/* Schedule Call CTA */}
            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#0B1F3A] bg-[#14B8A6] hover:bg-[#2DD4BF] rounded-md transition-all shadow-soft-level1 hover:shadow-soft-level2 active:translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Call</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSchedule}
              className="px-3 py-1.5 text-xs font-semibold text-[#0B1F3A] bg-[#14B8A6] rounded-md"
            >
              Hire Amos
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#44474D] hover:text-[#0B1F3A] hover:bg-[#F1F5F9] rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-4 pt-3 pb-6 shadow-soft-level3 mt-2">
          {/* Availability Beacon in Mobile */}
          <div className="flex items-center gap-2 px-3 py-2 mb-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0F766E]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#14B8A6]"></span>
            </span>
            <span>{PORTFOLIO_INFO.availabilityStatus}</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-[#0B1F3A] hover:bg-[#F1F5F9] rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#0B1F3A] border border-[#E2E8F0] rounded-md hover:bg-[#F1F5F9]"
            >
              <FileText className="w-4 h-4 text-[#64748B]" />
              <span>View & Print CV</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#0B1F3A] bg-[#14B8A6] rounded-md shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule 30-Min Discovery Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
