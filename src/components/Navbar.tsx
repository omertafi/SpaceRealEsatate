import React, { useState, useRef, useEffect } from 'react';
import { Language, NavigationPage } from '../types';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { SpaceLogo } from './SpaceLogo';
import { translations } from '../i18n/translations';

interface NavbarProps {
  currentLang: Language;
  activePage: NavigationPage;
  onNavigatePage: (page: NavigationPage) => void;
  onSelectLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  activePage,
  onNavigatePage,
  onSelectLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLang] || translations.en;
  const isAr = currentLang === 'ar';

  const navItems: { id: NavigationPage; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact },
  ];

  const languageOptions: { code: Language; label: string; name: string }[] = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ar', label: 'AR', name: 'العربية' },
    { code: 'ur', label: 'UR', name: 'اردو' },
    { code: 'ru', label: 'RU', name: 'Русский' },
    { code: 'zh', label: 'ZH', name: '中文' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePageClick = (page: NavigationPage) => {
    onNavigatePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLanguage = (code: Language) => {
    onSelectLang(code);
    setLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Official Brand Logo matching the user-uploaded image */}
        <button
          onClick={() => handlePageClick('home')}
          className="flex items-center group focus:outline-none transition-transform hover:opacity-95"
          aria-label="Space Real Estate Home"
        >
          <SpaceLogo
            variant="horizontal"
            color="#0D1117"
            accentColor="#6B7280"
            markClassName="w-10 h-10 transition-transform group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handlePageClick(item.id)}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  isActive
                    ? 'text-gray-950 font-bold'
                    : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-950 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Language Switcher + Get in Touch Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher Dropdown (EN, AR, RU, ZH) */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 hover:bg-gray-100 border border-gray-200 transition-all focus:outline-none active:scale-95"
              aria-expanded={langMenuOpen}
              title="Select Language / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-[#C79D3B]" />
              <span className="tracking-wider uppercase">{currentLang.toUpperCase()}</span>
              <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {langMenuOpen && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-44 rounded-2xl bg-white shadow-xl border border-gray-100 py-1.5 z-50 animate-fadeIn">
                <div className="px-3 py-1.5 text-[10px] font-bold text-gray-400 tracking-wider uppercase border-b border-gray-50 mb-1">
                  {currentLang === 'ar' ? 'اختر اللغة' : currentLang === 'ur' ? 'زبان منتخب کریں' : currentLang === 'ru' ? 'Выберите язык' : currentLang === 'zh' ? '选择语言' : 'Select Language'}
                </div>
                {languageOptions.map((opt) => {
                  const isSelected = currentLang === opt.code;
                  return (
                    <button
                      key={opt.code}
                      onClick={() => handleSelectLanguage(opt.code)}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                        isSelected
                          ? 'bg-[#C79D3B]/10 text-gray-950 font-bold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${isSelected ? 'bg-[#C79D3B] text-black' : 'bg-gray-100 text-gray-600'}`}>
                          {opt.label}
                        </span>
                        <span>{opt.name}</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#C79D3B]" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Gold Pill CTA Button matching PDF: Get in Touch */}
          <button
            onClick={() => handlePageClick('contact')}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#C79D3B] hover:bg-[#B88E2D] px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-[#11161B] transition-all shadow-sm active:scale-95"
          >
            {t.common.getInTouch}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-950 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3 animate-fadeIn">
          {/* Quick Language Toggle Bar */}
          <div className="p-1.5 bg-gray-50 rounded-xl border border-gray-100">
            <div className="text-[10px] font-bold uppercase text-gray-400 px-2 py-1">
              {currentLang === 'ar' ? 'اللغة' : currentLang === 'ur' ? 'زبان' : currentLang === 'ru' ? 'Язык' : currentLang === 'zh' ? '语言' : 'Language'}
            </div>
            <div className="grid grid-cols-5 gap-1">
              {languageOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => handleSelectLanguage(opt.code)}
                  className={`py-2 px-1 rounded-lg text-xs font-bold transition-all text-center ${
                    currentLang === opt.code
                      ? 'bg-[#C79D3B] text-black shadow-sm'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/60'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageClick(item.id)}
                className={`block w-full text-left rtl:text-right px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activePage === item.id
                    ? 'bg-gray-100 text-gray-950 font-bold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => handlePageClick('contact')}
              className="w-full flex items-center justify-center rounded-full bg-[#C79D3B] hover:bg-[#B88E2D] px-5 py-3 text-sm font-semibold text-[#11161B] transition-all"
            >
              {t.common.getInTouch}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
