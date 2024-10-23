import React from 'react';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';

export function Hero() {
  const highlights = [
    { icon: Shield, text: 'Military-Grade Security Protocols' },
    { icon: Award, text: 'ISO 27001 & CMMC Level 3 Certified' },
    { icon: Clock, text: '24/7 Dedicated Support' },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl">
        <div className="flex items-center space-x-4 mb-8">
          <span className="bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full text-sm font-medium">
            Trusted by Fortune 500 & Defense Agencies
          </span>
        </div>
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Enterprise Satellite Data Labeling for{' '}
          <span className="text-blue-400">Mission-Critical AI</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Powering the next generation of geospatial intelligence with precision data labeling, 
          backed by 30+ years of defense expertise and military-grade security protocols. 
          Trusted by leading defense contractors, intelligence agencies, and Fortune 500 companies.
        </p>
        <div className="flex space-x-4 mb-12">
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-medium transition flex items-center">
            Schedule Technical Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-medium transition">
            View Security Protocols
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 text-gray-300">
              <item.icon className="h-5 w-5 text-blue-400" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}