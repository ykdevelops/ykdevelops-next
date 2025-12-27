import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Initialize SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

/**
 * Send email using AWS SES
 * @param {Object} params - Email parameters
 * @param {string} params.to - Recipient email address
 * @param {string} params.from - Sender email address (must be verified in SES)
 * @param {string} params.subject - Email subject
 * @param {string} params.htmlBody - HTML email body
 * @param {string} params.textBody - Plain text email body (optional)
 * @returns {Promise<Object>} - SES send email result
 */
export async function sendEmail({ to, from, subject, htmlBody, textBody }) {
  const params = {
    Source: from,
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: htmlBody,
          Charset: 'UTF-8',
        },
        ...(textBody && {
          Text: {
            Data: textBody,
            Charset: 'UTF-8',
          },
        }),
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);
    return {
      success: true,
      messageId: result.MessageId,
    };
  } catch (error) {
    console.error('AWS SES Error:', error);
    throw error;
  }
}

/**
 * Check if AWS SES is properly configured
 * @returns {boolean}
 */
export function isSESConfigured() {
  return !!(
    process.env.AWS_ACCESS_KEY_ID &&
    process.env.AWS_SECRET_ACCESS_KEY &&
    process.env.AWS_SES_FROM_EMAIL &&
    process.env.AWS_SES_TO_EMAIL
  );
}

export { sesClient };


