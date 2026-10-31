import React, { useState } from 'react';
import { Mail, Calendar, Send, Copy, Check, Clock, Globe, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialMode?: 'form' | 'schedule';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMode = 'form' }) => {
  const [mode, setMode] = useState<'form' | 'schedule'>(initialMode);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Full-Stack Web Application',
    budget: '$10k - $25k',
    timeline: 'Within 1-2 months',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scheduling State
  const [selectedDate, setSelectedDate] = useState<string>('2026-11-04');
  const [selectedTime, setSelectedTime] = useState<string>('14:00 (2:00 PM)');
  const [timezone, setTimezone] = useState<string>('EAT (UTC+3)');
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleEmail, setScheduleEmail] = useState('');
  const [scheduledSuccess, setScheduledSuccess] = useState(false);

  const availableDates = [
    { date: '2026-11-04', label: 'Wed, Nov 4' },
    { date: '2026-11-05', label: 'Thu, Nov 5' },
    { date: '2026-11-06', label: 'Fri, Nov 6' },
    { date: '2026-11-09', label: 'Mon, Nov 9' },
    { date: '2026-11-10', label: 'Tue, Nov 10' },
  ];

  const availableTimes = [
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scheduleName || !scheduleEmail) return;
    setScheduledSuccess(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F5F9] text-[#0F766E] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0B1F3A] tracking-tight">
            Let's Engineer Something Exceptional.
          </h2>
          <p className="mt-2 text-base text-[#44474D]">
            Have an ambitious system to architect, a frontend to modernize, or an upcoming project? 
            Send a direct brief or reserve a 30-minute discovery call.
          </p>
        </div>

        {/* Dual Mode Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-[#F1F5F9] rounded-xl border border-[#E2E8F0]">
            <button
              onClick={() => setMode('form')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                mode === 'form'
                  ? 'bg-white text-[#0B1F3A] shadow-soft-level1 border border-[#E2E8F0]'
                  : 'text-[#64748B] hover:text-[#0B1F3A]'
              }`}
            >
              <Mail className="w-4 h-4 text-[#14B8A6]" />
              <span>Project Inquiry Brief</span>
            </button>
            <button
              onClick={() => setMode('schedule')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                mode === 'schedule'
                  ? 'bg-white text-[#0B1F3A] shadow-soft-level1 border border-[#E2E8F0]'
                  : 'text-[#64748B] hover:text-[#0B1F3A]'
              }`}
            >
              <Calendar className="w-4 h-4 text-[#14B8A6]" />
              <span>Schedule 30-Min Discovery Call</span>
            </button>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-soft-level2 overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info & Availability (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B1F3A] p-7 sm:p-8 text-white flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#14B8A6] text-xs font-mono font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse"></span>
                <span>Direct Contact Channel</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold mb-3">
                Amos Kipkirui
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Consultant & Systems Architect. Available for fractional advisory, architectural audits, and full-stack execution.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-[#071527] border border-[#1E293B] mb-6">
                <div className="text-xs text-[#94A3B8] font-mono mb-1">Direct Email Address</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-mono text-[#14B8A6] select-all font-semibold">
                    {PORTFOLIO_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#1E293B] transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#14B8A6]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-[#14B8A6] font-mono mt-1">Copied to clipboard!</p>
                )}
              </div>

              {/* Working Hours & Timezone */}
              <div className="space-y-3 text-xs text-[#CBD5E1]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#14B8A6]" />
                  <span>Typically responds within &lt; 12 business hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#14B8A6]" />
                  <span>Timezone: UTC+3 (East Africa Time / Flexible overlap)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
                  <span>Mutual NDA upon request</span>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-6 mt-8 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#94A3B8] font-mono">
              <a
                href={PORTFOLIO_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub →
              </a>
              <a
                href={PORTFOLIO_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn →
              </a>
              <span className="text-emerald-400">● Open for Q2/Q3</span>
            </div>
          </div>

          {/* Right Column: Interactive Form or Calendar Scheduler (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white">
            
            {mode === 'form' ? (
              /* MODE 1: PROJECT INQUIRY FORM */
              formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#14B8A6]/20 text-[#0F766E] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#14B8A6]" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-[#0B1F3A]">
                    Inquiry Transmitted Successfully
                  </h4>
                  <p className="text-sm text-[#44474D] max-w-sm">
                    Thank you, <strong className="text-[#0B1F3A]">{formData.name}</strong>. Amos has received your brief and will review your technical requirements within 12 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Full-Stack Web Application',
                        budget: '$10k - $25k',
                        timeline: 'Within 1-2 months',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-[#0B1F3A] bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-md transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-3.5 py-2.5 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#14B8A6] focus:ring-3 focus:ring-[#14B8A6]/20 transition-all placeholder-[#94A3B8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-3.5 py-2.5 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#14B8A6] focus:ring-3 focus:ring-[#14B8A6]/20 transition-all placeholder-[#94A3B8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Inc."
                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-3.5 py-2.5 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#14B8A6] focus:ring-3 focus:ring-[#14B8A6]/20 transition-all placeholder-[#94A3B8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                        Project Scope / Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-3.5 py-2.5 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#14B8A6] focus:ring-3 focus:ring-[#14B8A6]/20 transition-all"
                      >
                        <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                        <option value="Distributed Backend / Microservices">Distributed Backend / Microservices</option>
                        <option value="System Architecture Audit & Tuning">System Architecture Audit & Tuning</option>
                        <option value="Design System & Frontend Overhaul">Design System & Frontend Overhaul</option>
                        <option value="Ongoing Technical Advisory">Ongoing Technical Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                        Estimated Budget (USD)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-3.5 py-2.5 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#14B8A6] focus:ring-3 focus:ring-[#14B8A6]/20 transition-all"
                      >
                        <option value="Under $10k">Under $10k</option>
                        <option value="$10k - $25k">$10k - $25k</option>
                        <option value="$25k - $50k">$25k - $50k</option>
                        <option value="$50k+">$50k+</option>
                        <option value="Retainer / Hourly Advisory">Retainer / Hourly Advisory</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                        Desired Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-3.5 py-2.5 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#14B8A6] focus:ring-3 focus:ring-[#14B8A6]/20 transition-all"
                      >
                        <option value="Immediately (Next 2 weeks)">Immediately (Next 2 weeks)</option>
                        <option value="Within 1-2 months">Within 1-2 months</option>
                        <option value="Q3/Q4 Planning">Q3/Q4 Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-semibold text-[#0B1F3A]">
                        Project Overview & Architecture Goals *
                      </label>
                      <span className="text-[11px] font-mono text-[#94A3B8]">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details on current architecture, key challenges, target tech stack, or deadlines..."
                      className="w-full bg-white border border-[#CBD5E1] rounded-md p-3 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#14B8A6] focus:ring-3 focus:ring-[#14B8A6]/20 transition-all placeholder-[#94A3B8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132F54] rounded-md transition-all shadow-soft-level1 hover:shadow-soft-level2 active:translate-y-0.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#14B8A6]" />
                    <span>Submit Project Brief</span>
                  </button>
                </form>
              )
            ) : (
              /* MODE 2: INTERACTIVE CALENDLY-STYLE SCHEDULER */
              scheduledSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#14B8A6]/20 text-[#0F766E] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#14B8A6]" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-[#0B1F3A]">
                    Discovery Call Confirmed!
                  </h4>
                  <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] text-xs font-mono text-left w-full max-w-sm space-y-1.5">
                    <p><strong className="text-[#0B1F3A]">Attendee:</strong> {scheduleName} ({scheduleEmail})</p>
                    <p><strong className="text-[#0B1F3A]">Date:</strong> {selectedDate}</p>
                    <p><strong className="text-[#0B1F3A]">Time:</strong> {selectedTime} ({timezone})</p>
                    <p><strong className="text-[#0B1F3A]">Format:</strong> Google Meet / Zoom link dispatched</p>
                  </div>
                  <p className="text-xs text-[#64748B]">
                    A calendar invitation with video room credentials has been queued to your email address.
                  </p>
                  <button
                    onClick={() => setScheduledSuccess(false)}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-[#0B1F3A] bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-md transition-colors cursor-pointer"
                  >
                    Pick Different Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleScheduleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <div>
                      <div className="font-display font-bold text-base text-[#0B1F3A]">
                        30-Minute Architecture Discovery
                      </div>
                      <div className="text-xs text-[#64748B]">
                        Video consultation with Amos Kipkirui
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#14B8A6]/10 text-[#0F766E] font-medium">
                      No commitment
                    </span>
                  </div>

                  {/* Pick Date */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F3A] mb-2">
                      1. Select Available Date
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {availableDates.map((item) => (
                        <button
                          key={item.date}
                          type="button"
                          onClick={() => setSelectedDate(item.date)}
                          className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                            selectedDate === item.date
                              ? 'border-[#14B8A6] bg-[#14B8A6]/10 text-[#0B1F3A] font-bold ring-2 ring-[#14B8A6]/20'
                              : 'border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#475569]'
                          }`}
                        >
                          <div className="text-xs font-semibold">{item.label.split(',')[0]}</div>
                          <div className="text-[11px] font-mono text-[#64748B]">{item.label.split(',')[1]}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pick Time */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-semibold text-[#0B1F3A]">
                        2. Select Time Slot
                      </label>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="text-xs font-mono bg-transparent border-b border-[#CBD5E1] text-[#64748B] focus:outline-none focus:border-[#14B8A6]"
                      >
                        <option value="EAT (UTC+3)">EAT (UTC+3 - Local)</option>
                        <option value="UTC">UTC (London GMT)</option>
                        <option value="EST (UTC-5)">EST (New York)</option>
                        <option value="PST (UTC-8)">PST (San Francisco)</option>
                        <option value="CET (UTC+1)">CET (Berlin / Paris)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-1 text-xs font-mono rounded-lg border text-center transition-all cursor-pointer ${
                            selectedTime === time
                              ? 'border-[#14B8A6] bg-[#14B8A6] text-[#0B1F3A] font-bold shadow-xs'
                              : 'border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#334155]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info for calendar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={scheduleName}
                        onChange={(e) => setScheduleName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-3 py-2 text-xs text-[#0B1F3A] focus:outline-none focus:border-[#14B8A6]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                        Your Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={scheduleEmail}
                        onChange={(e) => setScheduleEmail(e.target.value)}
                        placeholder="sarah@startup.io"
                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-3 py-2 text-xs text-[#0B1F3A] focus:outline-none focus:border-[#14B8A6]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B1F3A] bg-[#14B8A6] hover:bg-[#2DD4BF] rounded-md transition-all shadow-soft-level1 hover:shadow-soft-level2 active:translate-y-0.5 cursor-pointer mt-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm 30-Min Call Booking</span>
                  </button>
                </form>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
