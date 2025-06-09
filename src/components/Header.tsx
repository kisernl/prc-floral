
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

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
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full">
              <Heart className="h-8 w-8 text-rose-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-sage-800">Hope Pregnancy Center</h1>
              <p className="text-sm text-sage-600">Supporting families with love and care</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sage-700 hover:text-rose-600 transition-colors font-medium bg-transparent">
                    Who We Are
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4">
                      <Link to="/about" className="block px-3 py-2 text-sage-700 hover:text-rose-600 hover:bg-sage-50 rounded transition-colors">
                        About Us
                      </Link>
                      <Link to="/about/team" className="block px-3 py-2 text-sage-700 hover:text-rose-600 hover:bg-sage-50 rounded transition-colors">
                        Our Team
                      </Link>
                      <Link to="/about/story" className="block px-3 py-2 text-sage-700 hover:text-rose-600 hover:bg-sage-50 rounded transition-colors">
                        Our Story
                      </Link>
                      <Link to="/about/impact" className="block px-3 py-2 text-sage-700 hover:text-rose-600 hover:bg-sage-50 rounded transition-colors">
                        Our Impact
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/services" className="text-sage-700 hover:text-rose-600 transition-colors font-medium">
                    What We Do
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/stories" className="text-sage-700 hover:text-rose-600 transition-colors font-medium">
                    Stories
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/events" className="text-sage-700 hover:text-rose-600 transition-colors font-medium">
                    Events
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/volunteer" className="text-sage-700 hover:text-rose-600 transition-colors font-medium">
                    Volunteer
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="text-sage-700 hover:text-rose-600 transition-colors font-medium">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/donate">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                Donate Now
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
