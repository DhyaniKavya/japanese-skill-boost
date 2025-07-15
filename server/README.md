# Japanese Skill Boost - Backend Server

This is the backend server for the Japanese Skill Boost application. It handles job application submissions and stores them in MongoDB.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the server directory:
   - Copy the contents from `.env.example`
   - Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string

3. Start the server:
   ```
   node server.js
   ```

## API Endpoints

### Submit Application
- **URL**: `/api/applications`
- **Method**: `POST`
- **Description**: Submit a new job application
- **Request Body**:
  ```json
  {
    "selectedJob": {
      "company": "Company Name",
      "position": "Job Position",
      "location": "Job Location",
      "duration": "Job Duration"
    },
    "formData": {
      "firstName": "First Name",
      "lastName": "Last Name",
      "email": "email@example.com",
      "phone": "Phone Number",
      "jlptLevel": "JLPT Level",
      "currentLevel": "Current Japanese Level",
      "experience": "Relevant Experience",
      "motivation": "Motivation and Goals",
      "availability": "Availability",
      "portfolio": "Portfolio URL",
      "agreeToTerms": true
    }
  }
  ```

### Get All Applications
- **URL**: `/api/applications`
- **Method**: `GET`
- **Description**: Get all submitted applications (for admin purposes)

### Get Application by ID
- **URL**: `/api/applications/:id`
- **Method**: `GET`
- **Description**: Get a specific application by its ID

## MongoDB Schema

The application data is stored with the following structure:

```javascript
{
  jobDetails: {
    company: String,
    position: String,
    location: String,
    duration: String
  },
  personalInfo: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String
  },
  japaneseSkills: {
    jlptLevel: String,
    currentLevel: String
  },
  experience: String,
  motivation: String,
  availability: String,
  portfolio: String,
  agreeToTerms: Boolean,
  applicationDate: Date
}
```