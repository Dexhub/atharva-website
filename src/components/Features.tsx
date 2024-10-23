import React from 'react';
import { Shield, Database, Award } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'ISO 27001 certified infrastructure with end-to-end encryption and secure data handling protocols.',
    },
    {
      icon: Database,
      title: 'Scalable Infrastructure',
      description: 'Process millions of satellite images with our cloud-native platform built for scale.',
    },
    {
      icon: Award,
      title: 'Expert Validation',
      description: 'Multi-stage validation by geospatial experts with decades of industry experience.',
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Enterprise-Ready Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <feature.icon className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}