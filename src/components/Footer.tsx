
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-playfair font-bold">
              <span className="text-nude-light">Luxe</span>
              <span className="text-gold">Hair</span>
            </Link>
            <p className="text-nude-light opacity-80 text-sm mt-2">
              Premium quality hair extensions for the modern, sophisticated woman.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-nude-light hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-nude-light hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-nude-light hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-playfair text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-nude-light hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-nude-light hover:text-gold transition-colors">Shop All</Link></li>
              <li><Link to="/collections" className="text-nude-light hover:text-gold transition-colors">Collections</Link></li>
              <li><Link to="/about" className="text-nude-light hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-nude-light hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gold font-playfair text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-nude-light hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-nude-light hover:text-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-nude-light hover:text-gold transition-colors">Hair Care Guide</Link></li>
              <li><Link to="/privacy" className="text-nude-light hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-nude-light hover:text-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-playfair text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-nude-light">
                <span className="font-medium">Email:</span>
                <a href="mailto:info@luxehair.com" className="ml-2 hover:text-gold transition-colors">info@luxehair.com</a>
              </li>
              <li className="flex items-center text-nude-light">
                <span className="font-medium">Phone:</span>
                <a href="tel:+441234567890" className="ml-2 hover:text-gold transition-colors">+44 (0) 123 456 7890</a>
              </li>
              <li className="text-nude-light opacity-80 mt-2">
                <p>123 Hair Street</p>
                <p>London, SW1A 1AA</p>
                <p>United Kingdom</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-brown-light py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-nude-light text-sm">
            &copy; {currentYear} LuxeHair. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <img 
              src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
              alt="Payment Methods"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
