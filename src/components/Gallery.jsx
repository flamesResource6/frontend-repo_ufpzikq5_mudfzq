import React from 'react';

const photos = [
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542206395-9feb3edaa68e?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587270613305-1b1a1f2a2ab8?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop'
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-serif-elegant text-center text-amber-800">Memories</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl shadow-sm border border-amber-100">
              <img src={src} alt="gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
