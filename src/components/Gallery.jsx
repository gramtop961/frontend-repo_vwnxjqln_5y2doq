import React, { useRef, useState } from 'react';

export default function Gallery() {
  const fileInput = useRef(null);
  const [images, setImages] = useState(() => {
    const cached = localStorage.getItem('lr_gallery');
    return cached ? JSON.parse(cached) : [
      'https://images.unsplash.com/photo-1548077385-6f92a3b93884?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1200&auto=format&fit=crop',
    ];
  });

  const onAdd = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const readers = files.map((f) => new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (ev) => resolve(ev.target.result);
      reader.readAsDataURL(f);
    }));
    Promise.all(readers).then((urls) => {
      const next = [...urls, ...images];
      setImages(next);
      localStorage.setItem('lr_gallery', JSON.stringify(next));
    });
  };

  const remove = (idx) => {
    const next = images.filter((_, i) => i !== idx);
    setImages(next);
    localStorage.setItem('lr_gallery', JSON.stringify(next));
  };

  return (
    <section id="gallery" className="py-16 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white">Galeri</h2>
            <p className="text-slate-300 mt-1">Tambahkan foto kegiatanmu dan lihat momen terbaik komunitas.</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              ref={fileInput}
              onChange={onAdd}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
            />
            <button
              onClick={() => fileInput.current?.click()}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-900 text-sm font-bold"
            >
              Tambah Foto
            </button>
          </div>
        </div>

        {images.length === 0 ? (
          <div className="text-center text-slate-300">Belum ada foto. Tambahkan yang pertama!</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-slate-900/60 border border-slate-800">
                <img src={src} alt={`Foto ${idx + 1}`} className="h-44 w-full object-cover" />
                <button
                  onClick={() => remove(idx)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 text-xs rounded-full bg-slate-900/80 border border-slate-700 text-white"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
