
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product, products, categories, collections } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory ? product.category === activeCategory : true;
    const matchesCollection = activeCollection ? product.collection === activeCollection : true;
    const matchesSearch = searchQuery 
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesCollection && matchesSearch;
  });

  return (
    <section className="py-16 bg-nude-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Collection</h2>
        
        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search for hair products..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button 
              variant={activeCategory === null ? "default" : "outline"} 
              className={`text-sm rounded-full ${activeCategory === null ? 'bg-gold hover:bg-gold-dark' : 'border-gold text-gold hover:bg-gold/10'}`}
              onClick={() => setActiveCategory(null)}
            >
              All Types
            </Button>
            {categories.map((category) => (
              <Button 
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"} 
                className={`text-sm rounded-full ${activeCategory === category.id ? 'bg-gold hover:bg-gold-dark' : 'border-gold text-gold hover:bg-gold/10'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Collection Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button 
              variant={activeCollection === null ? "default" : "outline"} 
              className={`text-sm rounded-full ${activeCollection === null ? 'bg-brown hover:bg-brown-dark' : 'border-brown text-brown hover:bg-brown/10'}`}
              onClick={() => setActiveCollection(null)}
            >
              All Styles
            </Button>
            {collections.map((collection) => (
              <Button 
                key={collection.id}
                variant={activeCollection === collection.id ? "default" : "outline"} 
                className={`text-sm rounded-full ${activeCollection === collection.id ? 'bg-brown hover:bg-brown-dark' : 'border-brown text-brown hover:bg-brown/10'}`}
                onClick={() => setActiveCollection(collection.id)}
              >
                {collection.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4 border-gold text-gold hover:bg-gold/10"
              onClick={() => {
                setActiveCategory(null);
                setActiveCollection(null);
                setSearchQuery('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
