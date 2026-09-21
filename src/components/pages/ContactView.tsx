import React, { useState } from 'react';
import { Language, NavigationPage } from '../../types';
import { MapPin, Phone, Mail, CheckCircle2, Loader2, Send } from 'lucide-react';
import { translations } from '../../i18n/translations';

interface ContactViewProps {
  currentLang: Language;
  onNavigatePage: (page: NavigationPage) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ currentLang, onNavigatePage }) => {
  const isAr = currentLang === 'ar';
  const t = translations[currentLang] || translations.en;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mailtoLink, setMailtoLink] = useState<string>('mailto:alalfy@accountant.com');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    clientType: 'owner',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    let sentSuccessfully = false;

    // 1. Try local Node.js backend route (/api/contact)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json().catch(() => null);
        if (data?.success) {
          sentSuccessfully = true;
          if (data?.mailtoLink) {
            setMailtoLink(data.mailtoLink);
          }
        }
      }
    } catch {
      // Backend not running (e.g. static hosting on cPanel/Vercel/Netlify)
    }

    // 2. If not sent yet, try cPanel / PHP hosting handler (/contact.php)
    if (!sentSuccessfully) {
      try {
        const phpResponse = await fetch('/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (phpResponse.ok) {
          const phpData = await phpResponse.json().catch(() => null);
          if (phpData?.success) {
            sentSuccessfully = true;
          }
        }
      } catch {
        // PHP not available
      }
    }

    // 3. If not sent yet, submit directly from the browser to FormSubmit (works on ANY static host!)
    if (!sentSuccessfully) {
      try {
        const fsResponse = await fetch('https://formsubmit.co/ajax/alalfy@accountant.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.fullName,
            phone: formData.phone || 'N/A',
            email: formData.email,
            client_type: formData.clientType,
            message: formData.message,
            _subject: `Space Real Estate Inquiry from ${formData.fullName} (${formData.clientType})`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        if (fsResponse.ok) {
          const fsData = await fsResponse.json().catch(() => null);
          if (fsData && (fsData.success === 'true' || fsData.success === true)) {
            sentSuccessfully = true;
          }
        }
      } catch (fsErr) {
        console.warn('FormSubmit direct fetch notice:', fsErr);
      }
    }

    if (sentSuccessfully) {
      setFormSubmitted(true);
    } else {
      setErrorMessage(labels.errorMsg);
    }

    setIsSubmitting(false);
  };

  const getClientTypeLabel = (type: string) => {
    if (currentLang === 'ar') {
      if (type === 'owner') return 'مالك عقار (أرغب في إدارة أو بيع عقاري)';
      if (type === 'buyer') return 'مشتري / مستثمر (أبحث عن عقار)';
      return 'مستأجر (أبحث عن وحدة للإيجار)';
    }
    if (currentLang === 'ur') {
      if (type === 'owner') return 'جائیداد کے مالک (پراپرٹی مینجمنٹ یا فروخت)';
      if (type === 'buyer') return 'خریدار / سرمایہ کار';
      return 'کرایہ دار';
    }
    if (currentLang === 'ru') {
      if (type === 'owner') return 'Владелец недвижимости (управление или продажа)';
      if (type === 'buyer') return 'Покупатель / Инвестор';
      return 'Арендатор';
    }
    if (currentLang === 'zh') {
      if (type === 'owner') return '业主（物业委托管理或出售）';
      if (type === 'buyer') return '买家 / 投资者';
      return '租客';
    }
    if (type === 'owner') return 'Property owner';
    if (type === 'buyer') return 'Buyer / Investor';
    return 'Tenant';
  };

  const labels = {
    breadcrumbHome: currentLang === 'ar' ? 'الرئيسية' : currentLang === 'ur' ? 'ہوم' : currentLang === 'ru' ? 'Главная' : currentLang === 'zh' ? '首页' : 'Home',
    breadcrumbContact: currentLang === 'ar' ? 'اتصل بنا' : currentLang === 'ur' ? 'رابطہ کریں' : currentLang === 'ru' ? 'Контакты' : currentLang === 'zh' ? '联系我们' : 'Contact',
    title: currentLang === 'ar' ? 'تواصل معنا' : currentLang === 'ur' ? 'ہم سے رابطہ کریں' : currentLang === 'ru' ? 'Свяжитесь с нами' : currentLang === 'zh' ? '联系我们' : 'Get In Touch',
    subtitle: currentLang === 'ar'
      ? 'سواء كنت تملك عقاراً في عجمان وترغب في إدارته، أو تبحث عن استثمارك وعقارك القادم، نحن جاهزون دائماً للحديث معك.'
      : currentLang === 'ur'
      ? 'چاہے آپ عجمان میں جائیداد کے مالک ہیں یا اپنے اگلے سرمایہ کاری منصوبے کی تلاش میں ہیں، ہم آپ کی خدمت کے لیے تیار ہیں۔'
      : currentLang === 'ru'
      ? 'Владеете ли вы недвижимостью в Аджмане или ищете свой следующий инвестиционный объект — мы готовы к продуктивному диалогу.'
      : currentLang === 'zh'
      ? '无论您是在阿吉曼拥有物业希望委托专业管理，还是正在物色下一个优质投资项目，我们随时恭候与您深入洽谈。'
      : 'Whether you own a property in Ajman or you’re looking for your next one, we’re ready to talk.',
    locationLabel: currentLang === 'ar' ? 'الموقع' : currentLang === 'ur' ? 'مقام' : currentLang === 'ru' ? 'МЕСТОПОЛОЖЕНИЕ' : currentLang === 'zh' ? '办公地点' : 'LOCATION',
    locationVal: currentLang === 'ar' ? 'عجمان، الإمارات العربية المتحدة' : currentLang === 'ur' ? 'عجمان، متحدہ عرب امارات' : currentLang === 'ru' ? 'Аджман, ОАЭ' : currentLang === 'zh' ? '阿吉曼，阿拉伯联合酋长国' : 'Ajman, United Arab Emirates',
    phoneLabel: currentLang === 'ar' ? 'الهاتف' : currentLang === 'ur' ? 'فون' : currentLang === 'ru' ? 'ТЕЛЕФОН' : currentLang === 'zh' ? '联系电话' : 'PHONE',
    emailLabel: currentLang === 'ar' ? 'البريد الإلكتروني' : currentLang === 'ur' ? 'ای میل' : currentLang === 'ru' ? 'ЭЛ. ПОЧТА' : currentLang === 'zh' ? '电子邮箱' : 'EMAIL',
    formHeading: currentLang === 'ar' ? 'أرسل لنا رسالة' : currentLang === 'ur' ? 'ہمیں پیغام بھیجیں' : currentLang === 'ru' ? 'Отправьте нам сообщение' : currentLang === 'zh' ? '给我们留言' : 'Send Us a Message',
    nameLabel: currentLang === 'ar' ? 'الاسم الكامل' : currentLang === 'ur' ? 'پورا نام' : currentLang === 'ru' ? 'Полное имя' : currentLang === 'zh' ? '姓名' : 'Full Name',
    namePlaceholder: currentLang === 'ar' ? 'اسمك الكريم' : currentLang === 'ur' ? 'اپنا نام درج کریں' : currentLang === 'ru' ? 'Ваше имя' : currentLang === 'zh' ? '您的姓名' : 'Your name',
    phoneField: currentLang === 'ar' ? 'رقم الهاتف' : currentLang === 'ur' ? 'فون نمبر' : currentLang === 'ru' ? 'Телефон' : currentLang === 'zh' ? '联系电话' : 'Phone',
    emailField: currentLang === 'ar' ? 'البريد الإلكتروني' : currentLang === 'ur' ? 'ای میل پتہ' : currentLang === 'ru' ? 'Эл. почта' : currentLang === 'zh' ? '电子邮箱' : 'Email',
    iamA: currentLang === 'ar' ? 'أنا...' : currentLang === 'ur' ? 'میں ہوں...' : currentLang === 'ru' ? 'Я...' : currentLang === 'zh' ? '我是...' : 'I am a…',
    messageLabel: currentLang === 'ar' ? 'الرسالة' : currentLang === 'ur' ? 'پیغام' : currentLang === 'ru' ? 'Сообщение' : currentLang === 'zh' ? '留言内容' : 'Message',
    messagePlaceholder: currentLang === 'ar'
      ? 'أخبرنا عن عقارك، نوع وحدتك، أو ما تبحث عنه بالتحديد...'
      : currentLang === 'ur'
      ? 'ہمیں اپنی پراپرٹی، یونٹ یا مطلوبہ ضرورت سے آگاہ کریں...'
      : currentLang === 'ru'
      ? 'Расскажите о вашей недвижимости или о том, что вы ищете...'
      : currentLang === 'zh'
      ? '请简述您的房产情况、委托需求或寻找的房源标准...'
      : 'Tell us about your property or what you’re looking for',
    sendBtn: currentLang === 'ar' ? 'إرسال الرسالة' : currentLang === 'ur' ? 'پیغام بھیجیں' : currentLang === 'ru' ? 'Отправить сообщение' : currentLang === 'zh' ? '发送留言' : 'Send Message',
    sending: currentLang === 'ar' ? 'جاري الإرسال...' : currentLang === 'ur' ? 'بھیجا جا رہا ہے...' : currentLang === 'ru' ? 'Отправка...' : currentLang === 'zh' ? '正在发送...' : 'Sending...',
    successTitle: currentLang === 'ar' ? 'تم استلام رسالتك بنجاح' : currentLang === 'ur' ? 'آپ کا پیغام موصول ہو گیا ہے' : currentLang === 'ru' ? 'Сообщение успешно отправлено' : currentLang === 'zh' ? '留言已成功送达' : 'Message Received Successfully',
    successDesc: currentLang === 'ar'
      ? 'شكراً لتواصلك مع سبيس العقارية. تم تحويل استفسارك مباشرة لإدارتنا وسنتواصل معك قريباً.'
      : currentLang === 'ur'
      ? 'سپیْس ریئل اسٹیٹ سے رابطے کا شکریہ۔ آپ کا پیغام براہ راست انتظامیہ کو موصول ہو گیا ہے اور ہم جلد رابطہ کریں گے۔'
      : currentLang === 'ru'
      ? 'Спасибо за обращение в Space Real Estate. Ваш запрос направлен напрямую руководству, мы свяжемся с вами в ближайшее время.'
      : currentLang === 'zh'
      ? '感谢您联系 Space 房地产。您的咨询已直接送达负责人，我们将尽快与您取得联系。'
      : 'Thank you for contacting Space Real Estate. Your message has been sent directly to our management team and we will reach out shortly.',
    sendAnother: currentLang === 'ar' ? 'إرسال رسالة أخرى' : currentLang === 'ur' ? 'ایک اور پیغام بھیجیں' : currentLang === 'ru' ? 'Отправить еще' : currentLang === 'zh' ? '发送新留言' : 'Send Another Message',
    errorMsg: currentLang === 'ar'
      ? 'تعذر الإرسال حالياً، يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة عبر واتساب.'
      : currentLang === 'ur'
      ? 'خودکار ترسیل ممکن نہیں ہو سکی، براہ کرم دوبارہ کوشش کریں یا واٹس ایپ پر رابطہ کریں۔'
      : currentLang === 'ru'
      ? 'Не удалось отправить сообщение. Пожалуйста, повторите попытку или напишите нам в WhatsApp.'
      : currentLang === 'zh'
      ? '暂时无法自动发送，请重试或直接通过 WhatsApp 联系我们。'
      : 'Could not send at this moment. Please try again or contact us directly via WhatsApp.',
    dispatchedDirectly: currentLang === 'ar' 
      ? 'تم توجيه الرسالة مباشرة إلى: ' 
      : currentLang === 'ur' 
      ? 'پیغام براہ راست ارسال کر دیا گیا ہے: ' 
      : currentLang === 'ru' 
      ? 'Сообщение направлено напрямую на: ' 
      : currentLang === 'zh' 
      ? '信息已直接派发至：' 
      : 'Dispatched directly to: ',
    directNotice: currentLang === 'ar'
      ? 'تصل جميع الرسائل مباشرة إلى بريد الإدارة: alalfy@accountant.com'
      : currentLang === 'ur'
      ? 'تمام پیغامات براہ راست انتظامی ای میل alalfy@accountant.com پر موصول ہوتے ہیں'
      : currentLang === 'ru'
      ? 'Все сообщения поступают напрямую на почту руководства: alalfy@accountant.com'
      : currentLang === 'zh'
      ? '所有留言均直接派发至管理层官方邮箱：alalfy@accountant.com'
      : 'All inquiries are delivered directly to executive management: alalfy@accountant.com',
    openEmailClient: currentLang === 'ar'
      ? 'فتح في تطبيق البريد (Gmail / Outlook)'
      : currentLang === 'ur'
      ? 'ای میل ایپ میں کھولیں'
      : currentLang === 'ru'
      ? 'Открыть в почтовой программе'
      : currentLang === 'zh'
      ? '在本地邮件客户端中打开'
      : 'Open in Email Client',
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. HERO BANNER (Dark #0D1117) matching PDF Page 4 */}
      <section className="bg-[#0D1117] text-white py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-left rtl:text-right">
          {/* Breadcrumb */}
          <div className="text-xs text-slate-400 mb-4 flex items-center gap-2">
            <button
              onClick={() => onNavigatePage('home')}
              className="hover:text-white transition-colors"
            >
              {labels.breadcrumbHome}
            </button>
            <span>/</span>
            <span className="text-[#C79D3B]">{labels.breadcrumbContact}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] mb-4">
            {labels.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {labels.subtitle}
          </p>
        </div>
      </section>

      {/* 2. TOP 3 INFO CARDS (Location, Phone, Email) */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Location */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full bg-[#11161B] text-white flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-[#C79D3B]" />
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
              {labels.locationLabel}
            </span>
            <p className="font-bold text-gray-950 text-sm sm:text-base">
              {labels.locationVal}
            </p>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full bg-[#11161B] text-white flex items-center justify-center mb-3">
              <Phone className="w-5 h-5 text-[#C79D3B]" />
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
              {labels.phoneLabel}
            </span>
            <a
              href="tel:+971505795412"
              className="font-bold text-gray-950 hover:text-[#C79D3B] text-sm sm:text-base transition-colors dir-ltr"
            >
              +971 50 579 5412
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full bg-[#11161B] text-white flex items-center justify-center mb-3">
              <Mail className="w-5 h-5 text-[#C79D3B]" />
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
              {labels.emailLabel}
            </span>
            <a
              href="mailto:alalfy@accountant.com"
              className="font-bold text-gray-950 hover:text-[#C79D3B] text-sm sm:text-base transition-colors"
            >
              alalfy@accountant.com
            </a>
          </div>
        </div>
      </section>

      {/* 3. FORM & MAP GRID (2 COLUMNS) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Send Us a Message */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight mb-8">
              {labels.formHeading}
            </h2>

            {formSubmitted ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-emerald-950 mb-2">
                  {labels.successTitle}
                </h3>
                <p className="text-emerald-700 text-sm mb-6 leading-relaxed">
                  {labels.successDesc}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      clientType: 'owner',
                      message: '',
                    });
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-700 text-white px-6 py-2.5 text-xs font-semibold hover:bg-emerald-800 transition-colors"
                >
                  {labels.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      {labels.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={labels.namePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#C79D3B] focus:outline-none focus:ring-1 focus:ring-[#C79D3B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      {labels.phoneField}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#C79D3B] focus:outline-none focus:ring-1 focus:ring-[#C79D3B] transition-colors dir-ltr text-left"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {labels.emailField}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#C79D3B] focus:outline-none focus:ring-1 focus:ring-[#C79D3B] transition-colors"
                  />
                </div>

                {/* I am a... */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {labels.iamA}
                  </label>
                  <select
                    value={formData.clientType}
                    onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#C79D3B] focus:outline-none focus:ring-1 focus:ring-[#C79D3B] transition-colors"
                  >
                    <option value="owner">{getClientTypeLabel('owner')}</option>
                    <option value="buyer">{getClientTypeLabel('buyer')}</option>
                    <option value="tenant">{getClientTypeLabel('tenant')}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {labels.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={labels.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#C79D3B] focus:outline-none focus:ring-1 focus:ring-[#C79D3B] transition-colors resize-none"
                  />
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="rounded-xl bg-amber-50 border border-amber-200 p-3.5 text-xs text-amber-900 leading-relaxed">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C79D3B] hover:bg-[#B88E2D] disabled:opacity-60 px-8 py-3.5 text-sm font-semibold text-black transition-all shadow-md active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>{labels.sending}</span>
                    </>
                  ) : (
                    <>
                      <span>{labels.sendBtn}</span>
                      <span className="rtl:rotate-180">→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Architectural Ajman Map Placeholder matching PDF */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="w-full aspect-square rounded-3xl bg-[#F4F5F7] border border-gray-200 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner">
              {/* Subtle Map Grid lines */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #D1D5DB 1px, transparent 1px), linear-gradient(to bottom, #D1D5DB 1px, transparent 1px)',
                  backgroundSize: '36px 36px',
                }}
              />

              {/* Center Map Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#11161B] text-white flex items-center justify-center mb-4 shadow-xl border-2 border-white">
                  <MapPin className="w-6 h-6 text-[#C79D3B]" />
                </div>

                <h3 className="font-extrabold text-gray-950 text-lg mb-1">
                  {labels.locationVal}
                </h3>
                <p className="text-xs text-gray-500 max-w-[220px] leading-relaxed">
                  {currentLang === 'ar'
                    ? 'المقر الرئيسي وعمليات إدارة العقارات والمبيعات'
                    : currentLang === 'ur'
                    ? 'ہیڈ کوارٹر اور فل سروس پراپرٹی آپریشنز ہب'
                    : currentLang === 'ru'
                    ? 'Главный офис и центр управления недвижимостью'
                    : currentLang === 'zh'
                    ? '总部基地与全权物业资产运营中心'
                    : 'Headquarters & Full-Service Operations Hub'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

