import React from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandIntroduction } from './components/BrandIntroduction';
import { GurCollection } from './components/GurCollection';
import { WhyFoodGhor } from './components/WhyFoodGhor';
import { GurStorySection } from './components/GurStorySection';
import { GurGallery } from './components/GurGallery';
import { BrandCTA } from './components/BrandCTA';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#24251F] selection:bg-[#B89555]/20 selection:text-[#173324]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection />

        {/* 4. Brand Introduction */}
        <BrandIntroduction />

        {/* 5. Featured Gur Collection */}
        <GurCollection />

        {/* 6. Why Food Ghor? */}
        <WhyFoodGhor />

        {/* 7. Gur Storytelling Section */}
        <GurStorySection />

        {/* 8. Gur Lifestyle Gallery */}
        <GurGallery />

        {/* 9. Brand Promise & Call-to-Action */}
        <BrandCTA />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
