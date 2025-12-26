# Firestore Security Rules for Contact Form

## Quick Setup

1. Go to your Firebase Console → Firestore Database → **Rules** tab
2. Replace the existing rules with the following:

### For Development/Testing (Allows anyone to write):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      // Allow anyone to create contact submissions
      allow create: if true;
      
      // Only allow reads if authenticated (optional - for admin panel)
      allow read: if request.auth != null;
      
      // Prevent updates and deletes from client
      allow update, delete: if false;
    }
  }
}
```

### For Production (More Secure):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      // Allow anyone to create contact submissions
      // But validate the data structure
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'message', 'timestamp', 'read'])
                   && request.resource.data.name is string
                   && request.resource.data.email is string
                   && request.resource.data.message is string
                   && request.resource.data.read == false
                   && request.resource.data.name.size() > 0
                   && request.resource.data.email.size() > 0
                   && request.resource.data.message.size() > 0;
      
      // Only allow reads if authenticated (for admin panel)
      allow read: if request.auth != null;
      
      // Prevent updates and deletes from client
      allow update, delete: if false;
    }
  }
}
```

## Steps to Apply Rules:

1. Click on the **Rules** tab in Firestore Database
2. Copy and paste one of the rule sets above
3. Click **Publish** to save the rules
4. Rules take effect immediately

## Testing:

After setting up the rules, try submitting the contact form again. The data should appear in the `contacts` collection in Firestore.

## Security Notes:

- The development rules allow anyone to create documents (good for testing)
- The production rules validate the data structure before allowing writes
- Consider adding rate limiting or App Check for additional protection in production
- Never allow client-side updates or deletes of contact submissions

