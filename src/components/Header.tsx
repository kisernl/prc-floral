
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-sage-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
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

          {/* Desktop Navigation */}
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
                  <NavigationMenuTrigger className="text-sage-700 hover:text-rose-600 transition-colors font-medium bg-transparent">
                    What We Do
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4">
                      <Link to="/services" className="block px-3 py-2 text-sage-700 hover:text-rose-600 hover:bg-sage-50 rounded transition-colors">
                        Our Services
                      </Link>
                      <Link to="/stories" className="block px-3 py-2 text-sage-700 hover:text-rose-600 hover:bg-sage-50 rounded transition-colors">
                        Stories
                      </Link>
                    </div>
                  </NavigationMenuContent>
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

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Navigation</DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                      <X className="h-4 w-4" />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-sage-700 mb-2">Who We Are</h3>
                    <div className="pl-4 space-y-2">
                      <Link to="/about" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">About Us</Link>
                      <Link to="/about/team" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Our Team</Link>
                      <Link to="/about/story" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Our Story</Link>
                      <Link to="/about/impact" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Our Impact</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-700 mb-2">What We Do</h3>
                    <div className="pl-4 space-y-2">
                      <Link to="/services" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Our Services</Link>
                      <Link to="/stories" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Stories</Link>
                    </div>
                  </div>
                  <Link to="/events" onClick={() => setIsOpen(false)} className="block font-semibold text-sage-700 hover:text-rose-600">Events</Link>
                  <Link to="/volunteer" onClick={() => setIsOpen(false)} className="block font-semibold text-sage-700 hover:text-rose-600">Volunteer</Link>
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="block font-semibold text-sage-700 hover:text-rose-600">Contact</Link>
                  <Link to="/donate" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
