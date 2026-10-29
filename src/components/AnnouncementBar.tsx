import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside aria-label="বিজ্ঞপ্তি" className="bg-[#173324] text-[#EFE8DC] py-2 px-4 text-xs md:text-sm tracking-wide border-b border-[#234735]/40">
      <div className="max-w-6xl mx-auto flex items-center justify-center text-center">
        <span className="font-medium text-[#FAF7F2]/90">
          বাংলার চেনা স্বাদ, গুড়ের মিষ্টি ভালোবাসা
        </span>
      </div>
    </aside>
  );
};
