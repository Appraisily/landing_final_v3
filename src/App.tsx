import React, { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import Services from './components/Services';

// Lazy load non-critical components
const ComparisonTable = lazy(() => import('./components/ComparisonTable'));
const Process = lazy(() => import('./components/Process'));
const SampleReport = lazy(() => import('./components/SampleReport'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Appraisers = lazy(() => import('./components/Appraisers'));
const Guarantee = lazy(() => import('./components/Guarantee'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const InstantAnalysis = lazy(() => import('./components/InstantAnalysis'));

// Import hook
import { useTawkTo } from './hooks/useTawkTo';

// Loading fallback for lazy components
const LoadingFallback = () => null;

function App() {
  useTawkTo();

  return (
    <div className="min-h-screen bg-white">
      {/* Critical above-the-fold content */}
      <Hero />
      <TrustIndicators />
      <Services />

      {/* Lazy loaded content */}
      <Suspense fallback={<LoadingFallback />}>
        <ComparisonTable />
        <Process />
        <SampleReport />
        <CaseStudies />
        <Appraisers />
        <Guarantee />
        <Pricing />
        <FAQ />
        <Testimonials />
        <InstantAnalysis />
      </Suspense>
    </div>
  );
}

export default App;