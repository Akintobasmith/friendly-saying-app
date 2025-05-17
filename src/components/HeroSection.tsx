
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Elegant Hair Collection",
      title: "Premium Hair",
      subtitle: "Extensions"
    },
    {
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      alt: "Premium Hair Extensions",
      title: "Luxury",
      subtitle: "Hair Collection" 
    },
    {
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      alt: "Luxury Hair Collection",
      title: "Natural",
      subtitle: "Beauty"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered, heroImages.length]);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-nude to-nude-light pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10 scroll-animate">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-semibold mb-6 leading-tight">
            Unlock Your <br />
            <span className="text-gold">Natural Beauty</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Discover premium quality hair extensions handcrafted for the modern, sophisticated individual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-brown hover:bg-brown-dark text-white px-8 py-6 rounded-md text-base" asChild>
              <Link to="/#products">
                Shop Collection
              </Link>
            </Button>
            <Button variant="outline" className="border-brown text-brown hover:bg-brown/10 px-8 py-6 rounded-md text-base">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Image - With Carousel */}
        <div 
          className="w-full md:w-1/2 mt-12 md:mt-0 scroll-animate"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel 
            className="w-full max-w-md mx-auto"
            opts={{ 
              loop: true
            }}
            onSelect={(api) => {
              if (api) setCurrentSlide(api.selectedScrollSnap());
            }}
          >
            <CarouselContent>
              {heroImages.map((item, index) => (
                <CarouselItem key={index}>
                  <div className={`relative transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
                    <div className="absolute inset-0 bg-gold opacity-10 rounded-full blur-3xl"></div>
                    <div className="relative">
                      {/* Enhanced gradient fade overlay with stronger fade and curved top */}
                      <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-nude-light via-nude-light/70 to-transparent z-10"></div>
                      
                      <img 
                        src={item.image} 
                        alt={item.alt} 
                        className="relative rounded-t-[3rem] rounded-b-2xl shadow-xl object-cover h-[500px] w-full"
                      />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                      <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg text-white inline-block">
                        <h2 className="text-xl md:text-2xl font-cormorant font-medium">
                          {item.title} <span className="text-gold">{item.subtitle}</span>
                        </h2>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-black opacity-10 blur-md rounded-full"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12 bg-white/40 hover:bg-white/80" />
            <CarouselNext className="right-0 lg:-right-12 bg-white/40 hover:bg-white/80" />
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-gold w-6' 
                      : 'bg-gold/30 hover:bg-gold/50'
                  }`}
                  onClick={() => {
                    setCurrentSlide(index);
                    const carouselInstance = document.querySelector('[data-radix-carousel-viewport]')?.__emblaApi;
                    if (carouselInstance) carouselInstance.scrollTo(index);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
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
