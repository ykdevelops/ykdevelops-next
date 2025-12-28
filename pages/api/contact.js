/**
 * Contact Form API Route - AWS SES Integration
 * 
 * SETUP CHECKLIST:
 * ================
 * 
 * 1. AWS SES Setup:
 *    - Go to AWS Console -> SES -> Verified identities
 *    - Verify your sender email/domain (AWS_SES_FROM_EMAIL) - e.g., contact@youssefkhalil.info
 *    - If domain is verified, you can use any email @youssefkhalil.info
 *    - Create IAM user with SES permissions (SendEmail, SendRawEmail)
 *    - Get Access Key ID and Secret Access Key
 *    - Note: In Production mode, you can send to any email address (no recipient verification needed)
 * 
 * 2. Environment Variables (Vercel):
 *    - Go to Vercel Dashboard -> Your Project -> Settings -> Environment Variables
 *    - Add the following variables:
 *      * AWS_REGION=us-east-2
 *      * AWS_ACCESS_KEY_ID=your_access_key_id
 *      * AWS_SECRET_ACCESS_KEY=your_secret_access_key
 *      * AWS_SES_FROM_EMAIL=contact@youssefkhalil.info (must be verified in SES)
 *      * AWS_SES_TO_EMAIL=ykdevelops@gmail.com (any email works in Production mode)
 * 
 * 3. Local Development (.env.local):
 *    - Create .env.local in project root (DO NOT commit to git)
 *    - Add the same environment variables as above:
 *      AWS_REGION=us-east-2
 *      AWS_ACCESS_KEY_ID=your_access_key_id
 *      AWS_SECRET_ACCESS_KEY=your_secret_access_key
 *      AWS_SES_FROM_EMAIL=contact@youssefkhalil.info
 *      AWS_SES_TO_EMAIL=ykdevelops@gmail.com
 *    - Restart dev server after adding variables
 * 
 * 4. SES Production Mode (Current Setup):
 *    - ✅ You can send to ANY email address (no recipient verification needed)
 *    - ✅ Only the FROM email/domain needs to be verified
 *    - ✅ Higher sending limits apply
 * 
 * 5. Testing:
 *    - Test locally with verified emails first
 *    - Check Vercel function logs for errors
 *    - Verify emails are received in your inbox
 * 
 * VERIFICATION STEPS:
 * ===================
 * 
 * 1. Quick Configuration Check:
 *    - Visit /api/contact-test to verify env vars are set correctly
 *    - This endpoint shows configuration status without exposing secrets
 * 
 * 2. Local Test:
 *    - Create .env.local with all required variables
 *    - Run: npm run dev
 *    - Submit form once
 *    - Check terminal for 200 response
 *    - Check inbox (and spam folder)
 * 
 * 3. Vercel Test:
 *    - Add env vars in Vercel Project Settings -> Environment Variables
 *    - Add to Production (and Preview if testing there)
 *    - REDEPLOY (env vars don't apply to existing deployments)
 *    - Submit form on live site
 *    - Check Vercel Logs -> Functions -> /api/contact for errors
 * 
 * 4. Common Issues:
 *    - Wrong region: Must be us-east-2 to match verified identity
 *    - IAM permissions: User needs ses:SendEmail and ses:SendRawEmail
 *    - Domain not verified: FROM email domain must be verified in SES
 *    - Note: In Production mode, recipient verification is NOT required
 * 
 * 5. Email Delivery:
 *    - Emails ALWAYS go to AWS_SES_TO_EMAIL (controlled by env var)
 *    - Reply-To header only affects where replies go when you click Reply
 *    - Check SES Console -> Sending statistics to see if SES accepted the send
 */

import { sendEmail, isSESConfigured } from '../../lib/aws-ses';

// In-memory rate limiting map
// Key: IP address, Value: { count: number, resetTime: timestamp }
const rateLimitMap = new Map();

// Rate limit configuration: 5 requests per 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Get client IP address from request
 */
function getClientIP(req) {
  // Check various headers for the real IP (Vercel, proxies, etc.)
  return (
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    'unknown'
  );
}

/**
 * Check if IP is rate limited
 * @param {string} ip - Client IP address
 * @returns {Object} - { limited: boolean, remaining: number, resetAt: number }
 */
function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean up old entries periodically (every 1000 requests)
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetTime < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  // No record or window expired
  if (!record || record.resetTime < now) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return { limited: false, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }

  // Check if limit exceeded
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { limited: true, remaining: 0, resetAt: record.resetTime };
  }

  // Increment count
  record.count++;
  rateLimitMap.set(ip, record);
  return { limited: false, remaining: RATE_LIMIT_MAX_REQUESTS - record.count, resetAt: record.resetTime };
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate form data
 * @param {Object} data - Form data
 * @returns {Object} - { valid: boolean, errors: string[] }
 */
function validateFormData(data) {
  const errors = [];

  // Validate name: 1-80 characters
  if (!data.name || typeof data.name !== 'string') {
    errors.push('Name is required');
  } else {
    const name = data.name.trim();
    if (name.length < 1 || name.length > 80) {
      errors.push('Name must be between 1 and 80 characters');
    }
  }

  // Validate email: valid format
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else {
    const email = data.email.trim();
    if (!isValidEmail(email)) {
      errors.push('Invalid email format');
    }
  }

  // Validate message: 1-2000 characters
  if (!data.message || typeof data.message !== 'string') {
    errors.push('Message is required');
  } else {
    const message = data.message.trim();
    if (message.length < 1 || message.length > 2000) {
      errors.push('Message must be between 1 and 2000 characters');
    }
  }

  // Optional: validate company (if provided, max 100 chars)
  if (data.company && typeof data.company === 'string') {
    const company = data.company.trim();
    if (company.length > 100) {
      errors.push('Company name must be 100 characters or less');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Sanitize string to prevent XSS
 */
function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only POST requests are allowed' 
    });
  }

  // Check if AWS SES is configured
  if (!isSESConfigured()) {
    console.error('AWS SES is not configured. Missing environment variables.');
    return res.status(500).json({ 
      error: 'Server configuration error',
      message: 'Email service is not configured. Please contact the site administrator.' 
    });
  }

  try {
    const { name, email, message, company, honeypot } = req.body;

    // Honeypot spam protection: if honeypot field is filled, silently return success
    if (honeypot && honeypot.trim() !== '') {
      console.log('Honeypot triggered - likely spam, silently ignoring');
      // Return 200 to not reveal the honeypot
      return res.status(200).json({ 
        success: true,
        message: 'Thank you for your message!' 
      });
    }

    // Rate limiting
    const clientIP = getClientIP(req);
    const rateLimit = checkRateLimit(clientIP);
    
    if (rateLimit.limited) {
      const resetInMinutes = Math.ceil((rateLimit.resetAt - Date.now()) / 60000);
      return res.status(429).json({ 
        error: 'Too many requests',
        message: `Rate limit exceeded. Please try again in ${resetInMinutes} minute(s).`,
        retryAfter: resetInMinutes * 60
      });
    }

    // Validate form data
    const validation = validateFormData({ name, email, message, company });
    if (!validation.valid) {
      return res.status(400).json({ 
        error: 'Validation failed',
        message: validation.errors.join(', '),
        errors: validation.errors
      });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeString(name);
    const sanitizedEmail = email.trim();
    const sanitizedMessage = sanitizeString(message);
    const sanitizedCompany = company ? sanitizeString(company) : null;

    // Prepare email content
    const timestamp = new Date().toLocaleString('en-US', { 
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    const subject = `New website message from ${sanitizedName}`;
    
    // HTML email body
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #3f3d6b; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #3f3d6b; margin-bottom: 5px; display: block; }
            .value { padding: 12px; background-color: white; border-left: 3px solid #3f3d6b; border-radius: 4px; }
            .value a { color: #3f3d6b; text-decoration: none; }
            .value a:hover { text-decoration: underline; }
            .footer { margin-top: 20px; padding: 15px; text-align: center; color: #666; font-size: 12px; background-color: #f0f0f0; border-radius: 0 0 8px 8px; }
            .timestamp { color: #888; font-size: 11px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Website Message</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${sanitizedName}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">
                  <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a>
                </div>
              </div>
              ${sanitizedCompany ? `
              <div class="field">
                <span class="label">Company:</span>
                <div class="value">${sanitizedCompany}</div>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 5px 0;">This email was sent from your portfolio contact form.</p>
              <p class="timestamp">Timestamp: ${timestamp}</p>
              <p class="timestamp">IP Address: ${clientIP}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text email body
    const textBody = `
New Website Message

Name: ${sanitizedName}
Email: ${sanitizedEmail}
${sanitizedCompany ? `Company: ${sanitizedCompany}\n` : ''}Message:
${sanitizedMessage}

---
Timestamp: ${timestamp}
IP Address: ${clientIP}
This email was sent from your portfolio contact form.
    `.trim();

    // Send email via AWS SES
    const fromEmail = process.env.AWS_SES_FROM_EMAIL || process.env.SES_FROM_EMAIL;
    const toEmail = process.env.AWS_SES_TO_EMAIL || process.env.SES_TO_EMAIL;
    const awsRegion = process.env.AWS_REGION || 'us-east-2';

    // Log configuration for debugging (without exposing secrets)
    console.log('SES Configuration:', {
      region: awsRegion,
      from: fromEmail,
      to: toEmail,
      replyTo: sanitizedEmail,
    });

    // IMPORTANT: Reply-To does NOT change where the email is delivered.
    // Delivery always goes to AWS_SES_TO_EMAIL.
    // Reply-To only affects where your email client sends replies when you click "Reply".
    const result = await sendEmail({
      to: toEmail,
      from: fromEmail,
      replyTo: sanitizedEmail, // Set Reply-To to visitor's email for easy replies
      subject: subject,
      htmlBody: htmlBody,
      textBody: textBody,
    });

    console.log('Email sent successfully via AWS SES:', {
      messageId: result.messageId,
      region: awsRegion,
      to: toEmail,
    });

    return res.status(200).json({ 
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.Code || error.code,
      name: error.name,
      region: process.env.AWS_REGION || 'us-east-2',
      fromEmail: process.env.AWS_SES_FROM_EMAIL || 'not set',
      toEmail: process.env.AWS_SES_TO_EMAIL || 'not set',
    });
    
    // Provide user-friendly error messages
    let errorMessage = 'Failed to send message. Please try again later.';
    let statusCode = 500;
    
    // Handle specific AWS SES errors with helpful messages
    if (error.Code === 'MessageRejected' || error.code === 'MessageRejected') {
      errorMessage = 'Email was rejected. Check: 1) Region matches verified identity (us-east-2), 2) Recipient is verified if in Sandbox, 3) From email domain is verified.';
    } else if (error.Code === 'MailFromDomainNotVerified' || error.code === 'MailFromDomainNotVerified') {
      errorMessage = 'Sender email domain is not verified in AWS SES. Verify the domain identity in SES Console.';
    } else if (error.Code === 'ConfigurationSetDoesNotExist' || error.code === 'ConfigurationSetDoesNotExist') {
      errorMessage = 'AWS SES configuration error.';
    } else if (error.name === 'InvalidParameterValue' || error.Code === 'InvalidParameterValue') {
      errorMessage = 'Invalid email parameter. Check that FROM and TO emails are valid and verified.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return res.status(statusCode).json({ 
      error: 'Failed to send message',
      message: errorMessage,
      code: error.Code || error.code || 'unknown'
    });
  }
}
