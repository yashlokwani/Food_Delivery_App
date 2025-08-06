# 🚀 Foodie App Deployment Checklist

## Backend (Render)
- [ ] Create Web Service on Render
- [ ] Set root directory to `backend`
- [ ] Set build command: `npm install`
- [ ] Set start command: `npm start`
- [ ] Add all environment variables
- [ ] Deploy and note the URL
- [ ] Run `npm run seed` in Render console

## Frontend (Vercel)
- [ ] Import project on Vercel
- [ ] Set root directory to `frontend`
- [ ] Set framework to Vite
- [ ] Update VITE_API_URL with backend URL
- [ ] Deploy

## Admin Panel (Vercel)
- [ ] Create new Vercel project
- [ ] Set root directory to `admin`
- [ ] Set framework to Vite
- [ ] Update VITE_API_URL with backend URL
- [ ] Deploy

## Final Testing
- [ ] Test backend API endpoints
- [ ] Test frontend food display
- [ ] Test admin panel functionality
- [ ] Test user registration/login
- [ ] Test cart and checkout flow

## URLs After Deployment
- Backend: https://your-backend.onrender.com
- Frontend: https://your-frontend.vercel.app
- Admin: https://your-admin.vercel.app

## Important Notes
1. Update frontend/admin .env.production files with actual backend URL
2. Run database seeder once after backend deployment
3. Food images will work automatically (using CDN URLs)
4. All environment variables are already configured
