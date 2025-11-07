import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Gallery from './components/Gallery';
import About from './components/About';

export default function App() {
  const [page, setPage] = useState('home');

  const Page = useMemo(() => {
    switch (page) {
      case 'events':
        return <Events />;
      case 'gallery':
        return <Gallery />;
      case 'about':
        return <About />;
      default:
        return <Hero onJoin={() => setPage('events')} />;
    }
  }, [page]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar current={page} onNavigate={setPage} />
      {Page}
      {page === 'home' && (
        <>
          <Events />
          <Gallery />
          <About />
        </>
      )}
      <footer className="border-t border-slate-800 mt-16">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Lari Geli-geli • Komunitas Lari Indonesia</div>
          <div className="flex gap-4">
            <a href="#events" className="hover:text-white">Kegiatan</a>
            <a href="#gallery" className="hover:text-white">Galeri</a>
            <a href="#about" className="hover:text-white">Tentang</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
