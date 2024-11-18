import React, { useRef, useEffect } from 'react';
import { Users, Camera, FileCheck, LockKeyhole, Star, Award, Globe2 } from 'lucide-react';

function WhyChooseUs() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}

export default WhyChooseUs;