# Gonzalez&Co Construction/Roofing Website

Modern single-page Next.js website for Gonzalez&Co Construction/Roofing, a local general contractor serving Belton, Temple, and nearby Central Texas.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- TypeScript

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project Structure

- `app/page.tsx` - Single-page website content, sections, local SEO schema, and CTAs
- `app/layout.tsx` - Metadata and app shell
- `app/globals.css` - Tailwind setup and shared global styles
- `components/QuoteForm.tsx` - Front-end quote request form with validation and success state
- `public/gonzalez-co-logo.png` - Provided Gonzalez&Co logo

## Form Notes

The quote form is front-end only for now. It uses semantic fields and browser validation so it can later be connected to Google Sheets, Zapier, Formspree, a CRM, or a custom API route.

## Business Disclaimer

The site avoids unverifiable license, certification, insurance, bonded, or award claims. Project availability, scheduling, and estimates should be confirmed directly with Gonzalez&Co Construction/Roofing.
