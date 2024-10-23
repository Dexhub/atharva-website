import React from 'react';
import { Satellite } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Satellite className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold">Atharva</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#solutions" className="hover:text-blue-400 transition">Solutions</a>
        <a href="#process" className="hover:text-blue-400 transition">Process</a>
        <a href="#technology" className="hover:text-blue-400 transition">Technology</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-medium transition">
        Get Started
      </button>
    </nav>
  );
}