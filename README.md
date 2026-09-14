# Melbert Q. Labawan — Career Portfolio Website

Professional portfolio website for **Melbert Q. Labawan**, Registered Electrical Engineer (Portfolio Code **2284**).

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Location

This project is standalone at:

`C:\Users\melbert.labawan\Desktop\melbert-portfolio`

It is separate from the StreetLight / `dwv` workspace.

## Quick Start

```powershell
cd C:\Users\melbert.labawan\Desktop\melbert-portfolio
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Build for Production

```powershell
npm run build
npm run preview
```

## Adding Your PDF Content & Images

The PDF (`Labawan Portfolio.pdf`) was not found automatically during setup. To complete the site with your actual portfolio assets:

### 1. Resume download

Copy your portfolio PDF to:

`public/resume/labawan-portfolio.pdf`

### 2. Profile photo

Add your professional photo to:

`public/images/profile/profile.jpg`

### 3. Work sample images

Add images extracted from the PDF to:

- `public/images/work-samples/sample-1.jpg`
- `public/images/work-samples/sample-2.jpg`
- `public/images/work-samples/sample-3.jpg`
- `public/images/work-samples/sample-4.jpg`

### 4. Technical drawings

Add drawing images to:

- `public/images/technical-drawings/drawing-1.jpg`
- `public/images/technical-drawings/drawing-2.jpg`
- `public/images/technical-drawings/drawing-3.jpg`

### 5. Certificates

Add certificate scans to:

- `public/images/certificates/cert-1.jpg` through `cert-4.jpg`

### 6. Update text content

Edit **`src/data/portfolio.ts`** to replace placeholder entries (marked with `[Update ...]` or `[Add ...]`) with exact resume details from your PDF:

- Work experience dates, roles, organizations
- Certificate organizations and dates
- Extracurricular activities and languages
- Career goal details for categories not yet filled in

## Project Structure

- `src/data/portfolio.ts` — all content (single source of truth)
- `src/components/sections/` — page sections
- `src/components/ui/` — reusable UI (lightbox, headings, backgrounds)
- `public/images/` — portfolio images

## Features

- Single-page responsive portfolio
- Sticky navigation with active section highlighting
- Work samples & technical drawing galleries with zoom lightbox
- Certificate gallery with prev/next navigation
- Expandable career goal cards
- Resume download, email, and phone contact links
- Dark engineering aesthetic with yellow accents
