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
    <section id="events" className="py-16 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Kegiatan Rutin</h2>
        <p className="text-slate-300 mb-8 max-w-2xl">
          Ikut serta dalam berbagai kegiatan kami. Semua kegiatan terbuka untuk pemula maupun pelari berpengalaman.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.id} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:shadow-lg hover:shadow-sky-500/10 transition-shadow">
              <div className="text-sm text-slate-400">{e.date} • {e.location}</div>
              <h3 className="mt-2 font-semibold text-white">{e.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{e.description}</p>
              <button className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-900 text-sm font-bold">
                Daftar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
