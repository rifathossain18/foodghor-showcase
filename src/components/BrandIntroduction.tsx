import React from 'react';

import { Heart, Compass, CheckCircle2 } from 'lucide-react';

export const BrandIntroduction: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Side with editorial frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              <div className="rounded-2xl overflow-hidden border border-[#E5DEC9] bg-[#EFE8DC] shadow-md">
                <img
                  src="${import.meta.env.BASE_URL}assets/images/product_jhola_gur_1793267329124.jpg"
                  alt="মাটির পাত্রে সোনালী তরল নলেন ঝোলা গুড় ঢালার মুহূর্ত"
                  className="w-full h-auto aspect-4/3 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Editorial pull quote note */}
              <div className="mt-4 p-4 rounded-xl bg-[#EFE8DC]/80 border border-[#E5DEC9] text-xs md:text-sm text-[#24251F]/80">
                <p className="italic">
                  &ldquo;প্রকৃতির স্বাদে, শেকড়ের টানে—গুড়ের মিষ্টিতে ফিরুক চেনা দিনের গল্প।&rdquo;
                </p>
                <p className="mt-1 font-semibold text-[#173324] text-[11px] uppercase tracking-wider">
                  — Food Ghor চিন্তাধারা
                </p>
              </div>

            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#6A3E26] uppercase mb-3">
              <span className="w-6 h-px bg-[#B89555]" />
              <span>আমাদের পরিচয়</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173324] leading-snug">
              গুড়ের স্বাদে আমাদের আপন গল্প
            </h2>

            <div className="mt-6 space-y-4 text-base md:text-lg text-[#24251F]/85 leading-relaxed">
              <p>
                গুড় বাঙালির খাবারের সঙ্গে জড়িয়ে থাকা এক পরিচিত অনুভূতি। শীতের পিঠাপুলি থেকে প্রতিদিনের নানা আয়োজন—গুড়ের মিষ্টি স্বাদ আমাদের ঐতিহ্যেরই অংশ। Food Ghor সেই পরিচিত স্বাদকে ঘিরেই সাজিয়েছে তার ছোট্ট জগৎ।
              </p>
              <p className="text-sm md:text-base text-[#24251F]/75">
                আমাদের উদ্দেশ্য কেবল পণ্য প্রদর্শন নয়; বরং শীতের সোঁদা মাটির ঘ্রাণ, খেজুরের রসের মিষ্টতা এবং বাংলার প্রাচীন মিষ্টান্ন সংস্কৃতির সঙ্গে সবার নিবিড় সেতুবন্ধন গড়ে তোলা। Food Ghor-এ প্রতিটি গুড়ের রূপ তার খাঁটি স্বকীয়তায় উদ্ভাসিত।
              </p>
            </div>

            {/* Key brand commitments (without unverified claims) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF7F2] border border-[#E5DEC9]">
                <CheckCircle2 className="w-5 h-5 text-[#234735] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#173324]">শুধুমাত্র গুড়-নিবেদিত</h3>
                  <p className="text-xs text-[#24251F]/70 mt-0.5">মধু বা অন্যান্য পণ্যের মিশ্রণ নয়, শতভাগ গুড়ের সম্ভার।</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF7F2] border border-[#E5DEC9]">
                <CheckCircle2 className="w-5 h-5 text-[#234735] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#173324]">বাংলার বৈচিত্র্যের মেলবন্ধন</h3>
                  <p className="text-xs text-[#24251F]/70 mt-0.5">দানাদার, পাটালি ও ঝোলা গুড়ের পূর্ণাঙ্গ রূপরেখা।</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
