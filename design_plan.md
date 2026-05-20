# Design Plan — South Delhi Ortho Surgeons Presentation

## Aesthetic Direction
**"Medical Intelligence"** — Dark, precise, data-forward. Feels like a high-end diagnostic dashboard meets a TED-style keynote. Not a startup pitch deck. Not a hospital brochure.

---

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#07080F` | All slide backgrounds |
| Surface | `#111827` | Cards, stat boxes |
| Border | `#1F2937` | Subtle dividers |
| Teal (Primary Accent) | `#00E5C8` | Headlines, callouts, active elements |
| Amber (Warm Accent) | `#F59E0B` | Journey slide, personal beats |
| White | `#FFFFFF` | Primary body text |
| Muted | `#94A3B8` | Secondary text, labels |

---

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display | Space Grotesk | 700–800 | 80–120px |
| Headline | Space Grotesk | 600 | 48–64px |
| Body | Inter | 400–500 | 22–28px |
| Label / Stat | Space Grotesk | 700 | 36–48px |

Both fonts via Google Fonts. No fallback clutter.

---

## Slide-by-Slide Layout

### Slide 1 — Hook
Full-bleed dark. Headline stacked large in white, key numbers (₹25 lakhs, 4 days) in teal. Sub-headline in muted. Speaker name bottom-left in small caps. No images.

### Slide 2 — Landscape
Three stat callout boxes (surface cards) centered. Each: large teal number/stat on top, white label below. Simple, clean, scannable from the back of a room.

### Slide 3 — Opportunity
Left: aspirational bullet list with teal checkmarks. Right: two-stat block (65% / 14%) in large contrast display type. Clean split layout.

### Slide 4 — AI in Theatre
Two-column. Left: company list with teal dot markers. Right: clinical applications with subtle right-border accent. Bridge callout in amber card at bottom.

### Slide 5 — Journey
Three vertical beats stacked left-aligned. Each beat: amber label (Clinician / Strategist / Builder) + white text. Closing thesis quote full-width in teal italic at bottom.

### Slide 6 — Three Tools
Three equal cards side-by-side (surface color). Each card: teal tool name top, white problem/build description, amber one-liner pitch at bottom. "No new hardware. No IT team." banner above the cards in teal.

### Slide 7 — Close
Split: left side has the headline large, sub-headline, and spoken ask. Right side has contact block + QR code placeholder. Clean, no clutter.

---

## Navigation & Animation

- **Transition:** Horizontal slide — translate3d ±6% with fade, 600ms ease-out
- **Within-slide:** Text elements fade up on slide enter (staggered, 80ms delay each)
- **Navigation:** Click right 80% = next, click left 20% = prev. Arrow keys supported.
- **Dot nav:** Bottom center, teal active dot, muted inactive

---

## Dimensions & Tech Stack

- **Canvas:** 1920 × 1080px, scales to viewport via CSS transform
- **HTML + CSS** (no framework) — single self-contained file for GitHub Pages
- **Google Fonts:** Space Grotesk + Inter
- **No external JS libraries**

---

## What Makes This Distinct From Generic AI Decks

1. Dark background reads as "high-end diagnostic" not "dark mode startup"
2. Teal accent is medical without being sterile blue
3. Amber on Journey slide creates warmth — signals human behind the tech
4. Space Grotesk is geometric/modern but has personality — not the usual Montserrat/Raleway that every Indian startup deck uses
5. Large display numbers on Slide 2 and 3 are readable from 10 rows back
