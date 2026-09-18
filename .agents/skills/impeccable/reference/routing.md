# Routing & Command Dispatch Reference

When handling UI design requests, route based on the primary user intent:

## Intent Matrix
| Request Keyword / Intent | Recommended Action | Focus Area |
|---|---|---|
| `audit`, `review`, `check` | Run technical quality check | A11y, responsiveness, token alignment |
| `polish`, `refine`, `clean up` | Polish UI passes | Micro-interactions, spacing, border contrast |
| `bolder`, `modernize`, `premium` | Elevate visual hierarchy | Deeper typography contrast, richer shadows, accent glow |
| `quieter`, `simplify`, `distill` | Reduce cognitive clutter | Remove redundant borders, flatten nested cards, tighten whitespace |
| `typeset`, `typography`, `fonts` | Typographic refinement | Hierarchy, line-heights, tracking, font-pairing |
| `layout`, `spacing`, `grid` | Spatial reorganization | 8pt rhythm, column balance, card flow |
| `animate`, `motion`, `transition` | Motion design | Micro-transitions, entrance animations, reduced-motion fallbacks |
| `clarify`, `copy`, `labels` | UX copy optimization | Action-oriented button labels, concise error states |

## Workflow Questions
When the user asks for guidance on which direction to take:
1. Identify the primary persona (prospective student, current student, faculty, recruiter, regulatory inspector).
2. Clarify whether the task is refinement of existing identity or replacement visual world.
3. Recommend the highest-leverage single command.
