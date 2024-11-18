import React from 'react';
import { ArrowRight, Award, Shield, Star, Clock, Sparkles } from 'lucide-react';
import VideoBackground from './VideoBackground';

export default function Hero() {
  return (
    <div className="relative bg-white">
      <VideoBackground fallbackImage="https://ik.imagekit.io/appraisily/WebPage/hero_background.jpg?tr=q-50" />
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">
              <img
                src="https://ik.imagekit.io/appraisily/WebPage/logo.JPG?tr=w-32,h-32"
                alt="Appraisily"
                className="h-8 w-auto rounded-full"
              />
              <span className="text-xl font-semibold text-white">Appraisily</span>
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
                className="rounded-xl bg-primary px-8 py-4 text-xl font-semibold text-white shadow-xl hover:bg-primary/90 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-fit ring-2 ring-white/20"
              >
                Start Appraisal Now <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="https://screener.appraisily.com"
                className="rounded-xl bg-white/15 backdrop-blur-sm px-8 py-4 text-xl font-semibold text-white hover:bg-white/25 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-fit ring-2 ring-white/20"
              >
                Try Free AI Analysis <Sparkles className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm p-3 rounded-lg ring-1 ring-white/10 transition-all duration-300">
              <div className="p-2">
                <Clock className="w-5 h-5 text-white/80" />
              </div>
              <p className="text-white/80 text-sm">24-48h Turnaround</p>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm p-3 rounded-lg ring-1 ring-white/10 transition-all duration-300">
              <div className="p-2">
                <Award className="w-5 h-5 text-white/80" />
              </div>
              <p className="text-white/80 text-sm">Certified Experts</p>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm p-3 rounded-lg ring-1 ring-white/10 transition-all duration-300">
              <div className="p-2">
                <Shield className="w-5 h-5 text-white/80" />
              </div>
              <p className="text-white/80 text-sm">From $59/Item</p>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm p-3 rounded-lg ring-1 ring-white/10 transition-all duration-300">
              <div className="p-2">
                <Star className="w-5 h-5 text-white/80" />
              </div>
              <p className="text-white/80 text-sm">5-Star Rated</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-32 pointer-events-none"></div>
      </div>

      {/* Enhanced Floating Brand Badge */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://appraisily.com"
          className="group flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-2 pr-4 py-2 shadow-lg hover:bg-white transition-all duration-200 ring-1 ring-gray-200"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur group-hover:bg-primary/30 transition-colors"></div>
            <img
              src="https://ik.imagekit.io/appraisily/WebPage/logo.JPG?tr=w-64,h-64,q-90"
              alt="Appraisily"
              className="h-8 w-8 rounded-full relative"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span className="text-gray-900 font-medium group-hover:text-primary transition-colors">appraisily.com</span>
        </a>
      </div>
    </div>
  );
}