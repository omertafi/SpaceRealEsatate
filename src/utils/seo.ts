import { Language, NavigationPage } from '../types';

export interface SeoData {
  title: string;
  description: string;
  keywords: string;
  locale: string;
}

export const SEO_CONFIG: Record<Language, Record<NavigationPage, { title: string; description: string }>> = {
  ar: {
    home: {
      title: 'شركة سبيس العقارية | إدارة وتأجير وبيع العقارات في دبي، عجمان وكافة الإمارات',
      description: 'شركة سبيس العقارية، الرائدة في إدارة المباني والأملاك من الألف إلى الياء وبيع وشراء الشقق والفلل والاستثمار العقاري في دبي، عجمان، الشارقة، أبوظبي وكافة الإمارات.',
    },
    about: {
      title: 'عن شركة سبيس العقارية | القيادة والشركاء المؤسسون ومجلس الإدارة في الإمارات',
      description: 'تعرف على شركة سبيس العقارية والشركاء المؤسسين: السيد محمد العبيدلي، السيد محمد الألفي، السيد عبدالله العبيدلي، والسيد محمود الشيخ.',
    },
    services: {
      title: 'خدماتنا العقارية | إدارة الأملاك، التحصيل، الصيانة، وبيع وشراء العقارات في الإمارات',
      description: 'حلول عقارية متكاملة تشمل إدارة المباني والأبراج من الألف إلى الياء، تحصيل الإيجارات، الصيانة الشاملة، والتسويق الحصري للمشاريع في دبي وعجمان والإمارات.',
    },
    management: {
      title: 'إدارة المباني والأملاك في كافة الإمارات | سبيس العقارية',
      description: 'إدارة شاملة للمباني والأبراج السكنية والتجارية في دبي، عجمان، الشارقة وأبوظبي مع ضمان أعلى عوائد استثمارية وراحة بال تامة للملاك والمستثمرين.',
    },
    contact: {
      title: 'اتصل بشركة سبيس العقارية | استشارات عقارية وإدارة أملاك في كافة الإمارات',
      description: 'تواصل مع فريق سبيس العقارية للحصول على استشارات مجانية حول إدارة الأملاك أو شراء وبيع العقارات في الإمارات. هاتف: +971505795412',
    },
  },
  en: {
    home: {
      title: 'SPACE Real Estate | Property Management & Real Estate Sales Across All UAE',
      description: 'SPACE Real Estate operates across Dubai, Abu Dhabi, Sharjah, Ajman, and all UAE Emirates. Premier turnkey property management, tenant leasing, and developer sales.',
    },
    about: {
      title: 'About SPACE Real Estate | Founding Partners & Leadership Team UAE',
      description: 'Learn about Space Real Estate and its founding partners: Mr. Mohamed Alobadli, Mr. Mohamed Elalfi, Mr. Abdullah Alobadli, and Mr. Mahmoud Al-Sheikh.',
    },
    services: {
      title: 'Real Estate Services | End-to-End Building Management & Property Sales UAE',
      description: 'Comprehensive property solutions across Dubai, Ajman, and all Emirates: tenant screening, rent collection, 24/7 maintenance, and prime off-plan & ready investments.',
    },
    management: {
      title: 'Building & Property Management Across All UAE | SPACE Real Estate',
      description: 'Turnkey building management for owners and investors across Dubai, Abu Dhabi, Sharjah, and Ajman. Maximizing occupancy rates and long-term asset value.',
    },
    contact: {
      title: 'Contact SPACE Real Estate UAE | Property Inquiries, Office & Support',
      description: 'Connect with Space Real Estate for expert building management or investment inquiries across all UAE Emirates. Call +971 50 579 5412 or email info@spacereal.estate',
    },
  },
  ru: {
    home: {
      title: 'SPACE Real Estate ОАЭ | Управление и продажа недвижимости в Дубае, Аджмане и ОАЭ',
      description: 'Space Real Estate — ведущая компания по доверительному управлению зданиями и продаже недвижимости в Дубае, Аджмане, Шардже и по всей территории ОАЭ.',
    },
    about: {
      title: 'О компании SPACE Real Estate | Учредители и руководство в ОАЭ',
      description: 'Узнайте о компании Space Real Estate и учредителях: г-н Мохамед Алобадلی, г-н Мохамед Эль-Альфи, г-н Абдулла Алобадли и г-н Махмуд Аль-Шейх.',
    },
    services: {
      title: 'Услуги недвижимости | Управление активами, аренда и продажа по всем ОАЭ',
      description: 'Полный спектр услуг: доверительное управление жилыми и коммерческими зданиями, сбор арендной платы, обслуживание объектов и продажа недвижимости в ОАЭ.',
    },
    management: {
      title: 'Доверительное управление зданиями по всем ОАЭ | SPACE Real Estate',
      description: 'Комплексное управление жилыми комплексами и коммерческими объектами в Дубае, Аджмане и других эмиратах. Высокая доходность и надежность.',
    },
    contact: {
      title: 'Контакты SPACE Real Estate ОАЭ | Телефон, консультации по всем эмиратам',
      description: 'Свяжитесь со специалистами Space Real Estate в ОАЭ по вопросам управления активами и покупки недвижимости. Телефон: +971 50 579 5412',
    },
  },
  ur: {
    home: {
      title: 'سپیْس ریئل اسٹیٹ | دبئی، عجمان اور تمام متحدہ عرب امارات میں پراپرٹی مینجمنٹ و سیلز',
      description: 'سپیْس ریئل اسٹیٹ دبئی، عجمان، شارجہ، ابوظہبی اور تمام امارات میں عمارتوں کی مکمل مینجمنٹ اور جائیداد کی خرید و فروخت کے لیے سرکردہ ادارہ ہے۔',
    },
    about: {
      title: 'سپیْس ریئل اسٹیٹ کے بارے میں | بانی شراکت دار اور انتظامی قیادت متحدہ عرب امارات',
      description: 'سپیْس ریئل اسٹیٹ اور اس کے بانی مالکان کے بارے میں جانیں: مسٹر محمد العبیدلی، مسٹر محمد الالفی، مسٹر عبداللہ العبیدلی، اور مسٹر محمود الشیخ۔',
    },
    services: {
      title: 'ریئل اسٹیٹ سروسز | تمام امارات میں پراپرٹی مینجمنٹ اور جائیداد کی فروخت',
      description: 'عمارتوں کی مکمل نگہداشت، کرایہ وصولی، قانونی ضوابط، اور دبئی و عجمان میں بہترین ریئل اسٹیٹ سرمایہ کاری کی خدمات۔',
    },
    management: {
      title: 'تمام امارات میں پراپرٹی مینجمنٹ سروسز | سپیْس ریئل اسٹیٹ',
      description: 'دبئی، عجمان اور شارجہ میں بلڈنگ مینجمنٹ کے ذریعے سرمایہ کاروں کے لیے بہترین منافع اور مکمل تحفظ کی ضمانت۔',
    },
    contact: {
      title: 'سپیْس ریئل اسٹیٹ سے رابطہ کریں | پورے متحدہ عرب امارات میں خدمات',
      description: 'متحدہ عرب امارات میں جائیداد کی خرید و فروخت یا بلڈنگ مینجمنٹ کے لیے رابطہ کریں۔ فون: 5412 579 50 971+',
    },
  },
  zh: {
    home: {
      title: 'SPACE Real Estate 阿联酋房产 | 迪拜、阿吉曼及阿联酋全境全权物业托管与房产投资买卖',
      description: 'SPACE Real Estate 是阿联酋领先的综合性房地产托管与投资买卖公司，业务覆盖迪拜、阿吉曼、沙迦、阿布扎比等全阿联酋，提供端到端建筑托管运营与高回报房产买卖。',
    },
    about: {
      title: '关于 SPACE Real Estate | 创始合伙人与核心管理团队 · 阿联酋',
      description: '了解 SPACE Real Estate 及其四位创始合伙人兼所有人：Mohamed Alobadli 先生、Mohamed Elalfi 先生、Abdullah Alobadli 先生与 Mahmoud Al-Sheikh 先生。',
    },
    services: {
      title: '房地产综合服务 | 阿联酋全境建筑全权托管运营、租金代收与楼盘买卖',
      description: '覆盖迪拜、阿吉曼及全阿联酋的整栋楼宇运营、租金代收、24/7维保、法律合规以及一线开发商现房与期房投资买卖服务。',
    },
    management: {
      title: '阿联酋全境楼宇及物业全权托管服务 | SPACE Real Estate',
      description: '面向迪拜、阿布扎比、沙迦与阿吉曼业主与全球投资者的专业托管服务，确保高出租率、稳定净租金收益与资产长期升值。',
    },
    contact: {
      title: '联系 SPACE Real Estate 阿联酋 | 办公地址、联系电话与全境房产咨询',
      description: '随时联系阿联酋 Space Real Estate 专业团队，获取全阿联酋范围内的物业托管或房产投资专业咨询。电话：+971 50 579 5412',
    },
  },
};

export const SEO_KEYWORDS: Record<Language, string> = {
  ar: 'شركة سبيس العقارية, عقارات الإمارات, عقارات دبي, عقارات عجمان, عقارات الشارقة, عقارات أبوظبي, إدارة أملاك الإمارات, شقق للبيع في دبي, شقق للبيع في عجمان, فلل للبيع دبي, استثمار عقاري في الإمارات, تأجير شقق دبي عجمان, صيانة المباني الإمارات, محمد العبيدلي, محمد الألفي, محمود الشيخ, عبدالله العبيدلي, مطورين عقاريين الإمارات, Space Real Estate UAE, Dubai real estate, Ajman properties',
  en: 'Space Real Estate, UAE real estate, Dubai real estate, Ajman real estate, Abu Dhabi property, Sharjah real estate, property management UAE, buy apartments Dubai, buy apartments Ajman, UAE real estate investments, building management UAE, villas in Dubai, off-plan properties UAE, luxury apartments Dubai, Mohamed Alobadli, Mohamed Elalfi, Mahmoud Al-Sheikh, Abdullah Alobadli, commercial property UAE',
  ru: 'Space Real Estate, Недвижимость в Дубае, Недвижимость в ОАЭ, Недвижимость в Аджмане, купить квартиру в Дубае, купить квартиру в ОАЭ, управление недвижимостью Дубай, инвестиции в недвижимость ОАЭ, апартаменты Дубай, агентство недвижимости Дубай, аренда жилья ОАЭ, доверительное управление Дубай Аджман',
  ur: 'سپیْس ریئل اسٹیٹ, متحدہ عرب امارات ریئل اسٹیٹ, دبئی میں جائیداد, عجمان میں جائیداد, شارجہ پراپرٹی, پراپرٹی مینجمنٹ امارات, اپارٹمنٹ برائے فروخت دبئی, متحدہ عرب امارات جائیداد سرمایہ کاری, جائیداد کی دیکھ بھال دبئی',
  zh: 'Space Real Estate, 阿联酋房产, 迪拜房产, 阿吉曼房产, 迪拜公寓买卖, 阿联酋物业托管, 迪拜房产投资, 阿布扎比置业, 沙迦房产, 阿联酋房地产买卖, 迪拜豪宅, 阿联酋高回报房产投资, 阿联酋整栋大楼全权托管',
};

export const SEO_LOCALES: Record<Language, string> = {
  ar: 'ar_AE',
  en: 'en_US',
  ru: 'ru_RU',
  ur: 'ur_PK',
  zh: 'zh_CN',
};

/**
 * Updates document head meta tags dynamically for client-side navigation and language switching.
 */
export function updateDocumentSeo(lang: Language, page: NavigationPage = 'home') {
  const pageConfig = SEO_CONFIG[lang]?.[page] || SEO_CONFIG.en[page] || SEO_CONFIG.en.home;
  const keywords = SEO_KEYWORDS[lang] || SEO_KEYWORDS.en;
  const locale = SEO_LOCALES[lang] || 'en_US';

  // 1. Page Title
  document.title = pageConfig.title;

  // 2. Meta description
  updateMetaTag('name', 'description', pageConfig.description);

  // 3. Meta keywords
  updateMetaTag('name', 'keywords', keywords);

  // 4. OpenGraph tags
  updateMetaTag('property', 'og:title', pageConfig.title);
  updateMetaTag('property', 'og:description', pageConfig.description);
  updateMetaTag('property', 'og:locale', locale);

  // 5. Twitter Card tags
  updateMetaTag('name', 'twitter:title', pageConfig.title);
  updateMetaTag('name', 'twitter:description', pageConfig.description);
}

function updateMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}
