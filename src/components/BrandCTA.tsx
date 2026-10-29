import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export const BrandCTA: React.FC = () => {
  const handleScrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#173324] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative ambient gradients */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#B89555]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#6A3E26]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#B89555] uppercase mb-4">
          <Sparkles className="w-4 h-4" />
          <span>ঐতিহ্যের আহ্বান</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white max-w-3xl mx-auto text-balance">
          গুড়ের মিষ্টিতে থাকুক আপনজনের গল্প
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#EFE8DC]/85 max-w-2xl mx-auto leading-relaxed">
          বাংলার পরিচিত স্বাদকে নতুন করে আবিষ্কার করুন Food Ghor-এর গুড়ের সংগ্রহে। শীতের স্মৃতির মধুর পরশ ছড়িয়ে পড়ুক প্রতিটি ঘরে।
        </p>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleScrollToCollection}
            className="px-8 py-3.5 text-base font-semibold text-[#173324] bg-[#B89555] hover:bg-[#c9a665] rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <span>গুড়ের সংগ্রহ দেখুন</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
