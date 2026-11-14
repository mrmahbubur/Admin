import React from 'react';
import { ArrowDownRight, Calendar, Moon, Sun } from 'lucide-react';
import { useStudio } from '../context/StudioContext';

interface HeroProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onToggleDarkMode }) => {
  const { adminProfile, websites, upstreamStatus, yearly } = useStudio();
  const onlineCount = websites.filter((site) => site.status === 'online').length;

  return (
    <section
      id="hero-section"
      className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-[#dbe3ee] dark:border-[#1c273b] tech-hero-canvas transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Technical Context Bar & Theme Switch */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#dbe3ee] dark:border-[#1c273b]">
          <div className="text-[13px] font-medium text-[#475569] dark:text-[#94a3b8] flex flex-wrap items-center gap-2">
            <span className="font-mono font-semibold text-[#2563eb] dark:text-[#38bdf8]">Verified Profile</span>
            <span aria-hidden="true">·</span>
            <span>{adminProfile.location}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">Since {yearly.establishedYear}</span>
          </div>

          <button
            type="button"
            onClick={onToggleDarkMode}
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-4 py-2 min-h-[44px] sm:min-h-[40px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white/90 dark:bg-[#0c121e]/90 tech-surface hover:border-[#94a3b8] dark:hover:border-[#334155] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] transition-colors cursor-pointer"
            aria-label="Toggle color theme"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-[#38bdf8]" /> : <Moon className="w-3.5 h-3.5 text-[#2563eb]" />}
            <span>{darkMode ? 'Light Theme' : 'Dark Theme'}</span>
          </button>
        </div>

        {/* 12-Column Technical Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h1
                className="font-display font-extrabold text-[#0f172a] dark:text-white tracking-tight leading-[1.04] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
              >
                {adminProfile.siteName}
              </h1>

              <p className="text-lg sm:text-[20px] font-semibold text-[#1e293b] dark:text-[#e2e8f0] leading-snug max-w-2xl">
                {adminProfile.roleTitle}
              </p>

              <p className="text-[15px] sm:text-[16px] text-[#475569] dark:text-[#94a3b8] leading-relaxed max-w-[60ch]">
                {adminProfile.tagline}. {adminProfile.availabilityNote}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#websites-section"
                className="whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[13.5px] font-bold transition-colors"
              >
                <span>Explore All Websites</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={adminProfile.socials.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white/90 dark:bg-[#0c121e]/90 tech-surface hover:border-[#94a3b8] dark:hover:border-[#334155] text-[#0f172a] dark:text-[#f1f5f9] text-[13.5px] font-semibold transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" />
                <span>Book Calendly</span>
              </a>
            </div>
          </div>

          {/* Right Admin Technical Dossier Card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white/95 dark:bg-[#0c121e]/95 backdrop-blur-sm tech-surface">
              <div className="flex items-center gap-4 pb-5 border-b border-[#dbe3ee] dark:border-[#1c273b]">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#2563eb]/80 dark:border-[#38bdf8]/80 bg-[#070b14] shrink-0 flex items-center justify-center text-white font-display font-bold text-lg">
                  <img
                    src={adminProfile.avatarUrl}
                    alt={adminProfile.siteName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-xl font-bold text-[#0f172a] dark:text-white leading-tight">
                    {adminProfile.siteName}
                  </div>
                  <div className="text-[12.5px] font-medium text-[#2563eb] dark:text-[#38bdf8] mt-0.5 leading-snug">
                    {adminProfile.certification}
                  </div>
                </div>
              </div>

              <div className="divide-y divide-[#dbe3ee] dark:divide-[#1c273b] text-[13px] pt-1">
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-[#64748b] dark:text-[#94a3b8]">Operating Base</span>
                  <span className="font-semibold text-[#0f172a] dark:text-[#f1f5f9] text-right">{adminProfile.location}</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-[#64748b] dark:text-[#94a3b8]">Direct Email</span>
                  <a
                    href={`mailto:${adminProfile.socials.email}`}
                    className="font-mono text-[12.5px] font-medium text-[#0f172a] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#38bdf8] truncate"
                  >
                    {adminProfile.socials.email}
                  </a>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-[#64748b] dark:text-[#94a3b8]">Direct Phone</span>
                  <a
                    href={`tel:${adminProfile.socials.phone}`}
                    className="font-mono text-[12.5px] font-medium text-[#0f172a] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#38bdf8] tabular-nums"
                  >
                    {adminProfile.socials.phone}
                  </a>
                </div>
                <div className="pt-3 flex items-center justify-between gap-4">
                  <span className="text-[#64748b] dark:text-[#94a3b8]">Availability</span>
                  <span className="font-medium text-[#0f172a] dark:text-[#f1f5f9] text-right">
                    Remote &amp; Contract
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Verified Fact Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#dbe3ee] dark:bg-[#1c273b] overflow-hidden tech-surface">
          <div className="p-4 sm:p-5 bg-white dark:bg-[#0c121e]">
            <div className="font-display text-lg sm:text-2xl font-bold text-[#0f172a] dark:text-white tabular-nums">
              Since {yearly.establishedYear}
            </div>
            <div className="text-[12px] sm:text-[12.5px] text-[#64748b] dark:text-[#94a3b8] mt-0.5">
              Remote IT &amp; Web Management
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-[#0c121e]">
            <div className="font-display text-lg sm:text-2xl font-bold text-[#0f172a] dark:text-white tabular-nums">
              360 Hours
            </div>
            <div className="text-[12px] sm:text-[12.5px] text-[#64748b] dark:text-[#94a3b8] mt-0.5">
              Certified Computer &amp; MS Office
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-[#0c121e]">
            <div className="font-display text-lg sm:text-2xl font-bold text-[#0f172a] dark:text-white tabular-nums">
              {websites.length} Live Sites
            </div>
            <div className="text-[12px] sm:text-[12.5px] text-[#64748b] dark:text-[#94a3b8] mt-0.5">
              Official Digital Properties
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-[#0c121e]">
            <div className="font-display text-lg sm:text-2xl font-bold text-[#0f172a] dark:text-white tabular-nums">
              {onlineCount > 0
                ? `${onlineCount}/${websites.length} Online`
                : upstreamStatus.sseActive || upstreamStatus.connected
                  ? 'Live'
                  : 'Active'}
            </div>
            <div className="text-[12px] sm:text-[12.5px] text-[#64748b] dark:text-[#94a3b8] mt-0.5">
              Real-Time Status
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
