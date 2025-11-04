import React from 'react';

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500">
          <div className="px-8 py-14 md:px-14 md:py-16">
            <div className="max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Mulai perjalanan belajar Anda hari ini</h3>
              <p className="mt-3 text-indigo-100">Coba gratis 14 hari. Tanpa kartu kredit. Batalkan kapan saja.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50">
                  Buat Akun
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-white/80 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Hubungi Tim
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          Sudah dipercaya oleh ratusan institusi pendidikan dan tim pembelajaran di seluruh Indonesia.
        </p>
      </div>
    </section>
  );
}
