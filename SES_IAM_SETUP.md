# AWS SES IAM Permission Setup

## Issue
Your IAM user `verecel-ses-sender` is missing permissions to send emails via SES.

## Solution: Add IAM Policy

### Option 1: Using AWS Console (Recommended)

1. **Go to AWS IAM Console**
   - Navigate to: https://console.aws.amazon.com/iam/
   - Click "Users" in the left sidebar
   - Find and click on `verecel-ses-sender`

2. **Add Permissions**
   - Click the "Add permissions" button
   - Choose "Attach policies directly"
   - Search for and select: **`AmazonSESFullAccess`** (or create a custom policy below)

3. **OR Create Custom Policy (More Secure)**
   - Click "Add permissions" → "Create inline policy"
   - Click "JSON" tab
   - Paste the policy below
   - Name it: `SES-SendEmail-Policy`
   - Click "Create policy"

### Option 2: Custom IAM Policy (JSON)

This is more secure as it only grants the minimum required permissions:

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
      "Resource": [
        "arn:aws:ses:us-east-2:878813151498:identity/youssefkhalil.info",
        "arn:aws:ses:us-east-2:878813151498:identity/contact@youssefkhalil.info"
      ]
    }
  ]
}
```

**OR** if you want to allow sending from any verified identity in us-east-2:

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
      "Resource": "arn:aws:ses:us-east-2:878813151498:identity/*"
    }
  ]
}
```

### Option 3: Using AWS CLI

If you have AWS CLI configured:

```bash
# Create the policy file
cat > ses-send-policy.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ses:SendEmail",
        "ses:SendRawEmail"
      ],
      "Resource": "arn:aws:ses:us-east-2:878813151498:identity/*"
    }
  ]
}
EOF

# Attach the policy to the user
aws iam put-user-policy \
  --user-name verecel-ses-sender \
  --policy-name SES-SendEmail-Policy \
  --policy-document file://ses-send-policy.json
```

## Verify Permissions

After adding permissions, test again:

1. **Local Test**: Submit the contact form locally
2. **Check Logs**: Look for successful email send in terminal/Vercel logs
3. **Check Email**: Verify email arrives in inbox

## Important Notes

- **Region**: Make sure the policy includes `us-east-2` in the ARN
- **Identity**: The resource ARN should match your verified identity (domain or email)
- **Propagation**: IAM permission changes are usually immediate, but can take a few seconds
- **Testing**: After adding permissions, you may need to wait 10-30 seconds before testing

## Troubleshooting

If you still get permission errors after adding the policy:

1. **Verify the policy is attached**:
   - Go to IAM → Users → `verecel-ses-sender` → Permissions
   - Confirm the policy is listed

2. **Check the resource ARN**:
   - Make sure the ARN in the policy matches your verified identity
   - Domain identity: `arn:aws:ses:us-east-2:ACCOUNT_ID:identity/yourdomain.com`
   - Email identity: `arn:aws:ses:us-east-2:ACCOUNT_ID:identity/email@domain.com`

3. **Verify region**:
   - Policy must use `us-east-2` (not `us-east-1` or other regions)

4. **Check for conflicting policies**:
   - Look for any "Deny" policies that might override the Allow policy


