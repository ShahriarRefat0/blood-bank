blood-bank/  
│  
├── frontend/   ← Next.js App  
│   ├── app/  
│   │   ├── (public)/  
│   │   │   ├── favicon.ico  
│   │   │   └── images/  
│   │   │       ├── hero-bg.jpg  
│   │   │       ├── donor1.jpg  
│   │   │       └── blood-drop.png  
│   │   │  
│   │   ├── (auth)/  
│   │   │   ├── login/  
│   │   │   │   ├── page.jsx  
│   │   │   │   ├── LoginForm.jsx  
│   │   │   │   └── SocialLogin.jsx  
│   │   │   └── register/  
│   │   │       ├── page.jsx  
│   │   │       └── RegisterForm.jsx  
│   │   │
│   │   ├── donors/
│   │   │   ├── page.jsx           ← Donor List Page  
│   │   │   └── [id]/page.jsx      ← Donor Details Page  
│   │   │  
│   │   ├── dashboard/  
│   │   │   ├── add-donor/  
│   │   │   │   └── page.jsx       ← Protected Add Donor Page  
│   │   │   └── manage-donors/  
│   │   │       └── page.jsx       ← Protected Manage Donors Page  
│   │   │  
│   │   ├── api/  
│   │   │   ├── auth/  
│   │   │   │   └── [...nextauth]/route.js  
│   │   │   └── donors/  
│   │   │       ├── route.js       ← optional proxy to Express backend  
│   │   │       └── [id]/route.js  
│   │   │  
│   │   ├── layout.jsx  
│   │   ├── globals.css  
│   │   └── page.jsx               ← Landing Page (Home)  
│   │  
│   ├── components/  
│   │   ├── Navbar.jsx  
│   │   ├── Footer.jsx  
│   │   ├── Hero.jsx  
│   │   ├── BloodInfoSection.jsx  
│   │   ├── HowItWorksSection.jsx  
│   │   ├── EmergencySection.jsx  
│   │   ├── TestimonialsSection.jsx  
│   │   ├── DonorCard.jsx  
│   │   ├── DonorTableRow.jsx  
│   │   ├── ProtectedRoute.jsx  
│   │   └── SearchBar.jsx  
│   │  
│   ├── lib/  
│   │   ├── auth.js  
│   │   ├── axios.js  
│   │   ├── helpers.js  
│   │   └── validate.js  
│   │  
│   ├── hooks/  
│   │   ├── useAuth.js  
│   │   └── useDonors.js  
│   │  
│   ├── public/  
│   └── tailwind.config.js  
│  
│  
├── backend/   ← Express.js API  
│   ├── src/  
│   │   ├── index.js  
│   │   ├── routes/  
│   │   │   └── donors.routes.js  
│   │   ├── controllers/  
│   │   │   └── donors.controller.js  
│   │   ├── models/  
│   │   │   └── Donor.js  
│   │   ├── middleware/  
│   │   │   └── verifyJWT.js  
│   │   └── config/  
│   │       └── db.js  
│   │  
│   ├── .env  
│   └── package.json  
│  
├── README.md  
└── package.json  
