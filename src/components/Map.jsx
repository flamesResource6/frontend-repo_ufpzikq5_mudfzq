import React from 'react';

const Map = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-serif-elegant text-center text-amber-800">Venue Location</h2>
        <div className="mt-8 rounded-2xl overflow-hidden border border-amber-100 shadow-sm">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Sea%20Princess%20Hotel%2C%20Juhu%2C%20Mumbai&output=embed"
            className="w-full h-[360px] md:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
