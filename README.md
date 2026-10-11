# Illam Interiors — website

Marketing site for **Illam Interiors** (இல்லம் இன்டீரியர்ஸ்), a premium Chennai studio led by Mohan, blending traditional work (vaasakal, pooja rooms, oonjal, carved wood) with modular interiors. Studio: No.16 Madaveethi Street, Narayanapuram, Pallikaranai, Chennai 600100 · +91 98408 49658.

Next.js (App Router, TypeScript, `src/`), Tailwind CSS v4, `next/font` (Cormorant Garamond + Manrope), `lucide-react`. Static except the contact Server Action. No database.

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
npm run lint && npm run build
```

## Where things live

| Path | What |
|---|---|
| `src/content/site.ts` | Name, owner, phone, WhatsApp, address, hours, socials, service areas, SEO title/description. **The only place contact details are written.** `// TODO: verify` marks values from the brief that conflict between sources. |
| `src/content/{services,projects,reviews,process,nav}.ts` | Page content |
| `src/lib/images.ts` | Unsplash placeholder helper + the placeholder pool |
| `src/lib/jsonld.ts` | LocalBusiness JSON-LD (injected in the root layout) |
| `src/components/` | UI. Client components: `ProjectGrid`, `Lightbox`, `ReviewCarousel`, `ContactForm`, `MobileNav` |
| `src/app/contact/actions.ts` | Contact Server Action (zod + honeypot + Resend) |

Design tokens (cream `#FAF7F2` bg, charcoal `#2A2522` text and copper `#A0642F` accent — both taken from the logo) are Tailwind theme variables in `src/app/globals.css`. `accent-dark` is a darker copper used for text so it meets WCAG contrast.

## Environment variables

| Var | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | for email | Resend API key |
| `CONTACT_TO_EMAIL` | for email | Where enquiries go (comma-separate multiple) |
| `CONTACT_FROM_EMAIL` | no | Verified Resend sender, e.g. `Illam Interiors <hello@yourdomain.com>` |

If the first two are unset (or sending fails), the form opens WhatsApp with the enquiry prefilled instead.

## Swapping in real images

Modular-style images in `src/content` are `unsplash(...)` placeholders with the intended local filename in a trailing comment. Traditional images are already local files in `public/images/traditional/` (see `T` in `src/lib/images.ts`). To use a real photo:

1. Put the file in `public/images/services/`, `public/images/projects/<slug>/` or `public/images/team/`.
2. Replace the `unsplash(...)` call with the path string, e.g. `src: "/images/services/kitchen.jpg"`.

Remove `images.unsplash.com` from `next.config.ts` once no placeholders remain.

## Adding a project

Append an entry to `src/content/projects.ts` (`slug`, `title`, `location`, `type`, `summary`, `cover`, `images`; `featured: true` shows it on the home page). The `/projects/[slug]` page, filter, lightbox and sitemap pick it up automatically. Services work the same way in `services.ts`.

## Deploy to Vercel

1. Push the repo to GitHub and **Import Project** in Vercel (framework preset: Next.js, no config needed).
2. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (and optionally `CONTACT_FROM_EMAIL`) under Settings → Environment Variables.
3. Deploy, then add the domain your domain (assumed `illaminteriors.com`) under Settings → Domains and update the DNS records Vercel shows.
4. In Resend, verify the sending domain before setting `CONTACT_FROM_EMAIL`.

## Photo credits

The traditional/Chettinad placeholder photos are open-licensed (CC0 / CC BY / CC BY-SA) and are credited at `/credits` (data in `src/content/credits.ts`). Delete a credit when you replace its photo; delete the `/credits` page and footer link once none remain.

## Before launch (open items, marked `TODO: verify` in the code)

- Replace all placeholder photos with Illam Interiors' own project photos; add real project names and locations (current projects are illustrative).
- Confirm business hours, domain (`illaminteriors.com` assumed), email and social links — none were supplied.
- Owner story on `/about` and the service list (pooja, oonjal, commercial) are drafted from the brief; confirm with Mohan.
- No reviews, ratings, years of experience, project counts or prices are shown, because none were supplied.
