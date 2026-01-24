# Payload CMS + Next.js Project

A full-stack content-driven application built using **Payload CMS** as the backend and **Next.js** as the frontend.  
This project demonstrates CMS modeling, reusable blocks, and dynamic content rendering.

---

## Tech Stack

**Frontend**
- Next.js (App Router)
- React
- Tailwind CSS

**Backend**
- Payload CMS
- Node.js

**Database**
- MongoDB

---

## Features

- Reusable CMS content blocks
- Dynamic page rendering with Next.js
- Admin dashboard using Payload CMS
- SEO-friendly page structure
- Contact form with data stored in CMS

---

## Project Structure

payload-cms-project/
├── backend/ # Payload CMS backend
├── frontend/ # Next.js frontend
└── README.md

yaml
Copy code

---

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (running locally)
- npm or yarn

---

### Backend Setup (Payload CMS)

```bash
cd backend
npm install
Create a .env file:

env
Copy code
PAYLOAD_SECRET=your-secret-key
MONGODB_URI=mongodb://127.0.0.1:27017/payload
Start the backend:

bash
Copy code
npm run dev
Payload Admin Panel:

bash
Copy code
http://localhost:3000/admin
Frontend Setup (Next.js)
bash
Copy code
cd frontend
npm install
npm run dev
Frontend runs on:

arduino
Copy code
http://localhost:3001
Content Management
Pages and sections are managed via Payload CMS

Content is structured using reusable blocks

Any published change in CMS reflects immediately on the frontend

Future Scope
Live preview support

Deployment (Vercel / Payload Cloud)

More reusable blocks

Enhanced SEO features

Author
Kanishk Chhabra

License
This project is intended for learning and demonstration purposes.
