import React from 'react';
import { Shield, Building2, TreePine, Building } from 'lucide-react';

export function Industries() {
  const industries = [
    {
      icon: Shield,
      title: 'Defense & Intelligence',
      description: 'Supporting critical missions with high-accuracy object detection and change analysis.',
      capabilities: [
        'Strategic asset identification',
        'Change detection analysis',
        'Threat assessment support',
        'Infrastructure monitoring',
      ],
    },
    {
      icon: Building2,
      title: 'Government Agencies',
      description: 'Enabling informed decision-making with comprehensive geospatial intelligence.',
      capabilities: [
        'Urban development planning',
        'Emergency response mapping',
        'Resource allocation',
        'Infrastructure assessment',
      ],
    },
    {
      icon: TreePine,
      title: 'Environmental Monitoring',
      description: 'Tracking environmental changes and impact assessment at global scale.',
      capabilities: [
        'Deforestation monitoring',
        'Natural disaster assessment',
        'Climate change analysis',
        'Conservation planning',
      ],
    },
    {
      icon: Building,
      title: 'Commercial Enterprise',
      description: 'Delivering actionable insights for business intelligence and planning.',
      capabilities: [
        'Asset monitoring',
        'Supply chain optimization',
        'Risk assessment',
        'Market analysis',
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white" id="industries">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Industry Solutions</h2>
          <p className="text-gray-300 text-lg">
            Tailored solutions for organizations requiring highest-grade satellite data labeling.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <industry.icon className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">{industry.title}</h3>
              <p className="text-gray-300 mb-6">{industry.description}</p>
              <ul className="space-y-3">
                {industry.capabilities.map((capability, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span>{capability}</span>
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