# 🍕 Foodie - Food Delivery App

A complete food delivery application with admin panel, built with React, Node.js, Express, MongoDB, and Cloudinary.

## 🚀 Features

- **Frontend**: User-friendly food ordering interface
- **Admin Panel**: Food management, order tracking
- **Backend**: RESTful API with authentication
- **Database**: MongoDB with pre-populated food data
- **Image Storage**: Cloudinary integration
- **Payment**: Stripe integration

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Admin Panel
cd ../admin
npm install
```

### 2. Environment Configuration

The `.env` file in `/backend` is already configured with your credentials.

### 3. Populate Database

```bash
cd backend
npm run seed
```

This will add 32 food items with categories: Salad, Rolls, Deserts, Sandwich, Cake, Pure Veg, Pasta, and Noodles.

### 4. Run Application

```bash
# Start Backend (Port 4000)
cd backend
npm run server

# Start Frontend (Port 5173)
cd frontend
npm run dev

# Start Admin Panel (Port 5174)
cd admin
npm run dev
```

## 🌐 Deployment

### Backend Deployment (Render/Heroku)

1. Deploy the `/backend` folder
2. Set environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `STRIPE_SECRET_KEY`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `PORT`

3. Run the seeder on deployed backend:
   ```bash
   npm run seed
   ```

### Frontend Deployment (Vercel/Netlify)

1. Update `/frontend/.env.production`:
   ```
   VITE_API_URL=https://your-deployed-backend-url.onrender.com
   ```

2. Deploy the `/frontend` folder

### Admin Panel Deployment

1. Update `/admin/.env.production`:
   ```
   VITE_API_URL=https://your-deployed-backend-url.onrender.com
   ```

2. Deploy the `/admin` folder

## 📱 Application URLs

- **Frontend**: User-facing food ordering app
- **Admin**: `http://localhost:5174` (Add/Edit food items, manage orders)
- **Backend API**: `http://localhost:4000`

## 🎯 Food Data

The application comes with 32 pre-configured food items across 8 categories, all with Cloudinary-hosted images. The data persists in MongoDB and will be available after deployment.

## 🔧 Scripts

- `npm run server` - Start backend server
- `npm run seed` - Populate database with food items
- `npm run dev` - Start frontend/admin in development mode
- `npm run build` - Build for production

## 📊 Database Schema

Food items include:
- Name, Description, Price
- Category (Salad, Rolls, etc.)
- Cloudinary image URLs
- MongoDB ObjectIds

---

**Note**: Make sure to update the production environment URLs in `.env.production` files before deploying!
