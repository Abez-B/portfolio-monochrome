# Craft Floor: Non-Negotiable Frontend Quality Standards

Every UI change must pass this craft floor before completion.

---

## 1. Typography & Hierarchy
- **Scales & Rhythm**: Never use arbitrary font sizes. Use consistent type scale (`text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`).
- **Leading & Line Length**: Keep body text max-width between 45–75 characters (`max-w-prose` / `max-w-2xl` or `max-w-3xl`) with `leading-relaxed`.
- **Heading Line Heights**: Headings (`h1`-`h3`) must use tight leading (`leading-tight` or `leading-snug`).
- **Weights**: Maximum 3 font weights per view (e.g. Regular 400, Medium 500, Bold 700).

---

## 2. Spatial System & Alignment
- **8pt Grid**: Use multiples of 4px / 8px for margins, paddings, and gap tokens (`p-2`, `p-4`, `p-6`, `p-8`, `gap-3`, `gap-6`).
- **Visual Balance**: Card padding should scale proportionally to card content density.
- **Alignment**: Every interactive control, icon, and label must have precise optical alignment (`inline-flex items-center gap-2`).

---

## 3. Color & Contrast (WCAG 2.1 AA)
- **Normal Text**: Contrast ratio >= 4.5:1 against background.
- **Large Text (18pt+ / 14pt bold+)**: Contrast ratio >= 3.0:1 against background.
- **UI Components & Borders**: Active and focused states must have >= 3.0:1 contrast against adjacent colors.
- **No Pure Black on Pure White**: Prefer rich neutrals (e.g., `slate-900` / `gray-900` on `white` or `slate-50`).

---

## 4. Interaction States & Transitions
- **Hover & Active**: Every clickable element (button, link, card) must have subtle, intentional feedback (`transition-colors duration-150`, `hover:bg-...`, `active:scale-[0.99]`).
- **Focus Rings**: Never remove `outline: none` without providing a prominent `:focus-visible` ring (`focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2`).
- **Motion Restraint**: Use purposeful transitions (150ms–300ms) with `ease-out` or `cubic-bezier`. Respect `prefers-reduced-motion`.

---

## 5. Mobile & Responsive Discipline
- **Touch Targets**: Minimum 44x44px for touchable targets on mobile.
- **No Horizontal Scroll**: Zero layout overflow on 320px–375px mobile screens.
- **Responsive Tables**: Wrap data tables in `overflow-x-auto` with sticky headers or provide responsive card views for mobile.
