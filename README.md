# Jeeva Bindu - Blood Donation Platform

Jeeva Bindu ("Drop of Life") is a modern, responsive, and aesthetically premium web application designed to connect blood donors with individuals in urgent need of blood.

## Features

- **Modern Glassmorphism UI:** Stunning dark theme with vibrant red accents and smooth micro-animations.
- **Find Donors:** Search for available donors by blood group and location.
- **Urgent Requests:** Quickly broadcast an urgent request for blood to nearby donors.
- **Donor Registration:** Seamless onboarding for new heroes willing to donate blood.
- **Responsive Design:** Fully responsive layout optimized for all devices.

## Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Icons:** Lucide React
- **Routing:** React Router DOM

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/syed-fouzaan/Jeeva-Bindu.git
   cd Jeeva-Bindu/jeeva-bindu
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

## Deployment Guidelines

This project is built with Vite and is ready to be deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Deploying to Netlify (Recommended)

1. Connect your GitHub repository to Netlify.
2. Configure the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Add a `_redirects` file in the `public` directory with the following content to support React Router:
   ```
   /*    /index.html   200
   ```
4. Click **Deploy Site**.

### Deploying to Vercel

1. Import the repository into Vercel.
2. Vercel will automatically detect the Vite preset.
3. Keep the default build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

## Architecture & Best Practices

- **Semantic HTML & SEO:** The application follows strict HTML5 semantic standards. (Implementation based on the `claude-seo` skill guidelines).
- **Component Reusability:** Logic and UI are separated into modular components.
- **Design System:** Colors, typography, and spacing are controlled via global CSS variables in `index.css` to maintain visual consistency and support easy theming.
- **Performance:** Leveraging Vite for lightning-fast HMR and optimized production builds.

## Developer Note
> The PRD document `Jeeva_Bindu_PRD_Project100.docx` was found to be corrupted (saved in a text encoding format instead of binary, destroying the inner zip structure). The application has been developed using industry-standard features for a blood donation platform based on the implied requirements.
