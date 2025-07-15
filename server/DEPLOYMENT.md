# Deployment Guide for Japanese Skill Boost

## Overview

This application consists of two parts:
1. Frontend (React application)
2. Backend (Express server with MongoDB)

Both need to be deployed separately to work correctly in production.

## Frontend Deployment (Vercel)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
3. Click "New Project" and import your repository
4. Select the root directory for the frontend deployment
5. Configure the build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

## Backend Deployment (Vercel)

1. Go to [Vercel](https://vercel.com) and create a new project
2. This time, select the `server` directory for deployment
3. Add the following environment variables in the Vercel project settings:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: 5000 (or any port Vercel supports)
4. Deploy the backend

## Setting Up Environment Variables

### Creating a Secret for MongoDB URI

1. In your Vercel dashboard, go to "Settings" > "Environment Variables"
2. Add a new environment variable:
   - Name: `MONGODB_URI`
   - Value: Your MongoDB connection string
3. Select the projects where this variable should be available

## Connecting Frontend to Backend

The frontend code has been updated to use the correct API URL based on the environment:

```javascript
const apiUrl = import.meta.env.PROD 
  ? 'https://japanese-skill-boost-server.vercel.app/api/applications' 
  : 'http://localhost:5000/api/applications';
```

Make sure to replace `japanese-skill-boost-server.vercel.app` with your actual backend deployment URL.

## CORS Configuration

The backend has been configured to accept requests from the following origins:

- Local development servers
- The Vercel-deployed frontend

If you deploy to a different domain, make sure to update the CORS configuration in `server.js`.

## Troubleshooting

### MongoDB Connection Issues

- Verify that your MongoDB Atlas cluster has the correct IP access settings
- Make sure your MongoDB URI is correctly set in Vercel environment variables
- Check that your MongoDB user has the correct permissions

### API Connection Issues

- Verify that the frontend is using the correct backend URL
- Check the browser console for CORS errors
- Ensure the backend CORS configuration includes your frontend domain