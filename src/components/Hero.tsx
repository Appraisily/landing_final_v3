import React from 'react';
import { ArrowRight, Award, Shield, Star, Clock, Sparkles } from 'lucide-react';
import VideoBackground from './VideoBackground';

export default function Hero() {
  return (
    <div className="relative bg-white">
      <VideoBackground fallbackImage="https://ik.imagekit.io/appraisily/WebPage/hero_background.jpg" />
      
      <div className="relative hero-content">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2">
              <img
                src="https://ik.imagekit.io/appraisily/WebPage/logo.JPG?tr=w-32,h-32"
                alt="Appraisily"
                className="h-8 w-auto rounded-full"
                width="32"
                height="32"
                loading="eager"
                decoding="async"
                fetchpriority="high"
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
                className="rounded-xl bg-white/20 backdrop-blur-sm px-8 py-4 text-xl font-semibold text-white hover:bg-white/30 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-fit ring-2 ring-white/20"
              >
                Try Free AI Analysis <Sparkles className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-white/30">
              <Clock className="w-8 h-8 text-white" />
              <p className="text-white font-medium">24-48h Turnaround</p>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-white/30">
              <Award className="w-8 h-8 text-white" />
              <p className="text-white font-medium">Certified Experts</p>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-white/30">
              <Shield className="w-8 h-8 text-white" />
              <p className="text-white font-medium">From $59/Item</p>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-white/30">
              <Star className="w-8 h-8 text-white" />
              <p className="text-white font-medium">5-Star Rated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}