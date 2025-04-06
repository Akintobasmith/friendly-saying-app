
import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );
      
      observerRef.current = observer;
      
      // Select all elements with the scroll-animate class
      const animateElements = document.querySelectorAll('.scroll-animate');
      if (animateElements.length > 0) {
        animateElements.forEach((el) => observer.observe(el));
      }
    }, 100);
    
    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  return observerRef;
}
