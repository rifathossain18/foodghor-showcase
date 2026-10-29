import React, { useState } from 'react';
import { FAQ_DATA } from '../data/gurData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#E5DEC9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#6A3E26] uppercase mb-2">
            <HelpCircle className="w-4 h-4 text-[#B89555]" />
            <span>সচরাচর জিজ্ঞাসা</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173324] tracking-tight">
            আপনার কিছু প্রশ্ন
          </h2>

          <p className="mt-2 text-sm sm:text-base text-[#24251F]/70">
            Food Ghor ও গুড়ের প্রদর্শনী সম্পর্কে সাধারণ প্রশ্নের উত্তর
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#E5DEC9] bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left text-base sm:text-lg font-semibold text-[#173324] hover:text-[#6A3E26] transition-colors focus-visible:outline-2 focus-visible:outline-[#234735]"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B89555] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#24251F]/80 leading-relaxed border-t border-[#FAF7F2]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
