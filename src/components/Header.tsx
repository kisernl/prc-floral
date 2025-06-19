import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
              <h1 className="text-3xl font-bold text-sage-800">Floral PRC</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sage-700 hover:text-rose-600 transition-colors font-medium bg-transparent border-none outline-none flex items-center gap-1">
                Who We Are
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/about" className="w-full">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/team" className="w-full">Our Team</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/story" className="w-full">Our Story</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/impact" className="w-full">Our Impact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-sage-700 hover:text-rose-600 transition-colors font-medium bg-transparent border-none outline-none flex items-center gap-1">
                What We Do
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full">Our Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/stories" className="w-full">Stories</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-sage-700 hover:text-rose-600 transition-colors font-medium bg-transparent border-none outline-none flex items-center gap-1">
                Connect With Us
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="w-full">Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events" className="w-full">Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/volunteer" className="w-full">Volunteer</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
                <Button variant="ghost" size="icon" className="h-14 w-14 text-sage-800 hover:bg-sage-100">
                  <Menu className="h-10 w-10" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-white text-sage-800 border-t-sage-200 h-[85vh] max-h-[85vh] flex flex-col">
                <DrawerHeader className="border-b border-sage-200 flex-shrink-0">
                  <div className="flex items-center space-x-3">
                    <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-3">
                      <div className="p-1.5 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full">
                        <Heart className="h-6 w-6 text-rose-600" />
                      </div>
                      <DrawerTitle className="text-sage-800 hover:text-rose-600 transition-colors text-xl">Floral PRC</DrawerTitle>
                    </Link>
                  </div>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" className="absolute right-4 top-4 text-sage-800 hover:bg-sage-100">
                      <X className="h-4 w-4" />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="p-6 space-y-8 overflow-y-auto flex-1">
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-4">Who We Are</h3>
                    <div className="pl-4 space-y-4">
                      <Link to="/about" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">About Us</Link>
                      <Link to="/about/team" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Our Team</Link>
                      <Link to="/about/story" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Our Story</Link>
                      <Link to="/about/impact" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Our Impact</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-4">What We Do</h3>
                    <div className="pl-4 space-y-4">
                      <Link to="/services" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Our Services</Link>
                      <Link to="/stories" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Stories</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-4">Connect With Us</h3>
                    <div className="pl-4 space-y-4">
                      <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Contact</Link>
                      <Link to="/events" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Events</Link>
                      <Link to="/volunteer" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Volunteer</Link>
                      <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-sage-600 hover:text-rose-600">Blog</Link>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-sage-200 flex-shrink-0">
                  <Link to="/donate" onClick={() => setIsOpen(false)} className="block w-full">
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
