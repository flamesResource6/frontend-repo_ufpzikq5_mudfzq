import React, { useState } from 'react';

const RSVP = () => {
  const [form, setForm] = useState({ name: '', guests: 1, message: '', attending: 'Yes' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // In a full app, send to backend. For now, simulate success.
      await new Promise((res) => setTimeout(res, 500));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="rsvp" className="py-16 bg-gradient-to-b from-rose-50 to-amber-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur rounded-2xl border border-amber-100 p-6 md:p-8 shadow-sm">
          <h2 className="text-3xl font-serif-elegant text-amber-800 text-center">RSVP</h2>
          <p className="text-center text-slate-600 mt-1">We’re excited to celebrate with you</p>

          {submitted ? (
            <div className="mt-6 text-center text-amber-700">
              Thank you! Your response has been recorded.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-amber-700 mb-1">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-amber-200 px-4 py-3 bg-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-amber-700 mb-1">Guests</label>
                  <input
                    type="number"
                    min="1"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-amber-200 px-4 py-3 bg-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-amber-700 mb-1">Attending</label>
                  <select
                    name="attending"
                    value={form.attending}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-amber-200 px-4 py-3 bg-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-amber-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-amber-200 px-4 py-3 bg-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  placeholder="Any notes for us"
                />
              </div>

              <button type="submit" className="mt-2 rounded-full bg-amber-600 text-white px-6 py-3 shadow-lg hover:bg-amber-700 transition">
                Send RSVP
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
