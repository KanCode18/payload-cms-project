# Payload CMS + Next.js Project

A full-stack content-driven application built using Payload CMS as the backend and Next.js as the frontend. This project demonstrates CMS modeling, reusable content blocks, and dynamic page rendering with a modern UI.

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

## Prerequisites
- Node.js v18 or higher
- MongoDB running locally
- npm or yarn

## Installation & Running Locally

Clone the repository:
git clone https://github.com/KanCode18/payload-cms-project.git  
cd payload-cms-project

Install backend dependencies:
cd backend  
npm install

Create `.env` file in backend:
PAYLOAD_SECRET=your-secret-key  
MONGODB_URI=mongodb://127.0.0.1:27017/payload

Run backend:
npm run dev  
Admin Panel: http://localhost:3000/admin

Install frontend dependencies:
cd ../frontend  
npm install

Run frontend:
yarn dev  
Frontend: http://localhost:3001

## How It Works
- Payload CMS manages all content through the admin panel
- Pages and sections are created using reusable blocks
- Frontend fetches content dynamically from the CMS
- Content updates are reflected instantly after publishing

## Pages Implemented
- Homepage with dynamic content blocks
- Contact page with form submissions stored in CMS

## SEO
- Page-level SEO handled via CMS
- Optimized images using Next.js
- Server-side rendering enabled

## Future Improvements
- CMS live preview
- Production deployment
- Additional blocks and layouts
- Enhanced localization support

## License
This project is for learning and evaluation purposes.

## Author
Kanishk Chhabra  
Frontend Developer | Next.js | Payload CMS
