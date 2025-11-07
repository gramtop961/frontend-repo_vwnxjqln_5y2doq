import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
        <p className="text-gray-600 max-w-3xl">
          Lari Raya adalah komunitas lari yang terbuka untuk semua. Kami percaya setiap orang bisa menikmati lari—tanpa memandang pace, jarak, atau pengalaman. Misi kami adalah membangun kebiasaan sehat, memperluas pertemanan, dan menumbuhkan semangat gotong royong melalui aktivitas lari rutin.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Inklusif</h3>
            <p className="text-gray-600 text-sm mt-1">Sesi dibuka untuk pemula hingga pelari berpengalaman, dengan pemandu di setiap pace.</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Konsisten</h3>
            <p className="text-gray-600 text-sm mt-1">Jadwal latihan jelas tiap minggu dan agenda event bulanan.</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Komunitas</h3>
            <p className="text-gray-600 text-sm mt-1">Suasana hangat, saling mendukung, dan penuh semangat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
