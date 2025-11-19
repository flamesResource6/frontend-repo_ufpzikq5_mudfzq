import React from 'react';

const people = [
  { name: 'Ananya Sharma', role: 'Mother of the Bride' },
  { name: 'Vikram Sharma', role: 'Father of the Bride' },
  { name: 'Sunita Mehra', role: 'Mother of the Groom' },
  { name: 'Rajesh Mehra', role: 'Father of the Groom' },
];

const Family = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-serif-elegant text-center text-amber-800">Our Families</h2>
        <p className="text-center text-slate-600 mt-2">With blessings and love</p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {people.map((p) => (
            <div key={p.name} className="bg-white/80 backdrop-blur rounded-2xl border border-amber-100 p-6 text-center shadow-sm">
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-rose-100 to-amber-100 border border-amber-200" />
              <h3 className="mt-4 font-medium text-amber-800">{p.name}</h3>
              <p className="text-sm text-slate-600">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Family;
