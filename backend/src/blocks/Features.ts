import { Block } from 'payload';

export const Features: Block = {
  slug: 'features',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'text',
      localized: true, 
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'heading',
          type: 'text',
          localized: true, 
        },
        {
          name: 'description',
          type: 'text',
          localized: true,
        },
      ],
    },
  ],
};