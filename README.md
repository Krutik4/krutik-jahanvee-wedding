# Krutik & Jahanvee — cinematic wedding invitation

## Local development

```bash
npm install
npm run dev
npm run build
```

## Editing the invitation

All editable wedding content—including names, date/time, event details, venue links, RSVP and music source—lives in [`src/data/wedding.js`](src/data/wedding.js). Add final media under `public/assets/` using the organized `temple`, `wedding-square`, `decor`, `couple`, `events`, and `audio` directories. Optional image/audio files are intentionally graceful fallbacks.

## GitHub Pages

The Vite `base` is relative during GitHub Actions builds, so deployed assets work under `https://USERNAME.github.io/REPOSITORY/`. Push to `main` (or run the workflow manually) after enabling **Settings → Pages → GitHub Actions**.

## Decorative scroll assets

Copy the supplied files into `public/assets/decor/` with these exact names:

- `Lantern.svg`
- `Lotus 1 Left.svg`, `Lotus 1 Right.svg`
- `Leaf - Left.svg`
- `Flower - Left.svg`, `Flower - Right.svg`
- `Peacock Left.png`, `Peacock Right.png`

The scroll scene reads these names from `wedding.decor` in `src/data/wedding.js`. To use different filenames, edit only those values; the app resolves them through Vite's `import.meta.env.BASE_URL`, which keeps the paths correct both locally and beneath a GitHub Pages repository path.
