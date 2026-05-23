# Tiles Gallery

A modern tile discovery platform where users can browse, search, and explore aesthetic tile designs. Users can create accounts, log in, view tile details, and manage their profiles.

## Live Website

🔗 https://tiles-gallery-lilac-seven.vercel.app

---

## Project Purpose

Tiles Gallery helps users discover premium and stylish tile designs for homes, offices, and commercial spaces. The platform provides a visually appealing gallery experience with detailed information about each tile.

---

## Key Features

- User Authentication (Email/Password & Google Login)
- Secure Login & Registration System
- Browse All Tiles Collection
- Search Tiles by Title
- Featured Tiles Section on Homepage
- Individual Tile Details Page
- Responsive Design for Mobile, Tablet, and Desktop
- User Profile Page
- Update User Name and Profile Image
- Protected Routes for Logged-in Users
- Custom 404 Not Found Page
- Loading Spinner and User Feedback Notifications

---

## Technologies Used

### Frontend

- Next.js 16 (App Router)
- React.js
- Tailwind CSS
- DaisyUI

### Authentication

- Better Auth
- Google OAuth

### Database

- MongoDB

### Form Handling

- React Hook Form

### Notifications

- React Toastify

### UI Components

- Next/Image
- Next/Link
- React Icons
- React Fast Marquee

---

## NPM Packages Used

```bash
next
react
react-dom
tailwindcss
daisyui
better-auth
mongodb
@better-auth/mongo-adapter
react-hook-form
react-toastify
react-icons
react-fast-marquee
```

---

## Installation & Setup

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project:

```bash
cd tiles-gallery
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_uri

BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Project Structure

```txt
src/
├── app/
│   ├── all-tiles/
│   ├── tile/[id]/
│   ├── login/
│   ├── register/
│   ├── my-profile/
│   └── api/auth/
│
├── components/
│
├── lib/
│   ├── auth.js
│   └── data.js
│
└── middleware.js
```

---

## Author

**Md. Sanyul Islam**

Full Stack Web Developer

JavaScript | React | Next.js | Node.js | MongoDB