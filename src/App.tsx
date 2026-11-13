import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutCredentials } from './components/AboutCredentials';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StudioProvider } from './context/StudioContext';

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
        <div className="min-h-screen flex items-center justify-center bg-[#fafafa] dark:bg-[#050505] text-[#09090b] dark:text-[#f4f4f5] p-6">
          <div className="max-w-md text-center space-y-4">
            <h1 className="font-serif text-3xl font-bold">M R S</h1>
            <p className="text-sm text-[#52525b] dark:text-[#a1a1aa]">
              A temporary display error occurred. Try restoring the view or reload the page.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReset}
                className="px-4 py-2 rounded-lg border border-[#e4e4e7] dark:border-[#27272a] bg-white dark:bg-[#0f0f11] text-[#09090b] dark:text-[#f4f4f5] text-sm font-semibold cursor-pointer"
              >
                Try Again
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-4 py-2 rounded-lg bg-[#d97706] text-white text-sm font-bold cursor-pointer"
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
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('mrs_dark_theme');
      if (saved !== null) return saved === 'true';
    } catch {
      // Ignore storage restriction
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', darkMode ? '#050505' : '#fafafa');
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem('mrs_dark_theme') === null) {
          setDarkMode(e.matches);
        }
      } catch {
        setDarkMode(e.matches);
      }
    };
    mq.addEventListener('change', handleSystemChange);
    return () => mq.removeEventListener('change', handleSystemChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('mrs_dark_theme', String(next));
      } catch {
        // Ignore storage error
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#050505] text-[#09090b] dark:text-[#f4f4f5] transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        <Hero darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
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
