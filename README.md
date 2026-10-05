# Interiors By RB — website

Marketing site for Interiors By RB (@InteriorsByRB) — luxury interiors and turnkey solutions, Pune • Mumbai. Next.js (App Router, TypeScript, `src/`), Tailwind CSS v4, `next/font` (Cormorant Garamond + Manrope), `lucide-react`. Fully static except the contact Server Action. No database.

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
npm run lint && npm run build
```

## Where things live

| Path | What |
|---|---|
| `src/content/site.ts` | Name, phone, WhatsApp, email, cities, hours, socials, experience/project counts, SEO title/description. **The only place contact details are written.** `// TODO: verify` marks values from the brief that conflict between sources. |
| `src/content/{services,projects,reviews,process,nav}.ts` | Page content |
| `src/lib/images.ts` | Unsplash placeholder helper + the placeholder pool |
| `src/lib/jsonld.ts` | LocalBusiness JSON-LD (injected in the root layout) |
| `src/components/` | UI. Client components: `ProjectGrid`, `Lightbox`, `ReviewCarousel`, `ContactForm`, `MobileNav` |
| `src/app/contact/actions.ts` | Contact Server Action (zod + honeypot + Resend) |

Design tokens (`#FAF7F2` bg, `#1F1F1F` text, `#B08D57` accent, `#8A8178` muted) are Tailwind theme variables in `src/app/globals.css`. Note: the accent text colour (`accent-dark`) is a darker shade of `#B08D57` so text meets WCAG contrast.

## Environment variables

| Var | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | for email | Resend API key |
| `CONTACT_TO_EMAIL` | for email | Where enquiries go (comma-separate multiple) |
| `CONTACT_FROM_EMAIL` | no | Verified Resend sender, e.g. `Interiors By RB <hello@interiorsbyrb.com>` |

If the first two are unset (or sending fails), the form opens WhatsApp with the enquiry prefilled instead.

## Swapping in real images

Every image in `src/content` is an `unsplash(...)` call with the intended local filename in a trailing comment. To use a real photo:

1. Put the file in `public/images/services/`, `public/images/projects/<slug>/` or `public/images/team/`.
2. Replace the `unsplash(...)` call with the path string, e.g. `src: "/images/services/kitchen.jpg"`.

Remove `images.unsplash.com` from `next.config.ts` once no placeholders remain.

## Adding a project

Append an entry to `src/content/projects.ts` (`slug`, `title`, `location`, `type`, `summary`, `cover`, `images`; `featured: true` shows it on the home page). The `/projects/[slug]` page, filter, lightbox and sitemap pick it up automatically. Services work the same way in `services.ts`.

## Deploy to Vercel

1. Push the repo to GitHub and **Import Project** in Vercel (framework preset: Next.js, no config needed).
2. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (and optionally `CONTACT_FROM_EMAIL`) under Settings → Environment Variables.
3. Deploy, then add the domain your domain (assumed `interiorsbyrb.com`) under Settings → Domains and update the DNS records Vercel shows.
4. In Resend, verify the sending domain before setting `CONTACT_FROM_EMAIL`.

## Before launch (open items, all marked `TODO: verify` in the code)

- **Phone, WhatsApp number, email and social links are placeholders** in `src/content/site.ts` — the phone number was cut off in the brief.
- Project count: the brief said both "200+" and "600+"; the site uses 600+.
- Add studio addresses (and a map embed) for Pune and Mumbai.
- Confirm the domain, business hours, and the service list.
- Replace placeholder projects/photos and add the logo. No reviews, ratings or pricing are shown yet — add real ones when available.
