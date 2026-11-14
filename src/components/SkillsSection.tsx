import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
import { useStudio } from '../context/StudioContext';

export const SkillsSection: React.FC = () => {
  const { adminProfile, websites, upstreamStatus } = useStudio();

  const liveFeedItems = websites.flatMap((site) =>
    (site.latestPosts || []).map((post) => ({
      ...post,
      sourceDomain: site.domain,
      sourceName: site.name,
    }))
  );

  const rssItems = upstreamStatus?.rssItems || [];

  return (
    <section
      id="skills-section"
      className="py-16 sm:py-20 border-b border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0a101b] transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-14">
        {/* Verified Competencies Matrix */}
        <div>
          <div className="mb-8 space-y-2">
            <div className="text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]">
              Verified Competencies
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance">
              Skills &amp; Technical Focus Areas
            </h2>
            <p className="text-[15px] text-[#475569] dark:text-[#94a3b8] max-w-2xl">
              Core capabilities maintained across IT support, web platform administration, and remote documentation workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {adminProfile.skillsList.map((group, idx) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="text-[12px] font-mono tabular-nums text-[#2563eb] dark:text-[#38bdf8] font-semibold">
                    0{idx + 1}.
                  </div>
                  <h3 className="font-semibold text-[15.5px] text-[#0f172a] dark:text-white leading-snug">
                    {group.category}
                  </h3>
                  <ul className="space-y-2 pt-2 border-t border-[#dbe3ee] dark:border-[#1c273b]">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2 text-[13px] text-[#475569] dark:text-[#94a3b8]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Directory Highlights */}
        {rssItems.length > 0 && (
          <div className="pt-10 border-t border-[#dbe3ee] dark:border-[#1c273b]">
            <div className="mb-6 space-y-1.5">
              <div className="text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]">
                Directory Highlights
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance">
                Official {adminProfile.siteName} Directory Feed
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rssItems.map((item, idx) => (
                <a
                  key={`${item.link}-${idx}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors flex flex-col justify-between gap-3"
                >
                  <div className="space-y-1.5">
                    <div className="text-[12px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8] truncate">
                      {item.category || 'Official Entry'}
                    </div>
                    <div className="font-semibold text-[15px] text-[#0f172a] dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors line-clamp-2">
                      {item.title}
                    </div>
                    {item.description && (
                      <p className="text-[13px] text-[#475569] dark:text-[#94a3b8] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="text-[11.5px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8] flex items-center justify-between pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b]">
                    <span className="truncate">{item.pubDate ? item.pubDate.slice(0, 16) : 'Featured'}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Live Synchronized Feed Entries from M R S Portals */}
        {liveFeedItems.length > 0 && (
          <div className="pt-10 border-t border-[#dbe3ee] dark:border-[#1c273b]">
            <div className="mb-6 space-y-1.5">
              <div className="text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]">
                Live Portal Updates
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance">
                Latest Posts from {adminProfile.siteName} Portals
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {liveFeedItems.slice(0, 6).map((item, idx) => (
                <a
                  key={`${item.url}-${idx}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors flex flex-col justify-between gap-3"
                >
                  <div className="space-y-1.5">
                    <div className="text-[12px] font-mono text-[#2563eb] dark:text-[#38bdf8] truncate">
                      {item.sourceDomain}
                    </div>
                    <div className="font-semibold text-[14.5px] text-[#0f172a] dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors line-clamp-2">
                      {item.title}
                    </div>
                  </div>
                  <div className="text-[11.5px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8] flex items-center justify-between pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b]">
                    <span>{item.published || 'Published'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
