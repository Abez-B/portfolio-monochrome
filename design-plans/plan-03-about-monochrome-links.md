# UI Improvement Plan: Monochrome Link Styling in About Component

**Target Surface**: `src/components/About/About.tsx`  
**Status**: Ready for Implementation  
**Governing Design Document**: `tailwind.config.js`, `src/index.css`  
**Base Commit / Hash**: `67b61e885434bad37eb30d14a26d9b2d824195aa`

---

## 1. Summary of Changes
Replace un-tokenized blue link utility classes in `About.tsx` (`text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200`) with governing monochrome link classes (`text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300`) to restore visual consistency across all portfolio text links.

---

## 2. Binding Design Evidence & Contract
- **Contract Source**: `tailwind.config.js` (Lines 15–32) restricts the color system to `black`, `white`, and `gray-50` through `gray-900`. Across all other surfaces (`Header.tsx`, `Footer.tsx`, `Hero.tsx`, `Contact.tsx`), link and action typography strictly uses monochrome tokens.
- **Current Runtime Violation**: `src/components/About/About.tsx` (Lines 34 & 70) applies:
  ```tsx
  className="inline-flex items-center gap-1 font-semibold underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors ml-1 font-mono text-xs"
  ```
  This introduces saturated blue colors that break the monochrome glassmorphism aesthetic.
- **Expected Conformance**: Inline external links in `About.tsx` must conform to the monochrome token system using `text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300`.

---

## 3. Scope of Affected Files
| File Path | Description of Modification | Primitives / Tokens Used |
|---|---|---|
| `src/components/About/About.tsx` | Replace blue text and hover utilities on FOSSGCEE and custom section external links | `text-black`, `dark:text-white`, `hover:text-gray-600`, `dark:hover:text-gray-300`, `font-mono` |

---

## 4. Step-by-Step Implementation Instructions
1. **Update FOSSGCEE Link in `src/components/About/About.tsx`**:
   - In Line 34, replace:
     ```tsx
     className="inline-flex items-center gap-1 font-semibold underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors ml-1 font-mono text-xs"
     ```
     with:
     ```tsx
     className="inline-flex items-center gap-1 font-semibold underline text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors ml-1 font-mono text-xs"
     ```

2. **Update Custom Section Links in `src/components/About/About.tsx`**:
   - In Line 70, replace:
     ```tsx
     className="inline-flex items-center gap-1 font-semibold underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors ml-1 font-mono text-xs"
     ```
     with:
     ```tsx
     className="inline-flex items-center gap-1 font-semibold underline text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors ml-1 font-mono text-xs"
     ```

---

## 5. Verification Checklist
- [ ] In light mode, links in the About section render with crisp black text (`text-black`) and transition to gray (`text-gray-600`) on hover.
- [ ] In dark mode, links in the About section render with white text (`dark:text-white`) and transition to light gray (`dark:hover:text-gray-300`) on hover.
- [ ] The external link icon and mono font styling (`font-mono text-xs`) remain intact.
