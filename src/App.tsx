/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ArchitectureSandbox } from './components/ArchitectureSandbox';
import { TechStackMatrix } from './components/TechStackMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [contactMode, setContactMode] = useState<'form' | 'schedule'>('form');

  const handleOpenSchedule = () => {
    setContactMode('schedule');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1C30] selection:bg-[#14B8A6]/20 selection:text-[#0B1F3A] flex flex-col font-sans">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        onOpenSchedule={handleOpenSchedule}
        onOpenResume={handleOpenResume}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with Typography, Availability Beacon, Key Metrics & Live Terminal */}
        <Hero
          onOpenSchedule={handleOpenSchedule}
          onOpenResume={handleOpenResume}
        />

        {/* Featured Production Work & Case Studies */}
        <ProjectShowcase onOpenSchedule={handleOpenSchedule} />

        {/* Interactive Architecture Sandbox & Latency/Cost Estimator */}
        <ArchitectureSandbox onOpenSchedule={handleOpenSchedule} />

        {/* Technical Capabilities & Production Stack Matrix */}
        <TechStackMatrix />

        {/* Career Milestones & Leadership Experience */}
        <ExperienceTimeline
          onOpenResume={handleOpenResume}
          onOpenSchedule={handleOpenSchedule}
        />

        {/* Founder & Engineering Colleague Testimonials */}
        <Testimonials />

        {/* Contact & Calendar Discovery Booking */}
        <ContactSection key={contactMode} initialMode={contactMode} />
      </main>

      {/* Modern Technical Footer */}
      <Footer />

      {/* Full Resume & Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
