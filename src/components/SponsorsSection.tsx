import React, { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { SPONSOR_ADS_LINKS } from '../data/sponsorsData';
import type { SponsorAdLink } from '../types';

type SponsorCategoryFilter = 'All' | SponsorAdLink['category'];

const SPONSOR_CATEGORIES: SponsorCategoryFilter[] = [
  'All',
  'Cloud & Streaming',
  'Media & Apps',
  'Privacy & Tech',
  'Productivity & Gear',
  'Community',
];

export const SponsorsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SponsorCategoryFilter>('All');

  const filteredSponsors = useMemo(() => {
    if (selectedCategory === 'All') return SPONSOR_ADS_LINKS;
    return SPONSOR_ADS_LINKS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="sponsors-section"
      className="py-16 sm:py-20 bg-[#f4f7fb] dark:bg-[#070b14] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Sponsored Network &amp; Partners</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance">
              Featured Sponsors &amp; Partner Offers
            </h2>
            <p className="text-[15px] text-[#475569] dark:text-[#94a3b8] leading-relaxed">
              Verified sponsor links supporting free web platforms, media streaming infrastructure, and community aid initiatives across the M R S network.
            </p>
          </div>

          <div className="text-[12px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8] shrink-0">
            {filteredSponsors.length} of {SPONSOR_ADS_LINKS.length} Partner Slots · External Links
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-1 p-1 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] w-fit max-w-full"
          role="tablist"
          aria-label="Filter sponsored partners by category"
        >
          {SPONSOR_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            const count =
              category === 'All'
                ? SPONSOR_ADS_LINKS.length
                : SPONSOR_ADS_LINKS.filter((s) => s.category === category).length;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap shrink-0 px-3 py-2 min-h-[38px] rounded-lg text-[12.5px] font-semibold transition-colors cursor-pointer tabular-nums ${
                  active
                    ? 'bg-[#2563eb] text-white'
                    : 'text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-white'
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSponsors.map((sponsor, idx) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="group p-5 sm:p-6 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 text-[11.5px] font-mono tabular-nums">
                  <span className="text-[#2563eb] dark:text-[#38bdf8] font-semibold truncate">
                    {String(idx + 1).padStart(2, '0')} · {sponsor.category}
                  </span>
                  <span className="text-[#64748b] dark:text-[#94a3b8] uppercase tracking-wider shrink-0">
                    Sponsored
                  </span>
                </div>

                <h3 className="font-display text-[17px] font-bold text-[#0f172a] dark:text-white leading-snug group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors">
                  {sponsor.title}
                </h3>

                <p className="text-[13.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed">
                  {sponsor.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between gap-2 text-[12.5px]">
                <span className="font-mono text-[#64748b] dark:text-[#94a3b8] truncate">
                  uplcm.com/4/{sponsor.zoneId}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#2563eb] dark:text-[#38bdf8] shrink-0">
                  <span>{sponsor.ctaLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#64748b] dark:text-[#94a3b8] pt-1">
          <span>All partner placements open externally in a new tab with sponsored link attributes.</span>
          <a
            href="#contact-section"
            className="inline-flex items-center gap-1 font-medium text-[#2563eb] dark:text-[#38bdf8] hover:underline"
          >
            <span>Sponsorship Inquiries</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
