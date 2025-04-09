
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
    description: 'Premium quality natural straight hair extensions, perfect for a sleek, elegant look.',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
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
    description: 'Luxurious Brazilian deep wave hair extensions with natural bounce and feminine texture.',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
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
    description: 'High-quality synthetic wavy hair extensions designed with a natural look and feel.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1626818590242-5a5f27ee3971?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
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
    description: 'Beautiful natural curly afro hair extensions, adding volume and elegance to your look.',
    price: 179.99,
    imageUrl: 'https://images.unsplash.com/photo-1541421779826-20c2b5c2f574?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
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
    description: 'Beautiful blended hair extensions with a gorgeous ombre effect from dark to caramel, perfect for a sophisticated look.',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
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
    description: 'Complete hair care kit designed specifically for hair extensions, maintaining beauty and longevity.',
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
    description: 'Gorgeous loose wave natural hair extensions, creating a relaxed, elegant and feminine style.',
    price: 219.99,
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'natural',
    collection: 'wavy',
    bestSeller: false,
    inStock: true,
    length: '24 inches',
    color: 'Off Black'
  },
  {
    id: '8',
    name: 'Synthetic Bob Cut Wig',
    description: 'Stylish synthetic bob cut wig, providing a modern, sophisticated and glamorous look.',
    price: 69.99,
    imageUrl: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'synthetic',
    collection: 'straight',
    bestSeller: false,
    inStock: true,
    length: '12 inches',
    color: 'Jet Black'
  }
];

export const collections = [
  { id: 'straight', name: 'Straight Hair', image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 'wavy', name: 'Wavy Hair', image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 'curly', name: 'Curly Hair', image: 'https://images.unsplash.com/photo-1541421779826-20c2b5c2f574?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' }
];

export const categories = [
  { id: 'natural', name: 'Natural Hair' },
  { id: 'synthetic', name: 'Synthetic Hair' },
  { id: 'blended', name: 'Blended Hair' },
  { id: 'accessories', name: 'Hair Accessories' }
];
