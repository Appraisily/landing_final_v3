import React from 'react';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import Services from './components/Services';
import ComparisonTable from './components/ComparisonTable';
import Process from './components/Process';
import SampleReport from './components/SampleReport';
import CaseStudies from './components/CaseStudies';
import Appraisers from './components/Appraisers';
import Guarantee from './components/Guarantee';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import InstantAnalysis from './components/InstantAnalysis';
import { useTawkTo } from './hooks/useTawkTo';

function App() {
  useTawkTo();

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustIndicators />
      <Services />
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
    </div>
  );
}

export default App;