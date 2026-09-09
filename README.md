# Leo Di Primo — Portfolio

Single-page portfolio built with React 19, Vite 8 and Tailwind CSS v4.

Live site: https://leonardodiprimo-portfolio.vercel.app

## Getting started

```bash
npm install
npm run dev      # dev server with HMR at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve dist/ locally
npm run lint     # ESLint over the whole repo
```

## Structure

```
src/
  data/         all site content as exported constants
  sections/     one folder per page section
  components/   layout and UI primitives, plus icons
  hooks/        custom hooks (theme, scroll, reveal)
  lib/          helpers
  index.css     Tailwind setup + theme tokens
```

## License

All rights reserved.
