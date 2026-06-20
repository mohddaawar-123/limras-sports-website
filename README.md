# Limras Sports — Premium Website

A fully functional, production-ready website for Limras Sports built with React, Three.js and Framer Motion.

---

## ✅ What's already working (no setup needed)

- **WhatsApp inquiries** — every "Inquire" / "Request a Quote" button opens WhatsApp
  pre-filled with the customer's details, sent directly to **+91 82794 04924**. This works
  immediately, with zero configuration.
- All 6 pages (Home, Products, Product Detail, About, Cities We Serve, Catalog, Contact)
- 93 real products (85 from your catalog + 8 standalone hero pieces) with working
  Inquire/WhatsApp buttons on every card
- 3D rotating trophy on the homepage (falls back to a static image automatically on
  older devices/browsers)
- Full-text product search + category filtering
- Downloadable PDF catalog + inline catalog preview
- SEO meta tags, sitemap.xml, robots.txt, and structured data (Schema.org) on every page

---

## 🔧 One thing YOU need to do — connect email backend (5 minutes)

You chose to also receive inquiries by **email** in addition to WhatsApp. To activate this:

1. Go to **https://formspree.io** and sign up free (no credit card).
2. Create a new form, and set the notification email to whichever inbox you want
   inquiries delivered to.
3. Copy the **Form ID** Formspree gives you (looks like `xeqyzklm`).
4. Open `src/utils/inquiry.js` and replace this line:
   ```js
   export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your real ID:
   ```js
   export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeqyzklm";
   ```
5. Rebuild and redeploy (`npm run build`, then re-upload the `dist` folder — or just
   push to GitHub if connected to Vercel/Netlify, which auto-rebuilds).

**Until you do this, WhatsApp delivery still works perfectly** — email is an additive
backup channel, not a blocker.

---

## 🚀 Deploying the site

This is a static site (HTML/CSS/JS) — it can be hosted anywhere for free or near-free.

### Option A — Vercel (recommended, easiest)
1. Push this folder to a GitHub repository.
2. Go to vercel.com → "New Project" → import the repo.
3. Vercel auto-detects Vite. Click Deploy. Done in ~60 seconds.
4. Add your custom domain (e.g. `limrassports.com`) under Project Settings → Domains.

### Option B — Netlify
1. Push to GitHub, or drag-and-drop the `dist` folder directly at app.netlify.com/drop.
2. Build command: `npm run build` · Publish directory: `dist`
3. The included `public/_redirects` file already handles routing correctly.

### Manual build
```bash
npm install
npm run build
# Upload the contents of the `dist/` folder to any static host
```

---

## 🖼️ Managing products

All product data lives in **`src/data/products.js`** — no database needed.

- The 85 catalog products (LS-101 through LS-185) are auto-generated from a single array
  at the top of the file — edit names, descriptions, sizes, or materials there.
- The 8 "hero" products (the high-resolution standalone photos you sent) are listed
  individually below that, in `heroProducts`.
- To add a brand new product: add an image to `public/images/products/`, then add an
  entry to the `heroProducts` array following the existing pattern.

Company details (phone, WhatsApp, GSTIN, address) live in **`src/data/company.js`** —
update once, and it updates everywhere on the site automatically.

---

## 🗺️ Domain & SEO checklist before going fully live

- [ ] Update `SITE_URL` in `src/components/SEO.jsx` if your final domain differs from
      `limrassports.com`
- [ ] Update `public/sitemap.xml` and `public/robots.txt` to match your final domain
- [ ] Submit the sitemap to Google Search Console after deploying
- [ ] Replace the placeholder Google Maps embed in `src/pages/Contact.jsx` with your
      exact pinned location if needed (currently centered on Ashok Nagar, Moradabad)

---

## 🛠️ Local development

```bash
npm install
npm run dev      # starts local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

---

## 📁 Project structure

```
src/
  components/   → Navbar, Footer, ProductCard, Trophy3D, InquiryModal, etc.
  pages/        → Home, Products, ProductDetail, About, CitiesWeServe, Catalog, Contact
  data/         → products.js (catalog), company.js (business details)
  utils/        → inquiry.js (WhatsApp + email submission logic)
  context/      → InquiryContext.jsx (global "Request a Quote" modal state)
public/
  images/       → all product photography
  catalog/      → your original PDF catalog (downloadable as-is)
```

---

Questions or want a feature added (live chat, payment gateway, admin panel for editing
products without code)? Just ask.
