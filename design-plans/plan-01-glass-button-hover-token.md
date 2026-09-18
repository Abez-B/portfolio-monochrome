# UI Improvement Plan: Glass Button Hover State Token Alignment

**Target Surface**: `src/index.css`  
**Status**: Ready for Implementation  
**Governing Design Document**: `src/index.css`, `tailwind.config.js`  
**Base Commit / Hash**: `67b61e885434bad37eb30d14a26d9b2d824195aa`

---

## 1. Summary of Changes
Align `.glass-btn:hover` border color tokens with the theme system so that hovering over glass buttons in light mode darkens the border boundary (`rgba(0, 0, 0, 0.30)`) instead of setting a white border (`rgba(255, 255, 255, 0.30)`), which currently washes out button edges against the light backdrop.

---

## 2. Binding Design Evidence & Contract
- **Contract Source**: `src/index.css` Lines 40 & 53 define `--glass-btn-border: rgba(0, 0, 0, 0.15)` for `:root` (light mode) and `--glass-btn-border: rgba(255, 255, 255, 0.20)` for `.dark` (dark mode).
- **Current Runtime Violation**: `src/index.css` Lines 98–101 hardcode a single global hover rule:
  ```css
  .glass-btn:hover {
    background: var(--glass-tag-bg);
    border-color: rgba(255, 255, 255, 0.3);
  }
  ```
  At runtime in light mode, hovering over any `.glass-btn` element changes the border from dark translucent black (`rgba(0, 0, 0, 0.15)`) to white (`rgba(255, 255, 255, 0.3)`), causing button outlines to disappear or flash against the white background.
- **Expected Conformance**: In light mode, `.glass-btn:hover` must use `border-color: rgba(0, 0, 0, 0.30);`. In dark mode (`.dark .glass-btn:hover`), it must use `border-color: rgba(255, 255, 255, 0.30);`.

---

## 3. Scope of Affected Files
| File Path | Description of Modification | Primitives / Tokens Used |
|---|---|---|
| `src/index.css` | Update `.glass-btn:hover` to use theme-scoped border colors for light and dark modes | `--glass-tag-bg`, `--glass-btn-border`, `.dark` |

---

## 4. Step-by-Step Implementation Instructions
1. **Update `.glass-btn:hover` in `src/index.css`**:
   - Locate the `.glass-btn:hover` block around lines 98–101:
     ```css
     .glass-btn:hover {
       background: var(--glass-tag-bg);
       border-color: rgba(255, 255, 255, 0.3);
     }
     ```
   - Replace it with:
     ```css
     .glass-btn:hover {
       background: var(--glass-tag-bg);
       border-color: rgba(0, 0, 0, 0.3);
     }

     .dark .glass-btn:hover {
       border-color: rgba(255, 255, 255, 0.3);
     }
     ```

---

## 5. Verification Checklist
- [ ] In light mode, hovering over Hero CTA buttons, ProjectCard "Live Demo" / "GitHub Repo" buttons, ProjectModal action buttons, and the Contact form submit button preserves and deepens the dark border boundary.
- [ ] In dark mode, hovering over buttons continues to display the frosted translucent white border (`rgba(255, 255, 255, 0.3)`).
- [ ] No regression in CSS transitions or hardware acceleration properties (`will-change: transform`, `translateZ(0)`).
