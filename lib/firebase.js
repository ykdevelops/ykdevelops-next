import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if Firebase config is complete
const isConfigValid = () => {
  const isValid = (
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.storageBucket &&
    firebaseConfig.messagingSenderId &&
    firebaseConfig.appId &&
    firebaseConfig.apiKey !== 'your_api_key_here' &&
    firebaseConfig.projectId !== 'your_project_id' &&
    !firebaseConfig.apiKey.includes('your_') &&
    !firebaseConfig.projectId.includes('your_')
  );
  
  if (!isValid) {
    console.warn('Firebase config validation failed. Missing or placeholder values detected.');
    console.warn('Config check:', {
      hasApiKey: !!firebaseConfig.apiKey,
      hasAuthDomain: !!firebaseConfig.authDomain,
      hasProjectId: !!firebaseConfig.projectId,
      hasStorageBucket: !!firebaseConfig.storageBucket,
      hasMessagingSenderId: !!firebaseConfig.messagingSenderId,
      hasAppId: !!firebaseConfig.appId,
    });
  }
  
  return isValid;
};

// Initialize Firebase only if it hasn't been initialized already and config is valid
let app;
let db;

if (isConfigValid()) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
  } catch (error) {
    console.error('Firebase initialization error:', error);
    db = null;
  }
} else {
  console.warn('Firebase configuration is missing or incomplete. Please check your .env.local file.');
  db = null;
}

export { db };

