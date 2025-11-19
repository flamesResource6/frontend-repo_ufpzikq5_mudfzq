import React from 'react';
import { Sun, Music2, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Sun,
    title: 'Haldi Ceremony',
    date: 'December 12, 2025',
    time: '10:00 AM',
    venue: 'The Orchid Lawn, Mumbai',
    desc: 'A vibrant morning of turmeric, songs, and blessings.'
  },
  {
    icon: Music2,
    title: 'Sangeet Night',
    date: 'December 13, 2025',
    time: '7:00 PM',
    venue: 'Imperial Banquets, Mumbai',
    desc: 'Dance, music, and joy as two families come together.'
  },
  {
    icon: Sparkles,
    title: 'Wedding Ceremony',
    date: 'December 14, 2025',
    time: '9:00 AM',
    venue: 'Sea Princess, Juhu',
    desc: 'Sacred vows, timeless traditions, and new beginnings.'
  },
];

const Events = () => {
  return (
    <section id="events" className="py-16 bg-rose-50/60">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-serif-elegant text-center text-amber-800">Wedding Events</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, date, time, venue, desc }) => (
            <div key={title} className="bg-white/80 backdrop-blur rounded-2xl border border-amber-100 p-6 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 border border-amber-200 text-amber-700">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-2xl font-serif-elegant text-amber-800">{title}</h3>
              <p className="mt-2 text-amber-700 font-medium">{date} • {time}</p>
              <p className="text-slate-600">{venue}</p>
              <p className="mt-3 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
