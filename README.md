# Payload CMS + Next.js Project

A full-stack content-driven application built using **Payload CMS** as the backend and **Next.js** as the frontend.  
This project demonstrates CMS modeling, reusable content blocks, dynamic page rendering, and a modern frontend setup.

---

## Features

- Headless CMS using Payload
- Admin dashboard for managing content
- Reusable and dynamic page blocks
- Next.js App Router architecture
- Tailwind CSS for styling
- MongoDB as database
- SEO-ready page structure
- Contact form data stored in CMS

---

## Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS

### Backend
- Payload CMS
- Node.js
- Express

### Database
- MongoDB

---

## Project Structure

payload-cms-project/
├── backend/ # Payload CMS backend
├── frontend/ # Next.js frontend
└── README.md

---

## Local Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally)
- npm or yarn

---

### 1. Clone the Repository

```bash
git clone https://github.com/KanCode18/payload-cms-project.git
cd payload-cms-project


2. Backend Setup (Payload CMS)
cd backend
npm install


Create a .env file inside the backend folder:

PAYLOAD_SECRET=your-secret-key
MONGODB_URI=mongodb://127.0.0.1:27017/payload


Start the backend server:

npm run dev


Payload Admin Panel will be available at:

http://localhost:3000/admin

3. Frontend Setup (Next.js)
cd ../frontend
npm install
npm run dev


Frontend will run at:

http://localhost:3001

Content Management

Pages and sections are managed from the Payload Admin panel

Content is created using reusable blocks

Updates in CMS reflect immediately on the frontend

Pages Implemented

Homepage with dynamic blocks

Contact page with CMS-stored submissions

SEO

Page-level SEO fields handled via CMS

Optimized images using Next.js

Server-side rendering support

Future Scope

Live preview from CMS

Deployment to production

Additional reusable blocks

Advanced localization support

License

This project is intended for learning, evaluation, and demonstration purposes.

Author

Kanishk Chhabra
Frontend Developer | Payload CMS | Next.js2. Backend Setup (Payload CMS)
cd backend
npm install


Create a .env file inside the backend folder:

PAYLOAD_SECRET=your-secret-key
MONGODB_URI=mongodb://127.0.0.1:27017/payload


Start the backend server:

npm run dev


Payload Admin Panel will be available at:

http://localhost:3000/admin

3. Frontend Setup (Next.js)
cd ../frontend
npm install
npm run dev


Frontend will run at:

http://localhost:3001

Content Management

Pages and sections are managed from the Payload Admin panel

Content is created using reusable blocks

Updates in CMS reflect immediately on the frontend

Pages Implemented

Homepage with dynamic blocks

Contact page with CMS-stored submissions

SEO

Page-level SEO fields handled via CMS

Optimized images using Next.js

Server-side rendering support

Future Scope

Live preview from CMS

Deployment to production

Additional reusable blocks

Advanced localization support

License

This project is intended for learning, evaluation, and demonstration purposes.

Author

Kanishk Chhabra
Frontend Developer | Payload CMS | Next.js
