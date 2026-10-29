import React from 'react';
import.meta.env.BASE_URL;
import { Sparkles, Utensils, Flame } from 'lucide-react';

export const GurStorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#EFE8DC]/40 border-t border-[#E5DEC9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Story Side */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#6A3E26] uppercase mb-3">
              <span className="w-6 h-px bg-[#B89555]" />
              <span>ঐতিহ্য ও স্মৃতি</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173324] leading-snug">
              শীতের পিঠা, আপন ঘ্রাণ, <br className="hidden sm:inline" />
              <span className="text-[#6A3E26]">গুড়ের মিষ্টি টান</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#24251F]/85 leading-relaxed">
              ভাপা পিঠা, পায়েস কিংবা পরিবারের সঙ্গে শীতের বিকেল—গুড়ের পরিচিত স্বাদ অনেক স্মৃতিকে ফিরিয়ে আনে। Food Ghor-এর গল্প সেই চেনা মিষ্টি অনুভূতিকে ঘিরেই।
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#24251F]/75 leading-relaxed">
              <p>
                কুয়াশাচ্ছন্ন ভোরে মাটির চুলার মৃদু তাপ, নলেন গুড়ের মনমাতানো ঘ্রাণ আর কলাপাতায় গরম ভাপা পিঠার ধোঁয়া—বাঙালির জীবনের সবচেয়ে মায়াবী অধ্যায়। প্রতিটি পরিবারে এই স্বাদ ভালোবাসার এক অবিচ্ছেদ্য স্মারক।
              </p>
              <p>
                Food Ghor সেই শাশ্বত পারিবারিক অনুভূতিকে ধারণ করে তুলে ধরে খাঁটি খেজুরের গুড়, পাটালি ও ঝোলা গুড়ের রূপবৈচিত্র্য।
              </p>
            </div>

            {/* Cultural highlights */}
            <div className="mt-8 pt-6 border-t border-[#E5DEC9] grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-[#173324] font-medium">
                <Utensils className="w-4 h-4 text-[#B89555] shrink-0" />
                <span>পিঠাপুলির চিরন্তন সঙ্গী</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#173324] font-medium">
                <Flame className="w-4 h-4 text-[#B89555] shrink-0" />
                <span>ঐতিহ্যবাহী মাটির আঁচে জ্বাল</span>
              </div>
            </div>

          </div>

          {/* Visual Story Side */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5DEC9] bg-[#EFE8DC] shadow-lg">
              
              <img
                src="/src/assets/images/story_pitha_gur_1793267329135.jpg"
                alt="ঐতিহ্যবাহী ধোঁয়া ওঠা শীতের ভাপা পিঠা ও মাটির পাত্রে খাঁটি নলেন গুড়"
                className="w-full h-auto aspect-4/3 object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="p-4 sm:p-5 bg-white border-t border-[#E5DEC9] flex items-center justify-between text-xs text-[#24251F]/75">
                <div>
                  <span className="font-semibold text-[#173324] block text-sm">
                    বাংলার শীতের পিঠা উৎসব
                  </span>
                  <span>গরম ভাপা পিঠা ও সোনালি নলেন গুড়ের মেলবন্ধন</span>
                </div>
                <span className="text-[#6A3E26] font-medium shrink-0">
                  ঐতিহ্যবাহী স্বাদ
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
