# Firebase Setup Guide

This guide will help you set up Firebase Firestore for the contact form.

## Step 1: Install Dependencies

Run the following command to install Firebase:

```bash
npm install firebase
```

## Step 2: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard

## Step 3: Enable Firestore

1. In your Firebase project, go to **Firestore Database** in the left sidebar
2. Click **Create database**
3. Start in **test mode** (for development) or **production mode** (for production)
4. Choose a location for your database
5. Click **Enable**

## Step 4: Get Your Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. If you don't have a web app, click **Add app** and select the web icon (`</>`)
4. Register your app with a nickname
5. Copy the Firebase configuration object

## Step 5: Create .env.local File

1. Create a file named `.env.local` in the root of your project (same directory as `package.json`)
2. Add the following variables with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

Replace the placeholder values with your actual Firebase configuration values.

## Step 6: Set Up Firestore Security Rules (Important!)

1. Go to **Firestore Database** → **Rules** tab
2. For development, you can use:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow read: if request.auth != null; // Only authenticated users can read
      allow create: if true; // Anyone can create (for contact form)
    }
  }
}
```

**For production**, you should restrict writes to authenticated users or use a server-side API with proper validation.

## Step 7: Restart Your Development Server

After creating `.env.local`, restart your Next.js development server:

```bash
npm run dev
```

## Testing the Contact Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your Firestore database in the Firebase Console
4. You should see a new document in the `contacts` collection with:
   - `name`: User's name
   - `email`: User's email
   - `message`: User's message
   - `timestamp`: Server timestamp
   - `read`: false (boolean flag for tracking)

## Troubleshooting

- **"Firebase: Error (auth/configuration-not-found)"**: Make sure your `.env.local` file exists and has all required variables
- **"Permission denied"**: Check your Firestore security rules
- **"Module not found: Can't resolve 'firebase'"**: Run `npm install firebase`

## Security Notes

- Never commit `.env.local` to version control (it's already in `.gitignore`)
- For production, consider adding rate limiting to prevent spam
- Validate and sanitize all form inputs on the server side
- Consider adding reCAPTCHA to prevent bot submissions




