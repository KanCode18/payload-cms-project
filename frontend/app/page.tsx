import { redirect } from 'next/navigation';
import { Metadata } from 'next';

import HeroBlock from '@/sections/blocks/hero';
import FeaturesBlock from '@/sections/blocks/features';
import TestimonialBlock from '@/sections/blocks/testimonial';
import CTABlock from '@/sections/blocks/cta';
import { fetchPage } from '@/lib/payload';
import { getBlockByType } from '@/lib/getBlocksByType'; // Simplified
import LanguageSwitcher from '@/components/language-switcher';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const lang = resolvedParams.lang || 'en';
  const page = await fetchPage('home', lang);
  
  return {
    title: page?.seo?.title || 'Home | Demo Payload Website',
    description: page?.seo?.description || 'Created by Kanishk Chhabra',
  };
}

interface HomeProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = await searchParams;
  let lang = resolvedSearchParams?.lang || 'en';
  
  if (!['en', 'hi'].includes(lang)) {
    lang = 'en';
    redirect(`/?lang=${lang}`);
  }

  let page;
  try {
    page = await fetchPage('home', lang); 
  } catch (error) {
    console.error('Failed to fetch page:', error);
    return <div>Error loading page. Please try again.</div>;
  }

  const sections = page?.section || [];

  const hero = getBlockByType(sections, 'heroes');
  const featuresBlock = getBlockByType(sections, 'features'); 
  const testimonials = getBlockByType(sections, 'testimonials');
  const cta = getBlockByType(sections, 'cta');

  return (
    <main>
              <LanguageSwitcher />

      {hero && <HeroBlock data={hero} />}
      {featuresBlock && <FeaturesBlock data={featuresBlock} />} 
      {testimonials && <TestimonialBlock data={testimonials} />}
      {cta && <CTABlock data={cta} />}
    </main>
  );
}