import React from 'react';
import { CheckCircle } from 'lucide-react';

export function CaseStudy() {
  const benefits = [
    '99.8% accuracy in critical infrastructure detection',
    '50% reduction in processing time',
    '24/7 dedicated support team',
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 flex items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Trusted by Global Leaders in Geospatial Intelligence
                </h2>
                <p className="text-gray-300 mb-8">
                  Our solutions power critical decision-making for defense agencies, 
                  environmental monitoring, and urban planning worldwide.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
}