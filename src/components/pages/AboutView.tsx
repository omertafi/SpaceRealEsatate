import React from 'react';
import { Language, NavigationPage } from '../../types';
import { Shield, Clock, MapPin, Infinity as InfinityIcon, User } from 'lucide-react';

interface AboutViewProps {
  currentLang: Language;
  onNavigatePage: (page: NavigationPage) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ currentLang, onNavigatePage }) => {
  const t = {
    breadcrumbHome: {
      en: 'Home',
      ar: 'الرئيسية',
      ur: 'ہوم',
      ru: 'Главная',
      zh: '首页',
    }[currentLang] || 'Home',

    breadcrumbAbout: {
      en: 'About',
      ar: 'من نحن',
      ur: 'ہمارے بارے میں',
      ru: 'О нас',
      zh: '关于我们',
    }[currentLang] || 'About',

    heroTitle: {
      en: 'About Space Real Estate',
      ar: 'عن سبيس العقارية',
      ur: 'سپیْس ریئل اسٹیٹ کے بارے میں',
      ru: 'О компании Space Real Estate',
      zh: '关于 Space Real Estate',
    }[currentLang] || 'About Space Real Estate',

    heroSubtitle: {
      en: 'Property management and real estate sales, built around owners, tenants and buyers in Ajman.',
      ar: 'إدارة أملاك ومبيعات عقارية مصممة ومبنية حول راحة الملاك والمستأجرين والمشترين في عجمان.',
      ur: 'عجمان میں جائیداد کے مالکان، کرایہ داروں اور خریداروں کی سہولت کے لیے وقف پراپرٹی مینجمنٹ اور فروخت۔',
      ru: 'Управление недвижимостью и продажи, ориентированные на комфорт собственников, арендаторов и покупателей в Аджмане.',
      zh: '深耕阿联酋阿吉曼，专为业主、租客与购房投资者量身定制的专业资产管理与房地产租售服务。',
    }[currentLang] || 'Property management and real estate sales, built around owners, tenants and buyers in Ajman.',

    mainStory: {
      en: 'Space Real Estate is a property management and real estate sales company based in Ajman, United Arab Emirates. We manage residential and commercial properties on behalf of building owners from end to end — sourcing reliable tenants, structuring and administering lease contracts, collecting rental cheques, coordinating maintenance, and reporting performance back to owners on a continuous basis. Alongside our management portfolio, we work closely with leading real estate developers across the UAE to market and sell residential and investment properties.',
      ar: 'سبيس العقارية هي شركة رائدة في إدارة العقارات ومبيعات الأصول تتخذ من إمارة عجمان في دولة الإمارات العربية المتحدة مقراً رئيسياً لها. نحن ندير العقارات السكنية والتجارية نيابة عن ملاك البنايات من البداية وحتى النهاية — بدءاً من استقطاب المستأجرين الموثوقين، وهيكلة وإدارة عقود الإيجار، وتحصيل الشيكات الدورية، وتنسيق أعمال الصيانة، ورفع تقارير الأداء بشكل مستمر إلى الملاك. وإلى جانب محفظة إدارة الأملاك، نعمل بالتعاون مع كبرى شركات التطوير العقاري في دولة الإمارات لتسويق وبيع العقارات السكنية والاستثمارية.',
      ur: 'سپیْس ریئل اسٹیٹ متحدہ عرب امارات کی امارت عجمان میں قائم ایک سرکردہ پراپرٹی مینجمنٹ اور ریئل اسٹیٹ فرم ہے۔ ہم عمارتوں کے مالکان کی جانب سے رہائشی اور تجارتی جائیدادوں کا مکمل انتظام سنبھالتے ہیں — معتبر کرایہ داروں کے انتخاب اور قانونی معاہدات کی تیاری سے لے کر، باقاعدہ کرائے کے چیکس کی وصولی، دیکھ بھال کی نگرانی اور مالکان کو جامع رپورٹس کی فراہمی تک۔ اس کے ساتھ ساتھ ہم امارات کے معتبر ڈویلپرز کے ساتھ مل کر سرمایہ کاری اور رہائش کے لیے شاندار پراپرٹیز کی فروخت بھی انجام دیتے ہیں۔',
      ru: 'Space Real Estate — профессиональная компания по управлению недвижимостью и брокерским услугам, базирующаяся в эмирате Аджман, ОАЭ. Мы берем на себя полное комплексное управление жилыми и коммерческими объектами: привлечение надежных арендаторов, оформление договоров, своевременный сбор чеков, координацию ремонта и непрерывную отчетность перед собственниками. Кроме того, мы тесно сотрудничаем с крупнейшими девелоперами ОАЭ в сфере продаж новостроек и готового жилья.',
      zh: 'Space Real Estate 是一家总部设在阿联酋阿吉曼的综合性房产运营与代理机构。我们代表建筑业主提供全生命周期的商业及住宅资产托管服务——包括严谨筛选优质租客、规范制定租赁合同、准时托收支票、全面监督设施维保以及呈交详尽财务月报。与此同时，我们与阿联酋各大龙头房地产开发商保持深度战略合作，为海内外客户提供一手楼盘认购及优质二手房买卖咨询。',
    }[currentLang] || '',

    missionTag: {
      en: 'OUR MISSION',
      ar: 'رسالتنا',
      ur: 'ہمارا مشن',
      ru: 'НАША МИССИЯ',
      zh: '企业使命',
    }[currentLang] || 'OUR MISSION',

    missionText: {
      en: 'To give property owners complete peace of mind by managing every aspect of their real estate assets — from tenant to contract to cheque — with transparency, discipline and care.',
      ar: 'منح ملاك العقارات راحة البال المطلقة من خلال إدارة كافة جوانب أصولهم العقارية — من المستأجر إلى العقد والشيك — بأعلى مستويات الشفافية والانضباط والاهتمام.',
      ur: 'جائیداد کے مالکان کو مکمل ذہنی سکون اور اطمینان فراہم کرنا، ان کے تمام اثاثوں کو شفافیت، نظم و ضبط اور انتہائی پیشہ ورانہ مہارت کے ساتھ سنبھال کر — کرایہ دار سے لے کر معاہدے اور چیک تک۔',
      ru: 'Обеспечить собственникам недвижимости абсолютное спокойствие и уверенность, управляя каждым аспектом активов — от арендатора до договора и чека — с максимальной прозрачностью, дисциплиной и заботой.',
      zh: '通过透明、自律和严谨的专业管理，全面掌控资产运营的每个环节——从租客挑选到合同签订直至支票归集，为业主带来真正的从容与安心。',
    }[currentLang] || '',

    visionTag: {
      en: 'OUR VISION',
      ar: 'رؤيتنا',
      ur: 'ہمارا وژن',
      ru: 'НАШЕ ВИДЕНИЕ',
      zh: '企业愿景',
    }[currentLang] || 'OUR VISION',

    visionText: {
      en: 'To be Ajman’s most trusted name in full-service property management and real estate sales — recognised for reliability and consistent results.',
      ar: 'أن نكون الاسم الأكثر ثوقاً في عجمان في خدمات إدارة الأملاك المتكاملة ومبيعات العقارات — المعروفين بالموثوقية والنتائج المستمرة والمثمرة.',
      ur: 'عجمان میں پراپرٹی مینجمنٹ اور ریئل اسٹیٹ سیلز کا سب سے قابل اعتماد نام بننا — جو بھروسے، عمدہ نتائج اور مسلسل کامیابی کے لیے جانا جائے۔',
      ru: 'Быть самым надежным и авторитетным именем в Аджмане в сфере комплексного управления недвижимостью и продаж, известным безупречной репутацией и стабильными результатами.',
      zh: '成为阿吉曼最具信赖度的全权物业资产托管与地产销售品牌——以无可比拟的稳健信誉与持续卓越的丰硕业绩闻名遐迩。',
    }[currentLang] || '',

    valuesBadge: {
      en: 'WHAT WE STAND FOR',
      ar: 'ما نؤمن به',
      ur: 'ہماری اقدار',
      ru: 'НАШИ ЦЕННОСТИ',
      zh: '核心价值',
    }[currentLang] || 'WHAT WE STAND FOR',

    valuesTitle: {
      en: 'Our Values',
      ar: 'قيمنا الأساسية',
      ur: 'ہماری بنیادی اقدار',
      ru: 'Наши ключевые ценности',
      zh: '价值准则',
    }[currentLang] || 'Our Values',

    val1Title: {
      en: 'Transparency',
      ar: 'الشفافية',
      ur: 'شفافیت',
      ru: 'Прозрачность',
      zh: '公开透明',
    }[currentLang] || 'Transparency',

    val1Desc: {
      en: 'No surprises — owners see the real status, always.',
      ar: 'لا مفاجآت — يرى الملاك الوضع الحقيقي لعقاراتهم دائماً.',
      ur: 'کوئی پوشیدہ امور نہیں — مالکان ہمیشہ اپنے اثاثوں کی حقیقی صورتحال دیکھتے ہیں۔',
      ru: 'Никаких скрытых деталей — владельцы всегда видят реальное состояние своих объектов.',
      zh: '坚决杜绝信息不对称——业主始终能实时了解物业的真实动态与财务细节。',
    }[currentLang] || '',

    val2Title: {
      en: 'Reliability',
      ar: 'الموثوقية',
      ur: 'پابندی اور موثوقیت',
      ru: 'Надежность',
      zh: '信守承诺',
    }[currentLang] || 'Reliability',

    val2Desc: {
      en: 'Every cycle followed up on schedule, without fail.',
      ar: 'متابعة كل دورة تحصيل وصيانة في موعدها دون أي تقاعس.',
      ur: 'وصولی اور دیکھ بھال کا ہر مرحلہ بغیر کسی تاخیر کے وقت پر مکمل کیا جاتا ہے۔',
      ru: 'Каждый цикл сбора платежей и обслуживания выполняется строго по расписанию.',
      zh: '无论是租金结算还是维保响应，均按严苛的时间表精准交付，绝不懈怠。',
    }[currentLang] || '',

    val3Title: {
      en: 'Local Expertise',
      ar: 'الخبرة المحلية',
      ur: 'مقامی مہارت',
      ru: 'Экспертиза рынка',
      zh: '深厚积淀',
    }[currentLang] || 'Local Expertise',

    val3Desc: {
      en: 'Deep, on-the-ground knowledge of the Ajman market.',
      ar: 'فهم عميق وتواجد ميداني مستمر في سوق عقارات عجمان.',
      ur: 'عجمان کی مارکیٹ اور ریئل اسٹیٹ کے رجحانات کی جامع اور عمیق معلومات۔',
      ru: 'Глубокое практическое понимание рынка недвижимости и законодательства Аджмана.',
      zh: '扎根阿吉曼本地市场多年，拥有敏锐的市场洞察力与广泛的本土协作网络。',
    }[currentLang] || '',

    val4Title: {
      en: 'Relationships',
      ar: 'بناء العلاقات',
      ur: 'پائیدار تعلقات',
      ru: 'Отношения',
      zh: '长远共赢',
    }[currentLang] || 'Relationships',

    val4Desc: {
      en: 'Properties and partnerships managed for the long term.',
      ar: 'إدارة العقارات والشراكات كعلاقات طويلة الأمد ومثمرة.',
      ur: 'ہم جائیدادوں اور شراکت داروں کے ساتھ طویل المدتی اور پائیدار تعلقات استوار کرتے ہیں۔',
      ru: 'Долгосрочное взаимовыгодное партнерство и бережное отношение к каждому активу.',
      zh: '致力于构建持久互信的伙伴关系，与客户携手实现长远稳健发展。',
    }[currentLang] || '',

    leadershipBadge: {
      en: 'OWNERSHIP & LEADERSHIP',
      ar: 'القيادة والشركاء',
      ur: 'قیادت اور مالکان',
      ru: 'РУКОВОДСТВО И ПАРТНЕРЫ',
      zh: '管理层与合伙人',
    }[currentLang] || 'OWNERSHIP & LEADERSHIP',

    leadershipTitle: {
      en: 'Founding Partners & Leadership',
      ar: 'الشركاء المؤسسون والملاك',
      ur: 'بانی شراکت دار اور قیادت',
      ru: 'Основатели и руководство компании',
      zh: '创始合伙人与核心管理团队',
    }[currentLang] || 'Founding Partners & Leadership',

    leadershipDesc: {
      en: 'The leadership team and owners overseeing real estate operations and portfolio growth in Ajman',
      ar: 'فريق الإدارة والملاك المشرفون على العمليات العقارية وتنمية المحافظ في عجمان',
      ur: 'انتظامی ٹیم اور مالکان جو عجمان میں ریئل اسٹیٹ آپریشنز اور پورٹ فولیو کی نگرانی کرتے ہیں',
      ru: 'Команда руководителей и собственников, направляющая развитие активов в Аджмане',
      zh: '掌舵阿吉曼房产运营、全权资产托管及投资组合增长的核心领导团队',
    }[currentLang] || '',

    partnerLabel: {
      en: 'Partner / Owner',
      ar: 'الشريك المؤسس',
      ur: 'شراکت دار / مالک',
      ru: 'Партнер / Совладелец',
      zh: '合伙人 / 负责人',
    }[currentLang] || 'Partner / Owner',

    partnerRoles: [
      {
        en: 'Managing Partner',
        ar: 'الشريك الإداري',
        ur: 'منیجنگ پارٹنر',
        ru: 'Управляющий партнер',
        zh: '管理合伙人',
      }[currentLang] || 'Managing Partner',
      {
        en: 'Partner - Property Management',
        ar: 'شريك تنفيذي - إدارة الأملاك',
        ur: 'پارٹنر - پراپرٹی مینجمنٹ',
        ru: 'Партнер - Управление недвижимостью',
        zh: '合伙人 · 物业托管运营',
      }[currentLang] || 'Partner - Property Management',
      {
        en: 'Partner - Real Estate Sales',
        ar: 'شريك تنفيذي - المبيعات',
        ur: 'پارٹنر - ریئل اسٹیٹ سیلز',
        ru: 'Партнер - Продажи и маркетинг',
        zh: '合伙人 · 房产投资销售',
      }[currentLang] || 'Partner - Real Estate Sales',
      {
        en: 'Strategic Partner',
        ar: 'شريك استراتيجي',
        ur: 'اسٹریٹجک پارٹنر',
        ru: 'Стратеговский партнер',
        zh: '战略合伙人',
      }[currentLang] || 'Strategic Partner',
    ],

    partnerPlaceholder: {
      en: 'Reserved placeholder for photo and executive profile details.',
      ar: 'مساحة مخصصة للنبذة التعريفية والتفاصيل الخاصة بالمالك.',
      ur: 'تصویر اور تعارفی معلومات کے لیے مخصوص جگہ۔',
      ru: 'Место зарезервировано для фотографии и биографии руководителя.',
      zh: '照片与高管资历履历预留展示位。',
    }[currentLang] || '',
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. HERO BANNER (Dark #0D1117) matching PDF Page 2 */}
      <section className="bg-[#0D1117] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-left rtl:text-right">
          {/* Breadcrumb */}
          <div className="text-xs text-slate-400 mb-4 flex items-center gap-2">
            <button
              onClick={() => onNavigatePage('home')}
              className="hover:text-white transition-colors"
            >
              {t.breadcrumbHome}
            </button>
            <span>/</span>
            <span className="text-[#C79D3B]">{t.breadcrumbAbout}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] mb-4">
            {t.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. MAIN STORY PARAGRAPH */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-14">
            {t.mainStory}
          </p>

          {/* 3. MISSION & VISION CARDS (2 Columns) matching PDF */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {/* Mission */}
            <div className="bg-[#F6F6F4] rounded-2xl p-8 sm:p-9 border border-black/[0.04]">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C79D3B] block mb-3">
                {t.missionTag}
              </span>
              <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
                {t.missionText}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#F6F6F4] rounded-2xl p-8 sm:p-9 border border-black/[0.04]">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C79D3B] block mb-3">
                {t.visionTag}
              </span>
              <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
                {t.visionText}
              </p>
            </div>
          </div>

          {/* 4. WHAT WE STAND FOR -> OUR VALUES */}
          <div className="pt-8 border-t border-gray-100">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2">
                {t.valuesBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                {t.valuesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* 1. Transparency */}
              <div className="bg-[#F8F8F6] rounded-xl p-6 border border-black/[0.03]">
                <div className="w-8 h-8 flex items-center justify-center mb-4 text-[#C79D3B]">
                  <Shield className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-gray-950 text-sm mb-2">
                  {t.val1Title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {t.val1Desc}
                </p>
              </div>

              {/* 2. Reliability */}
              <div className="bg-[#F8F8F6] rounded-xl p-6 border border-black/[0.03]">
                <div className="w-8 h-8 flex items-center justify-center mb-4 text-[#C79D3B]">
                  <Clock className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-gray-950 text-sm mb-2">
                  {t.val2Title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {t.val2Desc}
                </p>
              </div>

              {/* 3. Local Expertise */}
              <div className="bg-[#F8F8F6] rounded-xl p-6 border border-black/[0.03]">
                <div className="w-8 h-8 flex items-center justify-center mb-4 text-[#C79D3B]">
                  <MapPin className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-gray-950 text-sm mb-2">
                  {t.val3Title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {t.val3Desc}
                </p>
              </div>

              {/* 4. Relationships */}
              <div className="bg-[#F8F8F6] rounded-xl p-6 border border-black/[0.03]">
                <div className="w-8 h-8 flex items-center justify-center mb-4 text-[#C79D3B]">
                  <InfinityIcon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-gray-950 text-sm mb-2">
                  {t.val4Title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {t.val4Desc}
                </p>
              </div>
            </div>
          </div>

          {/* 5. OWNERS & LEADERSHIP TEAM */}
          <div className="pt-16 mt-16 border-t border-gray-100">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2">
                {t.leadershipBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                {t.leadershipTitle}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-md mx-auto">
                {t.leadershipDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[1, 2, 3, 4].map((idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F8F6] rounded-xl p-6 border border-black/[0.03] flex flex-col items-center text-center hover:border-black/10 transition-colors"
                >
                  {/* Photo Placeholder */}
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 mb-4 shadow-sm">
                    <User className="w-8 h-8 text-gray-400 stroke-[1.5]" />
                  </div>
                  <h3 className="font-bold text-gray-950 text-sm mb-1">
                    {`${t.partnerLabel} ${idx}`}
                  </h3>
                  <span className="text-[11px] text-[#C79D3B] font-bold mb-2 uppercase tracking-wide">
                    {t.partnerRoles[idx - 1]}
                  </span>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {t.partnerPlaceholder}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
