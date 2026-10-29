import React from 'react';

import { ArrowDown, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#6A3E26] uppercase mb-4">
              <span className="w-6 h-px bg-[#B89555]" />
              <span>ঐতিহ্যের স্বাদ · আপন ঠিকানায়</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#173324] leading-[1.25] tracking-tight text-balance">
              গুড়ের মিষ্টিতে, <br className="hidden sm:inline" />
              <span className="text-[#6A3E26] relative inline-block">
                বাংলার গল্প
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-2 text-[#B89555]/40 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,12 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg text-[#24251F]/80 leading-relaxed max-w-xl">
              চেনা দিনের সেই মিষ্টি স্বাদ আর বাংলার ঐতিহ্যের ছোঁয়া—Food Ghor-এ আবিষ্কার করুন গুড়ের আপন জগৎ। শীতের ভোরের কুয়াশা ও মাটির গন্ধমাখা রসের খাঁটি মিষ্টতা।
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('collection')}
                className="px-6 py-3.5 text-sm md:text-base font-semibold text-[#FAF7F2] bg-[#234735] hover:bg-[#173324] rounded-lg transition-all shadow-xs flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#234735]"
              >
                <span>গুড়ের সংগ্রহ দেখুন</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="px-6 py-3.5 text-sm md:text-base font-semibold text-[#234735] bg-[#EFE8DC]/80 hover:bg-[#EFE8DC] border border-[#E5DEC9] rounded-lg transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#234735]"
              >
                আমাদের গল্প জানুন
              </button>
            </div>

            {/* Quiet metadata strip with typographic separators */}
            <div className="mt-10 pt-6 border-t border-[#E5DEC9] flex flex-wrap items-center gap-3 text-xs md:text-sm text-[#24251F]/70">
              <div className="flex items-center gap-1.5 font-medium text-[#173324]">
                <Sparkles className="w-4 h-4 text-[#B89555]" />
                <span>শতভাগ গুড়-কেন্দ্রিক উদ্যোগ</span>
              </div>
              <span aria-hidden="true" className="text-[#B89555]">·</span>
              <span>খেজুরের গুড়</span>
              <span aria-hidden="true" className="text-[#B89555]">·</span>
              <span>পাটালি গুড়</span>
              <span aria-hidden="true" className="text-[#B89555]">·</span>
              <span>ঝোলা গুড়</span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Editorial Gur Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto rounded-2xl overflow-hidden shadow-xl border border-[#E5DEC9] bg-[#EFE8DC]">
              
              <img
                src={ `${import.meta.env.BASE_URL}public/assets/hero_gur_composition_1793267327259.jpg` }
                alt="বাঙালির ঐতিহ্যবাহী খেজুরের পাটালি ও দানাদার গুড়ের শৈল্পিক পরিবেশনা"
                className="w-full h-auto aspect-16/9 lg:aspect-4/3 object-cover hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Caption pill-free overlay bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 bg-gradient-to-t from-[#173324]/90 via-[#173324]/60 to-transparent text-[#FAF7F2]">
                <p className="text-xs tracking-wider uppercase text-[#EFE8DC]/90 font-medium">
                  ঐতিহ্যবাহী শৈলী
                </p>
                <p className="text-sm md:text-base font-semibold mt-0.5 text-white">
                  মাটির ভাঁড় ও কাঁসার পাত্রে খাঁটি খেজুরের গুড়
                </p>
              </div>

            </div>

            {/* Subtle decorative earthen background glow */}
            <div
              className="absolute -top-10 -right-10 w-72 h-72 bg-[#B89555]/10 rounded-full blur-3xl -z-10 pointer-events-none"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
