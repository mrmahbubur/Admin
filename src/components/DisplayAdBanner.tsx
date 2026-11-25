import React, { useState } from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import { getDisplayBannerAd } from '../data/displayAdsData';

interface DisplayAdBannerProps {
  adId: string;
  variant: 'feature-split' | 'leaderboard' | 'sidebar-rectangle' | 'gallery-card';
}

export const DisplayAdBanner: React.FC<DisplayAdBannerProps> = ({ adId, variant }) => {
  const ad = getDisplayBannerAd(adId);
  const [imgFailed, setImgFailed] = useState(false);

  if (!ad) return null;

  const fallbackBox = (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4 text-center bg-gradient-to-br from-[#e9eff7] to-[#dbe3ee] dark:from-[#111a2b] dark:to-[#0c121e]">
      <Globe className="w-6 h-6 text-[#2563eb] dark:text-[#38bdf8]" aria-hidden="true" />
      <span className="font-display font-bold text-sm text-[#0f172a] dark:text-white">{ad.advertiser}</span>
      <span className="text-xs text-[#475569] dark:text-[#94a3b8] line-clamp-2 max-w-[26ch]">{ad.title}</span>
    </div>
  );

  if (variant === 'feature-split') {
    return (
      <article className="rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <a
            href={ad.href}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="lg:col-span-8 block relative bg-[#f8fafc] dark:bg-[#070b14] aspect-[1200/628] overflow-hidden group border-b lg:border-b-0 lg:border-r border-[#dbe3ee] dark:border-[#1c273b]"
            aria-label={`${ad.advertiser} — ${ad.title}`}
          >
            {imgFailed ? (
              fallbackBox
            ) : (
              <img
                src={ad.imgSrc}
                alt={ad.alt}
                width={ad.width}
                height={ad.height}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
              />
            )}
          </a>

          <div className="lg:col-span-4 p-6 sm:p-7 flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-[12px] font-mono text-[#64748b] dark:text-[#94a3b8]">
                <span className="font-semibold text-[#2563eb] dark:text-[#38bdf8]">{ad.advertiser}</span>
                <span>Sponsored Feature</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white tracking-tight leading-snug text-balance">
                {ad.title}
              </h3>

              <p className="text-[14px] text-[#475569] dark:text-[#94a3b8] leading-relaxed">
                {ad.tagline}
              </p>
            </div>

            <div className="pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-3">
              <div className="text-[11.5px] font-mono text-[#64748b] dark:text-[#94a3b8]">
                Verified Affiliate Partner · Opens External Storefront
              </div>
              <a
                href={ad.href}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full whitespace-nowrap inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[13.5px] font-bold transition-colors"
              >
                <span>{ad.ctaLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'leaderboard') {
    return (
      <aside
        aria-label={`${ad.advertiser} Sponsored Banner`}
        className="rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface p-4 sm:p-5"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1 text-center lg:text-left min-w-0">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[11.5px] font-mono text-[#64748b] dark:text-[#94a3b8]">
              <span className="font-semibold text-[#2563eb] dark:text-[#38bdf8]">{ad.advertiser}</span>
              <span aria-hidden="true">·</span>
              <span>Sponsored Partner</span>
            </div>
            <div className="font-display text-[16px] font-bold text-[#0f172a] dark:text-white leading-snug">
              {ad.title}
            </div>
            <p className="text-[13px] text-[#475569] dark:text-[#94a3b8] line-clamp-1">
              {ad.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto justify-center">
            <a
              href={ad.href}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="block w-full max-w-[468px] aspect-[468/90] rounded-xl overflow-hidden border border-[#dbe3ee] dark:border-[#1c273b] bg-white transition-transform hover:scale-[1.01]"
              aria-label={`${ad.advertiser} — ${ad.title}`}
            >
              {imgFailed ? (
                fallbackBox
              ) : (
                <img
                  src={ad.imgSrc}
                  alt={ad.alt}
                  width={ad.width}
                  height={ad.height}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-contain bg-white"
                />
              )}
            </a>

            <a
              href={ad.href}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[42px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] hover:border-[#2563eb] dark:hover:border-[#38bdf8] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#38bdf8] transition-colors"
            >
              <span>{ad.ctaLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </aside>
    );
  }

  if (variant === 'sidebar-rectangle') {
    return (
      <aside
        aria-label={`${ad.advertiser} Sponsored Spotlight`}
        className="rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface overflow-hidden"
      >
        <div className="px-5 py-3 border-b border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between gap-2 text-[11.5px] font-mono">
          <span className="font-semibold text-[#2563eb] dark:text-[#38bdf8]">{ad.advertiser}</span>
          <span className="text-[#64748b] dark:text-[#94a3b8]">Sponsored</span>
        </div>

        <div className="p-5 flex flex-col items-center gap-4">
          <a
            href={ad.href}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="block w-full max-w-[300px] aspect-[300/250] rounded-xl overflow-hidden border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#070b14] group"
            aria-label={`${ad.advertiser} — ${ad.title}`}
          >
            {imgFailed ? (
              fallbackBox
            ) : (
              <img
                src={ad.imgSrc}
                alt={ad.alt}
                width={ad.width}
                height={ad.height}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              />
            )}
          </a>

          <div className="w-full flex items-center justify-between gap-3 pt-1">
            <div className="min-w-0">
              <div className="font-semibold text-[13.5px] text-[#0f172a] dark:text-white truncate">
                {ad.title}
              </div>
              <div className="text-[12px] text-[#64748b] dark:text-[#94a3b8] truncate">
                {ad.tagline}
              </div>
            </div>

            <a
              href={ad.href}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="whitespace-nowrap shrink-0 inline-flex items-center gap-1 px-3 py-2 min-h-[38px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[12px] font-semibold transition-colors"
            >
              <span>{ad.ctaLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </aside>
    );
  }

  // variant === 'gallery-card' (uniform matted container for square & portrait banners)
  return (
    <a
      href={ad.href}
      target="_blank"
      rel="noopener noreferrer sponsored nofollow"
      className="group rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors overflow-hidden flex flex-col justify-between"
    >
      <div>
        <div className="px-5 py-3 border-b border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between gap-2 text-[11.5px] font-mono">
          <span className="font-semibold text-[#2563eb] dark:text-[#38bdf8]">{ad.advertiser}</span>
          <span className="text-[#64748b] dark:text-[#94a3b8]">Sponsored Display</span>
        </div>

        <div className="h-64 p-4 bg-[#f8fafc] dark:bg-[#070b14] border-b border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-center overflow-hidden">
          {imgFailed ? (
            fallbackBox
          ) : (
            <img
              src={ad.imgSrc}
              alt={ad.alt}
              width={ad.width}
              height={ad.height}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgFailed(true)}
              className="max-h-full max-w-full w-auto h-auto rounded-lg object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          )}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-1.5">
          <h3 className="font-display text-[17px] font-bold text-[#0f172a] dark:text-white leading-snug group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors">
            {ad.title}
          </h3>
          <p className="text-[13.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed">
            {ad.tagline}
          </p>
        </div>

        <div className="pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b] flex items-center justify-between text-[12.5px]">
          <span className="font-mono text-[#64748b] dark:text-[#94a3b8] tabular-nums">
            {ad.width}×{ad.height} Creative
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-[#2563eb] dark:text-[#38bdf8]">
            <span>{ad.ctaLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </a>
  );
};
