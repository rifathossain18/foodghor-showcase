import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { GurProduct } from '../types/gur';

interface GurProductCardProps {
  product: GurProduct;
  onSelect: (product: GurProduct) => void;
}

export const GurProductCard: React.FC<GurProductCardProps> = ({ product, onSelect }) => {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-[#E5DEC9] overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 w-full bg-[#EFE8DC] overflow-hidden">
        <img
          src={product.image}
          alt={product.altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle season kicker on image */}
        <div className="absolute top-3 left-3 bg-[#173324]/85 text-[#FAF7F2] text-[11px] font-medium px-2.5 py-1 rounded-md tracking-wide">
          {product.season}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        
        <div>
          {/* Unboxed category / English subtitle */}
          <div className="flex items-center justify-between text-xs text-[#6A3E26] font-medium mb-1.5">
            <span>{product.nameEnglish}</span>
            <span className="text-[#B89555]">খাঁটি সংগ্রহ</span>
          </div>

          {/* Product Name */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#173324] tracking-tight group-hover:text-[#6A3E26] transition-colors">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="mt-2 text-sm text-[#24251F]/75 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Pricing & CTA Module */}
        <div className="mt-5 pt-4 border-t border-[#EFE8DC] flex items-center justify-between gap-3">
          
          <div className="flex flex-col">
            <span className="text-[11px] text-[#6A3E26] font-medium">নমুনা মূল্য</span>
            <span className="text-base sm:text-lg font-bold text-[#173324] tabular-nums font-mono">
              {product.samplePrice}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onSelect(product)}
            aria-label={`${product.name} এর বিস্তারিত দেখুন`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#234735] bg-[#EFE8DC] hover:bg-[#234735] hover:text-[#FAF7F2] rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#234735]"
          >
            <span>বিস্তারিত দেখুন</span>
            <Eye className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

    </article>
  );
};
