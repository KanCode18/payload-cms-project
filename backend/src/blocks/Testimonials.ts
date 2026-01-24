import { Block } from 'payload';

export const Testimonials: Block = {
  slug: 'testimonials',
  fields: [
    {
      name: 'heading', 
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'subheading', 
      type: 'text',
      localized: true,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
    
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          localized: true, 
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true, 
        },
      ],
    },
  ],
};