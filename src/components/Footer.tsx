import React from 'react';

import { ArrowUp } from 'lucide-react';
import foodGhorLogo from '../assets/images/food_ghor_logo_transparent.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'হোম', href: '#home' },
    { label: 'আমাদের গল্প', href: '#about' },
    { label: 'গুড়ের সংগ্রহ', href: '#collection' },
    { label: 'কেন Food Ghor?', href: '#why-us' },
    { label: 'সাধারণ জিজ্ঞাসা', href: '#faq' },
    { label: 'যোগাযোগ', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#173324] text-[#FAF7F2] border-t border-[#234735]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#234735]">
          
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={foodGhorLogo}
                  alt="Food Ghor লোগো"
                  className="h-12 w-auto object-contain filter drop-shadow-xs"
                  width={48}
                  height={48}
                />
                <div>
                  <span className="text-2xl font-bold tracking-tight text-white font-display">
                    Food Ghor
                  </span>
                  <span className="text-xs text-[#B89555] block font-medium">
                    বাংলার খাঁটি গুড়ের নিবেদন
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm text-[#EFE8DC]/80 leading-relaxed max-w-sm">
                Food Ghor সম্পূর্ণভাবে শুধুমাত্র ঐতিহ্যবাহী গুড় নিয়ে নিবেদিত একটি ব্র্যান্ড। খেজুরের গুড়, পাটালি ও ঝোলা গুড়ের চেনা স্বাদকে নতুন আঙ্গিকে উপস্থাপন করাই আমাদের লক্ষ্য।
              </p>
            </div>

            <div className="mt-6 text-xs text-[#EFE8DC]/60">
              <span>প্রদর্শনী সংস্করণ · কোনো বাণিজ্যিক লেনদেন নয়</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#B89555] mb-4">
              দ্রুত লিঙ্ক
            </h4>
            <ul className="space-y-2.5 text-sm text-[#EFE8DC]/85">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white hover:underline transition-colors focus-visible:outline-1 focus-visible:outline-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#B89555] mb-4">
              গুড়ের জাত ও ঐতিহ্য
            </h4>
            <ul className="space-y-2 text-sm text-[#EFE8DC]/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89555]" />
                <span>দানাদার খেজুরের গুড় (শীতের তাজা রস)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89555]" />
                <span>জমাট পাটালি গুড় (পিঠাপুলির প্রধান অনুষঙ্গ)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89555]" />
                <span>সোনালী ঝোলা গুড় (নলেন রসের সুবাস)</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#234735] flex items-center justify-between">
              <span className="text-xs text-[#EFE8DC]/60">পৃষ্ঠার শীর্ষে যান</span>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="পৃষ্ঠার শীর্ষে ফিরে যান"
                className="p-2 rounded-lg bg-[#234735] hover:bg-[#2E5C45] text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EFE8DC]/70 gap-4">
          <p>
            © {currentYear} Food Ghor — সর্বস্বত্ব সংরক্ষিত। বাংলার গুড়ের ঐতিহ্যবাহী প্রদর্শনী।
          </p>
          <div className="flex items-center gap-4 text-[11px] text-[#EFE8DC]/60">
            <span>শতভাগ গুড় নিবেদিত</span>
            <span aria-hidden="true">·</span>
            <span>নমুনা শোকেস সংস্করণ</span>
          </div>
        </div>

      </div>
    </footer>
  );
};