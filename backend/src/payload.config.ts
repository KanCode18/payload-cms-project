import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Hero } from './blocks/Hero'
import { Pages } from './collections/Pages'
import { CTA } from './blocks/CTA'
import { Testimonials } from './blocks/Testimonials'
import { ContactSubmission } from './collections/ContactSubmission'
import { Features } from './blocks/Features'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({

  cors: [
    'http://localhost:3000', 
    'http://localhost:3001', 
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
  ],
  csrf: [  // Whitelists for cookie auth—must include frontend
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
  ],

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: ['en', 'hi'],  
    defaultLocale: 'en',
    fallback: true,
  },
  collections: [Users, Media,Pages,ContactSubmission],
  blocks:[Hero,Features,CTA,Testimonials],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [],
})


