import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sendEmail, isSESConfigured } from '../../lib/aws-ses';

export default async function handler(req, res) {
  console.log('=== Contact API Request ===');
  console.log('Method:', req.method);
  console.log('Body:', req.body);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();

    const results = {
      firestore: null,
      ses: null,
    };

    // Try to save to Firestore (if configured)
    if (db) {
      try {
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout')), 10000)
        );

        const addDocPromise = addDoc(collection(db, 'contacts'), {
          name: sanitizedName,
          email: sanitizedEmail,
          message: sanitizedMessage,
          timestamp: serverTimestamp(),
          read: false,
        });

        const docRef = await Promise.race([addDocPromise, timeoutPromise]);
        results.firestore = { success: true, id: docRef.id };
        console.log('Saved to Firestore:', docRef.id);
      } catch (error) {
        console.error('Firestore error:', error);
        results.firestore = { success: false, error: error.message };
      }
    }

    // Try to send email via AWS SES (if configured)
    if (isSESConfigured()) {
      try {
        const subject = `New Contact Form Submission from ${sanitizedName}`;
        const htmlBody = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #3f3d6b; color: white; padding: 20px; text-align: center; }
                .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #3f3d6b; }
                .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #3f3d6b; }
                .footer { margin-top: 20px; padding: 10px; text-align: center; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>New Contact Form Submission</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${sanitizedName}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>This email was sent from your portfolio contact form.</p>
                  <p>Timestamp: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
          </html>
        `;

        const textBody = `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Message: ${sanitizedMessage}

Timestamp: ${new Date().toLocaleString()}
        `.trim();

        const sesResult = await sendEmail({
          to: process.env.AWS_SES_TO_EMAIL,
          from: process.env.AWS_SES_FROM_EMAIL,
          subject: subject,
          htmlBody: htmlBody,
          textBody: textBody,
        });

        results.ses = { success: true, messageId: sesResult.messageId };
        console.log('Email sent via SES:', sesResult.messageId);
      } catch (error) {
        console.error('SES error:', error);
        results.ses = { success: false, error: error.message };
      }
    }

    // Check if at least one method succeeded
    const hasSuccess = results.firestore?.success || results.ses?.success;

    if (!hasSuccess) {
      // If neither method is configured or both failed
      if (!db && !isSESConfigured()) {
        return res.status(500).json({ 
          error: 'Server configuration error',
          message: 'Neither Firestore nor AWS SES is configured. Please check your .env.local file.' 
        });
      }

      // If both methods failed
      return res.status(500).json({ 
        error: 'Failed to submit contact form',
        message: 'Unable to save your message. Please try again later.',
        details: {
          firestore: results.firestore,
          ses: results.ses,
        }
      });
    }

    // Success - at least one method worked
    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully. We will get back to you soon!',
      results: {
        firestore: results.firestore,
        ses: results.ses,
      }
    });
  } catch (error) {
    console.error('=== Contact Form Error ===');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Stack trace:', error.stack);
    console.error('========================');
    
    let errorMessage = 'Failed to submit contact form';
    let statusCode = 500;
    
    if (error.message === 'Request timeout') {
      errorMessage = 'Request timed out. Please try again.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return res.status(statusCode).json({ 
      error: 'Failed to submit contact form',
      message: errorMessage,
      code: error.code || 'unknown'
    });
  }
}
