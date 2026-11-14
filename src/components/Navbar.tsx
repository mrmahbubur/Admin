import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useStudio } from '../context/StudioContext';

const NAV_LINKS = [
  { id: 'websites-section', label: 'Websites' },
  { id: 'services-section', label: 'Services' },
  { id: 'about-section', label: 'Credentials' },
  { id: 'skills-section', label: 'Skills' },
  { id: 'contact-section', label: 'Contact' },
] as const;

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('websites-section');
  const { adminProfile } = useStudio();

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f4f7fb]/90 dark:bg-[#070b14]/90 backdrop-blur-md border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={scrollToTop}
          className="font-display text-xl font-extrabold tracking-tight text-[#0f172a] dark:text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]"
          aria-label={`${adminProfile.siteName} Home`}
        >
          {adminProfile.siteName}
        </button>

        {/* Zone 2: 4 Clean Single-Line Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#475569] dark:text-[#94a3b8]">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`whitespace-nowrap shrink-0 transition-colors underline-offset-4 hover:underline ${
                  isActive
                    ? 'text-[#2563eb] dark:text-[#38bdf8] font-semibold'
                    : 'hover:text-[#2563eb] dark:hover:text-[#38bdf8]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#contact-section"
            className="whitespace-nowrap shrink-0 inline-flex items-center justify-center px-3.5 sm:px-4 py-2 min-h-[40px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[12.5px] sm:text-[13px] font-semibold transition-colors"
          >
            Contact {adminProfile.siteName}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg text-[#475569] dark:text-[#94a3b8] hover:bg-[#dbe3ee]/60 dark:hover:bg-[#1c273b]/70 transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] px-4 py-3 space-y-1 text-sm font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 ${
                  isActive
                    ? 'text-[#2563eb] dark:text-[#38bdf8] font-semibold'
                    : 'text-[#0f172a] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
