import React from 'react';
import { Language, NavigationPage } from '../types';
import { SpaceLogo } from './SpaceLogo';
import { translations } from '../i18n/translations';

interface FooterProps {
  currentLang: Language;
  onNavigatePage: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigatePage }) => {
  const isAr = currentLang === 'ar';
  const t = translations[currentLang] || translations.en;

  const handleNav = (page: NavigationPage) => {
    onNavigatePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerTexts = {
    bannerTitle: currentLang === 'ar'
      ? 'دعنا ندير عقارك أو نجد استثمارك القادم'
      : currentLang === 'ur'
      ? 'ہمیں اپنی پراپرٹی کا انتظام سونپیں یا اگلی سرمایہ کاری تلاش کریں'
      : currentLang === 'ru'
      ? 'Доверьте нам управление или найдите идеальный объект'
      : currentLang === 'zh'
      ? '让我们为您管理资产或寻找下一个优质投资'
      : 'Let’s Manage or Find Your Next Property',
    bannerSubtitle: currentLang === 'ar'
      ? 'عجمان، دولة الإمارات العربية المتحدة'
      : currentLang === 'ur'
      ? 'عجمان، متحدہ عرب امارات'
      : currentLang === 'ru'
      ? 'Аджман, Объединенные Арабские Эмираты'
      : currentLang === 'zh'
      ? '阿吉曼，阿拉伯联合酋长国'
      : 'Ajman, United Arab Emirates',
    contactBtn: t.nav.contact,
    brandDesc: currentLang === 'ar'
      ? 'إدارة أملاك متكاملة ووساطة بيع وشراء العقارات في إمارة عجمان، دولة الإمارات العربية المتحدة.'
      : currentLang === 'ur'
      ? 'عجمان، متحدہ عرب امارات میں مکمل پراپرٹی مینجمنٹ اور ریئل اسٹیٹ کی خرید و فروخت۔'
      : currentLang === 'ru'
      ? 'Комплексное управление недвижимостью и брокерские услуги в Аджмане, ОАЭ.'
      : currentLang === 'zh'
      ? '阿联酋阿吉曼专业物业全权管理与优质房地产租售经纪服务。'
      : 'Property management and real estate sales in Ajman, United Arab Emirates.',
    quickLinks: currentLang === 'ar' ? 'روابط سريعة' : currentLang === 'ur' ? 'اہم روابط' : currentLang === 'ru' ? 'БЫСТРЫЕ ССЫЛКИ' : currentLang === 'zh' ? '快速链接' : 'QUICK LINKS',
    servicesTitle: currentLang === 'ar' ? 'الخدمات' : currentLang === 'ur' ? 'خدمات' : currentLang === 'ru' ? 'УСЛУГИ' : currentLang === 'zh' ? '服务项目' : 'SERVICES',
    contactTitle: currentLang === 'ar' ? 'التواصل' : currentLang === 'ur' ? 'رابطہ' : currentLang === 'ru' ? 'КОНТАКТЫ' : currentLang === 'zh' ? '联系方式' : 'CONTACT',
    service1: currentLang === 'ar' ? 'استقطاب المستأجرين' : currentLang === 'ur' ? 'کرایہ داروں کی تلاش' : currentLang === 'ru' ? 'Поиск арендаторов' : currentLang === 'zh' ? '租客甄选招租' : 'Tenant Sourcing',
    service2: currentLang === 'ar' ? 'إدارة عقود الإيجار' : currentLang === 'ur' ? 'معاہدات کی دیکھ بھال' : currentLang === 'ru' ? 'Управление договорами' : currentLang === 'zh' ? '租赁合同管理' : 'Lease Management',
    service3: currentLang === 'ar' ? 'تحصيل الإيجارات والشيكات' : currentLang === 'ur' ? 'کرایوں کی وصولی' : currentLang === 'ru' ? 'Сбор арендной платы' : currentLang === 'zh' ? '租金收取与财务结算' : 'Rent Collection',
    service4: currentLang === 'ar' ? 'مبيعات وتسويق العقارات' : currentLang === 'ur' ? 'پراپرٹی کی فروخت' : currentLang === 'ru' ? 'Продажа недвижимости' : currentLang === 'zh' ? '房产销售与投资咨询' : 'Real Estate Sales',
    location: currentLang === 'ar' ? 'عجمان، الإمارات العربية المتحدة' : currentLang === 'ur' ? 'عجمان، متحدہ عرب امارات' : currentLang === 'ru' ? 'Аджман, ОАЭ' : currentLang === 'zh' ? '阿吉曼，阿联酋' : 'Ajman, UAE',
    rights: '© 2026 Space Real Estate. All rights reserved.',
  };

  return (
    <>
      {/* Pre-Footer Banner (Dark #0C1014) matching PDF */}
      <section className="bg-[#0C1014] text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight">
              {footerTexts.bannerTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {footerTexts.bannerSubtitle}
            </p>
          </div>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 rounded-full bg-[#C79D3B] hover:bg-[#B88E2D] px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#11161B] transition-all shadow-md shrink-0 active:scale-95"
          >
            <span>{footerTexts.contactBtn}</span>
            <span className="rtl:rotate-180">→</span>
          </button>
        </div>
      </section>

      {/* Main Corporate Footer (#080B0E) matching PDF */}
      <footer className="bg-[#080B0E] text-slate-400 py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
            {/* Column 1: Brand */}
            <div>
              <div className="mb-4 inline-block">
                <SpaceLogo
                  variant="horizontal"
                  size="sm"
                  color="#FFFFFF"
                  accentColor="#C79D3B"
                  markClassName="w-8 h-8"
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {footerTexts.brandDesc}
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                {footerTexts.quickLinks}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                    {t.nav.home}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                    {t.nav.about}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                    {t.nav.services}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                    {t.nav.contact}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                {footerTexts.servicesTitle}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                    {footerTexts.service1}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                    {footerTexts.service2}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                    {footerTexts.service3}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                    {footerTexts.service4}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                {footerTexts.contactTitle}
              </h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <p>{footerTexts.location}</p>
                <p>
                  <a href="tel:+971505795412" className="hover:text-white transition-colors block dir-ltr text-start">
                    +971 50 579 5412
                  </a>
                </p>
                <p>
                  <a href="mailto:alalfy@accountant.com" className="hover:text-white transition-colors block">
                    alalfy@accountant.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 text-xs text-slate-500 text-center sm:text-left rtl:sm:text-right">
            {footerTexts.rights}
          </div>
        </div>
      </footer>
    </>
  );
};
