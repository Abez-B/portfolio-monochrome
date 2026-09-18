# Audit Reference: Frontend Technical Quality Checks

Use this checklist during technical design audits:

## 1. Accessibility (WCAG 2.1 AA)
- [ ] Color contrast passes 4.5:1 (normal text) and 3:1 (large text / UI controls).
- [ ] All images have descriptive `alt` tags or `alt=""` if decorative.
- [ ] All interactive buttons and links have accessible text or `aria-label`.
- [ ] Form inputs have associated `<label>` elements via `for`/`id` or nesting.
- [ ] Heading levels (`h1` -> `h2` -> `h3`) follow strict semantic hierarchy without skipping.

## 2. Responsive & Layout Viewport Checks
- [ ] Mobile Viewport (320px - 480px): No horizontal overflow, touch targets >= 44x44px.
- [ ] Tablet Viewport (768px - 1024px): Multi-column grids adapt to 2 columns smoothly.
- [ ] Desktop Viewport (1280px+): Container max-width constrained (`max-w-7xl mx-auto`).

## 3. Performance & Asset Hygiene
- [ ] Images use modern formats (WebP, AVIF) with explicit `width` and `height` to prevent layout shifts.
- [ ] Font files use `font-display: swap`.
- [ ] Icons use lightweight SVG / Lucide components instead of bulky icon font packages.
