
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-nude to-nude-light pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10 scroll-animate">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-6 leading-tight">
            Unlock Your <br />
            <span className="text-gold">Natural Beauty</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Discover premium quality hair extensions handcrafted for the modern, sophisticated woman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-brown hover:bg-brown-dark text-white px-8 py-6 rounded-md text-base">
              Shop Collection
            </Button>
            <Button variant="outline" className="border-brown text-brown hover:bg-brown/10 px-8 py-6 rounded-md text-base">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Image - Always animated regardless of hover */}
        <div 
          className="w-full md:w-1/2 mt-12 md:mt-0 scroll-animate"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`relative mx-auto max-w-md transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
            <div className="absolute inset-0 bg-gold opacity-10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Elegant Hair Wigs Collection" 
              className="relative z-10 rounded-2xl shadow-xl animate-bounce-hair object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-black opacity-10 blur-md rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute top-1/3 left-10 w-20 h-20 rounded-full bg-gold opacity-20 blur-xl floating-animation"></div>
      <div className="absolute bottom-1/3 right-10 w-16 h-16 rounded-full bg-brown opacity-20 blur-xl floating-animation animation-delay-2000"></div>
    </div>
  );
};

export default HeroSection;
