# Portfolio Enhancement Summary

This document explains what changed in the `pm-portfolio-enhancements` branch and why each change matters. It is written as a learning guide, so each file includes both a plain-English summary and the coding/design idea behind the change.

## Branch Overview

Branch: `pm-portfolio-enhancements`

Base branch: `main`

Main goal: make the portfolio feel more aligned with a Product Manager candidate profile by improving the visual system, strengthening resume-based content, hiding incomplete work, and tightening timeline layout details.

High-level changes:

- Changed the section palette to Palette C.
- Changed fonts from Fraunces and Nunito Sans to Lora and Work Sans.
- Temporarily removed Personal Projects from the live navigation while keeping the section code for later.
- Updated content from the latest resume with stronger PM positioning.
- Renamed the experience view to Work Experience for better accuracy.
- Reframed Interests/Hobbies as Product Toolkit.
- Reframed Next Destination as Next Focus.
- Centered the timeline line through the circular timeline markers.

## `content.js`

### What changed

The portfolio content was rewritten using the latest resume as the source:

- Sidebar tagline changed from a broad phrase to a PM-specific positioning line.
- Bio now emphasizes enterprise software, SAP feature launch work, IBM implementation/adoption work, requirements, analytics, and stakeholder communication.
- Education notes were expanded.
- Experience descriptions were rewritten to show PM-relevant behaviors:
  - Discovery and requirements gathering
  - Product specifications
  - Backlog prioritization
  - User stories and acceptance criteria
  - Product analytics dashboards
  - UAT and release readiness
  - Stakeholder communication
- Certifications were added.
- `interests` now stores product toolkit items.
- `nextDestination` now stores a PM learning direction around AI-assisted product workflows.

### Why it matters

`content.js` is the single source of truth for the portfolio. The React components read from this file rather than hardcoding personal details directly inside UI files.

This is important because it separates content from presentation:

- Content changes happen in one predictable place.
- Components stay reusable.
- Future updates are safer because you do not need to hunt through JSX to update resume text.

### Learning note

This is a common frontend pattern: data-driven UI. The component asks, "What should I render?" and the content file answers. This keeps the app easier to maintain as the portfolio grows.

## `src/sections/sectionData.js`

### What changed

The navigation list changed from:

- Personal Info/Background
- Experience/Career Journey
- Personal Projects
- Certifications
- Interests/Hobbies
- Next Destination

To:

- Product Profile
- Work Experience
- Credentials
- Product Toolkit
- Next Focus

Personal Projects was removed from `NAV_ITEMS`, which hides it from the live navigation.

The section colors changed to Palette C:

- `personal`: `#F2E9E1`
- `experience`: `#DCEAF7`
- `projects`: `#F3D9C7`
- `certifications`: `#DFE7D8`
- `interests`: `#E8DDF5`
- `destination`: `#314A6E`

### Why it matters

`NAV_ITEMS` controls which sections users can access from the navigation. Removing `projects` here hides the empty project section without deleting the code.

That means the portfolio can avoid showing unfinished content while still preserving the section for future case studies or personal projects.

### Learning note

This is feature hiding, not feature deletion. A section can exist in the codebase but be temporarily removed from the user-facing navigation. This is useful when a feature is not ready for public viewing but may come back later.

## `tailwind.config.js`

### What changed

The Tailwind theme was updated:

- Old section color tokens were replaced with Palette C.
- Heading font changed from `Fraunces` to `Lora`.
- Body font changed from `Nunito Sans` to `Work Sans`.

### Why it matters

Tailwind config is where the app defines reusable design tokens. By updating colors and font families here, the app can use consistent names like `font-heading`, `font-body`, and section color tokens without repeating raw style decisions everywhere.

### Learning note

Design tokens are reusable style variables. They help keep a design system consistent. Instead of scattering one-off colors and fonts across many files, the app centralizes them so changes are easier and less error-prone.

## `index.html`

### What changed

The Google Fonts import changed from:

- Fraunces
- Nunito Sans

To:

- Lora
- Work Sans

### Why it matters

Changing the Tailwind font config is not enough by itself. The browser also needs to load the actual font files. `index.html` handles that through the Google Fonts link.

### Learning note

There are two sides to custom fonts:

- Load the font in HTML or CSS.
- Reference the font in your styling system.

If one side is missing, the browser falls back to default fonts.

## `src/styles.css`

### What changed

The CSS custom properties for section colors were updated to Palette C.

### Why it matters

The main rendered colors are currently driven through `sectionData.js`, but keeping `styles.css` aligned prevents future confusion. If someone later uses the CSS variables directly, they will match the active palette.

### Learning note

Code consistency matters even when a value is not actively driving the current UI. Stale constants or variables are a maintenance risk because a future developer may assume they are current.

## `src/components/Timeline.jsx`

### What changed

The timeline line used to be created with a left border on the whole list:

```jsx
border-l-2 border-electric-iris
```

The updated version gives each timeline item a dedicated marker column and draws a line segment from one circle center to the next:

```jsx
grid grid-cols-[1rem_1fr] gap-6
left-1/2 top-[0.875rem] -bottom-[0.875rem]
```

The circle marker now lives inside that same 1rem marker column:

```jsx
relative z-10 mt-1.5 h-4 w-4
```

### Why it matters

The old line and circle were close, but not mathematically centered. The new approach gives more control:

- The line sits at the marker column's horizontal center.
- The circle is 1rem wide.
- Each line segment starts at one circle center and ends at the next circle center.

### Learning note

When aligning decorative elements, borders can be limiting because their position is tied to the container edge. A pseudo-element gives you more precise control over position, width, height, and layering.

## `src/sections/PersonalSection.jsx`

### What changed

The section title changed from:

```jsx
Personal Info/Background
```

To:

```jsx
Product Profile
```

The eyebrow changed from `Personal` to `Profile`.

The profile introduction also moved into a wider, fixed-radius content panel, and the avatar now uses `shrink-0` so it stays circular instead of compressing beside longer text.

### Why it matters

This makes the first section feel more intentional for a hiring manager. It shifts the framing from general biography to candidate positioning.

### Learning note

Small copy changes can change how a page is interpreted. In a portfolio, section names are not just labels. They tell the reader what lens to use.

Layout changes carry the same weight. Giving the bio more horizontal room improves scanning, and protecting the avatar size keeps the visual hierarchy stable.

## `src/sections/ExperienceSection.jsx`

### What changed

The section title changed from:

```jsx
Experience/Career Journey
```

To:

```jsx
Work Experience
```

### Why it matters

This keeps the section accurate while still supporting PM hiring. The content describes consulting, product management, analytics, and implementation work, but the section is broader than product-only roles.

### Learning note

Information architecture is part of product thinking. The same content can feel more or less relevant depending on how it is grouped and named.

## `src/sections/InterestsSection.jsx`

### What changed

The section changed from a personal hobbies mood board to a product toolkit section:

- Title changed to `Product Toolkit`.
- Eyebrow changed to `Toolkit`.
- Empty-state copy now asks for product skills and tools.
- Tile icons changed from a generic `*` fallback to a `PM` fallback.
- Icon styling became smaller, bolder, and used the Electric Iris accent.

### Why it matters

Because hobbies and interests were empty, the section was not helping the PM story yet. Reframing it as a toolkit lets the portfolio show concrete PM capabilities from the resume:

- Product Discovery
- Requirements & User Stories
- Backlog Prioritization
- Product Analytics
- UAT & Release Readiness
- Stakeholder Communication
- SQL, Tableau & Dashboards
- Generative AI Workflows

### Learning note

When a section is empty or weak, you do not always need to delete it. Sometimes the better move is to reinterpret its purpose so it serves the user's real goal.

## `src/sections/DestinationSection.jsx`

### What changed

The section changed from travel-style wording to career direction:

- `Next Destination` became `Next Focus`.
- `Next stop:` became `Building toward:`.
- The fallback text now references AI-assisted product workflows.
- The illustration alt text changed from a map/pin description to a product roadmap/destination marker description.
- The map pin fill was updated to match Palette C.

### Why it matters

The old section felt more personal/travel-oriented. The new version still has personality, but it now signals professional curiosity and future-facing PM interests.

### Learning note

Accessibility text should change when the meaning of a visual changes. Even if the SVG shape is similar, the intended concept shifted from travel map to product roadmap, so the `aria-label` needed to shift too.

## What Stayed Intentionally Unchanged

### `src/sections/ProjectsSection.jsx`

This file still exists even though Personal Projects is hidden from the live navigation.

Why:

- The section can be reused later for product case studies or personal projects.
- The code is not broken or removed.
- The public portfolio does not advertise an empty section.

### `projects` in `content.js`

The `projects` array remains empty.

Why:

- We are not inventing projects.
- The section remains available for future real work.

## PM Hiring Perspective

The portfolio now does a better job of positioning Iris as a PM candidate because it highlights:

- Enterprise product implementation experience
- Product discovery and requirements gathering
- User stories and acceptance criteria
- Backlog prioritization
- Product analytics and dashboards
- UAT and release readiness
- Cross-functional stakeholder communication
- AI-enabled workflow interest

The next major improvement should be a case study section. A strong PM portfolio usually needs one or two examples that show:

- The problem
- The users or stakeholders
- The constraints
- The options considered
- The prioritization logic
- The tradeoffs
- The result or learning

## Validation Performed

The following checks were run after the changes:

```bash
npm run build
```

Result: passed.

Additional checks:

- Confirmed old fonts and old palette values were removed from active files.
- Confirmed Personal Projects is no longer present in live navigation.
- Smoke-tested rendered sections locally:
  - Product Profile
  - Work Experience
  - Credentials
  - Product Toolkit
  - Next Focus

## Quick Mental Model

Think of this portfolio as three layers:

1. `content.js`: what the portfolio says.
2. `sectionData.js`, `tailwind.config.js`, `styles.css`, and `index.html`: how the portfolio is themed and organized.
3. Section/component files: how the portfolio renders each view.

The enhancement improved all three layers without deleting future project work.
