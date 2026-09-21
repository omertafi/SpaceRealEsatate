import React from 'react';
import { Language, NavigationPage } from '../../types';
import { 
  Users, 
  FileText, 
  CreditCard, 
  Wrench, 
  BarChart3, 
  Building2, 
  Home, 
  Compass, 
  CheckCircle2,
  Check
} from 'lucide-react';

interface ServicesViewProps {
  currentLang: Language;
  onNavigatePage: (page: NavigationPage) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ currentLang, onNavigatePage }) => {
  const t = {
    breadcrumbHome: {
      en: 'Home',
      ar: 'الرئيسية',
      ur: 'ہوم',
      ru: 'Главная',
      zh: '首页',
    }[currentLang] || 'Home',

    breadcrumbServices: {
      en: 'Services',
      ar: 'خدماتنا',
      ur: 'خدمات',
      ru: 'Услуги',
      zh: '服务项目',
    }[currentLang] || 'Services',

    heroTitle: {
      en: 'Our Services',
      ar: 'خدماتنا العقارية',
      ur: 'ہماری ریئل اسٹیٹ خدمات',
      ru: 'Наши услуги',
      zh: '我们的核心服务',
    }[currentLang] || 'Our Services',

    heroSubtitle: {
      en: 'Full-service property management, plus real estate sales through our UAE developer partnerships.',
      ar: 'إدارة أملاك متكاملة، إلى جانب مبيعات العقارات من خلال شراكاتنا مع كبرى شركات التطوير في الإمارات.',
      ur: 'مکمل پراپرٹی مینجمنٹ اور متحدہ عرب امارات کے نمایاں ڈویلپرز کے ساتھ اشتراک سے رئیل اسٹیٹ کی فروخت۔',
      ru: 'Комплексное управление недвижимостью, а также продажа объектов в партнерстве с ведущими девелоперами ОАЭ.',
      zh: '专业端到端物业全权托管运营，携手阿联酋顶尖开发商直售高潜力优质地产项目。',
    }[currentLang] || 'Full-service property management, plus real estate sales through our UAE developer partnerships.',

    sec1Badge: {
      en: '01 · PROPERTY MANAGEMENT',
      ar: '01 · إدارة الأملاك',
      ur: '01 · پراپرٹی مینجمنٹ',
      ru: '01 · УПРАВЛЕНИЕ НЕДВИЖИМОСТЬЮ',
      zh: '01 · 物业全权委托管理',
    }[currentLang] || '01 · PROPERTY MANAGEMENT',

    sec1Title: {
      en: 'Full-Service Property Management',
      ar: 'إدارة متكاملة للعقارات والأصول',
      ur: 'جامع اور مکمل پراپرٹی مینجمنٹ',
      ru: 'Комплексное управление недвижимостью',
      zh: '全权一站式物业运营管理',
    }[currentLang] || 'Full-Service Property Management',

    mgmtItems: [
      {
        title: {
          en: 'Tenant Sourcing & Placement',
          ar: 'استقطاب وتسكين المستأجرين',
          ur: 'کرایہ داروں کی تلاش اور جانچ',
          ru: 'Подбор и заселение арендаторов',
          zh: '租客甄选招租与入住',
        }[currentLang] || 'Tenant Sourcing & Placement',
        desc: {
          en: 'Marketing vacant units and matching owners with reliable, long-term occupants.',
          ar: 'تسويق الوحدات الشاغرة واختيار مستأجرين موثوقين ومستقرين على المدى الطويل.',
          ur: 'خالی یونٹس کی مؤثر تشہیر اور قابل اعتماد اور طویل مدتی کرایہ داروں کا انتخاب۔',
          ru: 'Маркетинг свободных площадей и подбор добросовестных арендаторов на долгий срок.',
          zh: '多渠道推广空置房源，严格筛选背景良好且信誉卓越的长期租客。',
        }[currentLang] || '',
      },
      {
        title: {
          en: 'Lease Contract Management',
          ar: 'إدارة عقود الإيجار',
          ur: 'کرایہ داری کے معاہدات کی دیکھ بھال',
          ru: 'Управление договорами аренды',
          zh: '租赁合同全生命周期管理',
        }[currentLang] || 'Lease Contract Management',
        desc: {
          en: 'Drafting, issuing and renewing tenancy contracts, including official registration.',
          ar: 'صياغة وإصدار وتجديد عقود الإيجار المعتمدة وتوثيقها رسمياً لدى الجهات المختصة.',
          ur: 'قانونی کرایہ داری معاہدات کی تیاری، اجرا اور سرکاری تصدیق کے ساتھ تجدید۔',
          ru: 'Составление, регистрация и пролонгация договоров аренды в соответствии с нормами.',
          zh: '合规起草、签署及官方登记认证租约，全权跟进合同期满续签。',
        }[currentLang] || '',
      },
      {
        title: {
          en: 'Rent & Cheque Collection',
          ar: 'تحصيل الإيجارات والشيكات',
          ur: 'کرایوں اور چیکس کی وصولی',
          ru: 'Сбор арендной платы и чеков',
          zh: '租金收缴与支票托收结算',
        }[currentLang] || 'Rent & Cheque Collection',
        desc: {
          en: 'Collecting rental cheques on schedule for predictable owner cash flow.',
          ar: 'تحصيل شيكات الإيجار في مواعيدها المحددة لضمان تدفق نقدي منتظم للمالك.',
          ur: 'مقررہ وقت پر چیکس کی وصولی تاکہ مالکان کو باقاعدہ کیش فلو حاصل رہے۔',
          ru: 'Своевременный сбор чеков для обеспечения стабильного и прогнозируемого дохода собственника.',
          zh: '按既定周期精准托收支票与租金，确保业主稳健可预测的持续现金流。',
        }[currentLang] || '',
      },
      {
        title: {
          en: 'Maintenance Coordination',
          ar: 'تنسيق وإشراف الصيانة',
          ur: 'دیکھ بھال اور مرمت کی نگرانی',
          ru: 'Техническое обслуживание и ремонт',
          zh: '工程维修全面协同与监管',
        }[currentLang] || 'Maintenance Coordination',
        desc: {
          en: 'Handling requests and coordinating trusted contractors to keep properties in good condition.',
          ar: 'استقبال طلبات الصيانة والتنسيق مع مقاولين وفنيين معتمدين للحفاظ على جودة العقار.',
          ur: 'مرمت کی تمام درخواستوں کا حل اور معتبر ماہرین کے ذریعے پراپرٹی کی بہترین حالت برقرار رکھنا۔',
          ru: 'Быстрая обработка заявок жильцов и привлечение проверенных подрядчиков для сохранности объекта.',
          zh: '全天候响应报修需求，调度优质合格工程承包商，守护资产长久品质。',
        }[currentLang] || '',
      },
      {
        title: {
          en: 'Owner Reporting',
          ar: 'تقارير الملاك الدورية',
          ur: 'مالکان کے لیے باقاعدہ رپورٹس',
          ru: 'Регулярные отчеты для собственников',
          zh: '业主专属透明运营月报',
        }[currentLang] || 'Owner Reporting',
        desc: {
          en: 'Regular, clear reports on occupancy, contracts, collections and maintenance.',
          ar: 'تقارير واضحة ومنتظمة حول نسب الإشغال، العقود، التحصيلات، وأعمال الصيانة المنفذة.',
          ur: 'کرایہ داری، وصولیوں اور مرمتی اخراجات پر مشتمل مکمل اور واضح ماہانہ رپورٹس۔',
          ru: 'Понятные детальные отчеты о заполняемости, договорах, финансовых поступлениях и расходах.',
          zh: '定期出具涵盖出租率、租金结算、支票明细及维保支出的高清晰财务月报。',
        }[currentLang] || '',
      },
    ],

    commitmentBadge: {
      en: 'OUR COMMITMENT TO OWNERS',
      ar: 'التزامنا تجاه الملاك',
      ur: 'مالکان کے ساتھ ہمارا عہد',
      ru: 'НАШИ ОБЯЗАТЕЛЬСТВА ПЕРЕД СОБСТВЕННИКАМИ',
      zh: '我们对业主的庄严承诺',
    }[currentLang] || 'OUR COMMITMENT TO OWNERS',

    commitmentText: {
      en: 'Every property we manage is treated as if it were our own — tenants are followed up, cheques are tracked, maintenance is actioned, and owners are kept informed at every step.',
      ar: 'كل عقار نديره نتعامل معه وكأنه ملكنا الشخصي — تتم متابعة المستأجرين، تتبع الشيكات بدقة، تنفيذ الصيانة على وجه السرعة، وإبقاء الملاك على اطلاع دائم في كل خطوة.',
      ur: 'ہم ہر زیر انتظام پراپرٹی کی دیکھ بھال اپنی ذاتی جائیداد کی طرح کرتے ہیں — کرایہ داروں کی مکمل نگرانی، چیکس کی بروقت ٹریکنگ، تیز رفتار مرمت اور ہر قدم پر مالکان کو آگاہ رکھنا۔',
      ru: 'К каждому объекту мы относимся так, как будто это наша собственная недвижимость: держим связь с арендаторами, контролируем чеки, оперативно устраняем неполадки и информируем владельца на каждом этапе.',
      zh: '我们对待所托管的每一处物业皆视若己出——严密跟进租客动态、严格核验支票到账、迅捷落实维保响应，在每个环节都向业主保持高频透明的沟通。',
    }[currentLang] || '',

    sec2Badge: {
      en: '02 · REAL ESTATE SALES',
      ar: '02 · مبيعات العقارات',
      ur: '02 · ریئل اسٹیٹ سیلز',
      ru: '02 · ПРОДАЖА НЕДВИЖИМОСТИ',
      zh: '02 · 优质房地产买卖',
    }[currentLang] || '02 · REAL ESTATE SALES',

    sec2Title: {
      en: 'Real Estate Sales',
      ar: 'مبيعات وتسويق العقارات',
      ur: 'ریئل اسٹیٹ کی فروخت اور مارکیٹنگ',
      ru: 'Продажа недвижимости',
      zh: '房地产销售与投资顾问',
    }[currentLang] || 'Real Estate Sales',

    sec2Desc: {
      en: 'Beyond property management, Space Real Estate partners with some of the UAE’s leading developers to market and sell residential and investment properties.',
      ar: 'إلى جانب إدارة الأملاك، تتعاون سبيس العقارية مع أبرز المطورين العقاريين في دولة الإمارات لتسويق وبيع العقارات السكنية والاستثمارية المميزة.',
      ur: 'پراپرٹی مینجمنٹ کے علاوہ، سپیْس ریئل اسٹیٹ متحدہ عرب امارات کے نمایاں ڈویلپرز کے تعاون سے شاندار رہائشی اور سرمایہ کاری پراپرٹیز کی فروخت کی خدمات پیش کرتا ہے۔',
      ru: 'Помимо управления активами, Space Real Estate сотрудничает с ведущими девелоперами ОАЭ, предлагая клиентам первоклассные жилые и инвестиционные объекты.',
      zh: '在稳健的物业全权托管之外，Space Real Estate 深度携手阿联酋顶尖房地产开发商，倾力打造优质住宅与高回报商业地产的租售投资桥梁。',
    }[currentLang] || '',

    salesItems: [
      {
        title: {
          en: 'Developer Partnerships',
          ar: 'شراكات مع كبار المطورين',
          ur: 'بڑے ڈویلپرز کے ساتھ شراکت داری',
          ru: 'Партнерство с застройщиками',
          zh: '顶尖品牌开发商战略伙伴',
        }[currentLang] || 'Developer Partnerships',
        desc: {
          en: 'Representing leading UAE developers’ projects.',
          ar: 'تمثيل وتسويق مشاريع أبرز شركات التطوير في الإمارات.',
          ur: 'متحدہ عرب امارات کے سرکردہ ڈویلپرز کے منصوبوں کی براہ راست نمائندگی۔',
          ru: 'Эксклюзивное представление проектов ведущих строительных компаний ОАЭ.',
          zh: '官方直属代理阿联酋信誉卓著的大型品牌开发商核心优质项目。',
        }[currentLang] || '',
      },
      {
        title: {
          en: 'Off-Plan & Ready Properties',
          ar: 'مشاريع قيد الإنشاء وجاهزة',
          ur: 'زیر تعمیر اور تیار پراپرٹیز',
          ru: 'Новостройки и готовые объекты',
          zh: '热销期房与成熟现房精选',
        }[currentLang] || 'Off-Plan & Ready Properties',
        desc: {
          en: 'Off-plan launches and ready secondary-market homes.',
          ar: 'إطلاق مشاريع جديدة على الخارطة ومنازل جاهزة في السوق الثانوي.',
          ur: 'نئے لانچ ہونے والے زیر تعمیر پروجیکٹس اور تیار رہائشی مکانات۔',
          ru: 'Старты продаж на стадии котлована и готовое вторичное жилье.',
          zh: '提供开发商一手新盘期房与高净值二手现房的全面多元选品。',
        }[currentLang] || '',
      },
      {
        title: {
          en: 'Buyer Guidance',
          ar: 'إرشاد وتوجيه المشترين',
          ur: 'خریداروں کے لیے پیشہ ورانہ رہنمائی',
          ru: 'Индивидуальный подбор',
          zh: '全天候专业买家置业咨询',
        }[currentLang] || 'Buyer Guidance',
        desc: {
          en: 'Matching buyers to properties that fit budget and goals.',
          ar: 'مطابقة المشترين مع العقارات التي تناسب ميزانيتهم وأهدافهم الاستثمارية بدقة.',
          ur: 'خریداروں کی ضروریات، بجٹ اور اہداف کے مطابق بہترین جائیداد کی نشاندہی۔',
          ru: 'Подбор идеальных вариантов с учетом бюджета и инвестиционных целей клиента.',
          zh: '精准匹配客户的资金预算、投资回报诉求与品质生活规划。',
        }[currentLang] || '',
      },
      {
        title: {
          en: 'End-to-End Support',
          ar: 'دعم متكامل من البداية للتسليم',
          ur: 'معائنے سے لے کر چابیاں ملنے تک مکمل رہنمائی',
          ru: 'Полное сопровождение сделки',
          zh: '从实地品鉴到过户交付全程陪同',
        }[currentLang] || 'End-to-End Support',
        desc: {
          en: 'Guidance from viewing through to reservation and handover.',
          ar: 'مرافقة العميل من مرحلة المعاينة وحتى الحجز ونقل الملكية واستلام المفاتيح.',
          ur: 'جائیداد دیکھنے، بکنگ کروانے، دستاویزات اور حوالگی تک مکمل تعاون۔',
          ru: 'Консультации и юридическая поддержка от первого просмотра до получения ключей.',
          zh: '提供从看房勘选、签约认购、产权过户直至正式交付钥匙的无缝管家服务。',
        }[currentLang] || '',
      },
    ],

    whyChooseTitle: {
      en: 'Why Owners & Buyers Choose Us',
      ar: 'لماذا يختارنا الملاك والمشترون',
      ur: 'مالکان اور خریدار ہمارا انتخاب کیوں کرتے ہیں؟',
      ru: 'Почему собственники и покупатели выбирают нас',
      zh: '为什么业主与购房者信赖我们',
    }[currentLang] || 'Why Owners & Buyers Choose Us',

    reasons: [
      {
        en: 'Single point of contact for every matter',
        ar: 'نقطة اتصال واحدة ومباشرة لكل شؤون عقارك',
        ur: 'ہر مسئلے اور ضرورت کے لیے ایک ہی رابطہ نقطہ',
        ru: 'Единая персональная точка контакта по всем вопросам',
        zh: '专属客户顾问一对一全程直联，杜绝繁琐推诿',
      }[currentLang] || 'Single point of contact for every matter',
      {
        en: 'Transparent, regular reporting',
        ar: 'تقارير واضحة ومنتظمة دون أي مفاجآت',
        ur: 'باقاعدہ اور شفاف رپورٹنگ بغیر کسی پوشیدہ فیس کے',
        ru: 'Прозрачная и регулярная финансовая отчетность',
        zh: '账目分明、无隐形支出的透明定期资产汇报',
      }[currentLang] || 'Transparent, regular reporting',
      {
        en: 'Established relationships with UAE developers',
        ar: 'علاقات وشراكات وطيدة مع كبرى شركات التطوير في الإمارات',
        ur: 'متحدہ عرب امارات کے ممتاز ڈویلپرز کے ساتھ براہ راست تعلقات',
        ru: 'Прямые связи и партнерство с ведущими застройщиками ОАЭ',
        zh: '深植阿联酋开发商高层合作关系，获享一手优选房源',
      }[currentLang] || 'Established relationships with UAE developers',
      {
        en: 'On-the-ground knowledge of Ajman',
        ar: 'خبرة عملية وتواجد ميداني مستمر في عجمان',
        ur: 'عجمان کی مارکیٹ میں عملی تجربہ اور فیلڈ میں مسلسل موجودگی',
        ru: 'Глубокая практическая экспертиза на рынке недвижимости Аджмана',
        zh: '驻足阿吉曼本地多年的成熟实战经验与敏锐市场嗅觉',
      }[currentLang] || 'On-the-ground knowledge of Ajman',
    ],
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. HERO BANNER (Dark #0D1117) matching PDF Page 3 */}
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
            <span className="text-[#C79D3B]">{t.breadcrumbServices}</span>
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

      {/* 2. SECTION 01: PROPERTY MANAGEMENT */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C79D3B] block mb-2 font-mono">
              {t.sec1Badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              {t.sec1Title}
            </h2>
          </div>

          {/* 5 Management Items */}
          <div className="space-y-6 mb-12">
            {/* Item 1 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8F9FA] border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#11161B] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-1">
                  {t.mgmtItems[0].title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.mgmtItems[0].desc}
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8F9FA] border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#11161B] text-white flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-1">
                  {t.mgmtItems[1].title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.mgmtItems[1].desc}
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8F9FA] border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#11161B] text-white flex items-center justify-center shrink-0 mt-0.5">
                <CreditCard className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-1">
                  {t.mgmtItems[2].title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.mgmtItems[2].desc}
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8F9FA] border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#11161B] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-1">
                  {t.mgmtItems[3].title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.mgmtItems[3].desc}
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8F9FA] border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#11161B] text-white flex items-center justify-center shrink-0 mt-0.5">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-1">
                  {t.mgmtItems[4].title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.mgmtItems[4].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Our Commitment Box (Dark Callout Box) matching PDF */}
          <div className="rounded-2xl bg-[#0D1117] text-white p-8 sm:p-10 border border-white/10 shadow-lg">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C79D3B] block mb-3">
              {t.commitmentBadge}
            </span>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {t.commitmentText}
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION 02: REAL ESTATE SALES */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C79D3B] block mb-2 font-mono">
              {t.sec2Badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight mb-3">
              {t.sec2Title}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
              {t.sec2Desc}
            </p>
          </div>

          {/* 4 Cards Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#11161B] text-white flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 text-[#C79D3B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-1">
                  {t.salesItems[0].title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.salesItems[0].desc}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#11161B] text-white flex items-center justify-center shrink-0">
                <Home className="w-4 h-4 text-[#C79D3B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-1">
                  {t.salesItems[1].title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.salesItems[1].desc}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#11161B] text-white flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 text-[#C79D3B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-1">
                  {t.salesItems[2].title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.salesItems[2].desc}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#11161B] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#C79D3B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-1">
                  {t.salesItems[3].title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.salesItems[3].desc}
                </p>
              </div>
            </div>
          </div>

          {/* 4. WHY OWNERS & BUYERS CHOOSE US */}
          <div className="pt-12 border-t border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-8">
              {t.whyChooseTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.reasons.map((reason, rIdx) => (
                <div key={rIdx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-800 font-medium">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
