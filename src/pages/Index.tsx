
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Heart, Gift, Calendar, MapPin, Phone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-sage-800 mb-4">How We Support Families</h2>
              <p className="text-xl text-sage-600 max-w-3xl mx-auto">
                From pregnancy testing to parenting classes, we provide comprehensive support every step of the way.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-sage-50 p-8 rounded-lg text-center">
                <Heart className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Pregnancy Support</h3>
                <p className="text-sage-600 mb-6">
                  Free pregnancy tests, ultrasounds, and compassionate counseling to help you navigate your options.
                </p>
              </div>
              
              <div className="bg-rose-50 p-8 rounded-lg text-center">
                <Users className="h-16 w-16 text-sage-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Parenting Classes</h3>
                <p className="text-sage-600 mb-6">
                  Comprehensive education on child development, nutrition, and parenting skills for new and experienced parents.
                </p>
              </div>
              
              <div className="bg-sage-50 p-8 rounded-lg text-center">
                <Gift className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Material Support</h3>
                <p className="text-sage-600 mb-6">
                  Baby supplies, maternity clothes, and essential items to help families get started on the right foot.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
