import React from 'react';
import { Cpu, Lock, Zap, Search } from 'lucide-react';

export function Technology() {
  const features = [
    {
      icon: Cpu,
      title: 'Advanced AI Models',
      description: 'Proprietary deep learning models trained on 50M+ labeled satellite images.',
      details: [
        'Object detection & classification',
        'Change detection analysis',
        'Multi-spectral image processing',
        'Automated feature extraction',
      ],
    },
    {
      icon: Lock,
      title: 'Security Infrastructure',
      description: 'Military-grade security protocols protecting sensitive data.',
      details: [
        'End-to-end encryption',
        'Air-gapped environments',
        'CMMC Level 3 compliance',
        'Secure data transmission',
      ],
    },
    {
      icon: Zap,
      title: 'Processing Power',
      description: 'Scalable infrastructure handling petabytes of satellite data.',
      details: [
        'High-performance computing',
        'Distributed processing',
        'Real-time analysis',
        'Automated QA systems',
      ],
    },
    {
      icon: Search,
      title: 'Quality Assurance',
      description: 'Multi-stage validation ensuring highest accuracy.',
      details: [
        'Expert review panels',
        'Automated consistency checks',
        'Statistical validation',
        'Audit trail generation',
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-50" id="technology">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Technology Stack</h2>
          <p className="text-gray-600 text-lg">
            Purpose-built infrastructure for processing classified and sensitive satellite data.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <feature.icon className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}