
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import Newsletter from '@/components/Newsletter';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/sonner";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <Newsletter />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
