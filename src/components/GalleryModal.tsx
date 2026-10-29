import React, { useEffect } from 'react';

import { X } from 'lucide-react';
import { GalleryItem } from '../types/gur';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#173324] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="গ্যালারি দৃশ্য বন্ধ করুন"
          className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-16/10 sm:aspect-16/9 w-full bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-5 sm:p-6 bg-[#173324]">
          <span className="text-xs uppercase tracking-wider text-[#B89555] font-medium">
            {item.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
            {item.title}
          </h3>
          <p className="text-sm text-[#EFE8DC]/80 mt-1">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};