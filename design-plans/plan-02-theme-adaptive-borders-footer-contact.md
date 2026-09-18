# UI Improvement Plan: Theme-Adaptive Borders in Footer and Contact Surfaces

**Target Surface**: `src/components/Footer/Footer.tsx`, `src/components/Contact/Contact.tsx`  
**Status**: Ready for Implementation  
**Governing Design Document**: `tailwind.config.js`, `src/index.css`  
**Base Commit / Hash**: `67b61e885434bad37eb30d14a26d9b2d824195aa`

---

## 1. Summary of Changes
Replace hardcoded `border-white/10` and `bg-white/5` utilities in the Footer and Contact components with theme-adaptive pairs (`border-black/10 dark:border-white/10` and `bg-black/5 dark:bg-white/5`) so structural dividers and platform card borders are crisp and visible in both light and dark modes.

---

## 2. Binding Design Evidence & Contract
- **Contract Source**: System convention established in `src/components/Header/Header.tsx` (Lines 57–58) and `src/components/FloatingActionIsland.tsx` (Line 17), where theme boundaries use paired classes `border-black/10 dark:border-white/10` and `bg-white/85 dark:bg-black/85`.
- **Current Runtime Violation**:
  - `src/components/Footer/Footer.tsx` (Line 10): `<footer className="... border-t border-white/10 dark:border-white/10 backdrop-blur-sm bg-white/5 dark:bg-white/5 ...">` applies 10% translucent white borders and white background on a white canvas in light mode.
  - `src/components/Contact/Contact.tsx` (Lines 186, 187, 201): Hardcodes `border-white/10` on the platform container, divider header, and individual platform cards without light mode equivalents.
- **Expected Conformance**: All structural borders and container backgrounds must use theme-paired classes (`border-black/10 dark:border-white/10`, `bg-black/5 dark:bg-white/5`).

---

## 3. Scope of Affected Files
| File Path | Description of Modification | Primitives / Tokens Used |
|---|---|---|
| `src/components/Footer/Footer.tsx` | Update footer element's top border and background to theme-paired classes | `border-black/10 dark:border-white/10`, `bg-black/5 dark:bg-white/5` |
| `src/components/Contact/Contact.tsx` | Update platform section container, header separator, and platform cards to use theme-paired border classes | `border-black/10 dark:border-white/10` |

---

## 4. Step-by-Step Implementation Instructions
1. **Update `src/components/Footer/Footer.tsx`**:
   - In Line 10, replace:
     ```tsx
     <footer className="text-black dark:text-white pt-8 pb-28 md:pb-10 px-4 text-center border-t border-white/10 dark:border-white/10 backdrop-blur-sm bg-white/5 dark:bg-white/5 relative z-10">
     ```
     with:
     ```tsx
     <footer className="text-black dark:text-white pt-8 pb-28 md:pb-10 px-4 text-center border-t border-black/10 dark:border-white/10 backdrop-blur-sm bg-black/5 dark:bg-white/5 relative z-10">
     ```

2. **Update `src/components/Contact/Contact.tsx`**:
   - In Line 186, replace:
     ```tsx
     <div className="glass-card p-5 sm:p-8 mb-10 shadow-xl border border-white/10">
     ```
     with:
     ```tsx
     <div className="glass-card p-5 sm:p-8 mb-10 shadow-xl border border-black/10 dark:border-white/10">
     ```
   - In Line 187, replace:
     ```tsx
     <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
     ```
     with:
     ```tsx
     <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3 mb-6">
     ```
   - In Line 201, replace:
     ```tsx
     <div
       key={platform.id}
       className="glass-card p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:scale-[1.02] border border-white/10"
     >
     ```
     with:
     ```tsx
     <div
       key={platform.id}
       className="glass-card p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:scale-[1.02] border border-black/10 dark:border-white/10"
     >
     ```

---

## 5. Verification Checklist
- [ ] In light mode, the top divider of the Footer clearly delineates the footer from the main content.
- [ ] In light mode, the Contact "Scan and connect" island and platform cards display visible 10% black borders consistent with Header and Floating Island components.
- [ ] In dark mode, all borders retain their existing 10% white translucency (`dark:border-white/10`).
