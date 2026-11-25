import React, { useEffect, useMemo, useState } from 'react';
import {
  Check,
  Clock,
  ExternalLink,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useStudio, type CatalogServiceItem } from '../context/StudioContext';
import { SERVICES_PORTAL_URL } from '../data/servicesCatalog';
import { DisplayAdBanner } from './DisplayAdBanner';
import { SponsorAdSlot } from './SponsorAdSlot';

type CategoryFilter = 'All' | CatalogServiceItem['category'];
type CurrencyMode = 'USD' | 'BDT';

export const ServicesCatalogSection: React.FC = () => {
  const { adminProfile, servicesCatalog, servicesPortalStatus } = useStudio();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [currency, setCurrency] = useState<CurrencyMode>('USD');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeServiceModal, setActiveServiceModal] = useState<CatalogServiceItem | null>(null);

  useEffect(() => {
    if (!activeServiceModal) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveServiceModal(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [activeServiceModal]);

  const categories = useMemo(() => {
    const counts: Record<CategoryFilter, number> = {
      All: servicesCatalog.length,
      'M R S Services': servicesCatalog.filter((s) => s.category === 'M R S Services').length,
      'M R S IPTV': servicesCatalog.filter((s) => s.category === 'M R S IPTV').length,
    };
    return [
      { id: 'All' as const, label: 'All Services', count: counts.All },
      { id: 'M R S Services' as const, label: 'Technical & Admin', count: counts['M R S Services'] },
      { id: 'M R S IPTV' as const, label: 'IPTV Plans', count: counts['M R S IPTV'] },
    ];
  }, [servicesCatalog]);

  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return servicesCatalog.filter((svc) => {
      const catMatch = selectedCategory === 'All' || svc.category === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        svc.name.toLowerCase().includes(q) ||
        svc.serviceId.toLowerCase().includes(q) ||
        svc.shortDescription.toLowerCase().includes(q) ||
        svc.inclusions.some((item) => item.toLowerCase().includes(q))
      );
    });
  }, [servicesCatalog, selectedCategory, searchQuery]);

  const resolveExactRequestUrl = (svc: CatalogServiceItem) =>
    svc.requestUrl || `https://mrs-services.ai.studio/request/${svc.id}`;

  const resolveExactDetailsUrl = (svc: CatalogServiceItem) =>
    svc.portalUrl && svc.portalUrl !== SERVICES_PORTAL_URL
      ? svc.portalUrl
      : `https://mrs-services.ai.studio/services/${svc.id}`;

  const portalLatencyText =
    servicesPortalStatus.status === 'online'
      ? `Service Portal Live${servicesPortalStatus.latencyMs ? ` (${servicesPortalStatus.latencyMs}ms)` : ''}`
      : 'Service Portal Available';

  return (
    <section
      id="services-section"
      className="py-16 sm:py-20 bg-[#f4f7fb] dark:bg-[#070b14] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]">
              Service Catalog &amp; Direct Request
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance">
              {adminProfile.siteName} Professional Services
            </h2>
            <p className="text-[15px] text-[#475569] dark:text-[#94a3b8] leading-relaxed">
              Complete technical support, automation, CMS administration, documentation, and media solutions. Every service request links directly to its exact intake page on mrs-services.ai.studio.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] font-mono text-[#64748b] dark:text-[#94a3b8] pt-0.5 tabular-nums">
              <span>{servicesCatalog.length} Active Services</span>
              <span aria-hidden="true">·</span>
              <span>{portalLatencyText}</span>
              <span aria-hidden="true">·</span>
              <span>Direct Scope &amp; Revision Guarantee</span>
            </div>
          </div>

          <a
            href={servicesPortalStatus.url || SERVICES_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap shrink-0 self-start md:self-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[13.5px] font-bold transition-colors"
          >
            <span>Open Services Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Interactive Filter, Search & Currency Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 pb-2 border-b border-[#dbe3ee] dark:border-[#1c273b]">
          {/* Segmented Category Filter Tabs */}
          <div
            className="flex flex-wrap items-center gap-1 p-1 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e]"
            role="tablist"
            aria-label="Filter services by category"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap shrink-0 px-3 py-2 min-h-[40px] rounded-lg text-[12.5px] font-semibold transition-colors cursor-pointer tabular-nums ${
                    isActive
                      ? 'bg-[#2563eb] text-white'
                      : 'text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-white'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Filter */}
            <div className="relative flex-1 sm:w-64">
              <Search
                className="w-4 h-4 text-[#64748b] dark:text-[#94a3b8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search service or code..."
                aria-label="Search services"
                className="w-full pl-9 pr-9 py-2 min-h-[44px] sm:min-h-[42px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear service search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#64748b] hover:text-[#0f172a] dark:hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Currency Toggle */}
            <div
              className="inline-flex items-center p-1 rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] self-start sm:self-auto"
              role="group"
              aria-label="Select display currency"
            >
              {(['USD', 'BDT'] as const).map((unit) => {
                const active = currency === unit;
                return (
                  <button
                    key={unit}
                    type="button"
                    onClick={() => setCurrency(unit)}
                    className={`whitespace-nowrap shrink-0 px-3 py-1.5 min-h-[36px] rounded-md text-[12px] font-mono font-bold transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#0f172a] dark:bg-[#38bdf8] text-white dark:text-[#070b14]'
                        : 'text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-white'
                    }`}
                  >
                    {unit}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((svc) => {
              const displayedRate = currency === 'USD' ? svc.rateUSD : svc.rateBDT;
              const requestUrl = resolveExactRequestUrl(svc);
              return (
                <article
                  key={svc.id}
                  className="p-6 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface flex flex-col justify-between gap-5"
                >
                  <div className="space-y-3.5">
                    {/* Clean Unboxed Metadata Row */}
                    <div className="flex items-baseline justify-between gap-2 text-[12px] font-mono tabular-nums">
                      <span className="text-[#64748b] dark:text-[#94a3b8] truncate">
                        {svc.serviceId} · {svc.category}
                      </span>
                      <span className="font-bold text-[#2563eb] dark:text-[#38bdf8] shrink-0">
                        {displayedRate}
                      </span>
                    </div>

                    <h3 className="font-display text-[18px] font-bold text-[#0f172a] dark:text-white leading-snug text-balance">
                      {svc.name}
                    </h3>

                    <p className="text-[13.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed">
                      {svc.shortDescription}
                    </p>

                    <ul className="space-y-2 pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b]">
                      {svc.inclusions.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[13px] text-[#1e293b] dark:text-[#cbd5e1] leading-snug"
                        >
                          <Check className="w-3.5 h-3.5 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8]">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#2563eb] dark:text-[#38bdf8]" />
                        <span>{svc.typicalTurnaround}</span>
                      </span>
                      <span>
                        {svc.revisionsIncluded > 0
                          ? `${svc.revisionsIncluded} revision(s) included`
                          : 'Guided setup support'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => setActiveServiceModal(svc)}
                        className="flex-1 whitespace-nowrap px-3 py-2 min-h-[42px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] hover:border-[#94a3b8] dark:hover:border-[#334155] text-[12.5px] font-semibold text-[#0f172a] dark:text-[#f1f5f9] transition-colors cursor-pointer"
                      >
                        View Scope
                      </button>
                      <a
                        href={requestUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[42px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[12.5px] font-bold transition-colors"
                      >
                        <span>Request</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="p-10 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] text-center space-y-3">
            <p className="text-[15px] font-semibold text-[#0f172a] dark:text-white">
              No matching services found for &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 min-h-[42px] rounded-lg bg-[#2563eb] text-white text-[13px] font-semibold cursor-pointer"
            >
              Reset Service Filters
            </button>
          </div>
        )}

        {/* Hairline Service Guarantee & Direct Portal Workflow Strip */}
        <div className="rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface">
          <div className="px-6 py-4 border-b border-[#dbe3ee] dark:border-[#1c273b] flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[14px] font-semibold text-[#0f172a] dark:text-white">
              <ShieldCheck className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" />
              <span>Direct Service Request &amp; Scope Guarantee</span>
            </div>
            <div className="text-[12.5px] text-[#64748b] dark:text-[#94a3b8]">
              Work matches the agreed scope or we fix it free.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#dbe3ee] dark:divide-[#1c273b]">
            <div className="p-5 space-y-1">
              <div className="text-[11.5px] font-mono text-[#2563eb] dark:text-[#38bdf8] font-medium">
                Step 01 · Exact Service Intake
              </div>
              <div className="font-semibold text-[14.5px] text-[#0f172a] dark:text-white">
                Direct Request Routing
              </div>
              <div className="text-[13px] text-[#475569] dark:text-[#94a3b8]">
                Every Request button routes directly to its dedicated /request page on mrs-services.ai.studio.
              </div>
            </div>
            <div className="p-5 space-y-1">
              <div className="text-[11.5px] font-mono text-[#2563eb] dark:text-[#38bdf8] font-medium">
                Step 02 · SLA Turnaround
              </div>
              <div className="font-semibold text-[14.5px] text-[#0f172a] dark:text-white">
                Verified Scope Delivery
              </div>
              <div className="text-[13px] text-[#475569] dark:text-[#94a3b8]">
                Clear inclusions, prerequisites, and tracked turnaround windows on every engagement.
              </div>
            </div>
            <div className="p-5 space-y-1">
              <div className="text-[11.5px] font-mono text-[#2563eb] dark:text-[#38bdf8] font-medium">
                Step 03 · Quality Warranty
              </div>
              <div className="font-semibold text-[14.5px] text-[#0f172a] dark:text-white">
                Revision Protection Included
              </div>
              <div className="text-[13px] text-[#475569] dark:text-[#94a3b8]">
                Built-in revision rounds and structured sign-off checks before final delivery.
              </div>
            </div>
          </div>
        </div>

        <DisplayAdBanner adId="aliexpress-leaderboard-logo" variant="leaderboard" />

        <SponsorAdSlot
          ids={['sponsor-11683560', 'sponsor-11242067']}
          heading="Recommended Productivity & Security Partners"
        />
      </div>

      {/* Accessible Full Service Scope & FAQ Modal */}
      {activeServiceModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070b14]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setActiveServiceModal(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] p-6 sm:p-8 space-y-6 tech-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#dbe3ee] dark:border-[#1c273b]">
              <div className="space-y-1.5 min-w-0">
                <div className="text-[12px] font-mono text-[#2563eb] dark:text-[#38bdf8] font-semibold">
                  {activeServiceModal.serviceId} · {activeServiceModal.category}
                </div>
                <h3
                  id="service-modal-title"
                  className="font-display text-2xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance"
                >
                  {activeServiceModal.name}
                </h3>
                <div className="text-[13px] font-mono tabular-nums text-[#475569] dark:text-[#94a3b8]">
                  {activeServiceModal.rateUSD} ({activeServiceModal.rateBDT}) · Turnaround:{' '}
                  {activeServiceModal.typicalTurnaround}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveServiceModal(null)}
                aria-label="Close service scope details"
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-white cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[14.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed">
              {activeServiceModal.shortDescription}
            </p>

            {/* Full Deliverables */}
            <div className="space-y-2.5">
              <h4 className="text-[13.5px] font-semibold text-[#0f172a] dark:text-white">
                Included Deliverables
              </h4>
              <ul className="space-y-2">
                {activeServiceModal.inclusions.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-start gap-2.5 text-[13.5px] text-[#1e293b] dark:text-[#e2e8f0]"
                  >
                    <Check className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b]">
              <div className="space-y-2">
                <h4 className="text-[13px] font-semibold text-[#0f172a] dark:text-white">
                  Required from Client
                </h4>
                <ul className="space-y-1.5 text-[13px] text-[#475569] dark:text-[#94a3b8]">
                  {activeServiceModal.clientMustProvide.map((req) => (
                    <li key={req}>· {req}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-[13px] font-semibold text-[#0f172a] dark:text-white">
                  Scope Exclusions &amp; Terms
                </h4>
                <ul className="space-y-1.5 text-[13px] text-[#475569] dark:text-[#94a3b8]">
                  {activeServiceModal.notIncluded.map((excl) => (
                    <li key={excl}>· {excl}</li>
                  ))}
                  <li>
                    ·{' '}
                    {activeServiceModal.revisionsIncluded > 0
                      ? `${activeServiceModal.revisionsIncluded} revision(s) included`
                      : 'Guided plan onboarding included'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Sample Case Study */}
            {activeServiceModal.samples && activeServiceModal.samples.length > 0 && (
              <div className="pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-2">
                <h4 className="text-[13px] font-semibold text-[#0f172a] dark:text-white">
                  Verified Case Benchmark
                </h4>
                {activeServiceModal.samples.map((smp) => (
                  <div key={smp.id} className="text-[13px] space-y-1 text-[#475569] dark:text-[#94a3b8]">
                    <div className="font-semibold text-[#0f172a] dark:text-[#e2e8f0]">{smp.title}</div>
                    <p>{smp.description}</p>
                    <div className="font-mono text-[12px] text-[#2563eb] dark:text-[#38bdf8]">
                      Outcome: {smp.results}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FAQs */}
            {activeServiceModal.faq && activeServiceModal.faq.length > 0 && (
              <div className="pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-3">
                <h4 className="text-[13px] font-semibold text-[#0f172a] dark:text-white">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-2.5">
                  {activeServiceModal.faq.map((q) => (
                    <div key={q.question} className="text-[13px] space-y-0.5">
                      <div className="font-semibold text-[#0f172a] dark:text-[#e2e8f0]">
                        {q.question}
                      </div>
                      <div className="text-[#475569] dark:text-[#94a3b8]">{q.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={resolveExactDetailsUrl(activeServiceModal)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] text-[13px] font-semibold text-[#0f172a] dark:text-white hover:border-[#94a3b8] dark:hover:border-[#334155]"
              >
                <span>View Service Overview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={resolveExactRequestUrl(activeServiceModal)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[13.5px] font-bold"
              >
                <span>Request This Service</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
