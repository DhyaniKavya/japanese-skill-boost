# Japanese Learning Platform

A comprehensive Japanese language learning platform with AI-powered chat assistance and job application functionality.

## Setup

### Frontend
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory with your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

### Backend
1. Navigate to the server directory and update the `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string_here
   PORT=5000
   ```
2. Test your MongoDB connection: `node server/test-db-connection.js`

### Running the Application
- Frontend only: `npm run dev`
- Backend only: `npm run server`
- Full application (frontend + backend): `npm run dev:full`

## Environment Variables

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key for the chat functionality
- `MONGODB_URI`: Your MongoDB connection string for storing job applications

## Features

- AI-powered Japanese language chat
- Japanese job application system with MongoDB integration
- Responsive design with mobile optimization
- Persistent chat history
- Bilingual support (Japanese/English)
- Cultural learning modules
- Interactive anime guides
- JLPT study materials

## Security

The `.env` file is automatically ignored by git to keep your API keys secure.
