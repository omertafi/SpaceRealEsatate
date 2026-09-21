import React, { useState } from 'react';
import { Language, NavigationPage, ManagementSubmission } from '../../types';
import { translations } from '../../i18n/translations';
import { 
  KeyRound, 
  Users, 
  Wrench, 
  Receipt, 
  Scale, 
  CheckCircle2, 
  Send, 
  Clock, 
  ShieldCheck,
  Building,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

interface ManagementViewProps {
  currentLang: Language;
  onNavigatePage: (page: NavigationPage) => void;
}

export const ManagementView: React.FC<ManagementViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  
  const [formData, setFormData] = useState<ManagementSubmission>({
    ownerName: '',
    email: '',
    phone: '',
    propertyType: '',
    city: '',
    unitsOrArea: '',
    currentStatus: 'rented',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        ownerName: '',
        email: '',
        phone: '',
        propertyType: '',
        city: '',
        unitsOrArea: '',
        currentStatus: 'rented',
        notes: '',
      });
    }, 900);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col space-y-16 py-8 sm:py-12"
    >
      {/* 1. Header Section */}
      <motion.section variants={itemVariants} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-[#C6A15B]/10 px-3.5 py-1 text-xs font-semibold text-[#A9853E] shadow-xs">
            <KeyRound className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>SPACE ASSET MANAGEMENT PROTOCOL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {t.management.pageTitle}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
            {t.management.pageSubtitle}
          </p>
        </div>
      </motion.section>

      {/* 2. Management Philosophy & Overview */}
      <motion.section variants={itemVariants} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="futuristic-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center relative z-10">
            <div className="space-y-4 lg:col-span-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] tracking-tight">
                {t.management.overviewTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#1F2933] leading-relaxed">
                {t.management.overviewParagraph1}
              </p>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {t.management.overviewParagraph2}
              </p>
            </div>

            {/* Performance KPIs */}
            <div className="rounded-2xl border border-slate-200/80 bg-[#102A43] p-6 lg:col-span-4 space-y-4 shadow-lg text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                {t.management.metricsTitle}
              </div>

              <div className="space-y-3">
                <div className="border-b border-[#1A3E61] pb-2.5">
                  <p className="text-2xl font-bold text-white font-mono">{t.management.metric1Val}</p>
                  <p className="text-xs text-slate-300">{t.management.metric1Label}</p>
                </div>

                <div className="border-b border-[#1A3E61] pb-2.5">
                  <p className="text-2xl font-bold text-[#C6A15B] font-mono">{t.management.metric2Val}</p>
                  <p className="text-xs text-slate-300">{t.management.metric2Label}</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white font-mono">{t.management.metric3Val}</p>
                  <p className="text-xs text-slate-300">{t.management.metric3Label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Scope of Services (4 Pillars) */}
      <motion.section variants={itemVariants} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-2 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2F5D7C]">
            {t.management.scopeTitle}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
            {t.management.scopeSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div whileHover={{ y: -3 }} className="futuristic-card rounded-2xl p-6 space-y-3 border border-slate-200/80 bg-white shadow-sm hover:border-[#C6A15B]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102A43] text-[#C6A15B] shadow-sm">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-[#102A43]">{t.management.scope1Title}</h3>
            <p className="text-xs text-[#667085] leading-relaxed">{t.management.scope1Desc}</p>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="futuristic-card rounded-2xl p-6 space-y-3 border border-slate-200/80 bg-white shadow-sm hover:border-[#C6A15B]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102A43] text-[#C6A15B] shadow-sm">
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-[#102A43]">{t.management.scope2Title}</h3>
            <p className="text-xs text-[#667085] leading-relaxed">{t.management.scope2Desc}</p>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="futuristic-card rounded-2xl p-6 space-y-3 border border-slate-200/80 bg-white shadow-sm hover:border-[#C6A15B]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102A43] text-[#C6A15B] shadow-sm">
              <Receipt className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-[#102A43]">{t.management.scope3Title}</h3>
            <p className="text-xs text-[#667085] leading-relaxed">{t.management.scope3Desc}</p>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="futuristic-card rounded-2xl p-6 space-y-3 border border-slate-200/80 bg-white shadow-sm hover:border-[#C6A15B]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102A43] text-[#C6A15B] shadow-sm">
              <Scale className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-[#102A43]">{t.management.scope4Title}</h3>
            <p className="text-xs text-[#667085] leading-relaxed">{t.management.scope4Desc}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Owner Management Proposal Request Form */}
      <motion.section variants={itemVariants} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="futuristic-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 bg-white shadow-md">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-2 text-center mb-8">
              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#C6A15B] shadow-sm">
                  <Building className="h-6 w-6" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] tracking-tight">
                {t.management.formCardTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#667085]">
                {t.management.formCardSubtitle}
              </p>
            </div>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6 text-center space-y-3"
              >
                <div className="flex justify-center">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-[#102A43]">
                  {t.management.formSuccessTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085]">
                  {t.management.formSuccessDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 rounded-xl bg-[#102A43] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#1A3E61] transition-colors cursor-pointer"
                >
                  {currentLang === 'ar' ? 'إرسال طلب إضافي' : 'Submit Another Request'}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1F2933]">
                      {t.management.formOwnerName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2933] placeholder-slate-400 focus:border-[#2F5D7C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1F2933]">
                      {t.management.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2933] placeholder-slate-400 focus:border-[#2F5D7C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1F2933]">
                      {t.management.formPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2933] placeholder-slate-400 focus:border-[#2F5D7C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1F2933]">
                      {t.management.formCity} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2933] placeholder-slate-400 focus:border-[#2F5D7C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1F2933]">
                      {t.management.formPropertyType}
                    </label>
                    <input
                      type="text"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'برج سكني / مبنى تجاري / مجمع' : 'Residential tower, commercial, compound'}
                      className="w-full rounded-xl border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2933] placeholder-slate-400 focus:border-[#2F5D7C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1F2933]">
                      {t.management.formUnitsArea}
                    </label>
                    <input
                      type="text"
                      value={formData.unitsOrArea}
                      onChange={(e) => setFormData({ ...formData, unitsOrArea: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'مثال: 45 وحدة أو 12,000 متر مربع' : 'e.g., 40 units or 10,000 sq m'}
                      className="w-full rounded-xl border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2933] placeholder-slate-400 focus:border-[#2F5D7C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1F2933]">
                    {t.management.formStatus}
                  </label>
                  <select
                    value={formData.currentStatus}
                    onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value as any })}
                    className="w-full rounded-xl border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2933] focus:border-[#2F5D7C] focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="rented">{t.management.formStatusRented}</option>
                    <option value="vacant">{t.management.formStatusVacant}</option>
                    <option value="under_construction">{t.management.formStatusConstruction}</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1F2933]">
                    {t.management.formNotes}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2933] placeholder-slate-400 focus:border-[#2F5D7C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#102A43] hover:bg-[#1A3E61] px-5 py-3.5 text-xs sm:text-sm font-bold text-white disabled:opacity-50 transition-colors shadow-sm cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? t.common.submitting : t.management.formSubmitBtn}</span>
                  </motion.button>
                </div>

                <p className="text-[11px] text-center text-[#667085]">
                  {currentLang === 'ar'
                    ? 'نلتزم بالسرية التامة لجميع البيانات والوثائق المقدمة وفق بروتوكولات الحوكمة المؤسسية.'
                    : 'All submitted property data is protected under institutional confidentiality protocols.'}
                </p>
              </form>
            )}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};
