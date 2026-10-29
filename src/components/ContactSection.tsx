import React, { useState } from 'react';

import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [demoFeedback, setDemoFeedback] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PRD Mandatory requirement: Strictly frontend-only demo notice
    setDemoFeedback('এটি একটি ডেমো ফর্ম। কোনো তথ্য সার্ভারে পাঠানো হয়নি।');
    setFormData({ name: '', contact: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#EFE8DC]/30 border-t border-[#E5DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Info & Placeholders */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo & title */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={ `${import.meta.env.BASE_URL}public/assets/food_ghor_logo_transparent.png` }
                  alt="Food Ghor অফিসিয়াল লোগো"
                  className="h-12 w-auto object-contain"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="text-2xl font-bold text-[#173324] font-display">Food Ghor</h3>
                  <span className="text-xs text-[#6A3E26] font-medium">খাঁটি গুড়ের নির্ভরযোগ্য ঠিকানা</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#24251F]/80 leading-relaxed mt-4">
                Food Ghor বাংলার ঐতিহ্যবাহী গুড়ের মিষ্টতাকে ঘরে ঘরে পৌঁছে দেওয়ার একটি নিবেদিত শৈল্পিক উদ্যোগ। এটি একটি ফ্রন্টএন্ড শোকেস সংস্করণ।
              </p>

              {/* Demo contact info strip */}
              <div className="mt-8 space-y-4 text-sm text-[#24251F]/85">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#E5DEC9]">
                  <Phone className="w-4 h-4 text-[#234735] shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#6A3E26] font-medium block">হেল্পলাইন (নমুনা)</span>
                    <span className="font-semibold text-[#173324]">+৮৮০ ১৭০০-০০০০০০ (ডেমো)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#E5DEC9]">
                  <Mail className="w-4 h-4 text-[#234735] shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#6A3E26] font-medium block">ইমেইল ঠিকানা (নমুনা)</span>
                    <span className="font-semibold text-[#173324]">hello@foodghor.demo</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#E5DEC9]">
                  <MapPin className="w-4 h-4 text-[#234735] shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#6A3E26] font-medium block">ঠিকানা (প্রদর্শনীয়)</span>
                    <span className="font-semibold text-[#173324]">ঢাকা, বাংলাদেশ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase Disclaimer badge */}
            <div className="mt-8 p-4 rounded-xl bg-[#FAF7F2] border border-[#E5DEC9] text-xs text-[#24251F]/70 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#B89555] shrink-0 mt-0.5" />
              <span>
                এটি একটি ডেমো শোকেস প্ল্যাটফর্ম। কোনো আর্থিক লেনদেন বা ব্যক্তিগত তথ্য সংগ্রহ করা হয় না।
              </span>
            </div>
          </div>

          {/* Demonstration Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DEC9] shadow-sm">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#173324]">
                  যোগাযোগ ফরম (প্রদর্শনীয়)
                </h3>
                <p className="text-xs sm:text-sm text-[#24251F]/70 mt-1">
                  ব্র্যান্ড ইন্টারফেস পরখ করার জন্য নিচের ফরমটি ব্যবহার করতে পারেন
                </p>
              </div>

              {demoFeedback && (
                <div
                  role="status"
                  className="mb-6 p-4 rounded-xl bg-[#234735]/10 border border-[#234735]/30 text-[#173324] text-sm flex items-start gap-3 transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-[#234735] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">সিস্টেম নোটিশ:</span>
                    <span>{demoFeedback}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#173324] mb-1">
                    আপনার নাম
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="যেমন: অনিক আহমেদ"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E5DEC9] bg-[#FAF7F2]/50 text-[#24251F] focus:border-[#234735] focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-info" className="block text-xs font-semibold text-[#173324] mb-1">
                    ফোন নম্বর অথবা ইমেইল
                  </label>
                  <input
                    id="contact-info"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="যেমন: 01700-000000 বা mail@example.com"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E5DEC9] bg-[#FAF7F2]/50 text-[#24251F] focus:border-[#234735] focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#173324] mb-1">
                    আপনার মতামত বা বার্তা
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="গুড়ের সংগ্রহ বা ব্র্যান্ড সম্পর্কে আপনার মতামত লিখুন..."
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E5DEC9] bg-[#FAF7F2]/50 text-[#24251F] focus:border-[#234735] focus:outline-hidden transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#234735] hover:bg-[#173324] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-[#234735]"
                  >
                    <span>বার্তা পাঠান (ডেমো সাবমিট)</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
