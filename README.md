# 🚑 BloodBank – Modern Blood Donation & Request Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Built with Next.js, MongoDB, Firebase, TailwindCSS](https://img.shields.io/badge/Tech-Stack-Next.js-MongoDB-Firebase-Tailwind-blue)](#tech-stack)  
[Live Demo → blood-bank-v1.vercel.app](https://blood-bank-v1.vercel.app)

---

## 🧾 Table of Contents

- [About The Project](#about-the-project)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation & Run Locally](#installation--run-locally)  
- [Usage](#usage)  
- [Environment Variables / Configuration](#environment-variables--configuration)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact / Author](#contact--author)  
- [Acknowledgments](#acknowledgments)  

---

## 📌 About The Project

BloodBank is a **full-stack** application facilitating blood donation and blood request management.  
It lets users:
- Register as blood donors with detailed profiles.  
- Request blood by specifying blood group and location (division → district → upazila).  
- Browse available donors and blood requests.  
- Manage their own requests and profile.  

The platform is built with modern web technologies to ensure responsive design, security, and a smooth user experience.  
It aims to streamline the process of blood donation and requests, especially useful for communities needing quick access to donors.

---

## ✅ Features

- 🔐 **Authentication** — Email/password login, Google login, secure session via cookies.  
- 🩺 **Donor Registration & Profile Management** — Register as donor, update and view donor profiles.  
- 📢 **Blood Request Management** — Submit requests, view public requests, filter by location & blood group, manage own requests.  
- 🧑‍🤝‍🧑 **Donor & Request Listing** — Browse donors and requests, view details.  
- 📱 **Responsive UI & Smooth UX** — Works on mobile, tablet, desktop; interactive UI transitions, loading spinners.  
- 🗺️ **Location-Based Search** — Division → District → Upazila cascading selector for precise geographic filtering.  
- 💾 **Persistent Data** — Uses MongoDB for data storage; Firebase for auth.  

---

## 🛠 Tech Stack

| Layer        | Tools / Libraries / Services |
|--------------|------------------------------|
| Frontend     | Next.js 16 (App Router), React 18, Tailwind CSS, DaisyUI, React Hook Form, React Query |
| Backend      | Next.js API Routes, MongoDB (Native Driver), Firebase Authentication |
| Hosting      | Vercel (frontend + API), MongoDB Atlas, Firebase Console (auth) |
| Others       | ESLint, PostCSS, etc. |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js (v16 or higher)  
- npm or yarn  
- A running MongoDB instance (e.g. via MongoDB Atlas)  
- Firebase project configured for Authentication  

### Installation & Run Locally

```bash
# Clone the repository
git clone https://github.com/ShahriarRefat0/blood-bank-v1.git
cd blood-bank-v1

# Install dependencies
npm install
# or
yarn install

# Create a .env.local in project root and add your env variables:
# e.g.
# MONGODB_URI = your MongoDB connection string
# NEXT_PUBLIC_FIREBASE_API_KEY = your Firebase API key
# ... etc.

# Run in development mode
npm run dev
# or
yarn dev

# Open http://localhost:3000 in your browser
```  
---
## 📬 Contact / Author

**Shahriar Refat**

- **Email:** shahariarrefat@gmail.com  
- **GitHub:** [@ShahriarRefat0](https://github.com/ShahriarRefat0)  
- **LinkedIn:** https://www.linkedin.com/in/shahriar-refat/  
- **Portfolio:** https://shahriar-refat.vercel.app/  


---

## 🔎 Quick Tips for a Professional README

- Use a **clear, descriptive project title** and a **concise overview/description**. :contentReference[oaicite:2]{index=2}  
- Include a **Table of Contents** if README is long — helps users find what they need quickly. :contentReference[oaicite:3]{index=3}  
- Use **Markdown formatting** (headers, lists, code blocks, tables) for readability. :contentReference[oaicite:4]{index=4}  
- Provide **installation, setup, and usage instructions** so others (or you in future) can run the project without guesswork. :contentReference[oaicite:5]{index=5}  
- Mention **tech stack, configuration (env variables), license, and how to contribute** to encourage collaboration. :contentReference[oaicite:6]{index=6}  

---

If you like — I can also **generate a ready-to-copy LICENSE file (MIT)** for you.
::contentReference[oaicite:7]{index=7}
--- 