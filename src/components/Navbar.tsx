import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useStudio } from '../context/StudioContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { adminProfile } = useStudio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fafafa]/95 dark:bg-[#050505]/95 backdrop-blur-md border-b border-[#e4e4e7] dark:border-[#27272a] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={scrollToTop}
          className="font-serif text-xl font-extrabold tracking-tight text-[#09090b] dark:text-[#f4f4f5] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d97706]"
          aria-label="M R S Home"
        >
          {adminProfile.siteName}
        </button>

        {/* Zone 2: 4 Clean Single-Line Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#52525b] dark:text-[#a1a1aa]">
          <a
            href="#websites-section"
            className="whitespace-nowrap shrink-0 hover:text-[#09090b] dark:hover:text-white underline-offset-4 hover:underline transition-colors"
          >
            Websites
          </a>
          <a
            href="#about-section"
            className="whitespace-nowrap shrink-0 hover:text-[#09090b] dark:hover:text-white underline-offset-4 hover:underline transition-colors"
          >
            Credentials
          </a>
          <a
            href="#skills-section"
            className="whitespace-nowrap shrink-0 hover:text-[#09090b] dark:hover:text-white underline-offset-4 hover:underline transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact-section"
            className="whitespace-nowrap shrink-0 hover:text-[#09090b] dark:hover:text-white underline-offset-4 hover:underline transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#contact-section"
            className="whitespace-nowrap shrink-0 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#09090b] hover:bg-[#27272a] dark:bg-[#f4f4f5] dark:hover:bg-white text-white dark:text-[#09090b] text-[13px] font-semibold transition-colors"
          >
            Contact M R S
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg text-[#52525b] dark:text-[#a1a1aa] hover:bg-[#e4e4e7]/50 dark:hover:bg-[#27272a]/60 transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e4e4e7] dark:border-[#27272a] bg-white dark:bg-[#0f0f11] px-4 py-3 space-y-1 text-sm font-medium">
          <a
            href="#websites-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-[#09090b] dark:text-[#f4f4f5] hover:text-[#d97706]"
          >
            Websites
          </a>
          <a
            href="#about-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-[#09090b] dark:text-[#f4f4f5] hover:text-[#d97706]"
          >
            Credentials
          </a>
          <a
            href="#skills-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-[#09090b] dark:text-[#f4f4f5] hover:text-[#d97706]"
          >
            Skills
          </a>
          <a
            href="#contact-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-[#09090b] dark:text-[#f4f4f5] hover:text-[#d97706]"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
