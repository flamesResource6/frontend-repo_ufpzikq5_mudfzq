import React from 'react';
import Spline from '@splinetool/react-spline';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay with gold shimmer */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/60 to-white/95"></div>

      {/* Floral corners */}
      <div className="absolute -left-14 -top-14 opacity-30 rotate-12 pointer-events-none hidden md:block">
        <svg width="280" height="280" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 10C80 30 40 40 30 80C20 120 60 150 100 170C140 150 180 120 170 80C160 40 120 30 100 10Z" fill="#FDE68A"/>
          <circle cx="60" cy="80" r="10" fill="#FBCFE8"/>
          <circle cx="130" cy="60" r="8" fill="#A7F3D0"/>
          <circle cx="95" cy="120" r="6" fill="#BFDBFE"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-amber-200 shadow-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm text-amber-700">You're invited to a celebration of love</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif-elegant tracking-wide text-slate-800 leading-tight">
              Aditi <span className="text-amber-600">&</span> Rohan
            </h1>
            <p className="mt-4 text-slate-600 text-lg md:text-xl max-w-2xl">
              Join us for our wedding festivities surrounded by family, friends, and timeless traditions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#rsvp" className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-6 py-3 shadow-lg shadow-amber-200/70 hover:bg-amber-700 transition">
                <Heart className="w-5 h-5" /> RSVP Now
              </a>
              <a href="#events" className="inline-flex items-center rounded-full border border-amber-300 bg-white/70 backdrop-blur text-amber-700 px-6 py-3 hover:bg-white transition">
                View Events
              </a>
            </div>

            <div className="mt-10 text-amber-700">
              <p className="uppercase tracking-[0.3em] text-sm">Mumbai, India</p>
              <p className="text-sm">December 12–14, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
