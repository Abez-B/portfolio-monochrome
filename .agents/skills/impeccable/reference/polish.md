# Polish Reference: Final Frontend Quality Pass

Execute these passes before finalizing any UI surface:

1. **Borders & Separators**:
   - Soften harsh borders: use `border-slate-200/80` (or `dark:border-slate-800`) instead of hard saturated borders.
   - Use subtle divider rules with consistent spacing (`divide-y divide-slate-100`).

2. **Shadows & Elevation**:
   - Replace default harsh shadows with layered, atmospheric shadows: `shadow-sm`, `shadow-md shadow-slate-200/50`, `hover:shadow-lg transition-shadow duration-200`.

3. **Card Consistency**:
   - Ensure uniform border radius (`rounded-xl` or `rounded-2xl`).
   - Match padding rhythm across all sibling cards (`p-6` on desktop, `p-4` on mobile).

4. **Badge & Pill Polishing**:
   - Badges should have matching subtle backgrounds and crisp text: `bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-700/10 rounded-full px-2.5 py-0.5 text-xs font-medium`.
