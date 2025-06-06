
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DonationSection from '@/components/DonationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DonationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
