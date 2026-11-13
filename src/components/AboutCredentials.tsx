import React from 'react';
import { Award, Briefcase, Check, GraduationCap, Languages } from 'lucide-react';
import { useStudio } from '../context/StudioContext';

export const AboutCredentials: React.FC = () => {
  const { adminProfile } = useStudio();

  return (
    <section
      id="about-section"
      className="py-16 sm:py-20 bg-white dark:bg-[#0a0a0c] border-b border-[#e4e4e7] dark:border-[#27272a] transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 space-y-2">
          <div className="text-[13px] font-medium text-[#d97706] dark:text-[#f59e0b]">
            Verified Credentials
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09090b] dark:text-white tracking-tight text-balance">
            About {adminProfile.siteName} &amp; Verified Background
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Clean Unboxed Editorial Monograph */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#09090b] dark:text-white">
                Background &amp; Overview
              </h3>
              <div className="space-y-4 max-w-[65ch]">
                {adminProfile.bioParagraphs.map((para, idx) => (
                  <p key={idx} className="text-[15.5px] text-[#52525b] dark:text-[#a1a1aa] leading-[1.7]">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#e4e4e7] dark:border-[#27272a] space-y-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-xl font-bold text-[#09090b] dark:text-white">
                  What {adminProfile.siteName} Can Help With
                </h3>
              </div>

              {adminProfile.liveServices && adminProfile.liveServices.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {adminProfile.liveServices.map((cat) => (
                    <div
                      key={cat.title}
                      className="pt-3 border-t border-[#e4e4e7] dark:border-[#27272a] space-y-2.5"
                    >
                      <div className="font-semibold text-[14px] text-[#09090b] dark:text-white">
                        {cat.title}
                      </div>
                      <ul className="space-y-1.5">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-[13.5px] text-[#52525b] dark:text-[#a1a1aa] leading-snug"
                          >
                            <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2.5">
                  {adminProfile.whatICanHelpWith.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[14.5px] text-[#09090b] dark:text-[#e4e4e7]"
                    >
                      <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              <p className="text-[13.5px] font-medium text-[#71717a] dark:text-[#a1a1aa] pt-2">
                {adminProfile.availabilityNote}
              </p>
            </div>

            <div className="pt-8 border-t border-[#e4e4e7] dark:border-[#27272a] space-y-5">
              <div className="flex items-center gap-2 font-serif text-xl font-bold text-[#09090b] dark:text-white">
                <Briefcase className="w-4 h-4 text-[#d97706] dark:text-[#f59e0b]" />
                <span>Work Experience</span>
              </div>
              {adminProfile.workExperience.map((exp, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-semibold text-[15.5px] text-[#09090b] dark:text-white">{exp.role}</div>
                    <div className="text-[12.5px] font-mono tabular-nums text-[#d97706] dark:text-[#f59e0b]">
                      {exp.period} · {exp.location}
                    </div>
                  </div>
                  <ul className="space-y-2.5 max-w-[65ch]">
                    {exp.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14.5px] text-[#52525b] dark:text-[#a1a1aa] leading-relaxed"
                      >
                        <span className="font-mono tabular-nums text-[#d97706] dark:text-[#f59e0b] text-[12.5px] mt-0.5 shrink-0">
                          0{i + 1}.
                        </span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Single Unified Dossier Card (Hairline Divided, Zero Nested Cards) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#e4e4e7] dark:border-[#27272a] bg-[#fafafa] dark:bg-[#0f0f11] divide-y divide-[#e4e4e7] dark:divide-[#27272a]">
              {/* Courses & Certifications */}
              <div className="p-6 space-y-3.5">
                <div className="flex items-center gap-2 font-semibold text-[15px] text-[#09090b] dark:text-white">
                  <Award className="w-4 h-4 text-[#d97706] dark:text-[#f59e0b]" />
                  <span>Courses &amp; Certifications</span>
                </div>
                <ul className="divide-y divide-[#e4e4e7] dark:divide-[#27272a]">
                  {adminProfile.coursesCertifications.map((cert) => (
                    <li
                      key={cert}
                      className="py-2.5 first:pt-0 last:pb-0 text-[14px] font-medium text-[#18181b] dark:text-[#e4e4e7]"
                    >
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 font-semibold text-[15px] text-[#09090b] dark:text-white">
                  <GraduationCap className="w-4 h-4 text-[#d97706] dark:text-[#f59e0b]" />
                  <span>Education</span>
                </div>
                <div className="divide-y divide-[#e4e4e7] dark:divide-[#27272a]">
                  {adminProfile.education.map((edu, idx) => (
                    <div key={idx} className="py-3 first:pt-0 last:pb-0 space-y-1">
                      <div className="font-semibold text-[14px] text-[#09090b] dark:text-white">{edu.degree}</div>
                      <div className="text-[13px] text-[#52525b] dark:text-[#a1a1aa]">{edu.institution}</div>
                      <div className="flex items-center justify-between text-[12px] font-mono tabular-nums text-[#71717a] dark:text-[#a1a1aa] pt-0.5">
                        <span>{edu.period}</span>
                        {edu.gpa && (
                          <span className="text-[#d97706] dark:text-[#f59e0b] font-semibold">{edu.gpa}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages & Focus Areas */}
              <div className="p-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-semibold text-[15px] text-[#09090b] dark:text-white">
                    <Languages className="w-4 h-4 text-[#d97706] dark:text-[#f59e0b]" />
                    <span>Languages</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-1">
                    {adminProfile.languages.map((lang) => (
                      <div key={lang.name}>
                        <div className="font-semibold text-[13.5px] text-[#09090b] dark:text-white">{lang.name}</div>
                        <div className="text-[12px] text-[#71717a] dark:text-[#a1a1aa]">{lang.level}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e4e4e7] dark:border-[#27272a]">
                  <div className="text-[12px] font-semibold text-[#71717a] dark:text-[#a1a1aa] mb-1.5">
                    Focus Areas
                  </div>
                  <div className="text-[13.5px] text-[#09090b] dark:text-[#e4e4e7] leading-relaxed">
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
