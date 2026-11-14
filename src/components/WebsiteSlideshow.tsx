import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, Globe, Pause, Play, RefreshCw } from 'lucide-react';
import { useStudio } from '../context/StudioContext';
import { resolveWebsiteImage } from '../data/mediaAssets';

export const WebsiteSlideshow: React.FC = () => {
  const { websites, hubState, upstreamStatus, isSyncing, sseConnected, syncWebsites } = useStudio();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const safeIndex = websites.length > 0 ? activeIndex % websites.length : 0;
  const activeSite = websites[safeIndex];

  useEffect(() => {
    if (!isPlaying || isHovered || websites.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % websites.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, websites.length]);

  const handlePrev = () => {
    if (websites.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + websites.length) % websites.length);
  };

  const handleNext = () => {
    if (websites.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % websites.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  const formattedUpdatedTime = (() => {
    try {
      return new Date(hubState.lastUpdated).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    } catch {
      return 'Live';
    }
  })();

  if (!activeSite) return null;

  return (
    <section
      id="websites-section"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-16 sm:py-20 bg-white dark:bg-[#0a101b] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200 focus:outline-none"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6">
        {/* Technical Slideshow Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5 min-w-0">
            <div className="text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]">
              Digital Network
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance">
              Official Websites &amp; Portals
            </h2>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-[#64748b] dark:text-[#94a3b8]">
            {(upstreamStatus.sseActive || sseConnected) && (
              <span
                className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"
                aria-hidden="true"
                title="Live stream active"
              />
            )}
            <span>
              {upstreamStatus.sseActive || sseConnected
                ? 'Live Stream Active'
                : 'Live Feed Active'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{websites.length} Websites</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">Updated {formattedUpdatedTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] sm:min-h-[40px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#94a3b8] dark:hover:border-[#334155] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <button
            type="button"
            onClick={syncWebsites}
            disabled={isSyncing}
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] sm:min-h-[40px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#94a3b8] dark:hover:border-[#334155] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] transition-colors cursor-pointer disabled:opacity-60"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Syncing...' : 'Sync Live'}</span>
          </button>
        </div>
      </div>

      {/* Main Responsive Cinema Stage */}
      <div className="relative rounded-2xl overflow-hidden border border-[#dbe3ee] dark:border-[#1c273b] bg-[#070b14] min-h-[360px] sm:min-h-0 sm:aspect-[16/10] lg:aspect-[16/9] tech-surface">
        {/* Fallback Backdrop Surface */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#070b14] to-[#1e293b] flex items-center justify-center">
          <Globe className="w-12 h-12 text-slate-700" aria-hidden="true" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSite.id}
            initial={{ opacity: 0.35 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.35 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <img
              src={resolveWebsiteImage(activeSite.imageKey)}
              alt={`${activeSite.name} preview`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/95 via-[#070b14]/65 to-[#070b14]/25" />
          </motion.div>
        </AnimatePresence>

        {/* Top Slide Counter & Controls */}
        <div className="relative z-10 flex items-center justify-between gap-3 p-4 sm:p-6">
          <div className="text-[12px] sm:text-[12.5px] font-mono tabular-nums font-medium text-slate-200 tracking-wide truncate">
            {String(safeIndex + 1).padStart(2, '0')} / {String(websites.length).padStart(2, '0')} · {activeSite.domain}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous website slide"
              className="w-11 h-11 rounded-lg bg-[#070b14]/75 hover:bg-[#070b14] border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next website slide"
              className="w-11 h-11 rounded-lg bg-[#070b14]/75 hover:bg-[#070b14] border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Technical Overlay */}
        <div className="relative sm:absolute sm:inset-x-0 sm:bottom-0 z-10 p-4 pt-16 sm:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-5">
          <div className="max-w-2xl space-y-1.5 sm:space-y-2 min-w-0">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12px] font-medium">
              <span className="text-[#38bdf8] font-semibold">{activeSite.category}</span>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <span className={`font-mono tabular-nums ${activeSite.status === 'online' ? 'text-emerald-400' : 'text-slate-300'}`}>
                {activeSite.status === 'online'
                  ? `HTTP ${activeSite.httpCode || 200}${activeSite.latencyMs ? ` · ${activeSite.latencyMs}ms` : ''}`
                  : 'Verified Property · Standby'}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-3xl font-bold text-white tracking-tight leading-tight text-balance">
              {activeSite.name}
            </h3>

            {activeSite.liveTitle && activeSite.liveTitle.toLowerCase() !== activeSite.name.toLowerCase() && (
              <div className="text-[12px] text-slate-300 font-mono truncate">
                {activeSite.liveTitle}
              </div>
            )}

            <p className="text-[13.5px] sm:text-[15px] text-slate-200 leading-relaxed line-clamp-2">
              {activeSite.description}
            </p>

            {activeSite.latestPosts && activeSite.latestPosts.length > 0 && (
              <div className="pt-1 text-[12px] sm:text-[12.5px] text-slate-300 truncate">
                Latest:{' '}
                <a
                  href={activeSite.latestPosts[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38bdf8] hover:underline font-medium"
                >
                  {activeSite.latestPosts[0].title}
                </a>
                {activeSite.latestPosts[0].published && (
                  <span className="text-slate-400 font-mono tabular-nums ml-2">({activeSite.latestPosts[0].published})</span>
                )}
              </div>
            )}
          </div>

          <div className="shrink-0">
            <a
              href={activeSite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-[13.5px] transition-colors"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Responsive Site Selector Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {websites.map((site, idx) => {
          const isActive = idx === safeIndex;
          return (
            <button
              key={site.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group relative p-3 sm:p-3.5 min-h-[44px] rounded-xl border text-left transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] tech-surface ${
                isActive
                  ? 'border-[#2563eb] dark:border-[#38bdf8] bg-white dark:bg-[#0c121e]'
                  : 'border-[#dbe3ee] dark:border-[#1c273b] bg-white/75 dark:bg-[#0c121e]/70 hover:border-[#94a3b8] dark:hover:border-[#334155]'
              }`}
            >
              <div className="flex items-center justify-between gap-1.5 mb-1.5">
                <span className="text-[11px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span
                  className={`text-[10.5px] font-mono tabular-nums font-medium ${
                    site.status === 'online' ? 'text-emerald-600 dark:text-emerald-400' : 'text-[#64748b] dark:text-[#94a3b8]'
                  }`}
                >
                  {site.status === 'online' ? (site.latencyMs ? `${site.latencyMs}ms` : 'Live') : 'Ready'}
                </span>
              </div>
              <div className="font-semibold text-[12.5px] text-[#0f172a] dark:text-[#f1f5f9] truncate">
                {site.name}
              </div>
              <div className="text-[11px] font-mono text-[#64748b] dark:text-[#94a3b8] truncate mt-0.5">
                {site.domain}
              </div>
            </button>
          );
        })}
      </div>
      </div>
    </section>
  );
};
