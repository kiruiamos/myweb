---
name: Modern Technical Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4d5f7d'
  primary: '#000615'
  on-primary: '#ffffff'
  primary-container: '#0b1f3a'
  on-primary-container: '#7587a7'
  inverse-primary: '#b5c7ea'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#000807'
  on-tertiary: '#ffffff'
  tertiary-container: '#002421'
  on-tertiary-container: '#3b948c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b5c7ea'
  on-primary-fixed: '#071c36'
  on-primary-fixed-variant: '#364764'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#9cf2e8'
  tertiary-fixed-dim: '#80d5cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#00504a'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.75rem
    fontWeight: '800'
    lineHeight: 4.25rem
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '800'
    lineHeight: 3rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
  code:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.5rem
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a high-trust, engineering-led aesthetic balanced with approachable warmth for an independent digital engineer and consultant. The visual language bridges corporate software reliability and fresh independent craft.

- **Brand Personality**: Rigorous, transparent, innovative, and human. The interface presents technical mastery without intimidating jargon or visual friction.
- **Target Audience**: Global tech founders, regional enterprises, remote design and engineering teams, and collaborative product leaders seeking full-stack execution and design-grade fidelity.
- **Design Philosophy**: Modern technical minimalism elevated by refined soft-surface depth, crisp geometry, and energetic cyan/teal highlights that convey precision, clarity, and modern digital expertise.

## Colors

The palette establishes an authoritative base of deep nautical navy (#0B1F3A), sharpened with vivid digital teal (#14B8A6) and anchored by calm neutral slates.

### Functional Roles
- **Primary (`#0B1F3A`)**: Used for authoritative titles, high-emphasis branding elements, solid primary CTAs, and structural navigational headers.
- **Secondary (`#14B8A6`)**: Used for key interactive highlights, status accents, availability tags, focus rings, and code syntax markers.
- **Tertiary (`#0F766E`)**: A deep shade of teal engineered for high-contrast accessibility on light surfaces, active click states, and secondary links.
- **Neutral (`#64748B`)**: Body text secondary metadata, structural rules, and neutral iconography.
- **Canvas & Surface Architecture**:
  - Base Canvas: `#F8FAFC` (Slate 50) delivers warmth and eliminates harsh monitor glare.
  - Card & Container Surface: `#FFFFFF` (Pure White) creates crisp elevated layering.
  - Subtle Muted Layer: `#F1F5F9` (Slate 100) provides structure for code insets, stat metrics, and table backgrounds.
  - Neutral Borders: `#E2E8F0` (Slate 200) creates precise, soft containment lines.

## Typography

The typographic hierarchy pairs the friendly, forward-looking geometric personality of Plus Jakarta Sans for displays and headings with the utilitarian legibility of Inter for body text and interface controls.

### Implementation Guidelines
- **Headlines**: Set in Plus Jakarta Sans with subtle negative letter-spacing to reinforce precision and structural compactness.
- **Reading Flow**: Body copy maintains generous line heights (`1.625` to `1.75`) to encourage fatigue-free reading across project case studies and technical articles.
- **Code & Tech Specs**: Use JetBrains Mono for commit badges, terminal snippets, API parameters, and technical architecture labels.

## Layout & Spacing

The layout model is built around a mobile-first, 12-column adaptive fluid grid with a maximum content boundary of `1280px` (`80rem`).

### Grid and Rhythm
- **Breakpoints**:
  - `sm`: 640px (Single-column layout, 1rem margins)
  - `md`: 768px (6-column layout, 2rem margins)
  - `lg`: 1024px (12-column layout, 2rem gutters, 3rem margins)
  - `xl`: 1280px (12-column constrained layout)
- **Section Pacing**: Major portfolio sections (Work, Skills, About, Contact) use a minimum vertical separation of `space-xl` multiplied by 2 (`5rem`) to maintain intentional whitespace and visual clarity.
- **Component Padding**: Dense controls (badges, inline pills) utilize `space-xs` to `space-sm`. Interactive cards and dialogue containers strictly employ `space-lg` to `space-xl`.

## Elevation & Depth

This system avoids aggressive, high-opacity drop shadows, opting instead for ambient, multi-stop soft diffusion with subtle cool undertones.

### Layering Hierarchy
- **Level 0 (Flat Canvas)**: `#F8FAFC` base background with zero shadow.
- **Level 1 (Card & Modular Grid)**: Pure white `#FFFFFF` surface accompanied by a hairline border (`1px solid #E2E8F0`) and an ambient shadow: `0 1px 3px 0 rgba(11, 31, 58, 0.04), 0 1px 2px -1px rgba(11, 31, 58, 0.02)`.
- **Level 2 (Hover States & Dropdowns)**: Elevated cards on cursor interaction transition smoothly to: `0 10px 25px -5px rgba(11, 31, 58, 0.08), 0 8px 10px -6px rgba(11, 31, 58, 0.04)`.
- **Level 3 (Modals & Overlays)**: High-altitude elements leverage `0 20px 35px -10px rgba(11, 31, 58, 0.16)`.
- **Glassmorphic Navigation Bar**: The sticky top header uses a backdrop blur filter (`backdrop-blur-md`, 12px) paired with `rgba(248, 250, 252, 0.85)` surface color and a subtle bottom border (`#E2E8F0`).

## Shapes

The interface embraces a friendly yet engineered curvature system (`level 2`), delivering smooth rounded edges that soften technical data.

### Curvature Usage
- **Buttons, Inputs, and Badges**: `0.5rem` (`rounded-md` / standard tokens) for balanced tactile targets.
- **Feature Cards & Project Tiles**: `1rem` (`rounded-lg`) to `1.5rem` (`rounded-xl`) to establish distinct modular containers.
- **Avatar Containers & Hero Highlights**: Nested elements within project previews use `1rem` to preserve concentric inner-outer corner consistency.
- **Status Indicators & Filters**: Fully circular pills (`9999px`) reserved specifically for live availability indicators, skill tags, and categorical filter chips.

## Components

### Buttons
- **Primary CTA**: Deep Navy background (`#0B1F3A`), text white, `0.5rem` radius, padding `0.75rem 1.5rem`. Hover state lifts into a subtle 1px translate-y with background shifting to `#132F54`.
- **Secondary / Accent CTA**: Bright Teal (`#14B8A6`) background, text deep navy (`#0B1F3A`) or white, used exclusively for primary conversion points (e.g., "Hire Amos", "Schedule Call").
- **Outline / Ghost**: 1px solid border (`#E2E8F0`), background transparent, text `#0B1F3A`. Hover brings a soft surface tint (`#F1F5F9`).

### Project Cards
- **Structure**: Multi-layered card featuring an embedded preview image/video container at the top, followed by title, technology stack badges, short problem-solution summary, and inline external/case study links.
- **Interactive State**: Subtly scales border color from `#E2E8F0` to `#14B8A6` on hover while elevating shadow to Level 2.

### Skill & Technology Chips
- **Display**: Inline flex containers with `9999px` pill border radius, rendered with a slate-100 background (`#F1F5F9`), slate-700 text (`#334155`), and an optional mono-spaced dot or brand SVG icon.
- **Active / Filtered**: Bright Teal outline (`#14B8A6`) with soft mint wash background (`rgba(20, 184, 166, 0.1)`).

### Input Fields & Contact Controls
- **Text Inputs & Textareas**: White background, 1px solid `#CBD5E1` border, `0.5rem` rounded corners, padding `0.75rem 1rem`. 
- **Focus State**: Unambiguous focus indicator consisting of a `#14B8A6` border matched with a `0 0 0 3px rgba(20, 184, 166, 0.2)` outer ring.
- **Labels**: Bold, crisp labels set using `label-md` positioned directly above the input with a `0.375rem` gap.

### Status Indicators
- **Availability Beacon**: A pulsing concentric dot component featuring a core `#14B8A6` green-teal dot encircled by an animated ripple, accompanied by the text "Available for Q2/Q3 Projects".

### Code Snippets & Architecture Callouts
- **Terminal Container**: Darkened slate backdrop (`#0B1F3A`) with light syntax highlighting, top bar containing faux window controls (3 dots), and monospace typography for technical credibility.