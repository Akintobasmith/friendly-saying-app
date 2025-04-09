
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
      <div className="container mx-auto px-4">
        {/* Mobile Menu Button (Left) */}
        <div className="flex items-center justify-between md:grid md:grid-cols-3">
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-gold transition-colors">Home</Link>
            <Link to="/shop" className="text-foreground hover:text-gold transition-colors">Shop</Link>
            <Link to="/collections" className="text-foreground hover:text-gold transition-colors">Collections</Link>
          </div>

          {/* Centered Logo */}
          <div className="flex justify-center items-center">
            <Link to="/" className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-gold text-white flex items-center justify-center font-cormorant text-xl font-bold mb-1">
                RHC
              </div>
              <div className="text-xl md:text-2xl font-cormorant font-bold tracking-wider">
                <span className="text-brown">Rich</span>
                <span className="text-gold">Hair Club</span>
              </div>
            </Link>
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden md:flex items-center justify-end space-x-8">
            <Link to="/about" className="text-foreground hover:text-gold transition-colors">About</Link>
            <Link to="/contact" className="text-foreground hover:text-gold transition-colors">Contact</Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-gold transition-colors">
                <Search size={18} />
              </button>
              <Link to="/cart" className="p-2 hover:text-gold transition-colors relative">
                <ShoppingBag size={18} />
                <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </Link>
            </div>
          </div>
          
          {/* Mobile Cart Icon (Right) */}
          <div className="md:hidden flex items-center justify-end">
            <Link to="/cart" className="p-2 hover:text-gold transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </Link>
          </div>
        </div>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
