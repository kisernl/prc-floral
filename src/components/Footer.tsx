
import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-sage-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-rose-600 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hope Pregnancy Center</h3>
                <p className="text-sm text-sage-300">Supporting families with love</p>
              </div>
            </div>
            <p className="text-sage-300 text-sm leading-relaxed">
              Dedicated to providing compassionate support, comprehensive resources, 
              and unconditional love to families during their pregnancy journey.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-rose-400" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-rose-400" />
                <span className="text-sm">info@hopepregnancycenter.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-rose-400" />
                <span className="text-sm">123 Hope Street, Your City, ST 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-rose-400" />
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-sage-300 hover:text-white transition-colors">About Us</a>
              <a href="#services" className="block text-sm text-sage-300 hover:text-white transition-colors">Our Services</a>
              <a href="#impact" className="block text-sm text-sage-300 hover:text-white transition-colors">Our Impact</a>
              <a href="#donate" className="block text-sm text-sage-300 hover:text-white transition-colors">Donate</a>
              <a href="#volunteer" className="block text-sm text-sage-300 hover:text-white transition-colors">Volunteer</a>
              <a href="#contact" className="block text-sm text-sage-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-sage-700 rounded-full hover:bg-rose-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-sage-700 rounded-full hover:bg-rose-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-sage-700 rounded-full hover:bg-rose-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-sage-300">Subscribe to our newsletter</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-sage-700 border border-sage-600 rounded-lg focus:outline-none focus:border-rose-500 min-w-0"
                />
                <button className="px-4 py-2 bg-rose-600 text-white text-sm rounded-lg hover:bg-rose-700 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-sage-400">
            © 2024 Hope Pregnancy Center. All rights reserved. 501(c)(3) Non-profit Organization.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-sage-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-sage-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-sage-400 hover:text-white transition-colors">Financial Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
