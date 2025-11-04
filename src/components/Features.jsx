import React from 'react';
import { BookOpenCheck, Users, Trophy, Shield } from 'lucide-react';

const features = [
  {
    icon: BookOpenCheck,
    title: 'Kurikulum Interaktif',
    desc: 'Bangun modul, kuis, dan tugas dengan editor modern yang mudah digunakan.'
  },
  {
    icon: Users,
    title: 'Manajemen Kelas',
    desc: 'Kelola peran, kelompok belajar, dan kolaborasi secara real-time.'
  },
  {
    icon: Trophy,
    title: 'Gamifikasi Progres',
    desc: 'Motivasi siswa dengan lencana, poin, dan papan peringkat.'
  },
  {
    icon: Shield,
    title: 'Keamanan Kelas Enterprise',
    desc: 'Enkripsi, SSO, dan kontrol akses tingkat lanjut untuk skala besar.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">Semua yang Anda Butuhkan untuk LMS Modern</h2>
          <p className="mt-4 text-zinc-700">Fitur lengkap yang dirancang untuk pengajar, siswa, dan administrator.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Benefit title="Analitik Progres" desc="Pantau keaktifan dan performa pembelajar dengan dashboard yang jelas." />
          <Benefit title="Integrasi Lengkap" desc="Hubungkan dengan Google, Zoom, Slack, dan ribuan aplikasi lainnya." />
          <Benefit title="Mobile-first" desc="Akses materi dan tugas lewat perangkat apa pun secara mulus." />
        </div>
      </div>
    </section>
  );
}

function Benefit({ title, desc }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h4 className="font-semibold text-zinc-900">{title}</h4>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}
