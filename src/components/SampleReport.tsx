import React from 'react';
import { Ruler, TrendingUp, Award, Download, ArrowRight } from 'lucide-react';

export default function SampleReport() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Appraisal Reports
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive appraisal reports provide detailed analysis, market comparisons, and thorough documentation of your valuable pieces.
          </p>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Features */}
            <div className="p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Ruler className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Detailed Item Description</h3>
                    <p className="mt-2 text-gray-600">Complete physical description, measurements, and condition assessment</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Market Analysis</h3>
                    <p className="mt-2 text-gray-600">Current market trends, comparable sales, and value justification</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Professional Certification</h3>
                    <p className="mt-2 text-gray-600">USPAP-compliant certification and appraiser credentials</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://drive.google.com/file/d/1n-JCAEZJaZDOzQ3mF4GRPmatRKrUsoUn/view?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/10 px-6 py-3 text-base font-semibold text-primary hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
                >
                  <Download className="h-5 w-5" />
                  View Sample Report
                </a>
                <a
                  href="https://appraisily.com/start"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
                >
                  Start Your Appraisal
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Column - Report Preview */}
            <div className="relative bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
              <img
                src="https://ik.imagekit.io/appraisily/WebPage/report.jpg?tr=w-800,h-1000,q-70"
                alt="Sample appraisal report preview"
                className="h-full w-full object-cover mix-blend-overlay opacity-75"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-lg font-medium text-white mb-2">Professional Documentation</p>
                  <p className="text-sm text-gray-300">
                    Every report includes detailed analysis, high-quality images, and market comparisons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}