
import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Play, Pause, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products, Product } from '@/data/products';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id) || null;
  const [activeImage, setActiveImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rotationInterval = useRef<number | null>(null);
  
  useScrollAnimation();

  // Simulate multiple product images
  const productImages = product ? [
    { url: product.imageUrl, type: 'image', label: 'Front View' },
    { url: 'https://images.unsplash.com/photo-1580618864194-0547564ab09d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', type: 'image', label: 'Side View' },
    { url: 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', type: 'image', label: 'Back View' },
    { url: product.videoUrl, type: 'video', label: '360° Preview' },
  ] : [];

  useEffect(() => {
    return () => {
      if (rotationInterval.current) window.clearInterval(rotationInterval.current);
    };
  }, []);

  const handleVideoToggle = () => {
    if (!videoRef.current || !productImages[activeImage].url) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(err => {
        console.log("Video playback prevented:", err);
        toast.error("Video playback failed. Please try again.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  const startRotation = () => {
    if (rotationInterval.current) {
      window.clearInterval(rotationInterval.current);
      rotationInterval.current = null;
      setIsRotating(false);
      return;
    }
    
    setIsRotating(true);
    rotationInterval.current = window.setInterval(() => {
      setActiveImage(prev => {
        // Only rotate through images, not the video
        const next = (prev + 1) % (productImages.length - 1);
        return next;
      });
    }, 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center flex-col p-8">
          <h1 className="text-2xl font-playfair mb-4">Product Not Found</h1>
          <Link to="/" className="text-gold hover:underline">
            Return to homepage
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-center" />
      <Navbar />
      
      <main className="flex-1 py-16 bg-nude-light">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-brown hover:text-brown-dark mb-6"
          >
            <ChevronLeft size={20} />
            <span>Back to Collection</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images/Video Section */}
            <div className="space-y-4 scroll-animate">
              <Card className="overflow-hidden rounded-xl shadow-lg bg-white p-1">
                <div className="relative">
                  {productImages[activeImage].type === 'image' ? (
                    <img 
                      src={productImages[activeImage].url as string} 
                      alt={product.name} 
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                  ) : (
                    <div className="relative">
                      <video 
                        ref={videoRef}
                        src={productImages[activeImage].url as string} 
                        className="w-full h-[500px] object-cover rounded-lg"
                        loop
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      />
                      <Button 
                        onClick={handleVideoToggle}
                        variant="secondary"
                        size="icon"
                        className="absolute bottom-4 right-4 rounded-full bg-white/80 hover:bg-white"
                      >
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
              
              {/* Thumbnails */}
              <div className="flex flex-wrap gap-2 justify-center">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImage(idx);
                      if (isPlaying && videoRef.current) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                      }
                      if (rotationInterval.current) {
                        window.clearInterval(rotationInterval.current);
                        rotationInterval.current = null;
                        setIsRotating(false);
                      }
                    }}
                    className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                      activeImage === idx ? 'border-gold' : 'border-transparent'
                    } hover:opacity-90 transition-all`}
                  >
                    {img.type === 'image' ? (
                      <img src={img.url as string} alt={img.label} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-black flex items-center justify-center">
                        <Play size={24} className="text-white" />
                      </div>
                    )}
                    <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-0.5 text-center">
                      {img.label}
                    </span>
                  </button>
                ))}
                
                <Button 
                  onClick={startRotation}
                  variant="outline"
                  size="icon"
                  className={`w-20 h-20 rounded-md ${isRotating ? 'border-gold bg-gold/10' : 'border-brown'}`}
                >
                  <RotateCw size={24} className={`${isRotating ? 'animate-spin' : ''} text-brown`} />
                </Button>
              </div>
            </div>
            
            {/* Product Info Section */}
            <div className="space-y-6 scroll-animate">
              <div>
                {product.bestSeller && (
                  <span className="inline-block bg-gold text-white text-xs uppercase tracking-wider py-1 px-2 rounded mb-2">
                    Best Seller
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-playfair font-semibold">{product.name}</h1>
                <p className="text-2xl text-brown-dark mt-2">£{product.price.toFixed(2)}</p>
              </div>
              
              {product.length && product.color && (
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="font-medium">Length:</span> {product.length}
                  </div>
                  <div>
                    <span className="font-medium">Color:</span> {product.color}
                  </div>
                </div>
              )}
              
              <p className="text-muted-foreground">{product.description}</p>
              
              <div className="border-t border-b border-border py-4">
                <h3 className="font-medium mb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Premium quality hair extensions</li>
                  <li>Natural look and feel</li>
                  <li>Tangle-free and long-lasting</li>
                  <li>Easy to style and maintain</li>
                  <li>Heat resistant up to 180°C</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1 bg-brown hover:bg-brown-dark text-white"
                  disabled={!product.inStock}
                  onClick={() => toast.success(`${product.name} added to your bag!`)}
                >
                  {product.inStock ? 'Add to Bag' : 'Out of Stock'}
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-brown text-brown hover:bg-brown/5"
                  onClick={() => toast("Added to favorites!")}
                >
                  Save for Later
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
