'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface TestimonialItem {
  id: string;
  image?: { url: string };
  name: string;
  description: string;
}

interface TestimonialData {
  heading: string;
  subheading: string;
  items: TestimonialItem[];
}

export default function TestimonialBlock({ data }: { data: TestimonialData }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  if (!data?.items?.length) return null;

  // Preload all images before rendering cards
  useEffect(() => {
    const promises = data.items.map((item) => {
      return new Promise<void>((res) => {
        if (!item.image?.url) return res();
        const img = new window.Image();
        img.src = `http://localhost:3000${item.image.url}`; // Adjust base URL if deploying
        img.onload = () => res();
        img.onerror = () => res();
      });
    });

    Promise.all(promises).then(() => setImagesLoaded(true));
  }, [data.items]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const firstCard = scrollRef.current.firstElementChild as HTMLElement;
    const cardWidth = firstCard?.offsetWidth ?? 320;
    const gap = 24; 
    const scrollAmount = cardWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-16 bg-emerald-500 relative">
      {/* Dynamic Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {data.heading}
        </h2>
        <p className="mt-2 text-emerald-100">
          {data.subheading}
        </p>
      </div>

      {/* CTA buttons */}
      <div className="absolute right-6 top-24 hidden md:flex gap-3 z-10">
        <button
          onClick={() => scroll('left')}
          className="bg-white/90 hover:bg-white text-black rounded-full w-10 h-10 shadow"
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-white/90 hover:bg-white text-black rounded-full w-10 h-10 shadow"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      {/* Scroll container */}
      {imagesLoaded ? (
        <div
          ref={scrollRef}
          className="flex gap-6 px-4 md:px-12 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          role="region"
          aria-label="Testimonials carousel"
        >
          {data.items.map((item, index) => {
            const imageUrl = item.image?.url
              ? `http://localhost:3000${item.image.url}`
              : null;

            return (
              <div
                key={item.id}
                className="min-w-[280px] md:min-w-[320px] bg-white p-6 rounded-xl shadow-sm
                           transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg
                           snap-start animate-fadeUp"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Avatar */}
                {imageUrl ? (
                  <div className="w-18 h-18 relative rounded-full overflow-hidden bg-gray-200 mx-auto">
                    <Image
                      src={imageUrl}
                      alt={item.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized 
                      sizes="(max-width: 768px) 72px, 72px"
                    />
                  </div>
                ) : null}

                {/* Content */}
                <p className="mt-4 text-gray-700 text-sm leading-relaxed text-center">
                  “{item.description}”
                </p>

                <p className="mt-4 font-semibold text-gray-900 text-center">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-white mt-10" aria-live="polite">
          Loading testimonials...
        </p>
      )}

      {/* Mobile hint */}
      <p className="mt-6 text-center text-sm text-emerald-100 md:hidden">
        Swipe to explore →
      </p>
    </section>
  );
}