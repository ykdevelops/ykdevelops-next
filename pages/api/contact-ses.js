import { sendEmail, isSESConfigured } from '../../lib/aws-ses';

export default async function handler(req, res) {
  console.log('=== Contact SES API Request ===');
  console.log('Method:', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if AWS SES is configured
  if (!isSESConfigured()) {
    console.error('AWS SES is not configured. Please check your .env.local file.');
    return res.status(500).json({ 
      error: 'Server configuration error',
      message: 'AWS SES is not configured. Please check your .env.local file and restart the server.' 
    });
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

    // Email content
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

    // Send email using AWS SES
    const fromEmail = process.env.AWS_SES_FROM_EMAIL;
    const toEmail = process.env.AWS_SES_TO_EMAIL;

    const result = await sendEmail({
      to: toEmail,
      from: fromEmail,
      subject: subject,
      htmlBody: htmlBody,
      textBody: textBody,
    });

    console.log('Email sent successfully:', result.messageId);

    return res.status(200).json({ 
      success: true, 
      messageId: result.messageId,
      message: 'Contact form submitted successfully. We will get back to you soon!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.Code || error.code,
      name: error.name,
    });
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    let statusCode = 500;
    
    if (error.Code === 'MessageRejected' || error.code === 'MessageRejected') {
      errorMessage = 'Email was rejected. Please check your AWS SES configuration and verified email addresses.';
    } else if (error.Code === 'MailFromDomainNotVerified' || error.code === 'MailFromDomainNotVerified') {
      errorMessage = 'Sender email domain is not verified in AWS SES.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return res.status(statusCode).json({ 
      error: 'Failed to send email',
      message: errorMessage,
      code: error.Code || error.code || 'unknown'
    });
  }
}


