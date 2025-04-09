
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Play } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Clean up on unmount
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  // If product doesn't have a videoUrl, use a default placeholder
  const videoUrl = product.videoUrl || "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";

  // Preload video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true);
      });
      
      videoRef.current.addEventListener('error', () => {
        setVideoError(true);
      });
    }
    
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => {});
        videoRef.current.removeEventListener('error', () => {});
      }
    };
  }, [videoUrl]);

  // Handle mouse enter/leave for video playback
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !videoError && videoLoaded) {
      videoRef.current.play().catch(err => {
        console.log("Video autoplay prevented:", err);
        setVideoError(true);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="bg-white rounded-xl product-card-shadow transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/product/${product.id}`} className="relative overflow-hidden h-72 block">
        {/* Video overlay that appears on hover */}
        <video 
          ref={videoRef}
          src={videoUrl}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setVideoError(true)}
        />
        
        {/* Static image */}
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        
        {product.bestSeller && (
          <span className="absolute top-2 left-2 bg-gold text-white text-xs uppercase tracking-wider py-1 px-2 rounded">
            Best Seller
          </span>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Out of Stock</span>
          </div>
        )}
        
        {/* Video indicator */}
        <div className={`absolute bottom-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <Play size={14} className="text-brown fill-brown" />
        </div>

        {/* View details overlay on hover */}
        <div className={`absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
          <span className="bg-white/80 text-brown px-4 py-2 rounded-full text-sm font-medium font-cormorant">View Details</span>
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-cormorant text-lg font-medium mb-1">{product.name}</h3>
            <p className="text-brown-dark text-sm">£{product.price.toFixed(2)}</p>
          </div>
          <button 
            className="text-muted-foreground hover:text-gold transition-colors"
            onClick={() => toast.success(`${product.name} added to favorites!`)}
          >
            <Heart size={18} />
          </button>
        </div>

        {product.length && product.color && (
          <div className="flex mt-2 text-xs text-muted-foreground space-x-2">
            <span>{product.length}</span>
            <span>•</span>
            <span>{product.color}</span>
          </div>
        )}

        <div className="mt-4 flex space-x-2">
          <Button 
            className={`flex-1 h-9 text-xs bg-brown hover:bg-brown-dark text-white ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!product.inStock}
            onClick={(e) => {
              e.preventDefault();
              toast.success(`${product.name} added to your bag!`);
            }}
          >
            <ShoppingBag size={14} className="mr-2" />
            Add to Bag
          </Button>
          <Link 
            to={`/product/${product.id}`} 
            className="flex items-center justify-center px-3 py-1 border border-brown rounded bg-white text-brown hover:bg-brown/5 text-xs h-9"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
