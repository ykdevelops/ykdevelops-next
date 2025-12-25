# Youssef Khalil - Portfolio Website

A modern, responsive portfolio website built with Next.js showcasing my work experience, education, projects, and web management services.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that adapts to all screen sizes
- **Dynamic Typing Effect**: Animated typing effect for the introduction section
- **Interactive Work Experience**: Expandable work experience cards with detailed information
- **Education & Certifications**: Showcase of academic background and professional certifications
- **Web Management Service**: Dedicated section highlighting website management services for local businesses
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Optimized Performance**: Next.js optimization with image optimization and code splitting

## 🛠️ Technologies Used

- **Framework**: Next.js 13.3.0
- **React**: 18.2.0
- **Styling**: CSS Modules
- **UI Libraries**: 
  - Material-UI (MUI)
  - React Icons
- **Animation**: 
  - Framer Motion
  - React Spring
- **3D Graphics**: Three.js, React Three Fiber
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ykdevelops/ykdevelops-next.git
cd ykdevelops-next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
ykdevelops-next/
├── components/          # React components
│   ├── Intro.js        # Introduction section with typing effect
│   ├── WorkExperience.js
│   ├── Education.js
│   ├── Pitch.js        # Web Management Service section
│   ├── Contact.js
│   └── sideProjects/   # Side project components
├── pages/              # Next.js pages
│   ├── index.js        # Main page
│   ├── _app.js         # App wrapper
│   └── _document.js    # Document wrapper
├── public/             # Static assets
│   └── wms-icon.svg    # Web Management Service icon
├── styles/             # CSS modules
│   ├── globals.css     # Global styles
│   └── Home.module.css # Component styles
└── package.json
```

## 🎨 Key Sections

- **Introduction**: Personal introduction with animated typing effect
- **Professional Experience**: Work history with expandable details
- **Education**: Academic background and certifications
- **Web Management Service**: Service offering for local businesses
- **Contact**: Contact information and social links

## 📱 Responsive Design

The website uses responsive typography with `clamp()` functions to ensure optimal readability across all screen sizes:
- Section titles scale from 3rem to 5rem based on viewport width
- Body text scales proportionally
- Icons scale relative to their titles
- Maximum widths prevent content from becoming too wide on ultra-wide monitors

## 🚀 Deployment

The site is deployed on Vercel and available at: [ykdevelops-next.vercel.app](https://ykdevelops-next.vercel.app)

## 📧 Contact

If you have any questions, suggestions, or would like to discuss potential collaborations, please feel free to reach out:

- **Email**: ykdevelops@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/ykdevelops/](https://www.linkedin.com/in/ykdevelops/)
- **GitHub**: [https://github.com/ykdevelops](https://github.com/ykdevelops)

## 📄 License

This project is private and proprietary.

---

Thank you for visiting my portfolio repository! I look forward to connecting with you soon.
