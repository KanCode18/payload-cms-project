# Payload CMS + Next.js Project

A full-stack content-driven application built using Payload CMS as the backend and Next.js as the frontend. This project focuses on clean CMS modeling, reusable content blocks, and dynamic page rendering with a modern UI.

## Features
- Headless CMS using Payload
- Admin dashboard for managing content
- Reusable and dynamic page blocks
- Next.js App Router architecture
- Tailwind CSS for styling
- MongoDB database
- SEO-ready structure
- Contact form data stored in CMS

## Tech Stack
Frontend: Next.js, React, Tailwind CSS  
Backend: Payload CMS, Node.js  
Database: MongoDB

## Project Structure
payload-cms-project/
├── backend/
├── frontend/
└── README.md

## Setup Instructions

Prerequisites:
- Node.js (v18 or higher)
- MongoDB running locally
- npm or yarn

Clone the repository:
git clone https://github.com/KanCode18/payload-cms-project.git  
cd payload-cms-project

Backend setup:
cd backend  
npm install

Create a `.env` file in backend:
PAYLOAD_SECRET=your-secret-key  
MONGODB_URI=mongodb://127.0.0.1:27017/payload

Start backend:
npm run dev  
Admin panel: http://localhost:3000/admin

Frontend setup:
cd ../frontend  
npm install  
npm run dev

Frontend runs at:
http://localhost:3001

## Content Management
Content is managed through the Payload Admin panel using reusable blocks. Any published changes are reflected immediately on the frontend.

## Pages Implemented
- Homepage with dynamic sections
- Contact page with CMS-stored submissions

## SEO
SEO fields are handled at page level via CMS. Images are optimized using Next.js with server-side rendering support.

## Future Scope
- Live preview from CMS
- Production deployment
- Additional reusable blocks
- Improved localization

## License
This project is intended for learning and demonstration purposes.

## Author
Kanishk Chhabra  
Frontend Developer | Next.js | Payload CMS
