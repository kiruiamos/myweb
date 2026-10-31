import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F5F9] text-[#0F766E] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Colleague & Founder Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0B1F3A] tracking-tight">
            Trusted by Leaders & Tech Founders.
          </h2>
          <p className="mt-2 text-base text-[#44474D]">
            Feedback from CTOs, product directors, and founders who have partnered with Amos on mission-critical initiatives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] p-7 rounded-2xl border border-[#E2E8F0] shadow-soft-level1 hover:shadow-soft-level2 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-5 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-[#E2E8F0]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#CBD5E1]"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display font-bold text-sm text-[#0B1F3A]">
                    {t.author}
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    {t.role}, <span className="text-[#0F766E] font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
