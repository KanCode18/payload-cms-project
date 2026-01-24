"use client"
import { useRouter, useSearchParams } from 'next/navigation';

export default function CTABlock({ data }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLang = searchParams.get('lang') || 'en';

  const handleNavigation = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('lang', currentLang); // Preserve lang (or other params if needed)

    // If buttonLink already has query params, merge; else append
    const separator = data.buttonLink.includes('?') ? '&' : '?';
    const fullUrl = `${data.buttonLink}${separator}${newParams.toString()}`;

    router.push(fullUrl);
  };

  return (
    <section className="py-20 text-center ">
      <h2 className="text-2xl font-semibold mb-4">{data.heading}</h2>
      <button 
        className="bg-emerald-500 text-white px-6 py-3 rounded-2xl cursor-pointer" 
        onClick={handleNavigation}
      >
        {data.buttonText}
      </button>
    </section>
  );
}