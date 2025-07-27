
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, User, Heart } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full spiritual-gradient flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold spiritual-text-gradient">PanditConnect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#pandits" className="text-gray-700 hover:text-primary transition-colors">
              Pandits
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="spiritual-gradient">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#pandits"
                className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Pandits
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="px-4 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button size="sm" className="w-full spiritual-gradient">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
