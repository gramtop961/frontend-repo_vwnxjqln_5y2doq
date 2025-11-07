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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar current={page} onNavigate={setPage} />
      {Page}
      {page === 'home' && (
        <>
          <Events />
          <Gallery />
          <About />
        </>
      )}
      <footer className="border-t border-gray-200 mt-16">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Lari Raya • Komunitas Lari Indonesia</div>
          <div className="flex gap-4">
            <a href="#events" className="hover:text-gray-900">Kegiatan</a>
            <a href="#gallery" className="hover:text-gray-900">Galeri</a>
            <a href="#about" className="hover:text-gray-900">Tentang</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
