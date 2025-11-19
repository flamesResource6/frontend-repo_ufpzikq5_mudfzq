import React, { useEffect, useState } from 'react';

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference <= 0) return null;
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown = ({ date = '2025-12-14T09:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  if (!timeLeft) {
    return (
      <section className="py-16 bg-gradient-to-b from-rose-50 to-amber-50">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h3 className="text-3xl md:text-4xl font-serif-elegant text-amber-700">The day has arrived!</h3>
        </div>
      </section>
    );
  }

  const box = 'flex flex-col items-center justify-center bg-white/80 backdrop-blur rounded-2xl border border-amber-100 shadow-sm px-6 py-5 min-w-[80px]';
  const num = 'text-3xl md:text-4xl font-semibold text-amber-700';
  const lbl = 'text-xs uppercase tracking-wide text-amber-600 mt-1';

  return (
    <section className="py-16 bg-gradient-to-b from-rose-50 to-amber-50">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h3 className="text-3xl md:text-4xl font-serif-elegant text-amber-800">Counting down to our big day</h3>
        <p className="mt-2 text-slate-600">Save the date and celebrate with us</p>

        <div className="mt-8 grid grid-cols-4 gap-3 md:gap-5 max-w-xl mx-auto">
          <div className={box}><span className={num}>{timeLeft.days}</span><span className={lbl}>Days</span></div>
          <div className={box}><span className={num}>{timeLeft.hours}</span><span className={lbl}>Hours</span></div>
          <div className={box}><span className={num}>{timeLeft.minutes}</span><span className={lbl}>Minutes</span></div>
          <div className={box}><span className={num}>{timeLeft.seconds}</span><span className={lbl}>Seconds</span></div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
