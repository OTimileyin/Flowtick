# Flowtick — Design Quality Guidelines

## Product-first design
Make the actual product experience the main visual.

Use specific copy that explains what Flowtick does.

Avoid vague marketing language that could apply to any app.

## Avoid generic AI-design patterns
Do not default to:
- purple-and-black themes
- rainbow gradients
- neon palettes
- radial glow orbs
- dot-grid backgrounds
- liquid-glass effects
- sparkle icons
- decorative emoji
- animated arrows
- shadows on every element
- rounded cards everywhere
- three identical feature cards
- bento grids without a real need
- fake pricing sections

## Visual direction
Flowtick should feel:
- calm
- clean
- intentional
- product-focused
- modern
- readable
- spacious

Preferred direction:
- near-white or warm neutral background
- dark readable text
- one restrained accent color
- hierarchy through typography, spacing, alignment, and scale
- generous whitespace

## Motion
Motion should be restrained and purposeful.

Allowed:
- subtle task-entry transition
- small completion-state transition
- gentle focus/hover feedback
- short filter transition

Rules:
- do not animate every hover
- respect `prefers-reduced-motion`
- do not introduce artificial delays
- do not use animation to hide slow behavior

## Content integrity
Never invent:
- testimonials
- customer logos
- user counts
- usage statistics
- ratings
- awards
- press mentions
- pricing
- business claims

## Build workflow
1. Read the project documentation.
2. Inspect the current project.
3. Preserve working features.
4. Build one representative section first.
5. Check desktop and mobile.
6. Extend only after the direction works.
7. Test the main user action end-to-end.
8. Report what was actually tested.
