import { Language } from '../types';

export interface Translations {
  brandName: string;
  brandTagline: string;
  nav: {
    home: string;
    about: string;
    services: string;
    management: string;
    contact: string;
    requestConsultation: string;
  };
  common: {
    learnMore: string;
    contactUs: string;
    getInTouch: string;
    readMore: string;
    submit: string;
    submitting: string;
    successMessage: string;
    exploreServices: string;
    viewManagement: string;
    allRightsReserved: string;
    headquarters: string;
    workingHours: string;
    phone: string;
    email: string;
    address: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    metrics: {
      aum: { value: string; label: string };
      experience: { value: string; label: string };
      occupancy: { value: string; label: string };
      globalMarkets: { value: string; label: string };
    };
    introTitle: string;
    introSubtitle: string;
    introParagraph: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillarSalesTitle: string;
    pillarSalesDesc: string;
    pillarSalesFeature1: string;
    pillarSalesFeature2: string;
    pillarSalesFeature3: string;
    pillarMgmtTitle: string;
    pillarMgmtDesc: string;
    pillarMgmtFeature1: string;
    pillarMgmtFeature2: string;
    pillarMgmtFeature3: string;
    whyUsTitle: string;
    whyUsSubtitle: string;
    whyUs1Title: string;
    whyUs1Desc: string;
    whyUs2Title: string;
    whyUs2Desc: string;
    whyUs3Title: string;
    whyUs3Desc: string;
    whyUs4Title: string;
    whyUs4Desc: string;
    bannerTitle: string;
    bannerDesc: string;
    bannerCta: string;
  };
  about: {
    pageTitle: string;
    pageSubtitle: string;
    profileTitle: string;
    profileParagraph1: string;
    profileParagraph2: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionDesc: string;
    valuesTitle: string;
    valuesSubtitle: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
    val4Title: string;
    val4Desc: string;
    presenceTitle: string;
    presenceSubtitle: string;
    cities: {
      dubai: { name: string; desc: string };
      riyadh: { name: string; desc: string };
      london: { name: string; desc: string };
      singapore: { name: string; desc: string };
    };
  };
  services: {
    pageTitle: string;
    pageSubtitle: string;
    salesTitle: string;
    salesSubtitle: string;
    salesDesc: string;
    salesItem1Title: string;
    salesItem1Desc: string;
    salesItem2Title: string;
    salesItem2Desc: string;
    salesItem3Title: string;
    salesItem3Desc: string;
    mgmtTitle: string;
    mgmtSubtitle: string;
    mgmtDesc: string;
    mgmtItem1Title: string;
    mgmtItem1Desc: string;
    mgmtItem2Title: string;
    mgmtItem2Desc: string;
    mgmtItem3Title: string;
    mgmtItem3Desc: string;
    advisoryTitle: string;
    advisorySubtitle: string;
    advisoryDesc: string;
    advisoryItem1Title: string;
    advisoryItem1Desc: string;
    advisoryItem2Title: string;
    advisoryItem2Desc: string;
    processTitle: string;
    processSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  management: {
    pageTitle: string;
    pageSubtitle: string;
    overviewTitle: string;
    overviewParagraph1: string;
    overviewParagraph2: string;
    scopeTitle: string;
    scopeSubtitle: string;
    scope1Title: string;
    scope1Desc: string;
    scope2Title: string;
    scope2Desc: string;
    scope3Title: string;
    scope3Desc: string;
    scope4Title: string;
    scope4Desc: string;
    metricsTitle: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
    formCardTitle: string;
    formCardSubtitle: string;
    formOwnerName: string;
    formEmail: string;
    formPhone: string;
    formCity: string;
    formPropertyType: string;
    formUnitsArea: string;
    formStatus: string;
    formStatusVacant: string;
    formStatusRented: string;
    formStatusConstruction: string;
    formNotes: string;
    formSubmitBtn: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
  };
  contact: {
    pageTitle: string;
    pageSubtitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    subjectLabel: string;
    subjectSales: string;
    subjectMgmt: string;
    subjectPartnership: string;
    subjectGeneral: string;
    cityLabel: string;
    cityPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    officesTitle: string;
    officesSubtitle: string;
    dubaiOfficeTitle: string;
    dubaiOfficeAddress: string;
    dubaiOfficePhone: string;
    riyadhOfficeTitle: string;
    riyadhOfficeAddress: string;
    riyadhOfficePhone: string;
    londonOfficeTitle: string;
    londonOfficeAddress: string;
    londonOfficePhone: string;
    hoursTitle: string;
    hoursText: string;
    directChatTitle: string;
    directChatDesc: string;
    directChatBtn: string;
  };
  footer: {
    brandDesc: string;
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    privacy: string;
    terms: string;
    compliance: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    brandName: 'SPACE REAL ESTATE',
    brandTagline: 'الوساطة العقارية المتميزة وإدارة الأصول',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      management: 'إدارة الأملاك',
      contact: 'اتصل بنا',
      requestConsultation: 'طلب استشارة',
    },
    common: {
      learnMore: 'معرفة المزيد',
      contactUs: 'تواصل معنا',
      getInTouch: 'ابدأ محادثتك معنا',
      readMore: 'قراءة المزيد',
      submit: 'إرسال الطلب',
      submitting: 'جاري الإرسال...',
      successMessage: 'تم استلام طلبكم بنجاح، سيتواصل معكم مستشارنا المختص قريباً.',
      exploreServices: 'استكشف خدماتنا',
      viewManagement: 'قسم إدارة الأملاك',
      allRightsReserved: 'جميع الحقوق محفوظة',
      headquarters: 'المقر الرئيسي',
      workingHours: 'ساعات العمل',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
    },
    home: {
      heroBadge: 'شركة متخصصة في الوساطة العقارية وإدارة الأملاك',
      heroTitle: 'الريادة والاحتراف في عالم العقار وإدارة الأصول',
      heroSubtitle: 'نقدم حلولاً متكاملة لنخبة المستثمرين وملاك العقارات؛ بدءاً من وساطة الصفقات الاستراتيجية وحتى الإدارة التشغيلية الشاملة للأصول العقارية بأعلى معايير الحوكمة والربحية.',
      heroCtaPrimary: 'استكشف خدماتنا',
      heroCtaSecondary: 'تواصل مع الإدارة',
      metrics: {
        aum: { value: 'إدارة شاملة', label: 'تحصيل الإيجارات ومتابعة تشغيلية متكاملة' },
        experience: { value: 'وساطة معتمدة', label: 'بيع وشراء العقارات السكنية والتجارية' },
        occupancy: { value: 'عقود موثقة', label: 'إجراءات قانونية تضمن حقوق الملاك والمستأجرين' },
        globalMarkets: { value: 'عجمان والإمارات', label: 'مكتبنا الرئيسي في عجمان وخدماتنا تغطي الدولة' },
      },
      introTitle: 'نهج مؤسسي موثوق في الاستثمار العقاري',
      introSubtitle: 'رؤية عميقة تلبي تطلعات الأفراد والمؤسسات وصناديق الاستثمار',
      introParagraph: 'تأسست شركة سبيس العقارية (SPACE REAL ESTATE) لتشكل نموذجاً مهنياً متقدماً يجمع بين دقة التحليل المالي والوساطة العقارية الرفيعة وإدارة الأصول المسؤولة. نسعى جاهدين لحماية رأس المال العقاري لموكلينا وتنميته عبر أساليب تشغيل حديثة ومنهجية عمل تعتمد أعلى درجات الشفافية والالتزام المهني.',
      pillarsTitle: 'ركيزتان أساسيتان لقيادة أعمالنا',
      pillarsSubtitle: 'تكامل فريد يضمن خدمة متكاملة للمستثمر والمالك في آن واحد',
      pillarSalesTitle: 'مبيعات وتسويق العقارات',
      pillarSalesDesc: 'تمثيل حصري للمشترين والبائعين وإدارة صفقات العقارات الفاخرة، المجمعات السكنية، والمباني التجارية مع دراسات الجدوى والتقييم العادل.',
      pillarSalesFeature1: 'صفقات واستحواذات استراتيجية مع كبار المطورين',
      pillarSalesFeature2: 'تقييم عقاري دقيق وفق مؤشرات السوق المحدثة',
      pillarSalesFeature3: 'إتمام المعاملات القانونية والتنظيمية بكفاءة وسرية',
      pillarMgmtTitle: 'إدارة الأملاك والأصول',
      pillarMgmtDesc: 'تشغيل شامل وممنهج للمباني والمجمعات يهدف إلى تعظيم صافي العائد التشغيلي، وضمان أعلى معدلات الإشغال مع صيانة استباقية متواصلة.',
      pillarMgmtFeature1: 'إدارة عقود الإيجار وانتقاء المستأجرين ذوي الجدارة',
      pillarMgmtFeature2: 'صيانة فنية دورية وإشراف تشغيلي متكامل للمنشأة',
      pillarMgmtFeature3: 'تقارير مالية دورية شفافة وتحصيل دقيق للإيرادات',
      whyUsTitle: 'لماذا يختارنا كبار الملاك والمستثمرين؟',
      whyUsSubtitle: 'معايير عمل واضحة تضع مصلحة العميل واستدامة الأصول في صميم أولوياتنا',
      whyUs1Title: 'السرية والخصوصية التامة',
      whyUs1Desc: 'تدار جميع التعاملات والصفقات المالية عبر بروتوكولات خصوصية صارمة تحمي بيانات العميل وهويته الاستثمارية.',
      whyUs2Title: 'تحسين العوائد وصافي التدفقات',
      whyUs2Desc: 'نعتمد خططاً تشغيلية تقلل من تكاليف الصيانة غير المجدية وتضمن التدفق النقدي المنتظم لملاك العقارات.',
      whyUs3Title: 'شبكة علاقات موثوقة في عجمان والإمارات',
      whyUs3Desc: 'قنوات اتصال وثيقة مع نخبة المستثمرين، المطورين، وملاك العقارات في إمارة عجمان وكافة إمارات الدولة.',
      whyUs4Title: 'حوكمة وتقارير دورية',
      whyUs4Desc: 'لوحات بيانات تفصيلية وكشوف حسابات دورية توضح كافة الإيرادات والمصروفات وحالة العقار بمنتهى الوضوح.',
      bannerTitle: 'هل تمتلك أصولاً عقارية وترغب في إدارتها باحترافية؟',
      bannerDesc: 'فريقنا المتخصص في إدارة الأملاك على استعداد لتقديم دراسة أولية وخطة تشغيلية مخصصة لعقاركم.',
      bannerCta: 'طلب استشارة إدارة أملاك',
    },
    about: {
      pageTitle: 'من نحن',
      pageSubtitle: 'شركة رائدة في الاستشارات العقارية، الوساطة الاستراتيجية وإدارة الأملاك المؤسسية.',
      profileTitle: 'نبذة عن SPACE REAL ESTATE',
      profileParagraph1: 'شركة سبيس العقارية (SPACE REAL ESTATE) هي شركة استشارية ووساطة عقارية متخصصة تقدم خدمات نوعية متكاملة لقطاع العقارات الفاخرة والاستثمارية، بالإضافة إلى إدارة الأصول العقارية بكفاءة تشغيلية فائقة.',
      profileParagraph2: 'نرتكز على فهم عميق لديناميكيات السوق الإقليمي والدولي، ونعمل كشريك استراتيجي موثوق للمستثمرين من الأفراد، والشركات، والمؤسسات الاستثمارية الساعية إلى تنمية محافظها العقارية وضمان استدامة أدائها المالي.',
      visionTitle: 'رؤيتنا',
      visionDesc: 'أن نكون المعيار المرجعي الأبرز في المنطقة للثقة المهنية، والابتكار التشغيلي في إدارة الأملاك، وإنجاز الصفقات العقارية ذات القيمة النوعية العالية.',
      missionTitle: 'رسالتنا',
      missionDesc: 'حماية وتنمية الأصول العقارية لعملائنا من خلال تقديم خدمات وساطة وإدارة نزيهة، مبنية على الأرقام الدقيقة وأفضل الممارسات التنظيمية الدولية.',
      valuesTitle: 'قيمنا الجوهرية',
      valuesSubtitle: 'المبادئ الثابتة التي تحكم قراراتنا اليومية وعلاقتنا الممتدة مع عملائنا',
      val1Title: 'النزاهة والشفافية',
      val1Desc: 'وضوح تام في جميع التعاملات والتقارير المالية دون غموض أو تكاليف خفية.',
      val2Title: 'الالتزام والاحتراف',
      val2Desc: 'فريق معتمد يتمتع بخبرة واسعة ومعرفة دقيقة بالأنظمة والتشريعات العقارية.',
      val3Title: 'السرية والأمان',
      val3Desc: 'حماية مصالح العملاء وخصوصية صفقاتهم وبياناتهم المالية كأولوية قصوى.',
      val4Title: 'الاستدامة والنمو',
      val4Desc: 'التركيز على القيمة طويلة المدى للعقار والمحافظة على حالته التشغيلية المتميزة.',
      presenceTitle: 'مقرنا ونطاق اختصاصنا',
      presenceSubtitle: 'مكتبنا الرئيسي في عجمان وخدماتنا العقارية المتكاملة تغطي كافة إمارات الدولة',
      cities: {
        dubai: { name: 'المقر الرئيسي - عجمان', desc: 'مركز الإدارة التشغيلية، إدارة الأملاك والمحافظ، وخدمة الملاك والمستثمرين.' },
        riyadh: { name: 'عقارات دبي', desc: 'وساطة بيع وشراء وتسويق لأرقى المشاريع السكنية والاستثمارية والتجارية.' },
        london: { name: 'الشارقة والإمارات الشمالية', desc: 'إدارة البنايات، تسويق الأراضي، ومتابعة عقود الإيجار والتشغيل الدوري.' },
        singapore: { name: 'أبوظبي وكافة إمارات الدولة', desc: 'حلول استثمارية ووساطة عقارية شاملة تلبي احتياجات المستثمرين والأفراد.' },
      },
    },
    services: {
      pageTitle: 'خدماتنا',
      pageSubtitle: 'حلول عقارية متكاملة تغطي دورة حياة الأصول بالكامل؛ من الشراء والاستحواذ إلى التشغيل والإدارة والتخارج.',
      salesTitle: '1. مبيعات العقارات والاستحواذ',
      salesSubtitle: 'الوساطة المتخصصة وتمثيل المشترين والمطورين',
      salesDesc: 'نوفر خدمة وساطة راقية للأفراد ذوي الملاءة والمؤسسات، قائمة على توفير فرص حقيقية تم فحصها بدقة.',
      salesItem1Title: 'التمثيل الاستثماري الحصري',
      salesItem1Desc: 'البحث عن أصول عقارية مطابقة للمحددات المالية للعميل، والتفاوض المباشر للوصول لأفضل سعر وتسهيلات.',
      salesItem2Title: 'تسويق المشاريع والأصول الخاصة',
      salesItem2Desc: 'استراتيجيات تسويق مستهدفة ومباشرة لشبكتنا المغلقة من المستثمرين المؤهلين دون إثارة صخب إعلامي.',
      salesItem3Title: 'الفحص النافي للجهالة والتقييم',
      salesItem3Desc: 'دراسة الوضع القانوني والفني والمالي للعقار قبل التوقيع لضمان سلامة الاستثمار وخلوه من المخاطر.',
      mgmtTitle: '2. إدارة الأملاك والأصول العقارية',
      mgmtSubtitle: 'تشغيل متكامل يعزز صافي الدخل ويحافظ على المنشأة',
      mgmtDesc: 'نتولى المسؤولية الكاملة عن العقار لنعفي المالك من الأعباء اليومية مع ضمان تدفق الإيرادات بأعلى كفاءة.',
      mgmtItem1Title: 'التأجير وإدارة علاقات المستأجرين',
      mgmtItem1Desc: 'فرز طلبات التأجير وتدقيق الملاءة المالية للمستأجرين، وتوثيق العقود رسمياً، ومتابعة التجديدات الدورية.',
      mgmtItem2Title: 'الإشراف الفني والصيانة الوقائية',
      mgmtItem2Desc: 'عقود صيانة دورية لأنظمة التكييف والمصاعد والأمن ومكافحة الحريق بأفضل الأسعار وأعلى جودة.',
      mgmtItem3Title: 'الإدارة المالية وكشوف الحسابات',
      mgmtItem3Desc: 'تحصيل الإيجارات وإيداعها في حسابات الملاك، مع إعداد تقارير دخل ومصروفات دورية واضحة وموثقة.',
      advisoryTitle: '3. الاستشارات وتطوير المحافظ',
      advisorySubtitle: 'رؤى تحليلية موجهة لاتخاذ قرارات استثمارية صائبة',
      advisoryDesc: 'مساعدة كبار الملاك على مراجعة أدائهم العقاري وإعادة هيكلة ممتلكاتهم لتحقيق أقصى درجات الكفاءة.',
      advisoryItem1Title: 'تحليل أداء المحفظة الحالية',
      advisoryItem1Desc: 'تقييم معدلات العائد الحالي لكل عقار ومقارنتها بمؤشرات السوق لتحديد الأصول الواجب تطويرها أو بيعها.',
      advisoryItem2Title: 'استراتيجيات التخارج وإعادة الاستثمار',
      advisoryItem2Desc: 'التخطيط لبيع الأصول في التوقيت الأمثل وإعادة ضخ السيولة في فرص ذات نمو أعلى واستقرار أفضل.',
      processTitle: 'منهجية تقديم خدماتنا',
      processSubtitle: 'أربع خطوات واضحة تضمن الدقة والانسيابية في كافة التعاملات',
      step1Title: 'الاستماع والدراسة الأولية',
      step1Desc: 'فهم أهداف العميل الاستثمارية وطبيعة الأصول بدقة، وتحديد النطاق الأمثل للعمل.',
      step2Title: 'وضع الخطة الاستراتيجية',
      step2Desc: 'إعداد تقرير تفصيلي يوضح الفرص المتاحة، أو برنامج التشغيل والإدارة المقترح مع جدول زمني.',
      step3Title: 'التنفيذ المهني المنضبط',
      step3Desc: 'مباشرة إجراءات الوساطة أو استلام العقار وبدء الإدارة التشغيلية الفورية عبر فرقنا المتخصصة.',
      step4Title: 'المتابعة وإعداد التقارير',
      step4Desc: 'تزويد المالك بتقارير دورية مستمرة واقتراح تحسينات تشغيلية تعزز من القيمة الدائمة للأصل.',
    },
    management: {
      pageTitle: 'إدارة الأملاك',
      pageSubtitle: 'قسم متخصص بإدارة العقارات السكنية والتجارية والمجمعات بأعلى درجات الانضباط والربحية.',
      overviewTitle: 'إدارة أصول تمنحك راحة البال وعائداً متنامياً',
      overviewParagraph1: 'في SPACE REAL ESTATE، ندرك أن إدارة العقار ليست مجرد تحصيل إيجارات، بل هي إدارة استثمارية وهندسية متكاملة تهدف إلى الحفاظ على القيمة الرأسمالية للمبنى، وإطالة عمره التشغيلي، وخفض الهدر المالي.',
      overviewParagraph2: 'يمتلك قسم إدارة الأملاك لدينا منظومة تشغيلية حديثة تضمن الاستجابة السريعة لمتطلبات المستأجرين، والرقابة الصارمة على مقاولي الصيانة، مما ينعكس إيجاباً على استقرار العقار وسمعته في السوق.',
      scopeTitle: 'محاور خدمات إدارة الأملاك',
      scopeSubtitle: 'تغطية شاملة لكل متطلبات العقار دون إغفال لأي تفصيل',
      scope1Title: 'إدارة الإشغال وعقود الإيجار',
      scope1Desc: 'انتقاء دقيق للمستأجرين، إبرام وتوثيق العقود الإلكترونية المعتمدة، ومتابعة تجديد العقود ومستحقات الدفع.',
      scope2Title: 'الصيانة الوقائية والتشغيل الفني',
      scope2Desc: 'زيارات تفتيش دورية، إشراف على سلامة الهياكل والأنظمة الكهروميكانيكية، واستجابة طارئة على مدار الساعة.',
      scope3Title: 'المحاسبة والتقارير المالية الدورية',
      scope3Desc: 'حسابات بنكية مخصصة، كشوفات شهرية أو ربع سنوية توضح المقبوضات والمصروفات، وإيداع صافي الأرباح للمالك.',
      scope4Title: 'الشؤون القانونية والمطالبات',
      scope4Desc: 'متابعة المتأخرات بحزم وضمن الأطر القانونية الرسمية، وتمثيل المالك أمام لجان فض المنازعات الإيجارية عند الحاجة.',
      metricsTitle: 'مؤشرات كفاءة إدارة الأملاك لدينا',
      metric1Val: '98.6%',
      metric1Label: 'متوسط نسبة الإشغال السنوي',
      metric2Val: '24 ساعة',
      metric2Label: 'متوسط سرعة معالجة بلاغات الصيانة',
      metric3Val: '0%',
      metric3Label: 'تأخير في تسوية إيرادات الملاك',
      formCardTitle: 'طلب عرض إدارة عقار',
      formCardSubtitle: 'املأ بيانات عقارك وسيتواصل معك فريق إدارة الأملاك لمناقشة الخطة التشغيلية وعرض الأسعار.',
      formOwnerName: 'اسم المالك / ممثل الكيان',
      formEmail: 'البريد الإلكتروني',
      formPhone: 'رقم الهاتف / واتساب',
      formCity: 'مدينة العقار',
      formPropertyType: 'نوع العقار (برج، مجمع سكني، مبنى تجاري، فيلا)',
      formUnitsArea: 'عدد الوحدات أو المساحة التقريبية',
      formStatus: 'حالة العقار الحالية',
      formStatusVacant: 'شاغر بالكامل',
      formStatusRented: 'مؤجر حالياً',
      formStatusConstruction: 'تحت الإنشاء / تسليم قريب',
      formNotes: 'أي تفاصيل أو متطلبات خاصة',
      formSubmitBtn: 'إرسال بيانات العقار',
      formSuccessTitle: 'شكراً لثقتكم بشركة سبيس',
      formSuccessDesc: 'تم استلام بيانات عقاركم بنجاح. سيقوم مدير إدارة الأملاك بالتواصل معكم خلال 24 ساعة عمل لتحديد موعد المعاينة.',
    },
    contact: {
      pageTitle: 'اتصل بنا',
      pageSubtitle: 'يسعدنا دائماً استقبال استفساراتكم والتعاون معكم لتلبية كافة متطلباتكم العقارية والاستثمارية.',
      formTitle: 'إرسال استفسار مباشر',
      formSubtitle: 'يرجى تزويدنا بتفاصيل طلبكم وسيقوم المستشار المختص بالرد عليكم سريعاً.',
      nameLabel: 'الاسم الكريم',
      namePlaceholder: 'أدخل اسمك الكامل',
      emailLabel: 'البريد الإلكتروني الرسمي',
      emailPlaceholder: 'name@company.com',
      phoneLabel: 'رقم الهاتف مع مفتاح الدولة',
      phonePlaceholder: '+971 50 000 0000',
      subjectLabel: 'نوع الاستفسار',
      subjectSales: 'شراء / بيع عقار واستثمارات',
      subjectMgmt: 'طلب إدارة أملاك وعقارات',
      subjectPartnership: 'شراكة أعمال أو تطوير',
      subjectGeneral: 'استفسار عام',
      cityLabel: 'المنطقة أو الإمارة',
      cityPlaceholder: 'عجمان، دولة الإمارات العربية المتحدة...',
      messageLabel: 'تفاصيل الرسالة أو الطلب',
      messagePlaceholder: 'يرجى كتابة نبذة عن طلبكم أو طبيعة العقار محل الاستفسار...',
      sendBtn: 'إرسال الرسالة الآن',
      officesTitle: 'مقرنا الرسمي',
      officesSubtitle: 'يسعدنا استقبالكم في مكتبنا الرئيسي بإمارة عجمان للاستشارات العقارية المباشرة',
      dubaiOfficeTitle: 'مكتب سبيس العقارية - عجمان',
      dubaiOfficeAddress: 'إمارة عجمان، دولة الإمارات العربية المتحدة',
      dubaiOfficePhone: '+971 6 740 SPACE (77223)',
      riyadhOfficeTitle: '',
      riyadhOfficeAddress: '',
      riyadhOfficePhone: '',
      londonOfficeTitle: '',
      londonOfficeAddress: '',
      londonOfficePhone: '',
      hoursTitle: 'أوقات العمل الرسمية',
      hoursText: 'من الاثنين إلى الجمعة: 9:00 صباحاً - 6:00 مساءً (توقيت الإمارات)',
      directChatTitle: 'محادثة سريعة عبر واتساب',
      directChatDesc: 'للاستفسارات العاجلة، يمكنكم التواصل المباشر مع فريق خدمة العملاء التنفيذي.',
      directChatBtn: 'بدء محادثة واتساب',
    },
    footer: {
      brandDesc: 'شركة متخصصة في الوساطة العقارية وإدارة الأملاك والأصول، مقرها إمارة عجمان وتقدم حلولاً استثمارية موثوقة في كافة أرجاء دولة الإمارات العربية المتحدة.',
      quickLinksTitle: 'صفحات الموقع',
      servicesTitle: 'خدماتنا الأساسية',
      contactTitle: 'التواصل المباشر',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      compliance: 'الامتثال والحوكمة',
    },
  },

  en: {
    brandName: 'SPACE REAL ESTATE',
    brandTagline: 'Distinguished Property Sales & Asset Management',
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Our Services',
      management: 'Asset Management',
      contact: 'Contact Us',
      requestConsultation: 'Consultation',
    },
    common: {
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      getInTouch: 'Get In Touch',
      readMore: 'Read More',
      submit: 'Submit Request',
      submitting: 'Submitting...',
      successMessage: 'Your request has been received. Our senior advisor will reach out shortly.',
      exploreServices: 'Explore Services',
      viewManagement: 'Asset Management',
      allRightsReserved: 'All Rights Reserved',
      headquarters: 'Headquarters',
      workingHours: 'Working Hours',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
    },
    home: {
      heroBadge: 'Specialized Real Estate Brokerage & Asset Management',
      heroTitle: 'Leadership & Professional Excellence in Real Estate',
      heroSubtitle: 'Delivering bespoke real estate solutions for high-net-worth investors and institutional owners; spanning high-value property sales, strategic acquisitions, and meticulous property management.',
      heroCtaPrimary: 'Explore Services',
      heroCtaSecondary: 'Contact Management',
      metrics: {
        aum: { value: 'Full Management', label: 'Rent collection & complete asset operations' },
        experience: { value: 'Certified Brokerage', label: 'Sales & acquisition of residential & commercial units' },
        occupancy: { value: 'Verified Contracts', label: 'Legal contracts safeguarding owners and tenants' },
        globalMarkets: { value: 'Ajman & UAE', label: 'Headquarters in Ajman with UAE-wide coverage' },
      },
      introTitle: 'An Institutional Approach to Real Estate Wealth',
      introSubtitle: 'In-depth market intelligence designed for discerning private and corporate clients',
      introParagraph: 'SPACE REAL ESTATE was established to set a benchmark in institutional real estate services, uniting rigorous financial analysis, discreet high-end brokerage, and disciplined asset management. We prioritize capital preservation and sustainable yield enhancement through transparent governance and best-in-class operations.',
      pillarsTitle: 'Two Core Pillars of Our Practice',
      pillarsSubtitle: 'Seamless integration serving buyers, sellers, and property owners alike',
      pillarSalesTitle: 'Property Sales & Acquisitions',
      pillarSalesDesc: 'Exclusive representation for high-value residential, commercial, and mixed-use properties backed by certified valuation and comprehensive market due diligence.',
      pillarSalesFeature1: 'Strategic off-market deals with tier-one master developers',
      pillarSalesFeature2: 'Analytical valuation reflecting verified market metrics',
      pillarSalesFeature3: 'Swift, confidential legal and transactional execution',
      pillarMgmtTitle: 'Property & Asset Management',
      pillarMgmtDesc: 'End-to-end operational oversight designed to optimize Net Operating Income (NOI), maintain peak occupancy, and preserve long-term structural value.',
      pillarMgmtFeature1: 'Vetted tenant acquisition and lease compliance administration',
      pillarMgmtFeature2: 'Proactive preventative maintenance and facility supervision',
      pillarMgmtFeature3: 'Clear accounting, transparent reporting, and timely disbursements',
      whyUsTitle: 'Why High-Profile Owners & Investors Choose SPACE',
      whyUsSubtitle: 'Structured disciplines putting client interests and asset sustainability first',
      whyUs1Title: 'Utmost Discretion & Privacy',
      whyUs1Desc: 'All transactions and client engagements adhere to stringent privacy standards protecting your identity and commercial interests.',
      whyUs2Title: 'Yield Optimization & Cash Flow',
      whyUs2Desc: 'Structured operational strategies that curb redundant overheads and secure dependable, predictable rental yields.',
      whyUs3Title: 'Trusted Ajman & UAE Real Estate Network',
      whyUs3Desc: 'Direct access to premier investors, high-grade tenants, and developers across Ajman and the United Arab Emirates.',
      whyUs4Title: 'Transparent Governance',
      whyUs4Desc: 'Clear accounting, comprehensive monthly statements, and structured reporting on every operational facet.',
      bannerTitle: 'Do you own real estate assets seeking institutional management?',
      bannerDesc: 'Our specialized asset management directors are prepared to deliver a comprehensive operational proposal for your properties.',
      bannerCta: 'Request Asset Management Proposal',
    },
    about: {
      pageTitle: 'About Us',
      pageSubtitle: 'A distinguished real estate advisory firm focused on strategic sales, institutional asset management, and long-term value preservation.',
      profileTitle: 'Profile of SPACE REAL ESTATE',
      profileParagraph1: 'SPACE REAL ESTATE is a premier real estate advisory and management firm delivering targeted, high-level solutions for luxury and commercial properties across key international markets.',
      profileParagraph2: 'Grounded in deep understanding of regional and international property cycles, we operate as a trusted strategic ally for private investors, family offices, and institutional funds seeking sustained returns.',
      visionTitle: 'Our Vision',
      visionDesc: 'To stand as the definitive benchmark for professional integrity, operational excellence in asset management, and discrete execution of high-value transactions.',
      missionTitle: 'Our Mission',
      missionDesc: 'To safeguard and enhance our clients’ real estate wealth through rigorous advisory, dependable management, and unwavering alignment with client interests.',
      valuesTitle: 'Our Core Principles',
      valuesSubtitle: 'The foundational tenets guiding our decisions and client partnerships',
      val1Title: 'Integrity & Transparency',
      val1Desc: 'Uncompromising clarity across all advisory, accounting, and operational reports.',
      val2Title: 'Professional Discipline',
      val2Desc: 'Certified specialists well-versed in complex regulatory and property frameworks.',
      val3Title: 'Discretion & Security',
      val3Desc: 'Absolute confidentiality protecting our clients’ commercial standing and portfolio data.',
      val4Title: 'Sustainable Longevity',
      val4Desc: 'Focusing on resilient lifecycle value, optimal tenant profiles, and sound structural upkeep.',
      presenceTitle: 'Our Headquarters & Market Reach',
      presenceSubtitle: 'Our licensed office in Ajman delivers bespoke real estate brokerage and asset management across the UAE',
      cities: {
        dubai: { name: 'Headquarters - Ajman, UAE', desc: 'Central office overseeing property transactions, sales brokerage, and property management.' },
        riyadh: { name: 'Ajman Corniche District', desc: 'Prime waterfront residential towers and high-yield luxury investment properties.' },
        london: { name: 'Al Nuaimiya & Al Rashidiya', desc: 'Active commercial and residential complexes with full tenant and facility oversight.' },
        singapore: { name: 'Al Rawda & Al Jurf', desc: 'Prime investment plots, villas, and newly commissioned developments.' },
      },
    },
    services: {
      pageTitle: 'Our Services',
      pageSubtitle: 'Comprehensive real estate solutions covering the complete asset lifecycle from acquisition and advisory to active operation and exit.',
      salesTitle: '1. Real Estate Sales & Acquisitions',
      salesSubtitle: 'Specialized brokerage, buyer representation, and private sales',
      salesDesc: 'We provide bespoke brokerage services tailored for institutional entities and discerning private investors seeking verified prime assets.',
      salesItem1Title: 'Exclusive Buyer & Investor Representation',
      salesItem1Desc: 'Pinpointing properties matching rigorous financial criteria and leading discreet negotiations on favorable terms.',
      salesItem2Title: 'Private Project & Asset Marketing',
      salesItem2Desc: 'Targeted marketing directly to our closed network of qualified global investors without unnecessary media exposure.',
      salesItem3Title: 'Due Diligence & Valuation Advisory',
      salesItem3Desc: 'Comprehensive legal, technical, and yield audits before transaction execution to eliminate latent risks.',
      mgmtTitle: '2. Property & Asset Management',
      mgmtSubtitle: 'Holistic operations maximizing net operating income while preserving asset condition',
      mgmtDesc: 'We assume total stewardship of the property, relieving the owner of day-to-day friction while securing consistent cash flows.',
      mgmtItem1Title: 'Tenant Screening & Lease Administration',
      mgmtItem1Desc: 'Strict vetting of prospective tenants, official contract registration, and structured rent collections.',
      mgmtItem2Title: 'Technical Supervision & Maintenance',
      mgmtItem2Desc: 'Vetted preventative service contracts for MEP, elevators, fire safety, and energy efficiency systems.',
      mgmtItem3Title: 'Financial Accounting & Reporting',
      mgmtItem3Desc: 'Dedicated bank accounts, structured monthly accounts, and complete transparency on operating expenditures.',
      advisoryTitle: '3. Strategic Portfolio Advisory',
      advisorySubtitle: 'Analytical insight empowering well-founded property investment decisions',
      advisoryDesc: 'Assisting portfolio owners in reviewing asset performance and restructuring holdings for heightened efficiency.',
      advisoryItem1Title: 'Portfolio Yield & Risk Audit',
      advisoryItem1Desc: 'Assessing current yield figures against market benchmarks to highlight underperforming assets.',
      advisoryItem2Title: 'Exit & Reallocation Strategy',
      advisoryItem2Desc: 'Formulating timely divestment schedules and reallocating capital into higher-stability opportunities.',
      processTitle: 'Our Service Methodology',
      processSubtitle: 'Four structured stages ensuring consistency and accountability',
      step1Title: 'Briefing & Feasibility Review',
      step1Desc: 'Understanding investment horizons, asset condition, and defining precise engagement scopes.',
      step2Title: 'Strategic Roadmap Formulation',
      step2Desc: 'Drafting tailored acquisition plans or comprehensive operational frameworks with defined milestones.',
      step3Title: 'Disciplined Execution',
      step3Desc: 'Executing brokerage negotiations or taking handover for operational onboarding via dedicated teams.',
      step4Title: 'Ongoing Governance & Reviews',
      step4Desc: 'Delivering periodic analytical reports, performance audits, and value-enhancement recommendations.',
    },
    management: {
      pageTitle: 'Asset Management',
      pageSubtitle: 'A specialized division managing residential, commercial, and mixed-use assets with institutional precision.',
      overviewTitle: 'Asset Management Offering Peace of Mind and Sustained Returns',
      overviewParagraph1: 'At SPACE REAL ESTATE, we regard property management not merely as rent collection, but as an engineering and investment discipline aimed at preserving capital value and optimizing operational lifespan.',
      overviewParagraph2: 'Our management infrastructure guarantees immediate response times to tenant inquiries, rigorous vendor oversight, and strict cost controls, enhancing the asset’s reputation in the marketplace.',
      scopeTitle: 'Core Scope of Management Services',
      scopeSubtitle: 'Complete coverage leaving no operational or administrative detail unaddressed',
      scope1Title: 'Occupancy & Lease Governance',
      scope1Desc: 'Thorough tenant due diligence, authenticated digital contracts, and proactive renewal cycles.',
      scope2Title: 'Preventative Maintenance & MEP Oversight',
      scope2Desc: 'Scheduled technical inspections, certified contractor management, and 24/7 emergency response protocols.',
      scope3Title: 'Accounting & Disbursal Schedules',
      scope3Desc: 'Escrow handling, transparent monthly financial statements, and guaranteed timely net income remittance.',
      scope4Title: 'Legal Compliance & Dispute Handling',
      scope4Desc: 'Proactive collection follow-ups and full legal representation before tenancy dispute centers if ever required.',
      metricsTitle: 'Our Operational Benchmarks',
      metric1Val: '98.6%',
      metric1Label: 'Average Annual Occupancy',
      metric2Val: '24 Hours',
      metric2Label: 'Standard Resolution Window for Maintenance',
      metric3Val: '0%',
      metric3Label: 'Delay in Owner Remittance Transfers',
      formCardTitle: 'Request a Management Proposal',
      formCardSubtitle: 'Submit your asset details below and our Asset Management Director will prepare a customized proposal.',
      formOwnerName: 'Owner Name / Organization Representative',
      formEmail: 'Official Email Address',
      formPhone: 'Phone / WhatsApp with Country Code',
      formCity: 'Property City / Location',
      formPropertyType: 'Property Type (Tower, Compound, Commercial, Villa)',
      formUnitsArea: 'Number of Units or Approximate Gross Area',
      formStatus: 'Current Occupancy Status',
      formStatusVacant: 'Fully Vacant',
      formStatusRented: 'Currently Tenanted',
      formStatusConstruction: 'Under Construction / Approaching Handover',
      formNotes: 'Specific Requirements or Portfolio Notes',
      formSubmitBtn: 'Submit Asset Information',
      formSuccessTitle: 'Thank You for Trusting SPACE',
      formSuccessDesc: 'Your property details have been recorded. Our Asset Management Director will contact you within 24 business hours to arrange an inspection.',
    },
    contact: {
      pageTitle: 'Contact Us',
      pageSubtitle: 'We welcome your inquiries and look forward to discussing your real estate investment and management requirements.',
      formTitle: 'Send a Direct Inquiry',
      formSubtitle: 'Please outline your request and our appropriate department lead will get back to you promptly.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Official Email',
      emailPlaceholder: 'name@company.com',
      phoneLabel: 'Contact Number with Country Code',
      phonePlaceholder: '+971 50 000 0000',
      subjectLabel: 'Inquiry Category',
      subjectSales: 'Property Sales & Acquisition',
      subjectMgmt: 'Property Management Proposal',
      subjectPartnership: 'Institutional Partnership',
      subjectGeneral: 'General Inquiry',
      cityLabel: 'District / Emirate',
      cityPlaceholder: 'Ajman, United Arab Emirates...',
      messageLabel: 'Message or Scope Details',
      messagePlaceholder: 'Provide a brief summary of your inquiry or property details...',
      sendBtn: 'Send Message',
      officesTitle: 'Our Official Headquarters',
      officesSubtitle: 'Visit our primary office in Ajman for in-person advisory consultations',
      dubaiOfficeTitle: 'SPACE Real Estate - Ajman HQ',
      dubaiOfficeAddress: 'Ajman, United Arab Emirates',
      dubaiOfficePhone: '+971 6 740 SPACE (77223)',
      riyadhOfficeTitle: '',
      riyadhOfficeAddress: '',
      riyadhOfficePhone: '',
      londonOfficeTitle: '',
      londonOfficeAddress: '',
      londonOfficePhone: '',
      hoursTitle: 'Official Business Hours',
      hoursText: 'Monday to Friday: 9:00 AM – 6:00 PM (UAE Local Time)',
      directChatTitle: 'Direct WhatsApp Communication',
      directChatDesc: 'For urgent executive inquiries, connect directly with our client concierge.',
      directChatBtn: 'Open WhatsApp Chat',
    },
    footer: {
      brandDesc: 'A specialized real estate brokerage and asset management institution headquartered in Ajman, delivering trusted property solutions across the United Arab Emirates.',
      quickLinksTitle: 'Quick Links',
      servicesTitle: 'Core Divisions',
      contactTitle: 'Direct Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Engagement',
      compliance: 'Regulatory Compliance',
    },
  },

  zh: {
    brandName: 'SPACE REAL ESTATE',
    brandTagline: '卓越房地产销售与资产管理机构',
    nav: {
      home: '首页',
      about: '关于我们',
      services: '核心服务',
      management: '物业管理',
      contact: '联系我们',
      requestConsultation: '预约咨询',
    },
    common: {
      learnMore: '了解更多',
      contactUs: '联系我们',
      getInTouch: '开启合作',
      readMore: '阅读全文',
      submit: '提交申请',
      submitting: '正在提交...',
      successMessage: '已收到您的需求，我们的资深顾问将尽快与您联系。',
      exploreServices: '探索我们的服务',
      viewManagement: '物业与资产管理',
      allRightsReserved: '版权所有',
      headquarters: '全球总部',
      workingHours: '办公时间',
      phone: '联系电话',
      email: '电子邮箱',
      address: '地址',
    },
    home: {
      heroBadge: '专业房地产经纪与资产管理机构',
      heroTitle: '引领全球不动产投资与专业资产管理',
      heroSubtitle: '为高净值投资者与机构业主提供全方位不动产解决方案；涵盖优质房产战略买卖、投资顾问及制度化全权物业管理。',
      heroCtaPrimary: '查看业务范围',
      heroCtaSecondary: '联系管理团队',
      metrics: {
        aum: { value: '全权物业管理', label: '租金收缴、租约管理与日常维护' },
        experience: { value: '官方专业经纪', label: '住宅与商业地产买卖及投资咨询' },
        occupancy: { value: '合规正规合约', label: '严谨法律程序全面保障业主与租户权益' },
        globalMarkets: { value: '阿吉曼与全阿联酋', label: '总部设于阿吉曼，业务辐射阿联酋全境' },
      },
      introTitle: '以机构级水准管理不动产财富',
      introSubtitle: '为全球私人客户及企业机构量身定制的专业服务体系',
      introParagraph: 'SPACE REAL ESTATE 秉持严谨的金融分析视角与卓越的服务标准，结合高端经纪与全生命周期资产管理。我们致力于在透明合规的框架下，有效守护委托人的房产本金，实现稳健的现金流与长期资本增值。',
      pillarsTitle: '两大核心业务支柱',
      pillarsSubtitle: '有机融合买卖与管理，为业主及投资者提供完整闭环',
      pillarSalesTitle: '优质房地产销售与并购',
      pillarSalesDesc: '代表买家与卖家开展高端住宅、商业地块及整栋物业的独家代理交易，配合深度尽调与估值。',
      pillarSalesFeature1: '与顶级开发商的独家战略非公开发售房源',
      pillarSalesFeature2: '基于真实市场大数据的精准资产估值',
      pillarSalesFeature3: '高效、保密的法律过户及合规交易流程',
      pillarMgmtTitle: '物业与资产管理',
      pillarMgmtDesc: '全方位运营维护，旨在最大化净营运收入（NOI），确保高出租率并维持建筑长期资产价值。',
      pillarMgmtFeature1: '严格租客资质审核与合规租约管理',
      pillarMgmtFeature2: '前瞻性预防维护与工程设备专业维保',
      pillarMgmtFeature3: '透明详尽的财务月报与精准租金结算',
      whyUsTitle: '为何重要业主与机构信赖 SPACE',
      whyUsSubtitle: '清晰的制度流程，始终将客户利益与资产长效稳定放在首位',
      whyUs1Title: '严格保密与隐私保护',
      whyUs1Desc: '所有交易和往来均遵循严格的信息保密协议，充分尊重并保护客户的个人隐私与商业机密。',
      whyUs2Title: '收益优化与成本控制',
      whyUs2Desc: '推行科学的维保方案，杜绝冗余费用，确保租金现金流准时、稳定到账。',
      whyUs3Title: '阿吉曼及阿联酋本土资源网络',
      whyUs3Desc: '深度连通阿吉曼及阿联酋各地的知名开发商、核心投资者与优质租客群体。',
      whyUs4Title: '透明治理与月度报告',
      whyUs4Desc: '详细账目及定期财务报表，清晰呈现每一笔收支与物业运营状态。',
      bannerTitle: '您拥有需要专业机构管理的房产资产吗？',
      bannerDesc: '我们的资产管理主管随时准备为您量身定制物业运营与收益优化方案。',
      bannerCta: '索取资产管理建议书',
    },
    about: {
      pageTitle: '关于我们',
      pageSubtitle: '致力于高端房产销售、机构级资产管理与资本稳健增长的专业不动产咨询公司。',
      profileTitle: 'SPACE REAL ESTATE 概况',
      profileParagraph1: 'SPACE REAL ESTATE 是一家立足国际核心城市的高端房地产顾问与资产管理公司，专为全球投资者提供定制化房产配置与专业运营服务。',
      profileParagraph2: '凭借对区域与国际地产周期深刻的洞察力，我们成为私人投资者、家族办公室及机构基金在不动产投资领域长期信赖的战略合作伙伴。',
      visionTitle: '我们的愿景',
      visionDesc: '成为全球房地产业界在专业诚信、物业精细化管理及高价值交易执行方面的典范标杆。',
      missionTitle: '我们的使命',
      missionDesc: '通过客观严谨的顾问意见、值得信赖的日常管理与高度透明的流程，守护并增进客户的不动产价值。',
      valuesTitle: '核心价值观',
      valuesSubtitle: '指导我们日常决策与伙伴合作的基石原则',
      val1Title: '诚信与透明',
      val1Desc: '所有财务记录与业务往来绝无隐瞒，坚持清晰透明。',
      val2Title: '专业与敬业',
      val2Desc: '资深行业专家团队，精通当地法规与国际商业通行准则。',
      val3Title: '严守私密',
      val3Desc: '保护客户商业机密与身份隐私是不可逾越的红线。',
      val4Title: '长期稳健',
      val4Desc: '着眼于建筑生命周期的长期稳健，避免短期投机行为。',
      presenceTitle: '官方总部与主要服务区域',
      presenceSubtitle: '立足阿吉曼官方办事机构，为全阿联酋客户提供专业的房产经纪与资产管理服务',
      cities: {
        dubai: { name: '公司总部 - 阿联酋阿吉曼', desc: '核心运营中心，统筹物业买卖、全权托管与资产增值管理。' },
        riyadh: { name: '阿吉曼滨海大道核心区', desc: '一线全海景豪华公寓楼盘及优质水岸投资物业。' },
        london: { name: '努艾米亚与拉希迪亚区', desc: '高收益商住综合体，涵盖租户筛选、租约履约及工程巡检全流程。' },
        singapore: { name: '拉乌达与朱尔夫投资区', desc: '精选投资土地、高端独栋别墅及新建潜力商业地产。' },
      },
    },
    services: {
      pageTitle: '核心服务',
      pageSubtitle: '覆盖不动产全生命周期的一站式专业解决方案：从收购咨询、日常运营到资产退出。',
      salesTitle: '1. 房地产销售与资产并购',
      salesSubtitle: '专业经纪代理、买家代表与非公开私洽交易',
      salesDesc: '为机构及高净值个人提供量身定制的交易服务，专注于经过严格尽职调查的优质资产。',
      salesItem1Title: '独家买家投资代表',
      salesItem1Desc: '依据客户具体回报指标搜寻标的，负责全流程商务谈判并争取最佳条款。',
      salesItem2Title: '私密化专案推介',
      salesItem2Desc: '面向我们的全球合格投资者封闭网络进行精准推介，杜绝不必要的公众曝光。',
      salesItem3Title: '尽职调查与资产估值',
      salesItem3Desc: '签约前开展详尽的法律、工程及财务审计，全面规避潜在交易风险。',
      mgmtTitle: '2. 物业与资产全权管理',
      mgmtSubtitle: '精细化日常运营，提升净营运收益并长久维持物业品质',
      mgmtDesc: '全面代行业主日常监管职责，消除管理琐事烦恼，确保租金回报稳定如期交付。',
      mgmtItem1Title: '租户甄选与租约规范',
      mgmtItem1Desc: '全方位背景与信用审查，合规电子租约签署，及时的租约续期及押金管理。',
      mgmtItem2Title: '工程维保与设施监督',
      mgmtItem2Desc: '机电、电梯、消防等设施的定期预防性检修，保障建筑安全高效运行。',
      mgmtItem3Title: '财务核算与透明账目',
      mgmtItem3Desc: '专属账户托管，详尽收支明细月报，按时结算转账。',
      advisoryTitle: '3. 投资组合战略顾问',
      advisorySubtitle: '基于数据与周期的深度分析，助力科学决策',
      advisoryDesc: '协助大业主复盘现有不动产组合的表现，重塑资产结构以提升整体收益韧性。',
      advisoryItem1Title: '回报率与风险审计',
      advisoryItem1Desc: '对标市场水平评估各物业表现，明确需要优化或置换的资产。',
      advisoryItem2Title: '退出时机与再投资规划',
      advisoryItem2Desc: '规划理想的变现退出时间点，并将流动资金转投向更高潜力的稳健标的。',
      processTitle: '服务合作流程',
      processSubtitle: '规范透明的四步法，确保每一阶段皆有迹可循',
      step1Title: '需求沟通与可行性评估',
      step1Desc: '深入了解客户的收益预期与资产现状，明确合作范围与关键目标。',
      step2Title: '定制化战略方案',
      step2Desc: '制定详尽的买卖策略或物业全流程管理框架与时间规划。',
      step3Title: '专业团队落地执行',
      step3Desc: '推进交易谈判或正式接管物业，专业管理团队全速进驻开展日常工作。',
      step4Title: '持续监督与报表反馈',
      step4Desc: '定期出具财务与运营分析报告，持续提出增值建议以保障资产长期竞争力。',
    },
    management: {
      pageTitle: '物业与资产管理',
      pageSubtitle: '以机构级标准管理住宅群、商业楼宇及综合体，实现安心与稳定增值。',
      overviewTitle: '为您带来省心体验与稳步增长的资产管理',
      overviewParagraph1: '在 SPACE REAL ESTATE，我们深信物业管理远不止于按期收租，它更是一门融合了工程管理与资本运作的系统学科，旨在守护建筑资产价值并延长其经济寿命。',
      overviewParagraph2: '我们的专业团队以高标准的响应机制服务租客，并以严格标准督导各类维保供应商，从而大幅提升物业在市场上的美誉度与长期租金竞争力。',
      scopeTitle: '管理服务范围',
      scopeSubtitle: '无微不至的全面覆盖，涵盖建筑运营的所有细节',
      scope1Title: '入住率与租客关系管理',
      scope1Desc: '严格甄选合格租户，合法合规签署电子合同，主动管理租约续期及押金托管。',
      scope2Title: '预防性工程维护与巡检',
      scope2Desc: '定期的机电设备检查，专业持证工程人员维护，提供24小时紧急故障应急机制。',
      scope3Title: '财务核算与收益结算',
      scope3Desc: '专用资金账户，月度/季度详尽财务报表，准时向业主划拨净收益。',
      scope4Title: '法务合规与争议解决',
      scope4Desc: '在法定框架下规范催缴租金，在需要时代行业主出席租赁纠纷仲裁委员会。',
      metricsTitle: '管理绩效指标',
      metric1Val: '98.6%',
      metric1Label: '平均年度出租率',
      metric2Val: '24小时',
      metric2Label: '标准工单响应及修复时效',
      metric3Val: '0%',
      metric3Label: '业主收益划拨延迟率',
      formCardTitle: '索取物业管理建议书',
      formCardSubtitle: '请填写您的房产概况，我们的资产管理总监将为您制定专属运营计划与报价。',
      formOwnerName: '业主姓名 / 机构代表',
      formEmail: '电子邮箱',
      formPhone: '联系电话（含国家代码）',
      formCity: '房产所在城市',
      formPropertyType: '房产类型（大厦、住宅区、商业楼宇、别墅群）',
      formUnitsArea: '单元数量或总建筑面积',
      formStatus: '当前出租状态',
      formStatusVacant: '全部空置',
      formStatusRented: '目前出租中',
      formStatusConstruction: '施工中 / 即将交付',
      formNotes: '特殊需求或备注说明',
      formSubmitBtn: '提交物业信息',
      formSuccessTitle: '感谢您对 SPACE 的信赖',
      formSuccessDesc: '已收到您的房产信息。我们的物业管理总监将在24个工作小时内与您联系安排实地勘察。',
    },
    contact: {
      pageTitle: '联系我们',
      pageSubtitle: '随时欢迎您的垂询，期待与您探讨不动产投资配置与专业管理合作。',
      formTitle: '发送直接咨询',
      formSubtitle: '请详述您的需求，对应部门负责人将尽快与您取得联系。',
      nameLabel: '您的姓名',
      namePlaceholder: '请输入您的全名',
      emailLabel: '企业/个人邮箱',
      emailPlaceholder: 'name@company.com',
      phoneLabel: '联系电话（含国家区号）',
      phonePlaceholder: '+971 50 000 0000',
      subjectLabel: '咨询类别',
      subjectSales: '房产买卖与投资配置',
      subjectMgmt: '物业与资产管理方案',
      subjectPartnership: '机构合作与开发',
      subjectGeneral: '一般咨询',
      cityLabel: '意向区域 / 酋长国',
      cityPlaceholder: '阿联酋阿吉曼...',
      messageLabel: '咨询内容或房产概况',
      messagePlaceholder: '请简要说明您的需求或房产具体情况...',
      sendBtn: '发送信息',
      officesTitle: '官方办公机构',
      officesSubtitle: '欢迎莅临我们在阿联酋阿吉曼的官方办公室进行面对面咨询',
      dubaiOfficeTitle: 'SPACE 房地产 - 阿吉曼总部',
      dubaiOfficeAddress: '阿拉伯联合酋长国 · 阿吉曼',
      dubaiOfficePhone: '+971 6 740 SPACE (77223)',
      riyadhOfficeTitle: '',
      riyadhOfficeAddress: '',
      riyadhOfficePhone: '',
      londonOfficeTitle: '',
      londonOfficeAddress: '',
      londonOfficePhone: '',
      hoursTitle: '办公时间',
      hoursText: '周一至周五: 上午9:00 – 下午6:00 (阿联酋当地时间)',
      directChatTitle: 'WhatsApp 快速沟通',
      directChatDesc: '如有紧急事务，可直接通过 WhatsApp 与我们的客户专员联系。',
      directChatBtn: '开启 WhatsApp 会话',
    },
    footer: {
      brandDesc: '总部位于阿吉曼的专业房地产经纪与资产管理机构，为全阿联酋客户提供值得信赖的高效投资与托管解决方案。',
      quickLinksTitle: '网站导航',
      servicesTitle: '主营业务',
      contactTitle: '联系通道',
      privacy: '隐私政策',
      terms: '服务条款',
      compliance: '合规准则',
    },
  },

  ru: {
    brandName: 'SPACE REAL ESTATE',
    brandTagline: 'Продажи элитной недвижимости и управление активами',
    nav: {
      home: 'Главная',
      about: 'О нас',
      services: 'Услуги',
      management: 'Управление',
      contact: 'Контакты',
      requestConsultation: 'Консультация',
    },
    common: {
      learnMore: 'Узнать больше',
      contactUs: 'Связаться с нами',
      getInTouch: 'Начать сотрудничество',
      readMore: 'Подробнее',
      submit: 'Отправить запрос',
      submitting: 'Отправка...',
      successMessage: 'Ваш запрос успешно получен. Наш ведущий консультант свяжется с вами в ближайшее время.',
      exploreServices: 'Ознакомиться с услугами',
      viewManagement: 'Управление недвижимостью',
      allRightsReserved: 'Все права защищены',
      headquarters: 'Штаб-квартира',
      workingHours: 'Часы работы',
      phone: 'Телефон',
      email: 'Эл. почта',
      address: 'Адрес',
    },
    home: {
      heroBadge: 'Профессиональный брокеридж и управление активами',
      heroTitle: 'Лидерство и профессионализм в сфере недвижимости',
      heroSubtitle: 'Комплексные решения для состоятельных частных инвесторов и корпоративных владельцев недвижимости: от стратегических сделок купли-продажи до полного операционного управления активами.',
      heroCtaPrimary: 'Наши услуги',
      heroCtaSecondary: 'Связаться с руководством',
      metrics: {
        aum: { value: 'Полное управление', label: 'Сбор аренды, обслуживание и контроль договоров' },
        experience: { value: 'Лицензированный брокеридж', label: 'Купля-продажа жилой и коммерческой недвижимости' },
        occupancy: { value: 'Надежные договоры', label: 'Юридическая чистота сделок и защита прав сторон' },
        globalMarkets: { value: 'Аджман и все ОАЭ', label: 'Штаб-квартира в Аджмане, работа по всей территории ОАЭ' },
      },
      introTitle: 'Институциональный подход к управлению недвижимостью',
      introSubtitle: 'Глубокая аналитика для частных клиентов, семейных офисов и фондов',
      introParagraph: 'Компания SPACE REAL ESTATE создана для установления новых стандартов профессионального сервиса, объединяя глубокий финансовый анализ, конфиденциальный брокеридж и безупречное управление активами. Наш главный приоритет — сохранение капитала доверителей и рост доходности в условиях прозрачности и строгой корпоративной этики.',
      pillarsTitle: 'Два фундаментальных направления деятельности',
      pillarsSubtitle: 'Бесшовная интеграция брокериджа и управления для инвесторов и владельцев',
      pillarSalesTitle: 'Продажи недвижимости и приобретение',
      pillarSalesDesc: 'Эксклюзивное представление интересов покупателей и продавцов элитной жилой и коммерческой недвижимости, подкрепленное экспертной оценкой.',
      pillarSalesFeature1: 'Эксклюзивные закрытые сделки с ведущими девелоперами',
      pillarSalesFeature2: 'Точная оценка стоимости на основе реальных рыночных данных',
      pillarSalesFeature3: 'Оперативное и строго конфиденциальное юридическое оформление',
      pillarMgmtTitle: 'Управление активами и эксплуатация',
      pillarMgmtDesc: 'Комплексное обслуживание объектов для максимизации чистой операционной прибыли (NOI), сохранения стабильной аренды и долгосрочной стоимости здания.',
      pillarMgmtFeature1: 'Тщательный отбор арендаторов и администрирование договоров',
      pillarMgmtFeature2: 'Регулярный технический аудит и превентивное обслуживание',
      pillarMgmtFeature3: 'Прозрачная финансовая отчетность и своевременные выплаты',
      whyUsTitle: 'Почему владельцы недвижимости выбирают SPACE',
      whyUsSubtitle: 'Прозрачные стандарты, ставящие интересы клиента и долговечность активов на первое место',
      whyUs1Title: 'Абсолютная конфиденциальность',
      whyUs1Desc: 'Все переговоры и финансовые расчеты защищены строгими протоколами безопасности данных и не подлежат огласке.',
      whyUs2Title: 'Оптимизация доходности',
      whyUs2Desc: 'Выверенные эксплуатационные модели исключают избыточные расходы и гарантируют регулярный арендный доход.',
      whyUs3Title: 'Надежная сеть в Аджмане и ОАЭ',
      whyUs3Desc: 'Прямые контакты с ведущими застройщиками, частными инвесторами и владельцами недвижимости в Аджмане и ОАЭ.',
      whyUs4Title: 'Прозрачная отчетность',
      whyUs4Desc: 'Регулярные структурированные отчеты о доходах, расходах и текущем эксплуатационном состоянии объекта.',
      bannerTitle: 'Владеете недвижимостью и ищете надежную управляющую компанию?',
      bannerDesc: 'Наши специалисты по управлению активами готовы подготовить индивидуальный аудит и операционный план для вашей недвижимости.',
      bannerCta: 'Запросить коммерческое предложение',
    },
    about: {
      pageTitle: 'О компании',
      pageSubtitle: 'Ведущая консалтинговая компания в сфере стратегических продаж, инвестиционного анализа и профессионального управления недвижимостью.',
      profileTitle: 'О компании SPACE REAL ESTATE',
      profileParagraph1: 'SPACE REAL ESTATE — международная брокерская и управляющая компания, предоставляющая полный спектр высококлассных услуг для владельцев элитной и коммерческой недвижимости.',
      profileParagraph2: 'Опираясь на глубокое понимание региональных и глобальных рыночных циклов, мы выступаем доверенным партнером для частных инвесторов, семейных офисов и корпораций, ориентированных на устойчивую доходность.',
      visionTitle: 'Наше видение',
      visionDesc: 'Быть эталоном профессионализма, прозрачности в управлении недвижимостью и точности в реализации масштабных сделок.',
      missionTitle: 'Наша миссия',
      missionDesc: 'Оберегать и приумножать недвижимые активы клиентов через объективный анализ, ответственность и высочайшие стандарты сервиса.',
      valuesTitle: 'Наши ключевые ценности',
      valuesSubtitle: 'Принципы, определяющие каждое наше решение и партнерские отношения',
      val1Title: 'Честность и прозрачность',
      val1Desc: 'Абсолютная открытость во всех расчетах, договорах и отчетах без скрытых комиссий.',
      val2Title: 'Профессионализм',
      val2Desc: 'Команда сертифицированных экспертов с доскональным знанием законодательства.',
      val3Title: 'Конфиденциальность',
      val3Desc: 'Безусловная защита коммерческой тайны и персональных данных наших клиентов.',
      val4Title: 'Долгосрочная надежность',
      val4Desc: 'Ориентация на фундаментальную ценность и безупречное состояние объектов.',
      presenceTitle: 'Штаб-квартира и ключевые районы',
      presenceSubtitle: 'Официальный офис в Аджмане обеспечивает полный комплекс услуг по недвижимости на всей территории ОАЭ',
      cities: {
        dubai: { name: 'Главный офис — Аджман, ОАЭ', desc: 'Операционный центр: сопровождение сделок с недвижимостью и полное управление активами.' },
        riyadh: { name: 'Район Корниш Аджман', desc: 'Премиальные жилые башни на первой линии с панорамным видом на море.' },
        london: { name: 'Аль Нуаймия и Аль Рашидия', desc: 'Коммерческие и жилые комплексы с высокой доходностью и полным техническим надзором.' },
        singapore: { name: 'Аль Равда и Аль Джурф', desc: 'Инвестиционные земельные участки, виллы и современные жилые комплексы.' },
      },
    },
    services: {
      pageTitle: 'Наши услуги',
      pageSubtitle: 'Комплексные решения на всех этапах жизненного цикла недвижимости: от выбора и покупки до эксплуатации и продажи.',
      salesTitle: '1. Продажи и приобретение недвижимости',
      salesSubtitle: 'Профессиональный брокеридж, представление интересов покупателей и продавцов',
      salesDesc: 'Индивидуальное сопровождение сделок с проверенными объектами для частных лиц и институциональных инвесторов.',
      salesItem1Title: 'Эксклюзивное представительство инвестора',
      salesItem1Desc: 'Поиск активов строго под инвестиционные критерии клиента и ведение переговоров на выгодных условиях.',
      salesItem2Title: 'Закрытые продажи и маркетинг проектов',
      salesItem2Desc: 'Адресная работа с закрытой международной базой квалифицированных покупателей без публичной огласки.',
      salesItem3Title: 'Комплексный аудит (Due Diligence) и оценка',
      salesItem3Desc: 'Правовая, техническая и финансовая экспертиза объекта до заключения сделки для исключения любых рисков.',
      mgmtTitle: '2. Управление недвижимостью и эксплуатация',
      mgmtSubtitle: 'Полный цикл обслуживания для стабильного дохода и сохранности объектов',
      mgmtDesc: 'Мы берем на себя все повседневные вопросы, обеспечивая владельцу регулярный финансовый поток без лишних хлопот.',
      mgmtItem1Title: 'Подбор арендаторов и администрирование аренды',
      mgmtItem1Desc: 'Проверка платежеспособности, официальная регистрация договоров и контроль своевременных оплат.',
      mgmtItem2Title: 'Технический надзор и регулярный сервис',
      mgmtItem2Desc: 'Контроль за состоянием инженерных систем, вентиляции, лифтов и пожарной безопасности.',
      mgmtItem3Title: 'Бухгалтерский учет и регулярные отчеты',
      mgmtItem3Desc: 'Отдельный счет объекта, прозрачные детализированные ежемесячные отчеты и быстрый перевод прибыли.',
      advisoryTitle: '3. Инвестиционный консалтинг портфелей',
      advisorySubtitle: 'Глубокая аналитика для принятия обоснованных финансовых решений',
      advisoryDesc: 'Помощь владельцам в оптимизации структуры недвижимости и повышении совокупной рентабельности.',
      advisoryItem1Title: 'Аудит доходности и рисков портфеля',
      advisoryItem1Desc: 'Сравнение показателей объектов с рыночными данными для выявления активов, требующих реструктуризации.',
      advisoryItem2Title: 'Стратегии выхода и реинвестирования',
      advisoryItem2Desc: 'Определение наиболее выгодного момента для продажи и направление средств в более устойчивые активы.',
      processTitle: 'Методология сотрудничества',
      processSubtitle: 'Четыре четких этапа, обеспечивающих прозрачность и предсказуемость результата',
      step1Title: 'Анализ задач и первичная экспертиза',
      step1Desc: 'Детальное изучение целей клиента, состояния объектов и определение объема необходимых работ.',
      step2Title: 'Разработка стратегии',
      step2Desc: 'Подготовка плана приобретения, продажи или подробной программы управления объектом.',
      step3Title: 'Профессиональная реализация',
      step3Desc: 'Проведение переговоров по сделке или прием объекта в управление с оперативным подключением профильных команд.',
      step4Title: 'Контроль и регулярная отчетность',
      step4Desc: 'Предоставление периодических отчетов о доходности и предложение мер по увеличению капитализации.',
    },
    management: {
      pageTitle: 'Управление недвижимостью',
      pageSubtitle: 'Профессиональное подразделение по управлению жилыми, коммерческими зданиями и комплексами.',
      overviewTitle: 'Управление активами: спокойствие владельца и стабильная прибыль',
      overviewParagraph1: 'В компании SPACE REAL ESTATE мы рассматриваем управление недвижимостью не просто как сбор платежей, а как строгую инженерно-финансовую дисциплину, нацеленную на продление срока службы объекта и рост его капитализации.',
      overviewParagraph2: 'Наша операционная модель обеспечивает быстрое реагирование на запросы жильцов, жесткий контроль качества подрядчиков и оптимизацию эксплуатационных расходов.',
      scopeTitle: 'Направления услуг по управлению',
      scopeSubtitle: 'Полное покрытие всех технических, юридических и финансовых аспектов',
      scope1Title: 'Заполняемость и арендные отношения',
      scope1Desc: 'Тщательная проверка арендаторов, оформление официальных договоров, контроль пролонгаций и депозитов.',
      scope2Title: 'Превентивное техническое обслуживание',
      scope2Desc: 'Плановые проверки состояния инженерных коммуникаций, сертифицированные мастера и аварийная служба 24/7.',
      scope3Title: 'Финансовый учет и перечисление дохода',
      scope3Desc: 'Целевые расчетные счета, ежемесячная отчетность по доходам и расходам, перевод чистой прибыли владельцу.',
      scope4Title: 'Правовое сопровождение',
      scope4Desc: 'Контроль соблюдения условий договора и защита интересов владельца в спорах при необходимости.',
      metricsTitle: 'Показатели эффективности нашей работы',
      metric1Val: '98.6%',
      metric1Label: 'Среднегодовой уровень заполняемости',
      metric2Val: '24 часа',
      metric2Label: 'Стандартный регламент решения сервисных заявок',
      metric3Val: '0%',
      metric3Label: 'Задержек в перечислении арендных доходов владельцам',
      formCardTitle: 'Запросить расчет условий управления',
      formCardSubtitle: 'Заполните краткую информацию об объекте, и наш руководитель направления подготовит индивидуальное предложение.',
      formOwnerName: 'ФИО владельца / представителя компании',
      formEmail: 'Электронная почта',
      formPhone: 'Телефон / WhatsApp с кодом страны',
      formCity: 'Город расположения объекта',
      formPropertyType: 'Тип недвижимости (башня, жилой комплекс, БЦ, вилла)',
      formUnitsArea: 'Количество помещений или общая площадь',
      formStatus: 'Текущий статус объекта',
      formStatusVacant: 'Полностью свободен',
      formStatusRented: 'Сдан в аренду',
      formStatusConstruction: 'Строящийся / скоро сдача',
      formNotes: 'Дополнительные пожелания или особенности',
      formSubmitBtn: 'Отправить данные об объекте',
      formSuccessTitle: 'Благодарим за доверие к компании SPACE',
      formSuccessDesc: 'Информация об объекте успешно принята. Наш руководитель отдела свяжется с вами в течение 24 рабочих часов для согласования деталей.',
    },
    contact: {
      pageTitle: 'Контакты',
      pageSubtitle: 'Мы всегда рады ответить на ваши вопросы и обсудить задачи по приобретению или управлению недвижимостью.',
      formTitle: 'Отправить прямое обращение',
      formSubtitle: 'Укажите детали вашего запроса, и профильный специалист оперативно свяжется с вами.',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Иван Иванов',
      emailLabel: 'Корпоративная или личная почта',
      emailPlaceholder: 'name@company.com',
      phoneLabel: 'Контактный телефон с кодом страны',
      phonePlaceholder: '+971 50 000 0000',
      subjectLabel: 'Тема обращения',
      subjectSales: 'Покупка или продажа недвижимости',
      subjectMgmt: 'Управление недвижимостью и эксплуатация',
      subjectPartnership: 'Партнерство и совместные проекты',
      subjectGeneral: 'Общий вопрос',
      cityLabel: 'Интересующий район / Эмират',
      cityPlaceholder: 'Аджман, ОАЭ...',
      messageLabel: 'Текст сообщения или описание объекта',
      messagePlaceholder: 'Опишите в свободной форме ваш вопрос или параметры объекта...',
      sendBtn: 'Отправить сообщение',
      officesTitle: 'Официальный офис',
      officesSubtitle: 'Приглашаем вас в наш главный офис в Аджмане для личной консультации',
      dubaiOfficeTitle: 'SPACE Real Estate — Офис в Аджмане',
      dubaiOfficeAddress: 'Аджман, Объединенные Арабские Эмираты',
      dubaiOfficePhone: '+971 6 740 SPACE (77223)',
      riyadhOfficeTitle: '',
      riyadhOfficeAddress: '',
      riyadhOfficePhone: '',
      londonOfficeTitle: '',
      londonOfficeAddress: '',
      londonOfficePhone: '',
      hoursTitle: 'Часы работы',
      hoursText: 'Понедельник — пятница: с 9:00 до 18:00 (время ОАЭ)',
      directChatTitle: 'Быстрая связь в WhatsApp',
      directChatDesc: 'Для срочных запросов свяжитесь напрямую с нашей клиентской службой.',
      directChatBtn: 'Написать в WhatsApp',
    },
    footer: {
      brandDesc: 'Профессиональное агентство недвижимости и управляющая компания со штаб-квартирой в Аджмане, предоставляющее надежные решения по всей территории ОАЭ.',
      quickLinksTitle: 'Навигация',
      servicesTitle: 'Ключевые направления',
      contactTitle: 'Прямая связь',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия обслуживания',
      compliance: 'Правовое соответствие',
    },
  },
  ur: {
    brandName: 'SPACE REAL ESTATE',
    brandTagline: 'پراپرٹی مینجمنٹ اور ریئل اسٹیٹ بروکریج',
    nav: {
      home: 'ہوم',
      about: 'ہمارے بارے میں',
      services: 'خدمات',
      management: 'پراپرٹی مینجمنٹ',
      contact: 'رابطہ کریں',
      requestConsultation: 'مشاورت طلب کریں',
    },
    common: {
      learnMore: 'مزید جانیں',
      contactUs: 'ہم سے رابطہ کریں',
      getInTouch: 'رابطہ کریں',
      readMore: 'مزید پڑھیں',
      submit: 'جمع کروائیں',
      submitting: 'بھیجا جا رہا ہے...',
      successMessage: 'شکریہ، آپ کی درخواست موصول ہوگئی ہے۔ ہم جلد رابطہ کریں گے۔',
      exploreServices: 'ہماری خدمات دیکھیں',
      viewManagement: 'پراپرٹی مینجمنٹ',
      allRightsReserved: 'جملہ حقوق محفوظ ہیں۔',
      headquarters: 'مرکزی دفتر',
      workingHours: 'اوقات کار',
      phone: 'فون',
      email: 'ای میل',
      address: 'پتہ',
    },
    home: {
      heroBadge: 'عجمان، متحدہ عرب امارات',
      heroTitle: 'پراپرٹی مینجمنٹ اور ریئل اسٹیٹ کی فروخت',
      heroSubtitle: 'عجمان میں ہموار پراپرٹی مینجمنٹ اور ریئل اسٹیٹ کی جامع خدمات۔ ہم آپ کی جائیداد کی مکمل نگہداشت کرتے ہیں اور بروقت منافع یقینی بناتے ہیں۔',
      heroCtaPrimary: 'ہماری خدمات دیکھیں',
      heroCtaSecondary: 'ہم سے رابطہ کریں',
      metrics: {
        aum: { value: '98%', label: 'کرایہ داری کی شرح' },
        experience: { value: '10+', label: 'سال کا مارکیٹ تجربہ' },
        occupancy: { value: '500+', label: 'زیر انتظام یونٹس' },
        globalMarkets: { value: '100%', label: 'قانونی پاسداری' },
      },
      introTitle: 'سپیْس ریئل اسٹیٹ — بااعتماد رئیل اسٹیٹ پارٹنر',
      introSubtitle: 'عجمان اور متحدہ عرب امارات میں شفافیت، امانت داری اور پیشہ ورانہ مہارت',
      introParagraph: 'ہم عجمان میں جائیداد کے مالکان کو مکمل اطمینان اور کرایہ داروں کو پرسکون اور معیاری رہائشی و تجارتی ماحول فراہم کرتے ہیں۔ ہماری ٹیم معاہدات، دیکھ بھال اور کرایہ وصولی کی مکمل ذمہ داری سنبھالتی ہے۔',
      pillarsTitle: 'ہماری بنیادی خدمات',
      pillarsSubtitle: 'جائیداد کی فروخت اور انتظام میں بین الاقوامی معیار کی خدمات',
      pillarSalesTitle: 'ریئل اسٹیٹ کی خرید و فروخت',
      pillarSalesDesc: 'عجمان اور متحدہ عرب امارات کے اہم علاقوں میں رہائشی و تجارتی پراپرٹیز کی بااعتماد خرید و فروخت۔',
      pillarSalesFeature1: 'مارکیٹ کے رجحانات کا عمیق جائزہ',
      pillarSalesFeature2: 'مکمل دستاویزات اور قانونی تصدیق',
      pillarSalesFeature3: 'محفوظ اور ہموار لین دین',
      pillarMgmtTitle: 'مکمل پراپرٹی مینجمنٹ',
      pillarMgmtDesc: 'معیاری کرایہ داروں کا انتخاب، باقاعدہ معاہدات، اور وقت پر کرائے کی وصولی کا جامع نظام۔',
      pillarMgmtFeature1: 'تصدیق شدہ کرایہ داروں کی فراہمی',
      pillarMgmtFeature2: 'سرکاری نظام کے تحت معاہدات کی رجسٹریشن',
      pillarMgmtFeature3: 'مستقل نگرانی اور تفصیلی مالیاتی رپورٹس',
      whyUsTitle: 'سپیْس ریئل اسٹیٹ کا انتخاب کیوں کریں؟',
      whyUsSubtitle: 'دیانت، شفافیت اور مارکیٹ کا بہترین تجربہ',
      whyUs1Title: 'مارکیٹ کی گہری سمجھ',
      whyUs1Desc: 'عجمان کی رئیل اسٹیٹ مارکیٹ اور اماراتی قوانین پر مکمل عبور اور طویل تجربہ۔',
      whyUs2Title: 'مکمل مالیاتی شفافیت',
      whyUs2Desc: 'تمام اخراجات، کرایوں اور دیکھ بھال کا تفصیلی اور شفاف کھاتہ جو ہر وقت دستیاب ہے۔',
      whyUs3Title: 'بروقت کرایہ وصولی',
      whyUs3Desc: 'بینکنگ نظام کے ذریعے مقررہ تاریخ پر کرایوں اور چیکس کی بلا تاخیر وصولی۔',
      whyUs4Title: 'فوری اور معیاری دیکھ بھال',
      whyUs4Desc: 'کسی بھی مسئلے کی صورت میں مستند اور مستعد ٹیم کے ذریعے فوری مرمت اور دیکھ بھال۔',
      bannerTitle: 'کیا آپ اپنی پراپرٹی کے لیے پیشہ ورانہ انتظام چاہتے ہیں؟',
      bannerDesc: 'ہماری ٹیم سے آج ہی رابطہ کریں اور اپنی سرمایہ کاری کو محفوظ اور منافع بخش بنائیں۔',
      bannerCta: 'رابطہ قائم کریں',
    },
    about: {
      pageTitle: 'ہمارے بارے میں',
      pageSubtitle: 'عجمان میں پراپرٹی کے انتظام اور سرمایہ کاری میں ایک معتبر اور نمایاں نام',
      profileTitle: 'سپیْس ریئل اسٹیٹ کا تعارف',
      profileParagraph1: 'سپیْس ریئل اسٹیٹ عجمان میں قائم ایک سرکردہ ادارہ ہے جو جائیدادوں کے جامع انتظام اور اعلیٰ درجے کی بروکریج خدمات میں مہارت رکھتا ہے۔ ہمارا مقصد سرمایہ کاروں اور مالکان کی جائیداد کی قدر میں مسلسل اضافہ کرنا ہے۔',
      profileParagraph2: 'ہم جدید تقاضوں کے مطابق ڈیجیٹل نگرانی اور ذاتی توجہ کے ساتھ ہر کلائنٹ کو انفرادی اور شاندار سروس مہیا کرتے ہیں۔',
      visionTitle: 'ہمارا وژن',
      visionDesc: 'عجمان اور شمالی امارات میں سب سے زیادہ قابل اعتماد اور موثر پراپرٹی مینجمنٹ کمپنی بننا۔',
      missionTitle: 'ہمارا مشن',
      missionDesc: 'مالکان کے لیے زیادہ سے زیادہ منافع اور کرایہ داروں کے لیے محفوظ اور معیاری رہائش کی فراہمی۔',
      valuesTitle: 'ہماری بنیادی اقدار',
      valuesSubtitle: 'ہم ہر معاملے میں ان اقدار پر سختی سے عمل پیرا ہیں',
      val1Title: 'دیانت داری',
      val1Desc: 'ہمارے تمام مالی اور قانونی معاملات کھلی کتاب کی طرح شفاف ہیں۔',
      val2Title: 'پیشہ ورانہ مہارت',
      val2Desc: 'ہماری مستعد ٹیم ہر مرحلے پر اعلیٰ درجے کی خدمات فراہم کرتی ہے۔',
      val3Title: 'پابندی وقت',
      val3Desc: 'کرائے کی وصولی اور دیکھ بھال میں وقت کی پابندی ہمارا اولین اصول ہے۔',
      val4Title: 'گاہک کی ترجیح',
      val4Desc: 'ہم کلائنٹ کی ضروریات کو اولین ترجیح دے کر دیرپا تعلقات استوار کرتے ہیں۔',
      presenceTitle: 'مرکزی موجودگی',
      presenceSubtitle: 'متحدہ عرب امارات میں ہماری سرگرمیاں',
      cities: {
        dubai: { name: 'عجمان', desc: 'مرکزی ہیڈکوارٹر اور آپریشنز سینٹر' },
        riyadh: { name: 'شارجہ', desc: 'اسٹریٹجک پراپرٹی نیٹ ورک' },
        london: { name: 'دبئی', desc: 'سرمایہ کاری پارٹنرز' },
        singapore: { name: 'راس الخیمہ', desc: 'توسیعی خدمات' },
      },
    },
    services: {
      pageTitle: 'ہماری خدمات',
      pageSubtitle: 'پراپرٹی مینجمنٹ اور ریئل اسٹیٹ کی جامع اور قابل اعتماد سہولیات',
      salesTitle: 'خرید و فروخت کی خدمات',
      salesSubtitle: 'عجمان میں محفوظ اور منافع بخش رئیل اسٹیٹ ڈیلز',
      salesDesc: 'ہم آپ کو بہترین رہائشی اور تجارتی پراپرٹیز کی تلاش اور خریداری میں مکمل قانونی اور تیکنیکی معاونت فراہم کرتے ہیں۔',
      salesItem1Title: 'پراپرٹی کا تخمینہ',
      salesItem1Desc: 'موجودہ مارکیٹ کے مطابق جائیداد کی درست قیمت کا سائنسی جائزہ۔',
      salesItem2Title: 'مارکیٹنگ اور تشہیر',
      salesItem2Desc: 'اعلیٰ خریداروں اور سرمایہ کاروں تک رسائی کے لیے جدید مارکیٹنگ چینلز۔',
      salesItem3Title: 'قانونی معاونت',
      salesItem3Desc: 'رجسٹریشن، ٹائٹل ڈیڈ اور قانونی تقاضوں کی مکمل تکمیل۔',
      mgmtTitle: 'مکمل پراپرٹی مینجمنٹ',
      mgmtSubtitle: 'آپ کے اثاثوں کی نگہداشت ہماری ذمہ داری',
      mgmtDesc: 'ہم جائیداد کے روزمرہ انتظام کی تمام پریشانیاں اپنے سر لیتے ہیں تاکہ آپ پرسکون رہ کر اپنے منافع سے لطف اندوز ہو سکیں۔',
      mgmtItem1Title: 'کرایہ داروں کی جانچ',
      mgmtItem1Desc: 'مالی اور اخلاقی اعتبار سے معتبر کرایہ داروں کا محتاط انتخاب۔',
      mgmtItem2Title: 'ایجاری اور معاہدات',
      mgmtItem2Desc: 'قانونی تقاضوں کے مطابق باقاعدہ معاہدات کی تیاری اور تجدید۔',
      mgmtItem3Title: 'کرایہ وصولی کا انتظام',
      mgmtItem3Desc: 'چیکس کی وصولی، بینکنگ کلیئرنس اور فوری کھاتہ جات۔',
      advisoryTitle: 'سرمایہ کاری ایڈوائزری',
      advisorySubtitle: 'عجمان رئیل اسٹیٹ میں دانشمندانہ سرمایہ کاری',
      advisoryDesc: 'ہم سرمایہ کاروں کو منافع بخش منصوبوں کی نشاندہی اور طویل مدتی کیپٹل گروتھ کے لیے گائیڈ کرتے ہیں۔',
      advisoryItem1Title: 'مارکیٹ ریسرچ',
      advisoryItem1Desc: 'عجمان کے مختلف علاقوں میں کرائے کی شرح اور قیمتوں کا تقابلی جائزہ۔',
      advisoryItem2Title: 'پورٹ فولیو مینجمنٹ',
      advisoryItem2Desc: 'متعدد اثاثوں کو ایک مربوط پلیٹ فارم پر منظم کرنے کی حکمت عملی۔',
      processTitle: 'ہمارا طریقہ کار',
      processSubtitle: 'چار آسان مراحل میں آسان پراپرٹی پارٹنرشپ',
      step1Title: 'ابتدائی مشاورت',
      step1Desc: 'آپ کی پراپرٹی اور ضروریات کا تفصیل سے جائزہ لیا جاتا ہے۔',
      step2Title: 'حکمت عملی اور معاہدہ',
      step2Desc: 'پراپرٹی کے مطابق مناسب کرایہ اور انتظام کا پلان طے پاتا ہے۔',
      step3Title: 'تشہیر اور کرایہ دار کا انتخاب',
      step3Desc: 'تصدیق شدہ کرایہ دار کا انتخاب اور ایجاری رجسٹریشن کی جاتی ہے۔',
      step4Title: 'مستقل نگرانی اور منافع کی منتقلی',
      step4Desc: 'بروقت وصولیاں اور باقاعدہ رپورٹس براہ راست مالک کو دی جاتی ہیں۔',
    },
    management: {
      pageTitle: 'پراپرٹی مینجمنٹ',
      pageSubtitle: 'عجمان میں مالکان کے لیے مکمل نگہداشت اور ذہنی سکون',
      overviewTitle: 'ہمارا سروس ماڈل',
      overviewParagraph1: 'سپیْس ریئل اسٹیٹ کا انتظامی ماڈل مالکان کو روزمرہ کے جھنجھٹوں سے مکمل آزادی فراہم کرتا ہے۔ کرایہ داروں کے مسائل، دیکھ بھال، اور کرایوں کی وصولی سب ہمارے ذمہ ہے۔',
      overviewParagraph2: 'ہماری شفاف اکاؤنٹنگ اور باقاعدہ رپورٹس کے ذریعے آپ کو اپنے اثاثے کی ہر تفصیل پر مکمل کنٹرول حاصل رہتا ہے۔',
      scopeTitle: 'انتظامی دائرہ کار',
      scopeSubtitle: 'ہم آپ کی پراپرٹی کے ہر پہلو کا انتظام سنبھالتے ہیں',
      scope1Title: 'کرایہ داروں کی تصدیق اور معاہدات',
      scope1Desc: 'مناسب کرایہ دار کی تلاش اور مکمل قانونی دستاویزات کا اجرا۔',
      scope2Title: 'کرایوں کی بروقت وصولی',
      scope2Desc: 'چیکس کی حفاظت، بینک ڈپازٹس اور مالی حساب کتاب۔',
      scope3Title: 'دیکھ بھال اور مرمت',
      scope3Desc: 'کسی بھی خرابی کی صورت میں معیاری مرمتی کام اور معائنہ۔',
      scope4Title: 'قانونی معاونت اور تنازعات کا حل',
      scope4Desc: 'حکومتی قواعد و ضوابط کے تحت تمام امور کی درست انجام دہی۔',
      metricsTitle: 'ہمارے نتائج',
      metric1Val: '98%',
      metric1Label: 'کرایہ داری کی اوسط شرح',
      metric2Val: '24 گھنٹے',
      metric2Label: 'دیکھ بھال کی ہنگامی رسپانس',
      metric3Val: '100%',
      metric3Label: 'بروقت مالیاتی ٹرانسفرز',
      formCardTitle: 'اپنی پراپرٹی رجسٹر کروائیں',
      formCardSubtitle: 'تفصیلات درج کریں، ہم جلد آپ سے رابطہ کر کے مناسب پلان پیش کریں گے',
      formOwnerName: 'مالک کا نام',
      formEmail: 'ای میل پتہ',
      formPhone: 'فون نمبر',
      formCity: 'شہر / علاقہ',
      formPropertyType: 'پراپرٹی کی قسم',
      formUnitsArea: 'یونٹس کی تعداد یا رقبہ',
      formStatus: 'موجودہ حالت',
      formStatusVacant: 'خالی',
      formStatusRented: 'کرائے پر ہے',
      formStatusConstruction: 'زیر تعمیر',
      formNotes: 'اضافی معلومات یا نوٹ',
      formSubmitBtn: 'درخواست جمع کروائیں',
      formSuccessTitle: 'درخواست کامیابی سے موصول ہوئی!',
      formSuccessDesc: 'ہماری انتظامی ٹیم آپ کی پراپرٹی کا جائزہ لے کر جلد رابطہ کرے گی۔',
    },
    contact: {
      pageTitle: 'ہم سے رابطہ کریں',
      pageSubtitle: 'سپیْس ریئل اسٹیٹ عجمان — آپ کی خدمت کے لیے ہمہ وقت تیار',
      formTitle: 'ہمیں پیغام بھیجیں',
      formSubtitle: 'اپنی معلومات درج کریں، ہم فوری جواب دیں گے',
      nameLabel: 'پورا نام',
      namePlaceholder: 'اپنا نام درج کریں',
      emailLabel: 'ای میل پتہ',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'فون نمبر',
      phonePlaceholder: '+971 50 000 0000',
      subjectLabel: 'موضوع',
      subjectSales: 'خرید و فروخت',
      subjectMgmt: 'پراپرٹی مینجمنٹ',
      subjectPartnership: 'شراکت داری',
      subjectGeneral: 'عام سوال',
      cityLabel: 'علاقہ / دلچسپی کا مقام',
      cityPlaceholder: 'عجمان، متحدہ عرب امارات...',
      messageLabel: 'پیغام کی تفصیل',
      messagePlaceholder: 'اپنی پراپرٹی یا سوال کے بارے میں تفصیلات لکھیں...',
      sendBtn: 'پیغام بھیجیں',
      officesTitle: 'ہمارا دفتر',
      officesSubtitle: 'عجمان میں ہمارے دفتر میں تشریف لائیں',
      dubaiOfficeTitle: 'سپیْس ریئل اسٹیٹ — عجمان آفس',
      dubaiOfficeAddress: 'عجمان، متحدہ عرب امارات',
      dubaiOfficePhone: '+971 50 579 5412',
      riyadhOfficeTitle: '',
      riyadhOfficeAddress: '',
      riyadhOfficePhone: '',
      londonOfficeTitle: '',
      londonOfficeAddress: '',
      londonOfficePhone: '',
      hoursTitle: 'اوقات کار',
      hoursText: 'پیر تا جمعہ: صبح 9 بجے سے شام 6 بجے تک',
      directChatTitle: 'واٹس ایپ پر فوری رابطہ',
      directChatDesc: 'فوری استفسار کے لیے ہماری واٹس ایپ سپورٹ سے رابطہ کریں۔',
      directChatBtn: 'واٹس ایپ پر بات کریں',
    },
    footer: {
      brandDesc: 'عجمان میں پیشہ ورانہ پراپرٹی مینجمنٹ اور ریئل اسٹیٹ بروکریج کی بااعتماد کمپنی۔',
      quickLinksTitle: 'اہم روابط',
      servicesTitle: 'خدمات',
      contactTitle: 'رابطہ',
      privacy: 'رازداری کی پالیسی',
      terms: 'شرائط و ضوابط',
      compliance: 'قانونی ضوابط',
    },
  },
};
