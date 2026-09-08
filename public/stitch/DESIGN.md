---
name: Oh Lalá! Nails
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#4b463f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#7d766e'
  outline-variant: '#cec5bc'
  surface-tint: '#645d55'
  primary: '#645d55'
  on-primary: '#ffffff'
  primary-container: '#f5ebe0'
  on-primary-container: '#706a61'
  inverse-primary: '#cec5bb'
  secondary: '#675d54'
  on-secondary: '#ffffff'
  secondary-container: '#ebddd2'
  on-secondary-container: '#6b6158'
  tertiary: '#6c5a5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffe7e8'
  on-tertiary-container: '#796667'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ebe1d6'
  primary-fixed-dim: '#cec5bb'
  on-primary-fixed: '#1f1b14'
  on-primary-fixed-variant: '#4c463e'
  secondary-fixed: '#eee0d5'
  secondary-fixed-dim: '#d2c4b9'
  on-secondary-fixed: '#211a14'
  on-secondary-fixed-variant: '#4e453d'
  tertiary-fixed: '#f6dddd'
  tertiary-fixed-dim: '#d9c1c2'
  on-tertiary-fixed: '#261819'
  on-tertiary-fixed-variant: '#544344'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The design system embodies a **Minimalist Luxury** aesthetic tailored for a high-end beauty environment. The visual narrative is driven by editorial layouts, expansive whitespace, and a sophisticated tension between soft, organic tones and sharp, structural accents.

The UI should evoke a sense of calm, exclusivity, and meticulous attention to detail, mimicking the experience of a premium nail atelier. Drawing from modern fashion editorial movements, the system prioritizes high-quality photography and generous "breathing room" over dense information clusters.

## Colors
The palette is rooted in a "Warm Nude" spectrum, utilizing tonal layering to create depth without visual noise.

- **Primary (#F5EBE0):** A warm cream used for the main background surfaces to provide a soft, inviting foundation.
- **Secondary (#E3D5CA):** A deeper nude used for subtle depth, secondary containers, and soft dividers.
- **Tertiary (#D5BDBE):** A dusty blush reserved for delicate accents, hover states, or subtle highlights.
- **Neutral (#1A1A1A):** A sharp, deep charcoal used for typography, borders, and high-contrast call-to-action elements. This provides the "Editorial" edge against the soft base.

## Typography
Typography is the primary vehicle for the brand’s luxury positioning. We use a high-contrast Serif for headlines to convey heritage and elegance, paired with a geometric Sans-Serif for functional clarity.

- **Headlines:** Use Playfair Display. Headlines should favor a tighter line-height to create a "block" editorial feel.
- **Body:** Use Montserrat. Increased line-height (1.6) is essential to maintain the spacious, premium feel.
- **Labels:** Small caps with generous letter spacing (15%) should be used for categorizing content or navigation items to provide a structured, professional rhythm.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop to maintain editorial control over image placement, transitioning to a fluid model for mobile.

- **The 8px Rule:** All spacing increments must be multiples of 8.
- **Section Breathing:** Vertical spacing between major sections (e.g., Hero to Services) should be aggressive (120px+) to emphasize the luxury of space.
- **Desktop Grid:** A 12-column grid with 24px gutters. Elements should often be offset (e.g., spanning columns 2 through 10) to create a centered, gallery-style focus.
- **Mobile:** Scale margins down to 20px and use a single-column stack, ensuring image containers maintain a minimum aspect ratio of 4:5 for an editorial look.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Soft Ambient Shadows** rather than traditional elevation.

- **Surface Tiers:** Use the Primary color (#F5EBE0) for the page background and the Secondary color (#E3D5CA) for inset sections or secondary cards.
- **Shadows:** Only one shadow type is permitted: the "Luxe Glow." This is an extremely diffused shadow: `0px 20px 40px rgba(26, 26, 26, 0.04)`. It should feel like a soft light source hitting the UI, not a floating element.
- **Outlines:** Use 1px solid Neutral (#1A1A1A) borders for high-impact elements like primary buttons or image frames to provide "anchor points" in the soft layout.

## Shapes
The shape language is **Soft (0.25rem)**. While the brand is modern, sharp corners can feel aggressive. A subtle rounding provides a "finished" and manicured feel, aligning with the beauty industry.

- **Small elements (Buttons, Inputs):** 4px (0.25rem) radius.
- **Large elements (Cards, Image Containers):** 8px (0.5rem) radius.
- **Iconography:** Use light-weight, stroke-based icons with square terminals to maintain the sharp, high-contrast look of the typography.

## Components
- **Buttons:** 
  - *Primary:* Solid Neutral background (#1A1A1A) with white text. No radius (sharp) or very minimal 2px. High contrast is key.
  - *Secondary:* 1px Neutral border, transparent background, uppercase label-caps typography.
- **Cards:** Use the "Luxe Glow" shadow. Cards should have no border, or a very faint Secondary (#E3D5CA) border.
- **Inputs:** Underline-only style or very thin Neutral borders. Focus states should shift the border to 1.5px Neutral.
- **Image Containers:** Always use a subtle 1px border (#E3D5CA) to frame editorial photography.
- **Chips/Status:** Use the Tertiary (#D5BDBE) blush color with low opacity backgrounds and Neutral text.
- **Booking Calendar:** A clean, minimalist grid with plenty of padding, using the Neutral color for selected dates and the Tertiary color for available slots.