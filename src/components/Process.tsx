import React from 'react';
import { Upload, Database, CheckCircle2, BarChart3 } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Upload,
      title: 'Secure Data Ingestion',
      description: 'Enterprise-grade secure data upload with support for all major satellite data formats and providers.',
    },
    {
      icon: Database,
      title: 'AI-Assisted Labeling',
      description: 'Proprietary ML models pre-label data with 95%+ accuracy, reducing processing time by 60%.',
    },
    {
      icon: CheckCircle2,
      title: 'Expert Validation',
      description: 'Multi-stage validation by geospatial experts with military and intelligence backgrounds.',
    },
    {
      icon: BarChart3,
      title: 'Quality Assurance',
      description: 'Rigorous QA process ensuring 99.8% accuracy with detailed audit trails.',
    },
  ];

  return (
    <section className="py-24 bg-white" id="process">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Military-Grade Data Processing Pipeline</h2>
          <p className="text-gray-600 text-lg">
            Our proven four-step process ensures the highest quality data labeling for mission-critical applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-50 p-8 rounded-xl h-full">
                <step.icon className="h-12 w-12 text-blue-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}