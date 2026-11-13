import React from 'react';
import { Calendar, Moon, Sun } from 'lucide-react';
import { useStudio } from '../context/StudioContext';
import { WebsiteSlideshow } from './WebsiteSlideshow';

interface HeroProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onToggleDarkMode }) => {
  const { adminProfile, websites, upstreamStatus, yearly } = useStudio();

  return (
    <section
      id="hero-section"
      className="pt-8 pb-14 sm:pt-12 sm:pb-16 border-b border-[#e4e4e7] dark:border-[#27272a] bg-[#fafafa] dark:bg-[#050505] transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Subtle Editorial Context Bar & Theme Switch */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#e4e4e7] dark:border-[#27272a]">
          <div className="text-[13px] font-medium text-[#52525b] dark:text-[#a1a1aa] flex flex-wrap items-center gap-2">
            <span className="font-semibold text-[#d97706] dark:text-[#f59e0b]">Verified Profile</span>
            <span aria-hidden="true">·</span>
            <span>{adminProfile.location}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">Since {yearly.establishedYear}</span>
          </div>

          <button
            type="button"
            onClick={onToggleDarkMode}
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-4 py-2 min-h-[44px] sm:min-h-[40px] rounded-lg border border-[#e4e4e7] dark:border-[#27272a] bg-white dark:bg-[#0f0f11] hover:border-[#a1a1aa] dark:hover:border-[#52525b] text-[12.5px] font-semibold text-[#09090b] dark:text-[#f4f4f5] transition-colors cursor-pointer"
            aria-label="Toggle color theme"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            <span>{darkMode ? 'Light Theme' : 'Dark Theme'}</span>
          </button>
        </div>

        {/* 12-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h1
                className="font-serif font-extrabold text-[#09090b] dark:text-white tracking-tight leading-[1.04] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
              >
                {adminProfile.siteName}
              </h1>

              <p className="text-lg sm:text-[20px] font-semibold text-[#18181b] dark:text-[#e4e4e7] leading-snug max-w-2xl">
                {adminProfile.roleTitle}
              </p>

              <p className="text-[15px] sm:text-[16px] text-[#52525b] dark:text-[#a1a1aa] leading-relaxed max-w-[60ch]">
                {adminProfile.tagline}. {adminProfile.availabilityNote}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#websites-section"
                className="whitespace-nowrap shrink-0 inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] rounded-lg bg-[#d97706] hover:bg-[#b45309] dark:bg-[#f59e0b] dark:hover:bg-[#d97706] text-white dark:text-[#050505] text-[13.5px] font-bold transition-colors"
              >
                Explore All Websites
              </a>

              <a
                href={adminProfile.socials.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg border border-[#e4e4e7] dark:border-[#27272a] bg-white dark:bg-[#0f0f11] hover:border-[#a1a1aa] dark:hover:border-[#52525b] text-[#09090b] dark:text-[#f4f4f5] text-[13.5px] font-semibold transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#d97706] dark:text-[#f59e0b]" />
                <span>Book Calendly</span>
              </a>
            </div>
          </div>

          {/* Right Admin Identity Dossier Card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[#e4e4e7] dark:border-[#27272a] bg-white dark:bg-[#0f0f11]">
              <div className="flex items-center gap-4 pb-5 border-b border-[#e4e4e7] dark:border-[#27272a]">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-[#d97706]/80 bg-[#09090b] shrink-0 flex items-center justify-center text-white font-serif font-bold text-lg">
                  <img
                    src={adminProfile.avatarUrl}
                    alt={adminProfile.siteName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-serif text-xl font-bold text-[#09090b] dark:text-white leading-tight">
                    {adminProfile.siteName}
                  </div>
                  <div className="text-[12.5px] font-medium text-[#d97706] dark:text-[#f59e0b] mt-0.5 leading-snug">
                    {adminProfile.certification}
                  </div>
                </div>
              </div>

              <div className="divide-y divide-[#e4e4e7] dark:divide-[#27272a] text-[13px] pt-1">
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-[#71717a] dark:text-[#a1a1aa]">Operating Base</span>
                  <span className="font-semibold text-[#09090b] dark:text-[#f4f4f5] text-right">{adminProfile.location}</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-[#71717a] dark:text-[#a1a1aa]">Direct Email</span>
                  <a
                    href={`mailto:${adminProfile.socials.email}`}
                    className="font-mono text-[12.5px] font-medium text-[#09090b] dark:text-[#f4f4f5] hover:text-[#d97706] dark:hover:text-[#f59e0b] truncate"
                  >
                    {adminProfile.socials.email}
                  </a>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-[#71717a] dark:text-[#a1a1aa]">Direct Phone</span>
                  <a
                    href={`tel:${adminProfile.socials.phone}`}
                    className="font-mono text-[12.5px] font-medium text-[#09090b] dark:text-[#f4f4f5] hover:text-[#d97706] dark:hover:text-[#f59e0b] tabular-nums"
                  >
                    {adminProfile.socials.phone}
                  </a>
                </div>
                <div className="pt-3 flex items-center justify-between gap-4">
                  <span className="text-[#71717a] dark:text-[#a1a1aa]">Availability</span>
                  <span className="font-medium text-[#09090b] dark:text-[#f4f4f5] text-right">
                    Remote &amp; Contract
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Verified Fact Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-[#e4e4e7] dark:border-[#27272a] bg-[#e4e4e7] dark:bg-[#27272a] overflow-hidden">
          <div className="p-4 sm:p-5 bg-white dark:bg-[#0f0f11]">
            <div className="font-serif text-lg sm:text-2xl font-bold text-[#09090b] dark:text-white tabular-nums">
              Since {yearly.establishedYear}
            </div>
            <div className="text-[12px] sm:text-[12.5px] text-[#71717a] dark:text-[#a1a1aa] mt-0.5">
              Remote IT &amp; Web Management
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-[#0f0f11]">
            <div className="font-serif text-lg sm:text-2xl font-bold text-[#09090b] dark:text-white tabular-nums">
              360 Hours
            </div>
            <div className="text-[12px] sm:text-[12.5px] text-[#71717a] dark:text-[#a1a1aa] mt-0.5">
              Certified Computer &amp; MS Office
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-[#0f0f11]">
            <div className="font-serif text-lg sm:text-2xl font-bold text-[#09090b] dark:text-white tabular-nums">
              {websites.length} Live Sites
            </div>
            <div className="text-[12px] sm:text-[12.5px] text-[#71717a] dark:text-[#a1a1aa] mt-0.5">
              Official Digital Properties
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-[#0f0f11]">
            <div className="font-serif text-lg sm:text-2xl font-bold text-[#09090b] dark:text-white">
              {upstreamStatus.sseActive || upstreamStatus.connected ? 'Live' : 'Active'}
            </div>
            <div className="text-[12px] sm:text-[12.5px] text-[#71717a] dark:text-[#a1a1aa] mt-0.5">
              Real-Time Status
            </div>
          </div>
        </div>

        {/* Centerpiece Websites Slideshow */}
        <WebsiteSlideshow />
      </div>
    </section>
  );
};
