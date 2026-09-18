# Animation & Motion System Guide

## Core Motion Values
- **Durations**:
  - Fast feedback (button hover, badge toggle): `150ms`
  - Medium transitions (dropdowns, accordions, modals): `200ms`–`300ms`
  - Large reveals (page fade, hero entrance): `400ms`–`500ms`
- **Timing Functions**: `cubic-bezier(0.16, 1, 0.3, 1)` or `ease-out`

## Accessibility & Reduced Motion
Always wrap CSS keyframe animations and transitions with `motion-reduce:transition-none` and `motion-reduce:animate-none`:
```html
<div class="transition-all duration-300 motion-reduce:transition-none">...</div>
```

## Running Marquee / Flash Circulars
- Running circulars marquee must pause on mouse hover and keyboard focus:
```html
<div class="marquee-track hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
  ...
</div>
```
