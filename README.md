# Colophon landing page

Landing page for Colophon, a CMS where every publish becomes a numbered release. Built with React 19 + TypeScript (Vite).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Structure

- `src/styles/global.css` — fonts, colour tokens, type presets, breakpoints (desktop ≥1200, tablet 810–1199, phone <810)
- `src/components/ui/` — shared primitives: `Button`, `Badge`, `Icon` (SVG-mask icons), `Reveal` (scroll fade-in), `PixelLogo`
- `src/components/*.tsx` — one component per page section, each with a co-located CSS module
- `public/` — images, fonts and icon SVGs downloaded from the source site
