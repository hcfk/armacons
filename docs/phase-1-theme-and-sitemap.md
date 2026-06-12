# Arma Infrastructure Phase 1

This document defines the initial visual theme and sitemap for the new `armacons.com` website.

Source basis:
- English structure and positioning patterns from `https://www.kayaogluinsaat.com.tr/en`
- Adapted for `Arma Infrastructure`
- No local text data used

## 1. Brand Direction

Arma Infrastructure should present itself as a heavy civil and water-infrastructure contractor, not a generic building contractor and not a luxury real-estate brand.

Core tone:
- Engineering-led
- Institutional
- Durable
- Modern
- High-capacity

Keywords:
- Water
- Concrete
- Structure
- Terrain
- Scale
- Delivery
- Reliability

## 2. Visual Theme

Theme name:
- `Industrial Infrastructure`

Design characteristics:
- Full-width project imagery
- Strong horizontal sections
- Large typographic headlines
- Structured content blocks with clear spacing
- Minimal decorative effects
- Controlled motion only where it supports hierarchy
- Technical/statistical highlights integrated into content

Avoid:
- Generic yellow-black contractor templates
- Real-estate luxury styling
- Startup-style gradients and soft cards
- Over-animated sections

## 3. Color System

Primary palette:
- `Deep Navy`: `#10263F`
- `Steel Blue`: `#2E5B7A`
- `Water Blue`: `#3C88B5`
- `Concrete`: `#D6D2C8`
- `Mist`: `#F5F4F1`
- `Graphite`: `#2A2E33`

Accent palette:
- `Copper`: `#B46A3C`

Usage:
- Deep Navy for header, footer, main headings, and strong section anchors
- Water Blue for calls to action, data accents, and active UI states
- Concrete and Mist for backgrounds and separation
- Copper only for restrained highlights, not as a dominant brand color

## 4. Typography

Recommended font pairing:
- Headings: `Barlow Condensed`
- Body: `Manrope`

Why:
- `Barlow Condensed` gives an engineered, infrastructural, compressed feel without looking cheap
- `Manrope` stays clean and modern for dense corporate text

Rules:
- Headlines should be short, firm, and high-contrast
- Body copy should remain readable at medium line lengths
- Avoid decorative serif styling for phase 1

## 5. UI Components

Core UI patterns:
- Sticky transparent-to-solid header
- Large hero with project photography and short positioning copy
- Metric band with 3 to 5 proof points
- Capability grid
- Featured project cards
- Corporate value / policy content blocks
- Contact CTA section
- Structured footer with corporate and capability links

Button styles:
- Primary: navy background, light text
- Secondary: light background, navy border
- Text links: understated, not oversized

Card behavior:
- Mild hover lift or border transition
- No glassmorphism
- No heavy shadows

## 6. Motion

Motion should be minimal and directional:
- Fade and slight upward reveal on section entry
- Stagger only for capability or project grids
- Gentle image scale on hover

Do not use:
- Constant floating effects
- Oversized parallax
- Long, cinematic animations

## 7. Homepage Structure

Recommended homepage sections:

1. Hero
- Strong site statement
- Short supporting paragraph
- Primary CTA to projects or contact
- Secondary CTA to company profile

2. Company Snapshot
- Brief introduction to Arma Infrastructure
- Short proof-led text, not a long history block

3. Capability Areas
- Dams and Hydropower
- Water Conveyance and Irrigation
- Road Infrastructure
- Bridge and Viaduct Structures
- Earthworks and Excavation
- Concrete and Structural Works

4. Featured Projects
- Highlight priority projects with image, location, and key metrics

5. Why Arma
- Delivery discipline
- Engineering capability
- Site execution strength
- Safety and quality approach

6. Corporate Standards
- Mission
- Values
- Environmental approach
- Quality management

7. Contact CTA
- Short form or direct contact block

## 8. Sitemap

This is the recommended phase 1 sitemap, adapted from the Kayaoglu English structure but simplified for a stronger first release.

### Top Navigation

- `Home`
- `Corporate`
- `Projects`
- `Capabilities`
- `Contact`

### Corporate

- `About Arma`
- `Mission & Vision`
- `Values & Principles`
- `Management Message`
- `Environmental Policy`
- `Quality Management`

Optional later:
- `Equipment`
- `Certificates`

### Projects

- `Featured Projects`
- `Completed Projects`
- `Ongoing Projects`

### Capabilities

- `Dams and Hydropower`
- `Water Conveyance and Irrigation`
- `Road Infrastructure`
- `Bridge and Viaduct Structures`
- `Earthworks and Excavation`
- `Concrete and Structural Works`

### Contact

- `Contact`

## 9. Route Structure

Recommended Next.js route structure:

```text
/en
/en/corporate/about
/en/corporate/mission-vision
/en/corporate/values-principles
/en/corporate/management-message
/en/corporate/environmental-policy
/en/corporate/quality-management
/en/projects
/en/projects/completed
/en/projects/ongoing
/en/capabilities
/en/capabilities/dams-hydropower
/en/capabilities/water-conveyance-irrigation
/en/capabilities/road-infrastructure
/en/capabilities/bridge-viaduct-structures
/en/capabilities/earthworks-excavation
/en/capabilities/concrete-structural-works
/en/contact
```

## 10. Phase 1 Content Priorities

Build these first:
- Home
- About Arma
- Mission & Vision
- Values & Principles
- Environmental Policy
- Quality Management
- Projects index
- 2 to 6 initial project pages
- 6 capability pages
- Contact

Defer if needed:
- Career
- Job application
- Certificates gallery
- Equipment page

## 11. Build Decision

Confirmed phase 1 stack:
- `Next.js`
- `TypeScript`
- `Tailwind CSS`
- `JSON-based content model`
- `Static generation where possible`

## 12. Next Step

The next implementation step should be:
- scaffold the Next.js app
- encode this theme into Tailwind tokens
- create the JSON content schema
- create page shells for the sitemap above
