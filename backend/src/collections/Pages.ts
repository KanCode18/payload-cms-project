import { CollectionConfig } from 'payload';
import { Hero } from '../blocks/Hero';
import { Features } from '../blocks/Features';
import { CTA } from '@/blocks/CTA';
import { Testimonials } from '@/blocks/Testimonials';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true }, // Add for page-level SEO
    { name: 'slug', type: 'text', required: true }, // Slugs aren't localized
    {
      name: 'seo', // Add a simple SEO group for title/desc per locale
      type: 'group',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
    {
      name: 'section',
      type: 'blocks',
      blocks: [Hero, Features, CTA, Testimonials],
      localized: true, // This ensures blocks fetch localized versions
    },
  ],
};