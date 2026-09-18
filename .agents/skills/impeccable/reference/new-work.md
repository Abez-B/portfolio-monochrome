# New Work Reference: Building Surfaces from Scratch or Redesign

When creating a new surface or executing a full redesign:

## 1. Discover the Mode
- **Persuade**: Landing pages, recruitment showcases, hero intros, prospective student admissions. High emotional resonance, bold visuals, clear CTAs.
- **Operate**: Portals, search filters, student/faculty dashboards, CMS editors, fee calculators. High information density, scannability, deterministic controls.
- **Read**: Syllabus, academic regulations, research papers, circulars, committee records. Clean typography, high readability, distraction-free reading measure.
- **Experience**: Virtual campus tours, interactive timeline, alumni spotlight, photo gallery. Immersive layouts, fluid media, minimal chrome.

## 2. Design Hierarchy & Visual Anchors
1. **Hero & Intent**: State primary purpose within the top 300px of the viewport.
2. **Contextual Navigation**: Provide breadcrumbs and section anchor links for deep documents.
3. **Structured Cards & Grid**: Group related information into structured semantic cards.
4. **Actionable Footers**: Next steps, related circulars, download links, or relevant contacts.

## 3. Implementation Workflow
- Use Astro components with modular props.
- Leverage Tailwind utility classes mapped to design system tokens (`brand`, `accent`, `font-display`, `font-body`).
- Validate across viewport breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
