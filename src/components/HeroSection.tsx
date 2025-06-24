
import React from 'react';
import { Heart, Users, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center floral-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-sage-800 leading-tight">
              Supporting Families with 
              <span className="text-rose-600 block lg:inline"> Love & Hope</span>
            </h1>
            
            <p className="text-xl text-sage-700 leading-relaxed">
              At Floral Pregnancy Center, we believe every family deserves compassionate support, 
              comprehensive resources, and unconditional love during their pregnancy journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg">
                  <Gift className="mr-2 h-5 w-5" />
                  Make a Donation
                </Button>
              </Link>
              <Link to="/welcome">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-sage-400 text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600">5,000+</div>
                <div className="text-sage-600 text-sm">Families Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600">15</div>
                <div className="text-sage-600 text-sm">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600">1,200+</div>
                <div className="text-sage-600 text-sm">Sonograms Performed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-sage-200">
              <img 
                src="/images/mom_baby_1.png" 
                alt="mom and baby"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-rose-100 rounded-full p-6">
                <Heart className="h-12 w-12 text-rose-600" />
              </div>
            </div>
            <div className="absolute -top-6 -left-6 md:w-32 md:h-32 bg-sage-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 md:w-24 md:h-24 bg-rose-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
