import React from 'react';

export default function Hero({ onJoin }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-cyan-300/20 to-sky-500/10 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center py-16">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-900 text-xs font-bold">Lari Geli-geli</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Komunitas lari untuk semua level
            </h1>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Bergabung dengan pelari dari berbagai kota. Latihan rutin, event akhir pekan, dan dukungan komunitas yang hangat untuk bantu kamu konsisten.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={onJoin} className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100">Gabung Sekarang</button>
              <a href="#events" className="px-5 py-3 rounded-full bg-slate-900 text-white border border-slate-700 hover:bg-slate-800">Lihat Kegiatan</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-300">
              <div>
                <span className="font-bold text-white">600+</span> anggota aktif
              </div>
              <div>
                <span className="font-bold text-white">3x/minggu</span> sesi latihan
              </div>
              <div>
                <span className="font-bold text-white">10 kota</span> chapter lokal
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1541959833503-b7c7c6c3b9f2?q=80&w=1600&auto=format&fit=crop"
                alt="Komunitas lari bersama"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
