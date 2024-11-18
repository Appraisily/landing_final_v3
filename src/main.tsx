import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Critical path components
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load non-critical components
const TrustIndicators = lazy(() => import('./components/TrustIndicators'));
const ComparisonTable = lazy(() => import('./components/ComparisonTable'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const SampleReport = lazy(() => import('./components/SampleReport'));
const Experts = lazy(() => import('./components/Experts'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Pricing = lazy(() => import('./components/Pricing'));
const InstantAnalysis = lazy(() => import('./components/InstantAnalysis'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Critical path components */}
      <Hero />
      <Process />
      <Services />

      {/* Lazy loaded components with IntersectionObserver */}
      <Suspense fallback={<LoadingSpinner />}>
        <TrustIndicators />
        <ComparisonTable />
        <CaseStudies />
        <SampleReport />
        <Experts />
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