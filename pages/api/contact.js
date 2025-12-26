import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default async function handler(req, res) {
  console.log('=== Contact API Request ===');
  console.log('Method:', req.method);
  console.log('Body:', req.body);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if Firebase is configured
  if (!db) {
    console.error('Firebase is not configured. Please check your .env.local file.');
    console.error('Environment variables check:', {
      apiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: !!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: !!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    });
    return res.status(500).json({ 
      error: 'Server configuration error',
      message: 'Firebase is not configured. Please check your .env.local file and restart the server.' 
    });
  }
  
  console.log('Firebase is configured');

  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Add document to Firestore with timeout
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 10000)
    );

    const addDocPromise = addDoc(collection(db, 'contacts'), {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: serverTimestamp(),
      read: false,
    });

    const docRef = await Promise.race([addDocPromise, timeoutPromise]);

    return res.status(200).json({ 
      success: true, 
      id: docRef.id,
      message: 'Contact form submitted successfully' 
    });
  } catch (error) {
    // Log full error details for debugging
    console.error('=== Contact Form Error ===');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error name:', error.name);
    console.error('Full error:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
    console.error('Stack trace:', error.stack);
    console.error('========================');
    
    // Provide more specific error messages
    let errorMessage = 'Failed to submit contact form';
    let statusCode = 500;
    
    if (error.message === 'Request timeout') {
      errorMessage = 'Request timed out. Please try again.';
    } else if (error.code === 'permission-denied') {
      errorMessage = 'Permission denied. Please check Firestore security rules.';
      statusCode = 403;
    } else if (error.code === 'unavailable') {
      errorMessage = 'Firestore service is unavailable. Please try again later.';
      statusCode = 503;
    } else if (error.code === 'failed-precondition') {
      errorMessage = 'Firestore operation failed. Please check your database configuration.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return res.status(statusCode).json({ 
      error: 'Failed to submit contact form',
      message: errorMessage,
      code: error.code || 'unknown',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

