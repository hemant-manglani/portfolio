# Hemant Manglani — Portfolio

A cinematic, conversion-focused portfolio built to win high-ticket international clients.
Next.js 16 (App Router) · TypeScript · Tailwind v4 · React Three Fiber · Motion · Lenis.

Positioning, case-study structure and trust signals follow *The Overlap* playbook; the 3D hero is
the one bold visual moment, built to stay fast and accessible.

## Run it

```bash
npm run dev      # local dev at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Before you launch — swap these in

1. **Photo** — the real portrait lives at `public/hemant_profile.png` and is wired into
   `components/hero/Portrait.tsx`, `app/about/page.tsx`, and `components/sections/FinalCTA.tsx`.
2. **Links** — `content/site.ts`: `linkedin`, `github`, `calLink` (Cal.com/Calendly), and `url`
   (already `https://hemant-manglani.com`, used for SEO/OG).
3. **Résumé** — the PDF is at `public/Hemant_Manglani_Backend_Engineer.pdf` (matches
   `site.resumeHref`).
4. **Live project URLs** — `content/projects.ts`: every case study currently defaults to `nda: true`,
   which renders a "private walkthrough on a call" note instead of a link. For any project that is
   publicly visitable, add `liveUrl: "https://…"` and a "Visit live site" button replaces the NDA
   note (and the work list shows a "Live site" chip instead of "NDA").
5. **Real metrics** — `content/projects.ts`: replace the qualitative `results` (marked
   `// TODO(metric)`) with real numbers as you get them. Add real client `quote`s when you have them
   (currently omitted rather than faked).

## Contact form (Brevo via `send-email.php`)

The site is a static export, so the `/contact` form posts to a small PHP endpoint that ships in
`public/send-email.php` and deploys **next to the site** on Hostinger (same origin, no Next.js API
route). That script sends the enquiry through Brevo's transactional API and delivers it to
`hemant.manglani01@gmail.com`.

On the server, create `public_html/.env` with your Brevo key (see `send-email.env.example`):

```
BREVO_API_KEY=xkeysib-...        # Brevo transactional API key
```

The Brevo `sender` in `send-email.php` (`contact@pyonix.in`) must be a verified sender in that
Brevo account. The form endpoint defaults to same-origin `/send-email.php`; override with
`NEXT_PUBLIC_CONTACT_ENDPOINT` at build time if you move it.

## Design tokens

Colors, fonts and motion easing live in `app/globals.css` under `@theme`. The palette is a cool
near-black with a signature vivid-violet accent (`#8750f7`); type is **Sora** everywhere with
**Russo One** for heavy display numerals (Gerold theme pairing).

## Deploy (Hostinger, static)

`npm run build` emits a fully static site into `out/` (`output: "export"` + `trailingSlash`). Upload
the contents of `out/` to Hostinger's `public_html` (or zip `out/` and extract it there). No Node
runtime is required. Point the `hemant-manglani.com` domain at that hosting.
