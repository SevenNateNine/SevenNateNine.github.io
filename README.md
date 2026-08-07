# sevennatenine.github.io

Personal site — [sevennatenine.github.io](https://sevennatenine.github.io)

Vite · React 19 · TypeScript · Tailwind CSS v4. No CDNs; fonts are self-hosted
through `@fontsource`.

## Develop

```bash
npm install
npm run dev
```

## Editing content

Every string on the site lives in [`src/content/resume.ts`](src/content/resume.ts) —
profile, about, experience, projects, skills, education. The components render that
data and hold no copy of their own, so content edits should never need to touch JSX.

The linked résumé is `public/resume.pdf`, served at `/resume.pdf`. Regenerate it by
exporting the latest `.docx` to PDF at that path.

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds and publishes to GitHub Pages.

This requires **Settings → Pages → Source** to be set to **GitHub Actions**. With the
older "Deploy from a branch" setting the workflow still runs green but nothing is
published.
