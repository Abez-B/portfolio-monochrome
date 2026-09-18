# Plan Template: UI Improvement Specification

Use this template when writing implementation plans under `design-plans/`. Each plan must be completely self-contained so that any executing agent can execute it without prior conversation context.

---

```markdown
# UI Improvement Plan: [Surface Name / Feature]

**Target Surface**: [e.g., `src/pages/departments/[dept].astro`, `src/components/layout/Navbar.astro`]  
**Status**: Ready for Implementation  
**Governing Design Document**: `DESIGN.md` / `tailwind.config.ts`  
**Base Commit / Hash**: [Commit hash if available]

---

## 1. Summary of Changes
[Concise description of the visual/layout/copy correction being applied and why.]

---

## 2. Binding Design Evidence & Contract
- **Contract Source**: [Cite file & line number or token definition, e.g., `tailwind.config.ts` brand palette / `DESIGN.md` spacing rule]
- **Current Runtime Violation**: [Exact snippet or styling that violates the contract]
- **Expected Conformance**: [Exact value, class, token, or component structure expected]

---

## 3. Scope of Affected Files
| File Path | Description of Modification | Primitives / Tokens Used |
|---|---|---|
| `src/components/...` | [Specific change] | `brand-600`, `font-display`, etc. |

---

## 4. Step-by-Step Implementation Instructions
1. **[Step 1 Title]**:
   - In `[file path]`, replace `[old code snippet]` with `[new code snippet]`.
   - Ensure responsive modifiers (`sm:`, `md:`, `lg:`) maintain correct padding/margins.

2. **[Step 2 Title]**:
   - Reuse existing primitive `[Component/Class]` rather than inline duplicate styling.

---

## 5. Verification Checklist
- [ ] Visual hierarchy matches the governing design language tokens.
- [ ] Tested on mobile viewport (<640px), tablet (768px), and desktop (1024px+).
- [ ] No regression in interactive states (hover, focus-visible, active, disabled).
- [ ] Dark mode / High contrast contrast ratios meet WCAG 2.1 AA (4.5:1 minimum).
```
