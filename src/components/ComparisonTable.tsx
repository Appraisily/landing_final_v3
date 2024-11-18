import React from 'react';
import { CheckCircle2, XCircle, Clock, DollarSign, Users, Shield, FileText, MessageCircle, Building2 } from 'lucide-react';

const features = [
  {
    name: 'Turnaround Time',
    icon: Clock,
    online: '24-48 hours',
    traditional: '1-2 weeks',
    others: 'Variable',
    description: 'Time from submission to receiving your complete appraisal report'
  },
  {
    name: 'Cost',
    icon: DollarSign,
    online: 'From $59',
    traditional: '$200-500+',
    others: '$30-100',
    description: 'Total cost including all fees and documentation'
  },
  {
    name: 'Expert Review',
    icon: Users,
    online: 'Multiple experts',
    traditional: 'Single appraiser',
    others: 'AI/Automated',
    description: 'Who evaluates your item and provides the appraisal'
  },
  {
    name: 'Security',
    icon: Shield,
    online: 'Secure process',
    traditional: 'Transport risk',
    others: 'Basic security',
    description: 'Protection of your items and information during the process'
  },
  {
    name: 'Documentation',
    icon: FileText,
    online: 'Comprehensive digital',
    traditional: 'Paper-based',
    others: 'Basic digital',
    description: 'Type and quality of documentation provided'
  },
  {
    name: 'Support',
    icon: MessageCircle,
    online: 'Unlimited follow-up',
    traditional: 'Limited access',
    others: 'Minimal/None',
    description: 'Availability of expert support after appraisal'
  },
  {
    name: 'Insurance Acceptance',
    icon: Building2,
    online: 'Fully accepted',
    traditional: 'Fully accepted',
    others: 'May be rejected',
    description: 'Acceptance by insurance companies and institutions'
  }
];

export default function ComparisonTable() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compare Appraisal Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how our online appraisal service compares to traditional and other options
          </p>
        </div>

        <div className="mt-16 flow-root">
          <div className="isolate -mt-16">
            <div className="relative">
              {/* Service Types Header */}
              <div className="grid grid-cols-4 gap-x-8 gap-y-8 lg:gap-x-0 items-end">
                <div className="text-sm leading-6 lg:pl-8 lg:text-center">
                  <div className="font-semibold text-gray-900">Feature</div>
                </div>
                <div className="text-sm leading-6 text-center">
                  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-8 hover:bg-gray-50 transition-colors">
                    <div className="font-semibold text-primary">Our Online Service</div>
                    <div className="mt-2 text-gray-600">Fast & Convenient</div>
                  </div>
                </div>
                <div className="text-sm leading-6 text-center">
                  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-8 hover:bg-gray-50 transition-colors">
                    <div className="font-semibold text-gray-900">Traditional In-Person</div>
                    <div className="mt-2 text-gray-600">Physical Inspection</div>
                  </div>
                </div>
                <div className="text-sm leading-6 text-center">
                  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-8 hover:bg-gray-50 transition-colors">
                    <div className="font-semibold text-gray-900">Other Online Services</div>
                    <div className="mt-2 text-gray-600">Automated Solutions</div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mt-8 space-y-4">
                {features.map((feature) => (
                  <div 
                    key={feature.name}
                    className="grid grid-cols-4 gap-x-8 gap-y-8 lg:gap-x-0"
                  >
                    <div className="lg:pl-8 flex items-center gap-x-3">
                      <feature.icon className="h-5 w-5 text-primary flex-none" />
                      <div>
                        <div className="font-semibold text-gray-900">{feature.name}</div>
                        <div className="mt-1 text-sm text-gray-500 hidden sm:block">{feature.description}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="rounded-lg bg-primary/5 py-4 px-2 ring-1 ring-inset ring-primary/10">
                        <span className="font-medium text-primary">{feature.online}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="rounded-lg bg-gray-50 py-4 px-2 ring-1 ring-inset ring-gray-200">
                        <span className="font-medium text-gray-700">{feature.traditional}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="rounded-lg bg-gray-50 py-4 px-2 ring-1 ring-inset ring-gray-200">
                        <span className="font-medium text-gray-700">{feature.others}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Ready to Get Started?</h3>
              <p className="mt-4 text-lg text-gray-600">
                Experience the convenience of our online appraisal service today
              </p>
              <div className="mt-8">
                <a
                  href="https://appraisily.com/start"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary/90 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
                >
                  Start Your Appraisal Now
                  <CheckCircle2 className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}