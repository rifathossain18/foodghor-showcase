import React, { useState } from 'react';
import.meta.env.BASE_URL;
import { GUR_PRODUCTS } from '../data/gurData';
import { GurProduct } from '../types/gur';
import { GurProductCard } from './GurProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { Sparkles, Info } from 'lucide-react';

export const GurCollection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<GurProduct | null>(null);

  return (
    <section id="collection" className="py-16 md:py-24 bg-[#F5EFE6]/50 border-t border-[#E5DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#6A3E26] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[#B89555]" />
            <span>খাঁটি গুড়ের সমাহার</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173324] tracking-tight">
            আমাদের গুড়ের সংগ্রহ
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-[#24251F]/75">
            আপনার পছন্দের গুড়, এক জায়গায়
          </p>

          {/* Illustrative showcase note */}
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#6A3E26] bg-white/70 px-3.5 py-1.5 rounded-full border border-[#E5DEC9]/80 shadow-2xs">
            <Info className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
            <span>প্রদর্শনী শোকেস: এখানে প্রদর্শিত তথ্য ও মূল্য নমুনা হিসেবে উপস্থাপন করা হয়েছে</span>
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GUR_PRODUCTS.map((product) => (
            <GurProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
