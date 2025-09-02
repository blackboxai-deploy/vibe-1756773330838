"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-2xl font-bold text-green-800">
              Verdant Essence
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-green-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#collections" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Collections
              </a>
              <a href="#store" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Our Store
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Visit Store
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-800"
            >
              ☰
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-green-100">
              <a href="#home" className="text-green-700 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#collections" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Collections
              </a>
              <a href="#store" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Our Store
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Visit Store
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}