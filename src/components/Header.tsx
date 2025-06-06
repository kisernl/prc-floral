
import React from 'react';
import { Heart, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-sage-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-sage-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-sage-600" />
              <span className="text-sage-700">(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-sage-600" />
              <span className="text-sage-700">info@hopepregnancycenter.org</span>
            </div>
          </div>
          <div className="text-sage-600">
            <span>24/7 Support Available</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full">
              <Heart className="h-8 w-8 text-rose-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-sage-800">Hope Pregnancy Center</h1>
              <p className="text-sm text-sage-600">Supporting families with love and care</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sage-700 hover:text-rose-600 transition-colors font-medium">About</a>
            <a href="#services" className="text-sage-700 hover:text-rose-600 transition-colors font-medium">Services</a>
            <a href="#impact" className="text-sage-700 hover:text-rose-600 transition-colors font-medium">Our Impact</a>
            <a href="#testimonials" className="text-sage-700 hover:text-rose-600 transition-colors font-medium">Stories</a>
            <a href="#contact" className="text-sage-700 hover:text-rose-600 transition-colors font-medium">Contact</a>
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">
              Donate Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
