'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    await fetch('http://localhost:3000/api/contact-submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    e.target.reset();
    alert('Message sent!');
  }

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-lg">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Get in touch
          </h1>
          <p className="mt-3 text-gray-400">
            Have a question or feedback? We’d love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Name
              </label>
              <input
                name="name"
                required
                placeholder="Your name"
                className="
                  w-full rounded-lg bg-black border border-white/20
                  px-4 py-3 text-white
                  placeholder:text-gray-500
                  focus:outline-none focus:border-emerald-500
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="
                  w-full rounded-lg bg-black border border-white/20
                  px-4 py-3 text-white
                  placeholder:text-gray-500
                  focus:outline-none focus:border-emerald-500
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us how we can help"
                className="
                  w-full rounded-lg bg-black border border-white/20
                  px-4 py-3 text-white
                  placeholder:text-gray-500
                  focus:outline-none focus:border-emerald-500
                "
              />
            </div>

            {/* Submit */}
            <button
              disabled={loading}
              className="
                w-full rounded-lg bg-emerald-500
                py-3 font-semibold text-black
                transition hover:bg-emerald-600
                disabled:opacity-60
              "
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
