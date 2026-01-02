# Tcode Farms Website

A professional, mobile-first poultry farm website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- ✅ Mobile-first responsive design
- ✅ SEO optimized with meta tags
- ✅ WhatsApp integration
- ✅ Contact forms with React Hook Form
- ✅ Email subscription forms
- ✅ Consultation booking system
- ✅ Professional UI with Nigerian flag colors (Green, White, Gold)

## Pages

- **Home** (`/`) - Hero section with farm achievements
- **About Us** (`/about`) - Farm details and story
- **Products & Services** (`/products`) - Products with pricing and forms
- **Daily Farm Reports** (`/reports`) - Blog-style reports page
- **Contact** (`/contact`) - Contact form and information

## Customization

### Update Egg Price

Edit the `EGG_CRATE_PRICE` constant in `app/products/page.tsx`:

```typescript
const EGG_CRATE_PRICE = 4900; // Update this value
```

### Update Images

Replace placeholder images with your own:

- Hero background: `app/page.tsx`
- About page images: `app/about/page.tsx`
- Product images: `app/products/page.tsx`

## Deployment

This project is ready to deploy to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Hook Form
- Zod (form validation)
