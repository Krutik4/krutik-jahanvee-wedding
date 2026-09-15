# Krutik & Jahanvee — cinematic wedding invitation

## Local development

```bash
npm install
npm run dev
npm run build
```

## Cinematic scene foundation

The current build intentionally contains only the opening temple sequence. One
application-level GSAP `ScrollSmoother` and a scrubbed `ScrollTrigger` timeline pin
the temple, reveal its ornaments, open the two doors, and move toward the mandap.

To display ScrollTrigger markers in development, copy `.env.example` to `.env.local`
and set `VITE_ENABLE_ANIMATION_DEBUG=true`. The flag is ignored in production builds.

## Editing the invitation

All editable wedding content—including names, date/time, event details, venue links, RSVP and music source—lives in [`src/data/wedding.js`](src/data/wedding.js). Add final media under `public/assets/` using the organized `temple`, `wedding-square`, `decor`, `couple`, `events`, and `audio` directories. Optional image/audio files are intentionally graceful fallbacks.

## GitHub Pages

The Vite `base` is relative during GitHub Actions builds, so deployed assets work under `https://USERNAME.github.io/REPOSITORY/`. Push to `main` (or run the workflow manually) after enabling **Settings → Pages → GitHub Actions**.
