
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-95 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-playfair font-bold">
          <span className="text-brown">Luxe</span>
          <span className="text-gold">Hair</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-gold transition-colors">Home</Link>
          <Link to="/shop" className="text-foreground hover:text-gold transition-colors">Shop</Link>
          <Link to="/collections" className="text-foreground hover:text-gold transition-colors">Collections</Link>
          <Link to="/about" className="text-foreground hover:text-gold transition-colors">About</Link>
          <Link to="/contact" className="text-foreground hover:text-gold transition-colors">Contact</Link>
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:text-gold transition-colors">
            <Search size={20} />
          </button>
          <Link to="/cart" className="p-2 hover:text-gold transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <Link to="/" className="text-foreground hover:text-gold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/shop" className="text-foreground hover:text-gold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/collections" className="text-foreground hover:text-gold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <Link to="/about" className="text-foreground hover:text-gold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-foreground hover:text-gold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <div className="flex items-center justify-between pt-4 border-t border-muted">
            <button className="p-2 hover:text-gold transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="p-2 hover:text-gold transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
