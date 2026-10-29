import React, { useEffect } from 'react';
import.meta.env.BASE_URL;
import { X, Check, Info, Sparkles, Calendar, Layers } from 'lucide-react';
import { GurProduct } from '../types/gur';

interface ProductDetailModalProps {
  product: GurProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E5DEC9] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="মোডাল বন্ধ করুন"
          className="absolute top-4 right-4 z-10 p-2 text-[#24251F]/70 hover:text-[#173324] bg-white/80 hover:bg-white rounded-full transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-[#234735]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative w-full h-64 sm:h-72 bg-[#EFE8DC]">
          <img
            src={product.image}
            alt={product.altText}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173324]/80 via-transparent to-transparent flex items-end p-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#EFE8DC] font-medium">
                {product.nameEnglish}
              </span>
              <h2 id="modal-product-title" className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {product.name}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-18rem)] overflow-y-auto">
          
          {/* Sample Pricing Strip & Notice */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#EFE8DC]/80 border border-[#E5DEC9]">
            <div>
              <span className="text-xs text-[#6A3E26] font-medium block">নমুনা ওজন ও মূল্য</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-xl font-bold text-[#173324] tabular-nums font-mono">
                  {product.samplePrice}
                </span>
                <span className="text-xs text-[#24251F]/70">
                  / {product.sampleWeight}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#6A3E26] bg-white/60 px-3 py-1.5 rounded-md border border-[#E5DEC9]">
              <Info className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
              <span>প্রদর্শনী শোকেস (ক্রয়াদেশ প্রযোজ্য নয়)</span>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6A3E26] mb-2">
              বিবরণ ও ঐতিহ্য
            </h3>
            <p className="text-sm sm:text-base text-[#24251F]/85 leading-relaxed">
              {product.detailedDescription}
            </p>
          </div>

          {/* Characteristics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 rounded-lg bg-white border border-[#E5DEC9]">
              <span className="text-[#6A3E26] font-medium block text-xs">টেক্সচার ও গঠন</span>
              <span className="font-semibold text-[#173324] mt-0.5 block">{product.texture}</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E5DEC9]">
              <span className="text-[#6A3E26] font-medium block text-xs">মিষ্টতা ও সুবাস</span>
              <span className="font-semibold text-[#173324] mt-0.5 block">{product.sweetnessProfile}</span>
            </div>
          </div>

          {/* Traditional Culinary Uses */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6A3E26] mb-2.5">
              ঐতিহ্যবাহী ব্যবহার
            </h3>
            <ul className="space-y-2">
              {product.traditionalUses.map((use, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#24251F]/80">
                  <span className="w-5 h-5 rounded-full bg-[#234735]/10 text-[#234735] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FAF7F2] border-t border-[#E5DEC9] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-[#24251F] hover:bg-[#EFE8DC] rounded-lg transition-colors border border-[#E5DEC9] cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
