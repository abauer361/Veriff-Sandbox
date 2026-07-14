---
name: Genoma Sentinel
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bbcac5'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#86948f'
  outline-variant: '#3c4946'
  surface-tint: '#52dcc3'
  primary: '#52dcc3'
  on-primary: '#00382f'
  primary-container: '#00b19a'
  on-primary-container: '#003c33'
  inverse-primary: '#006b5c'
  secondary: '#78d7c3'
  on-secondary: '#00382f'
  secondary-container: '#007b6a'
  on-secondary-container: '#b3ffed'
  tertiary: '#ffb5a0'
  on-tertiary: '#5f1602'
  tertiary-container: '#eb7f61'
  on-tertiary-container: '#641a05'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72f8df'
  primary-fixed-dim: '#52dcc3'
  on-primary-fixed: '#00201b'
  on-primary-fixed-variant: '#005045'
  secondary-fixed: '#94f4df'
  secondary-fixed-dim: '#78d7c3'
  on-secondary-fixed: '#00201b'
  on-secondary-fixed-variant: '#005045'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#7d2c15'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for a high-trust, secure identity verification environment. The brand personality is **precise, authoritative, and technologically advanced**, ensuring users feel safe while navigating complex security flows.

The aesthetic follows a **Corporate / Modern** style with a focus on functional clarity and technical rigor. It leverages high-contrast color pairings and a systematic approach to hierarchy, utilizing deep dark-mode backgrounds to evoke a sense of digital security and sophistication. The interface is purposefully clean, prioritizing legible information over decorative elements, creating an "expert-grade" experience.

## Colors

This design system strictly adheres to the provided "Genoma" primitive and token structure, optimized for a default **Dark Mode** experience.

- **Brand:** The core identity is anchored by Teal 600 (`#00B19A`) for primary actions and Teal 700 (`#007D6C`) for highlighted states.
- **Surfaces:** We use `gray950` (`#0D0D0D`) for the primary canvas to ensure maximum depth. Elevation is managed through tiered grays: `gray900` for low-profile cards and `gray800` for interactive surfaces.
- **Content:** Information hierarchy is strictly enforced through grayscale levels. `white` is reserved for the most critical data (`strongest`), `gray300`/`gray400` for primary text (`stronger`), and `gray500` for secondary descriptions (`strong`).
- **Functional:** Semantic colors for Success, Warning, and Error use the 600-series primitives (Green, Orange, Red) to maintain visual consistency with the brand weight.

## Typography

The typography system utilizes **Inter** for its neutral, systematic, and highly legible characteristics. It is designed to handle dense technical data while maintaining an approachable feel.

For larger headlines, tight letter-spacing is applied to maintain visual impact. Body text utilizes standard tracking to ensure high readability during multi-step verification processes. A monospaced font (JetBrains Mono) is introduced for technical strings such as ID numbers, hashes, or developer-facing data to reinforce the "high-tech" narrative.

## Layout & Spacing

The design system employs a **4px baseline grid** to ensure mathematical consistency across all components.

- **Grid System:** A 12-column fluid grid is used for desktop layouts, transitioning to a 4-column grid for mobile.
- **Margins & Gutters:** Large 24px gutters ensure breathing room between technical data points. Side margins scale from 16px on mobile to a maximum of 64px on ultra-wide displays to maintain focus.
- **Density:** The spacing is "Comfortable" for consumer-facing identity checks but can be compressed to "Compact" for administrative verification dashboards.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layering** rather than traditional soft shadows. This aligns with the "Genoma" logic of background tokens.

- **Level 0 (Base):** `gray950` — The main canvas.
- **Level 1 (Cards/Sections):** `gray900` — Used for primary containers.
- **Level 2 (Modals/Popovers):** `gray800` — Elevated elements that sit above the main UI.
- **Outlines:** To maintain a "secure" and "structured" look, surfaces are defined by subtle borders (`borderLow` / `gray800`) instead of heavy shadows. 
- **Active States:** High-intensity teal glows are used sparingly to indicate active focus or successful completion.

## Shapes

The shape language is **Soft (0.25rem/4px)**. This radius provides a modern, refined feel without appearing overly "bubbly" or "playful," which would detract from the serious nature of identity verification.

- **Components:** Buttons and input fields use a 4px radius.
- **Large Containers:** Cards and modals use a `rounded-lg` (8px) radius to distinguish them from smaller UI elements.
- **Exceptions:** Status indicators (Chips) may use "Pill" shapes to distinguish them as non-interactive status markers.

## Components

- **Buttons:** 
  - *Primary:* `brand600` background with `white` text. 
  - *Hover:* `stateBrandHover` (`teal400`).
  - *Active:* `stateBrandActive` (`teal500`).
- **Input Fields:** 
  - Background `gray900`, border `gray800`. 
  - Focus state uses a `borderBrand` (`teal500`) and a subtle `outline` (`blue500`) to ensure accessibility.
- **Chips:** Used for verification status. 
  - "Verified" uses `backgroundPositiveWeak` with `contentPositive`.
  - "Pending" uses `backgroundCautionWeak` with `contentCaution`.
- **Cards:** 
  - Background `backgroundElevationLow` (`gray900`), border `borderLow` (`gray800`).
- **Identity Lists:** Used for displaying user attributes. High-contrast labels (`gray500`) paired with `contentStrongest` (`white`) values for maximum scanability.