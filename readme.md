# Legal Flow Doctor — Design System

**Version:** 1.0.0 · **Last updated:** June 2026

Legal Flow Doctor is a modern web-first SaaS for legal case management ("gestión de expedientes"), targeting Argentine law firms, legal departments, and prosecutors (1–20 attorneys). It is a ground-up rebuild of desktop-era legal software (inspired by Lex-Doctor, Argentina's leading practice management tool) into a multi-tenant, browser-native product.

**Sources used to build this design system:**
- Company brand: Legal Flow Doctor (no prior design system — built from scratch)
- Product reference: Lex-Doctor (lex-doctor.com) + playlist of 16 official tutorial videos
- YouTube playlist: https://www.youtube.com/playlist?list=PL97I090YDX8c-_MubzqPvfP6gw6Um2Gcy
- No Figma file or codebase was provided. The system is based on product analysis and category conventions.

---

## Products

| Product | Description |
|---------|-------------|
| **App (Web)** | Main SaaS — full-screen case management interface for attorneys and staff |
| **Client Portal** | Read-only view for clients to check their matter status (not yet prototyped) |
| **Mobile Companion** | PWA/native for agenda alerts and document capture (not yet prototyped) |

---

## File Index

```
styles.css                   ← Global CSS entry point (import this one file)
tokens/
  colors.css                 ← Full color system (navy, teal, gold, neutrals, semantic)
  typography.css             ← Font imports + type scale + semantic roles
  spacing.css                ← 4px-grid spacing scale + semantic aliases
  radii.css                  ← Border radius scale + semantic roles
  shadows.css                ← Navy-tinted shadow scale + focus rings
  motion.css                 ← Duration + easing tokens
assets/
  logo.svg                   ← Full wordmark (dark background)
  logo-white.svg             ← Full wordmark (light/white background)
  logo-icon.svg              ← Icon mark only (40×40)
components/core/
  Button.jsx / .d.ts         ← Primary action element (6 variants, 3 sizes)
  Badge.jsx / .d.ts          ← Compact status label (9 color variants)
  Card.jsx / .d.ts           ← Surface container (5 variants, accent borders)
  Input.jsx / .d.ts          ← Text input with label, states, prefix/suffix
  Select.jsx / .d.ts         ← Dropdown select
  Avatar.jsx / .d.ts         ← User avatar with initials fallback + presence
  Tag.jsx / .d.ts            ← Matter category label (8 colors, removable)
  StatusPill.jsx / .d.ts     ← Case status display (7 states)
  Divider.jsx / .d.ts        ← Horizontal/vertical separator with optional label
  core.card.html             ← @dsCard: all core components
guidelines/
  colors-primary.card.html   ← Navy + Teal scales
  colors-neutral.card.html   ← Gray + Gold scales
  colors-semantic.card.html  ← Status colors + case status pills
  colors-aliases.card.html   ← Semantic role aliases (fg/bg/border/surface)
  type-display.card.html     ← Playfair Display specimens
  type-body.card.html        ← DM Sans specimens
  type-mono.card.html        ← JetBrains Mono — citations, document refs
  spacing.card.html          ← Spacing scale + semantic roles
  radii.card.html            ← Border radius scale
  shadows.card.html          ← Shadow scale + focus ring
  motion.card.html           ← Duration + easing token reference
  brand-logo.card.html       ← Logo lockup variants
ui_kits/app/
  index.html                 ← Interactive app prototype (Dashboard → Cases → Detail)
  data.js                    ← Mock expediente data
  Sidebar.jsx                ← Nav sidebar
  Dashboard.jsx              ← Dashboard view
  CaseList.jsx               ← Expedientes list with search + filter
  CaseDetail.jsx             ← Case detail (tabs: General/Docs/Parties/History/Agenda)
  App.jsx                    ← App shell + routing state
readme.md                    ← This file
SKILL.md                     ← Agent skill descriptor
```

---

## CONTENT FUNDAMENTALS

### Voice & Tone
Legal Flow Doctor communicates like a trusted senior partner: **precise, direct, and calm**. The product never dramatizes or adds alarm where none is needed. Copy is written in plain professional English, with Spanish used only for proper Argentine legal nouns (expediente, carátula, fuero, etc.).

- **First person:** "Your matters" / "We've flagged" — the product speaks as a collaborator
- **Casing:** Sentence case everywhere. No title case in body copy or UI labels. Navigation items and section headers use sentence case (e.g., "Case overview", not "Case Overview"). Exception: proper nouns and UI shorthand like "AFIP", "CUIT"
- **Emoji:** Never. Legal professionals expect gravity; emoji undermine trust
- **Tone spectrum:** Friendly but professional — closer to a well-organized colleague than a cheerful app
- **Urgency:** Urgency is conveyed through color and placement (red badge, top of agenda), never through exclamation points or all-caps text
- **Numbers:** Argentine peso amounts use `$` prefix + period thousands separator (e.g., `$1.200.000`). USD uses `USD` prefix. Always specify currency when mixing
- **Dates:** ISO-adjacent `YYYY-MM-DD` in data display; "Jun 19, 2026" in human-readable contexts; "tomorrow", "3 days ago" for recency
- **Legal terms:** Kept in Spanish when they have no clean English equivalent — expediente, carátula, fuero, juzgado, secretaría, procurador. Always italicized in prose, plain in UI labels

### Specific examples
| Context | ✅ Do | ❌ Don't |
|---------|-------|---------|
| Empty state | "No matters match your filters." | "Oops! Nothing here 🙈" |
| Action button | "File document" | "Submit!" |
| Error | "This field is required." | "Whoops, you forgot something!" |
| Status | "In review" | "UNDER REVIEW ⚠️" |
| Deadline | "Filing due tomorrow" | "URGENT: deadline in 24h!!!" |

---

## VISUAL FOUNDATIONS

### Color
The palette is built around two brand colors:

- **Navy `#0F2137`** — authority, trust, depth. Used as sidebar background, primary text, and emphasis surfaces. Evokes traditional legal gravitas updated for digital.
- **Teal `#14867A`** — the "flow + health" accent. Used for CTAs, active states, focus rings, links, and key interactions. A deliberate departure from the cliché blue of enterprise software.
- **Gold `#C9943A`** — premium accent for high-value matters, legal awards, court gold. Used sparingly for emphasis (never as a primary action color).

Backgrounds stay warm-white (`#FAFAF8`) or cool-gray (`#F5F7FA`). No dark mode in v1; surfaces are always light.

### Typography
- **Playfair Display** (serif): All headings, display text, the "Legal Flow" part of the wordmark. Signals intellectual authority and legal tradition. Used at `font-weight: 600` or `700`.
- **DM Sans** (sans-serif): All body copy, UI labels, navigation, table data, form elements. Clean and highly readable — essential for data-dense legal interfaces.
- **JetBrains Mono** (monospace): Case reference numbers (`LFD-2024-0091`), clause IDs (`§ 14(b)(iii)`), CUIT codes, amounts in tables, code-like document identifiers. Never for body text.

> **Substitution note:** Google Fonts CDN is used for all three families. If custom licensing is required, supply `.woff2` files and update `@font-face` in `tokens/typography.css`.

### Spacing
4px base grid. All component internals use multiples of 4. Page padding is 32px horizontal, 24px vertical. Cards use 24px × 20px internal padding.

### Cards & Surfaces
Cards have:
- 1px `var(--border-default)` border (`#D5D9E0`)
- `var(--shadow-sm)` shadow (navy-tinted, very subtle)
- `8px` border radius
- White background on light-gray page canvas
- Optional accent left border (3px solid teal, gold, danger, or navy)
- Hover lift: `translateY(-1px)` + `shadow-md` (opt-in via `hover` prop)

No cards with colored left-border-only as main decoration. The accent border is supplementary to a full bordered card.

### Shadows
All shadows use `rgba(15, 33, 55, …)` — the navy brand color — at low opacity. This gives shadows a warm undertone instead of generic black-based shadows. Focus rings use teal: `0 0 0 3px rgba(20, 134, 122, 0.25)`.

### Iconography
Stroke-based icons, 1.8–2px stroke weight, consistent with the Lucide icon set style (available via CDN: `https://unpkg.com/lucide@latest`). No filled icons, no icon fonts, no emoji substitutions for icons. All icons in the UI kit are inline SVGs drawn to the Lucide spec.

### Hover & Press states
- **Buttons:** `fast` (100ms) color transition. Primary darkens by one step (teal-600 → teal-700). Secondary/ghost gains a light background tint.
- **Table rows:** teal-50 tint on hover, no scale
- **Cards (hover=true):** `translateY(-1px)` + shadow-md, 300ms ease-out
- **Links:** Color shift (teal-700 → teal-600), underline always present with `text-underline-offset: 2px`
- **Nav items:** Instant background fill (rgba teal), color shifts to full white

### Layout
- Fixed-width navy sidebar: 220px
- Main content: fluid, scrollable
- Header bars: fixed, white, `border-bottom: 1px solid var(--border-muted)`
- Tables: full width within a card, with alternating row background (white / `#FAFBFC`)
- Grid: CSS Grid throughout, no Bootstrap or float-based layouts
- Dense by default — this is a power-user legal tool, not a marketing site

### Animation
Minimal. `duration-fast` (100ms) for color transitions. `duration-slow` (300ms) for card lifts and sidebar transitions. No decorative animations. No infinite loops on content. `prefers-reduced-motion` respected implicitly by using short, purposeful transitions only.

### Corner radius
- Buttons, inputs, selects: 6px (`--radius-md`)
- Cards, panels: 8px (`--radius-lg`)
- Dialogs, modals: 12px (`--radius-xl`)
- Badges, pills: 9999px (`--radius-full`)
- Tags: 4px (`--radius-sm`)

### Imagery & Backgrounds
No background images, gradients, or textures in v1. All surfaces are solid colors from the token system. Document previews use a dark navy (`#040C18`) code-block style for monospace content. No hand-drawn illustrations.

### Transparency & Blur
Sidebar uses `rgba(255,255,255,0.07)` for hover states — subtle frosted-panel feel without `backdrop-filter`. No blur effects in v1.

---

## ICONOGRAPHY

Lucide icon set (MIT license), loaded as inline SVGs. Stroke weight: `1.8px` in nav sidebar, `2px` in content areas, `2.5px` for micro-icons (small button icons). No filled variants.

**Usage pattern:**
```html
<!-- CDN (no build step) -->
<script src="https://unpkg.com/lucide@latest"></script>
<!-- or inline SVG, which is preferred for performance: -->
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">…</svg>
```

**No icon font.** No emoji used as icons. No PNG icons. No SVGs for illustrations (none in this design system — use photography or leave blank with placeholder).

**Key icons in use:**
- Navigation: grid (dashboard), file-text (cases), calendar (agenda), folder (documents), dollar-sign (liquidaciones), bar-chart (reportes), check-square (facturación)
- Actions: plus, edit-2, download, upload, search, filter, trash-2, more-horizontal
- Status: alert-triangle (urgent), check-circle (active/success), clock (pending), x-circle (error)

---

## COMPONENTS

All components are in `components/core/`. They are plain React function components with no external dependencies beyond React itself and the CSS custom properties from `styles.css`.

**Load via the bundle:**
```html
<script src="path/to/_ds_bundle.js"></script>
<script>
  const { Button, Badge, Card, Input, Avatar, Select, Tag, StatusPill, Divider }
    = window.LegalFlowDoctorDesignSystem_fa7d52;
</script>
```

See `components/core/core.card.html` in the Design System tab for a live, interactive reference of all components and their variants.

---

## UI KIT — App

`ui_kits/app/index.html` — interactive prototype of the main SaaS application.

**Prototyped screens:**
1. **Dashboard** — stats (total matters, active, urgent, pending signatures), today's agenda, recent expedientes table
2. **Expedientes (Case List)** — filterable/searchable table of all cases with status summary bar
3. **Case Detail** — 5-tab detail view: General, Documents, Parties, History, Agenda

**Not yet prototyped** (placeholder screens): Agenda calendar, Documentos, Liquidaciones, Reportes, Facturación, Usuarios, Configuración.

**Mock data:** `ui_kits/app/data.js` contains 10 realistic Argentine legal cases, today's events, history timeline, document list, and party records.

---

## CAVEATS & OPEN QUESTIONS

1. **No real brand assets provided.** Logo is a bespoke SVG created for this system. If the actual Legal Flow Doctor wordmark/logomark exists, replace `assets/logo*.svg`.
2. **Google Fonts substitution.** Playfair Display, DM Sans, and JetBrains Mono are served via Google Fonts CDN. For production, self-host `.woff2` files and update `@font-face` declarations in `tokens/typography.css`.
3. **Color scheme choice.** The original Lex-Doctor uses dark red + black. Legal Flow Doctor's design here uses navy + teal for a more modern, trustworthy feel. If the brand mandates bordeaux/red, the primary pivot is straightforward — update `--color-teal-*` variables to a red/bordeaux scale.
4. **Argentine legal specifics.** Data labels (carátula, fuero, CUIT, AFIP) are in Spanish. UI chrome is in English. Consider a full Spanish-language variant if the target market demands it.
5. **Dark mode.** Not designed. Sidebar uses a dark navy surface as a deliberate accent, not a global dark mode.
