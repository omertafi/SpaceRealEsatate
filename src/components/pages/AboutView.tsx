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
      en: 'OWNERSHIP & FOUNDING PARTNERS',
      ar: 'الملاك والشركاء المؤسسون',
      ur: 'مالکان اور بانی شراکت دار',
      ru: 'СОБСТВЕННИКИ И УЧРЕДИТЕЛИ',
      zh: '所有权人与创始合伙人',
    }[currentLang] || 'OWNERSHIP & FOUNDING PARTNERS',

    leadershipTitle: {
      en: 'Founding Partners & Owners',
      ar: 'الشركاء الأربعة والملاك المؤسسون',
      ur: 'چار بانی شراکت دار اور مالکان',
      ru: 'Основатели и совладельцы компании',
      zh: '四位创始合伙人兼所有权人',
    }[currentLang] || 'Founding Partners & Owners',

    leadershipDesc: {
      en: 'Space Real Estate is owned and steered by four partners combining regional leadership, diverse industry experience, and strategic dedication to the UAE real estate market.',
      ar: 'تأسست شركة سبيس العقارية وتعود ملكيتها لأربعة شركاء وملاك يجمعون بين القيادة والخبرات التنفيذية المتنوعة والرؤية الاستراتيجية في السوق العقاري بدولة الإمارات.',
      ur: 'سپیْس ریئل اسٹیٹ چار شراکت داروں اور مالکان کی زیر نگرانی ہے جو اماراتی مارکیٹ میں شاندار قیادت اور تجربہ رکھتے ہیں۔',
      ru: 'Space Real Estate принадлежит и управляется четырьмя партнерами-основателями, объединяющими глубокий опыт и стратегическое видение.',
      zh: 'Space Real Estate 由四位合伙人联合创立并共同持有，汇聚卓越的行业治理与战略投资远见。',
    }[currentLang] || '',

    partners: [
      {
        id: 1,
        initials: 'MA',
        image: '/owners/mohamed-alobadli.jpg',
        name: {
          en: 'Mr. Mohamed Alobadli',
          ar: 'السيد / محمد العبيدلي',
          ur: 'مسٹر محمد العبیدلی',
          ru: 'Г-н Мохамед Алобадли',
          zh: 'Mohamed Alobadli 先生',
        }[currentLang] || 'Mr. Mohamed Alobadli',
        role: {
          en: 'Managing Partner & Owner',
          ar: 'شريك إداري ومالك مؤسس',
          ur: 'منیجنگ پارٹنر و مالک',
          ru: 'Управляющий партнер и совладелец',
          zh: '管理合伙人兼所有权人',
        }[currentLang] || 'Managing Partner & Owner',
        nationality: {
          en: 'Emirati Citizen',
          ar: 'مواطن إماراتي',
          ur: 'اماراتی شہری',
          ru: 'Гражданин ОАЭ',
          zh: '阿联酋公民',
        }[currentLang] || 'Emirati Citizen',
        flag: '🇦🇪',
        bio: {
          en: 'Founding partner and owner providing overarching executive leadership, governance, and institutional direction in the UAE property sector.',
          ar: 'شريك ومالك مؤسس يقود التوجه العام والحوكمة المؤسسية والتوسع الاستراتيجي في قطاع التطوير وإدارة الأصول العقارية.',
          ur: 'بانی پارٹنر اور مالک جو اماراتي ریئل اسٹیٹ میں ایگزیکٹو قیادت اور ادارہ جاتی رہنمائي فراہم کرتے ہیں۔',
          ru: 'Партнер-основатель и совладелец, определяющий стратегию развития, корпоративное управление и институциональный рост.',
          zh: '创始合伙人兼所有人，负责全面高管治理、机构发展战略及阿联酋房产市场拓展。',
        }[currentLang] || '',
      },
      {
        id: 2,
        initials: 'ME',
        image: '/owners/mohamed-elalfi.jpg',
        name: {
          en: 'Mr. Mohamed Elalfi',
          ar: 'السيد / محمد الألفي',
          ur: 'مسٹر محمد الالفی',
          ru: 'Г-н Мохамед Эль-Альфи',
          zh: 'Mohamed Elalfi 先生',
        }[currentLang] || 'Mr. Mohamed Elalfi',
        role: {
          en: 'Partner & Owner',
          ar: 'شريك ومالك مؤسس',
          ur: 'شریک و مالک',
          ru: 'Партнер и совладелец',
          zh: '合伙人兼所有权人',
        }[currentLang] || 'Partner & Owner',
        nationality: {
          en: 'Egyptian National',
          ar: 'مصري الجنسية',
          ur: 'مصری شہری',
          ru: 'Гражданин Египта',
          zh: '埃及籍',
        }[currentLang] || 'Egyptian National',
        flag: '🇪🇬',
        bio: {
          en: 'Founding partner and owner overseeing operational excellence, end-to-end asset management workflows, and premier client advisory.',
          ar: 'شريك ومالك مؤسس يشرف على العمليات التشغيلية، ومطابقة معايير إدارة الأملاك، وتقديم استشارات المحافظ الاستثمارية للعملاء.',
          ur: 'بانی پارٹنر اور مالک جو آپریشنل امور، پراپرٹی مینجمنٹ اور کلائنٹ ایڈوائزری کی نگرانی کرتے ہیں۔',
          ru: 'Партнер-основатель и совладелец, курирующий операционные процессы, регламенты управления объектами и консультации инвесторов.',
          zh: '创始合伙人兼所有人，统筹全流程资产托管运营标准、招商管理与高净值客户咨询。',
        }[currentLang] || '',
      },
      {
        id: 3,
        initials: 'AA',
        name: {
          en: 'Mr. Abdullah Alobadli',
          ar: 'السيد / عبد الله العبيدلي',
          ur: 'مسٹر عبداللہ العبیدلی',
          ru: 'Г-н Абдулла Алобадли',
          zh: 'Abdullah Alobadli 先生',
        }[currentLang] || 'Mr. Abdullah Alobadli',
        role: {
          en: 'Partner & Owner',
          ar: 'شريك ومالك مؤسس',
          ur: 'شریک و مالک',
          ru: 'Партнер и совладелец',
          zh: '合伙人兼所有权人',
        }[currentLang] || 'Partner & Owner',
        nationality: {
          en: 'Emirati Citizen',
          ar: 'مواطن إماراتي',
          ur: 'اماراتی شہری',
          ru: 'Гражданин ОАЭ',
          zh: '阿联酋公民',
        }[currentLang] || 'Emirati Citizen',
        flag: '🇦🇪',
        bio: {
          en: 'Founding partner and owner spearheading strategic relationships, developer alliances, and portfolio expansion across the Emirates.',
          ar: 'شريك ومالك مؤسس يعزز التحالفات الاستراتيجية مع كبار المطورين العقاريين، ويقود نمو وتوسيع المحفظة العقارية في الدولة.',
          ur: 'بانی پارٹنر اور مالک جو امارات بھر میں معروف ڈویلپرز کے ساتھ اسٹریٹجک تعلقات کو فروغ دیتے ہیں۔',
          ru: 'Партнер-основатель и совладелец, развивающий партнерские связи с ведущими застройщиками и расширяющий портфель компании.',
          zh: '创始合伙人兼所有人，主管阿联酋全域开发商战略联盟拓展、项目销售独家代理与资产增值。',
        }[currentLang] || '',
      },
      {
        id: 4,
        initials: 'MS',
        image: '/owners/mahmoud-al-sheikh.jpg',
        name: {
          en: 'Mr. Mahmoud Al-Sheikh',
          ar: 'السيد / محمود الشيخ',
          ur: 'مسٹر محمود الشیخ',
          ru: 'Г-н Махмуд Аль-Шейх',
          zh: 'Mahmoud Al-Sheikh 先生',
        }[currentLang] || 'Mr. Mahmoud Al-Sheikh',
        role: {
          en: 'Partner & Owner',
          ar: 'شريك ومالك مؤسس',
          ur: 'شریک و مالک',
          ru: 'Партнер и совладелец',
          zh: '合伙人兼所有权人',
        }[currentLang] || 'Partner & Owner',
        nationality: {
          en: 'Iranian National',
          ar: 'إيراني الجنسية',
          ur: 'ایرانی شہری',
          ru: 'Гражданин Ирана',
          zh: '伊朗籍',
        }[currentLang] || 'Iranian National',
        flag: '🇮🇷',
        bio: {
          en: 'Founding partner and owner bringing deep international investor networks, cross-border market intelligence, and private wealth placement.',
          ar: 'شريك ومالك مؤسس يمتلك شبكة علاقات دولية واسعة مع كبار المستثمرين، ويشرف على استقطاب وتوجيه رؤوس الأموال العابرة للحدود.',
          ur: 'بانی پارٹنر اور مالک جو بین الاقوامی سرمایہ کاروں کے ساتھ تعلقات اور سرحد پار سرمایہ کاری کے امور سنبھالتے ہیں۔',
          ru: 'Партнер-основатель и совладелец, отвечающий за международные инвестиционные связи, привлечение капитала и глобальную аналитику.',
          zh: '创始合伙人兼所有人，深耕国际跨国资本流动、高净值私人家族办公室对接与海外投资配置。',
        }[currentLang] || '',
      },
    ],
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
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C79D3B] block mb-2">
                {t.leadershipBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                {t.leadershipTitle}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
                {t.leadershipDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-[#F8F8F6] rounded-2xl p-6 border border-black/[0.04] flex flex-col items-center text-center hover:border-[#C79D3B]/40 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Photo / Avatar with Gold Border Accent */}
                  <div className="relative mb-4">
                    {'image' in partner && partner.image ? (
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#C79D3B] shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 bg-white">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0D1117] via-[#161F2E] to-[#0D1117] text-[#C79D3B] flex items-center justify-center font-extrabold text-2xl tracking-wider border-2 border-[#C79D3B]/40 shadow-md group-hover:scale-105 group-hover:border-[#C79D3B] transition-all">
                        {partner.initials}
                      </div>
                    )}
                    {/* Small Certified Crown/Badge */}
                    <div
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#C79D3B] text-[#0D1117] flex items-center justify-center text-xs font-black shadow-sm"
                      title="Partner & Owner"
                    >
                      ✓
                    </div>
                  </div>

                  {/* Partner Name */}
                  <h3 className="font-extrabold text-gray-950 text-base mb-1 tracking-tight">
                    {partner.name}
                  </h3>

                  {/* Role Title */}
                  <span className="text-[11px] text-[#C79D3B] font-bold mb-3 uppercase tracking-wider">
                    {partner.role}
                  </span>

                  {/* Nationality Badge */}
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200/80 text-xs font-semibold text-gray-800 shadow-xs">
                    <span className="text-sm">{partner.flag}</span>
                    <span>{partner.nationality}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-[12px] text-gray-500 leading-relaxed mt-auto pt-3 border-t border-gray-200/60 w-full">
                    {partner.bio}
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
