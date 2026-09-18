# Operate Reference: Designing High-Utility Workflows & Admin Interfaces

When designing task-oriented interfaces (e.g. CMS portals, search tables, fee payment forms, faculty directories):

## Principles of Operate Surfaces
1. **Scannability First**:
   - Use tabular layouts with clear column headers and right-aligned numeric data.
   - Employ status badges with consistent semantic color coding (Green: Published/Active, Amber: Pending/Notice, Red: Deadline/Urgent).

2. **Predictable Filtering & Search**:
   - Provide instant keyword search, dropdown filters for department/category, and clear reset buttons.
   - Keep filter counts visible (e.g. "Showing 12 of 48 faculty members").

3. **Form Ergonomics**:
   - Group related form fields under clear subheadings (`legend` / fieldset).
   - Show helpful inline hints below inputs (`text-xs text-slate-500`).
   - Highlight required fields clearly and provide actionable validation errors next to the input.

4. **Empty & Error States**:
   - Never display a blank white page when search returns zero results.
   - Include a clear empty state illustration/icon, message ("No circulars found for year 2024"), and a reset action button.
