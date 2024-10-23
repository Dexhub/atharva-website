import React from 'react';

export function Stats() {
  const stats = [
    { value: '99.8%', label: 'Labeling Accuracy' },
    { value: '50M+', label: 'Images Processed' },
    { value: '200+', label: 'Enterprise Clients' },
    { value: '30+', label: 'Years Experience' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}