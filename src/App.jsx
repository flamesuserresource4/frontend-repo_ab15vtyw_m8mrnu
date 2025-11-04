import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="py-10 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} EduSphere. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-900">Kebijakan Privasi</a>
            <a href="#" className="hover:text-zinc-900">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-zinc-900">Bantuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
