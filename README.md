# YKDevelops Portfolio Website

A modern, responsive portfolio website built with Next.js showcasing my projects, experience, and skills.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile and desktop
- **Personal Projects Section**: Showcase of featured projects including MugCulture Beta, Chat App, and 3D Studio
- **Work Experience**: Professional experience timeline
- **Education**: Academic background and certifications
- **Contact Form**: Integrated contact form with AWS SES backend
- **3D Visualizations**: Interactive 3D workspace visualization using React Three Fiber
- **Smooth Animations**: Framer Motion animations for enhanced user experience

## Tech Stack

- **Framework**: Next.js 13.3.0
- **React**: 18.2.0
- **Styling**: CSS Modules
- **3D Graphics**: React Three Fiber, Three.js, @react-three/drei
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Backend**: AWS SES (for contact form)
- **Analytics**: Vercel Analytics & Speed Insights

## Project Structure

```
ykdevelops-next/
├── components/
│   ├── PersonalProjects.js     # Personal projects showcase section
│   ├── Contact.js               # Contact form component
│   ├── Education.js            # Education section (includes certifications)
│   ├── Intro.js                # Introduction section
│   ├── Pitch.js                # Website service pitch section
│   ├── WorkExperience.js       # Work experience timeline
│   └── sideProjects/           # Individual project components
│       ├── BoxCanvas.js        # 3D workspace visualization
│       ├── ChatApp.js          # Chat app case study
│       ├── MugCulture.js       # MugCulture e-commerce case study
│       └── Studio.js            # 3D Studio case study
├── pages/
│   ├── index.js                # Main page
│   └── api/                    # API routes
│       ├── contact.js          # Contact form handler (AWS SES)
│       └── contact-test.js     # SES configuration test endpoint
├── lib/
│   └── aws-ses.js              # AWS SES client and helper functions
├── styles/
│   ├── Home.module.css         # Main stylesheet with responsive design
│   └── globals.css             # Global styles
└── public/                     # Static assets
    ├── puzzle-svgrepo-com.svg  # Personal projects icon
    └── website-program-svgrepo-com.svg
```

## Recent Updates

- ✅ **Responsive Breakpoints**: Updated to modern breakpoint system (Mobile: 0-767px, Tablet: 768-1023px, Desktop: 1024-1919px, Large: 1920px+)
- ✅ **Pitch Section Redesign**: Reorganized layout - paragraph above 2x2 cards on left, video above button on right
- ✅ **Personal Projects**: Renamed from Case Studies, removed project descriptions, updated card sizing (300px height, 80/20 split)
- ✅ **Typography**: All text minimum 20px for improved readability
- ✅ **Website Service**: Updated description text and removed clickability from 2x2 cards (hover only)
- ✅ **Mobile Optimizations**: Smaller contact icons/labels, removed intro padding, improved spacing
- ✅ **AWS SES Integration**: Fully integrated contact form with AWS SES email delivery
- ✅ **Typography Improvements**: Applied Noto Kufi Arabic font to section titles and name
- ✅ **Design System**: Implemented 8pt grid spacing system and improved typography hierarchy
- ✅ **Component Updates**: Merged certifications into Education section
- ✅ **Intro Section**: Removed rotating text animation, stacked text vertically

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## AWS SES Integration

The contact form is fully integrated with AWS SES for reliable email delivery.

### Features

- ✅ **Server-side email delivery** via AWS SES (us-east-2 region)
- ✅ **Spam protection**: Honeypot field and IP-based rate limiting (5 requests per 10 minutes)
- ✅ **Input validation**: Name (1-80 chars), email format, message (1-2000 chars)
- ✅ **XSS protection**: All inputs are sanitized before sending
- ✅ **Reply-To header**: Visitor's email is set as Reply-To for easy responses
- ✅ **Error handling**: User-friendly error messages and comprehensive logging
- ✅ **Production ready**: Works with AWS SES Production mode (send to any email)

### Setup

#### 1. AWS SES Configuration

- **Region**: `us-east-2` (Ohio)
- **Verified Identity**: Domain `youssefkhalil.info` (or email `contact@youssefkhalil.info`)
- **IAM User**: `verecel-ses-sender` with `ses:SendEmail` and `ses:SendRawEmail` permissions
- **Mode**: Production (can send to any email address)

#### 2. Environment Variables

Create `.env.local` for local development:

```env
AWS_REGION=us-east-2
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_SES_FROM_EMAIL=contact@youssefkhalil.info
AWS_SES_TO_EMAIL=ykdevelops@gmail.com
```

**For Vercel Deployment:**
- Go to Project Settings → Environment Variables
- Add all the above variables
- **Important**: Redeploy after adding environment variables (they don't apply to existing deployments)

#### 3. API Endpoints

- **POST `/api/contact`**: Main contact form handler
  - Accepts: `{ name, email, message, company?, honeypot? }`
  - Returns: Success/error JSON response
  
- **GET `/api/contact-test`**: Configuration verification endpoint
  - Checks environment variables and SES configuration
  - Safe to expose publicly (no secrets revealed)

### Security Features

1. **Honeypot Field**: Hidden field that bots fill out (silently ignored)
2. **Rate Limiting**: In-memory IP-based rate limiting (5 requests per 10 minutes)
3. **Input Validation**: Server-side validation with character limits
4. **XSS Protection**: All user inputs are sanitized before use
5. **Error Messages**: Generic error messages to prevent information leakage

### Email Format

Emails sent via SES include:
- **Subject**: "New website message from [Name]"
- **From**: `contact@youssefkhalil.info` (verified SES identity)
- **To**: `ykdevelops@gmail.com` (configurable via `AWS_SES_TO_EMAIL`)
- **Reply-To**: Visitor's email address (for easy replies)
- **Content**: Formatted HTML and plain text versions with:
  - Name, email, message
  - Optional company field
  - Timestamp and IP address

### Testing

1. **Local Test**:
   ```bash
   npm run dev
   # Submit form at http://localhost:3000
   # Check terminal for 200 response
   # Check inbox for email
   ```

2. **Configuration Check**:
   - Visit `/api/contact-test` to verify environment variables
   - Shows configuration status without exposing secrets

3. **Vercel Logs**:
   - Check Vercel Dashboard → Project → Logs → Functions → `/api/contact`
   - Look for "Email sent successfully via AWS SES" message

### Documentation

- **Setup Guide**: See comments in `/pages/api/contact.js` for detailed setup checklist
- **IAM Setup**: See `SES_IAM_SETUP.md` for IAM permission configuration
- **AWS SES Setup**: See `AWS_SES_SETUP.md` for AWS SES configuration details

## Deployment

The site is deployed on Vercel with AWS SES integration for contact form functionality.

### Deployment Checklist

- [x] AWS SES configured in `us-east-2` region
- [x] Domain identity verified in AWS SES
- [x] IAM user created with SES permissions
- [x] Environment variables set in Vercel
- [x] Contact form tested and working
- [x] Rate limiting and spam protection active

## License

Private project - All rights reserved
