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
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Galeri</h2>
            <p className="text-gray-600 mt-1">Tambahkan foto kegiatanmu dan lihat momen terbaik komunitas.</p>
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
              className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900"
            >
              Tambah Foto
            </button>
          </div>
        </div>

        {images.length === 0 ? (
          <div className="text-center text-gray-600">Belum ada foto. Tambahkan yang pertama!</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-white border border-gray-200">
                <img src={src} alt={`Foto ${idx + 1}`} className="h-44 w-full object-cover" />
                <button
                  onClick={() => remove(idx)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 text-xs rounded-full bg-white/90 border border-gray-200"
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
