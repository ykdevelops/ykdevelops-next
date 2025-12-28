# YKDevelops Portfolio Website

A modern, responsive portfolio website built with Next.js showcasing my projects, experience, and skills.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile and desktop
- **Case Studies Section**: Showcase of featured projects including MugCulture Beta, Chat App, and 3D Studio
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
│   ├── CaseStudies.js          # Case studies showcase section
│   ├── Certifications.js        # Certifications display
│   ├── Contact.js               # Contact form component
│   ├── Education.js            # Education section
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
│       └── contact-ses.js      # Contact form handler
├── styles/
│   ├── Home.module.css         # Main stylesheet with responsive design
│   └── globals.css             # Global styles
└── public/                     # Static assets
    ├── puzzle-svgrepo-com.svg  # Case studies icon
    └── website-program-svgrepo-com.svg
```

## Recent Updates

- Added Case Studies section with featured projects
- Implemented responsive typography matching education hierarchy
- Updated case study icons and styling
- Improved mobile layout and alignment for case studies
- Enhanced visual consistency across all sections

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

## Deployment

The site is deployed on Vercel. See deployment documentation for details.

## License

Private project - All rights reserved
