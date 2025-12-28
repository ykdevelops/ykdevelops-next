/**
 * SES Configuration Test Endpoint
 * 
 * This endpoint helps verify your AWS SES configuration without sending an email.
 * 
 * Usage: GET /api/contact-test
 * 
 * Returns:
 * - Configuration status (without exposing secrets)
 * - Region check
 * - Environment variable presence
 * 
 * This is safe to expose publicly as it doesn't reveal sensitive credentials.
 */

import { isSESConfigured } from '../../lib/aws-ses';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const config = {
    region: process.env.AWS_REGION || 'us-east-2',
    hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
    hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
    fromEmail: process.env.AWS_SES_FROM_EMAIL || process.env.SES_FROM_EMAIL || null,
    toEmail: process.env.AWS_SES_TO_EMAIL || process.env.SES_TO_EMAIL || null,
    isConfigured: isSESConfigured(),
  };

  // Check if region matches requirement
  const regionMatches = config.region === 'us-east-2';
  
  // Build status message
  const issues = [];
  if (!config.hasAccessKey) issues.push('AWS_ACCESS_KEY_ID is missing');
  if (!config.hasSecretKey) issues.push('AWS_SECRET_ACCESS_KEY is missing');
  if (!config.fromEmail) issues.push('AWS_SES_FROM_EMAIL is missing');
  if (!config.toEmail) issues.push('AWS_SES_TO_EMAIL is missing');
  if (!regionMatches) issues.push(`Region is ${config.region}, but should be us-east-2`);

  const status = {
    configured: config.isConfigured && regionMatches && issues.length === 0,
    region: config.region,
    regionCorrect: regionMatches,
    fromEmail: config.fromEmail ? `${config.fromEmail.substring(0, 3)}***@${config.fromEmail.split('@')[1]}` : 'not set',
    toEmail: config.toEmail ? `${config.toEmail.substring(0, 3)}***@${config.toEmail.split('@')[1]}` : 'not set',
    issues: issues,
    nextSteps: issues.length > 0 ? [
      '1. Set missing environment variables in Vercel (Project Settings -> Environment Variables)',
      '2. Ensure AWS_REGION=us-east-2',
      '3. Verify the FROM email domain is verified in AWS SES Console (us-east-2 region)',
      '4. If in Sandbox mode, verify the TO email address in AWS SES Console',
      '5. Redeploy after adding environment variables (they don\'t apply to existing deployments)',
    ] : [
      '✅ Configuration looks good!',
      'Next: Test the contact form to verify email delivery.',
      'Check Vercel logs if emails are not received.',
    ],
  };

  return res.status(200).json(status);
}

