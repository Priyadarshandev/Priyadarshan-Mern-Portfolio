# Priyadarshan Kumar — Personal Portfolio

**Full-Stack Developer · MERN Stack · Patna, India**

A production-ready personal portfolio website built with React and Vite on the frontend, and Node.js and Express on the backend. Frontend and backend are fully connected via the Resend API, enabling real contact form submissions to reach directly via email.

Live: https://priyadarshan-dev-portfolio.vercel.app
GitHub: https://github.com/Priyadarshandev

---

## Overview

This portfolio was built to present my projects, skills, and background to potential employers and clients. It is not a tutorial clone — every section reflects real work and real decisions. The frontend and backend are fully integrated, with the contact form wired to a live Resend API endpoint so messages are delivered directly to my inbox.

---

## Tech Stack

**Frontend**
- React 18
- Vite
- Tailwind CSS
- Framer Motion

**Backend**
- Node.js
- Express.js
- Resend API (contact form email delivery)

**Deployment**
- Vercel (frontend)
- Backend hosted separately

---

## Core Features

- Fully connected frontend and backend via Resend API
- Working contact form — messages delivered directly to inbox
- High-fidelity micro-interactions powered by Framer Motion
- Mobile-first responsive design with Tailwind CSS
- Modular, reusable React component architecture
- Clean separation of frontend and backend concerns
- Optimised production builds via Vite

---

## Sections

- **Hero** — Introduction and call to action
- **About** — Developer background and approach
- **Tech Stack** — Frontend, backend, database, and tools
- **Projects** — Selected case studies with live demo and GitHub links
- **Contact** — Fully functional contact form connected to backend

---

## Project Structure

```
Portfolio-main/
├── client/                  # Frontend (React + Vite)
│   ├── src/
│   │   ├── assets/          # Images & static files
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page-level components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Helper functions
│   │   ├── App.jsx          # Root component
│   │   └── main.jsx         # Application entry
│   └── vite.config.js
└── server/                  # Backend (Node + Express)
    ├── config/              # Environment & service configs
    ├── controllers/         # Business logic (contact handler)
    ├── routes/              # Express routes
    ├── middleware/          # Error handling
    └── server.js            # Backend entry point
```

---

## Installation

**1. Clone the repository**
```bash
git clone https://github.com/Priyadarshandev/Portfolio-main.git
cd Portfolio-main
```

**2. Setup frontend**
```bash
cd client
npm install
npm run dev
```

**3. Setup backend**
```bash
cd server
npm install
# Create a .env file and add your Resend API key:
# RESEND_API_KEY=your_key_here
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the `/server` directory:

```
RESEND_API_KEY=your_resend_api_key
```

You can get a free Resend API key at https://resend.com

---

## Production Build

```bash
cd client
npm run build
```

Output is generated in the `dist/` folder.

---

## Contact

**Priyadarshan Kumar — Full-Stack Developer**
- Email: priyadarshanwork24@gmail.com
- LinkedIn: https://www.linkedin.com/in/priyadarshan24/
- Portfolio: https://priyadarshan-dev-portfolio.vercel.app

*If this project helped or inspired you, consider starring the repository!*
