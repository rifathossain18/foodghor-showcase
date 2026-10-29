import React, { useState, useEffect } from 'react';
import.meta.env.BASE_URL
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

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
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E5DEC9]'
            : 'bg-[#FAF7F2] border-b border-[#EFE8DC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Official Logo + Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-[#234735] rounded-md py-1"
          >
            <img
              src="/assets/food_ghor_logo_transparent.png"
              alt="Food Ghor অফিসিয়াল লোগো"
              className="h-11 w-auto object-contain filter drop-shadow-xs"
              width={44}
              height={44}
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-[#173324] font-display leading-tight">
                Food Ghor
              </span>
              <span className="text-[11px] font-medium text-[#6A3E26] -mt-0.5 tracking-wider">
                খাঁটি গুড়ের নিবেদন
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="প্রধান নেভিগেশন"
            className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#24251F]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#234735] transition-colors py-1 relative group focus-visible:outline-2 focus-visible:outline-[#234735]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B89555] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#collection"
              onClick={(e) => handleLinkClick(e, '#collection')}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-[#FAF7F2] bg-[#234735] hover:bg-[#173324] rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234735]"
            >
              <span>গুড় দেখুন</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="মেনু খুলুন"
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2.5 text-[#24251F] hover:text-[#234735] hover:bg-[#EFE8DC]/60 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#234735]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Blurred Overlay Backdrop */}
      <div
        role="presentation"
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      />

      {/* Slide-In Mobile Drawer */}
      <aside
        id="mobile-navigation-drawer"
        aria-label="মোবাইল নেভিগেশন মেনু"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-sm z-50 bg-[#FAF7F2] border-l border-[#E5DEC9] shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E5DEC9] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/food_ghor_logo_transparent.png"
              alt="Food Ghor লোগো"
              className="h-9 w-auto object-contain"
              width={36}
              height={36}
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#173324] font-display leading-tight">
                Food Ghor
              </span>
              <span className="text-[10px] text-[#6A3E26] font-medium">
                খাঁটি গুড়ের নিবেদন
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="মেনু বন্ধ করুন"
            className="p-2 text-[#24251F]/80 hover:text-[#173324] hover:bg-[#EFE8DC] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#234735]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="px-4 py-6 flex-1 overflow-y-auto">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-[#24251F] hover:bg-[#EFE8DC] hover:text-[#173324] transition-colors group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#B89555] group-hover:translate-x-0.5 transition-transform">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* Primary Action Button inside Drawer */}
          <div className="mt-8 pt-6 border-t border-[#E5DEC9]">
            <a
              href="#collection"
              onClick={(e) => handleLinkClick(e, '#collection')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#234735] hover:bg-[#173324] rounded-xl transition-colors shadow-xs"
            >
              <span>গুড় দেখুন</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Drawer Footer Brand Note */}
        <div className="p-5 bg-[#EFE8DC]/60 border-t border-[#E5DEC9]">
          <div className="flex items-center gap-2 text-xs text-[#173324] font-medium mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#B89555]" />
            <span>প্রকৃতির স্বাদে, শেকড়ের টানে</span>
          </div>
          <p className="text-[11px] text-[#24251F]/70">
            বাংলার ঐতিহ্যবাহী গুড় নিয়ে নিবেদিত বিশেষ শোকেস।
          </p>
        </div>
      </aside>
    </>
  );
};

