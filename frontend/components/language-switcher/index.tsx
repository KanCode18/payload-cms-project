'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const currentLang = params.get('lang') || 'en';

  const switchLang = (lang: 'en' | 'hi') => {
    if (lang === currentLang) return;
    const newParams = new URLSearchParams(params.toString());
    newParams.set('lang', lang);
    const newUrl = pathname === '/' ? `/?${newParams.toString()}` : `${pathname}?${newParams.toString()}`;
    router.push(newUrl);
  };

  return (
    <div className="flex gap-2 bg-black rounded-full p-1 shadow-md border-emerald-300 border w-[120px] fixed top-4 left-4 z-30">
      {['en', 'hi'].map((lang) => (
        <button
          key={lang}
          onClick={() => switchLang(lang as 'en' | 'hi')}
          className={`
            px-4 py-1 rounded-full transition-all duration-200 
            
            ${currentLang === lang 
              ? 'bg-emerald-500 text-white ' 
              : 'text-gray-600 hover:bg-emerald-300 hover:text-black'}
          `}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
