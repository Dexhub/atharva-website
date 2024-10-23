import React from 'react';
import { ShieldCheck, Lock, FileCheck, Users } from 'lucide-react';

export function Security() {
  const certifications = [
    { icon: ShieldCheck, label: 'CMMC Level 3' },
    { icon: Lock, label: 'ISO 27001' },
    { icon: FileCheck, label: 'NIST 800-53' },
    { icon: Users, label: 'ITAR Compliant' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Military-Grade Security Infrastructure</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our secure infrastructure is designed to meet the stringent requirements of defense 
              and intelligence agencies, ensuring your sensitive data remains protected.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <cert.icon className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold mb-6">Security Features</h3>
            <div className="space-y-4">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Data Encryption</h4>
                <p className="text-gray-300 text-sm">End-to-end AES-256 encryption for all data at rest and in transit</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Access Control</h4>
                <p className="text-gray-300 text-sm">Role-based access control with multi-factor authentication</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Audit Logging</h4>
                <p className="text-gray-300 text-sm">Comprehensive audit trails and activity monitoring</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Secure Infrastructure</h4>
                <p className="text-gray-300 text-sm">Air-gapped environments and secure data transmission protocols</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}