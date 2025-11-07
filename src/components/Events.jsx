import React from 'react';

const events = [
  {
    id: 1,
    title: 'Long Run Minggu Pagi',
    date: 'Setiap Minggu, 06:00',
    location: 'Car Free Day - Jakarta',
    description: 'Lari 10-15K pace santai, terbuka untuk semua level.',
  },
  {
    id: 2,
    title: 'Interval Night',
    date: 'Rabu, 19:00',
    location: 'GBK, Senayan',
    description: 'Latihan interval 400-800m untuk meningkatkan kecepatan.',
  },
  {
    id: 3,
    title: 'Fun Trail Run',
    date: 'Sabtu, 06:00',
    location: 'Sentul, Bogor',
    description: 'Eksplor jalur trail ringan, bawa hydration pack.',
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Kegiatan Rutin</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Ikut serta dalam berbagai kegiatan kami. Semua kegiatan terbuka untuk pemula maupun pelari berpengalaman.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.id} className="rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500">{e.date} • {e.location}</div>
              <h3 className="mt-2 font-semibold text-gray-900">{e.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{e.description}</p>
              <button className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900">
                Daftar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
