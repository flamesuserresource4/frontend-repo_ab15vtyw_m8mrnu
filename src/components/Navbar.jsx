import React from 'react';
import { BookOpen, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <BookOpen className="h-5 w-5" />
            </span>
            <span className="font-semibold text-zinc-900 text-lg">EduSphere</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700">
            <a href="#features" className="hover:text-zinc-900 transition">Fitur</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">Harga</a>
            <a href="#about" className="hover:text-zinc-900 transition">Tentang</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-300 px-3.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50">
              <User className="h-4 w-4" /> Masuk
            </button>
            <button className="inline-flex h-10 items-center rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
              Coba Gratis
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
