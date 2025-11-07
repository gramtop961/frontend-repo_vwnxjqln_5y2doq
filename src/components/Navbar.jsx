import React from 'react';
import { Home, Images, CalendarDays, Info } from 'lucide-react';

const NavItem = ({ label, icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${
      active ? 'bg-black text-white' : 'bg-white/70 hover:bg-white text-gray-800'
    }`}
  >
    <Icon size={16} />
    <span>{label}</span>
  </button>
);

export default function Navbar({ current, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white font-bold">LR</span>
            <div className="flex flex-col">
              <span className="font-semibold">Lari Raya</span>
              <span className="text-xs text-gray-500">Komunitas Lari Indonesia</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavItem label="Beranda" icon={Home} active={current === 'home'} onClick={() => onNavigate('home')} />
            <NavItem label="Kegiatan" icon={CalendarDays} active={current === 'events'} onClick={() => onNavigate('events')} />
            <NavItem label="Galeri" icon={Images} active={current === 'gallery'} onClick={() => onNavigate('gallery')} />
            <NavItem label="Tentang" icon={Info} active={current === 'about'} onClick={() => onNavigate('about')} />
          </nav>
          <div className="md:hidden">
            <select
              value={current}
              onChange={(e) => onNavigate(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm"
            >
              <option value="home">Beranda</option>
              <option value="events">Kegiatan</option>
              <option value="gallery">Galeri</option>
              <option value="about">Tentang</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
