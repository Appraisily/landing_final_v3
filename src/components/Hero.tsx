import React from 'react';
import { ArrowRight, Award, Shield, Star, Clock, Sparkles } from 'lucide-react';
import VideoBackground from './VideoBackground';
import Logo from './Logo';
import TrustBar from './TrustBar';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white">
      <VideoBackground fallbackImage="https://ik.imagekit.io/appraisily/WebPage/hero_background.jpg" />
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-8 inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm px-4 py-2">
              <Logo variant="light" size="md" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Expert Art &amp; Antique Appraisals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Professional art appraisal services starting at $59. Get your artwork or antique valued by certified experts within 24-48 hours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://appraisily.com/start"
                className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-fit"
              >
                Start Appraisal Now <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://screener.appraisily.com"
                className="rounded-md bg-dark-contrast backdrop-blur-sm px-6 py-3 text-lg font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-fit ring-1 ring-white/50"
              >
                Try Free AI Analysis <Sparkles className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <TrustBar />

        {/* Floating Brand Badge */}
        <div className="fixed bottom-8 right-8 z-50">
          <a 
            href="https://appraisily.com"
            className="flex items-center gap-2 bg-dark-contrast backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg hover:bg-white/20 transition-all duration-200 ring-1 ring-white/50"
          >
            <Logo variant="light" size="sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;