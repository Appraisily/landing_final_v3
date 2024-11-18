import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Critical path components (immediate load)
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import Process from './components/Process';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy loaded components in conversion-optimized order
const Services = lazy(() => import('./components/Services'));
const ComparisonTable = lazy(() => import('./components/ComparisonTable'));
const SampleReport = lazy(() => import('./components/SampleReport'));
const Experts = lazy(() => import('./components/Experts'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Pricing = lazy(() => import('./components/Pricing'));
const InstantAnalysis = lazy(() => import('./components/InstantAnalysis'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Immediate attention grabbers */}
      <Hero />
      <TrustIndicators />
      
      {/* Core value proposition */}
      <Process />
      
      {/* Conversion-focused content */}
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
        <ComparisonTable />
        <SampleReport />
        <Experts />
        <CaseStudies />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Pricing />
        <InstantAnalysis />
      </Suspense>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);