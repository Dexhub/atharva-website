import React from 'react';

export function CTA() {
  return (
    <section className="bg-blue-500 py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Transform Your Satellite Data Pipeline?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join leading organizations that trust Atharva for their mission-critical 
          data labeling needs.
        </p>
        <button className="bg-white text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}