import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export const useTawkTo = () => {
  useEffect(() => {
    const loadTawkTo = () => {
      try {
        const s1 = document.createElement("script");
        s1.async = true;
        s1.src = 'https://embed.tawk.to/63a083dbb0d6371309d528e2/1gklg645r';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s1.onerror = () => {
          console.warn('Tawk.to chat widget failed to load');
          s1.remove();
        };
        
        document.head.appendChild(s1);
        
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();
      } catch (error) {
        console.warn('Error loading Tawk.to chat:', error);
      }
    };

    // Load chat widget when browser is idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        setTimeout(loadTawkTo, 5000);
      });
    } else {
      setTimeout(loadTawkTo, 5000);
    }
  }, []);
};