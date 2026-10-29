import React from 'react';
import { WHY_FOOD_GHOR_FEATURES } from '../data/gurData';
import { Heart, Sparkles, Layers, Compass } from 'lucide-react';

export const WhyFoodGhor: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart className="w-5 h-5 text-[#234735]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#B89555]" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-[#6A3E26]" />;
      case 'compass':
      default:
        return <Compass className="w-5 h-5 text-[#234735]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#E5DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#6A3E26] uppercase mb-2">
            <span className="w-6 h-px bg-[#B89555]" />
            <span>আমাদের বৈশিষ্ট্য</span>
            <span className="w-6 h-px bg-[#B89555]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173324] tracking-tight">
            কেন Food Ghor?
          </h2>

          <p className="mt-3 text-base text-[#24251F]/75">
            বাংলার পরিচিত স্বাদ ও ঐতিহ্যকে শ্রদ্ধা জানিয়ে গুড়ের প্রতি আমাদের বিশেষ নিবেদন
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_FOOD_GHOR_FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className="p-6 rounded-2xl bg-white border border-[#E5DEC9] shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EFE8DC]/80 flex items-center justify-center mb-5 border border-[#E5DEC9]">
                  {getIcon(feature.iconName)}
                </div>

                <div className="text-xs font-mono text-[#B89555] mb-1">
                  0{index + 1}.
                </div>

                <h3 className="text-lg font-bold text-[#173324] tracking-tight mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#24251F]/75 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FAF7F2] text-[11px] text-[#6A3E26] font-medium">
                Food Ghor অঙ্গীকার
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
