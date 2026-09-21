import React from 'react';
import { Language, NavigationPage } from '../../types';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Building2, 
  Key, 
  Shield, 
  Infinity as InfinityIcon
} from 'lucide-react';

interface HomeViewProps {
  currentLang: Language;
  onNavigatePage: (page: NavigationPage) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ currentLang, onNavigatePage }) => {
  const isRtl = currentLang === 'ar' || currentLang === 'ur';

  const t = {
    pillTag: {
      en: 'PROPERTY MANAGEMENT · REAL ESTATE SALES',
      ar: 'إدارة الأملاك · مبيعات العقارات',
      ur: 'پراپرٹی مینجمنٹ · رئیل اسٹیٹ کی فروخت',
      ru: 'УПРАВЛЕНИЕ НЕДВИЖИМОСТЬЮ · ПРОДАЖА',
      zh: '物业全权托管 · 房产优质租售',
    }[currentLang] || 'PROPERTY MANAGEMENT · REAL ESTATE SALES',

    heroTitle: {
      en: 'Complete Property Management & Real Estate Sales in Ajman',
      ar: 'إدارة أملاك متكاملة ومبيعات عقارية في عجمان',
      ur: 'عجمان میں پراپرٹی مینجمنٹ اور ریئل اسٹیٹ کی جامع خدمات',
      ru: 'Комплексное управление недвижимостью и продажи в Аджмане',
      zh: '阿联酋阿吉曼专业物业全权托管与房地产销售服务',
    }[currentLang] || 'Complete Property Management & Real Estate Sales in Ajman',

    heroSubtitle: {
      en: 'We find your tenants, manage the contracts, collect the cheques, coordinate maintenance and report back — so owning property in Ajman stays effortless.',
      ar: 'نستقطب المستأجرين الموثوقين، نصيغ وندير العقود، نحصل الشيكات، ننسق أعمال الصيانة ونرسل التقارير الدورية — لتنعم بملكية عقارية في عجمان خالية تماماً من المتاعب.',
      ur: 'ہم قابل اعتماد کرایہ داروں کا انتخاب کرتے ہیں، معاہدات جاری کرتے ہیں، کرایہ اور چیکس وصول کرتے ہیں، دیکھ بھال سنبھالتے ہیں اور باقاعدہ رپورٹ فراہم کرتے ہیں تاکہ عجمان میں جائیداد کی ملکیت پرسکون اور منافع بخش رہے۔',
      ru: 'Мы находим надежных арендаторов, оформляем договоры, собираем чеки, координируем обслуживание и предоставляем отчеты — владение недвижимостью в Аджмане становится простым и надежным.',
      zh: '我们为您甄选优质租客、规范租赁合同、按时收取租金支票、全程统筹维修并定期提供财务汇报——让您在阿吉曼的房产投资轻松无忧。',
    }[currentLang] || 'We find your tenants, manage the contracts, collect the cheques, coordinate maintenance and report back — so owning property in Ajman stays effortless.',

    getInTouch: {
      en: 'Get in Touch',
      ar: 'تواصل معنا',
      ur: 'ہم سے رابطہ کریں',
      ru: 'Связаться с нами',
      zh: '即刻咨询',
    }[currentLang] || 'Get in Touch',

    ourServices: {
      en: 'Our Services',
      ar: 'خدماتنا',
      ur: 'ہماری خدمات',
      ru: 'Наши услуги',
      zh: '服务项目',
    }[currentLang] || 'Our Services',

    overview: {
      en: 'Space Real Estate is a property management and real estate sales company based in Ajman. We manage buildings end to end on behalf of owners, and partner with leading UAE developers to help buyers find their next property.',
      ar: 'سبيس العقارية هي شركة رائدة في إدارة العقارات ومبيعات الأصول تتخذ من إمارة عجمان مقراً لها. ندير الأبراج والبنايات السكنية والتجارية بالكامل نيابة عن الملاك، ونتعاون مع كبرى شركات التطوير في دولة الإمارات لمساعدة المشترين في العثور على عقارهم القادم.',
      ur: 'سپیْس ریئل اسٹیٹ عجمان میں قائم ایک سرکردہ ادارہ ہے جو جائیدادوں کے جامع انتظام اور اعلیٰ درجے کی بروکریج خدمات میں مہارت رکھتا ہے۔ ہم پوری ذمہ داری کے ساتھ عمارتوں کا انتظام سنبھالتے ہیں اور متحدہ عرب امارات کے بڑے ڈویلپرز کے ساتھ مل کر خریداروں کی رہنمائی کرتے ہیں۔',
      ru: 'Space Real Estate — ведущая компания по управлению недвижимостью и продажам со штаб-квартирой в Аджмане. Мы управляем зданиями от лица собственников и сотрудничаем с крупнейшими застройщиками ОАЭ.',
      zh: 'Space Real Estate 是一家总部位于阿吉曼的专业物业资产管理与房地产经纪机构。我们代表业主全权管理住宅及商业大厦，并携手阿联酋知名品牌开发商协助买家发掘最具潜力的投资物业。',
    }[currentLang] || '',

    badgeReporting: {
      en: 'Transparent Reporting',
      ar: 'تقارير شفافة',
      ur: 'شفاف مالیاتی رپورٹس',
      ru: 'Прозрачная отчетность',
      zh: '透明财务报表',
    }[currentLang] || 'Transparent Reporting',

    badgeSchedule: {
      en: 'Reliable, On-Schedule',
      ar: 'التزام دقيق بالمواعيد',
      ur: 'بروقت اور قابل اعتماد',
      ru: 'Точно в срок',
      zh: '高效准时履约',
    }[currentLang] || 'Reliable, On-Schedule',

    badgeExpertise: {
      en: 'Local Ajman Expertise',
      ar: 'خبرة عجمان المحلية',
      ur: 'عجمان کی مقامی مہارت',
      ru: 'Экспертиза в Аджмане',
      zh: '阿吉曼本土专业深耕',
    }[currentLang] || 'Local Ajman Expertise',

    whatWeDo: {
      en: 'WHAT WE DO',
      ar: 'ماذا نقدم',
      ur: 'ہماری بنیادی خدمات',
      ru: 'НАШИ НАПРАВЛЕНИЯ',
      zh: '业务范畴',
    }[currentLang] || 'WHAT WE DO',

    twoWays: {
      en: 'Two Ways We Help',
      ar: 'مساران لمساعدتك في النجاح',
      ur: 'ہماری دو بنیادی خدمات',
      ru: 'Два ключевых направления работы',
      zh: '两大核心服务维度',
    }[currentLang] || 'Two Ways We Help',

    card1Title: {
      en: 'Property Management',
      ar: 'إدارة الأملاك والعقارات',
      ur: 'پراپرٹی مینجمنٹ',
      ru: 'Управление недвижимостью',
      zh: '物业全权委托管理',
    }[currentLang] || 'Property Management',

    card1Desc: {
      en: 'Tenant sourcing, lease contracts, rent & cheque collection, maintenance coordination and regular owner reporting — handled end to end.',
      ar: 'استقطاب المستأجرين، صياغة عقود الإيجار، تحصيل الإيجارات والشيكات، تنسيق أعمال الصيانة، وإرسال تقارير دورية للمالك — إدارة كاملة وشاملة.',
      ur: 'کرایہ داروں کی جانچ، معاہدات کا اجرا، بروقت کرایہ اور چیکس کی وصولی، دیکھ بھال اور باقاعدہ رپورٹس — مکمل انتظام۔',
      ru: 'Поиск арендаторов, договоры аренды, сбор чеков, координация ремонта и регулярная отчетность перед собственниками под ключ.',
      zh: '租客严格背景审核、官方租赁合同登记、租金支票按时归集、工程维保全面协同及业主月度透明对账——端到端全方位托付。',
    }[currentLang] || '',

    card2Title: {
      en: 'Real Estate Sales',
      ar: 'مبيعات وتسويق العقارات',
      ur: 'ریئل اسٹیٹ کی فروخت',
      ru: 'Продажа недвижимости',
      zh: '优质房地产销售与投资',
    }[currentLang] || 'Real Estate Sales',

    card2Desc: {
      en: 'We partner with leading UAE developers to market and sell off-plan and ready residential & investment properties.',
      ar: 'نتعاون مع كبرى شركات التطوير العقاري في دولة الإمارات لتسويق وبيع المشاريع قيد الإنشاء والعقارات السكنية والاستثمارية الجاهزة.',
      ur: 'ہم متحدہ عرب امارات کے نمایاں ڈویلپرز کے ساتھ مل کر زیر تعمیر اور تیار رہائشی و تجارتی پراپرٹیز کی محفوظ خرید و فروخت کرواتے ہیں۔',
      ru: 'Партнерство с ведущими застройщиками ОАЭ для реализации строящихся и готовых объектов жилой и инвестиционной недвижимости.',
      zh: '携手阿联酋顶尖品牌开发商，直销各类期房新盘、成熟现房以及高净值商业投资物业。',
    }[currentLang] || '',

    learnMore: {
      en: 'Learn more',
      ar: 'اعرف المزيد',
      ur: 'مزید جانیں',
      ru: 'Подробнее',
      zh: '了解详情',
    }[currentLang] || 'Learn more',

    whyUsBadge: {
      en: 'WHY CHOOSE US',
      ar: 'لماذا تختارنا',
      ur: 'ہمارا انتخاب کیوں؟',
      ru: 'ПОЧЕМУ МЫ',
      zh: '核心优势',
    }[currentLang] || 'WHY CHOOSE US',

    whyUsTitle: {
      en: 'Built On Trust & Follow-Through',
      ar: 'مبنيون على الثقة والالتزام التام',
      ur: 'اعتماد اور مسلسل پیش رفت پر مبنی',
      ru: 'Доверие, прозрачность и ответственность',
      zh: '立足诚信 · 坚守承诺 · 卓越履约',
    }[currentLang] || 'Built On Trust & Follow-Through',

    why1Title: {
      en: 'Transparency',
      ar: 'الشفافية',
      ur: 'شفافیت',
      ru: 'Прозрачность',
      zh: '全流程透明',
    }[currentLang] || 'Transparency',

    why1Desc: {
      en: 'Owners always know the status of tenants, contracts and cheques.',
      ar: 'يعرف الملاك دائمًا وبوضوح تام حالة المستأجرين والعقود والشيكات المحصلة.',
      ur: 'مالکان کو ہمیشہ کرایہ داروں، معاہدات اور چیکس کی درست صورتحال سے باخبر رکھا جاتا ہے۔',
      ru: 'Собственники всегда в курсе актуального статуса арендаторов, договоров и платежей.',
      zh: '让业主时刻精准掌握租客状态、合同执行进度与支票结算细节。',
    }[currentLang] || '',

    why2Title: {
      en: 'Reliability',
      ar: 'الموثوقية',
      ur: 'موثوقیت',
      ru: 'Надежность',
      zh: '专业严谨',
    }[currentLang] || 'Reliability',

    why2Desc: {
      en: 'Collection, maintenance and renewals followed up on schedule.',
      ar: 'متابعة دقيقة لتحصيل الإيجارات وأعمال الصيانة وتجديد العقود في مواعيدها المحددة.',
      ur: 'کرائے کی وصولی، دیکھ بھال اور تجدید معاہدات کی بروقت اور مستعد پیروی۔',
      ru: 'Сбор платежей, техническое обслуживание и продление договоров строго по графику.',
      zh: '租金催收、维修保全与合同续签均严格按计划日程精准推进。',
    }[currentLang] || '',

    why3Title: {
      en: 'Local Expertise',
      ar: 'الخبرة المحلية',
      ur: 'مقامی مہارت',
      ru: 'Местная экспертиза',
      zh: '本土智慧',
    }[currentLang] || 'Local Expertise',

    why3Desc: {
      en: 'Deep, on-the-ground knowledge of the Ajman property market.',
      ar: 'معرفة ميدانية عميقة ومحدثة بسوق العقارات والقوانين في إمارة عجمان.',
      ur: 'عجمان کے رئیل اسٹیٹ مارکیٹ اور قوانین میں گہرا عملی تجربہ اور علم۔',
      ru: 'Глубокое знание рынка недвижимости и законодательства Аджмана.',
      zh: '深谙阿吉曼本地房地产发展脉络、政策法规与租赁动态。',
    }[currentLang] || '',

    why4Title: {
      en: 'Long-Term Relationships',
      ar: 'علاقات طويلة الأمد',
      ur: 'طویل مدتی تعلقات',
      ru: 'Долгосрочные отношения',
      zh: '长期伙伴',
    }[currentLang] || 'Long-Term Relationships',

    why4Desc: {
      en: 'Properties and partnerships managed as ongoing relationships.',
      ar: 'نتعامل مع العقارات والشراكات كعلاقة استراتيجية مستمرة تنمو مع الوقت.',
      ur: 'ہم جائیدادوں اور شراکت داریوں کو پائیدار اور دیرپا بنیادوں پر استوار کرتے ہیں۔',
      ru: 'Управление объектами и партнерство, ориентированные на долгосрочный успех.',
      zh: '秉承长期主义理念，精心打磨资产价值并陪伴客户财富稳健增值。',
    }[currentLang] || '',

    processBadge: {
      en: 'OUR PROCESS',
      ar: 'منهجية العمل',
      ur: 'ہمارا طریقہ کار',
      ru: 'ПРОЦЕСС РАБОТЫ',
      zh: '规范流程',
    }[currentLang] || 'OUR PROCESS',

    processTitle: {
      en: 'How We Work',
      ar: 'كيف نعمل',
      ur: 'ہم کیسے کام کرتے ہیں',
      ru: 'Как мы работаем',
      zh: '服务协作流程',
    }[currentLang] || 'How We Work',

    step1Title: {
      en: 'Consultation',
      ar: 'الاستشارة والتقييم',
      ur: 'مشاورت اور تخمینہ',
      ru: 'Консультация',
      zh: '评估咨询',
    }[currentLang] || 'Consultation',

    step1Desc: {
      en: 'We review the property and agree on terms.',
      ar: 'نعاين العقار ونحدد القيمة الإيجارية أو السوقية ونتفق على الشروط.',
      ur: 'ہم پراپرٹی کا معائنہ کر کے مارکیٹ ویلیو کا جائزہ لیتے ہیں اور شرائط طے کرتے ہیں۔',
      ru: 'Оцениваем объект, определяем арендную ставку и согласовываем условия.',
      zh: '实地勘测房产状况，科学评估租金水准，确认委托方案。',
    }[currentLang] || '',

    step2Title: {
      en: 'Tenant Sourcing',
      ar: 'استقطاب المستأجرين',
      ur: 'کرایہ داروں کی جانچ',
      ru: 'Подбор арендаторов',
      zh: '甄选招租',
    }[currentLang] || 'Tenant Sourcing',

    step2Desc: {
      en: 'We market and screen prospective tenants.',
      ar: 'نسوق للوحدات الشاغرة وندقق في خلفية المستأجرين المتقدمين بعناية.',
      ur: 'ہم خالی یونٹس کی تشہیر کرتے ہیں اور معتبر کرایہ داروں کا چناؤ کرتے ہیں۔',
      ru: 'Маркетинг свободных площадей и строгая проверка будущих арендаторов.',
      zh: '多渠道发布优质房源，严格筛选背景良好且信誉可靠的承租方。',
    }[currentLang] || '',

    step3Title: {
      en: 'Contract & Collection',
      ar: 'العقود والتحصيل',
      ur: 'معاہدات اور وصولی',
      ru: 'Договоры и оплата',
      zh: '签约结算',
    }[currentLang] || 'Contract & Collection',

    step3Desc: {
      en: 'We issue the lease and collect cheques on schedule.',
      ar: 'نصدر عقود الإيجار المعتمدة ونحصل الشيكات وفق الجداول المتفق عليها.',
      ur: 'ہم قانونی معاہدات جاری کرتے ہیں اور مقررہ تاریخوں پر چیکس وصول کرتے ہیں۔',
      ru: 'Оформляем официальный договор аренды и собираем чеки по согласованному графику.',
      zh: '办理合法合规的租赁签约认证，按期归集租金支票与押金。',
    }[currentLang] || '',

    step4Title: {
      en: 'Ongoing Management',
      ar: 'الإدارة المستمرة',
      ur: 'مسلسل انتظام',
      ru: 'Постоянное управление',
      zh: '全程运营',
    }[currentLang] || 'Ongoing Management',

    step4Desc: {
      en: 'Maintenance and regular reports, month after month.',
      ar: 'متابعة أعمال الصيانة وتزويد الملاك بتقارير شهرية دورية واضحة ومفصلة.',
      ur: 'دیکھ بھال کے تمام امور کی نگرانی اور مالکان کو ماہانہ تفصیلی رپورٹس۔',
      ru: 'Координация текущего обслуживания и подробная регулярная отчетность.',
      zh: '全天候响应租客维修需求，定期呈递详尽透明的资产运营月报。',
    }[currentLang] || '',
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. HERO SECTION (Dark Charcoal / Black #0D1117) */}
      <section className="relative bg-[#0D1117] text-white py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left rtl:text-right rtl:items-start">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C79D3B] px-3.5 py-1 text-[11px] font-bold tracking-wider uppercase text-black mb-6">
              {t.pillTag}
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-white leading-[1.18] mb-5">
              {t.heroTitle}
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
              {t.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={() => onNavigatePage('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C79D3B] hover:bg-[#B88E2D] px-6 py-3 text-xs sm:text-sm font-bold text-black transition-all shadow-md active:scale-95"
              >
                <span>{t.getInTouch}</span>
                <span className="rtl:rotate-180">→</span>
              </button>

              <button
                onClick={() => onNavigatePage('services')}
                className="inline-flex items-center justify-center rounded-full bg-[#161B22] hover:bg-[#1E242C] border border-white/15 px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all active:scale-95"
              >
                <span>{t.ourServices}</span>
              </button>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-2 border-t border-white/10 w-full">
              <a
                href="tel:+971505795412"
                className="inline-flex items-center gap-2 hover:text-white transition-colors dir-ltr"
              >
                <Phone className="w-3.5 h-3.5 text-[#C79D3B]" />
                <span>+971 50 579 5412</span>
              </a>

              <a
                href="mailto:alalfy@accountant.com"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C79D3B]" />
                <span>alalfy@accountant.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Exact Card matching user screenshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px] sm:max-w-[400px] aspect-square rounded-[36px] bg-[#111216] border border-white/10 flex items-center justify-center relative shadow-2xl">
              {/* Thin Gold Circular Ring */}
              <div className="w-[82%] h-[82%] rounded-full border border-[#C79D3B] flex items-center justify-center relative">
                {/* Official White Architectural House Mark with exact proportional scale */}
                <img
                  src="/space-mark-white.png"
                  alt="SPACE Real Estate Mark"
                  className="w-[44%] h-[44%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND OVERVIEW & 3 TRUST BADGES (Soft Off-White #FBFBFA) */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 font-normal">
            {t.overview}
          </p>

          {/* 3 Inline Trust Features with Outline Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-gray-800">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C79D3B]" strokeWidth={2} />
              <span>{t.badgeReporting}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C79D3B]" strokeWidth={2} />
              <span>{t.badgeSchedule}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C79D3B]" strokeWidth={2} />
              <span>{t.badgeExpertise}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO -> TWO WAYS WE HELP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2">
              {t.whatWeDo}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              {t.twoWays}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Property Management */}
            <div className="bg-[#F6F6F4] rounded-2xl p-8 sm:p-9 border border-black/[0.04] flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-full bg-[#0D1117] text-white flex items-center justify-center mb-6">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-950 mb-3">
                  {t.card1Title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {t.card1Desc}
                </p>
              </div>

              <button
                onClick={() => onNavigatePage('services')}
                className="text-xs sm:text-sm font-bold text-gray-950 hover:text-[#C79D3B] transition-colors inline-flex items-center gap-1.5 self-start group"
              >
                <span>{t.learnMore}</span>
                <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180">→</span>
              </button>
            </div>

            {/* Card 2: Real Estate Sales */}
            <div className="bg-[#F6F6F4] rounded-2xl p-8 sm:p-9 border border-black/[0.04] flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-full bg-[#0D1117] text-white flex items-center justify-center mb-6">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-950 mb-3">
                  {t.card2Title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {t.card2Desc}
                </p>
              </div>

              <button
                onClick={() => onNavigatePage('services')}
                className="text-xs sm:text-sm font-bold text-gray-950 hover:text-[#C79D3B] transition-colors inline-flex items-center gap-1.5 self-start group"
              >
                <span>{t.learnMore}</span>
                <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US -> BUILT ON TRUST & FOLLOW-THROUGH */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2">
              {t.whyUsBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              {t.whyUsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Transparency */}
            <div className="bg-[#F8F8F6] rounded-xl p-6 border border-black/[0.03]">
              <div className="w-8 h-8 flex items-center justify-center mb-4 text-[#C79D3B]">
                <Shield className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-gray-950 text-sm mb-2">
                {t.why1Title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {t.why1Desc}
              </p>
            </div>

            {/* 2. Reliability */}
            <div className="bg-[#F8F8F6] rounded-xl p-6 border border-black/[0.03]">
              <div className="w-8 h-8 flex items-center justify-center mb-4 text-[#C79D3B]">
                <Clock className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-gray-950 text-sm mb-2">
                {t.why2Title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {t.why2Desc}
              </p>
            </div>

            {/* 3. Local Expertise */}
            <div className="bg-[#F8F8F6] rounded-xl p-6 border border-black/[0.03]">
              <div className="w-8 h-8 flex items-center justify-center mb-4 text-[#C79D3B]">
                <MapPin className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-gray-950 text-sm mb-2">
                {t.why3Title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {t.why3Desc}
              </p>
            </div>

            {/* 4. Long-Term Relationships */}
            <div className="bg-[#F8F8F6] rounded-xl p-6 border border-black/[0.03]">
              <div className="w-8 h-8 flex items-center justify-center mb-4 text-[#C79D3B]">
                <InfinityIcon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-gray-950 text-sm mb-2">
                {t.why4Title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {t.why4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS -> HOW WE WORK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2">
              {t.processBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              {t.processTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 01 */}
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#C79D3B] block mb-2">
                01
              </span>
              <h3 className="font-bold text-gray-950 text-sm sm:text-base mb-1.5">
                {t.step1Title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {t.step1Desc}
              </p>
            </div>

            {/* Step 02 */}
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#C79D3B] block mb-3">
                02
              </span>
              <h3 className="font-bold text-gray-950 text-sm sm:text-base mb-1.5">
                {t.step2Title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {t.step2Desc}
              </p>
            </div>

            {/* Step 03 */}
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#C79D3B] block mb-3">
                03
              </span>
              <h3 className="font-bold text-gray-950 text-sm sm:text-base mb-1.5">
                {t.step3Title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {t.step3Desc}
              </p>
            </div>

            {/* Step 04 */}
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#C79D3B] block mb-3">
                04
              </span>
              <h3 className="font-bold text-gray-950 text-sm sm:text-base mb-1.5">
                {t.step4Title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {t.step4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
