import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { Technology } from './components/Technology';
import { CaseStudy } from './components/CaseStudy';
import { Testimonials } from './components/Testimonials';
import { Security } from './components/Security';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <Navigation />
        <Hero />
      </header>
      <Stats />
      <Features />
      <Process />
      <Industries />
      <Technology />
      <Security />
      <CaseStudy />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;