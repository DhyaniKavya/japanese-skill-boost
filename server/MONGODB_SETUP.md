# MongoDB Setup Guide

## Creating a MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for a free account if you don't have one already.
2. After signing up and logging in, click on "Build a Database".
3. Select the free tier option (M0) and choose your preferred cloud provider and region.
4. Create a cluster name (e.g., "japanese-skill-boost") and click "Create Cluster".

## Setting Up Database Access

1. While your cluster is being created, go to the "Database Access" section under Security.
2. Click "Add New Database User".
3. Create a username and password. Make sure to save these credentials securely.
4. Set the appropriate permissions (e.g., "Read and Write to Any Database").
5. Click "Add User".

## Network Access

1. Go to the "Network Access" section under Security.
2. Click "Add IP Address".
3. For development purposes, you can click "Allow Access from Anywhere" (not recommended for production).
4. Click "Confirm".

## Getting Your Connection String

1. Once your cluster is created, click on "Connect".
2. Select "Connect your application".
3. Choose your driver version (Node.js and the latest version).
4. Copy the connection string provided.
5. Replace `<password>` with your database user's password.
6. Replace `<dbname>` with `japanese_skill_boost`.

## Updating Your .env File

1. Open the `.env` file in the server directory.
2. Replace the `MONGODB_URI` value with your connection string:
   ```
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/japanese_skill_boost?retryWrites=true&w=majority
   ```

## Testing Your Connection

1. Run the test script to verify your connection:
   ```
   node test-db-connection.js
   ```
   or double-click on the `test-connection.bat` file.

2. If successful, you should see a message indicating that the connection was established.

## Troubleshooting

- **Connection Error**: Make sure your IP address is whitelisted in the Network Access settings.
- **Authentication Error**: Verify that your username and password are correct in the connection string.
- **Timeout Error**: Check your internet connection or try a different region for your cluster.

## Next Steps

Once your MongoDB connection is working:

1. Start the backend server:
   ```
   node server.js
   ```
   or double-click on the `start-server.bat` file.

2. Run the full application (frontend + backend):
   ```
   npm run dev:full
   ```

3. Test the job application form by submitting an application through the UI.

4. Check your MongoDB Atlas dashboard to see the submitted applications in the `applications` collection.