import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Tentang Kami</h2>
        <p className="text-slate-300 max-w-3xl">
          Lari Geli-geli adalah komunitas lari yang terbuka untuk semua. Kami percaya setiap orang bisa menikmati lari—tanpa memandang pace, jarak, atau pengalaman. Misi kami adalah membangun kebiasaan sehat, memperluas pertemanan, dan menumbuhkan semangat gotong royong melalui aktivitas lari rutin.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-white">Inklusif</h3>
            <p className="text-slate-300 text-sm mt-1">Sesi dibuka untuk pemula hingga pelari berpengalaman, dengan pemandu di setiap pace.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-white">Konsisten</h3>
            <p className="text-slate-300 text-sm mt-1">Jadwal latihan jelas tiap minggu dan agenda event bulanan.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-white">Komunitas</h3>
            <p className="text-slate-300 text-sm mt-1">Suasana hangat, saling mendukung, dan penuh semangat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
