import React from 'react';
import { Ruler, TrendingUp, Award, Download, FileText } from 'lucide-react';

const features = [
  {
    icon: Ruler,
    title: "Detailed Item Description",
    description: "Complete physical description, measurements, and condition assessment"
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Current market trends, comparable sales, and value justification"
  },
  {
    icon: Award,
    title: "Professional Certification",
    description: "USPAP-compliant certification and appraiser credentials"
  },
  {
    icon: FileText,
    title: "Comprehensive Documentation",
    description: "High-resolution photos and detailed provenance research"
  }
];

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

        <div className="mt-16">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="space-y-6">
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  className="bg-gray-50 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <a
                href="https://drive.google.com/file/d/1n-JCAEZJaZDOzQ3mF4GRPmatRKrUsoUn/view?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
              >
                <Download className="h-5 w-5" />
                View Sample Report
              </a>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-8">
                  <a
                    href="https://drive.google.com/file/d/1n-JCAEZJaZDOzQ3mF4GRPmatRKrUsoUn/view?pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
                  >
                    <Download className="h-5 w-5" />
                    View Sample Report
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-200">
                  <img
                    src="https://ik.imagekit.io/appraisily/WebPage/report.jpg?tr=w-800,h-1000,q-70"
                    alt="Sample appraisal report preview"
                    className="h-full w-full object-cover rounded-lg"
                    loading="lazy"
                    width="800"
                    height="1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}