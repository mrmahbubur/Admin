import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, Globe, Pause, Play, Plus, RefreshCw, Trash2 } from 'lucide-react';
import { useStudio } from '../context/StudioContext';
import { resolveWebsiteImage } from '../data/mediaAssets';

export const WebsiteSlideshow: React.FC = () => {
  const { websites, hubState, upstreamStatus, isSyncing, sseConnected, syncWebsites, addWebsite, removeWebsite } = useStudio();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [formError, setFormError] = useState('');
  const [submittingSite, setSubmittingSite] = useState(false);

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

  const handleAddWebsite = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setSubmittingSite(true);
    const res = await addWebsite({
      url: newUrl,
      name: newName || undefined,
      category: newCategory || undefined,
    });
    setSubmittingSite(false);
    if (!res.ok) {
      setFormError(res.error || 'Could not add website.');
      return;
    }
    setNewUrl('');
    setNewName('');
    setNewCategory('');
    setShowAddForm(false);
    setActiveIndex(websites.length);
  };

  const handleRemoveWebsite = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    await removeWebsite(id);
    if (activeIndex >= Math.max(0, websites.length - 1)) {
      setActiveIndex(0);
    }
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
    <div
      id="websites-section"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="focus:outline-none space-y-5"
    >
      {/* Editorial Slideshow Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09090b] dark:text-white tracking-tight text-balance">
            Official Websites &amp; Portals
          </h2>
          <div className="flex flex-wrap items-center gap-2 text-[12.5px] text-[#71717a] dark:text-[#a1a1aa]">
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
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg border border-[#e4e4e7] dark:border-[#27272a] bg-white dark:bg-[#0f0f11] hover:border-[#a1a1aa] dark:hover:border-[#52525b] text-[12.5px] font-semibold text-[#09090b] dark:text-[#f4f4f5] transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <button
            type="button"
            onClick={syncWebsites}
            disabled={isSyncing}
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg border border-[#e4e4e7] dark:border-[#27272a] bg-white dark:bg-[#0f0f11] hover:border-[#a1a1aa] dark:hover:border-[#52525b] text-[12.5px] font-semibold text-[#09090b] dark:text-[#f4f4f5] transition-colors cursor-pointer disabled:opacity-60"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Syncing...' : 'Sync Live'}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowAddForm((prev) => !prev)}
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg bg-[#09090b] hover:bg-[#27272a] dark:bg-[#f4f4f5] dark:hover:bg-white text-white dark:text-[#09090b] text-[12.5px] font-semibold transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Website</span>
          </button>
        </div>
      </div>

      {/* Add Website Form */}
      {showAddForm && (
        <form
          onSubmit={handleAddWebsite}
          className="p-5 rounded-2xl border border-[#e4e4e7] dark:border-[#27272a] bg-white dark:bg-[#0f0f11] grid grid-cols-1 sm:grid-cols-12 gap-4 items-end"
        >
          <div className="sm:col-span-5">
            <label
              htmlFor="add-site-url"
              className="block text-[12px] font-semibold text-[#52525b] dark:text-[#a1a1aa] mb-1.5"
            >
              Website URL
            </label>
            <input
              id="add-site-url"
              type="text"
              required
              placeholder="https://example.blogspot.com"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#e4e4e7] dark:border-[#27272a] bg-[#fafafa] dark:bg-[#050505] text-[13.5px] text-[#09090b] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#d97706]"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="add-site-name"
              className="block text-[12px] font-semibold text-[#52525b] dark:text-[#a1a1aa] mb-1.5"
            >
              Display Name
            </label>
            <input
              id="add-site-name"
              type="text"
              placeholder="Optional Title"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#e4e4e7] dark:border-[#27272a] bg-[#fafafa] dark:bg-[#050505] text-[13.5px] text-[#09090b] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#d97706]"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="add-site-category"
              className="block text-[12px] font-semibold text-[#52525b] dark:text-[#a1a1aa] mb-1.5"
            >
              Category
            </label>
            <input
              id="add-site-category"
              type="text"
              placeholder="Portal"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#e4e4e7] dark:border-[#27272a] bg-[#fafafa] dark:bg-[#050505] text-[13.5px] text-[#09090b] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#d97706]"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submittingSite}
              className="w-full py-2.5 px-4 min-h-[42px] rounded-lg bg-[#d97706] hover:bg-[#b45309] text-white text-[13px] font-semibold transition-colors cursor-pointer disabled:opacity-60 whitespace-nowrap"
            >
              {submittingSite ? 'Checking...' : 'Save Site'}
            </button>
          </div>
          {formError && (
            <div className="sm:col-span-12 text-[12.5px] font-semibold text-rose-600 dark:text-rose-400">
              {formError}
            </div>
          )}
        </form>
      )}

      {/* Main 16:9 Cinema Stage */}
      <div className="relative rounded-2xl overflow-hidden border border-[#e4e4e7] dark:border-[#27272a] bg-[#09090b] aspect-[16/11] sm:aspect-[16/9]">
        {/* Fallback Backdrop Surface */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#18181b] via-[#09090b] to-[#27272a] flex items-center justify-center">
          <Globe className="w-12 h-12 text-zinc-700" aria-hidden="true" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Top Slide Counter & Controls */}
        <div className="relative z-10 flex items-center justify-between p-4 sm:p-6">
          <div className="text-[12.5px] font-mono tabular-nums font-medium text-zinc-200 tracking-wide">
            {String(safeIndex + 1).padStart(2, '0')} / {String(websites.length).padStart(2, '0')} · {activeSite.domain}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous website slide"
              className="w-11 h-11 rounded-lg bg-black/70 hover:bg-black border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next website slide"
              className="w-11 h-11 rounded-lg bg-black/70 hover:bg-black border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Editorial Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div className="max-w-2xl space-y-2">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12px] font-medium">
              <span className="text-amber-400 font-semibold">{activeSite.category}</span>
              <span className="text-zinc-400" aria-hidden="true">·</span>
              <span className={`font-mono tabular-nums ${activeSite.status === 'online' ? 'text-emerald-400' : 'text-zinc-300'}`}>
                {activeSite.status === 'online'
                  ? `HTTP ${activeSite.httpCode || 200}${activeSite.latencyMs ? ` · ${activeSite.latencyMs}ms` : ''}`
                  : 'Verified Property · Standby'}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight text-balance">
              {activeSite.name}
            </h3>

            {activeSite.liveTitle && activeSite.liveTitle.toLowerCase() !== activeSite.name.toLowerCase() && (
              <div className="text-[12px] text-zinc-300 font-mono truncate">
                {activeSite.liveTitle}
              </div>
            )}

            <p className="text-[14px] sm:text-[15px] text-zinc-200 leading-relaxed line-clamp-2">
              {activeSite.description}
            </p>

            {activeSite.latestPosts && activeSite.latestPosts.length > 0 && (
              <div className="pt-1 text-[12.5px] text-zinc-300 truncate">
                Latest:{' '}
                <a
                  href={activeSite.latestPosts[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:underline font-medium"
                >
                  {activeSite.latestPosts[0].title}
                </a>
                {activeSite.latestPosts[0].published && (
                  <span className="text-zinc-400 font-mono tabular-nums ml-2">({activeSite.latestPosts[0].published})</span>
                )}
              </div>
            )}
          </div>

          <div className="shrink-0">
            <a
              href={activeSite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-[#f59e0b] hover:bg-amber-400 text-[#050505] font-bold text-[13.5px] transition-colors"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom 7-Site Selector Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {websites.map((site, idx) => {
          const isActive = idx === safeIndex;
          return (
            <div
              key={site.id}
              onClick={() => setActiveIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveIndex(idx);
                }
              }}
              className={`group relative p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                isActive
                  ? 'border-[#d97706] dark:border-[#f59e0b] bg-white dark:bg-[#0f0f11]'
                  : 'border-[#e4e4e7] dark:border-[#27272a] bg-white/60 dark:bg-[#0f0f11]/60 hover:border-[#a1a1aa] dark:hover:border-[#52525b]'
              }`}
            >
              <div className="flex items-center justify-between gap-1.5 mb-1.5">
                <span className="text-[11px] font-mono tabular-nums text-[#71717a] dark:text-[#a1a1aa]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="flex items-center gap-1">
                  <span
                    className={`text-[10.5px] font-mono tabular-nums font-medium ${
                      site.status === 'online' ? 'text-emerald-600 dark:text-emerald-400' : 'text-[#71717a] dark:text-[#a1a1aa]'
                    }`}
                  >
                    {site.status === 'online' ? (site.latencyMs ? `${site.latencyMs}ms` : 'Live') : 'Ready'}
                  </span>
                  {!site.isCore && (
                    <button
                      type="button"
                      onClick={(e) => handleRemoveWebsite(site.id, e)}
                      aria-label={`Remove ${site.name}`}
                      className="p-0.5 rounded text-[#71717a] hover:text-rose-600 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
              <div className="font-semibold text-[12.5px] text-[#09090b] dark:text-[#f4f4f5] truncate">
                {site.name}
              </div>
              <div className="text-[11px] font-mono text-[#71717a] dark:text-[#a1a1aa] truncate mt-0.5">
                {site.domain}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
