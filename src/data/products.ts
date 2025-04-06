
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'synthetic' | 'natural' | 'blended' | 'accessories';
  collection: 'straight' | 'wavy' | 'curly' | 'accessories';
  bestSeller: boolean;
  inStock: boolean;
  length?: string;
  color?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Natural Silky Straight Hair',
    description: 'Premium quality natural straight hair extension for a sleek, natural look.',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1605980625600-88c0bd83a96b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'natural',
    collection: 'straight',
    bestSeller: true,
    inStock: true,
    length: '18 inches',
    color: 'Natural Black'
  },
  {
    id: '2',
    name: 'Brazilian Deep Wave',
    description: 'Luxurious Brazilian deep wave hair extension with natural bounce and texture.',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'natural',
    collection: 'wavy',
    bestSeller: true,
    inStock: true,
    length: '20 inches',
    color: 'Dark Brown'
  },
  {
    id: '3',
    name: 'Synthetic Blonde Wavy Hair',
    description: 'High-quality synthetic wavy hair extension that looks and feels like natural hair.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1562589600-caa8873808c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'synthetic',
    collection: 'wavy',
    bestSeller: false,
    inStock: true,
    length: '16 inches',
    color: 'Blonde'
  },
  {
    id: '4',
    name: 'Natural Curly Afro Hair',
    description: 'Beautiful natural curly afro hair for a voluminous and natural look.',
    price: 179.99,
    imageUrl: 'https://images.unsplash.com/photo-1540247110674-31e928ee852a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'natural',
    collection: 'curly',
    bestSeller: false,
    inStock: true,
    length: '14 inches',
    color: 'Natural Black'
  },
  {
    id: '5',
    name: 'Blended Ombre Straight Hair',
    description: 'Beautiful blended hair with a gorgeous ombre effect from dark to caramel.',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'blended',
    collection: 'straight',
    bestSeller: true,
    inStock: true,
    length: '22 inches',
    color: 'Ombre Brown'
  },
  {
    id: '6',
    name: 'Luxury Hair Care Kit',
    description: 'Complete hair care kit designed specifically for hair extensions.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'accessories',
    collection: 'accessories',
    bestSeller: false,
    inStock: true
  },
  {
    id: '7',
    name: 'Natural Loose Wave Hair',
    description: 'Gorgeous loose wave natural hair for a relaxed, elegant style.',
    price: 219.99,
    imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'natural',
    collection: 'wavy',
    bestSeller: false,
    inStock: true,
    length: '24 inches',
    color: 'Off Black'
  },
  {
    id: '8',
    name: 'Synthetic Bob Cut',
    description: 'Stylish synthetic bob cut wig for a modern, sophisticated look.',
    price: 69.99,
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'synthetic',
    collection: 'straight',
    bestSeller: false,
    inStock: true,
    length: '12 inches',
    color: 'Jet Black'
  }
];

export const collections = [
  { id: 'straight', name: 'Straight Hair', image: 'https://images.unsplash.com/photo-1605980625600-88c0bd83a96b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 'wavy', name: 'Wavy Hair', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 'curly', name: 'Curly Hair', image: 'https://images.unsplash.com/photo-1540247110674-31e928ee852a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' }
];

export const categories = [
  { id: 'natural', name: 'Natural Hair' },
  { id: 'synthetic', name: 'Synthetic Hair' },
  { id: 'blended', name: 'Blended Hair' },
  { id: 'accessories', name: 'Accessories' }
];
