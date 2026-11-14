import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WebsiteSlideshow } from './components/WebsiteSlideshow';
import { ServicesCatalogSection } from './components/ServicesCatalogSection';
import { AboutCredentials } from './components/AboutCredentials';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StudioProvider, useStudio } from './context/StudioContext';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('[M R S ErrorBoundary]', error);
  }

  private handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] p-6">
          <div className="max-w-md text-center space-y-4">
            <h1 className="font-display text-3xl font-extrabold tracking-tight">M R S</h1>
            <p className="text-sm text-[#475569] dark:text-[#94a3b8]">
              A temporary display error occurred. Try restoring the view or reload the page.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReset}
                className="px-4 py-2 rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] text-[#0f172a] dark:text-[#f1f5f9] text-sm font-semibold cursor-pointer"
              >
                Try Again
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-bold cursor-pointer"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainLayout() {
  const { adminProfile } = useStudio();
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('mrs_tech_theme_mode');
      if (saved === 'light') return false;
      if (saved === 'dark') return true;
    } catch {
      // Ignore storage restriction
    }
    return true;
  });

  useEffect(() => {
    const exactSiteName = adminProfile.siteName || 'M R S';
    const roleSubtitle = adminProfile.roleTitle || 'Remote IT Support, Virtual Assistance & Digital Operations';
    const nextTitle = `${exactSiteName} — ${roleSubtitle}`;
    document.title = nextTitle;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', nextTitle);

    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteName) ogSiteName.setAttribute('content', exactSiteName);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', nextTitle);

    const authorMeta = document.querySelector('meta[name="author"]');
    if (authorMeta) authorMeta.setAttribute('content', exactSiteName);
  }, [adminProfile.siteName, adminProfile.roleTitle]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', darkMode ? '#070b14' : '#f4f7fb');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('mrs_tech_theme_mode', next ? 'dark' : 'light');
      } catch {
        // Ignore storage error
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        <Hero darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <WebsiteSlideshow />
        <ServicesCatalogSection />
        <AboutCredentials />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <StudioProvider>
        <MainLayout />
      </StudioProvider>
    </ErrorBoundary>
  );
}
