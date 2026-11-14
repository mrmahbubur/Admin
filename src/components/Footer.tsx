import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useStudio } from '../context/StudioContext';

interface FooterProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onToggleDarkMode }) => {
  const { adminProfile, websites, yearly } = useStudio();

  return (
    <footer className="bg-[#070b14] text-[#94a3b8] text-[13.5px] pt-16 pb-10 border-t border-[#1c273b]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#1c273b]">
          {/* Col 1: M R S Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={adminProfile.avatarUrl}
                alt={adminProfile.avatarAltText || adminProfile.siteName}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#38bdf8]/75 bg-[#0c121e]"
              />
              <div>
                <h4 className="font-display text-white font-bold text-[17px] leading-tight">
                  {adminProfile.siteName}
                </h4>
                <div className="text-[11.5px] font-mono text-[#38bdf8] font-medium">
                  {adminProfile.location}
                </div>
              </div>
            </div>
            <p className="leading-relaxed text-[#64748b] text-[13px]">
              {adminProfile.roleTitle}. {adminProfile.certification}.
            </p>
            <button
              type="button"
              onClick={onToggleDarkMode}
              className="whitespace-nowrap inline-flex items-center gap-2 px-3.5 py-2 min-h-[44px] sm:min-h-[40px] rounded-lg border border-[#1c273b] bg-[#0c121e] hover:border-[#334155] text-[12.5px] font-medium text-[#e2e8f0] transition-colors cursor-pointer"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-[#38bdf8]" /> : <Moon className="w-3.5 h-3.5 text-[#3b82f6]" />}
              <span>{darkMode ? 'Light Theme' : 'Dark Theme'}</span>
            </button>
          </div>

          {/* Col 2: Page Sections */}
          <div className="space-y-3.5">
            <h4 className="text-white font-semibold text-[14px]">Navigation</h4>
            <ul className="space-y-2.5 text-[#94a3b8]">
              <li>
                <a href="#websites-section" className="hover:text-white transition-colors">
                  Websites Slideshow
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Services Catalog
                </a>
              </li>
              <li>
                <a href="#about-section" className="hover:text-white transition-colors">
                  About &amp; Credentials
                </a>
              </li>
              <li>
                <a href="#skills-section" className="hover:text-white transition-colors">
                  Skills &amp; Feeds
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors">
                  Contact {adminProfile.siteName}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Websites Network */}
          <div className="space-y-3.5">
            <h4 className="text-white font-semibold text-[14px]">Websites Network</h4>
            <ul className="space-y-2.5 text-[#94a3b8]">
              {websites.slice(0, 6).map((site) => (
                <li key={site.id}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between gap-2"
                  >
                    <span className="truncate">{site.name}</span>
                    <span
                      className={`text-[11px] font-mono shrink-0 ${
                        site.status === 'online' ? 'text-emerald-400' : 'text-[#64748b]'
                      }`}
                    >
                      {site.status === 'online' ? 'Live' : 'Ready'}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Direct Contact */}
          <div className="space-y-3.5">
            <h4 className="text-white font-semibold text-[14px]">Direct Channels</h4>
            <ul className="space-y-2.5 text-[#94a3b8]">
              <li>
                <a href={`mailto:${adminProfile.socials.email}`} className="hover:text-white transition-colors font-mono text-[12.5px]">
                  {adminProfile.socials.email}
                </a>
              </li>
              <li>
                <a href={`tel:${adminProfile.socials.phone}`} className="hover:text-white transition-colors font-mono text-[12.5px] tabular-nums">
                  {adminProfile.socials.phone}
                </a>
              </li>
              <li>
                <a
                  href={adminProfile.socials.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Calendly Scheduling
                </a>
              </li>
              <li>
                <a
                  href={adminProfile.socials.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-[#64748b]">
          <div>
            © <span className="tabular-nums">{yearly.currentYear}</span>{' '}
            <strong className="text-[#e2e8f0]">{adminProfile.siteName}</strong>. All rights reserved.
          </div>
          <div className="text-[12px] font-mono tabular-nums text-[#64748b]">
            Official Digital Hub · Est. {yearly.establishedYear}
          </div>
        </div>
      </div>
    </footer>
  );
};
