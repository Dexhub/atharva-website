import React from 'react';
import { Satellite } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
              <Satellite className="h-6 w-6" />
              <span className="font-bold">Atharva</span>
            </div>
            <p className="text-sm">
              Enterprise-grade satellite data labeling for mission-critical applications.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Defense & Intelligence</a></li>
              <li><a href="#" className="hover:text-white transition">Environmental Monitoring</a></li>
              <li><a href="#" className="hover:text-white transition">Urban Planning</a></li>
              <li><a href="#" className="hover:text-white transition">Agriculture</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>1234 Innovation Drive</li>
              <li>Suite 500</li>
              <li>Arlington, VA 22202</li>
              <li className="text-blue-400">contact@atharva.ai</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          © 2024 Atharva. All rights reserved.
        </div>
      </div>
    </footer>
  );
}