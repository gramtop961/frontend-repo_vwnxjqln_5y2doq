import React from 'react';

export default function Hero({ onJoin }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-sky-100 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center py-16">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-xs font-semibold">Lari Raya</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Komunitas lari untuk semua level
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Bergabung dengan pelari dari berbagai kota. Latihan rutin, event akhir pekan, dan dukungan komunitas yang hangat untuk bantu kamu konsisten.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={onJoin} className="px-5 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-900">Gabung Sekarang</button>
              <a href="#events" className="px-5 py-3 rounded-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-50">Lihat Kegiatan</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div>
                <span className="font-bold text-gray-900">600+</span> anggota aktif
              </div>
              <div>
                <span className="font-bold text-gray-900">3x/minggu</span> sesi latihan
              </div>
              <div>
                <span className="font-bold text-gray-900">10 kota</span> chapter lokal
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
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
