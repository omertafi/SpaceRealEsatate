import React, { useState, useEffect } from 'react';
import { Language, NavigationPage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GeometricBackground } from './components/GeometricBackground';
import { HomeView } from './components/pages/HomeView';
import { AboutView } from './components/pages/AboutView';
import { ServicesView } from './components/pages/ServicesView';
import { ContactView } from './components/pages/ContactView';
import { updateDocumentSeo } from './utils/seo';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    // 1. Check URL query param (?lang=...) for direct SEO links
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'ar' || urlLang === 'en' || urlLang === 'ru' || urlLang === 'zh' || urlLang === 'ur') {
        return urlLang as Language;
      }
    } catch {
      // Fallback
    }

    const saved = localStorage.getItem('space_re_lang');
    if (saved === 'ar' || saved === 'en' || saved === 'ru' || saved === 'zh' || saved === 'ur') {
      return saved as Language;
    }
    return 'en'; // Default language is English as requested
  });

  const [activePage, setActivePage] = useState<NavigationPage>(() => {
    try {
      const hash = window.location.hash.replace('#', '').split('?')[0];
      if (hash === 'about' || hash === 'services' || hash === 'management' || hash === 'contact') {
        return hash === 'management' ? 'services' : (hash as NavigationPage);
      }
    } catch {
      // Fallback
    }
    return 'home';
  });

  // Sync RTL, document language, and Dynamic Multilingual SEO metadata
  useEffect(() => {
    localStorage.setItem('space_re_lang', currentLang);
    document.documentElement.lang = currentLang;
    const isRTL = currentLang === 'ar' || currentLang === 'ur';
    if (isRTL) {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('font-cairo');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('font-cairo');
    }

    // Update document title, meta description, keywords, and OpenGraph/Twitter tags
    updateDocumentSeo(currentLang, activePage);
  }, [currentLang, activePage]);

  const handleLanguageSelect = (lang: Language) => {
    setCurrentLang(lang);
  };

  const handleNavigatePage = (page: NavigationPage) => {
    // If navigation page is 'management', map to 'services'
    if (page === 'management') {
      setActivePage('services');
    } else {
      setActivePage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 font-sans selection:bg-[#C79D3B]/30 selection:text-black overflow-x-hidden flex flex-col">
      {/* Subtle Architectural & Geometric CAD Background Elements */}
      <GeometricBackground />

      {/* Top Navbar matching PDF */}
      <Navbar
        currentLang={currentLang}
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
        onSelectLang={handleLanguageSelect}
      />

      {/* Dynamic Multi-Page View Container */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomeView
            currentLang={currentLang}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {activePage === 'about' && (
          <AboutView
            currentLang={currentLang}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {(activePage === 'services' || activePage === 'management') && (
          <ServicesView
            currentLang={currentLang}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {activePage === 'contact' && (
          <ContactView
            currentLang={currentLang}
            onNavigatePage={handleNavigatePage}
          />
        )}
      </main>

      {/* Corporate Pre-Footer & Footer matching PDF */}
      <Footer
        currentLang={currentLang}
        onNavigatePage={handleNavigatePage}
      />
    </div>
  );
}
