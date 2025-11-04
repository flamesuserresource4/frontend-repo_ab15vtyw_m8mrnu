import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/PU9mF8w7b0O63k8J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-32 md:pb-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              LMS Modern untuk Sekolah & Perusahaan
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900">
              Tingkatkan Pembelajaran dengan Platform yang Indah dan Intuitif
            </h1>
            <p className="mt-5 text-lg text-zinc-700 leading-relaxed">
              Kelola kursus, lacak progres, dan ciptakan pengalaman belajar interaktif dalam satu tempat.
              Dirancang untuk skalabilitas, performa, dan kemudahan penggunaan.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
                Mulai Coba Gratis
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
                Lihat Demo
              </button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
              <Stat number="1.2K+" label="Institusi" />
              <Stat number="120K+" label="Mahasiswa" />
              <Stat number="9.5/10" label="Kepuasan" />
              <Stat number=">99.9%" label="Uptime" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-2xl font-bold text-zinc-900">{number}</div>
      <div className="text-xs text-zinc-600">{label}</div>
    </div>
  );
}
