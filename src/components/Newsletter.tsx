
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing! You'll receive updates about our new arrivals and restocks.");
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-nude py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">Stay Updated with New Arrivals</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new hair collections, 
            restocks and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-r-0 border-border rounded-l-md focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              className="bg-gold hover:bg-gold-dark text-white rounded-r-md sm:rounded-l-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden md:block absolute left-10 w-20 h-20 rounded-full bg-gold opacity-10 blur-xl floating-animation"></div>
      <div className="hidden md:block absolute right-10 w-24 h-24 rounded-full bg-brown opacity-10 blur-xl floating-animation animation-delay-2000"></div>
    </section>
  );
};

export default Newsletter;
