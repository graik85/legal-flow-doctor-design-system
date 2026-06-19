---
name: legal-flow-doctor-design
description: Use this skill to generate well-branded interfaces and assets for Legal Flow Doctor — a modern SaaS for Argentine legal case management (gestión de expedientes). Contains essential design guidelines, color system, typography, spacing tokens, UI components, and a full interactive app UI kit for prototyping or production design work.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

**Quick orientation:**
- `styles.css` — import this to get all tokens (colors, type, spacing, radii, shadows, motion)
- `components/core/` — Button, Badge, Card, Input, Avatar, Select, Tag, StatusPill, Divider (React, loads via `_ds_bundle.js`)
- `assets/` — logo.svg, logo-white.svg, logo-icon.svg
- `ui_kits/app/` — full interactive app prototype (Dashboard, Expedientes, Case Detail)
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand)

**Brand essentials:**
- Primary: Navy `#0F2137` + Teal `#14867A` + Gold `#C9943A`
- Fonts: Playfair Display (display/headings) + DM Sans (body/UI) + JetBrains Mono (code/refs)
- Icons: Lucide icon set, stroke-based, 1.8–2px weight, inline SVG
- Cards: white bg, 1px border, `shadow-sm`, 8px radius, optional teal accent border
- Density: productive/dense — this is a legal power-user tool, not a marketing site

**Product context:**
Legal Flow Doctor is a web-first rebuild of Lex-Doctor (Argentina's leading desktop legal software). Target users: law firms 1–20 attorneys. Core modules: Expedientes (cases), Documentos, Agenda/Vencimientos, Liquidaciones, Reportes, Facturación electrónica (AFIP). Multi-tenant SaaS; role-based access (5 permission levels).

**If creating visual artifacts** (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. Link `styles.css` for tokens, load `_ds_bundle.js` for React components.

**If working on production code**, read `readme.md` for the full design guide and copy token values and component APIs directly.

**If the user invokes this skill without other guidance**, ask them what they want to build or design, ask some questions about the screen/feature/use case, and act as an expert legal-tech product designer who outputs HTML artifacts or production-ready code depending on the need.
