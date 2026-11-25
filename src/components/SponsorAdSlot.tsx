import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SPONSOR_ADS_LINKS } from '../data/sponsorsData';

interface SponsorAdSlotProps {
  ids: string[];
  heading?: string;
  compact?: boolean;
}

export const SponsorAdSlot: React.FC<SponsorAdSlotProps> = ({
  ids,
  heading = 'Sponsored Partners',
  compact = false,
}) => {
  const slots = SPONSOR_ADS_LINKS.filter((item) => ids.includes(item.id));
  if (slots.length === 0) return null;

  return (
    <aside
      aria-label={heading}
      className="rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb]/80 dark:bg-[#0c121e] tech-surface overflow-hidden"
    >
      <div className="px-4 sm:px-5 py-2.5 border-b border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between gap-2">
        <span className="text-[11.5px] font-mono font-semibold text-[#2563eb] dark:text-[#38bdf8]">
          {heading}
        </span>
        <a
          href="#sponsors-section"
          className="text-[11px] font-mono text-[#64748b] dark:text-[#94a3b8] hover:text-[#2563eb] dark:hover:text-[#38bdf8] transition-colors"
        >
          Sponsored · View All
        </a>
      </div>

      <div
        className={`grid grid-cols-1 ${
          slots.length >= 2 ? 'md:grid-cols-2 md:divide-x' : ''
        } divide-y md:divide-y-0 divide-[#dbe3ee] dark:divide-[#1c273b]`}
      >
        {slots.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className={`group flex items-center justify-between gap-4 ${
              compact ? 'p-4' : 'p-4 sm:p-5'
            } bg-white/70 dark:bg-[#0c121e] hover:bg-white dark:hover:bg-[#11192a] transition-colors`}
          >
            <div className="min-w-0 space-y-1">
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#64748b] dark:text-[#94a3b8]">
                <span className="text-[#2563eb] dark:text-[#38bdf8] font-semibold">
                  {sponsor.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>Ad</span>
              </div>
              <div className="font-semibold text-[14px] text-[#0f172a] dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors truncate">
                {sponsor.title}
              </div>
              {!compact && (
                <p className="text-[12.5px] text-[#475569] dark:text-[#94a3b8] line-clamp-1">
                  {sponsor.description}
                </p>
              )}
            </div>

            <span className="whitespace-nowrap shrink-0 inline-flex items-center gap-1 px-3 py-2 min-h-[38px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] group-hover:border-[#2563eb] dark:group-hover:border-[#38bdf8] text-[12px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors">
              <span>{sponsor.ctaLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
};
