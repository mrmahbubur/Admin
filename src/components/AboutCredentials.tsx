import React from 'react';
import { ArrowRight, Award, Briefcase, Check, GraduationCap, Languages } from 'lucide-react';
import { useStudio } from '../context/StudioContext';

function resolveExactServiceRequestUrl(topicTitle: string): string {
  const t = topicTitle.toLowerCase();
  if (t.includes('it support') || t.includes('troubleshooting')) {
    return 'https://mrs-services.ai.studio/request/it-support-troubleshooting';
  }
  if (t.includes('virtual assistance') || t.includes('administrative')) {
    return 'https://mrs-services.ai.studio/request/virtual-assistance';
  }
  if (t.includes('website management') || t.includes('cms') || t.includes('digital content')) {
    return 'https://mrs-services.ai.studio/request/website-management';
  }
  if (t.includes('technical writing') || t.includes('documentation')) {
    return 'https://mrs-services.ai.studio/request/technical-writing-proofreading';
  }
  if (t.includes('ai tools') || t.includes('productivity')) {
    return 'https://mrs-services.ai.studio/request/ai-digital-productivity';
  }
  if (t.includes('online research') || t.includes('problem-solving')) {
    return 'https://mrs-services.ai.studio/request/online-learning-resources';
  }
  if (t.includes('social media') || t.includes('online business')) {
    return 'https://mrs-services.ai.studio/request/graphics-design';
  }
  return 'https://mrs-services.ai.studio/request';
}

export const AboutCredentials: React.FC = () => {
  const { adminProfile } = useStudio();

  return (
    <section
      id="about-section"
      className="py-16 sm:py-20 bg-white dark:bg-[#0a101b] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 space-y-2">
          <div className="text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]">
            Verified Credentials
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance">
            About {adminProfile.siteName} &amp; Verified Background
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Clean Unboxed Technical Overview */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-[#0f172a] dark:text-white">
                Background &amp; Overview
              </h3>
              <div className="space-y-4 max-w-[65ch]">
                {adminProfile.bioParagraphs.map((para, idx) => (
                  <p key={idx} className="text-[15.5px] text-[#475569] dark:text-[#94a3b8] leading-[1.7]">
                    {para}
                  </p>
                ))}
              </div>
              {adminProfile.whyWorkWithMe && adminProfile.whyWorkWithMe.length > 0 && (
                <div className="pt-4 space-y-3 max-w-[65ch]">
                  <h4 className="font-display text-base font-bold text-[#0f172a] dark:text-white">
                    Why Work With {adminProfile.siteName}
                  </h4>
                  <div className="space-y-3">
                    {adminProfile.whyWorkWithMe.map((para, idx) => (
                      <p key={idx} className="text-[14.5px] text-[#475569] dark:text-[#94a3b8] leading-[1.7]">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              {adminProfile.backgroundHighlights && adminProfile.backgroundHighlights.length > 0 && (
                <ul className="pt-2 space-y-2 max-w-[65ch]">
                  {adminProfile.backgroundHighlights.map((note) => (
                    <li
                      key={note}
                      className="flex items-start gap-2.5 text-[14px] text-[#1e293b] dark:text-[#cbd5e1] leading-snug"
                    >
                      <Check className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="pt-8 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-[#0f172a] dark:text-white">
                  What {adminProfile.siteName} Can Help With
                </h3>
              </div>

              {adminProfile.liveServices && adminProfile.liveServices.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {adminProfile.liveServices.map((cat) => (
                    <div
                      key={cat.title}
                      className="pt-3 border-t border-[#dbe3ee] dark:border-[#1c273b] flex flex-col justify-between gap-3"
                    >
                      <div className="space-y-2.5">
                        <div className="font-semibold text-[14px] text-[#0f172a] dark:text-white">
                          {cat.title}
                        </div>
                        <ul className="space-y-1.5">
                          {cat.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-[13.5px] text-[#475569] dark:text-[#94a3b8] leading-snug"
                            >
                              <Check className="w-3.5 h-3.5 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={resolveExactServiceRequestUrl(cat.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start inline-flex items-center gap-1.5 min-h-[36px] text-[12.5px] font-semibold text-[#2563eb] dark:text-[#38bdf8] hover:underline underline-offset-4"
                      >
                        <span>Request this service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2.5">
                  {adminProfile.whatICanHelpWith.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between gap-3 text-[14.5px] text-[#0f172a] dark:text-[#e2e8f0]"
                    >
                      <span className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0 mt-1" />
                        <span>{item}</span>
                      </span>
                      <a
                        href={resolveExactServiceRequestUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 text-[12px] font-semibold text-[#2563eb] dark:text-[#38bdf8] hover:underline underline-offset-4"
                      >
                        <span>Request</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <p className="text-[13.5px] font-medium text-[#64748b] dark:text-[#94a3b8] pt-2">
                {adminProfile.availabilityNote}
              </p>
            </div>

            {adminProfile.workExperience && adminProfile.workExperience.length > 0 && (
              <div className="pt-8 border-t border-[#dbe3ee] dark:border-[#1c273b] space-y-5">
                <div className="flex items-center gap-2 font-display text-xl font-bold text-[#0f172a] dark:text-white">
                  <Briefcase className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" />
                  <span>Experience &amp; Availability</span>
                </div>
                {adminProfile.workExperience.map((exp, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="font-semibold text-[15.5px] text-[#0f172a] dark:text-white">{exp.role}</div>
                      <div className="text-[12.5px] font-mono tabular-nums text-[#2563eb] dark:text-[#38bdf8]">
                        {exp.period} · {exp.location}
                      </div>
                    </div>
                    <ul className="space-y-2.5 max-w-[65ch]">
                      {exp.highlights.map((hl, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[14.5px] text-[#475569] dark:text-[#94a3b8] leading-relaxed"
                        >
                          <span className="font-mono tabular-nums text-[#2563eb] dark:text-[#38bdf8] text-[12.5px] mt-0.5 shrink-0">
                            {String(i + 1).padStart(2, '0')}.
                          </span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Single Unified Technical Dossier Card (Hairline Divided) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#0c121e] divide-y divide-[#dbe3ee] dark:divide-[#1c273b] tech-surface">
              {/* Courses & Certifications */}
              <div className="p-6 space-y-3.5">
                <div className="flex items-center gap-2 font-semibold text-[15px] text-[#0f172a] dark:text-white">
                  <Award className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" />
                  <span>Credentials &amp; Background</span>
                </div>
                <ul className="divide-y divide-[#dbe3ee] dark:divide-[#1c273b]">
                  {adminProfile.coursesCertifications.map((cert) => (
                    <li
                      key={cert}
                      className="py-2.5 first:pt-0 last:pb-0 text-[14px] font-medium text-[#1e293b] dark:text-[#e2e8f0]"
                    >
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education (rendered only if explicitly present in public credentials) */}
              {adminProfile.education && adminProfile.education.length > 0 && (
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 font-semibold text-[15px] text-[#0f172a] dark:text-white">
                    <GraduationCap className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" />
                    <span>Education</span>
                  </div>
                  <div className="divide-y divide-[#dbe3ee] dark:divide-[#1c273b]">
                    {adminProfile.education.map((edu, idx) => (
                      <div key={idx} className="py-3 first:pt-0 last:pb-0 space-y-1">
                        <div className="font-semibold text-[14px] text-[#0f172a] dark:text-white">{edu.degree}</div>
                        <div className="text-[13px] text-[#475569] dark:text-[#94a3b8]">{edu.institution}</div>
                        <div className="flex items-center justify-between text-[12px] font-mono tabular-nums text-[#64748b] dark:text-[#94a3b8] pt-0.5">
                          <span>{edu.period}</span>
                          {edu.gpa && (
                            <span className="text-[#2563eb] dark:text-[#38bdf8] font-semibold">{edu.gpa}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages & Focus Areas */}
              <div className="p-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-semibold text-[15px] text-[#0f172a] dark:text-white">
                    <Languages className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8]" />
                    <span>Languages</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
                    {adminProfile.languages.map((lang) => (
                      <div key={lang.name}>
                        <div className="font-semibold text-[13.5px] text-[#0f172a] dark:text-white">{lang.name}</div>
                        <div className="text-[12px] text-[#64748b] dark:text-[#94a3b8]">{lang.level}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#dbe3ee] dark:border-[#1c273b]">
                  <div className="text-[12px] font-semibold text-[#64748b] dark:text-[#94a3b8] mb-1.5">
                    Focus Areas
                  </div>
                  <div className="text-[13.5px] text-[#0f172a] dark:text-[#e2e8f0] leading-relaxed">
                    {adminProfile.interests.join(' · ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
