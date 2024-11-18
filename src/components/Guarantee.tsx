import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export default function Guarantee() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary rounded-3xl px-6 py-24 text-center shadow-2xl sm:px-16">
          <div className="mx-auto max-w-2xl">
            <div className="flex justify-center">
              <Shield className="h-16 w-16 text-white" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              100% Satisfaction Guarantee
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              We stand behind our appraisals with a complete satisfaction guarantee. If you're not fully satisfied with our service, we'll revise your appraisal or provide a full refund.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href="https://appraisily.com/start"
                className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 flex items-center gap-2"
              >
                Get Your Appraisal
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}