
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl product-card-shadow transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
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
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-playfair text-lg font-medium mb-1">{product.name}</h3>
            <p className="text-brown-dark text-sm">£{product.price.toFixed(2)}</p>
          </div>
          <button className="text-muted-foreground hover:text-gold transition-colors">
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
          >
            <ShoppingBag size={14} className="mr-2" />
            Add to Bag
          </Button>
          <Link to={`/product/${product.id}`} className="flex items-center justify-center px-3 py-1 border border-brown rounded bg-white text-brown hover:bg-brown/5 text-xs h-9">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
