# QuickShow

QuickShow is a full-stack movie ticket booking application built with a Vite + React frontend and an Express + MongoDB backend. It lets users browse movies, view show details, pick seats, book tickets, manage favorites, and pay through Stripe. The admin side supports adding shows from TMDB now-playing data and managing bookings and dashboard metrics.

## Key Features

- Browse upcoming movies and show listings
- View movie details and available show timings
- Select seats and create bookings
- Stripe checkout integration for payments
- User bookings page and favorites management
- Admin dashboard for shows and bookings
- Add shows from TMDB now-playing movies
- Clerk-based authentication and admin access control
- Booking confirmation emails via Nodemailer
- Inngest workflows for user sync, reminders, and notifications
- Responsive UI built with React and Tailwind CSS

## Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- Clerk React
- Tailwind CSS
- React Hot Toast
- Lucide React
- React Player

### Backend
- Node.js
- Express 5
- MongoDB
- Mongoose
- Clerk Express
- Stripe
- Inngest
- Nodemailer
- Axios
- CORS
- dotenv

## Installation

### Prerequisites
- Node.js
- MongoDB database
- Clerk application
- TMDB API key
- Stripe account
- Email SMTP credentials
- Inngest account keys

### 1. Clone the repository
```bash
git clone <repository-url>
cd QuickShow
```

### 2. Install backend dependencies
```bash
cd server
npm install
```

### 3. Install frontend dependencies
```bash
cd ../client
npm install
```

### 4. Configure environment variables
Create the `.env` files shown below in the `server/` and `client/` folders.

## Environment Variables

### `server/.env`
```dotenv
MONGODB_URI=your_mongodb_connection_string

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

TMDB_API_KEY=your_tmdb_api_key

STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

SENDER_EMAIL=your_sender_email
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
```

### `client/.env`
```dotenv
VITE_CURRENCY=$
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
```

## How to Run

### Development
Start the backend:
```bash
cd server
npm run server
```

Start the frontend:
```bash
cd client
npm run dev
```

### Production
Build the frontend:
```bash
cd client
npm run build
```

Preview the frontend build locally:
```bash
cd client
npm run preview
```

Run the backend in production mode:
```bash
cd server
npm start
```

## Folder Structure

```bash
QuickShow/
├─ client/
│  ├─ src/
│  │  ├─ assets/
│  │  ├─ components/
│  │  │  └─ admin/
│  │  ├─ context/
│  │  ├─ lib/
│  │  ├─ pages/
│  │  │  └─ admin/
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  ├─ public/
│  ├─ vercel.json
│  └─ package.json
├─ server/
│  ├─ configs/
│  ├─ controllers/
│  ├─ inngest/
│  ├─ middleware/
│  ├─ models/
│  ├─ routes/
│  ├─ server.js
│  ├─ vercel.json
│  └─ package.json
└─ README.md
```

### What each folder does
- `client/src/components`: reusable UI components
- `client/src/pages`: user-facing and admin pages
- `client/src/context`: global app state and shared API helpers
- `client/src/lib`: formatting helpers for dates, times, and values
- `server/controllers`: API request handlers
- `server/models`: MongoDB/Mongoose schemas
- `server/routes`: Express route definitions
- `server/middleware`: authentication and authorization helpers
- `server/configs`: database and email setup
- `server/inngest`: background jobs and event-driven workflows

## API Endpoints Summary

### Public and user routes
- `GET /api/show/all` - Get all upcoming shows
- `GET /api/show/:movieId` - Get a single movie and its show timings
- `POST /api/booking/create` - Create a booking and start Stripe checkout
- `GET /api/booking/seats/:showId` - Get occupied seats for a show
- `GET /api/user/bookings` - Get current user bookings
- `GET /api/user/favorites` - Get current user favorite movies
- `POST /api/user/update-favorite` - Add or remove a favorite movie

### Admin routes
- `GET /api/admin/is-admin` - Check admin access
- `GET /api/admin/dashboard` - Get dashboard summary data
- `GET /api/admin/all-shows` - Get all upcoming shows
- `GET /api/admin/all-bookings` - Get all bookings
- `GET /api/show/now-playing` - Get TMDB now-playing movies for show creation
- `POST /api/show/add` - Add a new show

### Infrastructure routes
- `POST /api/stripe` - Stripe webhook handler
- `GET /api/inngest` - Inngest event/function endpoint

## Screenshots

Add screenshots to a `docs/screenshots/` folder and reference them here.

```md
![Home Page](docs/screenshots/home.png)
![Movie Details](docs/screenshots/movie-details.png)
![Seat Selection](docs/screenshots/seat-selection.png)
![Admin Dashboard](docs/screenshots/admin-dashboard.png)
```

## Future Improvements

- Add automated tests for controllers and UI flows
- Add stronger validation and centralized API error handling
- Add TypeScript for better type safety
- Add search and filtering for movies and showtimes
- Add booking cancellation and refund flows
- Improve logging and production monitoring
- Add CI checks for linting and builds

## Notes

- The frontend uses `VITE_BASE_URL` to reach the backend API.
- Admin show creation depends on Clerk admin access and TMDB data.
- Booking and favorites features require an authenticated Clerk user.
- The backend mounts Inngest functions through Express and uses Stripe for payment checkout.
