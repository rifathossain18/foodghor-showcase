import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gurData';
import { GalleryItem } from '../types/gur';
import { GalleryModal } from './GalleryModal';
import { Camera, Maximize2 } from 'lucide-react';

export const GurGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#E5DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#6A3E26] uppercase mb-2">
            <Camera className="w-4 h-4 text-[#B89555]" />
            <span>আলোকচিত্র প্রদর্শনী</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173324] tracking-tight">
            গুড়ের আবহে জীবন ও ঐতিহ্য
          </h2>

          <p className="mt-3 text-base text-[#24251F]/75">
            গ্রাম-বাংলার মাটির রূপ ও গুড়ের নান্দনিক মুহূর্তের স্থিরচিত্র
          </p>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveItem(item);
                }
              }}
              className={`group relative rounded-2xl overflow-hidden border border-[#E5DEC9] bg-[#EFE8DC] shadow-2xs hover:shadow-md cursor-pointer transition-all duration-300 ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-16/9' : 'aspect-4/3'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#B89555] font-medium">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#EFE8DC]/90 mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </section>
  );
};
