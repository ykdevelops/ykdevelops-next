# AWS SES Setup Guide

This guide will help you set up AWS Simple Email Service (SES) for your contact form.

## Step 1: Install Dependencies

The AWS SDK is already added to `package.json`. Install it by running:

```bash
npm install
```

## Step 2: Create an AWS Account

1. Go to [AWS Console](https://console.aws.amazon.com/)
2. Sign in or create an account
3. Navigate to **SES (Simple Email Service)**

## Step 3: Verify Your Email Address

### For Development/Testing (Sandbox Mode):

1. Go to **SES** → **Verified identities**
2. Click **Create identity**
3. Select **Email address**
4. Enter your email address (the one you want to receive contact form submissions)
5. Click **Create identity**
6. Check your email and click the verification link

**Important:** In sandbox mode, you can only send emails TO verified email addresses.

### For Production:

1. Request production access:
   - Go to **SES** → **Account dashboard**
   - Click **Request production access**
   - Fill out the form explaining your use case
   - Wait for approval (usually 24-48 hours)

2. Verify your sending domain (recommended):
   - Go to **SES** → **Verified identities**
   - Click **Create identity**
   - Select **Domain**
   - Enter your domain name
   - Follow DNS verification steps

## Step 4: Create IAM User for SES

1. Go to **IAM** → **Users**
2. Click **Create user**
3. Username: `ses-contact-form-user`
4. Select **Provide user access to the AWS Management Console** (optional) or **Access key - Programmatic access**
5. Click **Next**
6. Attach policies:
   - Search for `AmazonSESFullAccess` or create a custom policy with:
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Effect": "Allow",
           "Action": [
             "ses:SendEmail",
             "ses:SendRawEmail"
           ],
           "Resource": "*"
         }
       ]
     }
     ```
7. Click **Next** → **Create user**
8. **Important:** Copy the **Access Key ID** and **Secret Access Key** immediately (you won't see the secret again)

## Step 5: Configure Environment Variables

Add these to your `.env.local` file:

```env
# AWS SES Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_id_here
AWS_SECRET_ACCESS_KEY=your_secret_access_key_here
AWS_SES_FROM_EMAIL=noreply@yourdomain.com
AWS_SES_TO_EMAIL=your-email@example.com
```

**Important Notes:**
- `AWS_SES_FROM_EMAIL`: Must be a verified email address in SES (or verified domain)
- `AWS_SES_TO_EMAIL`: The email address where you want to receive contact form submissions
- `AWS_REGION`: The AWS region where your SES is configured (e.g., `us-east-1`, `us-west-2`, `eu-west-1`)

## Step 6: Restart Your Development Server

After adding the environment variables, restart your server:

```bash
npm run dev
```

## Step 7: Test the Contact Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox (the `AWS_SES_TO_EMAIL` address)
4. You should receive a formatted email with the contact form details

## How It Works

The contact form API (`/api/contact`) now supports both:
- **Firestore**: Saves submissions to your Firestore database
- **AWS SES**: Sends an email notification to your inbox

If both are configured, it will:
1. Save to Firestore (for record keeping)
2. Send email via SES (for immediate notification)

If only one is configured, it will use that method. If neither is configured, it will return an error.

## Troubleshooting

### "Email address is not verified"
- Make sure the `AWS_SES_FROM_EMAIL` is verified in SES
- In sandbox mode, the recipient email must also be verified

### "MessageRejected" error
- Check that your email addresses are verified in SES
- If in sandbox mode, verify the recipient email address
- Check your SES sending limits

### "Access Denied" error
- Verify your IAM user has the correct permissions
- Check that your Access Key ID and Secret Access Key are correct

### Email not received
- Check spam/junk folder
- Verify the `AWS_SES_TO_EMAIL` is correct
- Check AWS SES console for bounce/complaint notifications
- Verify your SES account is not in sandbox mode (or recipient is verified)

## Production Considerations

1. **Move out of Sandbox**: Request production access to send to any email address
2. **Domain Verification**: Verify your domain instead of individual emails for better deliverability
3. **SPF/DKIM Records**: Set up SPF and DKIM records for your domain
4. **Rate Limits**: Be aware of SES sending limits (check AWS console)
5. **Bounce/Complaint Handling**: Set up SNS notifications for bounces and complaints
6. **Environment Variables in Vercel**: Add all AWS credentials to Vercel Dashboard → Project Settings → Environment Variables

## Security Best Practices

- Never commit `.env.local` to version control (already in `.gitignore`)
- Use IAM roles with least privilege (only SES send permissions)
- Rotate access keys regularly
- Use AWS Secrets Manager for production (optional)
- Monitor SES usage and set up billing alerts


